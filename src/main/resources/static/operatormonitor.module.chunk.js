webpackJsonp(["operatormonitor.module"],{

/***/ "./src/app/operatormonitor/operatormonitor-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OperatormonitorRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var routes = [
    {
        path: 'bp',
        loadChildren: 'app/operatormonitor/bp/bp.module#BpModule'
    },
    {
        path: 'even',
        loadChildren: 'app/operatormonitor/even/even.module#EvenModule'
    },
    {
        path: 'eac',
        loadChildren: 'app/operatormonitor/eac/eac.module#EacModule'
    },
    {
        path: 'mdl',
        loadChildren: 'app/operatormonitor/mdl/mdl.module#MdlModule'
    }
];
var OperatormonitorRoutingModule = /** @class */ (function () {
    function OperatormonitorRoutingModule() {
    }
    OperatormonitorRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"]]
        })
    ], OperatormonitorRoutingModule);
    return OperatormonitorRoutingModule;
}());



/***/ }),

/***/ "./src/app/operatormonitor/operatormonitor.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperatormonitorModule", function() { return OperatormonitorModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__operatormonitor_routing_module__ = __webpack_require__("./src/app/operatormonitor/operatormonitor-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_echarts__ = __webpack_require__("./node_modules/ngx-echarts/ngx-echarts.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__ = __webpack_require__("./node_modules/primeng/primeng.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_primeng_primeng__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var OperatormonitorModule = /** @class */ (function () {
    function OperatormonitorModule() {
    }
    OperatormonitorModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__operatormonitor_routing_module__["a" /* OperatormonitorRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_3_ngx_echarts__["a" /* NgxEchartsModule */],
                __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__["RadioButtonModule"],
                __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__["DialogModule"],
                __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__["TabViewModule"],
                __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__["PanelModule"],
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__["DropdownModule"],
                __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__["InputSwitchModule"],
                __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__["CheckboxModule"]
            ],
            declarations: []
        })
    ], OperatormonitorModule);
    return OperatormonitorModule;
}());



/***/ })

});
//# sourceMappingURL=operatormonitor.module.chunk.js.map