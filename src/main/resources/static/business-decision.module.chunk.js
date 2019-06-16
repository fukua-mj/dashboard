webpackJsonp(["business-decision.module"],{

/***/ "./src/app/business-decision/business-decision-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BusinessDecisionRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__enterprise_enterprise_component__ = __webpack_require__("./src/app/business-decision/enterprise/enterprise.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: 'enterprise',
        component: __WEBPACK_IMPORTED_MODULE_2__enterprise_enterprise_component__["a" /* EnterpriseComponent */]
    }
];
var BusinessDecisionRoutingModule = /** @class */ (function () {
    function BusinessDecisionRoutingModule() {
    }
    BusinessDecisionRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"]]
        })
    ], BusinessDecisionRoutingModule);
    return BusinessDecisionRoutingModule;
}());



/***/ }),

/***/ "./src/app/business-decision/business-decision.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BusinessDecisionModule", function() { return BusinessDecisionModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__business_decision_routing_module__ = __webpack_require__("./src/app/business-decision/business-decision-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__enterprise_enterprise_component__ = __webpack_require__("./src/app/business-decision/enterprise/enterprise.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var BusinessDecisionModule = /** @class */ (function () {
    function BusinessDecisionModule() {
    }
    BusinessDecisionModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__business_decision_routing_module__["a" /* BusinessDecisionRoutingModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__enterprise_enterprise_component__["a" /* EnterpriseComponent */]]
        })
    ], BusinessDecisionModule);
    return BusinessDecisionModule;
}());



/***/ }),

/***/ "./src/app/business-decision/enterprise/enterprise.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/business-decision/enterprise/enterprise.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  enterprise works!\n</p>\n"

/***/ }),

/***/ "./src/app/business-decision/enterprise/enterprise.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EnterpriseComponent; });
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

var EnterpriseComponent = /** @class */ (function () {
    function EnterpriseComponent() {
    }
    EnterpriseComponent.prototype.ngOnInit = function () {
    };
    EnterpriseComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-enterprise',
            template: __webpack_require__("./src/app/business-decision/enterprise/enterprise.component.html"),
            styles: [__webpack_require__("./src/app/business-decision/enterprise/enterprise.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], EnterpriseComponent);
    return EnterpriseComponent;
}());



/***/ })

});
//# sourceMappingURL=business-decision.module.chunk.js.map