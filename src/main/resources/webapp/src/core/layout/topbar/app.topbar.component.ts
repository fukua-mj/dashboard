import { WebsocketService } from './../../../app/boe/services/websocket.service';
import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'app/app.component';
import { MenuItem, Message } from 'primeng/primeng';
import { Router } from '@angular/router';

import { AuthenticationService } from '../../../app/_services/authentication.service'
import { ApiService } from 'app/common/service/api/api.service';
import { Userinfo } from 'app/common/model/system/userinfo';
@Component({
    selector: 'app-topbar',
    templateUrl: './app.topbar.component.html'
})
export class AppTopBarComponent implements OnInit {
    items: MenuItem[];
    unReadNotifyCount: number = 0;
    isBoolean: boolean = false;
    currentDate: string;
    currentUser: string = '';
    oldPassword: string = '';
    newPassword: string = '';
    confirmPassword: string = '';
    display_modify: boolean = false;
    msgs:Message[];

    constructor(
        public app: AppComponent,
        public socket: WebsocketService,
        private router: Router,
        private authenticationService: AuthenticationService,
        private http: ApiService
    ) { }
    clickTest() {
        if (!this.isBoolean) {
            this.app.onTestClose();
        }
        event.preventDefault();
    }
    formatDate(fmt): string {
        const current = new Date();

        var o = {
            "M+": current.getMonth() + 1,                 //月份
            "d+": current.getDate(),                    //日
            "h+": current.getHours(),                   //小时
            "m+": current.getMinutes(),                 //分
            "s+": current.getSeconds(),                 //秒
            "q+": Math.floor((current.getMonth() + 3) / 3), //季度
            "S": current.getMilliseconds()             //毫秒
        };

        const week = {
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
    }
    ngOnInit() {
        this.currentUser = localStorage.getItem('currentUserName');
        this.socket.initBroadcastService(this);
        this.currentDate = this.formatDate("yyyy-MM-dd hh:mm:ss EEE");
        setInterval(() => {
            this.currentDate = this.formatDate("yyyy-MM-dd hh:mm:ss EEE");
        }, 1000);
        this.items = [
            {
                label: 'Menu Modes',
                icon: 'fa fa-cog',
                items: [
                    { label: 'Static Menu', icon: 'fa fa-arrow-right', command: (event) => { this.changeLayoutMode('static') } },
                    { label: 'Overlay Menu', icon: 'fa fa-arrow-right', command: (event) => { this.changeLayoutMode('staoverlaytic') } },
                    { label: 'Horizontal Menu', icon: 'fa fa-arrow-right', command: (event) => { this.changeLayoutMode('horizontal') } },
                    { label: 'Light Menu', icon: 'fa fa-arrow-right', command: (event) => { this.changeDarkMenu(false) } },
                    { label: 'Dark Menu', icon: 'fa fa-arrow-right', command: (event) => { this.changeDarkMenu(true) } },
                    {
                        label: 'Orientation',
                        items: [
                            { label: 'LTR', icon: 'fa fa-align-left', command: (event) => { this.changeAppRTL(false) } },
                            { label: 'RTL', icon: 'fa fa-align-right', command: (event) => { this.changeAppRTL(true) } }
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
                                    { label: 'Blue Grey - Green', icon: 'fa fa-paint-brush', command: (event) => { this.changeLayout('bluegrey'); } },
                                    { label: 'Indigo - Pink', icon: 'fa fa-paint-brush', command: (event) => { this.changeLayout('indigo'); } },
                                    { label: 'Pink - Amber', icon: 'fa fa-paint-brush', command: (event) => { this.changeLayout('pink'); } },
                                    { label: 'Deep Purple - Orange', icon: 'fa fa-paint-brush', command: (event) => { this.changeLayout('deeppurple'); } },
                                    { label: 'Blue - Amber', icon: 'fa fa-paint-brush', command: (event) => { this.changeLayout('blue'); } },
                                    {
                                        label: 'Light Blue - Blue Grey', icon: 'fa fa-paint-brush',
                                        command: (event) => { this.changeLayout('lightblue'); }
                                    },
                                    { label: 'Cyan - Amber', icon: 'fa fa-paint-brush', command: (event) => { this.changeLayout('cyan'); } },
                                    { label: 'Teal - Red', icon: 'fa fa-paint-brush', command: (event) => { this.changeLayout('teal'); } },
                                    { label: 'Green - Brown', icon: 'fa fa-paint-brush', command: (event) => { this.changeLayout('green'); } },
                                    { label: 'Light Green - Purple', icon: 'fa fa-paint-brush', command: (event) => { this.changeLayout('lightgreen'); } },
                                    { label: 'Lime - Blue Grey', icon: 'fa fa-paint-brush', command: (event) => { this.changeLayout('lime'); } },
                                    { label: 'Yellow - Teal', icon: 'fa fa-paint-brush', command: (event) => { this.changeLayout('yellow'); } },
                                    { label: 'Amber - Pink', icon: 'fa fa-paint-brush', command: (event) => { this.changeLayout('amber'); } },
                                    { label: 'Orange - Indigo', icon: 'fa fa-paint-brush', command: (event) => { this.changeLayout('orange'); } },
                                    { label: 'Deep Orange - Cyan', icon: 'fa fa-paint-brush', command: (event) => { this.changeLayout('deeporange'); } },
                                    { label: 'Brown - Cyan', icon: 'fa fa-paint-brush', command: (event) => { this.changeLayout('brown'); } },
                                    { label: 'Grey - Indigo', icon: 'fa fa-paint-brush', command: (event) => { this.changeLayout('grey'); } }
                                ]
                            },
                            {
                                label: 'Special',
                                items: [
                                    { label: 'Reflection', icon: 'fa fa-paint-brush', command: (event) => { this.changeLayout('reflection'); } },
                                    { label: 'Moody', icon: 'fa fa-paint-brush', command: (event) => { this.changeLayout('moody'); } },
                                    { label: 'Cityscape', icon: 'fa fa-paint-brush', command: (event) => { this.changeLayout('cityscape'); } },
                                    { label: 'Cloudy', icon: 'fa fa-paint-brush', command: (event) => { this.changeLayout('cloudy'); } },
                                    { label: 'Storm', icon: 'fa fa-paint-brush', command: (event) => { this.changeLayout('storm'); } },
                                    { label: 'Palm', icon: 'fa fa-paint-brush', command: (event) => { this.changeLayout('palm'); } },
                                    { label: 'Flatiron', icon: 'fa fa-paint-brush', command: (event) => { this.changeLayout('flatiron'); } }
                                ]
                            },
                        ]
                    },
                    {
                        label: 'Themes', icon: 'fa fa-paint-brush', badge: '5',
                        items: [
                            { label: 'Blue Grey - Green', icon: 'fa fa-paint-brush', command: (event) => { this.changeTheme('bluegrey'); } },
                            { label: 'Indigo - Pink', icon: 'fa fa-paint-brush', command: (event) => { this.changeTheme('indigo'); } },
                            { label: 'Pink - Amber', icon: 'fa fa-paint-brush', command: (event) => { this.changeTheme('pink'); } },
                            { label: 'Purple - Pink', icon: 'fa fa-paint-brush', command: (event) => { this.changeTheme('purple'); } },
                            { label: 'Deep Purple - Orange', icon: 'fa fa-paint-brush', command: (event) => { this.changeTheme('deeppurple'); } },
                            { label: 'Blue - Amber', icon: 'fa fa-paint-brush', command: (event) => { this.changeTheme('blue'); } },
                            { label: 'Light Blue - Blue Grey', icon: 'fa fa-paint-brush', command: (event) => { this.changeTheme('lightblue'); } },
                            { label: 'Cyan - Amber', icon: 'fa fa-paint-brush', command: (event) => { this.changeTheme('cyan'); } },
                            { label: 'Teal - Red', icon: 'fa fa-paint-brush', command: (event) => { this.changeTheme('teal'); } },
                            { label: 'Green - Brown', icon: 'fa fa-paint-brush', command: (event) => { this.changeTheme('green'); } },
                            { label: 'Light Green - Purple', icon: 'fa fa-paint-brush', command: (event) => { this.changeTheme('lightgreen'); } },
                            { label: 'Lime - Blue Grey', icon: 'fa fa-paint-brush', command: (event) => { this.changeTheme('lime'); } },
                            { label: 'Yellow - Teal', icon: 'fa fa-paint-brush', command: (event) => { this.changeTheme('yellow'); } },
                            { label: 'Amber - Pink', icon: 'fa fa-paint-brush', command: (event) => { this.changeTheme('amber'); } },
                            { label: 'Orange - Indigo', icon: 'fa fa-paint-brush', command: (event) => { this.changeTheme('orange'); } },
                            { label: 'Deep Orange - Cyan', icon: 'fa fa-paint-brush', command: (event) => { this.changeTheme('deeporange'); } },
                            { label: 'Brown - Cyan', icon: 'fa fa-paint-brush', command: (event) => { this.changeTheme('brown'); } },
                            { label: 'Grey - Indigo', icon: 'fa fa-paint-brush', command: (event) => { this.changeTheme('grey'); } }
                        ]
                    },
                    {
                        label: 'EchartsThemes', icon: 'fa fa-paint-brush', badge: '5',
                        items: [
                            { label: 'dark', icon: 'fa fa-paint-brush', command: (event) => { this.changeEchartTheme('dark'); } },
                            { label: 'infographic', icon: 'fa fa-paint-brush', command: (event) => { this.changeEchartTheme('infographic'); } },
                            { label: 'macarons', icon: 'fa fa-paint-brush', command: (event) => { this.changeEchartTheme('macarons'); } },
                            { label: 'roma', icon: 'fa fa-paint-brush', command: (event) => { this.changeEchartTheme('roma'); } },
                            { label: 'shine', icon: 'fa fa-paint-brush', command: (event) => { this.changeEchartTheme('shine'); } },
                            { label: 'vintage', icon: 'fa fa-paint-brush', command: (event) => { this.changeEchartTheme('vintage'); } }
                        ]
                    }
                ]
            },
            {
                "label": "Language", icon: "fa fa-language",
                "items": [
                    { label: '中文（简体）', command: (event) => { this.changeLang('zh'); } },
                    { label: 'English', command: (event) => { this.changeLang('en'); } },
                ]
            },
            {
                "label": "修改密码", icon: "fa fa-cog",
                "items": [
                    { label: '修改密码', command: (event) => { this.modifyPassword(); } },
                ]
            },

        ];
    }

    addNotify(msg) {
        this.unReadNotifyCount++;
        this.app.receiveNotify(msg);
    }

    clearNotify() {
        this.unReadNotifyCount = 0;
        this.app.clearNotify();
    }
    changeLayoutMode(layoutMode) {
        this.app.layoutMode = layoutMode;
        window.localStorage.setItem('projectLayoutMode', layoutMode);
    }
    changeDarkMenu(status) {
        this.app.darkMenu = status;
        window.localStorage.setItem('projectDarkMenu', status);
    }
    changeAppRTL(status) {
        this.app.isRTL = status;
        window.localStorage.setItem('projectIsRTL', status);
    }
    changeTheme(theme) {
        const themeLink: HTMLLinkElement = <HTMLLinkElement>document.getElementById('theme-css');
        themeLink.href = 'assets/theme/theme-' + theme + '.css';
        //console.log('playTheme : ',theme);
        window.localStorage.setItem('projectTheme', theme);
    }
    changeEchartTheme(theme) {
        window.localStorage.setItem('echartTheme', theme);
        //reload the page
        window.location.reload();
    }
    changeLayout(theme) {
        const layoutLink: HTMLLinkElement = <HTMLLinkElement>document.getElementById('layout-css');
        layoutLink.href = 'assets/layout/css/layout-' + theme + '.css';
        window.localStorage.setItem('projectLayout', theme);
        // console.log('playLayout : ',theme);
    }
    logout() {
        // reset login status
        this.authenticationService.logout();
    }
    changeLang(lang) {
        this.app.translate.use(lang);
        window.localStorage.setItem('language', lang);
    }

    modifyPassword() {
        this.display_modify = true;
    }

    confirmNewPassword() {
        if (this.newPassword != null && this.newPassword != '') {
            if (this.newPassword == this.confirmPassword) {
                this.checkOldPassword();
            } else {
                this.showMessage('warn','Waring !','请确认新密码');
            }
        }else {
            this.showMessage('warn','Waring !','请输入新密码');
        }

    }

    checkOldPassword() {
        let updatedUserInfo = new Userinfo();
        updatedUserInfo.useraccount = this.currentUser;
        updatedUserInfo.password = this.oldPassword;
        this.http.post('/user/checkPassword', updatedUserInfo).subscribe(
            (res) => {
                if (res) {
                    this.commitNewPassword();
                } else {
                    this.showMessage('warn','Waring !','原密码不正确');
                }
            },
            (error) => { console.log(error); }
        );
    }

    commitNewPassword() {
        let updatedUserInfo = new Userinfo();
        updatedUserInfo.useraccount = this.currentUser;
        updatedUserInfo.password = this.newPassword;
        this.http.post('/user/update/updatePassword', updatedUserInfo).subscribe(
            (res) => {
                if(res) {
                    this.showMessage('info','Nice !','密码修改成功');
                    this.display_modify = false;
                }else {
                    this.showMessage('warn','Waring !','密码修改失败');
                }
            },
            (error) => { console.log(error); }
        );
    }

    showMessage(severity: string, summary: string, detail: string) {
        this.msgs = [];
        this.msgs.push({ severity: severity, summary: summary, detail: detail });
    }
}
