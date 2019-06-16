webpackJsonp(["communication.module"],{

/***/ "./src/app/common/pipe/html/html.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HtmlPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HtmlPipe = /** @class */ (function () {
    function HtmlPipe(sanitizer) {
        this.sanitizer = sanitizer;
    }
    HtmlPipe.prototype.transform = function (style) {
        return this.sanitizer.bypassSecurityTrustHtml(style);
    };
    HtmlPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'html'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["DomSanitizer"]])
    ], HtmlPipe);
    return HtmlPipe;
}());



/***/ }),

/***/ "./src/app/communication/chat/chat.component.css":
/***/ (function(module, exports) {

module.exports = ".main{\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n    -ms-flex-wrap: wrap;\r\n        flex-wrap: wrap;\r\n    height: 500px;\r\n    width: 660px;\r\n    border: solid 1px rgb(219, 219, 219);;\r\n}\r\n\r\n.searcharea{\r\n    height: 50px;\r\n    width: 30%;\r\n    background-color: #EEEAE9;\r\n}\r\n\r\n.searchbox{\r\n/*     background-image: url(../resources/search.png); */\r\n    background-color: #DAD8D8;\r\n    background-repeat: no-repeat;\r\n    background-size: 18px 18px;\r\n    padding: 15px 19.8px 15px 19.8px;\r\n    background-clip: content-box;\r\n    width: 80%;\r\n    height: 40%;\r\n    border: none; \r\n}\r\n\r\n.userlistarea{\r\n    height: 450px;\r\n    width: 198px;\r\n    background-color: #EEEAE9;\r\n}\r\n\r\n.userlistarea li{\r\n    height: 60px;\r\n    list-style-type: none;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n    -ms-flex-wrap: wrap;\r\n        flex-wrap: wrap;\r\n    margin: 0 0 0 -40px;\r\n}\r\n\r\n.userlistarea li .icon{\r\n/*     background-image: url(../resources/icon/1.jpg); */\r\n    background-size: 44px;\r\n    background-repeat: no-repeat;\r\n    height: 44px;\r\n    width: 44px;\r\n    margin: 3px 3px 3px 6px;\r\n    border: none;\r\n}\r\n\r\n.userlistarea li .username{   \r\n    font-size: 14px; \r\n    height: 22px;\r\n    margin: 3px 0 0 3px;\r\n    width: 140px;\r\n    border: none;\r\n}\r\n\r\n.userlistarea li .chatsub{\r\n    font-size: 10px; \r\n    height: 22px;\r\n    margin: 3px 0 0 3px;\r\n    width: 140px;\r\n    border: none;\r\n    color: rgb(150, 150, 150);\r\n}\r\n\r\n.headerarea{\r\n    height: 49px;\r\n    width: 70%;\r\n    background-color: #F5F5F5;\r\n    border-bottom: 1px solid rgb(219, 219, 219);\r\n    font-size: 20px;\r\n}\r\n\r\n.headerarea div{\r\n    height: 30px;\r\n    widows: 300px;\r\n    padding: 13px 0 0 27px; \r\n}\r\n\r\n.contentarea{\r\n    height: 325px;\r\n    width: 70%;\r\n    background-color: #F5F5F5\r\n}\r\n\r\n.editarea{\r\n    height: 125px;\r\n    width: 70%;\r\n    background-color: #FFFFFF\r\n}"

/***/ }),

/***/ "./src/app/communication/chat/chat.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main\">\n  <div class=\"searcharea\">\n      <input type=\"text\" class=\"searchbox\" placeholder=\"搜索\">\n  </div>\n  <div class=\"userlistarea\">\n      <ul class=\"userlist\">\n          <li style=\"background-color: #C5C4C4;\">\n              <div class=\"icon\" style=\"background-image: url(assets/images/chat/icon/1.jpg);\"></div>\n              <div class=\"username\">钢铁侠</div>\n              <div class=\"chatsub\">吃了吗？</div>\n          </li>\n          <li>\n              <div class=\"icon\" style=\"background-image: url(assets/images/chat/icon/2.jpg);\"></div>\n              <div class=\"username\">六娃</div>\n              <div class=\"chatsub\">吃了吗？</div>\n          </li>\n          <li>\n              <div class=\"icon\" style=\"background-image: url(assets/images/chat/icon/3.jpg);\"></div>\n              <div class=\"username\">小新</div>\n              <div class=\"chatsub\">吃了吗？</div>\n          </li>\n          <li>\n              <div class=\"icon\" style=\"background-image: url(assets/images/chat/icon/7.jpg);\"></div>\n              <div class=\"username\">灰姑娘</div>\n              <div class=\"chatsub\">吃了吗？</div>\n          </li>\n          <li>\n              <div class=\"icon\" style=\"background-image: url(assets/images/chat/icon/8.jpg);\"></div>\n              <div class=\"username\">龙猫</div>\n              <div class=\"chatsub\">吃了吗？</div>\n          </li>\n          <li>\n              <div class=\"icon\" style=\"background-image: url(assets/images/chat/icon/9.jpg);\"></div>\n              <div class=\"username\">二哈</div>\n              <div class=\"chatsub\">吃了吗？</div>\n          </li>\n          <li>\n              <div class=\"icon\" style=\"background-image: url(assets/images/chat/icon/10.jpg);\"></div>\n              <div class=\"username\">王校长</div>\n              <div class=\"chatsub\">吃了吗？</div>\n          </li>\n      </ul>\n  </div>\n  <div class=\"headerarea\"><div>钢铁侠</div></div>\n  <div class=\"contentarea\"></div>\n  <div class=\"editarea\"></div>\n</div>"

/***/ }),

/***/ "./src/app/communication/chat/chat.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatComponent; });
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

var ChatComponent = /** @class */ (function () {
    function ChatComponent() {
    }
    ChatComponent.prototype.ngOnInit = function () {
    };
    ChatComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-chat',
            template: __webpack_require__("./src/app/communication/chat/chat.component.html"),
            styles: [__webpack_require__("./src/app/communication/chat/chat.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ChatComponent);
    return ChatComponent;
}());



/***/ }),

/***/ "./src/app/communication/communication-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommunicationRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__messageboard_messageboard_component__ = __webpack_require__("./src/app/communication/messageboard/messageboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__noticeboard_noticeboard_component__ = __webpack_require__("./src/app/communication/noticeboard/noticeboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__chat_chat_component__ = __webpack_require__("./src/app/communication/chat/chat.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__noticewriter_noticewriter_component__ = __webpack_require__("./src/app/communication/noticewriter/noticewriter.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: 'messageboard',
        component: __WEBPACK_IMPORTED_MODULE_2__messageboard_messageboard_component__["a" /* MessageboardComponent */]
    }, {
        path: 'noticeboard',
        component: __WEBPACK_IMPORTED_MODULE_3__noticeboard_noticeboard_component__["a" /* NoticeboardComponent */]
    }, {
        path: 'chat',
        component: __WEBPACK_IMPORTED_MODULE_4__chat_chat_component__["a" /* ChatComponent */]
    }, {
        path: 'noticewriter',
        component: __WEBPACK_IMPORTED_MODULE_5__noticewriter_noticewriter_component__["a" /* NoticewriterComponent */]
    }
];
var CommunicationRoutingModule = /** @class */ (function () {
    function CommunicationRoutingModule() {
    }
    CommunicationRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"]]
        })
    ], CommunicationRoutingModule);
    return CommunicationRoutingModule;
}());



/***/ }),

/***/ "./src/app/communication/communication.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommunicationModule", function() { return CommunicationModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_primeng_primeng__ = __webpack_require__("./node_modules/primeng/primeng.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_primeng_primeng__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_pipe_html_html_pipe__ = __webpack_require__("./src/app/common/pipe/html/html.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_primeng_panel__ = __webpack_require__("./node_modules/primeng/panel.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_primeng_panel___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_primeng_panel__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__communication_routing_module__ = __webpack_require__("./src/app/communication/communication-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__messageboard_messageboard_component__ = __webpack_require__("./src/app/communication/messageboard/messageboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__noticeboard_noticeboard_component__ = __webpack_require__("./src/app/communication/noticeboard/noticeboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__chat_chat_component__ = __webpack_require__("./src/app/communication/chat/chat.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_app_common_service_message_service__ = __webpack_require__("./src/app/common/service/message.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__noticewriter_noticewriter_component__ = __webpack_require__("./src/app/communication/noticewriter/noticewriter.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_app_common_service_web_socket_service__ = __webpack_require__("./src/app/common/service/web-socket.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_primeng_table__ = __webpack_require__("./node_modules/primeng/table.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_primeng_table___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_primeng_table__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var CommunicationModule = /** @class */ (function () {
    function CommunicationModule() {
    }
    CommunicationModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_4__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_5__communication_routing_module__["a" /* CommunicationRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_2_primeng_panel__["PanelModule"],
                __WEBPACK_IMPORTED_MODULE_9__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_0_primeng_primeng__["InputTextModule"],
                __WEBPACK_IMPORTED_MODULE_0_primeng_primeng__["CardModule"],
                __WEBPACK_IMPORTED_MODULE_0_primeng_primeng__["ButtonModule"],
                __WEBPACK_IMPORTED_MODULE_0_primeng_primeng__["EditorModule"],
                __WEBPACK_IMPORTED_MODULE_0_primeng_primeng__["DialogModule"],
                __WEBPACK_IMPORTED_MODULE_0_primeng_primeng__["ListboxModule"],
                __WEBPACK_IMPORTED_MODULE_0_primeng_primeng__["GrowlModule"],
                __WEBPACK_IMPORTED_MODULE_13_primeng_table__["TableModule"],
                __WEBPACK_IMPORTED_MODULE_0_primeng_primeng__["OverlayPanelModule"]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__messageboard_messageboard_component__["a" /* MessageboardComponent */],
                __WEBPACK_IMPORTED_MODULE_7__noticeboard_noticeboard_component__["a" /* NoticeboardComponent */],
                __WEBPACK_IMPORTED_MODULE_8__chat_chat_component__["a" /* ChatComponent */],
                __WEBPACK_IMPORTED_MODULE_1__common_pipe_html_html_pipe__["a" /* HtmlPipe */],
                __WEBPACK_IMPORTED_MODULE_11__noticewriter_noticewriter_component__["a" /* NoticewriterComponent */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_10_app_common_service_message_service__["a" /* MessageService */], __WEBPACK_IMPORTED_MODULE_12_app_common_service_web_socket_service__["a" /* WebSocketService */]]
        })
    ], CommunicationModule);
    return CommunicationModule;
}());



/***/ }),

/***/ "./src/app/communication/messageboard/messageboard.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/communication/messageboard/messageboard.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  messageboard works!\n</p>\n"

/***/ }),

/***/ "./src/app/communication/messageboard/messageboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessageboardComponent; });
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

var MessageboardComponent = /** @class */ (function () {
    function MessageboardComponent() {
    }
    MessageboardComponent.prototype.ngOnInit = function () {
    };
    MessageboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-messageboard',
            template: __webpack_require__("./src/app/communication/messageboard/messageboard.component.html"),
            styles: [__webpack_require__("./src/app/communication/messageboard/messageboard.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MessageboardComponent);
    return MessageboardComponent;
}());



/***/ }),

/***/ "./src/app/communication/noticeboard/noticeboard.component.css":
/***/ (function(module, exports) {

module.exports = ".body {\r\n    background-image: url('BOECD.48e230ad58925a8997f2.jpg');\r\n    background-size: 100%;\r\n    background-repeat: no-repeat;\r\n/*     filter:alpha(opacity=10);  \r\n    -moz-opacity:0.2;  \r\n    -khtml-opacity: 0.6;  \r\n    opacity: 0.6; */\r\n    width:100%;\r\n    background-attachment:fixed;\r\n    min-height : 882px;\r\n    padding-top: 3%;\r\n}\r\n\r\n.noticeboard {\r\n    margin-left: 10%;\r\n    width: 80%;\r\n    min-height : 790px;\r\n    background-color: rgba(214, 243, 247, 0.76);\r\n    color: black;\r\n}\r\n\r\n.title {\r\n    font-size: 40px;\r\n    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\r\n    text-align: center;\r\n}\r\n\r\n.author {\r\n    text-align: right;\r\n}\r\n\r\n.visitcount{\r\n    text-align: left;\r\n}\r\n\r\n.timekey {\r\n    text-align: center;\r\n}\r\n\r\n.noticecontent {\r\n    padding: 0 2% 0 2%;\r\n    text-indent:2em;\r\n}\r\n\r\n.lastnext {\r\n    text-align: right;\r\n    padding: 0 2% 0 0;\r\n}"

/***/ }),

/***/ "./src/app/communication/noticeboard/noticeboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g\">\n    <div [class]=\"bodyClass\">\n        <div class=\"noticeboard\">\n            <br />\n            <div class=\"title\">{{selectNotice.subject}}</div>\n            <div class=\"ui-g-12\">\n                <div class=\"ui-g-4 author\">\n                    【作者】{{selectNotice.author}}\n                </div>\n                <div class=\"ui-g-4 timekey\">\n                    【发布时间】{{selectNotice.timekey}}\n                </div>\n                <div class=\"ui-g-4 visitcount\">\n                    【访问量】{{selectNotice.visitcount}}\n                </div>\n            </div>\n            <div class=\"noticecontent\" id=\"noticecontent\">\n\n            </div>\n            <br />\n            <div class=\"lastnext\">\n                <button pButton type=\"button\" icon=\"fa fa-arrow-left\" label=\"Last\" (click)=\"getLastNotice()\" [disabled]=\"disable_Last\"></button>\n                <button pButton type=\"button\" icon=\"fa fa-arrow-right\" label=\"Next\" (click)=\"getNextNotice()\" [disabled]=\"disable_Next\"></button>\n            </div>\n        </div>\n    </div>\n    <!--     <div class=\"ui-lg-2\">\n        1111\n    </div> -->\n</div>\n\n<!-- <div [class]=\"div1Class\" [style.display]=\"div1Visible\" style=\"background-color:aqua;height: 300px;\">\n    <p-panel>\n        <p-header>\n            <div class=\"ui-helper-clearfix\">\n                <span class=\"ui-panel-title\">区域一</span>\n                <button pButton class=\"btn-expand\" [icon]=\"div1Icon\" (click)=\"div1Click()\"></button>\n            </div>\n        </p-header>\n    </p-panel>\n</div> -->"

/***/ }),

/***/ "./src/app/communication/noticeboard/noticeboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NoticeboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_common_service_api_api_service__ = __webpack_require__("./src/app/common/service/api/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_common_model_system_noticeboard__ = __webpack_require__("./src/app/common/model/system/noticeboard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jquery__ = __webpack_require__("./node_modules/jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_jquery__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NoticeboardComponent = /** @class */ (function () {
    function NoticeboardComponent(activRoute, http) {
        this.activRoute = activRoute;
        this.http = http;
        this.bodyClass = 'ui-lg-10 body';
        this.bodyVisible = 'block';
        this.div1Class = 'ui-g-12 ui-md-6 ui-lg-8';
        this.div1Visible = 'block';
        this.selectNotice = new __WEBPACK_IMPORTED_MODULE_3_app_common_model_system_noticeboard__["a" /* NoticeBoard */]();
        this.lastNotice = new __WEBPACK_IMPORTED_MODULE_3_app_common_model_system_noticeboard__["a" /* NoticeBoard */]();
        this.nextNotice = new __WEBPACK_IMPORTED_MODULE_3_app_common_model_system_noticeboard__["a" /* NoticeBoard */]();
        this.disable_Last = true;
        this.disable_Next = true;
    }
    NoticeboardComponent.prototype.ngOnInit = function () {
        this.subject = this.activRoute.snapshot.queryParams['subject'];
        this.timekey = this.activRoute.snapshot.queryParams['timekey'];
        if (this.subject == undefined) {
            this.subject = 'none';
        }
        if (this.timekey == undefined) {
            this.timekey = 'none';
        }
        this.getNoticeContent();
    };
    NoticeboardComponent.prototype.getNoticeContent = function () {
        var _this = this;
        var options = {
            params: {
                subject: this.subject,
                timekey: this.timekey
            }
        };
        var url;
        url = '/noticeboard/getNoticeContent';
        debugger;
        this.http.get(url, options).subscribe(function (res) {
            _this.noticeList = res;
            _this.selectNotice = _this.noticeList[1];
            _this.lastNotice = _this.noticeList[0];
            _this.nextNotice = _this.noticeList[2];
            _this.initialButton();
            __WEBPACK_IMPORTED_MODULE_4_jquery__(".noticecontent").empty();
            __WEBPACK_IMPORTED_MODULE_4_jquery__(".noticecontent").append(_this.selectNotice.messagedetail);
            _this.updateNoticeVisitCount();
        }, function (error) { console.log(error); });
    };
    NoticeboardComponent.prototype.updateNoticeVisitCount = function () {
        var options = {
            params: {
                subject: this.selectNotice.subject,
                timekey: this.selectNotice.timekey
            }
        };
        var url;
        url = '/noticeboard/updateNoticeVisitCount';
        this.http.get(url, options).subscribe(function (res) {
        }, function (error) { console.log(error); });
    };
    NoticeboardComponent.prototype.getLastNotice = function () {
        var _this = this;
        var options = {
            params: {
                subject: this.lastNotice.subject,
                timekey: this.lastNotice.timekey,
            }
        };
        var url;
        url = '/noticeboard/getNoticeContent';
        this.http.get(url, options).subscribe(function (res) {
            _this.noticeList = res;
            _this.selectNotice = _this.noticeList[1];
            _this.lastNotice = _this.noticeList[0];
            _this.nextNotice = _this.noticeList[2];
            _this.initialButton();
            __WEBPACK_IMPORTED_MODULE_4_jquery__(".noticecontent").empty();
            __WEBPACK_IMPORTED_MODULE_4_jquery__(".noticecontent").append(_this.selectNotice.messagedetail);
            _this.updateNoticeVisitCount();
        }, function (error) { console.log(error); });
    };
    NoticeboardComponent.prototype.getNextNotice = function () {
        var _this = this;
        var options = {
            params: {
                subject: this.nextNotice.subject,
                timekey: this.nextNotice.timekey,
            }
        };
        var url;
        url = '/noticeboard/getNoticeContent';
        this.http.get(url, options).subscribe(function (res) {
            _this.noticeList = res;
            _this.selectNotice = _this.noticeList[1];
            _this.lastNotice = _this.noticeList[0];
            _this.nextNotice = _this.noticeList[2];
            _this.initialButton();
            __WEBPACK_IMPORTED_MODULE_4_jquery__(".noticecontent").empty();
            __WEBPACK_IMPORTED_MODULE_4_jquery__(".noticecontent").append(_this.selectNotice.messagedetail);
            _this.updateNoticeVisitCount();
        }, function (error) { console.log(error); });
    };
    NoticeboardComponent.prototype.initialButton = function () {
        debugger;
        if (this.lastNotice.timekey == '没有了') {
            this.disable_Last = true;
        }
        else {
            this.disable_Last = false;
        }
        if (this.nextNotice.timekey == '没有了') {
            this.disable_Next = true;
        }
        else {
            this.disable_Next = false;
        }
    };
    NoticeboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-noticeboard',
            template: __webpack_require__("./src/app/communication/noticeboard/noticeboard.component.html"),
            styles: [__webpack_require__("./src/app/communication/noticeboard/noticeboard.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"], __WEBPACK_IMPORTED_MODULE_2_app_common_service_api_api_service__["a" /* ApiService */]])
    ], NoticeboardComponent);
    return NoticeboardComponent;
}());



/***/ }),

/***/ "./src/app/communication/noticewriter/noticewriter.component.css":
/***/ (function(module, exports) {

module.exports = ".title {\r\n    font-size: 35px;\r\n}\r\n.sendHistory {\r\n    font-size: 10px;\r\n}\r\n.hmtitle {\r\n/*     color: #535353;\r\n    padding: 6px 0 0 10px;\r\n    margin: 0 0 -10px 0;\r\n    background-image: url(./../../../assets/images/homepage/usercard.png); */\r\n}\r\n/* 1025px lg 显示器*/\r\n@media screen and (min-width:64.063em){\r\n    .lg-noticewriter {\r\n        min-height:600px;\r\n    }\r\n\r\n}\r\n/* 1441px xl 大电视*/\r\n@media screen and (min-width:90.063em){\r\n    .xl-noticewriter {\r\n        min-height:882px;\r\n    }\r\n\r\n}"

/***/ }),

/***/ "./src/app/communication/noticewriter/noticewriter.component.html":
/***/ (function(module, exports) {

module.exports = "<p-growl [(value)]=\"msgs\"></p-growl>\n<div class=\"ui-g lg-noticewriter xl-noticewriter\">\n  <div class=\"ui-g-10\">\n    <span class=\"ui-float-label title\">\n      <input id=\"float-input\" type=\"text\" size=\"50\" pInputText [(ngModel)]=\"noticeSubject\">\n      <label for=\"float-input\">标题</label>\n    </span>\n    <br />\n    <button pButton label=\"添加收件人\" icon=\"fa-user-plus\" (click)=\"showUserList()\"></button>\n    <br />\n    <br />\n    <p>【已选择】 : <span *ngFor=\"let c of selectedUsers\" style=\"margin-right: 10px;height: 20px;border-radius: 30%;background-color: rgb(225, 239, 243)\">\n        <b>{{c.username}} ;</b>\n      </span></p>\n    <p-editor [(ngModel)]=\"noticeText\" [style]=\"{'height':'365px'}\" [placeholder]=\"placeholder\"></p-editor>\n    <br />\n    <button pButton style=\"margin: 0 0 0 90%\" label=\"Send\" icon=\"fa fa-envelope\" (click)=\"sendNotice()\"></button>\n  </div>\n  <div class=\"ui-g-2\">\n    <p-listbox [options]=\"sendHistory\" [(ngModel)]=\"selectNotice\" optionLabel=\"subject\" styleClass=\"sendHistory\"\n      [listStyle]=\"{'height':'580px','font-size':'13px'}\" [style]=\"{'width':'150px'}\" (onDblClick)=\"showOverLayer($event,sendHistoryList)\">\n      <p-header>\n        <div class=\"hmtitle\"><b>发送历史</b></div>\n      </p-header>\n    </p-listbox>\n  </div>\n</div>\n\n<p-overlayPanel #sendHistoryList>\n  <img src=\"./../../../assets/images/homepage/1.PNG\" alt=\"Galleria 1\" />\n</p-overlayPanel>\n\n<p-dialog header=\"收件人\" [(visible)]=\"display_userList\" [responsive]=\"true\" showEffect=\"fade\" [modal]=\"true\" [width]=\"400\">\n  <div class=\"ui-g ui-fluid\">\n    <p-listbox [options]=\"users\" [(ngModel)]=\"selectedUsers\" multiple=\"multiple\" checkbox=\"checkbox\" filter=\"filter\"\n      optionLabel=\"username\" [listStyle]=\"{'max-height':'350px'}\">\n      <p-header>\n        <i class=\"fa fa-user\"></i>\n        User\n      </p-header>\n    </p-listbox>\n  </div>\n  <p-footer>\n    <div>\n      <p-button label=\"Cancel\" (click)=\"cancel()\"></p-button>\n    </div>\n  </p-footer>\n</p-dialog>"

/***/ }),

/***/ "./src/app/communication/noticewriter/noticewriter.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NoticewriterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_stompjs__ = __webpack_require__("./node_modules/stompjs/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_stompjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_stompjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_sockjs_client__ = __webpack_require__("./node_modules/sockjs-client/lib/entry.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_sockjs_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_sockjs_client__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jquery__ = __webpack_require__("./node_modules/jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_app_common_model_system_noticeboard__ = __webpack_require__("./src/app/common/model/system/noticeboard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_app_common_service_api_api_service__ = __webpack_require__("./src/app/common/service/api/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_app_common_service_web_socket_service__ = __webpack_require__("./src/app/common/service/web-socket.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var NoticewriterComponent = /** @class */ (function () {
    function NoticewriterComponent(httpService, websocket) {
        this.httpService = httpService;
        this.websocket = websocket;
        this.serverUrl = __WEBPACK_IMPORTED_MODULE_4_environments_environment__["a" /* environment */].websocketUrl;
        this.display_userList = false;
        this.currentUserName = localStorage.getItem('currentUserName');
        this.selectNotice = new __WEBPACK_IMPORTED_MODULE_5_app_common_model_system_noticeboard__["a" /* NoticeBoard */]();
    }
    NoticewriterComponent.prototype.ngOnInit = function () {
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
            switch (messageType) {
                case 1:
                    console.log(receiveData.messagedetail);
                    break;
                case 2:
                    break;
                default:
                    break;
            }
        };
        //this.initializeWebSocketConnection();
        this.initialSendHistory();
    };
    NoticewriterComponent.prototype.getUserList = function () {
        var _this = this;
        this.httpService.getAll('/user/selectAll/userInfo').subscribe(function (res) {
            console.log(res);
            _this.users = res;
        }, function (error) { console.log(error); });
    };
    NoticewriterComponent.prototype.showUserList = function () {
        this.display_userList = true;
        this.getUserList();
    };
    NoticewriterComponent.prototype.initializeWebSocketConnection = function () {
        var ws = new __WEBPACK_IMPORTED_MODULE_2_sockjs_client__(this.serverUrl);
        this.stompClient = __WEBPACK_IMPORTED_MODULE_1_stompjs__["over"](ws);
        var that = this;
        this.stompClient.connect(this.webSocketHeader, function (frame) {
            var _this = this;
            that.stompClient.subscribe("/topic/marco", function (message) {
                console.log('WEBSOCKET MESSAGE RECEIVED:' + message);
                _this.respText = message.body;
                __WEBPACK_IMPORTED_MODULE_3_jquery__(".chat").append("<div class='message'>" + _this.respText + "</div>");
            });
            that.stompClient.subscribe("/app/getGreet", function (message) {
                var content = message.body;
                var obj = JSON.parse(content);
                console.log("订阅的服务端直接返回的消息：" + obj.content);
            });
            that.stompClient.subscribe('/user/queue/notifications', function (message) {
                var content = message.body;
                var obj = JSON.parse(content);
                console.log('mj用户特定的消息：' + obj.content);
            });
            that.stompClient.subscribe('/user/queue/notice', function (message) {
            });
        });
    };
    NoticewriterComponent.prototype.sendNotice = function () {
        /*     this.noticeContent.subject = '<h2>' + this.noticeSubject + '</h2>';
            this.noticeContent.messagedetail = this.noticeText;
            this.stompClient.send("/app/noticeboard", {}, this.noticeContent); */
        if (this.noticeSubject != null || this.noticeSubject != '') {
            if (this.selectedUsers != null) {
                if (this.noticeText != null || this.noticeText != '' || this.noticeText != undefined) {
                    var selectedUsersStr = '';
                    for (var i = 0; i < this.selectedUsers.length; i++) {
                        selectedUsersStr += this.selectedUsers[i].useraccount;
                        if (i != this.selectedUsers.length - 1) {
                            selectedUsersStr += ';';
                        }
                    }
                    var NoticeContent = this.NoticeContentInit(this.currentUserName, this.noticeSubject, this.noticeText, selectedUsersStr);
                    this.socket.send(JSON.stringify(NoticeContent));
                }
                else {
                    this.showMessage('warn', 'Warn Message', 'Please Input Notice');
                }
            }
            else {
                this.showMessage('warn', 'Warn Message', 'Please Choose Recipient!');
            }
        }
        else {
            this.showMessage('warn', 'Warn Message', 'Please Input Subject!');
        }
    };
    /**
     *
     * @param author
     * @param subject
     * @param messagedetail
     * @param receivername
     * @description MessageType代表自定义的WebSocket类型：1.连接消息；2.具体消息
     */
    NoticewriterComponent.prototype.NoticeContentInit = function (author, subject, messagedetail, receivername) {
        var MessageContent = {
            messagetype: 2,
            author: author,
            subject: subject,
            messagedetail: messagedetail,
            receivername: receivername
        };
        return MessageContent;
    };
    NoticewriterComponent.prototype.showMessage = function (severity, summary, detail) {
        this.msgs = [];
        this.msgs.push({ severity: severity, summary: summary, detail: detail });
    };
    NoticewriterComponent.prototype.cancel = function () {
        this.selectedUsers = null;
        this.display_userList = false;
    };
    NoticewriterComponent.prototype.initialSendHistory = function () {
        var _this = this;
        var options = {
            params: {
                author: this.currentUserName,
            }
        };
        var url;
        url = '/noticeboard/getSendHistory';
        this.httpService.get(url, options).subscribe(function (res) {
            _this.sendHistory = res;
        }, function (error) { console.log(error); });
    };
    NoticewriterComponent.prototype.showOverLayer = function (event, overlaypanel) {
        debugger;
        this.selectNotice = event.value;
        overlaypanel.toggle(event);
    };
    NoticewriterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-noticewriter',
            template: __webpack_require__("./src/app/communication/noticewriter/noticewriter.component.html"),
            styles: [__webpack_require__("./src/app/communication/noticewriter/noticewriter.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6_app_common_service_api_api_service__["a" /* ApiService */], __WEBPACK_IMPORTED_MODULE_7_app_common_service_web_socket_service__["a" /* WebSocketService */]])
    ], NoticewriterComponent);
    return NoticewriterComponent;
}());



/***/ })

});
//# sourceMappingURL=communication.module.chunk.js.map