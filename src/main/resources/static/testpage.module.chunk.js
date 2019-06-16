webpackJsonp(["testpage.module"],{

/***/ "./src/app/common/service/car.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CarService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CarService = /** @class */ (function () {
    function CarService(http) {
        this.http = http;
    }
    CarService.prototype.getCarsSmall = function () {
        return this.http.get('././assets/demo/data/cars-small.json')
            .toPromise()
            .then(function (res) { return res['data']; })
            .then(function (data) { return data; });
    };
    CarService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["b" /* HttpClient */]])
    ], CarService);
    return CarService;
}());



/***/ }),

/***/ "./src/app/testpage/common/child1/child1.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/testpage/common/child1/child1.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  child1 works!\n</p>\n"

/***/ }),

/***/ "./src/app/testpage/common/child1/child1.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Child1Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_common_service_message_service__ = __webpack_require__("./src/app/common/service/message.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Child1Component = /** @class */ (function () {
    function Child1Component(message) {
        this.message = message;
    }
    Child1Component.prototype.ngOnInit = function () {
        this.message.sendMessage(3); // 組件A發送消息3
    };
    Child1Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-child1',
            template: __webpack_require__("./src/app/testpage/common/child1/child1.component.html"),
            styles: [__webpack_require__("./src/app/testpage/common/child1/child1.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_app_common_service_message_service__["a" /* MessageService */]])
    ], Child1Component);
    return Child1Component;
}());



/***/ }),

/***/ "./src/app/testpage/common/child2/child2.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/testpage/common/child2/child2.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  child2 works!\n</p>\n"

/***/ }),

/***/ "./src/app/testpage/common/child2/child2.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Child2Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_common_service_message_service__ = __webpack_require__("./src/app/common/service/message.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Child2Component = /** @class */ (function () {
    function Child2Component(message) {
        this.message = message;
        this.subscription = this.message.getMessage().subscribe(function (msg) {
            console.log('child2 constructor:' + JSON.stringify(msg));
        });
    }
    Child2Component.prototype.ngOnInit = function () {
    };
    Child2Component.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe(); // 組件生命週期結束的時候，記得註銷一下，不然會卡
    };
    Child2Component.prototype.send = function () {
        this.message.sendMessage(666);
    };
    Child2Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-child2',
            template: __webpack_require__("./src/app/testpage/common/child2/child2.component.html"),
            styles: [__webpack_require__("./src/app/testpage/common/child2/child2.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_app_common_service_message_service__["a" /* MessageService */]])
    ], Child2Component);
    return Child2Component;
}());



/***/ }),

/***/ "./src/app/testpage/test1/test1.component.css":
/***/ (function(module, exports) {

module.exports = "#leftButton {\r\n    height: 26px;\r\n    width: 26px;\r\n    border-radius: 13px;\r\n    padding: -20px 0 0 0;\r\n    list-style: none;\r\n    position: fixed;\r\n    right: 10%;\r\n    top: 11%;\r\n}\r\n\r\n#rightButton {\r\n    height: 26px;\r\n    width: 26px;\r\n    border-radius: 13px;\r\n    margin: 0 0 0 90%;\r\n}\r\n\r\n#tabMove{\r\n    position: fixed;\r\n    right: 10%;\r\n    top: 10%\r\n}"

/***/ }),

/***/ "./src/app/testpage/test1/test1.component.html":
/***/ (function(module, exports) {

module.exports = "<button (click)=\"testClick()\">getWidth</button>\n\n<p-orderList [value]=\"cars\" [listStyle]=\"{'height':'250px','width':'400px'}\" [style]=\"{'width':'400px'}\" header=\"Cars\" filter=\"filter\" filterBy=\"brand\"\n    filterPlaceholder=\"Filter by brand\" dragdrop=\"true\" (onReorder)=\"onReorder($event)\">\n    <ng-template let-car pTemplate=\"item\">\n        <div class=\"ui-helper-clearfix\">\n            <img src=\"assets/showcase/images/demo/car/{{car.brand}}.png\" style=\"display:inline-block;margin:2px 0 2px 2px\"\n                width=\"48\">\n            <div style=\"font-size:14px;float:right;margin:15px 5px 0 0\">{{car.brand}} - {{car.year}} - {{car.color}}</div>\n        </div>\n    </ng-template>\n</p-orderList>\n\n<!-- <button (click)=\"leftClick()\" id=\"leftButton\">1</button> -->\n\n<div id=\"tabMove\">\n    <ul>\n        <i class=\"fa ui-icon-chevron-left\" style=\"float: inherit;margin-top: 14px; margin-right: 3px; cursor: pointer;opacity: 0.6;font-size: large;\"\n            (click)=\"leftClick();\"></i>\n        <i class=\"fa ui-icon-chevron-right\" aria-hidden=\"true\" style=\"margin-top:14px; margin-left: 3px;cursor: pointer;opacity: 0.6;font-size: large;\"\n            (click)=\"rightClick();\"></i>\n    </ul>\n</div>\n\n\n\n<p-tabView id=\"\">\n\n    <p-tabPanel header=\"Godfather I\" *ngIf='display[0]' [closable]=\"true\">\n        The story begins as Don Vito Corleone, the head of a New York Mafia family, overseeshis daughter's wedding.\n        His\n        beloved son ichael has just come home from the war, but does not intend to become part of his father's\n        business. T hrough Michael's life the nature of the family business becomes clear. The business of the\n        family\n        is just like the head of the family, kind and benevolent to those who give respect, but given to ruthless\n        violence whenever anything stands against the good of the family.\n    </p-tabPanel>\n    <p-tabPanel header=\"Godfather II\" leftIcon=\"pi pi-inbox\" *ngIf='display[1]'>\n        Francis Ford Coppola's legendary continuation and sequel to his landmark 1972 film, The_Godfather parallels\n        the\n        young Vito Corleone's rise with his son Michael's spiritual fall, deepening The_Godfather's depiction of\n        the\n        dark side of the American dream. In the early 1900s, the child Vito flees his Sicilian village for America\n        after the local Mafia kills his family. Vito struggles to make a living, legally or illegally, for his wife\n        and\n        growing brood in Little Italy, killing the local Black Hand Fanucci after he demands his customary cut of\n        the\n        tyro's business. With Fanucci gone, Vito's communal stature grows.\n    </p-tabPanel>\n    <p-tabPanel header=\"Godfather III\" leftIcon=\"pi pi-user\" *ngIf='display[2]'>\n        After a break of more than 15 years, director Francis Ford Coppola and writer Mario Puzo returned to the\n        well\n        for this third and final story of the fictional Corleone crime family. Two decades have passed, and crime\n        kingpin Michael Corleone, now divorced from his wife Kay has nearly succeeded in keeping his promise that\n        his\n        family would one day be completely legitimate.\n    </p-tabPanel>\n    <p-tabPanel header=\"askdjfhas4\" leftIcon=\"pi pi-user\" *ngIf='display[3]'>\n        After a break of more than 15 years, director Francis Ford Coppola and writer Mario Puzo returned to the\n        well\n        for this third and final story of the fictional Corleone crime family. Two decades have passed, and crime\n        kingpin Michael Corleone, now divorced from his wife Kay has nearly succeeded in keeping his promise that\n        his\n        family would one day be completely legitimate.\n    </p-tabPanel>\n    <p-tabPanel header=\"zvnxcm,ncx,5\" leftIcon=\"pi pi-user\" *ngIf='display[4]'>\n        After a break of more than 15 years, director Francis Ford Coppola and writer Mario Puzo returned to the\n        well\n        for this third and final story of the fictional Corleone crime family. Two decades have passed, and crime\n        kingpin Michael Corleone, now divorced from his wife Kay has nearly succeeded in keeping his promise that\n        his\n        family would one day be completely legitimate.\n    </p-tabPanel>\n    <p-tabPanel header=\"fg;hjklfgop;h6\" leftIcon=\"pi pi-user\" *ngIf='display[5]'>\n        After a break of more than 15 years, director Francis Ford Coppola and writer Mario Puzo returned to the\n        well\n        for this third and final story of the fictional Corleone crime family. Two decades have passed, and crime\n        kingpin Michael Corleone, now divorced from his wife Kay has nearly succeeded in keeping his promise that\n        his\n        family would one day be completely legitimate.\n    </p-tabPanel>\n    <p-tabPanel header=\"8931qweoiru7\" leftIcon=\"pi pi-user\" *ngIf='display[6]'>\n        After a break of more than 15 years, director Francis Ford Coppola and writer Mario Puzo returned to the\n        well\n        for this third and final story of the fictional Corleone crime family. Two decades have passed, and crime\n        kingpin Michael Corleone, now divorced from his wife Kay has nearly succeeded in keeping his promise that\n        his\n        family would one day be completely legitimate.\n    </p-tabPanel>\n    <p-tabPanel header=\"6666666666666\" leftIcon=\"pi pi-user\" *ngIf='display[7]'>\n        After a break of more than 15 years, director Francis Ford Coppola and writer Mario Puzo returned to the\n        well\n        for this third and final story of the fictional Corleone crime family. Two decades have passed, and crime\n        kingpin Michael Corleone, now divorced from his wife Kay has nearly succeeded in keeping his promise that\n        his\n        family would one day be completely legitimate.\n    </p-tabPanel>\n    <p-tabPanel header=\"7777777777777777777777777\" leftIcon=\"pi pi-user\" *ngIf='display[8]'>\n        After a break of more than 15 years, director Francis Ford Coppola and writer Mario Puzo returned to the\n        well\n        for this third and final story of the fictional Corleone crime family. Two decades have passed, and crime\n        kingpin Michael Corleone, now divorced from his wife Kay has nearly succeeded in keeping his promise that\n        his\n        family would one day be completely legitimate.\n    </p-tabPanel>\n    <p-tabPanel header=\"9999999999999\" leftIcon=\"pi pi-user\" *ngIf='display[9]'>\n        After a break of more than 15 years, director Francis Ford Coppola and writer Mario Puzo returned to the\n        well\n        for this third and final story of the fictional Corleone crime family. Two decades have passed, and crime\n        kingpin Michael Corleone, now divorced from his wife Kay has nearly succeeded in keeping his promise that\n        his\n        family would one day be completely legitimate.\n    </p-tabPanel>\n</p-tabView>\n\n<!-- <button (click)=\"rightClick()\" id=rightButton>r</button> -->\n\n\n\n\n\n\n\n<p-tabMenu [model]=\"items\"></p-tabMenu>\n\n<h3 class=\"first\">Default</h3>\n<p-tabView orientation=\"left\">\n    <p-tabPanel header=\"Godfather I\" leftIcon=\"pi pi-calendar\">\n        The story begins as Don Vito Corleone, the head of a New York Mafia family, overseeshis daughter's wedding. His\n        beloved son ichael has just come home from the war, but does not intend to become part of his father's\n        business. T hrough Michael's life the nature of the family business becomes clear. The business of the family\n        is just like the head of the family, kind and benevolent to those who give respect, but given to ruthless\n        violence whenever anything stands against the good of the family.\n    </p-tabPanel>\n    <p-tabPanel header=\"Godfather II\" leftIcon=\"pi pi-inbox\">\n        Francis Ford Coppola's legendary continuation and sequel to his landmark 1972 film, The_Godfather parallels the\n        young Vito Corleone's rise with his son Michael's spiritual fall, deepening The_Godfather's depiction of the\n        dark side of the American dream. In the early 1900s, the child Vito flees his Sicilian village for America\n        after the local Mafia kills his family. Vito struggles to make a living, legally or illegally, for his wife and\n        growing brood in Little Italy, killing the local Black Hand Fanucci after he demands his customary cut of the\n        tyro's business. With Fanucci gone, Vito's communal stature grows.\n    </p-tabPanel>\n    <p-tabPanel header=\"Godfather III\" leftIcon=\"pi pi-user\" rightIcon=\"pi pi-star\">\n        After a break of more than 15 years, director Francis Ford Coppola and writer Mario Puzo returned to the well\n        for this third and final story of the fictional Corleone crime family. Two decades have passed, and crime\n        kingpin Michael Corleone, now divorced from his wife Kay has nearly succeeded in keeping his promise that his\n        family would one day be completely legitimate.\n    </p-tabPanel>\n    <p-tabPanel header=\"Godfather III\" leftIcon=\"pi pi-user\" rightIcon=\"pi pi-star\">\n        After a break of more than 15 years, director Francis Ford Coppola and writer Mario Puzo returned to the well\n        for this third and final story of the fictional Corleone crime family. Two decades have passed, and crime\n        kingpin Michael Corleone, now divorced from his wife Kay has nearly succeeded in keeping his promise that his\n        family would one day be completely legitimate.\n    </p-tabPanel>\n    <p-tabPanel header=\"Godfather III\" leftIcon=\"pi pi-user\" rightIcon=\"pi pi-star\">\n        After a break of more than 15 years, director Francis Ford Coppola and writer Mario Puzo returned to the well\n        for this third and final story of the fictional Corleone crime family. Two decades have passed, and crime\n        kingpin Michael Corleone, now divorced from his wife Kay has nearly succeeded in keeping his promise that his\n        family would one day be completely legitimate.\n    </p-tabPanel>\n    <p-tabPanel header=\"Godfather III\" leftIcon=\"pi pi-user\" rightIcon=\"pi pi-star\">\n        After a break of more than 15 years, director Francis Ford Coppola and writer Mario Puzo returned to the well\n        for this third and final story of the fictional Corleone crime family. Two decades have passed, and crime\n        kingpin Michael Corleone, now divorced from his wife Kay has nearly succeeded in keeping his promise that his\n        family would one day be completely legitimate.\n    </p-tabPanel>\n    <p-tabPanel header=\"Godfather III\" leftIcon=\"pi pi-user\" rightIcon=\"pi pi-star\">\n        After a break of more than 15 years, director Francis Ford Coppola and writer Mario Puzo returned to the well\n        for this third and final story of the fictional Corleone crime family. Two decades have passed, and crime\n        kingpin Michael Corleone, now divorced from his wife Kay has nearly succeeded in keeping his promise that his\n        family would one day be completely legitimate.\n    </p-tabPanel>\n    <p-tabPanel header=\"Godfather III\" leftIcon=\"pi pi-user\" rightIcon=\"pi pi-star\">\n        <ng-template pTemplate=\"header\">Custom Content</ng-template>\n        After a break of more than 15 years, director Francis Ford Coppola and writer Mario Puzo returned to the well\n        for this third and final story of the fictional Corleone crime family. Two decades have passed, and crime\n        kingpin Michael Corleone, now divorced from his wife Kay has nearly succeeded in keeping his promise that his\n        family would one day be completely legitimate.\n    </p-tabPanel>\n</p-tabView>\n\n<h3 class=\"first\">Basic</h3>\n<div class=\"ui-g\" style=\"width:250px;margin-bottom:10px\">\n    <div class=\"ui-g-12\">\n        <p-radioButton *ngFor=\"let item of values\" name=\"group1\" value={{item}} label={{item}} [(ngModel)]=\"selectedValue\"\n            inputId=\"opt1\"></p-radioButton>\n    </div>\n</div>\n<li *ngFor=\"let item of values\">{{item}}</li>\nSelected Value = {{selectedValue||'none'}}\n\n<h3 class=\"first\">Button Component</h3>\n<p-button label=\"Click\"></p-button>\n<p-button icon=\"pi pi-check\" label=\"Click\"></p-button>\n<p-button icon=\"pi pi-check\" iconPos=\"right\" label=\"Click\"></p-button>\n<p-button icon=\"pi pi-check\"></p-button>\n<p-button icon=\"pi pi-check\" [disabled]=\"true\" label=\"Disabled\"></p-button>\n\n<h3>Button Directive</h3>\n<button pButton type=\"button\" label=\"Click\"></button>\n<button pButton type=\"button\" icon=\"pi pi-check\" label=\"Click\"></button>\n<button pButton type=\"button\" icon=\"pi pi-check\" iconPos=\"right\" label=\"Click\"></button>\n<button pButton type=\"button\" icon=\"pi pi-check\"></button>\n<button pButton type=\"button\" icon=\"pi pi-check\" [disabled]=\"true\" label=\"Disabled\"></button>\n\n<h3>Severity Buttons</h3>\n<button pButton type=\"button\" label=\"Primary\"></button>\n<button pButton type=\"button\" label=\"Secondary\" class=\"ui-button-secondary\"></button>\n<button pButton type=\"button\" label=\"Success\" class=\"ui-button-success\"></button>\n<button pButton type=\"button\" label=\"Info\" class=\"ui-button-info\"></button>\n<button pButton type=\"button\" label=\"Warning\" class=\"ui-button-warning\"></button>\n<button pButton type=\"button\" label=\"Danger\" class=\"ui-button-danger\"></button>\n\n<h3>Raised Buttons</h3>\n<button pButton type=\"button\" label=\"Primary\" class=\"ui-button-raised\"></button>\n<button pButton type=\"button\" label=\"Secondary\" class=\"ui-button-raised ui-button-secondary\"></button>\n<button pButton type=\"button\" label=\"Success\" class=\"ui-button-raised ui-button-success\"></button>\n<button pButton type=\"button\" label=\"Info\" class=\"ui-button-raised ui-button-info\"></button>\n<button pButton type=\"button\" label=\"Warning\" class=\"ui-button-raised ui-button-warning\"></button>\n<button pButton type=\"button\" label=\"Danger\" class=\"ui-button-raised ui-button-danger\"></button>\n\n<h3>Rounded Buttons</h3>\n<button pButton type=\"button\" label=\"Primary\" class=\"ui-button-rounded\"></button>\n<button pButton type=\"button\" label=\"Secondary\" class=\"ui-button-rounded ui-button-secondary\"></button>\n<button pButton type=\"button\" label=\"Success\" class=\"ui-button-rounded ui-button-success\"></button>\n<button pButton type=\"button\" label=\"Info\" class=\"ui-button-rounded ui-button-info\"></button>\n<button pButton type=\"button\" label=\"Warning\" class=\"ui-button-rounded ui-button-warning\"></button>\n<button pButton type=\"button\" label=\"Danger\" class=\"ui-button-rounded ui-button-danger\"></button>"

/***/ }),

/***/ "./src/app/testpage/test1/test1.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Test1Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_common_service_car_service__ = __webpack_require__("./src/app/common/service/car.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Test1Component = /** @class */ (function () {
    function Test1Component(carService) {
        this.carService = carService;
        this.controlClose = true;
        this.values = ['1', '2', '3', '4'];
    }
    Test1Component.prototype.ngOnInit = function () {
        var _this = this;
        this.carService.getCarsSmall().then(function (cars) { return _this.cars = cars; });
        this.items = [
            { label: 'Stats', icon: 'fa fa-fw fa-bar-chart' },
            { label: 'Calendar', icon: 'fa fa-fw fa-calendar' },
            { label: 'Documentation', icon: 'fa fa-fw fa-book' },
            { label: 'Support', icon: 'fa fa-fw fa-support' },
            { label: 'Social', icon: 'fa fa-fw fa-twitter' }
        ];
        this.display = [true, true, true, true, true, true, true, true, false, false];
    };
    Test1Component.prototype.onReorder = function (event) {
        console.log(event);
    };
    Test1Component.prototype.leftClick = function () {
        var startIndex;
        var endIndex;
        for (var i = 0; i < this.display.length; i++) {
            if (this.display[i] == true) {
                startIndex = i;
                break;
            }
        }
        for (var i = startIndex; i < this.display.length; i++) {
            if (this.display[i] == false) {
                endIndex = i - 1;
                break;
            }
        }
        if (endIndex - startIndex + 1 > 6) {
            for (var i = 0; i < startIndex + 1; i++) {
                this.display[i] = false;
            }
            for (var i = startIndex + 1; i < endIndex + 2; i++) {
                this.display[i] = true;
            }
            for (var i = endIndex + 2; i < this.display.length; i++) {
                this.display[i] = false;
            }
        }
    };
    Test1Component.prototype.rightClick = function () {
        var startIndex;
        var endIndex;
        for (var i = 0; i < this.display.length; i++) {
            if (this.display[i] == true) {
                startIndex = i;
                break;
            }
        }
        for (var i = startIndex; i < this.display.length; i++) {
            if (this.display[i] == false) {
                endIndex = i - 1;
                break;
            }
        }
        if (endIndex == undefined || endIndex == null) {
            endIndex = this.display.length - 1;
        }
        var falseStart;
        if (startIndex - 1 < 0) {
            falseStart = 0;
        }
        else {
            falseStart = startIndex - 1;
        }
        if (endIndex - falseStart > 6) {
            for (var i = 0; i < falseStart; i++) {
                this.display[i] = false;
            }
            for (var i = falseStart; i < endIndex; i++) {
                this.display[i] = true;
            }
            for (var i = endIndex; i < this.display.length; i++) {
                this.display[i] = false;
            }
        }
    };
    Test1Component.prototype.testClick = function () {
        debugger;
        var el = document.getElementById('testTabView');
        console.log(el.style.width);
    };
    Test1Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-test1',
            template: __webpack_require__("./src/app/testpage/test1/test1.component.html"),
            styles: [__webpack_require__("./src/app/testpage/test1/test1.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_app_common_service_car_service__["a" /* CarService */]])
    ], Test1Component);
    return Test1Component;
}());



/***/ }),

/***/ "./src/app/testpage/test2/test2.component.css":
/***/ (function(module, exports) {

module.exports = ".different {\r\n    width: '100%';\r\n    height: '200px'\r\n}\r\n\r\n.calendardiv {\r\n    background-color: blueviolet;\r\n}\r\n\r\n.search_calendar .ui-inputtext{\r\n    width: 200px !important;\r\n}\r\n\r\n.ui-button {\r\n    width: 100px !important;\r\n}"

/***/ }),

/***/ "./src/app/testpage/test2/test2.component.html":
/***/ (function(module, exports) {

module.exports = "<p-growl [(value)]=\"msgs\"></p-growl>\n<div><button (click)=\"send()\">点击</button></div>\n<div class=\"chat\"></div>\n\n\n<div><button (click)=\"sendByUser()\">针对特定用户的订阅</button></div>\n<div class=\"chatByUser\"></div>\n\n\n<app-child1></app-child1>\n<app-child2></app-child2>\n<p-table [value]=\"sales\">\n    <ng-template pTemplate=\"header\">\n        <tr style=\"background-color:blue\">\n            <th rowspan=\"3\">Brand</th>\n            <th colspan=\"4\">Sale Rate</th>\n        </tr>\n        <tr>\n            <th colspan=\"2\">Sales</th>\n            <th colspan=\"2\">Profits</th>\n        </tr>\n        <tr>\n            <th>Last Year</th>\n            <th>This Year</th>\n            <th>Last Year</th>\n            <th>This Year</th>\n        </tr>\n    </ng-template>\n    <ng-template pTemplate=\"body\" let-sale>\n        <tr>\n            <td>{{sale.brand}}</td>\n            <td>{{sale.lastYearSale}}</td>\n            <td>{{sale.thisYearSale}}</td>\n            <td>{{sale.lastYearProfit}}</td>\n            <td>{{sale.thisYearProfit}}</td>\n        </tr>\n    </ng-template>\n    <ng-template pTemplate=\"footer\">\n        <tr>\n            <td colspan=\"3\">Totals</td>\n            <td>$506,202</td>\n            <td>$531,020</td>\n        </tr>\n    </ng-template>\n</p-table>"

/***/ }),

/***/ "./src/app/testpage/test2/test2.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Test2Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_stompjs__ = __webpack_require__("./node_modules/stompjs/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_stompjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_stompjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_sockjs_client__ = __webpack_require__("./node_modules/sockjs-client/lib/entry.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_sockjs_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_sockjs_client__);
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





var Test2Component = /** @class */ (function () {
    function Test2Component(Http) {
        this.Http = Http;
        this.title = 'app works';
        this.serverUrl = 'http://localhost:8888/socket';
        this.currentUserName = localStorage.getItem('currentUserName');
        this.webSocketHeader = {
            username: this.currentUserName,
            password: 'admin'
        };
        this.setMessage('666');
        this.initializeWebSocketConnection();
    }
    Test2Component.prototype.ngOnInit = function () {
        this.cars = [
            { label: 'Audi', value: 'Audi' },
            { label: 'BMW', value: 'BMW' },
            { label: 'Fiat', value: 'Fiat' },
            { label: 'Ford', value: 'Ford' },
            { label: 'Honda', value: 'Honda' },
            { label: 'Jaguar', value: 'Jaguar' },
            { label: 'Mercedes', value: 'Mercedes' },
            { label: 'Renault', value: 'Renault' },
            { label: 'VW', value: 'VW' },
            { label: 'Volvo', value: 'Volvo' }
        ];
        this.items = [
            { label: 'Categories' },
            { label: 'Sports' },
            { label: 'Football' },
            { label: 'Countries' },
            { label: 'Spain' },
            { label: 'F.C. Barcelona' },
            { label: 'Squad', url: 'http://localhost:4200/#/boe/production/pro-even' },
            { label: 'Lionel Messi', url: 'http://localhost:4200/#/boe/production/pro-bp', icon: 'pi pi-external-link' }
        ];
        this.home = { icon: 'pi pi-home' };
        this.sales = [
            { brand: 'Apple', lastYearSale: '51%', thisYearSale: '40%', lastYearProfit: '$54,406.00', thisYearProfit: '$43,342' },
            { brand: 'Samsung', lastYearSale: '83%', thisYearSale: '96%', lastYearProfit: '$423,132', thisYearProfit: '$312,122' },
            { brand: 'Microsoft', lastYearSale: '38%', thisYearSale: '5%', lastYearProfit: '$12,321', thisYearProfit: '$8,500' },
            { brand: 'Philips', lastYearSale: '49%', thisYearSale: '22%', lastYearProfit: '$745,232', thisYearProfit: '$650,323,' },
            { brand: 'Song', lastYearSale: '17%', thisYearSale: '79%', lastYearProfit: '$643,242', thisYearProfit: '500,332' },
            { brand: 'LG', lastYearSale: '52%', thisYearSale: ' 65%', lastYearProfit: '$421,132', thisYearProfit: '$150,005' },
            { brand: 'Sharp', lastYearSale: '82%', thisYearSale: '12%', lastYearProfit: '$131,211', thisYearProfit: '$100,214' },
            { brand: 'Panasonic', lastYearSale: '44%', thisYearSale: '45%', lastYearProfit: '$66,442', thisYearProfit: '$53,322' },
            { brand: 'HTC', lastYearSale: '90%', thisYearSale: '56%', lastYearProfit: '$765,442', thisYearProfit: '$296,232' },
            { brand: 'Toshiba', lastYearSale: '75%', thisYearSale: '54%', lastYearProfit: '$21,212', thisYearProfit: '$12,533' }
        ];
    };
    Test2Component.prototype.initializeWebSocketConnection = function () {
        var ws = new __WEBPACK_IMPORTED_MODULE_3_sockjs_client__(this.serverUrl);
        this.stompClient = __WEBPACK_IMPORTED_MODULE_2_stompjs__["over"](ws);
        var that = this;
        this.stompClient.connect(this.webSocketHeader, function (frame) {
            var _this = this;
            that.stompClient.subscribe("/topic/marco", function (message) {
                console.log('WEBSOCKET MESSAGE RECEIVED:' + message);
                _this.respText = message.body;
                __WEBPACK_IMPORTED_MODULE_4_jquery__(".chat").append("<div class='message'>" + _this.respText + "</div>");
                that.setMessage(_this.respText);
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
        });
    };
    Test2Component.prototype.sendMessage = function (message) {
        this.stompClient.send("/app/marco", {}, message);
        console.log('sendMessage');
    };
    Test2Component.prototype.send = function () {
        this.sendMessage('MJMJMJMJMJMJ');
    };
    Test2Component.prototype.sendByUser = function () {
        var adminJSON = JSON.stringify({ 'message': 'MJ' });
        this.stompClient.send('/app/shout', {}, adminJSON);
    };
    Test2Component.prototype.setMessage = function (content) {
        this.msgs = [{
                severity: 'error',
                summary: '提示',
                detail: content
            }];
        return;
    };
    Test2Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'app-test2',
            template: __webpack_require__("./src/app/testpage/test2/test2.component.html"),
            styles: [__webpack_require__("./src/app/testpage/test2/test2.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["b" /* HttpClient */]])
    ], Test2Component);
    return Test2Component;
}());



/***/ }),

/***/ "./src/app/testpage/testpage-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestpageRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__test2_test2_component__ = __webpack_require__("./src/app/testpage/test2/test2.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__test1_test1_component__ = __webpack_require__("./src/app/testpage/test1/test1.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    {
        path: 'test1',
        component: __WEBPACK_IMPORTED_MODULE_1__test1_test1_component__["a" /* Test1Component */]
    },
    {
        path: 'test2',
        component: __WEBPACK_IMPORTED_MODULE_0__test2_test2_component__["a" /* Test2Component */]
    }
];
var TestpageRoutingModule = /** @class */ (function () {
    function TestpageRoutingModule() {
    }
    TestpageRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_3__angular_router__["RouterModule"].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_3__angular_router__["RouterModule"]]
        })
    ], TestpageRoutingModule);
    return TestpageRoutingModule;
}());



/***/ }),

/***/ "./src/app/testpage/testpage.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestpageModule", function() { return TestpageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_primeng_table__ = __webpack_require__("./node_modules/primeng/table.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_primeng_table___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_primeng_table__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_primeng_breadcrumb__ = __webpack_require__("./node_modules/primeng/breadcrumb.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_primeng_breadcrumb___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_primeng_breadcrumb__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_primeng_button__ = __webpack_require__("./node_modules/primeng/button.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_primeng_button___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_primeng_button__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__testpage_routing_module__ = __webpack_require__("./src/app/testpage/testpage-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__test1_test1_component__ = __webpack_require__("./src/app/testpage/test1/test1.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__test2_test2_component__ = __webpack_require__("./src/app/testpage/test2/test2.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__node_modules_primeng_primeng__ = __webpack_require__("./node_modules/primeng/primeng.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__node_modules_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__node_modules_primeng_primeng__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__common_child1_child1_component__ = __webpack_require__("./src/app/testpage/common/child1/child1.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__common_child2_child2_component__ = __webpack_require__("./src/app/testpage/common/child2/child2.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_app_common_service_message_service__ = __webpack_require__("./src/app/common/service/message.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_app_common_service_car_service__ = __webpack_require__("./src/app/common/service/car.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var TestpageModule = /** @class */ (function () {
    function TestpageModule() {
    }
    TestpageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_5__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_6__testpage_routing_module__["a" /* TestpageRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_9__node_modules_primeng_primeng__["RadioButtonModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_2_primeng_button__["ButtonModule"],
                __WEBPACK_IMPORTED_MODULE_1_primeng_breadcrumb__["BreadcrumbModule"],
                __WEBPACK_IMPORTED_MODULE_9__node_modules_primeng_primeng__["TabMenuModule"],
                __WEBPACK_IMPORTED_MODULE_0_primeng_table__["TableModule"],
                __WEBPACK_IMPORTED_MODULE_9__node_modules_primeng_primeng__["TabViewModule"],
                __WEBPACK_IMPORTED_MODULE_9__node_modules_primeng_primeng__["ScrollPanelModule"],
                __WEBPACK_IMPORTED_MODULE_9__node_modules_primeng_primeng__["DropdownModule"],
                __WEBPACK_IMPORTED_MODULE_9__node_modules_primeng_primeng__["CalendarModule"],
                __WEBPACK_IMPORTED_MODULE_9__node_modules_primeng_primeng__["MessagesModule"],
                __WEBPACK_IMPORTED_MODULE_9__node_modules_primeng_primeng__["MessageModule"],
                __WEBPACK_IMPORTED_MODULE_9__node_modules_primeng_primeng__["GrowlModule"],
                __WEBPACK_IMPORTED_MODULE_9__node_modules_primeng_primeng__["OrderListModule"]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_7__test1_test1_component__["a" /* Test1Component */], __WEBPACK_IMPORTED_MODULE_8__test2_test2_component__["a" /* Test2Component */], __WEBPACK_IMPORTED_MODULE_10__common_child1_child1_component__["a" /* Child1Component */], __WEBPACK_IMPORTED_MODULE_11__common_child2_child2_component__["a" /* Child2Component */]],
            providers: [__WEBPACK_IMPORTED_MODULE_12_app_common_service_message_service__["a" /* MessageService */], __WEBPACK_IMPORTED_MODULE_13_app_common_service_car_service__["a" /* CarService */]]
        })
    ], TestpageModule);
    return TestpageModule;
}());



/***/ })

});
//# sourceMappingURL=testpage.module.chunk.js.map