import { DomSanitizer } from '@angular/platform-browser';
import { Component, OnDestroy, Renderer, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import * as Stomp from 'stompjs';
import * as SockJS from 'sockjs-client';
import * as $ from 'jquery';
import { Message } from 'primeng/api';
import { environment } from 'environments/environment';
import { WebSocketService } from './common/service/web-socket.service';
import { ApiService } from './common/service/api/api.service';
import { NoticeBoard } from './common/model/system/noticeboard';
import { UrlinterceptorService } from './guards/urlinterceptor.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy, OnInit {

    msgs: Message[] = [];

    menuClick: boolean;

    menuButtonClick: boolean;

    topbarMenuButtonClick: boolean;

    topbarMenuClick: boolean;

    topbarMenuActive: boolean;

    activeTopbarItem: Element;

    layoutMode = 'static';

    sidebarActive: boolean;

    mobileMenuActive: boolean;

    darkMenu: boolean;

    isRTL: boolean;

    rippleInitListener: any;

    rippleMouseDownListener: any;

    menuHoverActive: boolean;

    resetMenu: boolean;

    private timer; // 页面自动切换计时器

    currentIp: string;

    urlList:String[];

    notifyMsgs: Message[];
    headerSideMenuFlag = false;
    receiveNotify(msg) {
        this.notifyMsgs = [];
        const formatMsg = {
            severity: msg.level,
            summary: msg.title,
            detail: msg.content
        };
        this.notifyMsgs.push(formatMsg);
    }

    socket: any;

    clearNotify() {
        this.notifyMsgs = [];
    }

    // websocket

    currentUserName = localStorage.getItem('currentUserName');


    noticeboardMsg: Message[] = [];

    constructor(
        public renderer: Renderer,
        public zone: NgZone,
        private router: Router,
        public translate: TranslateService,
        private sanitizer: DomSanitizer,
        private websocket: WebSocketService,
        private httpService: ApiService,
        private urlInterceptor:UrlinterceptorService
    ) {
        window.localStorage.setItem('index', '0');

        this.urlList = this.urlInterceptor.RouterLinks;
        this.socket = this.websocket.NoticeBoardConnection();
        let that = this;
        this.socket.onopen = function (event) {
            const MessageContent = {
                messagetype: 1
            };
            that.socket.send(JSON.stringify(MessageContent));
        };

        this.socket.onmessage = (event) => {
            const receiveData = JSON.parse(event.data);
            const messageType = receiveData.messagetype;
            switch (messageType[0]) {
                case 1:
                    console.log(receiveData.messagedetail[0]);
                    break;
                case 2:
                    const subject = receiveData.subject[0];
                    const messagedetail = receiveData.messagedetail[0];
                    that.showMessage('info', subject, messagedetail);
                    break;
                default:
                    break;
            }
        };

        translate.setDefaultLang('en');
        translate.use(localStorage.getItem('language'));

        const _layoutMode = window.localStorage.getItem('projectLayoutMode');
        // console.log('_layoutMode : ',_layoutMode);
        if (_layoutMode != null) {
            this.layoutMode = _layoutMode;
        }

        const _darkMenu = window.localStorage.getItem('projectDarkMenu');
        if (_darkMenu != null) {
            if (_darkMenu === 'true') {
                this.darkMenu = true;
            } else {
                this.darkMenu = false;
            }
        }
        const _isRTL = window.localStorage.getItem('projectIsRTL');
        if (_isRTL != null) {
            if (_isRTL === 'true') {
                this.isRTL = true;
            } else {
                this.isRTL = false;
            }
        }
        const _playTheme = window.localStorage.getItem('projectTheme');
        if (_playTheme != null) {
            this.changeTheme(_playTheme);
        }

        const _playLayout = window.localStorage.getItem('projectLayout');
        if (_playLayout != null) {
            this.changeLayout(_playLayout);
        }

        this.getLatestNotice();

        // 页面自动切换
        /*           const urls: string[] = ['#/boe/mes-ui/type3','#/boe/mes-ui/type2','#/boe/mes-ui/type1','#/boe/report-ui/type1'];
                  let inturl: number = 0;
                  this.timer =  setInterval(() => {
                    if(inturl < urls.length-1){
                        inturl ++;
                    }else {
                        inturl = 0;
                    }
                    window.location.href = urls[inturl];
                }, 5000); */
    }

    changeTheme(theme) {
        // console.log('call!! changeTheme app.component ~~~~~~~~~~~~~~')
        const themeLink: HTMLLinkElement = <HTMLLinkElement>document.getElementById('theme-css');
        themeLink.href = 'assets/theme/theme-' + theme + '.css';
        window.localStorage.setItem('projectTheme', theme);
    }

    changeLayout(theme) {
        // console.log('call!! changeLayout app.component ~~~~~~~~~~~~~~')
        const layoutLink: HTMLLinkElement = <HTMLLinkElement>document.getElementById('layout-css');
        layoutLink.href = 'assets/layout/css/layout-' + theme + '.css';
        window.localStorage.setItem('projectLayout', theme);
    }

    ngOnInit() {
        const screenWidth: number = screen.width;
        let deviceType;
        if (screenWidth < 641) {
            deviceType = 'phone';
        } else if (screenWidth < 1025 && screenWidth > 640) {
            deviceType = 'pad';
        } else if (screenWidth < 1441 && screenWidth > 1024) {
            deviceType = 'monitor';
        } else if (screenWidth > 1440) {
            deviceType = 'tv';
        }
        localStorage.setItem('deviceType', deviceType);
        this.zone.runOutsideAngular(() => { this.bindRipple(); });
        // this.router.navigate(['/guide']);
    }

    bindRipple() {
        this.rippleInitListener = this.init.bind(this);
        document.addEventListener('DOMContentLoaded', this.rippleInitListener);
    }

    init() {
        this.rippleMouseDownListener = this.rippleMouseDown.bind(this);
        document.addEventListener('mousedown', this.rippleMouseDownListener, false);
    }

    rippleMouseDown(e) {
        for (let target = e.target; target && target !== this; target = target['parentNode']) {
            if (!this.isVisible(target)) {
                continue;
            }

            // Element.matches() -> https://developer.mozilla.org/en-US/docs/Web/API/Element/matches
            if (this.selectorMatches(target, '.ripplelink, .ui-button')) {
                const element = target;
                this.rippleEffect(element, e);
                break;
            }
        }
    }

    selectorMatches(el, selector) {
        const p = Element.prototype;
        const f = p['matches'] || p['webkitMatchesSelector'] || p['mozMatchesSelector'] || p['msMatchesSelector'] || function (s) {
            return [].indexOf.call(document.querySelectorAll(s), this) !== -1;
        };
        return f.call(el, selector);
    }

    isVisible(el) {
        return !!(el.offsetWidth || el.offsetHeight);
    }

    rippleEffect(element, e) {
        if (element.querySelector('.ink') === null) {
            const inkEl = document.createElement('span');
            this.addClass(inkEl, 'ink');

            if (this.hasClass(element, 'ripplelink') && element.querySelector('span')) {
                element.querySelector('span').insertAdjacentHTML('afterend', '<span class=\'ink\'></span>');
            } else {
                element.appendChild(inkEl);
            }
        }

        const ink = element.querySelector('.ink');
        this.removeClass(ink, 'ripple-animate');

        if (!ink.offsetHeight && !ink.offsetWidth) {
            const d = Math.max(element.offsetWidth, element.offsetHeight);
            ink.style.height = d + 'px';
            ink.style.width = d + 'px';
        }

        const x = e.pageX - this.getOffset(element).left - (ink.offsetWidth / 2);
        const y = e.pageY - this.getOffset(element).top - (ink.offsetHeight / 2);

        ink.style.top = y + 'px';
        ink.style.left = x + 'px';
        ink.style.pointerEvents = 'none';
        this.addClass(ink, 'ripple-animate');
    }

    hasClass(element, className) {
        if (element.classList) {
            return element.classList.contains(className);
        } else {
            return new RegExp('(^| )' + className + '( |$)', 'gi').test(element.className);
        }
    }

    addClass(element, className) {
        if (element.classList) {
            element.classList.add(className);
        } else {
            element.className += ' ' + className;
        }
    }

    removeClass(element, className) {
        if (element.classList) {
            element.classList.remove(className);
        } else {
            element.className = element.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
        }
    }

    getOffset(el) {
        const rect = el.getBoundingClientRect();

        return {
            top: rect.top + (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0),
            left: rect.left + (window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0),
        };
    }

    unbindRipple() {
        if (this.rippleInitListener) {
            document.removeEventListener('DOMContentLoaded', this.rippleInitListener);
        }
        if (this.rippleMouseDownListener) {
            document.removeEventListener('mousedown', this.rippleMouseDownListener);
        }
    }

    ngOnDestroy() {
        this.unbindRipple();
    }

    onWrapperClick() {
        if (!this.menuClick && !this.menuButtonClick) {
            this.mobileMenuActive = false;
        }

        if (!this.topbarMenuClick && !this.topbarMenuButtonClick) {
            this.topbarMenuActive = false;
            this.activeTopbarItem = null;
        }

        if (!this.menuClick) {
            if (this.isHorizontal() || this.isOverlay()) {
                this.resetMenu = true;
            }

            this.menuHoverActive = false;
        }


        this.menuClick = false;
        this.menuButtonClick = false;
        this.topbarMenuClick = false;
        this.topbarMenuButtonClick = false;
    }

    onMenuButtonClick(event: Event) {
        this.menuButtonClick = true;

        if (this.isMobile()) {
            this.mobileMenuActive = !this.mobileMenuActive;
        }

        event.preventDefault();
    }

    onTopbarMobileMenuButtonClick(event: Event) {
        this.topbarMenuButtonClick = true;
        this.topbarMenuActive = !this.topbarMenuActive;
        event.preventDefault();
    }

    // onTopbarRootItemClick(event: Event, item: Element) {
    //     if (this.activeTopbarItem === item) {
    //         this.activeTopbarItem = null; } else {
    //         this.activeTopbarItem = item; }

    //     event.preventDefault();
    // }
    headerSideMenuClick() {
        this.headerSideMenuFlag = true;
    }
    onTopbarRootItemClick(event: Event, item: Element) {
        if (this.activeTopbarItem == null) {
            this.activeTopbarItem = item;
        } else {
            if (!this.headerSideMenuFlag) {
                this.activeTopbarItem = null;
            }
            this.headerSideMenuFlag = false;
        }

        // if (this.activeTopbarItem != item) {
        //     this.activeTopbarItem = null;
        // } else {
        //     this.activeTopbarItem = item;
        // }

        // event stop!
        // event.preventDefault();
    }
    onTestClose() {

        this.activeTopbarItem = null;
        event.preventDefault();
        // console.log('onTestClose this.activeTopbarItem',this.activeTopbarItem);
    }
    onTopbarMenuClick(event: Event) {
        this.topbarMenuClick = true;
    }

    onSidebarClick(event: Event) {
        this.menuClick = true;
        this.resetMenu = false;
    }

    onToggleMenuClick(event: Event) {
        this.layoutMode = this.layoutMode !== 'static' ? 'static' : 'overlay';
        const el = document.getElementById('main-logo');
        if (this.layoutMode === 'static') {
            el.setAttribute('src', 'assets/layout/images/company-logo.png');
        } else {
            el.setAttribute('src', 'assets/layout/images/b7.png');
        }
        event.preventDefault();
    }

    isMobile() {
        return window.innerWidth <= 1024;
    }

    isTablet() {
        const width = window.innerWidth;
        return width <= 1024 && width > 640;
    }

    isHorizontal() {
        return this.layoutMode === 'horizontal';
    }

    isOverlay() {
        return this.layoutMode === 'overlay';
    }

    getLatestNotice() {
        const options = {
            params: { userName: this.currentUserName }
        };
        this.httpService.get('/noticeboard/getLatestNotice', options).subscribe(
            (res) => {
                const notice = <NoticeBoard>res;
                if (notice != null) {
                    this.showMessage('info', notice.subject, notice.messagedetail);
                }
            },
            (error) => { console.log(error); }
        );
    }

    showMessage(severity: string, summary: string, detail: string) {
        this.noticeboardMsg = [];
        this.noticeboardMsg.push({ severity: severity, summary: summary, detail: detail });
    }
}
