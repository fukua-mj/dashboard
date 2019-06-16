webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"app/boe-ui/boe-ui.module": [
		"./src/app/boe-ui/boe-ui.module.ts",
		"common",
		"boe-ui.module"
	],
	"app/boe/pages/pages.module": [
		"./src/app/boe/pages/pages.module.ts",
		"common",
		"pages.module"
	],
	"app/business-decision/business-decision.module": [
		"./src/app/business-decision/business-decision.module.ts",
		"business-decision.module"
	],
	"app/cassette-use-status/cassette-use-status.module": [
		"./src/app/cassette-use-status/cassette-use-status.module.ts",
		"common",
		"cassette-use-status.module"
	],
	"app/communication/communication.module": [
		"./src/app/communication/communication.module.ts",
		"common",
		"communication.module"
	],
	"app/cycletime/cycletime.module": [
		"./src/app/cycletime/cycletime.module.ts",
		"common",
		"cycletime.module"
	],
	"app/dash-board-ui/dash-board-ui.module": [
		"./src/app/dash-board-ui/dash-board-ui.module.ts",
		"common",
		"dash-board-ui.module"
	],
	"app/engineerdata/engineerdata.module": [
		"./src/app/engineerdata/engineerdata.module.ts",
		"common",
		"engineerdata.module"
	],
	"app/eqpinfo/eqpinfo.module": [
		"./src/app/eqpinfo/eqpinfo.module.ts",
		"common",
		"eqpinfo.module"
	],
	"app/eqpinfo/oee/oee.module": [
		"./src/app/eqpinfo/oee/oee.module.ts",
		"common",
		"oee.module"
	],
	"app/eqpinfo/prdmonitor/prdmonitor.module": [
		"./src/app/eqpinfo/prdmonitor/prdmonitor.module.ts",
		"common",
		"prdmonitor.module"
	],
	"app/eqpinfo/states-monitor/states-monitor.module": [
		"./src/app/eqpinfo/states-monitor/states-monitor.module.ts",
		"common",
		"states-monitor.module"
	],
	"app/iconsexamples/icons.module": [
		"./src/app/iconsexamples/icons.module.ts",
		"icons.module"
	],
	"app/loss-index/loss-index.module": [
		"./src/app/loss-index/loss-index.module.ts",
		"common",
		"loss-index.module"
	],
	"app/mes-ui/mes-ui.module": [
		"./src/app/mes-ui/mes-ui.module.ts",
		"common",
		"mes-ui.module"
	],
	"app/operatormonitor/bp/bp.module": [
		"./src/app/operatormonitor/bp/bp.module.ts",
		"common",
		"bp.module"
	],
	"app/operatormonitor/eac/eac.module": [
		"./src/app/operatormonitor/eac/eac.module.ts",
		"common",
		"eac.module"
	],
	"app/operatormonitor/even/even.module": [
		"./src/app/operatormonitor/even/even.module.ts",
		"even.module"
	],
	"app/operatormonitor/mdl/mdl.module": [
		"./src/app/operatormonitor/mdl/mdl.module.ts",
		"common",
		"mdl.module"
	],
	"app/operatormonitor/operatormonitor.module": [
		"./src/app/operatormonitor/operatormonitor.module.ts",
		"common",
		"operatormonitor.module"
	],
	"app/production/production.module": [
		"./src/app/production/production.module.ts",
		"common",
		"production.module"
	],
	"app/quality/quality.module": [
		"./src/app/quality/quality.module.ts",
		"common",
		"quality.module"
	],
	"app/report-ui/report-ui.module": [
		"./src/app/report-ui/report-ui.module.ts",
		"common",
		"report-ui.module"
	],
	"app/systemmanagement/systemmanagement.module": [
		"./src/app/systemmanagement/systemmanagement.module.ts",
		"common",
		"systemmanagement.module"
	],
	"app/testpage/testpage.module": [
		"./src/app/testpage/testpage.module.ts",
		"common",
		"testpage.module"
	],
	"app/warehouse/warehouse.module": [
		"./src/app/warehouse/warehouse.module.ts",
		"common",
		"warehouse.module"
	],
	"app/yield/yield.module": [
		"./src/app/yield/yield.module.ts",
		"common",
		"yield.module"
	],
	"app/yifatong/yifatong.module": [
		"./src/app/yifatong/yifatong.module.ts",
		"common",
		"yifatong.module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/_services/authentication.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_service_api_api_service__ = __webpack_require__("./src/app/common/service/api/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(http, service) {
        this.http = http;
        this.service = service;
    }
    AuthenticationService.prototype.login = function (username, password) {
        return this.http.post('/api/authenticate', { username: username, password: password })
            .map(function (user) {
            console.log('/api/authenticate result user : ', user);
            // login successful if there's a jwt token in the response
            if (user && user.token) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify(user));
                localStorage.setItem('currentIP', user.logInIP);
                localStorage.setItem('currentUserName', user.username);
            }
            return user;
        });
    };
    /*     login(username: string, password: string) {
            this.service.post('/authenticate', '' , { username: username, password: password }).subscribe(
                (res) => {
                   const user: any = res;
                   if (user && user.checkState === 1) {
                        if (user && user.token) {
                            // store user details and jwt token in local storage to keep user logged in between page refreshes
                            localStorage.setItem('currentUser', JSON.stringify(user));
                        }
                   } else {
                        window.location.href = '/';
                   }
                   return user;
                },
                (error) => { console.log(error); }
              );
        } */
    AuthenticationService.prototype.logout = function () {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.service.post('/logout', '').subscribe(function (res) {
            console.log(res);
        }, function (error) { console.log(error); });
        window.location.href = '/';
    };
    AuthenticationService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_0__common_service_api_api_service__["a" /* ApiService */]])
    ], AuthenticationService);
    return AuthenticationService;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<p-growl [(value)]=\"noticeboardMsg\"></p-growl>\n<p-messages [(value)]=\"msgs\"></p-messages>\n<div class=\"layout-wrapper\" (click)=\"onWrapperClick()\" [ngClass]=\"{'layout-wrapper-static': layoutMode === 'static',\n                'layout-wrapper-active': mobileMenuActive,\n                'layout-menu-horizontal': layoutMode === 'horizontal',\n                'layout-rtl': isRTL}\">\n\n    <app-menu [reset]=\"resetMenu\"></app-menu>\n    <div class=\"layout-main\">\n        <app-topbar></app-topbar>\n        <!--                     <app-data-import></app-data-import> -->\n        <retab></retab>\n        <!-- <app-breadcrumb></app-breadcrumb> -->\n\n        <div class=\"layout-content\">\n            <router-outlet></router-outlet>\n            <!-- <layout-default></layout-default> -->\n        </div>\n\n        <app-footer></app-footer>\n        <div class=\"layout-main-mask\" *ngIf=\"mobileMenuActive\"></div>\n    </div>\n\n</div>\n<!-- <div class=\"ui-tooltip ui-wedget ui-tooltip-top\" style=\"display:inline-block;left :511.656px;top:820.609; opacity:1.056;z-index:1117\"></div> -->\n<p-growl [(value)]=\"notifyMsgs\"></p-growl>"

/***/ }),

/***/ "./src/app/app.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__("./node_modules/@ngx-translate/core/@ngx-translate/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_service_web_socket_service__ = __webpack_require__("./src/app/common/service/web-socket.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__common_service_api_api_service__ = __webpack_require__("./src/app/common/service/api/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__guards_urlinterceptor_service__ = __webpack_require__("./src/app/guards/urlinterceptor.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AppComponent = /** @class */ (function () {
    function AppComponent(renderer, zone, router, translate, sanitizer, websocket, httpService, urlInterceptor) {
        this.renderer = renderer;
        this.zone = zone;
        this.router = router;
        this.translate = translate;
        this.sanitizer = sanitizer;
        this.websocket = websocket;
        this.httpService = httpService;
        this.urlInterceptor = urlInterceptor;
        this.msgs = [];
        this.layoutMode = 'static';
        this.headerSideMenuFlag = false;
        // websocket
        this.currentUserName = localStorage.getItem('currentUserName');
        this.noticeboardMsg = [];
        window.localStorage.setItem('index', '0');
        this.urlList = this.urlInterceptor.RouterLinks;
        this.socket = this.websocket.NoticeBoardConnection();
        var that = this;
        this.socket.onopen = function (event) {
            var MessageContent = {
                messagetype: 1
            };
            that.socket.send(JSON.stringify(MessageContent));
        };
        this.socket.onmessage = function (event) {
            var receiveData = JSON.parse(event.data);
            var messageType = receiveData.messagetype;
            switch (messageType[0]) {
                case 1:
                    console.log(receiveData.messagedetail[0]);
                    break;
                case 2:
                    var subject = receiveData.subject[0];
                    var messagedetail = receiveData.messagedetail[0];
                    that.showMessage('info', subject, messagedetail);
                    break;
                default:
                    break;
            }
        };
        translate.setDefaultLang('en');
        translate.use(localStorage.getItem('language'));
        var _layoutMode = window.localStorage.getItem('projectLayoutMode');
        // console.log('_layoutMode : ',_layoutMode);
        if (_layoutMode != null) {
            this.layoutMode = _layoutMode;
        }
        var _darkMenu = window.localStorage.getItem('projectDarkMenu');
        if (_darkMenu != null) {
            if (_darkMenu === 'true') {
                this.darkMenu = true;
            }
            else {
                this.darkMenu = false;
            }
        }
        var _isRTL = window.localStorage.getItem('projectIsRTL');
        if (_isRTL != null) {
            if (_isRTL === 'true') {
                this.isRTL = true;
            }
            else {
                this.isRTL = false;
            }
        }
        var _playTheme = window.localStorage.getItem('projectTheme');
        if (_playTheme != null) {
            this.changeTheme(_playTheme);
        }
        var _playLayout = window.localStorage.getItem('projectLayout');
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
    AppComponent.prototype.receiveNotify = function (msg) {
        this.notifyMsgs = [];
        var formatMsg = {
            severity: msg.level,
            summary: msg.title,
            detail: msg.content
        };
        this.notifyMsgs.push(formatMsg);
    };
    AppComponent.prototype.clearNotify = function () {
        this.notifyMsgs = [];
    };
    AppComponent.prototype.changeTheme = function (theme) {
        // console.log('call!! changeTheme app.component ~~~~~~~~~~~~~~')
        var themeLink = document.getElementById('theme-css');
        themeLink.href = 'assets/theme/theme-' + theme + '.css';
        window.localStorage.setItem('projectTheme', theme);
    };
    AppComponent.prototype.changeLayout = function (theme) {
        // console.log('call!! changeLayout app.component ~~~~~~~~~~~~~~')
        var layoutLink = document.getElementById('layout-css');
        layoutLink.href = 'assets/layout/css/layout-' + theme + '.css';
        window.localStorage.setItem('projectLayout', theme);
    };
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        var screenWidth = screen.width;
        var deviceType;
        if (screenWidth < 641) {
            deviceType = 'phone';
        }
        else if (screenWidth < 1025 && screenWidth > 640) {
            deviceType = 'pad';
        }
        else if (screenWidth < 1441 && screenWidth > 1024) {
            deviceType = 'monitor';
        }
        else if (screenWidth > 1440) {
            deviceType = 'tv';
        }
        localStorage.setItem('deviceType', deviceType);
        this.zone.runOutsideAngular(function () { _this.bindRipple(); });
        // this.router.navigate(['/guide']);
    };
    AppComponent.prototype.bindRipple = function () {
        this.rippleInitListener = this.init.bind(this);
        document.addEventListener('DOMContentLoaded', this.rippleInitListener);
    };
    AppComponent.prototype.init = function () {
        this.rippleMouseDownListener = this.rippleMouseDown.bind(this);
        document.addEventListener('mousedown', this.rippleMouseDownListener, false);
    };
    AppComponent.prototype.rippleMouseDown = function (e) {
        for (var target = e.target; target && target !== this; target = target['parentNode']) {
            if (!this.isVisible(target)) {
                continue;
            }
            // Element.matches() -> https://developer.mozilla.org/en-US/docs/Web/API/Element/matches
            if (this.selectorMatches(target, '.ripplelink, .ui-button')) {
                var element = target;
                this.rippleEffect(element, e);
                break;
            }
        }
    };
    AppComponent.prototype.selectorMatches = function (el, selector) {
        var p = Element.prototype;
        var f = p['matches'] || p['webkitMatchesSelector'] || p['mozMatchesSelector'] || p['msMatchesSelector'] || function (s) {
            return [].indexOf.call(document.querySelectorAll(s), this) !== -1;
        };
        return f.call(el, selector);
    };
    AppComponent.prototype.isVisible = function (el) {
        return !!(el.offsetWidth || el.offsetHeight);
    };
    AppComponent.prototype.rippleEffect = function (element, e) {
        if (element.querySelector('.ink') === null) {
            var inkEl = document.createElement('span');
            this.addClass(inkEl, 'ink');
            if (this.hasClass(element, 'ripplelink') && element.querySelector('span')) {
                element.querySelector('span').insertAdjacentHTML('afterend', '<span class=\'ink\'></span>');
            }
            else {
                element.appendChild(inkEl);
            }
        }
        var ink = element.querySelector('.ink');
        this.removeClass(ink, 'ripple-animate');
        if (!ink.offsetHeight && !ink.offsetWidth) {
            var d = Math.max(element.offsetWidth, element.offsetHeight);
            ink.style.height = d + 'px';
            ink.style.width = d + 'px';
        }
        var x = e.pageX - this.getOffset(element).left - (ink.offsetWidth / 2);
        var y = e.pageY - this.getOffset(element).top - (ink.offsetHeight / 2);
        ink.style.top = y + 'px';
        ink.style.left = x + 'px';
        ink.style.pointerEvents = 'none';
        this.addClass(ink, 'ripple-animate');
    };
    AppComponent.prototype.hasClass = function (element, className) {
        if (element.classList) {
            return element.classList.contains(className);
        }
        else {
            return new RegExp('(^| )' + className + '( |$)', 'gi').test(element.className);
        }
    };
    AppComponent.prototype.addClass = function (element, className) {
        if (element.classList) {
            element.classList.add(className);
        }
        else {
            element.className += ' ' + className;
        }
    };
    AppComponent.prototype.removeClass = function (element, className) {
        if (element.classList) {
            element.classList.remove(className);
        }
        else {
            element.className = element.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
        }
    };
    AppComponent.prototype.getOffset = function (el) {
        var rect = el.getBoundingClientRect();
        return {
            top: rect.top + (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0),
            left: rect.left + (window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0),
        };
    };
    AppComponent.prototype.unbindRipple = function () {
        if (this.rippleInitListener) {
            document.removeEventListener('DOMContentLoaded', this.rippleInitListener);
        }
        if (this.rippleMouseDownListener) {
            document.removeEventListener('mousedown', this.rippleMouseDownListener);
        }
    };
    AppComponent.prototype.ngOnDestroy = function () {
        this.unbindRipple();
    };
    AppComponent.prototype.onWrapperClick = function () {
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
    };
    AppComponent.prototype.onMenuButtonClick = function (event) {
        this.menuButtonClick = true;
        if (this.isMobile()) {
            this.mobileMenuActive = !this.mobileMenuActive;
        }
        event.preventDefault();
    };
    AppComponent.prototype.onTopbarMobileMenuButtonClick = function (event) {
        this.topbarMenuButtonClick = true;
        this.topbarMenuActive = !this.topbarMenuActive;
        event.preventDefault();
    };
    // onTopbarRootItemClick(event: Event, item: Element) {
    //     if (this.activeTopbarItem === item) {
    //         this.activeTopbarItem = null; } else {
    //         this.activeTopbarItem = item; }
    //     event.preventDefault();
    // }
    AppComponent.prototype.headerSideMenuClick = function () {
        this.headerSideMenuFlag = true;
    };
    AppComponent.prototype.onTopbarRootItemClick = function (event, item) {
        if (this.activeTopbarItem == null) {
            this.activeTopbarItem = item;
        }
        else {
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
    };
    AppComponent.prototype.onTestClose = function () {
        this.activeTopbarItem = null;
        event.preventDefault();
        // console.log('onTestClose this.activeTopbarItem',this.activeTopbarItem);
    };
    AppComponent.prototype.onTopbarMenuClick = function (event) {
        this.topbarMenuClick = true;
    };
    AppComponent.prototype.onSidebarClick = function (event) {
        this.menuClick = true;
        this.resetMenu = false;
    };
    AppComponent.prototype.onToggleMenuClick = function (event) {
        this.layoutMode = this.layoutMode !== 'static' ? 'static' : 'overlay';
        var el = document.getElementById('main-logo');
        if (this.layoutMode === 'static') {
            el.setAttribute('src', 'assets/layout/images/company-logo.png');
        }
        else {
            el.setAttribute('src', 'assets/layout/images/b7.png');
        }
        event.preventDefault();
    };
    AppComponent.prototype.isMobile = function () {
        return window.innerWidth <= 1024;
    };
    AppComponent.prototype.isTablet = function () {
        var width = window.innerWidth;
        return width <= 1024 && width > 640;
    };
    AppComponent.prototype.isHorizontal = function () {
        return this.layoutMode === 'horizontal';
    };
    AppComponent.prototype.isOverlay = function () {
        return this.layoutMode === 'overlay';
    };
    AppComponent.prototype.getLatestNotice = function () {
        var _this = this;
        var options = {
            params: { userName: this.currentUserName }
        };
        this.httpService.get('/noticeboard/getLatestNotice', options).subscribe(function (res) {
            var notice = res;
            if (notice != null) {
                _this.showMessage('info', notice.subject, notice.messagedetail);
            }
        }, function (error) { console.log(error); });
    };
    AppComponent.prototype.showMessage = function (severity, summary, detail) {
        this.noticeboardMsg = [];
        this.noticeboardMsg.push({ severity: severity, summary: summary, detail: detail });
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_core__["Renderer"],
            __WEBPACK_IMPORTED_MODULE_1__angular_core__["NgZone"],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"],
            __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["DomSanitizer"],
            __WEBPACK_IMPORTED_MODULE_4__common_service_web_socket_service__["a" /* WebSocketService */],
            __WEBPACK_IMPORTED_MODULE_5__common_service_api_api_service__["a" /* ApiService */],
            __WEBPACK_IMPORTED_MODULE_6__guards_urlinterceptor_service__["a" /* UrlinterceptorService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export createTranslateLoader */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_routes__ = __webpack_require__("./src/app/app.routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_toPromise__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__common_service_echart_service__ = __webpack_require__("./src/app/common/service/echart.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_primeng_breadcrumb__ = __webpack_require__("./node_modules/primeng/breadcrumb.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_primeng_breadcrumb___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_primeng_breadcrumb__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_primeng_scrollpanel__ = __webpack_require__("./node_modules/primeng/scrollpanel.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_primeng_scrollpanel___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_primeng_scrollpanel__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_primeng_tabview__ = __webpack_require__("./node_modules/primeng/tabview.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_primeng_tabview___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_primeng_tabview__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_primeng_toolbar__ = __webpack_require__("./node_modules/primeng/toolbar.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_primeng_toolbar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_primeng_toolbar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__core_layout_menu_app_menu_component__ = __webpack_require__("./src/core/layout/menu/app.menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__core_layout_breadcrumb_app_breadcrumb_component__ = __webpack_require__("./src/core/layout/breadcrumb/app.breadcrumb.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__core_layout_topbar_app_topbar_component__ = __webpack_require__("./src/core/layout/topbar/app.topbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__core_layout_footer_app_footer_component__ = __webpack_require__("./src/core/layout/footer/app.footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__core_layout_breadcrumb_service_breadcrumb_service__ = __webpack_require__("./src/core/layout/breadcrumb/service/breadcrumb.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ngx_translate_core__ = __webpack_require__("./node_modules/@ngx-translate/core/@ngx-translate/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ngx_translate_http_loader__ = __webpack_require__("./node_modules/@ngx-translate/http-loader/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_primeng_primeng__ = __webpack_require__("./node_modules/primeng/primeng.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_21_primeng_primeng__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__common_service_interceptor_service__ = __webpack_require__("./src/app/common/service/interceptor.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__boe_services_websocket_service__ = __webpack_require__("./src/app/boe/services/websocket.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_core_layout_retab_app_retab_component__ = __webpack_require__("./src/core/layout/retab/app.retab.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__core_layout_retab_service_tab_service__ = __webpack_require__("./src/core/layout/retab/service/tab.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26_primeng_contextmenu__ = __webpack_require__("./node_modules/primeng/contextmenu.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26_primeng_contextmenu___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_26_primeng_contextmenu__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27_primeng_tooltip__ = __webpack_require__("./node_modules/primeng/tooltip.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27_primeng_tooltip___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_27_primeng_tooltip__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28_primeng_splitbutton__ = __webpack_require__("./node_modules/primeng/splitbutton.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28_primeng_splitbutton___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_28_primeng_splitbutton__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29_primeng_tieredmenu__ = __webpack_require__("./node_modules/primeng/tieredmenu.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29_primeng_tieredmenu___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_29_primeng_tieredmenu__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__login_login_component__ = __webpack_require__("./src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__guards_auth_guard__ = __webpack_require__("./src/app/guards/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__guards_auth_false_guard___ = __webpack_require__("./src/app/guards/auth.false.guard..ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__services_authentication_service__ = __webpack_require__("./src/app/_services/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__core_layout_fullscreen_fullscreen_component__ = __webpack_require__("./src/core/layout/fullscreen/fullscreen.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__core_layout_default_default_component__ = __webpack_require__("./src/core/layout/default/default.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36_primeng_inputtext__ = __webpack_require__("./node_modules/primeng/inputtext.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36_primeng_inputtext___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_36_primeng_inputtext__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37_primeng_menu__ = __webpack_require__("./node_modules/primeng/menu.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37_primeng_menu___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_37_primeng_menu__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__common_strategy_page_reuse_strategy__ = __webpack_require__("./src/app/common/strategy/page-reuse-strategy.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__homepage_homepage_component__ = __webpack_require__("./src/app/homepage/homepage.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__common_service_api_api_service__ = __webpack_require__("./src/app/common/service/api/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__common_service_message_service__ = __webpack_require__("./src/app/common/service/message.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__common_service_web_socket_service__ = __webpack_require__("./src/app/common/service/web-socket.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44_primeng_table__ = __webpack_require__("./node_modules/primeng/table.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44_primeng_table___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_44_primeng_table__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__noticeboard_history_noticeboard_history_component__ = __webpack_require__("./src/app/noticeboard-history/noticeboard-history.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__guards_urlinterceptor_service__ = __webpack_require__("./src/app/guards/urlinterceptor.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__common_service_fullscreen_service__ = __webpack_require__("./src/app/common/service/fullscreen.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















// multi-language





function createTranslateLoader(http) {
    // 다국어 파일의 확장자와 경로를 지정
    return new __WEBPACK_IMPORTED_MODULE_20__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http, './assets/language/', '.json');
}
// tab frame







// login



















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["BrowserModule"],
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_6__app_routes__["a" /* AppRoutes */],
                __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_9_primeng_breadcrumb__["BreadcrumbModule"],
                __WEBPACK_IMPORTED_MODULE_10_primeng_scrollpanel__["ScrollPanelModule"],
                __WEBPACK_IMPORTED_MODULE_11_primeng_tabview__["TabViewModule"],
                __WEBPACK_IMPORTED_MODULE_19__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                    loader: {
                        provide: __WEBPACK_IMPORTED_MODULE_19__ngx_translate_core__["a" /* TranslateLoader */],
                        useFactory: (createTranslateLoader),
                        deps: [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClient */]]
                    },
                }),
                __WEBPACK_IMPORTED_MODULE_21_primeng_primeng__["DropdownModule"],
                __WEBPACK_IMPORTED_MODULE_36_primeng_inputtext__["InputTextModule"],
                __WEBPACK_IMPORTED_MODULE_21_primeng_primeng__["TabMenuModule"],
                __WEBPACK_IMPORTED_MODULE_26_primeng_contextmenu__["ContextMenuModule"],
                __WEBPACK_IMPORTED_MODULE_21_primeng_primeng__["GrowlModule"],
                __WEBPACK_IMPORTED_MODULE_21_primeng_primeng__["PanelMenuModule"],
                __WEBPACK_IMPORTED_MODULE_37_primeng_menu__["MenuModule"],
                __WEBPACK_IMPORTED_MODULE_27_primeng_tooltip__["TooltipModule"],
                __WEBPACK_IMPORTED_MODULE_12_primeng_toolbar__["ToolbarModule"],
                __WEBPACK_IMPORTED_MODULE_28_primeng_splitbutton__["SplitButtonModule"],
                __WEBPACK_IMPORTED_MODULE_29_primeng_tieredmenu__["TieredMenuModule"],
                __WEBPACK_IMPORTED_MODULE_21_primeng_primeng__["GalleriaModule"],
                __WEBPACK_IMPORTED_MODULE_21_primeng_primeng__["PanelModule"],
                __WEBPACK_IMPORTED_MODULE_21_primeng_primeng__["CalendarModule"],
                __WEBPACK_IMPORTED_MODULE_21_primeng_primeng__["ListboxModule"],
                __WEBPACK_IMPORTED_MODULE_21_primeng_primeng__["MessagesModule"],
                __WEBPACK_IMPORTED_MODULE_21_primeng_primeng__["MessageModule"],
                __WEBPACK_IMPORTED_MODULE_44_primeng_table__["TableModule"],
                __WEBPACK_IMPORTED_MODULE_21_primeng_primeng__["OrderListModule"],
                __WEBPACK_IMPORTED_MODULE_21_primeng_primeng__["CardModule"],
                __WEBPACK_IMPORTED_MODULE_21_primeng_primeng__["OverlayPanelModule"],
                __WEBPACK_IMPORTED_MODULE_21_primeng_primeng__["DialogModule"],
                __WEBPACK_IMPORTED_MODULE_21_primeng_primeng__["PasswordModule"]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_13__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_14__core_layout_menu_app_menu_component__["a" /* AppMenuComponent */],
                __WEBPACK_IMPORTED_MODULE_14__core_layout_menu_app_menu_component__["b" /* AppSubMenuComponent */],
                __WEBPACK_IMPORTED_MODULE_15__core_layout_breadcrumb_app_breadcrumb_component__["a" /* AppBreadcrumbComponent */],
                __WEBPACK_IMPORTED_MODULE_16__core_layout_topbar_app_topbar_component__["a" /* AppTopBarComponent */],
                __WEBPACK_IMPORTED_MODULE_17__core_layout_footer_app_footer_component__["a" /* AppFooterComponent */],
                __WEBPACK_IMPORTED_MODULE_24_core_layout_retab_app_retab_component__["a" /* AppRetabComponent */],
                __WEBPACK_IMPORTED_MODULE_30__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_34__core_layout_fullscreen_fullscreen_component__["a" /* LayoutFullScreenComponent */],
                __WEBPACK_IMPORTED_MODULE_40__homepage_homepage_component__["a" /* HomepageComponent */],
                __WEBPACK_IMPORTED_MODULE_35__core_layout_default_default_component__["a" /* LayoutDefaultComponent */],
                __WEBPACK_IMPORTED_MODULE_45__noticeboard_history_noticeboard_history_component__["a" /* NoticeboardHistoryComponent */]
                //HtmlPipe
            ],
            providers: [
                { provide: __WEBPACK_IMPORTED_MODULE_5__angular_common__["LocationStrategy"], useClass: __WEBPACK_IMPORTED_MODULE_5__angular_common__["HashLocationStrategy"] },
                { provide: __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HTTP_INTERCEPTORS */], useClass: __WEBPACK_IMPORTED_MODULE_22__common_service_interceptor_service__["a" /* InterceptorService */], multi: true },
                __WEBPACK_IMPORTED_MODULE_18__core_layout_breadcrumb_service_breadcrumb_service__["a" /* BreadcrumbService */],
                __WEBPACK_IMPORTED_MODULE_25__core_layout_retab_service_tab_service__["a" /* TabService */],
                __WEBPACK_IMPORTED_MODULE_31__guards_auth_guard__["a" /* AuthGuard */],
                __WEBPACK_IMPORTED_MODULE_32__guards_auth_false_guard___["a" /* AuthFalseGuard */],
                __WEBPACK_IMPORTED_MODULE_33__services_authentication_service__["a" /* AuthenticationService */],
                __WEBPACK_IMPORTED_MODULE_8__common_service_echart_service__["a" /* EchartService */],
                __WEBPACK_IMPORTED_MODULE_23__boe_services_websocket_service__["a" /* WebsocketService */],
                __WEBPACK_IMPORTED_MODULE_41__common_service_api_api_service__["a" /* ApiService */],
                __WEBPACK_IMPORTED_MODULE_42__common_service_message_service__["a" /* MessageService */],
                __WEBPACK_IMPORTED_MODULE_43__common_service_web_socket_service__["a" /* WebSocketService */],
                __WEBPACK_IMPORTED_MODULE_46__guards_urlinterceptor_service__["a" /* UrlinterceptorService */],
                __WEBPACK_IMPORTED_MODULE_47__common_service_fullscreen_service__["a" /* FullscreenService */],
                { provide: __WEBPACK_IMPORTED_MODULE_38__angular_router__["RouteReuseStrategy"], useClass: __WEBPACK_IMPORTED_MODULE_39__common_strategy_page_reuse_strategy__["a" /* PageReuseStrategy */] },
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_35__core_layout_default_default_component__["a" /* LayoutDefaultComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export routes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__guards_auth_guard__ = __webpack_require__("./src/app/guards/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__guards_auth_false_guard___ = __webpack_require__("./src/app/guards/auth.false.guard..ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login_component__ = __webpack_require__("./src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_layout_fullscreen_fullscreen_component__ = __webpack_require__("./src/core/layout/fullscreen/fullscreen.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__homepage_homepage_component__ = __webpack_require__("./src/app/homepage/homepage.component.ts");







var routes = [
    { path: '', redirectTo: 'boe/home', pathMatch: 'full' },
    {
        path: 'boe',
        canActivate: [__WEBPACK_IMPORTED_MODULE_1__guards_auth_guard__["a" /* AuthGuard */]],
        canActivateChild: [__WEBPACK_IMPORTED_MODULE_1__guards_auth_guard__["a" /* AuthGuard */]],
        component: __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
        children: [
            {
                path: 'home',
                component: __WEBPACK_IMPORTED_MODULE_6__homepage_homepage_component__["a" /* HomepageComponent */]
            },
            {
                path: 'mes-ui',
                // component : AppComponent,
                loadChildren: 'app/mes-ui/mes-ui.module#MesUiModule'
            },
            {
                path: 'report-ui',
                // component : AppComponent,
                loadChildren: 'app/report-ui/report-ui.module#ReportUiModule'
            },
            {
                path: 'dash-board-ui',
                // component : AppComponent,
                loadChildren: 'app/dash-board-ui/dash-board-ui.module#DashBoardUiModule'
            },
            {
                path: 'boe-ui',
                // component : AppComponent,
                loadChildren: 'app/boe-ui/boe-ui.module#BoeUiModule'
            },
            {
                path: 'pages',
                loadChildren: 'app/boe/pages/pages.module#PagesModule'
            },
            {
                path: 'icons',
                loadChildren: 'app/iconsexamples/icons.module#IconsModule'
            },
            // { path: '*', redirectTo: '' }
            {
                path: 'production',
                loadChildren: 'app/production/production.module#ProductionModule'
            },
            {
                path: 'eqpinfo',
                loadChildren: 'app/eqpinfo/eqpinfo.module#EqpinfoModule'
            },
            {
                path: 'yield',
                loadChildren: 'app/yield/yield.module#YieldModule',
            },
            {
                path: 'testpage',
                loadChildren: 'app/testpage/testpage.module#TestpageModule'
            },
            {
                path: 'systemmanagement',
                loadChildren: 'app/systemmanagement/systemmanagement.module#SystemmanagementModule'
            },
            {
                path: 'warehouse',
                loadChildren: 'app/warehouse/warehouse.module#WarehouseModule'
            },
            {
                path: 'communication',
                loadChildren: 'app/communication/communication.module#CommunicationModule'
            },
            {
                path: 'quality',
                loadChildren: 'app/quality/quality.module#QualityModule'
            },
            {
                path: 'operatormonitor',
                loadChildren: 'app/operatormonitor/operatormonitor.module#OperatormonitorModule'
            },
            {
                path: 'cycletime',
                loadChildren: 'app/cycletime/cycletime.module#CycletimeModule'
            },
            {
                path: 'engineerdata',
                loadChildren: 'app/engineerdata/engineerdata.module#EngineerdataModule'
            },
            {
                path: 'YiFaTongGrid',
                loadChildren: 'app/yifatong/yifatong.module#YiFaTongModule'
            },
            {
                path: 'MaterialManagement',
                loadChildren: 'app/cassette-use-status/cassette-use-status.module#CassetteUseStatusModule'
            },
            {
                path: 'Loss',
                loadChildren: 'app/loss-index/loss-index.module#LossIndexModule'
            },
            {
                path: 'decission',
                loadChildren: 'app/business-decision/business-decision.module#BusinessDecisionModule'
            }
        ],
    },
    {
        path: 'login',
        canActivate: [__WEBPACK_IMPORTED_MODULE_2__guards_auth_false_guard___["a" /* AuthFalseGuard */]],
        component: __WEBPACK_IMPORTED_MODULE_4_core_layout_fullscreen_fullscreen_component__["a" /* LayoutFullScreenComponent */],
        children: [
            { path: '', component: __WEBPACK_IMPORTED_MODULE_3__login_login_component__["a" /* LoginComponent */] }
        ],
    },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];
var AppRoutes = __WEBPACK_IMPORTED_MODULE_0__angular_router__["RouterModule"].forRoot(routes);


/***/ }),

/***/ "./src/app/boe/services/websocket.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebsocketService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WebsocketService = /** @class */ (function () {
    function WebsocketService() {
    }
    WebsocketService.prototype.initBroadcastService = function (app) {
        var wsPath = 'ws://' + location.host + '/api/broadcast';
        // console.log(wsPath);
        this.socket = new WebSocket(wsPath);
        this.socket.onmessage = function (event) {
            app.addNotify(JSON.parse(event.data));
        };
    };
    WebsocketService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], WebsocketService);
    return WebsocketService;
}());



/***/ }),

/***/ "./src/app/common/model/language.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Language; });
var Language = /** @class */ (function () {
    function Language() {
    }
    return Language;
}());



/***/ }),

/***/ "./src/app/common/model/system/noticeboard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NoticeBoard; });
var NoticeBoard = /** @class */ (function () {
    function NoticeBoard() {
    }
    return NoticeBoard;
}());



/***/ }),

/***/ "./src/app/common/model/system/userinfo.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Userinfo; });
var Userinfo = /** @class */ (function () {
    function Userinfo() {
    }
    return Userinfo;
}());



/***/ }),

/***/ "./src/app/common/service/api/api.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ApiService = /** @class */ (function () {
    function ApiService(http) {
        this.http = http;
        this.apiUrl = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].apiPath;
    }
    // select all
    ApiService.prototype.getAll = function (url) {
        return this.http.get(this.apiUrl + url);
    };
    // options를 추가할 경우 response type이 default로 arraybuffer로 설정되기 때문에,
    // 모든 타입을 받기위해 observable<any> 로 설정한다.
    ApiService.prototype.getOne = function (url, options) {
        return this.http.get(this.apiUrl + url, options);
    };
    // select parameter
    ApiService.prototype.get = function (url, options) {
        return this.http.get(this.apiUrl + url, options);
    };
    // insert
    ApiService.prototype.post = function (url, data, option) {
        return this.http.post(this.apiUrl + url, data, option);
    };
    // update
    ApiService.prototype.put = function (url, data) {
        return this.http.put(this.apiUrl + url, data);
    };
    // delete
    ApiService.prototype.delete = function (url, data) {
        return this.http.delete(this.apiUrl + url, data);
    };
    ApiService.prototype.testGet = function (url) {
        return this.http.get(url);
    };
    ApiService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], ApiService);
    return ApiService;
}());



/***/ }),

/***/ "./src/app/common/service/echart.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EchartService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_assets_echartTheme_dark_js__ = __webpack_require__("./src/assets/echartTheme/dark.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_assets_echartTheme_dark_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_assets_echartTheme_dark_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_assets_echartTheme_infographic_js__ = __webpack_require__("./src/assets/echartTheme/infographic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_assets_echartTheme_infographic_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_assets_echartTheme_infographic_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_assets_echartTheme_macarons_js__ = __webpack_require__("./src/assets/echartTheme/macarons.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_assets_echartTheme_macarons_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_assets_echartTheme_macarons_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_assets_echartTheme_roma_js__ = __webpack_require__("./src/assets/echartTheme/roma.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_assets_echartTheme_roma_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_assets_echartTheme_roma_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_assets_echartTheme_shine_js__ = __webpack_require__("./src/assets/echartTheme/shine.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_assets_echartTheme_shine_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_assets_echartTheme_shine_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_assets_echartTheme_vintage_js__ = __webpack_require__("./src/assets/echartTheme/vintage.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_assets_echartTheme_vintage_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_assets_echartTheme_vintage_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_echarts__ = __webpack_require__("./node_modules/echarts/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_echarts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_echarts__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var EchartService = /** @class */ (function () {
    function EchartService() {
    }
    EchartService.prototype.init = function (dom) {
        var theme = window.localStorage.getItem('echartTheme');
        if (theme != null) {
            return __WEBPACK_IMPORTED_MODULE_7_echarts__["init"](dom, theme);
        }
        //return echarts.init(<HTMLDivElement>dom, 'macarons');
        return __WEBPACK_IMPORTED_MODULE_7_echarts__["init"](dom);
    };
    EchartService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], EchartService);
    return EchartService;
}());



/***/ }),

/***/ "./src/app/common/service/fullscreen.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FullscreenService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_screenfull__ = __webpack_require__("./node_modules/screenfull/dist/screenfull.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_screenfull___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_screenfull__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FullscreenService = /** @class */ (function () {
    function FullscreenService() {
        this.isFull = false;
    }
    FullscreenService.prototype.getFullStatus = function () {
        return __WEBPACK_IMPORTED_MODULE_1_screenfull__["isFullscreen"];
    };
    FullscreenService.prototype.onContentFullScreen = function () {
        var contents = document.getElementsByClassName("layout-content");
        debugger;
        var content = contents[0];
        if (__WEBPACK_IMPORTED_MODULE_1_screenfull__["enabled"]) {
            this.isFull = true;
            __WEBPACK_IMPORTED_MODULE_1_screenfull__["request"](content);
        }
    };
    FullscreenService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], FullscreenService);
    return FullscreenService;
}());



/***/ }),

/***/ "./src/app/common/service/interceptor.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InterceptorService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/do.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var InterceptorService = /** @class */ (function () {
    function InterceptorService(route) {
        this.route = route;
    }
    InterceptorService.prototype.intercept = function (req, next) {
        req.headers.set('test', 'test');
        var authreq = req.clone({
            headers: req.headers.set('test', 'test')
        });
        var httpHeaders = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpHeaders */]();
        httpHeaders.append('test', 'teset1');
        return next.handle(req).do(function (evt) {
            if (evt instanceof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["e" /* HttpResponse */]) {
                // 토큰이 존재하면 localstorage에 저장
                var token = evt.headers.get('test');
                if (token) {
                    // this.localStorage.setItem('token', this.encrypt.decrypt(token)).subscribe(() => {});
                    // this.localStorage.getItem('token').subscribe((data) => {console.log(data); } );
                    // this.storage.set('token', this.encrypt.decrypt(token));
                }
            }
        });
    };
    InterceptorService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"]])
    ], InterceptorService);
    return InterceptorService;
}());



/***/ }),

/***/ "./src/app/common/service/message.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__("./node_modules/rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MessageService = /** @class */ (function () {
    function MessageService() {
        this.subject = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["Subject"]();
    }
    /**
     * content模快裏面進行信息傳輸，類似廣播
     * @param type 發送的信息類型
     *        1-你的信息
     *        2-你的信息
     *        3-你的信息
     *        4-你的信息
     *        5-你的信息
     */
    MessageService.prototype.sendMessage = function (type) {
        console.log('TAG' + '----------->>>' + type);
        this.subject.next({ type: type });
    };
    /**
     * 清理消息
     */
    MessageService.prototype.clearMessage = function () {
        this.subject.next();
    };
    /**
     * 獲得消息
     * @returns {Observable<any>}
     */
    MessageService.prototype.getMessage = function () {
        return this.subject.asObservable();
    };
    MessageService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], MessageService);
    return MessageService;
}());



/***/ }),

/***/ "./src/app/common/service/web-socket.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebSocketService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WebSocketService = /** @class */ (function () {
    function WebSocketService() {
    }
    WebSocketService.prototype.WebSocketConnection = function () {
        var websocket = new WebSocket('ws://localhost:8888/api/websocket');
        return websocket;
        // const url = 'http://localhost:8888/api/websocket';
        // const socket = new SockJS(url);
        // const stompClient = Stomp.over(socket);
        // return stompClient;
    };
    WebSocketService.prototype.NoticeBoardConnection = function () {
        var wsPath = '';
        if (location.host == 'localhost:4200') {
            wsPath = 'ws://localhost:8888/api/noticeboard';
        }
        else {
            wsPath = 'ws://' + location.host + '/api/noticeboard';
        }
        var websocket = new WebSocket(wsPath);
        return websocket;
    };
    WebSocketService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], WebSocketService);
    return WebSocketService;
}());



/***/ }),

/***/ "./src/app/common/strategy/page-reuse-strategy.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageReuseStrategy; });
var PageReuseStrategy = /** @class */ (function () {
    function PageReuseStrategy() {
        this._cacheRouters = {};
    }
    /** 表示对所有路由允许复用 如果你有路由不想利用可以加一些业务逻辑判断 */
    PageReuseStrategy.prototype.shouldDetach = function (route) {
        if (!route.data.keep) {
            return false;
        }
        else {
            return true;
        }
    };
    /** 当路由离开时会触发。按path作为key存储路由快照&组件当前实例对象 */
    PageReuseStrategy.prototype.store = function (route, handle) {
        this._cacheRouters[route.routeConfig.path] = {
            snapshot: route,
            handle: handle
        };
    };
    /** 若 path 在缓存中有，则认为允许还原路由 */
    PageReuseStrategy.prototype.shouldAttach = function (route) {
        return !!route.routeConfig && !!this._cacheRouters[route.routeConfig.path];
    };
    /** 从缓存中获取快照，若无则返回 null */
    PageReuseStrategy.prototype.retrieve = function (route) {
        if (!route.routeConfig || route.routeConfig.loadChildren || !this._cacheRouters[route.routeConfig.path])
            return null;
        return this._cacheRouters[route.routeConfig.path].handle;
    };
    /** 进入路由触发，判断是否同一路由 */
    PageReuseStrategy.prototype.shouldReuseRoute = function (future, curr) {
        return future.routeConfig === curr.routeConfig;
    };
    return PageReuseStrategy;
}());



/***/ }),

/***/ "./src/app/guards/auth.false.guard..ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthFalseGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthFalseGuard = /** @class */ (function () {
    function AuthFalseGuard(router) {
        this.router = router;
    }
    AuthFalseGuard.prototype.canActivate = function (route, state) {
        console.log('AuthFalseGuard : ', this.router.url);
        if (!localStorage.getItem('currentUser')) {
            // logged in so return true
            return true;
        }
        // not logged in so redirect to login page with the return url
        this.router.navigate([''], { queryParams: { returnUrl: state.url } });
        return false;
    };
    AuthFalseGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"]])
    ], AuthFalseGuard);
    return AuthFalseGuard;
}());



/***/ }),

/***/ "./src/app/guards/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_common_service_api_api_service__ = __webpack_require__("./src/app/common/service/api/api.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthGuard = /** @class */ (function () {
    function AuthGuard(router, http) {
        this.router = router;
        this.http = http;
        this.getUrlList();
    }
    AuthGuard.prototype.getUrlList = function () {
        var _this = this;
        var options = {
            params: {
                userName: localStorage.getItem('currentUserName'),
            }
        };
        this.http.get('/menu/select/url', options).subscribe(function (res) {
            _this.RouterLinks = res;
        }, function (error) {
            console.log(error);
        });
        return this.RouterLinks;
    };
    AuthGuard.prototype.canActivate = function (route, state) {
        console.log('-------------AuthGuard  canActivate : ', route.url[0].path);
        console.log('-------------AuthGuard  canActivate : ', state.url);
        if (!this.isSessionCheck() && !this.isUrlInAuthCheck(state.url)) {
            this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        }
        return this.isSessionCheck();
    };
    AuthGuard.prototype.canActivateChild = function (route, state) {
        console.log('AuthGuard  canActivateChild : ', this.router.url);
        if (!this.isSessionCheck()) {
            this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        }
        return this.isSessionCheck();
    };
    AuthGuard.prototype.isSessionCheck = function () {
        var result = false;
        if (localStorage.getItem('currentUser')) {
            // logged in so return true
            var user = JSON.parse(localStorage.getItem('currentUser'));
            var loginTime = user.loginTime;
            var t = Date.now() - +(new Date(loginTime));
            var aliveTime = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].aliveTime;
            // 5sec
            /*             if (t >= aliveTime * 1000) {
                            localStorage.removeItem('currentUser');
                        } else {
                            // loginTime update
                            user.loginTime = Date.now();
                            localStorage.setItem('currentUser', JSON.stringify(user));
                            result = true;
                        } */
            user.loginTime = Date.now();
            localStorage.setItem('currentUser', JSON.stringify(user));
            result = true;
        }
        return result;
    };
    AuthGuard.prototype.isUrlInAuthCheck = function (url) {
        var result = false;
        if (localStorage.getItem('currentUser')) {
            for (var i = 0; i < this.RouterLinks.length; i++) {
                debugger;
                if (url == '/boe/' + this.RouterLinks[i]) {
                    debugger;
                    result = true;
                    break;
                }
            }
        }
        return result;
    };
    AuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"], __WEBPACK_IMPORTED_MODULE_3_app_common_service_api_api_service__["a" /* ApiService */]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/guards/urlinterceptor.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UrlinterceptorService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_common_service_api_api_service__ = __webpack_require__("./src/app/common/service/api/api.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UrlinterceptorService = /** @class */ (function () {
    function UrlinterceptorService(http) {
        this.http = http;
        this.getUrlList();
    }
    UrlinterceptorService.prototype.getUrlList = function () {
        var _this = this;
        var options = {
            params: {
                userName: localStorage.getItem('currentUserName'),
            }
        };
        this.http.get('/menu/select/url', options).subscribe(function (res) {
            _this.RouterLinks = res;
        }, function (error) {
            console.log(error);
        });
        return this.RouterLinks;
    };
    UrlinterceptorService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_app_common_service_api_api_service__["a" /* ApiService */]])
    ], UrlinterceptorService);
    return UrlinterceptorService;
}());



/***/ }),

/***/ "./src/app/homepage/homepage.component.css":
/***/ (function(module, exports) {

module.exports = "li.ui-galleria-panel {\r\n    width:100% !important;}\r\n\r\nimg.ui-panel-images {\r\n    width:100vw !important;\r\n}\r\n\r\ndiv.ui-galleria.ui-widget.ui-widget-content.ui-corner-all {\r\n    width:100% !important;\r\n}\r\n\r\n.lg-card{\r\n    height: 320px;;\r\n}\r\n\r\n.ui-card-header img {\r\n    height: 50px !important;\r\n    text-align: center;\r\n}\r\n\r\n.lg-calendar {\r\n\r\n}\r\n\r\n.hmtitle {\r\n    font-size: 17px;\r\n/*     font-family: 'Courier New', Courier, monospace; */\r\n    color: #535353;\r\n    padding: 6px 0 0 10px;\r\n    margin: 0 0 -10px 0;\r\n    height: 40px;\r\n    background-image: url(data:image/png;base64,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);\r\n}\r\n\r\n.ulviewHistory {\r\n    margin: 10px 0 20px -15px;\r\n}\r\n\r\n.viewHistory {\r\n    line-height: 200%;\r\n}\r\n\r\n.release-title {\r\n    color: rgb(4, 209, 209);\r\n    font-size: 30px;\r\n    text-align: center;\r\n}\r\n\r\n.release-authorship {\r\n    text-align: center;\r\n}\r\n\r\n.release-body {\r\n    margin: -5% 0 0 10%;\r\n    line-height: 160%;\r\n    font-size: 15px;\r\n    color: #5f5f5f;\r\n}\r\n\r\n.historyButton {\r\n    margin: 0 0 0 70%;\r\n}\r\n\r\n/* 640px 手机 sm */\r\n\r\n@media screen and (max-width:40em){\r\n\r\n}\r\n\r\n/* 641px 平板 md*/\r\n\r\n@media screen and (min-width:40.063em){\r\n\r\n\r\n}\r\n\r\n/* 1025px lg 显示器*/\r\n\r\n@media screen and (min-width:64.063em){\r\n    .lg-viewHistory {\r\n        line-height: 150%;\r\n        font-size: 14px;\r\n        padding: 0 0 0 -10px;\r\n        width: 100px;\r\n        text-overflow:ellipsis;\r\n    }\r\n    .lg-viewHistory_a {\r\n        display: block;\r\n        width: 100px;\r\n    }\r\n}\r\n\r\n/* 1441px xl 大电视*/\r\n\r\n@media screen and (min-width:90.063em){\r\n    .xl-viewHistory {\r\n        line-height: 200%;\r\n        font-size: 16px;\r\n        width: 400px;\r\n    }\r\n    .xl-viewHistory_a {\r\n        display: block;\r\n        width: 400px;\r\n    }\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/homepage/homepage.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g\">\n  <!-- intro/image area -->\n  <div class=\"ui-g-12\">\n    <p-galleria #galleria [images]=\"images\" panelWidth=\"1150\" panelHeight=\"465\" [showCaption]=\"false\" (onImageClicked)=\"click()\"></p-galleria>\n  </div>\n  <!-- end intro/image area -->\n\n  <!-- panel area -->\n  <div class=\"ui-g-12\">\n    <!-- panel1 -->\n    <div class=\"ui-g-12 ui-lg-4 lg-card\">\n      <p-card styleClass=\"lg-card\">\n        <p-header>\n          <div class=\"hmtitle\"><b>浏 览 记 录</b></div>\n        </p-header>\n        <ul class=\"ulviewHistory\">\n          <li *ngFor=\"let url of viewHistory\" class=\"xl-viewHistory lg-viewHistory\"><a [href]=\"url\" class=\"xl-viewHistory_a lg-viewHistory_a\">{{url}}</a></li>\n        </ul>\n        <!--         <p-listbox [value]=\"noticelist\" [listStyle]=\"{'height':'285px','width':'450px'}\" [style]=\"{'width':'450px'}\">\n            <ng-template let-notice pTemplate=\"item\">\n                <div class=\"ui-helper-clearfix\">\n                    <div style=\"font-size:14px;float:left;margin:15px 5px 0 0\">\n                        <a [routerLink]=\"['/boe/communication/noticeboard']\" [queryParams]=\"{subject:notice.subject,timekey:notice.timekey}\" (click)=\"onClick()\">{{notice.subject}}</a>\n                        </div>\n                    <div style=\"font-size:12px;float:right;margin:15px 5px 0 0\">{{notice.timekey}}</div>\n                </div>\n            </ng-template>\n        </p-listbox> -->\n      </p-card>\n    </div>\n    <!-- end panel1 -->\n    <div class=\"ui-g-12 ui-lg-4 lg-card\">\n      <p-card styleClass=\"lg-card\">\n        <p-header>\n          <div class=\"hmtitle\"><b>更 新 履 历</b></div>\n        </p-header>\n        <div>\n          <div class=\"release-title\"><b>Ver 1.0.0 Latest</b></div>\n          <p class=\"release-authorship\">\n            <i class=\"fa fa-user-secret fa-1x\" aria-hidden=\"true\"></i>\n            &emsp;released this in <b>2019-02-14</b>\n          </p>\n          <br />\n          <ul class=\"release-body\">\n            <li>增加EAC MDL RT页面&emsp;<b></b></li>\n            <li>增加BP不良下降率页面&emsp;<b></b></li>\n            <li>增加BP Dummy页面&emsp;<b></b></li>\n            <li>增加BP 小时别产能监控页面&emsp;<b></b></li>\n            <li>修改EAC 产能监控 \"E级检出率\"指标&emsp;<b></b></li>\n          </ul>\n        </div>\n        <p-footer>\n          <button pButton label=\"历史\" icon=\"fa fa-history\" class=\"historyButton\" (click)=\"showDialog()\"></button>\n        </p-footer>\n      </p-card>\n    </div>\n    <div class=\"ui-g-12 ui-lg-4\">\n      <p-card styleClass=\"lg-card\">\n        <p-header>\n          <div class=\"hmtitle\"><b>近 期 公 告</b></div>\n        </p-header>\n        <app-noticeboard-history></app-noticeboard-history>\n      </p-card>\n    </div>\n  </div>\n</div>\n\n<p-dialog header=\"Release Note\" [(visible)]=\"display_releaseHistory\" [modal]=\"true\" [responsive]=\"true\" [style]=\"{width: '550px', minWidth: '400px'}\"\n  [minY]=\"70\" [baseZIndex]=\"10000\">\n  <div class=\"width:700px\" id=\"releaseNote\">\n    <div class=\"release-title\" style=\"width:500px\">\n      <b>Ver 1.0.0 Latest</b>\n    </div>\n    <p class=\"release-authorship\">\n      <i class=\"fa fa-user-secret\" aria-hidden=\"true\"></i>\n      &emsp;released this in <b>2019-02-14</b>\n    </p>\n    <br />\n    <ul class=\"release-body\">\n      <li>增加EAC MDL RT页面&emsp;<b></b></li>\n      <li>增加BP不良下降率页面&emsp;<b></b></li>\n      <li>增加BP Dummy页面&emsp;<b></b></li>\n      <li>增加BP 小时别产能监控页面&emsp;<b></b></li>\n      <li>修改EAC 产能监控 \"E级检出率\"指标&emsp;<b></b></li>\n    </ul>\n    <br/>\n    <div class=\"release-title\" style=\"width:500px\">\n      <b>Ver 0.0.1 Latest</b>\n    </div>\n    <p class=\"release-authorship\">\n      <i class=\"fa fa-user-secret\" aria-hidden=\"true\"></i>\n      &emsp;released this in <b>2019-01-21</b>\n    </p>\n    <br />\n    <ul class=\"release-body\">\n      <li>增加产能热点监控页面&emsp;<b></b></li>\n      <li>增加BP Dummy页面&emsp;<b></b></li>\n      <li>增加OEE Wet Strip/Pre Clean页面&emsp;<b></b></li>\n      <li>修改设备状态监控数据逻辑&emsp;<b></b></li>\n      <li>修改WIP/Move数据计算逻辑&emsp;<b></b></li>\n    </ul>\n  </div>\n  <p-footer>\n    <!--     <button type=\"button\" pButton icon=\"pi pi-check\" (click)=\"display=false\" label=\"Yes\"></button>\n    <button type=\"button\" pButton icon=\"pi pi-close\" (click)=\"display=false\" label=\"No\" class=\"ui-button-secondary\"></button> -->\n  </p-footer>\n</p-dialog>"

/***/ }),

/***/ "./src/app/homepage/homepage.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomepageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomepageComponent = /** @class */ (function () {
    function HomepageComponent() {
        this.display_overlay = false;
        this.display_releaseHistory = false;
    }
    HomepageComponent.prototype.ngOnInit = function () {
        this.images = [];
        this.images.push({ source: 'assets/demo/images/homepage/10.jpg', alt: 'Description for Image 1', title: 'Title 1' });
        this.images.push({ source: 'assets/demo/images/homepage/1.png', alt: 'Description for Image 1', title: 'Title 1' });
        this.images.push({ source: 'assets/demo/images/homepage/2.jpg', alt: 'Description for Image 2', title: 'Title 3' });
        this.images.push({ source: 'assets/demo/images/homepage/3.jpg', alt: 'Description for Image 3', title: 'Title 3' });
        this.images.push({ source: 'assets/demo/images/homepage/4.jpg', alt: 'Description for Image 4', title: 'Title 4' });
        this.images.push({ source: 'assets/demo/images/homepage/5.jpg', alt: 'Description for Image 5', title: 'Title 5' });
        this.images.push({ source: 'assets/demo/images/homepage/6.jpg', alt: 'Description for Image 6', title: 'Title 6' });
        this.images.push({ source: 'assets/demo/images/homepage/7.jpg', alt: 'Description for Image 7', title: 'Title 7' });
        this.images.push({ source: 'assets/demo/images/homepage/8.png', alt: 'Description for Image 8', title: 'Title 8' });
        /*     this.images.push({ source: 'assets/demo/images/nature/nature9.jpg', alt: 'Description for Image 9', title: 'Title 9' });
            this.images.push({ source: 'assets/demo/images/nature/nature10.jpg', alt: 'Description for Image 10', title: 'Title 10' });
            this.images.push({ source: 'assets/demo/images/nature/nature11.jpg', alt: 'Description for Image 11', title: 'Title 11' });
            this.images.push({ source: 'assets/demo/images/nature/nature12.jpg', alt: 'Description for Image 12', title: 'Title 12' });
         */
        this.viewHistory = localStorage.getItem('viewHistory').split(';');
        this.initialReleaseDate();
    };
    HomepageComponent.prototype.onDateSelect = function (event) {
        var selectDate = event;
        console.log(selectDate.toLocaleTimeString());
    };
    HomepageComponent.prototype.initialReleaseDate = function () {
        this.releaseDate = [
            new Date("2019-1-1"),
            new Date("2019-1-3")
        ];
    };
    HomepageComponent.prototype.showDialog = function () {
        this.display_releaseHistory = true;
    };
    HomepageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-homepage',
            template: __webpack_require__("./src/app/homepage/homepage.component.html"),
            styles: [__webpack_require__("./src/app/homepage/homepage.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [])
    ], HomepageComponent);
    return HomepageComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/***/ (function(module, exports) {

module.exports = "body .ui-dropdown .ui-dropdown-trigger .fa {\r\n    color: white\r\n}"

/***/ }),

/***/ "./src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"col-md-6 col-md-offset-3\">\r\n        <h2>Login</h2>\r\n        <form name=\"form\" (ngSubmit)=\"f.form.valid && login()\" #f=\"ngForm\" novalidate>\r\n            <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !username.valid }\">\r\n                <label for=\"username\">Username</label>\r\n                <input type=\"text\" class=\"form-control\" name=\"username\" [(ngModel)]=\"model.username\" #username=\"ngModel\" required />\r\n                <div *ngIf=\"f.submitted && !username.valid\" class=\"help-block\">Username is required</div>\r\n            </div>\r\n            <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !password.valid }\">\r\n                <label for=\"password\">Password</label>\r\n                <input type=\"password\" class=\"form-control\" name=\"password\" [(ngModel)]=\"model.password\" #password=\"ngModel\" required />\r\n                <div *ngIf=\"f.submitted && !password.valid\" class=\"help-block\">Password is required</div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <button [disabled]=\"loading\" class=\"btn btn-primary\">Login</button>\r\n                <img *ngIf=\"loading\" src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\" />\r\n                <a [routerLink]=\"['/register']\" class=\"btn btn-link\">Register</a>\r\n            </div>\r\n        </form>\r\n    </div> -->\r\n\r\n<body class=\"login-body\">\r\n    <div class=\"login-panel ui-fluid\">\r\n        <div class=\"login-panel-header ui-g\">\r\n            <div class=\"ui-g-4\"></div>\r\n            <div class=\"ui-g-4\" style=\"text-align: center\">\r\n                <img src=\"assets/layout/images/logo-white.png\" style=\"display: inline/inline-block\">\r\n            </div>\r\n            <div class=\"ui-g-4\">\r\n                <p-dropdown [options]=\"languageList\" [(ngModel)]=\"selectLang\" placeholder=\"{{ 'language select' | translate }}\"\r\n                    [ngStyle]=\"{'float': 'right', 'color': 'white'}\" (onChange)=\"langChanged()\"></p-dropdown>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"login-panel-content\">\r\n            <div class=\"ui-g\">\r\n                <div class=\"ui-g-12\">\r\n                    <h1>{{ 'login.title' | translate }}</h1>\r\n                </div>\r\n\r\n                <form name=\"form\" (ngSubmit)=\"f.form.valid && login()\" #f=\"ngForm\" novalidate>\r\n                    <div class=\"ui-g form-group\">\r\n                        <div class=\"ui-g-12\">\r\n                            <span class=\"md-inputfield\">\r\n                                <input type=\"text\" pInputText name=\"username\" [(ngModel)]=\"model.username\" #username=\"ngModel\"\r\n                                    required>\r\n                                <label>{{ 'login.username' | translate }}</label>\r\n                                <div *ngIf=\"f.submitted && !username.valid\" class=\"ui-message ui-messages-error ui-corner-all\">\r\n                                    {{ 'require field' | translate }}\r\n                                </div>\r\n                            </span>\r\n\r\n                        </div>\r\n                        <div class=\"ui-g-12\" [ngClass]=\"{ 'has-error': f.submitted && !password.valid }\">\r\n                            <span class=\"md-inputfield\">\r\n                                <input type=\"password\" pInputText name=\"password\" [(ngModel)]=\"model.password\"\r\n                                    #password=\"ngModel\" required>\r\n                                <label>{{ 'login.password' | translate }}</label>\r\n                                <div *ngIf=\"f.submitted && !password.valid\" class=\"ui-message ui-messages-error ui-corner-all\">\r\n                                    {{ 'require field' | translate }}\r\n                                </div>\r\n                            </span>\r\n                        </div>\r\n                        <div class=\"ui-g-12\">\r\n                            <button type=\"submit\" class=\"ui-button ui-widget ui-corner-all ui-button-text-icon-left\"\r\n                                [disabled]=\"loading\">\r\n                                <span class=\"ui-button-icon-left fa ui-icon-person\"></span>\r\n                                <span class=\"ui-button-text\">{{ 'login' | translate }}</span>\r\n                                <img *ngIf=\"loading\" src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\" />\r\n                            </button>\r\n                            <span class=\"md-inputfield\">\r\n                                <div *ngIf=\"submitError\" class=\"ui-message ui-messages-error ui-corner-all\">\r\n                                    用户名或密码错误\r\n                                </div>\r\n                            </span>\r\n                        </div>\r\n                    </div>\r\n                </form>\r\n                <div class=\"ui-g-12\">\r\n                    <!-- Don't have an account? <a href=\"#\">Sign Up</a> now. -->\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n    </div>\r\n</body>"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__ = __webpack_require__("./src/app/_services/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__("./node_modules/@ngx-translate/core/@ngx-translate/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import { AlertService,  } from '../_services/index';


// import {InputTextModule} from 'primeng/inputtext';
var LoginComponent = /** @class */ (function () {
    function LoginComponent(route, router, authenticationService, translate) {
        this.route = route;
        this.router = router;
        this.authenticationService = authenticationService;
        this.translate = translate;
        this.model = {};
        this.loading = false;
        this.selectLang = 'zh';
        this.submitError = false;
        this.selectLang = window.localStorage.getItem('language') || 'zh';
        translate.setDefaultLang('en');
        translate.use(this.selectLang);
    }
    LoginComponent.prototype.ngOnInit = function () {
        // reset login status
        //this.authenticationService.logout();
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
        this.languageList = [
            { label: '中文（简体）', value: 'zh' },
            { label: 'English', value: 'en' }
        ];
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.loading = true;
        this.authenticationService.login(this.model.username, this.model.password)
            .subscribe(function (data) {
            if (data.checkState == 1) {
                window.localStorage.setItem('language', _this.selectLang);
                _this.router.navigate([_this.returnUrl]);
            }
            else {
                _this.loading = false;
                _this.submitError = true;
            }
        }, function (error) {
            console.error(error);
            _this.loading = false;
            _this.submitError = true;
        });
        /*
                        window.localStorage.setItem('language', this.selectLang);
                        this.router.navigate([this.returnUrl]);
                        console.log(this.returnUrl); */
    };
    LoginComponent.prototype.langChanged = function () {
        // console.log(this.selectLang);
        this.translate.use(this.selectLang);
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            moduleId: module.i,
            template: __webpack_require__("./src/app/login/login.component.html"),
            styles: [__webpack_require__("./src/app/login/login.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"],
            __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__["a" /* AuthenticationService */],
            __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/noticeboard-history/noticeboard-history.component.css":
/***/ (function(module, exports) {

module.exports = "/* 640px 手机 sm */\r\n@media screen and (max-width:40em){\r\n\r\n}\r\n/* 641px 平板 md*/\r\n@media screen and (min-width:40.063em){\r\n\r\n\r\n}\r\n/* 1025px lg 显示器*/\r\n@media screen and (min-width:64.063em){\r\n    .lg-noticetimekey {\r\n        font-size: 1px;\r\n    }\r\n    .lg-subject {\r\n        font-size: 8px;\r\n    }\r\n}\r\n/* 1441px xl 大电视*/\r\n@media screen and (min-width:90.063em){\r\n    .xl-noticetimekey {\r\n        font-size: 12px;\r\n    }\r\n    .xl-subject {\r\n        font-size: 14px;\r\n    }\r\n}"

/***/ }),

/***/ "./src/app/noticeboard-history/noticeboard-history.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <p-listbox [options]=\"noticelist\" [(ngModel)]=\"selectNotice\" optionLabel=\"subject\" [listStyle]=\"{'height':'300px'}\"></p-listbox>\n -->\n<!-- <p-listbox [options]=\"noticelist\" [(ngModel)]=\"selectNotice\" (onChange)=\"onChange($event)\" optionLabel=\"subject\"\n    [listStyle]=\"{'height':'300px','width':'500px'}\" [style]=\"{'width':'500px'}\">\n        <ng-template let-noticelist pTemplate=\"item\">\n        <div>\n            <span style=\"float:left;margin:20px 10px 0 0\">{{noticelist.subject}}</span>\n            <span style=\"float:right;margin:20px 10px 0 0\">{{noticelist.timekey}}</span>\n        </div>\n    </ng-template>\n</p-listbox> -->\n<div style=\"margin: 0 0 0 -1%\">\n    <p-orderList [value]=\"noticelist\" [listStyle]=\"{'height':'260px','width':'100%','line-height':'10px'}\" [style]=\"{'width':'100%'}\">\n        <ng-template let-notice pTemplate=\"item\">\n            <div class=\"ui-helper-clearfix\">\n                <div style=\"float:left;margin:15px 5px 0 0\"  class=\"xl-subject lg-subject\">\n                    <a [routerLink]=\"['/boe/communication/noticeboard']\" [queryParams]=\"{subject:notice.subject,timekey:notice.timekey}\"\n                        (click)=\"onClick()\">{{notice.subject}}</a>\n                </div>\n                <div style=\"float:right;margin:15px 5px 0 0\" class=\"xl-noticetimekey lg-noticetimekey\">{{notice.timekey}}</div>\n            </div>\n        </ng-template>\n    </p-orderList>\n</div>\n\n\n<!-- <a [routerLink]=\"['/boe/communication/noticeboard']\" [queryParams]=\"{id:1}\" (click)=\"onClick()\">跳呀跳</a> -->"

/***/ }),

/***/ "./src/app/noticeboard-history/noticeboard-history.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NoticeboardHistoryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_common_service_api_api_service__ = __webpack_require__("./src/app/common/service/api/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_common_model_system_noticeboard__ = __webpack_require__("./src/app/common/model/system/noticeboard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_common_service_message_service__ = __webpack_require__("./src/app/common/service/message.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NoticeboardHistoryComponent = /** @class */ (function () {
    function NoticeboardHistoryComponent(httpService, message) {
        this.httpService = httpService;
        this.message = message;
        this.selectNotice = new __WEBPACK_IMPORTED_MODULE_2_app_common_model_system_noticeboard__["a" /* NoticeBoard */]();
        this.currentUserName = localStorage.getItem('currentUserName');
    }
    NoticeboardHistoryComponent.prototype.ngOnInit = function () {
        this.message.sendMessage(6666); // 組件B發送消息
        this.cols = [
            { field: 'subject', header: '主题' },
            { field: 'timekey', header: '发布日期' },
        ];
        this.getNoticeList();
    };
    NoticeboardHistoryComponent.prototype.ngOnDestroy = function () {
    };
    NoticeboardHistoryComponent.prototype.getNoticeList = function () {
        var _this = this;
        var options = {
            params: {
                currentUserName: this.currentUserName,
            }
        };
        var url;
        url = '/noticeboard/getNoticeList';
        this.httpService.get(url, options).subscribe(function (res) {
            _this.noticelist = res;
        }, function (error) { console.log(error); });
    };
    NoticeboardHistoryComponent.prototype.onClick = function () {
        this.message.sendMessage(6666); // 組件B發送消息
    };
    NoticeboardHistoryComponent.prototype.onChange = function (event) {
        console.log(event.value);
    };
    NoticeboardHistoryComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-noticeboard-history',
            template: __webpack_require__("./src/app/noticeboard-history/noticeboard-history.component.html"),
            styles: [__webpack_require__("./src/app/noticeboard-history/noticeboard-history.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_app_common_service_api_api_service__["a" /* ApiService */], __WEBPACK_IMPORTED_MODULE_3_app_common_service_message_service__["a" /* MessageService */]])
    ], NoticeboardHistoryComponent);
    return NoticeboardHistoryComponent;
}());



/***/ }),

/***/ "./src/assets/echartTheme/dark.js":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/

(function (root, factory) {
    if (true) {
        // AMD. Register as an anonymous module.
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__("./node_modules/echarts/index.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {
        // CommonJS
        factory(exports, require('echarts'));
    } else {
        // Browser globals
        factory({}, root.echarts);
    }
}(this, function (exports, echarts) {
    var log = function (msg) {
        if (typeof console !== 'undefined') {
            console && console.error && console.error(msg);
        }
    };
    if (!echarts) {
        log('ECharts is not Loaded');
        return;
    }
    var contrastColor = '#eee';
    var axisCommon = function () {
        return {
            axisLine: {
                lineStyle: {
                    color: contrastColor
                }
            },
            axisTick: {
                lineStyle: {
                    color: contrastColor
                }
            },
            axisLabel: {
                textStyle: {
                    color: contrastColor
                }
            },
            splitLine: {
                lineStyle: {
                    type: 'dashed',
                    color: '#aaa'
                }
            },
            splitArea: {
                areaStyle: {
                    color: contrastColor
                }
            }
        };
    };

    var colorPalette = ['#dd6b66','#759aa0','#e69d87','#8dc1a9','#ea7e53','#eedd78','#73a373','#73b9bc','#7289ab', '#91ca8c','#f49f42'];
    var theme = {
        color: colorPalette,
        backgroundColor: '#333',
        tooltip: {
            axisPointer: {
                lineStyle: {
                    color: contrastColor
                },
                crossStyle: {
                    color: contrastColor
                }
            }
        },
        legend: {
            textStyle: {
                color: contrastColor
            }
        },
        textStyle: {
            color: contrastColor
        },
        title: {
            textStyle: {
                color: contrastColor
            }
        },
        toolbox: {
            iconStyle: {
                normal: {
                    borderColor: contrastColor
                }
            }
        },
        dataZoom: {
            textStyle: {
                color: contrastColor
            }
        },
        visualMap: {
            textStyle: {
                color: contrastColor
            }
        },
        timeline: {
            lineStyle: {
                color: contrastColor
            },
            itemStyle: {
                normal: {
                    color: colorPalette[1]
                }
            },
            label: {
                normal: {
                    textStyle: {
                        color: contrastColor
                    }
                }
            },
            controlStyle: {
                normal: {
                    color: contrastColor,
                    borderColor: contrastColor
                }
            }
        },
        timeAxis: axisCommon(),
        logAxis: axisCommon(),
        valueAxis: axisCommon(),
        categoryAxis: axisCommon(),

        line: {
            symbol: 'circle'
        },
        graph: {
            color: colorPalette
        },
        gauge: {
            title: {
                textStyle: {
                    color: contrastColor
                }
            }
        },
        candlestick: {
            itemStyle: {
                normal: {
                    color: '#FD1050',
                    color0: '#0CF49B',
                    borderColor: '#FD1050',
                    borderColor0: '#0CF49B'
                }
            }
        }
    };
    theme.categoryAxis.splitLine.show = false;
    echarts.registerTheme('dark', theme);
}));

/***/ }),

/***/ "./src/assets/echartTheme/infographic.js":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/

(function (root, factory) {if (true) {
        // AMD. Register as an anonymous module.
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__("./node_modules/echarts/index.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {
        // CommonJS
        factory(exports, require('echarts'));
    } else {
        // Browser globals
        factory({}, root.echarts);
    }
}(this, function (exports, echarts) {
    var log = function (msg) {
        if (typeof console !== 'undefined') {
            console && console.error && console.error(msg);
        }
    };
    if (!echarts) {
        log('ECharts is not Loaded');
        return;
    }

    var colorPalette = [
        '#C1232B','#27727B','#FCCE10','#E87C25','#B5C334',
        '#FE8463','#9BCA63','#FAD860','#F3A43B','#60C0DD',
        '#D7504B','#C6E579','#F4E001','#F0805A','#26C0C0'
    ];

    var theme = {

        color: colorPalette,

        title: {
            textStyle: {
                fontWeight: 'normal',
                color: '#27727B'
            }
        },

        visualMap: {
            color:['#C1232B','#FCCE10']
        },

        toolbox: {
            iconStyle: {
                normal: {
                    borderColor: colorPalette[0]
                }
            }
        },

        tooltip: {
            backgroundColor: 'rgba(50,50,50,0.5)',
            axisPointer : {
                type : 'line',
                lineStyle : {
                    color: '#27727B',
                    type: 'dashed'
                },
                crossStyle: {
                    color: '#27727B'
                },
                shadowStyle : {
                    color: 'rgba(200,200,200,0.3)'
                }
            }
        },

        dataZoom: {
            dataBackgroundColor: 'rgba(181,195,52,0.3)',
            fillerColor: 'rgba(181,195,52,0.2)',
            handleColor: '#27727B'
        },

        categoryAxis: {
            axisLine: {
                lineStyle: {
                    color: '#27727B'
                }
            },
            splitLine: {
                show: false
            }
        },

        valueAxis: {
            axisLine: {
                show: false
            },
            splitArea : {
                show: false
            },
            splitLine: {
                lineStyle: {
                    color: ['#ccc'],
                    type: 'dashed'
                }
            }
        },

        timeline: {
            lineStyle: {
                color: '#27727B'
            },
            controlStyle: {
                normal: {
                    color: '#27727B',
                    borderColor: '#27727B'
                }
            },
            symbol: 'emptyCircle',
            symbolSize: 3
        },

        line: {
            itemStyle: {
                normal: {
                    borderWidth:2,
                    borderColor:'#fff',
                    lineStyle: {
                        width: 3
                    }
                },
                emphasis: {
                    borderWidth:0
                }
            },
            symbol: 'circle',
            symbolSize: 3.5
        },

        candlestick: {
            itemStyle: {
                normal: {
                    color: '#C1232B',
                    color0: '#B5C334',
                    lineStyle: {
                        width: 1,
                        color: '#C1232B',
                        color0: '#B5C334'
                    }
                }
            }
        },

        graph: {
            color: colorPalette
        },

        map: {
            label: {
                normal: {
                    textStyle: {
                        color: '#C1232B'
                    }
                },
                emphasis: {
                    textStyle: {
                        color: 'rgb(100,0,0)'
                    }
                }
            },
            itemStyle: {
                normal: {
                    areaColor: '#ddd',
                    borderColor: '#eee'
                },
                emphasis: {
                    areaColor: '#fe994e'
                }
            }
        },

        gauge: {
            axisLine: {
                lineStyle: {
                    color: [[0.2, '#B5C334'],[0.8, '#27727B'],[1, '#C1232B']]
                }
            },
            axisTick: {
                splitNumber: 2,
                length: 5,
                lineStyle: {
                    color: '#fff'
                }
            },
            axisLabel: {
                textStyle: {
                    color: '#fff'
                }
            },
            splitLine: {
                length: '5%',
                lineStyle: {
                    color: '#fff'
                }
            },
            title : {
                offsetCenter: [0, -20]
            }
        }
    };

    echarts.registerTheme('infographic', theme);
}));

/***/ }),

/***/ "./src/assets/echartTheme/macarons.js":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/

(function (root, factory) {
    if (true) {
        // AMD. Register as an anonymous module.
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__("./node_modules/echarts/index.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {
        // CommonJS
        factory(exports, require('echarts'));
    } else {
        // Browser globals
        factory({}, root.echarts);
    }
}(this, function (exports, echarts) {
    var log = function (msg) {
        if (typeof console !== 'undefined') {
            console && console.error && console.error(msg);
        }
    };
    if (!echarts) {
        log('ECharts is not Loaded');
        return;
    }

    var colorPalette = [
        '#2ec7c9','#b6a2de','#5ab1ef','#ffb980','#d87a80',
        '#8d98b3','#e5cf0d','#97b552','#95706d','#dc69aa',
        '#07a2a4','#9a7fd1','#588dd5','#f5994e','#c05050',
        '#59678c','#c9ab00','#7eb00a','#6f5553','#c14089'
    ];


    var theme = {
        color: colorPalette,

        title: {
            textStyle: {
                fontWeight: 'normal',
                color: '#008acd'
            }
        },

        visualMap: {
            itemWidth: 15,
            color: ['#5ab1ef','#e0ffff']
        },

        toolbox: {
            iconStyle: {
                normal: {
                    borderColor: colorPalette[0]
                }
            }
        },

        tooltip: {
            backgroundColor: 'rgba(50,50,50,0.5)',
            axisPointer : {
                type : 'line',
                lineStyle : {
                    color: '#008acd'
                },
                crossStyle: {
                    color: '#008acd'
                },
                shadowStyle : {
                    color: 'rgba(200,200,200,0.2)'
                }
            }
        },

        dataZoom: {
            dataBackgroundColor: '#efefff',
            fillerColor: 'rgba(182,162,222,0.2)',
            handleColor: '#008acd'
        },

        grid: {
            borderColor: '#eee'
        },

        categoryAxis: {
            axisLine: {
                lineStyle: {
                    color: '#008acd'
                }
            },
            splitLine: {
                lineStyle: {
                    color: ['#eee']
                }
            }
        },

        valueAxis: {
            axisLine: {
                lineStyle: {
                    color: '#008acd'
                }
            },
            splitArea : {
                show : true,
                areaStyle : {
                    color: ['rgba(250,250,250,0.1)','rgba(200,200,200,0.1)']
                }
            },
            splitLine: {
                lineStyle: {
                    color: ['#eee']
                }
            }
        },

        timeline : {
            lineStyle : {
                color : '#008acd'
            },
            controlStyle : {
                normal : { color : '#008acd'},
                emphasis : { color : '#008acd'}
            },
            symbol : 'emptyCircle',
            symbolSize : 3
        },

        line: {
            smooth : true,
            symbol: 'emptyCircle',
            symbolSize: 3
        },

        candlestick: {
            itemStyle: {
                normal: {
                    color: '#d87a80',
                    color0: '#2ec7c9',
                    lineStyle: {
                        color: '#d87a80',
                        color0: '#2ec7c9'
                    }
                }
            }
        },

        scatter: {
            symbol: 'circle',
            symbolSize: 4
        },

        map: {
            label: {
                normal: {
                    textStyle: {
                        color: '#d87a80'
                    }
                }
            },
            itemStyle: {
                normal: {
                    borderColor: '#eee',
                    areaColor: '#ddd'
                },
                emphasis: {
                    areaColor: '#fe994e'
                }
            }
        },

        graph: {
            color: colorPalette
        },

        gauge : {
            axisLine: {
                lineStyle: {
                    color: [[0.2, '#2ec7c9'],[0.8, '#5ab1ef'],[1, '#d87a80']],
                    width: 10
                }
            },
            axisTick: {
                splitNumber: 10,
                length :15,
                lineStyle: {
                    color: 'auto'
                }
            },
            splitLine: {
                length :22,
                lineStyle: {
                    color: 'auto'
                }
            },
            pointer : {
                width : 5
            }
        }
    };

    echarts.registerTheme('macarons', theme);
}));

/***/ }),

/***/ "./src/assets/echartTheme/roma.js":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/

(function (root, factory) {if (true) {
        // AMD. Register as an anonymous module.
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__("./node_modules/echarts/index.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {
        // CommonJS
        factory(exports, require('echarts'));
    } else {
        // Browser globals
        factory({}, root.echarts);
    }
}(this, function (exports, echarts) {
    var log = function (msg) {
        if (typeof console !== 'undefined') {
            console && console.error && console.error(msg);
        }
    };
    if (!echarts) {
        log('ECharts is not Loaded');
        return;
    }

    var colorPalette = ['#E01F54','#001852','#f5e8c8','#b8d2c7','#c6b38e',
        '#a4d8c2','#f3d999','#d3758f','#dcc392','#2e4783',
        '#82b6e9','#ff6347','#a092f1','#0a915d','#eaf889',
        '#6699FF','#ff6666','#3cb371','#d5b158','#38b6b6'
    ];

    var theme = {
        color: colorPalette,

        visualMap: {
            color:['#e01f54','#e7dbc3'],
            textStyle: {
                color: '#333'
            }
        },

        candlestick: {
            itemStyle: {
                normal: {
                    color: '#e01f54',
                    color0: '#001852',
                    lineStyle: {
                        width: 1,
                        color: '#f5e8c8',
                        color0: '#b8d2c7'
                    }
                }
            }
        },

        graph: {
            color: colorPalette
        },

        gauge : {
            axisLine: {
                lineStyle: {
                    color: [[0.2, '#E01F54'],[0.8, '#b8d2c7'],[1, '#001852']],
                    width: 8
                }
            }
        }
    };

    echarts.registerTheme('roma', theme);
}));

/***/ }),

/***/ "./src/assets/echartTheme/shine.js":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/

(function (root, factory) {if (true) {
        // AMD. Register as an anonymous module.
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__("./node_modules/echarts/index.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {
        // CommonJS
        factory(exports, require('echarts'));
    } else {
        // Browser globals
        factory({}, root.echarts);
    }
}(this, function (exports, echarts) {
    var log = function (msg) {
        if (typeof console !== 'undefined') {
            console && console.error && console.error(msg);
        }
    };
    if (!echarts) {
        log('ECharts is not Loaded');
        return;
    }

    var colorPalette = [
        '#c12e34','#e6b600','#0098d9','#2b821d',
        '#005eaa','#339ca8','#cda819','#32a487'
    ];

    var theme = {

        color: colorPalette,

        title: {
            textStyle: {
                fontWeight: 'normal'
            }
        },

        visualMap: {
            color:['#1790cf','#a2d4e6']
        },

        toolbox: {
            iconStyle: {
                normal: {
                    borderColor: '#06467c'
                }
            }
        },

        tooltip: {
            backgroundColor: 'rgba(0,0,0,0.6)'
        },

        dataZoom: {
            dataBackgroundColor: '#dedede',
            fillerColor: 'rgba(154,217,247,0.2)',
            handleColor: '#005eaa'
        },

        timeline: {
            lineStyle: {
                color: '#005eaa'
            },
            controlStyle: {
                normal: {
                    color: '#005eaa',
                    borderColor: '#005eaa'
                }
            }
        },

        candlestick: {
            itemStyle: {
                normal: {
                    color: '#c12e34',
                    color0: '#2b821d',
                    lineStyle: {
                        width: 1,
                        color: '#c12e34',
                        color0: '#2b821d'
                    }
                }
            }
        },

        graph: {
            color: colorPalette
        },

        map: {
            label: {
                normal: {
                    textStyle: {
                        color: '#c12e34'
                    }
                },
                emphasis: {
                    textStyle: {
                        color: '#c12e34'
                    }
                }
            },
            itemStyle: {
                normal: {
                    borderColor: '#eee',
                    areaColor: '#ddd'
                },
                emphasis: {
                    areaColor: '#e6b600'
                }
            }
        },

        gauge: {
            axisLine: {
                show: true,
                lineStyle: {
                    color: [[0.2, '#2b821d'],[0.8, '#005eaa'],[1, '#c12e34']],
                    width: 5
                }
            },
            axisTick: {
                splitNumber: 10,
                length:8,
                lineStyle: {
                    color: 'auto'
                }
            },
            axisLabel: {
                textStyle: {
                    color: 'auto'
                }
            },
            splitLine: {
                length: 12,
                lineStyle: {
                    color: 'auto'
                }
            },
            pointer: {
                length: '90%',
                width: 3,
                color: 'auto'
            },
            title: {
                textStyle: {
                    color: '#333'
                }
            },
            detail: {
                textStyle: {
                    color: 'auto'
                }
            }
        }
    };
    echarts.registerTheme('shine', theme);
}));

/***/ }),

/***/ "./src/assets/echartTheme/vintage.js":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/

(function (root, factory) {
    if (true) {
        // AMD. Register as an anonymous module.
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__("./node_modules/echarts/index.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {
        // CommonJS
        factory(exports, require('echarts'));
    } else {
        // Browser globals
        factory({}, root.echarts);
    }
}(this, function (exports, echarts) {
    var log = function (msg) {
        if (typeof console !== 'undefined') {
            console && console.error && console.error(msg);
        }
    };
    if (!echarts) {
        log('ECharts is not Loaded');
        return;
    }
    var colorPalette = ['#d87c7c','#919e8b', '#d7ab82',  '#6e7074','#61a0a8','#efa18d', '#787464', '#cc7e63', '#724e58', '#4b565b'];
    echarts.registerTheme('vintage', {
        color: colorPalette,
        backgroundColor: '#fef8ef',
        graph: {
            color: colorPalette
        }
    });
}));

/***/ }),

/***/ "./src/core/layout/breadcrumb/app.breadcrumb.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"layout-breadcrumb\">\n    <ul>\n        <li><a routerLink=\"\"><i class=\"material-icons\">home</i></a></li>\n        <li>/</li>\n        <ng-template ngFor let-item let-last=\"last\" [ngForOf]=\"items\">\n            <li>\n                <a [routerLink]=\"item.routerLink\" *ngIf=\"item.routerLink\">{{item.label}}</a>\n                <ng-container *ngIf=\"!item.routerLink\">{{item.label}}</ng-container>\n            </li>\n            <li *ngIf=\"!last\">/</li>\n        </ng-template>\n    </ul>\n    \n    <!-- <div class=\"layout-breadcrumb-options\">\n        <a routerLink=\"/\" title=\"Backup\">\n            <i class=\"material-icons\">backup</i>\n        </a>\n        <a routerLink=\"/\" title=\"Bookmark\">\n            <i class=\"material-icons\">bookmark</i>\n        </a>\n        <a routerLink=\"/\" title=\"Logout\">\n            <i class=\"material-icons\">power_settings_new</i>\n        </a>\n    </div> -->\n</div>"

/***/ }),

/***/ "./src/core/layout/breadcrumb/app.breadcrumb.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppBreadcrumbComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__breadcrumb_service_breadcrumb_service__ = __webpack_require__("./src/core/layout/breadcrumb/service/breadcrumb.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppBreadcrumbComponent = /** @class */ (function () {
    function AppBreadcrumbComponent(breadcrumbService) {
        var _this = this;
        this.breadcrumbService = breadcrumbService;
        this.subscription = breadcrumbService.itemsHandler.subscribe(function (response) {
            _this.items = response;
        });
    }
    AppBreadcrumbComponent.prototype.ngOnDestroy = function () {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    };
    AppBreadcrumbComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-breadcrumb',
            template: __webpack_require__("./src/core/layout/breadcrumb/app.breadcrumb.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__breadcrumb_service_breadcrumb_service__["a" /* BreadcrumbService */]])
    ], AppBreadcrumbComponent);
    return AppBreadcrumbComponent;
}());



/***/ }),

/***/ "./src/core/layout/breadcrumb/service/breadcrumb.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BreadcrumbService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("./node_modules/rxjs/_esm5/Subject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var BreadcrumbService = /** @class */ (function () {
    function BreadcrumbService() {
        this.itemsSource = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this.itemsHandler = this.itemsSource.asObservable();
    }
    BreadcrumbService.prototype.setItems = function (items) {
        this.breadcrumbItem = items;
        this.itemsSource.next(items);
    };
    BreadcrumbService.prototype.getItem = function () {
        return this.breadcrumbItem;
    };
    BreadcrumbService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], BreadcrumbService);
    return BreadcrumbService;
}());



/***/ }),

/***/ "./src/core/layout/default/default.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LayoutDefaultComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var LayoutDefaultComponent = /** @class */ (function () {
    function LayoutDefaultComponent() {
    }
    LayoutDefaultComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            //selector: 'layout-default',
            selector: 'app-root',
            template: "<router-outlet></router-outlet>"
            //templateUrl: './default.component.html',
        })
    ], LayoutDefaultComponent);
    return LayoutDefaultComponent;
}());



/***/ }),

/***/ "./src/core/layout/footer/app.footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppFooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppFooterComponent = /** @class */ (function () {
    function AppFooterComponent() {
        this.this_year = new Date().getFullYear();
    }
    AppFooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-footer',
            template: "\n        <div class=\"layout-footer clearfix\">\n        \t<a href=\"/\">\n        \t\t<img alt=\"logo-colored\" src=\"assets/layout/images/logo-blue.png\" />\n            </a>\n            <span class=\"footer-text-right\" style=\"font-size:1px\">\n                <!--<span class=\"material-icons\">copyright</span>\n                2018 - {{this_year}}-->\n                <span>Copyright 2016 - {{this_year}} BOE B7 CIM All Rights Reserved</span>\n            </span>\n        </div>"
        }),
        __metadata("design:paramtypes", [])
    ], AppFooterComponent);
    return AppFooterComponent;
}());



/***/ }),

/***/ "./src/core/layout/fullscreen/fullscreen.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/core/layout/fullscreen/fullscreen.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LayoutFullScreenComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var LayoutFullScreenComponent = /** @class */ (function () {
    function LayoutFullScreenComponent() {
    }
    LayoutFullScreenComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'layout-fullscreen',
            template: __webpack_require__("./src/core/layout/fullscreen/fullscreen.component.html"),
        })
    ], LayoutFullScreenComponent);
    return LayoutFullScreenComponent;
}());



/***/ }),

/***/ "./src/core/layout/menu/app.menu.component.css":
/***/ (function(module, exports) {

module.exports = ".layout-sidebar {\r\n    opacity: 0.90;\r\n    filter:alpha(opacity=90);\r\n    -moz-opacity:0.90;\r\n}\r\n.menuPanel.ui-scrollPanel {\r\n    height: 100%;\r\n}"

/***/ }),

/***/ "./src/core/layout/menu/app.menu.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"layout-sidebar\" [ngClass]=\"{'layout-sidebar-active': app.sidebarActive, 'layout-sidebar-dark': app.darkMenu}\"\n    (click)=\"app.onSidebarClick($event)\" (mouseover)=\"app.sidebarActive=true\" (mouseleave)=\"app.sidebarActive=false\">\n    <div class=\"sidebar-logo\">\n        <a routerLink=\"/\">\n            <img alt=\"logo\" src=\"assets/layout/images/company-logo.png\" id=\"main-logo\"/>\n<!--             <span class=\"app-name\" style=\"font-size: 20px;\">\n                bidmReport\n            </span> -->\n        </a>\n        <a href=\"#\" class=\"sidebar-anchor\" title=\"Toggle Menu\" (click)=\"app.onToggleMenuClick($event)\"></a>\n    </div>\n\n    <p-scrollPanel #scrollPanel [style]=\"{height: '100%'}\">\n        <ul app-submenu [item]=\"menuList\" root=\"true\" class=\"layout-menu\" visible=\"true\" [reset]=\"reset\"></ul>\n    </p-scrollPanel>\n<!--     <p-scrollPanel #scrollPanel styleClass=\"menuPanel\">\n        <ul app-submenu [item]=\"menuList\" root=\"true\" class=\"layout-menu\" visible=\"true\" [reset]=\"reset\"></ul>\n    </p-scrollPanel> -->\n\n</div>\n"

/***/ }),

/***/ "./src/core/layout/menu/app.menu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppMenuComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return AppSubMenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_common_model_language__ = __webpack_require__("./src/app/common/model/language.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_common_service_api_api_service__ = __webpack_require__("./src/app/common/service/api/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_animations__ = __webpack_require__("./node_modules/@angular/animations/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_primeng_primeng__ = __webpack_require__("./node_modules/primeng/primeng.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_primeng_primeng__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_app_app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









// import { TabService } from 'core/layout/retab/service/tab.service';
var AppMenuComponent = /** @class */ (function () {
    function AppMenuComponent(app, http, service
        //,public tService: TabService
    ) {
        this.app = app;
        this.http = http;
        this.service = service;
        this.language = new __WEBPACK_IMPORTED_MODULE_0__app_common_model_language__["a" /* Language */]();
    }
    AppMenuComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () { _this.layoutMenuScrollerViewChild.moveBar(); }, 100);
    };
    AppMenuComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.language.lang_local = 'zh';
        this.service.post('/menu/getMenuList', this.language).subscribe(function (res) {
            _this.respText = res;
            _this.menuList = _this.respText.menuList;
        }, function (error) {
            _this.logout();
        });
    };
    /*    ngOnInit() {
            this.http.get('assets/menu/menu.json').subscribe(
                (data) => {
                    this.menuList = data['items'];
                }
            );
        } */
    AppMenuComponent.prototype.logout = function () {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.service.post('/logout', '').subscribe(function (res) {
            console.log(res);
        }, function (error) { console.log(error); });
        window.location.href = '/';
    };
    AppMenuComponent.prototype.changeTheme = function (theme) {
        var themeLink = document.getElementById('theme-css');
        themeLink.href = 'assets/theme/theme-' + theme + '.css';
    };
    AppMenuComponent.prototype.changeLayout = function (theme) {
        var layoutLink = document.getElementById('layout-css');
        layoutLink.href = 'assets/layout/css/layout-' + theme + '.css';
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], AppMenuComponent.prototype, "reset", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["ViewChild"])('scrollPanel'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_6_primeng_primeng__["ScrollPanel"])
    ], AppMenuComponent.prototype, "layoutMenuScrollerViewChild", void 0);
    AppMenuComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
            selector: 'app-menu',
            template: __webpack_require__("./src/core/layout/menu/app.menu.component.html"),
            styles: [__webpack_require__("./src/core/layout/menu/app.menu.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_7_app_app_component__["a" /* AppComponent */], __WEBPACK_IMPORTED_MODULE_8__angular_common_http__["b" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_1__app_common_service_api_api_service__["a" /* ApiService */]
            //,public tService: TabService
        ])
    ], AppMenuComponent);
    return AppMenuComponent;
}());

var AppSubMenuComponent = /** @class */ (function () {
    function AppSubMenuComponent(app, router, location, appMenu) {
        this.app = app;
        this.router = router;
        this.location = location;
        this.appMenu = appMenu;
    }
    AppSubMenuComponent.prototype.itemClick = function (event, item, index) {
        var _this = this;
        if (this.root) {
            this.app.menuHoverActive = !this.app.menuHoverActive;
            event.preventDefault();
        }
        // avoid processing disabled items
        if (item.disabled) {
            event.preventDefault();
            return true;
        }
        // activate current item and deactivate active sibling if any
        if (item.routerLink || item.items || item.command || item.url) {
            this.activeIndex = (this.activeIndex === index) ? -1 : index;
        }
        // execute command
        if (item.command) {
            item.command({ originalEvent: event, item: item });
        }
        // prevent hash change
        if (item.items || (!item.url && !item.routerLink)) {
            setTimeout(function () {
                _this.appMenu.layoutMenuScrollerViewChild.moveBar();
            }, 450);
            event.preventDefault();
        }
        // hide menu
        if (!item.items) {
            if (this.app.isMobile()) {
                this.app.sidebarActive = false;
                this.app.mobileMenuActive = false;
            }
            if (this.app.isHorizontal()) {
                this.app.resetMenu = true;
            }
            else {
                this.app.resetMenu = false;
            }
            this.app.menuHoverActive = !this.app.menuHoverActive;
        }
    };
    AppSubMenuComponent.prototype.onMouseEnter = function (index) {
        if (this.root && this.app.menuHoverActive && this.app.isHorizontal()
            && !this.app.isMobile() && !this.app.isTablet()) {
            this.activeIndex = index;
        }
    };
    AppSubMenuComponent.prototype.isActive = function (index) {
        return this.activeIndex === index;
    };
    Object.defineProperty(AppSubMenuComponent.prototype, "reset", {
        get: function () {
            return this._reset;
        },
        set: function (val) {
            this._reset = val;
            if (this._reset && (this.app.isHorizontal() || this.app.isOverlay())) {
                this.activeIndex = null;
            }
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], AppSubMenuComponent.prototype, "item", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], AppSubMenuComponent.prototype, "root", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], AppSubMenuComponent.prototype, "visible", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Input"])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], AppSubMenuComponent.prototype, "reset", null);
    AppSubMenuComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
            /* tslint:disable:component-selector */
            selector: '[app-submenu]',
            /* tslint:enable:component-selector */
            template: "\n        <ng-template ngFor let-child let-i=\"index\" [ngForOf]=\"(root ? item : item.items)\">\n        \t<li [ngClass]=\"{'active-menuitem': isActive(i)}\" [class]=\"child.badgeStyleClass\">\n        \t\t<a [href]=\"child.url||'#'\" (click)=\"itemClick($event,child,i)\" *ngIf=\"!child.routerLink\" [attr.tabindex]=\"!visible ? '-1' : null\" [attr.target]=\"child.target\" (mouseenter)=\"onMouseEnter(i)\" class=\"ripplelink\">\n        \t\t\t<i class=\"material-icons\">{{child.icon}}</i>\n        \t\t\t<span class=\"menuitem-text\">{{child.label}}</span>\n        \t\t\t<i class=\"material-icons layout-submenu-toggler\" *ngIf=\"child.items\">keyboard_arrow_down</i>\n        \t\t\t<span class=\"menuitem-badge\" *ngIf=\"child.badge\">{{child.badge}}</span>\n        \t\t</a>\n        \t\t<a (click)=\"itemClick($event,child,i)\" *ngIf=\"child.routerLink\" [routerLink]=\"child.routerLink\" routerLinkActive=\"active-menuitem-routerlink\" [routerLinkActiveOptions]=\"{exact: true}\" [attr.tabindex]=\"!visible ? '-1' : null\" [attr.target]=\"child.target\" (mouseenter)=\"onMouseEnter(i)\" class=\"ripplelink\">\n        \t\t\t<i class=\"material-icons\">{{child.icon}}</i>\n        \t\t\t<span class=\"menuitem-text\">{{child.label}}</span>\n        \t\t\t<i class=\"material-icons layout-submenu-toggler\" *ngIf=\"child.items\">>keyboard_arrow_down</i>\n        \t\t\t<span class=\"menuitem-badge\" *ngIf=\"child.badge\">{{child.badge}}</span>\n        \t\t</a>\n        \t\t<ul app-submenu [item]=\"child\" *ngIf=\"child.items\" [visible]=\"isActive(i)\" [reset]=\"reset\" [@children]=\"(app.isHorizontal())&&root ? isActive(i) ?                    'visible' : 'hidden' : isActive(i) ? 'visibleAnimated' : 'hiddenAnimated'\"></ul>\n        \t</li>\n        </ng-template>",
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["trigger"])('children', [
                    Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["state"])('hiddenAnimated', Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["style"])({
                        height: '0px'
                    })),
                    Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["state"])('visibleAnimated', Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["style"])({
                        height: '*'
                    })),
                    Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["state"])('visible', Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["style"])({
                        height: '*',
                        'z-index': 100
                    })),
                    Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["state"])('hidden', Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["style"])({
                        height: '0px',
                        'z-index': '*'
                    })),
                    Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["transition"])('visibleAnimated => hiddenAnimated', Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["animate"])('400ms cubic-bezier(0.86, 0, 0.07, 1)')),
                    Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["transition"])('hiddenAnimated => visibleAnimated', Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["animate"])('400ms cubic-bezier(0.86, 0, 0.07, 1)'))
                ])
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_7_app_app_component__["a" /* AppComponent */], __WEBPACK_IMPORTED_MODULE_5__angular_router__["Router"], __WEBPACK_IMPORTED_MODULE_4__angular_common__["Location"], AppMenuComponent])
    ], AppSubMenuComponent);
    return AppSubMenuComponent;
}());



/***/ }),

/***/ "./src/core/layout/retab/app.retab.component.css":
/***/ (function(module, exports) {

module.exports = "/* .tooltipa { font:Verdana, Geneva, sans-serif; font-size:12px; font-weight:bold; color:#666; position:relative; }\r\nbody .ui-tabview .ui-tabview-nav > li.ui-state-active a:hover:after{\r\n content:attr(id);\r\n display:block;\r\n padding:10px;\r\n color:#FFF;\r\n background:#333;\r\n position:absolute; top:20px; left:50px;\r\n white-space:nowrap;\r\n}\r\nbody .ui-tabview .ui-tabview-nav > li.ui-state-active a:hover:before{\r\n display:block;\r\n content:\"\";\r\n position:absolute; top:15px; left:50px;\r\n border-right:10px solid transparent; \r\n border-bottom:10px solid #333; \r\n border-left:10px solid transparent;  \r\n} */\r\n/*\r\n.tooltip {\r\n    position: relative;\r\n    display: inline-block;\r\n    border-bottom: 1px dotted black;\r\n}\r\n\r\n .tooltip .tooltiptext {\r\n    visibility: hidden;\r\n    width: 120px;\r\n    background-color: #555;\r\n    color: #fff;\r\n    text-align: center;\r\n    border-radius: 6px;\r\n    padding: 5px 0;\r\n    position: absolute;\r\n    z-index: 1;\r\n    bottom: 125%;\r\n    left: 50%;\r\n    margin-left: -60px;\r\n    opacity: 0;\r\n    transition: opacity 0.3s;\r\n}\r\n\r\n.tooltip .tooltiptext::after {\r\n    content: \"\";\r\n    position: absolute;\r\n    top: 100%;\r\n    left: 50%;\r\n    margin-left: -5px;\r\n    border-width: 5px;\r\n    border-style: solid;\r\n    border-color: #555 transparent transparent transparent;\r\n}\r\n\r\n.tooltip:hover .tooltiptext {\r\n    visibility: visible;\r\n    opacity: 1;\r\n} */\r\n.ui-g-1, .ui-g-12 {\r\n    padding : 0px;\r\n}\r\nbody #classretab .ui-tabview.ui-tabview-top > .ui-tabview-nav {\r\n    background-color: #E0E0E0;\r\n  }\r\nbody #classretab .ui-tabview.ui-tabview-top > .ui-tabview-nav li {\r\n    background-color: #E0E0E0;\r\n    cursor: pointer;\r\n  }\r\n/* body #classretab .ui-tabview.ui-tabview-top > .ui-tabview-nav li.ui-state-default:hover {\r\n    color: rgba(35, 138, 203, 0.2);\r\n  } */\r\nbody #classretab .ui-tabview.ui-tabview-top > .ui-tabview-nav li.ui-state-active {\r\n    background-color: #E0E0E0;\r\n    border-bottom: 2px solid #238ACB;\r\n  }\r\nbody #classretab .ui-tabview .ui-tabview-nav > li.ui-state-active a {\r\n    color: #3D4D66;\r\n  }\r\nbody #classretab .ui-tabview .ui-tabview-nav > li:hover a {\r\n    color: #238ACB;\r\n    background-color: #E0E0E0;\r\n  }\r\nbody #classretab .ui-tabview .ui-tabview-nav > li:hover .fa-close.fa {\r\n    display: block;\r\n  }\r\n/* 640px 手机 sm */\r\n@media screen and (max-width:40em){\r\n\r\n}\r\n/* 641px 平板 md*/\r\n@media screen and (min-width:40.063em){\r\n\r\n\r\n}\r\n/* 1025px lg 显示器*/\r\n@media screen and (min-width:64.063em){\r\n    .lg-tabMove{\r\n        position: fixed;\r\n        right: 5%;\r\n        top: 12%\r\n    }\r\n\r\n}\r\n/* 1441px xl 大电视*/\r\n@media screen and (min-width:90.063em){\r\n\r\n    .xl-tabMove{\r\n        position: fixed;\r\n        right: 2%;\r\n        top: 5%;\r\n    }\r\n\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/core/layout/retab/app.retab.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"items.length !=0 && tabLayout\" class=\"ui-g-12\" [ngStyle]=\"{'padding-top':getPaddingTop() }\">\r\n    <div class=\"ui-g-12\">\r\n        <p-tabView (onClose)=\"handleClose($event)\" (onChange)=\"handleChange($event)\" #classretab id=\"classretab\">\r\n\r\n            <ng-template ngFor let-item [ngForOf]=\"items\" let-i=\"index\">\r\n                <p-tabPanel [header]=\"item.label\" [selected]=\"item.selected\" *ngIf=\"item.displayed\" [closable]=\"items.length==1?false:true\">\r\n\r\n                </p-tabPanel>\r\n            </ng-template>\r\n\r\n<!--             <p-tabPanel [header]=\"item.label\" *ngFor=\"let item of items; let i = index\" [selected]=\"item.selected\"\r\n                [closable]=\"items.length==1?false:true\" *ngIf='item.displayed'>\r\n            </p-tabPanel> -->\r\n\r\n        </p-tabView>\r\n    </div>\r\n    <div class=\"ui-g-1 \">\r\n\r\n        <p-tieredMenu #menu [model]=\"spItems\" [popup]=\"true\"></p-tieredMenu>\r\n        <!--         <button *ngIf=\"items.length < 2\" #btn type=\"button\" pButton icon=\"fa fa-caret-down\" disabled label=\"close\"\r\n            (click)=\"menu.toggle($event)\" style=\"margin-top:6px\"></button>\r\n        <button *ngIf=\"items.length >= 2\" #btn type=\"button\" pButton icon=\"fa fa-caret-down\" label=\"close\" (click)=\"menu.toggle($event)\"\r\n            style=\"margin-top:6px\"></button> -->\r\n    </div>\r\n</div>\r\n<!-- <div class=\"xl-tabMove lg-tabMove\">\r\n    <ul>\r\n        <i class=\"fa ui-icon-chevron-left\" style=\"float: inherit;margin-top: 14px; margin-right: 3px; cursor: pointer;opacity: 0.6;font-size: large;\"\r\n            (click)=\"leftClick();\"></i>\r\n        <i class=\"fa ui-icon-chevron-right\" aria-hidden=\"true\" style=\"margin-top:14px; margin-left: 3px;cursor: pointer;opacity: 0.6;font-size: large;\"\r\n            (click)=\"rightClick();\"></i>\r\n    </ul>\r\n</div> -->"

/***/ }),

/***/ "./src/core/layout/retab/app.retab.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRetabComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_tab_service__ = __webpack_require__("./src/core/layout/retab/service/tab.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__breadcrumb_service_breadcrumb_service__ = __webpack_require__("./src/core/layout/breadcrumb/service/breadcrumb.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_app_component__ = __webpack_require__("./src/app/app.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AppRetabComponent = /** @class */ (function () {
    function AppRetabComponent(tService, router, breadcrumbService, cdr, app) {
        var _this = this;
        this.tService = tService;
        this.router = router;
        this.breadcrumbService = breadcrumbService;
        this.cdr = cdr;
        this.app = app;
        this.items = new Array();
        this.tabLayout = false;
        this.deviceType = localStorage.getItem('deviceType');
        if (this.deviceType == 'tv') {
            this.tabCount = 10;
        }
        else {
            this.tabCount = 7;
        }
        // this.tabLayout =  environment.tabLayout;
        this.tabLayout = !app.isMobile();
        // console.log(this.tabLayout);
        if (this.tabLayout) {
            this.subscription = tService.itemsHandler.subscribe(function (response) {
                //console.log('response : {} ',response);
                _this.items = response;
                for (var i = 0; i < _this.items.length; i++) {
                    if (_this.items[i].selected) {
                        _this.changeRouter(i);
                        break;
                    }
                }
                if (_this.items.length > _this.tabCount) {
                    for (var i = 0; i < _this.items.length - _this.tabCount; i++) {
                        _this.items[i].displayed = false;
                    }
                }
                setTimeout(function () {
                    _this.reloadTooltip();
                }, 100);
                // this.cdr.detectChanges();
            });
        }
    }
    AppRetabComponent.prototype.ngAfterViewInit = function () {
        this.reloadTooltip();
        // attr.value = 'test';
        // targetHTML.setAttributeNode(attr);
    };
    AppRetabComponent.prototype.reloadTooltip = function () {
        var targetHTML = document.getElementsByClassName('ui-corner-top');
        //let targetHTML =document.getElementsByTagName('li');
        var classretabHTML = document.getElementById('classretab');
        //console.log(targetHTML);
        //console.log('classretabHTML : ',classretabHTML);
        if (classretabHTML != null) {
            var retabAHtml = classretabHTML.getElementsByTagName('a');
            //console.log('retabAHtml : ',retabAHtml);
            if (retabAHtml != null) {
                var tabCnt = 0;
                for (var i = 0; i < retabAHtml.length; i++) {
                    var role = retabAHtml[i].getAttribute('role');
                    if (role != null && this.items[tabCnt] != null) {
                        var attr = document.createAttribute('data-tooltip');
                        attr.value = this.items[tabCnt].orgLabel;
                        retabAHtml[i].setAttributeNode(attr);
                        tabCnt++;
                    }
                    // let targetHTML_li = targetHTML[i].children[0];
                    // let role = targetHTML_li.getAttribute('role');
                    // if(role != null && this.items[tabCnt] !=null) {
                    //  let attr = document.createAttribute('data-tooltip');
                    //  attr.value = this.items[tabCnt].orgLabel;
                    //  targetHTML_li.setAttributeNode(attr);
                    //  tabCnt++;
                    // }
                }
            }
        }
    };
    AppRetabComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.spItems = [
            {
                label: 'Close Selected',
                icon: 'fa fa-times',
                command: function (event) { _this.closeTabItem('select'); }
            },
            { separator: true },
            {
                label: 'Close Other',
                icon: 'fa fa-check-square-o',
                command: function (event) { _this.closeTabItem('other'); }
            }
            // ,
            // {separator:true},
            // {
            //     label: 'Close All',
            //     icon: 'fa fa-trash-o',
            //     command: (event) => { this.closeTabItem('all') }
            // }
        ];
    };
    AppRetabComponent.prototype.getPaddingTop = function () {
        if (this.app.isHorizontal()) {
            return '110px';
        }
        else {
            return '48px';
        }
    };
    AppRetabComponent.prototype.getPaddingTopClear = function () {
        if (this.app.isHorizontal()) {
            return '110px';
        }
        else {
            return '48px';
        }
    };
    AppRetabComponent.prototype.closeTabItem = function (delType) {
        //console.log('delType: ',delType);
        if (delType === 'select') {
            this.tService.deleteItem(this.findSelectTab());
        }
        else if (delType === 'other') {
            this.tService.deleteItemOther(this.findSelectTab());
        }
        else {
            this.tService.deleteItemAll();
        }
    };
    AppRetabComponent.prototype.findSelectTab = function () {
        var selectedIndex;
        for (var i = 0; i < this.items.length; i++) {
            var _tmpItem = this.items[i];
            if (_tmpItem.selected) {
                selectedIndex = i;
                break;
            }
        }
        return selectedIndex;
    };
    AppRetabComponent.prototype.handleClose = function (event) {
        //console.log('close tab event {} ',event.index);
        var _index = event.index;
        this.tService.deleteItem(_index);
    };
    AppRetabComponent.prototype.handleChange = function (event) {
        //console.log('handleChange tab event {} ',event);
        this.changeRouter(event.index);
    };
    AppRetabComponent.prototype.changeRouter = function (index) {
        var _item = this.items[index];
        this.router.navigateByUrl(_item.url);
        this.breadcrumbService.setItems(_item.breadcrumb);
        this.reloadTooltip();
    };
    AppRetabComponent.prototype.ngOnDestroy = function () {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    };
    AppRetabComponent.prototype.leftClick = function () {
        debugger;
        var startIndex;
        var endIndex;
        for (var i = 0; i < this.items.length; i++) {
            if (this.items[i].displayed == true) {
                startIndex = i;
                break;
            }
        }
        for (var i = startIndex; i < this.items.length; i++) {
            if (this.items[i].displayed == false) {
                endIndex = i - 1;
                break;
            }
        }
        if (endIndex == undefined || endIndex == null) {
            endIndex = this.items.length - 1;
        }
        if (endIndex - startIndex + 1 > this.tabCount) {
            for (var i = 0; i < startIndex + 1; i++) {
                this.items[i].displayed = false;
            }
            for (var i = startIndex + 1; i < endIndex + 2; i++) {
                this.items[i].displayed = true;
            }
            for (var i = endIndex + 2; i < this.items.length; i++) {
                this.items[i].displayed = false;
            }
        }
    };
    AppRetabComponent.prototype.rightClick = function () {
        debugger;
        var startIndex;
        var endIndex;
        for (var i = 0; i < this.items.length; i++) {
            if (this.items[i].displayed == true) {
                startIndex = i;
                break;
            }
        }
        for (var i = startIndex; i < this.items.length; i++) {
            if (this.items[i].displayed == false) {
                endIndex = i - 1;
                break;
            }
        }
        if (endIndex == undefined || endIndex == null) {
            endIndex = this.items.length - 1;
        }
        var falseStart;
        if (startIndex - 1 < 0) {
            falseStart = 0;
        }
        else {
            falseStart = startIndex - 1;
        }
        if (endIndex - falseStart > this.tabCount) {
            for (var i = 0; i < falseStart; i++) {
                this.items[i].displayed = false;
            }
            for (var i = falseStart; i < endIndex; i++) {
                this.items[i].displayed = true;
            }
            for (var i = endIndex; i < this.items.length; i++) {
                this.items[i].displayed = false;
            }
        }
    };
    AppRetabComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'retab',
            template: __webpack_require__("./src/core/layout/retab/app.retab.component.html"),
            styles: [__webpack_require__("./src/core/layout/retab/app.retab.component.css")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_tab_service__["a" /* TabService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"], __WEBPACK_IMPORTED_MODULE_3__breadcrumb_service_breadcrumb_service__["a" /* BreadcrumbService */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"], __WEBPACK_IMPORTED_MODULE_4_app_app_component__["a" /* AppComponent */]])
    ], AppRetabComponent);
    return AppRetabComponent;
}());



/***/ }),

/***/ "./src/core/layout/retab/service/tab.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("./node_modules/rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabItem__ = __webpack_require__("./src/core/layout/retab/tabItem.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__breadcrumb_service_breadcrumb_service__ = __webpack_require__("./src/core/layout/breadcrumb/service/breadcrumb.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TabService = /** @class */ (function () {
    function TabService(breadcrumbService, router) {
        this.breadcrumbService = breadcrumbService;
        this.router = router;
        this.itemsSource = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this.tabs = new Array;
        this.itemsHandler = this.itemsSource.asObservable();
    }
    TabService.prototype.setMenuList = function (m) {
        this.menuList = m;
    };
    TabService.prototype.init = function (bread_delete) {
        this.tabs = [];
        if (bread_delete) {
            console.log("TabService bread_delete : ", bread_delete);
            this.breadcrumbService.setItems([]);
        }
        this.itemsSource.next(this.tabs);
    };
    TabService.prototype.setItems = function (label) {
        var duplication = false;
        for (var i = 0; i < this.tabs.length; i++) {
            var _tmpItem = this.tabs[i];
            if (_tmpItem.label === this.getLabel(label)) {
                duplication = true;
                break;
            }
        }
        //console.log('setItems2 duplication {} ', duplication);
        if (!duplication) {
            for (var i = 0; i < this.tabs.length; i++) {
                var _tmpItem = this.tabs[i];
                _tmpItem.selected = false;
                this.tabs[i] = _tmpItem;
            }
            var newItem = new __WEBPACK_IMPORTED_MODULE_2__tabItem__["a" /* TabItem */]();
            // newItem.label = label;
            newItem.label = this.getLabel(label);
            newItem.orgLabel = label;
            newItem.breadcrumb = this.breadcrumbService.getItem();
            newItem.url = this.router.url;
            newItem.selected = true;
            newItem.displayed = true;
            this.tabs.push(newItem);
        }
        else {
            for (var i = 0; i < this.tabs.length; i++) {
                var _tmpItem = this.tabs[i];
                if (_tmpItem.label === this.getLabel(label)) {
                    _tmpItem.selected = true;
                }
                else {
                    _tmpItem.selected = false;
                }
                this.tabs[i] = _tmpItem;
            }
        }
        this.itemsSource.next(this.tabs);
    };
    TabService.prototype.getLabel = function (label) {
        var len = label.length;
        if (len > 20) {
            return label.substring(0, 20) + '..';
        }
        return label;
    };
    TabService.prototype.getItems = function () {
        return this.tabs;
    };
    TabService.prototype.deleteItem = function (index) {
        var removeTab = this.tabs.splice(index, 1);
        if (removeTab[0].selected) {
            var _tmpItem = this.tabs[0];
            _tmpItem.selected = true;
            this.tabs[0] = _tmpItem;
        }
        //console.log('deleteItem after this.tabs is {} ', this.tabs);
        this.itemsSource.next(this.tabs);
    };
    TabService.prototype.deleteItemOther = function (index) {
        var selectTab = this.tabs[index];
        this.tabs.splice(0, this.tabs.length);
        this.tabs.push(selectTab);
        this.itemsSource.next(this.tabs);
    };
    TabService.prototype.deleteItemAll = function () {
        this.tabs.splice(0, this.tabs.length);
        this.itemsSource.next(this.tabs);
    };
    TabService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__breadcrumb_service_breadcrumb_service__["a" /* BreadcrumbService */], __WEBPACK_IMPORTED_MODULE_4__angular_router__["Router"]])
    ], TabService);
    return TabService;
}());



/***/ }),

/***/ "./src/core/layout/retab/tabItem.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabItem; });
var TabItem = /** @class */ (function () {
    function TabItem() {
    }
    return TabItem;
}());



/***/ }),

/***/ "./src/core/layout/topbar/app.topbar.component.html":
/***/ (function(module, exports) {

module.exports = "<p-growl [(value)]=\"msgs\"></p-growl>\n\n<div class=\"layout-topbar\">\n\n    <a routerLink=\"/\" *ngIf=\"app.isHorizontal() && !app.isMobile()\" class=\"topbar-logo\">\n        <img alt=\"logo\" src=\"assets/layout/images/company-logo.png\" />\n        <!-- <span class=\"app-name\">bidmReport</span> -->\n    </a>\n\n    <img alt=\"logo\" src=\"assets/layout/images/logo-white.png\" class=\"mobile-logo\" />\n\n    <a href=\"#\" class=\"menu-btn\" (click)=\"app.onMenuButtonClick($event)\">\n        <i class=\"material-icons\">&#xE5D2;</i>\n    </a>\n\n    <a href=\"#\" class=\"topbar-menu-btn\" (click)=\"app.onTopbarMobileMenuButtonClick($event)\">\n        <i class=\"material-icons\">&#xE853;</i>\n    </a>\n\n    <div class=\"layout-topbar-menu-wrapper ui-g\">\n        <div class=\"ui-g-4\"></div>\n        <div class=\"ui-g-4\" style=\"text-align: center\">\n            <!--             <label style=\"color: white; font-size: 22px;\">{{currentDate}}</label> -->\n        </div>\n        <div class=\"ui-g-4\" style=\"padding-top: 0\">\n            <ul class=\"topbar-menu fadeInDown\" [ngClass]=\"{'topbar-menu-active': app.topbarMenuActive}\" (click)=\"app.onTopbarMenuClick($event,settings)\">\n                <!--                 <li>\n                    <a style=\"cursor:pointer\">\n                        <i class=\"topbar-icon material-icons\">&#xE853;</i>\n                        <span class=\"topbar-item-name\" style=\"color:white\">{{currentUser}}</span>\n                    </a>\n                </li> -->\n                <li #settings [ngClass]=\"{'active-topmenuitem':app.activeTopbarItem === settings}\" (click)=\"app.onTopbarRootItemClick($event, settings)\">\n                    <a style=\"cursor:pointer\">\n                        <i class=\"topbar-icon material-icons\">settings</i>\n                        <span class=\"topbar-item-name\">Settings</span>\n                    </a>\n                    <ul class=\"fadeInDown\" style=\"padding-top: 0px;padding-bottom: 0px;border-top:0px;max-height: 700px;overflow-y: auto;\">\n                        <li role=\"menuitem\">\n                            <p-panelMenu [model]=\"items\" (click)=\"app.headerSideMenuClick()\"></p-panelMenu>\n                        </li>\n                        <li role=\"menuitem\">\n                            <a href=\"#\" (click)=\"logout()\">\n                                <i class=\"material-icons\">lock</i>\n                                <span>Logout</span>\n                            </a>\n                        </li>\n                        <!--                         <li>\n                            <a href=\"\" (click)=\"modifyPassword()\">\n                                <i class=\"material-icons\">lock</i>\n                                <span>修改密码</span>\n                            </a>\n                        </li> -->\n                    </ul>\n                </li>\n                <li #notifications [ngClass]=\"{'active-topmenuitem':app.activeTopbarItem === notifications}\" (click)=\"app.onTopbarRootItemClick($event, notifications)\">\n                    <a href=\"#\">\n                        <i class=\"topbar-icon material-icons\">notifications</i>\n                        <span class=\"topbar-badge animated rubberBand\" *ngIf=\"unReadNotifyCount>0\">{{unReadNotifyCount}}</span>\n                        <span class=\"topbar-item-name\">Notifications</span>\n                    </a>\n                </li>\n            </ul>\n        </div>\n    </div>\n</div>\n\n<p-dialog header=\"修改密码\" [(visible)]=\"display_modify\" [responsive]=\"true\" showEffect=\"fade\" [modal]=\"true\" [width]=\"400\">\n    <div class=\"ui-g\">\n        <div class=\"ui-g-4\">\n            <label for=\"username_modify\">用户名</label>\n        </div>\n        <div class=\"ui-g-7\">\n            <input pInputText id=\"username_modify\" [(ngModel)]=\"currentUser\" [disabled]=\"true\">\n        </div>\n        <div class=\"ui-g-4\">\n            <label for=\"oldpassword_modify\">原密码</label>\n        </div>\n        <div class=\"ui-g-7\">\n            <input pInputText id=\"oldpassword_modify\" [(ngModel)]=\"oldPassword\">\n        </div>\n        <div class=\"ui-g-4\">\n            <label for=\"newpassword_modify\">新密码</label>\n        </div>\n        <div class=\"ui-g-7\">\n            <input  pPassword type=\"password\" id=\"newpassword_modify\" [(ngModel)]=\"newPassword\">\n        </div>\n        <div class=\"ui-g-4\">\n            <label for=\"newpassword_modify\">确认密码</label>\n        </div>\n        <div class=\"ui-g-7\">\n            <input  pPassword type=\"password\" id=\"newpassword_modify\" [(ngModel)]=\"confirmPassword\">\n        </div>\n    </div>\n    <p-footer>\n        <div>\n            <p-button label=\"Update\" (click)=\"confirmNewPassword()\"></p-button>\n            <p-button label=\"Cancel\" (click)=\"cancel()\"></p-button>\n        </div>\n    </p-footer>\n</p-dialog>"

/***/ }),

/***/ "./src/core/layout/topbar/app.topbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppTopBarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_boe_services_websocket_service__ = __webpack_require__("./src/app/boe/services/websocket.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_services_authentication_service__ = __webpack_require__("./src/app/_services/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_app_common_service_api_api_service__ = __webpack_require__("./src/app/common/service/api/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_app_common_model_system_userinfo__ = __webpack_require__("./src/app/common/model/system/userinfo.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AppTopBarComponent = /** @class */ (function () {
    function AppTopBarComponent(app, socket, router, authenticationService, http) {
        this.app = app;
        this.socket = socket;
        this.router = router;
        this.authenticationService = authenticationService;
        this.http = http;
        this.unReadNotifyCount = 0;
        this.isBoolean = false;
        this.currentUser = '';
        this.oldPassword = '';
        this.newPassword = '';
        this.confirmPassword = '';
        this.display_modify = false;
    }
    AppTopBarComponent.prototype.clickTest = function () {
        if (!this.isBoolean) {
            this.app.onTestClose();
        }
        event.preventDefault();
    };
    AppTopBarComponent.prototype.formatDate = function (fmt) {
        var current = new Date();
        var o = {
            "M+": current.getMonth() + 1,
            "d+": current.getDate(),
            "h+": current.getHours(),
            "m+": current.getMinutes(),
            "s+": current.getSeconds(),
            "q+": Math.floor((current.getMonth() + 3) / 3),
            "S": current.getMilliseconds() //毫秒
        };
        var week = {
            "0": "日",
            "1": "一",
            "2": "二",
            "3": "三",
            "4": "四",
            "5": "五",
            "6": "六"
        };
        if (/(y+)/.test(fmt))
            fmt = fmt.replace(RegExp.$1, (current.getFullYear() + "").substr(4 - RegExp.$1.length));
        if (/(E+)/.test(fmt)) {
            fmt = fmt.replace(RegExp.$1, ((RegExp.$1.length > 1) ? (RegExp.$1.length > 2 ? "星期" : "周") : "") + week[current.getDay() + ""]);
        }
        for (var k in o)
            if (new RegExp("(" + k + ")").test(fmt))
                fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
        return fmt;
    };
    AppTopBarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.currentUser = localStorage.getItem('currentUserName');
        this.socket.initBroadcastService(this);
        this.currentDate = this.formatDate("yyyy-MM-dd hh:mm:ss EEE");
        setInterval(function () {
            _this.currentDate = _this.formatDate("yyyy-MM-dd hh:mm:ss EEE");
        }, 1000);
        this.items = [
            {
                label: 'Menu Modes',
                icon: 'fa fa-cog',
                items: [
                    { label: 'Static Menu', icon: 'fa fa-arrow-right', command: function (event) { _this.changeLayoutMode('static'); } },
                    { label: 'Overlay Menu', icon: 'fa fa-arrow-right', command: function (event) { _this.changeLayoutMode('staoverlaytic'); } },
                    { label: 'Horizontal Menu', icon: 'fa fa-arrow-right', command: function (event) { _this.changeLayoutMode('horizontal'); } },
                    { label: 'Light Menu', icon: 'fa fa-arrow-right', command: function (event) { _this.changeDarkMenu(false); } },
                    { label: 'Dark Menu', icon: 'fa fa-arrow-right', command: function (event) { _this.changeDarkMenu(true); } },
                    {
                        label: 'Orientation',
                        items: [
                            { label: 'LTR', icon: 'fa fa-align-left', command: function (event) { _this.changeAppRTL(false); } },
                            { label: 'RTL', icon: 'fa fa-align-right', command: function (event) { _this.changeAppRTL(true); } }
                        ]
                    }
                ]
            },
            {
                label: 'Colors', icon: 'fa fa-paint-brush',
                items: [
                    {
                        label: 'Layout Palette',
                        items: [
                            {
                                label: 'Flat',
                                items: [
                                    { label: 'Blue Grey - Green', icon: 'fa fa-paint-brush', command: function (event) { _this.changeLayout('bluegrey'); } },
                                    { label: 'Indigo - Pink', icon: 'fa fa-paint-brush', command: function (event) { _this.changeLayout('indigo'); } },
                                    { label: 'Pink - Amber', icon: 'fa fa-paint-brush', command: function (event) { _this.changeLayout('pink'); } },
                                    { label: 'Deep Purple - Orange', icon: 'fa fa-paint-brush', command: function (event) { _this.changeLayout('deeppurple'); } },
                                    { label: 'Blue - Amber', icon: 'fa fa-paint-brush', command: function (event) { _this.changeLayout('blue'); } },
                                    {
                                        label: 'Light Blue - Blue Grey', icon: 'fa fa-paint-brush',
                                        command: function (event) { _this.changeLayout('lightblue'); }
                                    },
                                    { label: 'Cyan - Amber', icon: 'fa fa-paint-brush', command: function (event) { _this.changeLayout('cyan'); } },
                                    { label: 'Teal - Red', icon: 'fa fa-paint-brush', command: function (event) { _this.changeLayout('teal'); } },
                                    { label: 'Green - Brown', icon: 'fa fa-paint-brush', command: function (event) { _this.changeLayout('green'); } },
                                    { label: 'Light Green - Purple', icon: 'fa fa-paint-brush', command: function (event) { _this.changeLayout('lightgreen'); } },
                                    { label: 'Lime - Blue Grey', icon: 'fa fa-paint-brush', command: function (event) { _this.changeLayout('lime'); } },
                                    { label: 'Yellow - Teal', icon: 'fa fa-paint-brush', command: function (event) { _this.changeLayout('yellow'); } },
                                    { label: 'Amber - Pink', icon: 'fa fa-paint-brush', command: function (event) { _this.changeLayout('amber'); } },
                                    { label: 'Orange - Indigo', icon: 'fa fa-paint-brush', command: function (event) { _this.changeLayout('orange'); } },
                                    { label: 'Deep Orange - Cyan', icon: 'fa fa-paint-brush', command: function (event) { _this.changeLayout('deeporange'); } },
                                    { label: 'Brown - Cyan', icon: 'fa fa-paint-brush', command: function (event) { _this.changeLayout('brown'); } },
                                    { label: 'Grey - Indigo', icon: 'fa fa-paint-brush', command: function (event) { _this.changeLayout('grey'); } }
                                ]
                            },
                            {
                                label: 'Special',
                                items: [
                                    { label: 'Reflection', icon: 'fa fa-paint-brush', command: function (event) { _this.changeLayout('reflection'); } },
                                    { label: 'Moody', icon: 'fa fa-paint-brush', command: function (event) { _this.changeLayout('moody'); } },
                                    { label: 'Cityscape', icon: 'fa fa-paint-brush', command: function (event) { _this.changeLayout('cityscape'); } },
                                    { label: 'Cloudy', icon: 'fa fa-paint-brush', command: function (event) { _this.changeLayout('cloudy'); } },
                                    { label: 'Storm', icon: 'fa fa-paint-brush', command: function (event) { _this.changeLayout('storm'); } },
                                    { label: 'Palm', icon: 'fa fa-paint-brush', command: function (event) { _this.changeLayout('palm'); } },
                                    { label: 'Flatiron', icon: 'fa fa-paint-brush', command: function (event) { _this.changeLayout('flatiron'); } }
                                ]
                            },
                        ]
                    },
                    {
                        label: 'Themes', icon: 'fa fa-paint-brush', badge: '5',
                        items: [
                            { label: 'Blue Grey - Green', icon: 'fa fa-paint-brush', command: function (event) { _this.changeTheme('bluegrey'); } },
                            { label: 'Indigo - Pink', icon: 'fa fa-paint-brush', command: function (event) { _this.changeTheme('indigo'); } },
                            { label: 'Pink - Amber', icon: 'fa fa-paint-brush', command: function (event) { _this.changeTheme('pink'); } },
                            { label: 'Purple - Pink', icon: 'fa fa-paint-brush', command: function (event) { _this.changeTheme('purple'); } },
                            { label: 'Deep Purple - Orange', icon: 'fa fa-paint-brush', command: function (event) { _this.changeTheme('deeppurple'); } },
                            { label: 'Blue - Amber', icon: 'fa fa-paint-brush', command: function (event) { _this.changeTheme('blue'); } },
                            { label: 'Light Blue - Blue Grey', icon: 'fa fa-paint-brush', command: function (event) { _this.changeTheme('lightblue'); } },
                            { label: 'Cyan - Amber', icon: 'fa fa-paint-brush', command: function (event) { _this.changeTheme('cyan'); } },
                            { label: 'Teal - Red', icon: 'fa fa-paint-brush', command: function (event) { _this.changeTheme('teal'); } },
                            { label: 'Green - Brown', icon: 'fa fa-paint-brush', command: function (event) { _this.changeTheme('green'); } },
                            { label: 'Light Green - Purple', icon: 'fa fa-paint-brush', command: function (event) { _this.changeTheme('lightgreen'); } },
                            { label: 'Lime - Blue Grey', icon: 'fa fa-paint-brush', command: function (event) { _this.changeTheme('lime'); } },
                            { label: 'Yellow - Teal', icon: 'fa fa-paint-brush', command: function (event) { _this.changeTheme('yellow'); } },
                            { label: 'Amber - Pink', icon: 'fa fa-paint-brush', command: function (event) { _this.changeTheme('amber'); } },
                            { label: 'Orange - Indigo', icon: 'fa fa-paint-brush', command: function (event) { _this.changeTheme('orange'); } },
                            { label: 'Deep Orange - Cyan', icon: 'fa fa-paint-brush', command: function (event) { _this.changeTheme('deeporange'); } },
                            { label: 'Brown - Cyan', icon: 'fa fa-paint-brush', command: function (event) { _this.changeTheme('brown'); } },
                            { label: 'Grey - Indigo', icon: 'fa fa-paint-brush', command: function (event) { _this.changeTheme('grey'); } }
                        ]
                    },
                    {
                        label: 'EchartsThemes', icon: 'fa fa-paint-brush', badge: '5',
                        items: [
                            { label: 'dark', icon: 'fa fa-paint-brush', command: function (event) { _this.changeEchartTheme('dark'); } },
                            { label: 'infographic', icon: 'fa fa-paint-brush', command: function (event) { _this.changeEchartTheme('infographic'); } },
                            { label: 'macarons', icon: 'fa fa-paint-brush', command: function (event) { _this.changeEchartTheme('macarons'); } },
                            { label: 'roma', icon: 'fa fa-paint-brush', command: function (event) { _this.changeEchartTheme('roma'); } },
                            { label: 'shine', icon: 'fa fa-paint-brush', command: function (event) { _this.changeEchartTheme('shine'); } },
                            { label: 'vintage', icon: 'fa fa-paint-brush', command: function (event) { _this.changeEchartTheme('vintage'); } }
                        ]
                    }
                ]
            },
            {
                "label": "Language", icon: "fa fa-language",
                "items": [
                    { label: '中文（简体）', command: function (event) { _this.changeLang('zh'); } },
                    { label: 'English', command: function (event) { _this.changeLang('en'); } },
                ]
            },
            {
                "label": "修改密码", icon: "fa fa-cog",
                "items": [
                    { label: '修改密码', command: function (event) { _this.modifyPassword(); } },
                ]
            },
        ];
    };
    AppTopBarComponent.prototype.addNotify = function (msg) {
        this.unReadNotifyCount++;
        this.app.receiveNotify(msg);
    };
    AppTopBarComponent.prototype.clearNotify = function () {
        this.unReadNotifyCount = 0;
        this.app.clearNotify();
    };
    AppTopBarComponent.prototype.changeLayoutMode = function (layoutMode) {
        this.app.layoutMode = layoutMode;
        window.localStorage.setItem('projectLayoutMode', layoutMode);
    };
    AppTopBarComponent.prototype.changeDarkMenu = function (status) {
        this.app.darkMenu = status;
        window.localStorage.setItem('projectDarkMenu', status);
    };
    AppTopBarComponent.prototype.changeAppRTL = function (status) {
        this.app.isRTL = status;
        window.localStorage.setItem('projectIsRTL', status);
    };
    AppTopBarComponent.prototype.changeTheme = function (theme) {
        var themeLink = document.getElementById('theme-css');
        themeLink.href = 'assets/theme/theme-' + theme + '.css';
        //console.log('playTheme : ',theme);
        window.localStorage.setItem('projectTheme', theme);
    };
    AppTopBarComponent.prototype.changeEchartTheme = function (theme) {
        window.localStorage.setItem('echartTheme', theme);
        //reload the page
        window.location.reload();
    };
    AppTopBarComponent.prototype.changeLayout = function (theme) {
        var layoutLink = document.getElementById('layout-css');
        layoutLink.href = 'assets/layout/css/layout-' + theme + '.css';
        window.localStorage.setItem('projectLayout', theme);
        // console.log('playLayout : ',theme);
    };
    AppTopBarComponent.prototype.logout = function () {
        // reset login status
        this.authenticationService.logout();
    };
    AppTopBarComponent.prototype.changeLang = function (lang) {
        this.app.translate.use(lang);
        window.localStorage.setItem('language', lang);
    };
    AppTopBarComponent.prototype.modifyPassword = function () {
        this.display_modify = true;
    };
    AppTopBarComponent.prototype.confirmNewPassword = function () {
        if (this.newPassword != null && this.newPassword != '') {
            if (this.newPassword == this.confirmPassword) {
                this.checkOldPassword();
            }
            else {
                this.showMessage('warn', 'Waring !', '请确认新密码');
            }
        }
        else {
            this.showMessage('warn', 'Waring !', '请输入新密码');
        }
    };
    AppTopBarComponent.prototype.checkOldPassword = function () {
        var _this = this;
        var updatedUserInfo = new __WEBPACK_IMPORTED_MODULE_6_app_common_model_system_userinfo__["a" /* Userinfo */]();
        updatedUserInfo.useraccount = this.currentUser;
        updatedUserInfo.password = this.oldPassword;
        this.http.post('/user/checkPassword', updatedUserInfo).subscribe(function (res) {
            if (res) {
                _this.commitNewPassword();
            }
            else {
                _this.showMessage('warn', 'Waring !', '原密码不正确');
            }
        }, function (error) { console.log(error); });
    };
    AppTopBarComponent.prototype.commitNewPassword = function () {
        var _this = this;
        var updatedUserInfo = new __WEBPACK_IMPORTED_MODULE_6_app_common_model_system_userinfo__["a" /* Userinfo */]();
        updatedUserInfo.useraccount = this.currentUser;
        updatedUserInfo.password = this.newPassword;
        this.http.post('/user/update/updatePassword', updatedUserInfo).subscribe(function (res) {
            if (res) {
                _this.showMessage('info', 'Nice !', '密码修改成功');
                _this.display_modify = false;
            }
            else {
                _this.showMessage('warn', 'Waring !', '密码修改失败');
            }
        }, function (error) { console.log(error); });
    };
    AppTopBarComponent.prototype.showMessage = function (severity, summary, detail) {
        this.msgs = [];
        this.msgs.push({ severity: severity, summary: summary, detail: detail });
    };
    AppTopBarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'app-topbar',
            template: __webpack_require__("./src/core/layout/topbar/app.topbar.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_app_app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_0__app_boe_services_websocket_service__["a" /* WebsocketService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["Router"],
            __WEBPACK_IMPORTED_MODULE_4__app_services_authentication_service__["a" /* AuthenticationService */],
            __WEBPACK_IMPORTED_MODULE_5_app_common_service_api_api_service__["a" /* ApiService */]])
    ], AppTopBarComponent);
    return AppTopBarComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    apiPath: '/api',
    aliveTime: 1800,
    tabLayout: true,
    tabTooltip: false,
    unifiedAuth: true,
    defaultTabRouter: '/boe/mes-ui/type1',
    echartTheme: 'macarons',
    websocketUrl: 'http://10.141.34.76:8888/socket'
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map