webpackJsonp(["quality.module"],{

/***/ "./src/app/quality/chart/amc/amc.component.css":
/***/ (function(module, exports) {

module.exports = "/* 1025px lg 显示器*/\r\n@media screen and (min-width:64.063em){\r\n    .lg-chart{\r\n        height: 197px;\r\n    }\r\n}\r\n/* 1441px xl 大电视*/\r\n@media screen and (min-width:90.063em){\r\n    .xl-chart{\r\n        height: 271px;\r\n    }\r\n}\r\n"

/***/ }),

/***/ "./src/app/quality/chart/amc/amc.component.html":
/***/ (function(module, exports) {

module.exports = "<div echarts [options]=\"echartOption\" class=\"ui-g-12 lg-chart xl-chart\" style=\"width: 100%;background-color: white\"></div>"

/***/ }),

/***/ "./src/app/quality/chart/amc/amc.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AmcComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_production_common_model_yieldParam__ = __webpack_require__("./src/app/production/common/model/yieldParam.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_common_service_api_api_service__ = __webpack_require__("./src/app/common/service/api/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_quality_common_echart_option_service__ = __webpack_require__("./src/app/quality/common/echart-option.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AmcComponent = /** @class */ (function () {
    function AmcComponent(httpService, echartService) {
        this.httpService = httpService;
        this.echartService = echartService;
        this.chartParam = new __WEBPACK_IMPORTED_MODULE_1_app_production_common_model_yieldParam__["a" /* YieldParam */]();
    }
    AmcComponent.prototype.ngOnInit = function () {
        this.drawChart();
    };
    AmcComponent.prototype.drawChart = function () {
        var _this = this;
        this.chartParam.datatype = this.dataType;
        this.chartParam.deviceType = this.deviceType;
        var nowDate = new Date();
        var currentTime = nowDate.toLocaleString();
        this.waterMark = 'BOECD Confidential@' + this.currentUserName + '\n' + currentTime + '@' + localStorage.getItem('currentIP');
        var url = '/echart/quality/getOpt_AMCData';
        this.httpService.post(url, this.chartParam).subscribe(function (res) {
            _this.respText = res;
            console.log('this.waterMark:' + _this.waterMark);
            _this.echartOption = _this.echartService.getOption_AMC(_this.dataType + ' Trend', _this.respText, _this.dataType, _this.waterMark, _this.deviceType);
        }, function (error) {
            console.log(error);
        });
    };
    AmcComponent.prototype.start_Timer = function () {
        var _this = this;
        this.timer = setInterval(function () {
            _this.drawChart();
        }, 300000);
    };
    AmcComponent.prototype.clear_Timer = function () {
        if (this.timer) {
            clearInterval(this.timer);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], AmcComponent.prototype, "dataType", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], AmcComponent.prototype, "currentUserName", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], AmcComponent.prototype, "deviceType", void 0);
    AmcComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-amc',
            template: __webpack_require__("./src/app/quality/chart/amc/amc.component.html"),
            styles: [__webpack_require__("./src/app/quality/chart/amc/amc.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_app_common_service_api_api_service__["a" /* ApiService */], __WEBPACK_IMPORTED_MODULE_3_app_quality_common_echart_option_service__["a" /* EchartOptionService */]])
    ], AmcComponent);
    return AmcComponent;
}());



/***/ }),

/***/ "./src/app/quality/chart/cg1view/cg1view.component.css":
/***/ (function(module, exports) {

module.exports = ".chartArea-12{\r\n    height: 700px;\r\n    border-right: 0;\r\n    border-bottom: 0;\r\n}\r\n.chartArea{\r\n    height: 700px;\r\n}\r\n.productionTypeArea {\r\n    height: 300px;\r\n}\r\n.productionCategoryArea {\r\n    height: 400px;\r\n}\r\nul {\r\n    list-style-type: none;\r\n}\r\n/* 640px 手机 sm */\r\n@media screen and (max-width:40em){\r\n    .sm-chartArea-12{\r\n        height: 401px;\r\n        border-right: 0;\r\n        border-bottom: 0;\r\n    }\r\n    .sm-chartArea{\r\n        height: 300px;\r\n        border-bottom: 1px solid rgba(167, 165, 165, 0.795);\r\n    }\r\n    .title{\r\n        font-size: 1.3em;\r\n        text-align: center;\r\n        border-bottom: 1px solid rgba(167, 165, 165, 0.795);\r\n    }\r\n    .sm-productionTypeArea {\r\n        margin: 0 0 0 0;\r\n        height: 214px;\r\n    }\r\n    .sm-productionTypeLi {\r\n        line-height:2.5;\r\n        margin: 0 0 0 -30px;\r\n    }\r\n    .sm-productionCategoryArea {\r\n        margin: 0 0 0 0;\r\n        height: 214px;\r\n    } \r\n}\r\n/* 641px 平板 md*/\r\n@media screen and (min-width:40.063em){\r\n    .md-chartArea-12{\r\n        height: 829px;\r\n        border-right: 0;\r\n        border-bottom: 0;\r\n    }\r\n    .md-chartArea{\r\n        height: 600px;\r\n        border-bottom: 1px solid rgba(167, 165, 165, 0.795);\r\n    }\r\n    .title{\r\n        font-size: 1.3em;\r\n        text-align: center;\r\n        border-bottom: 1px solid rgba(167, 165, 165, 0.795);\r\n    }\r\n    .md-productionTypeArea {\r\n        margin: 0 0 0 0;\r\n        height: 214px;\r\n    }\r\n    .md-productionTypeLi {\r\n        line-height:2.5;\r\n        margin: 0 0 0 -30px;\r\n    }\r\n    .md-productionCategoryArea {\r\n        margin: 0 0 0 0;\r\n        height: 214px;\r\n    } \r\n\r\n}\r\n/* 1025px lg 显示器*/\r\n@media screen and (min-width:64.063em){\r\n    .lg-chartArea-12{\r\n        height: 570px;\r\n        border-right: 0;\r\n        border-bottom: 0;\r\n    }\r\n    .lg-chartArea{\r\n        height: 570px;\r\n        border-right: 1px solid rgba(167, 165, 165, 0.795);\r\n        border-bottom: 0;\r\n    }\r\n    .lg-title{\r\n        font-size: 1.0em;\r\n        text-align: center;\r\n        border-bottom: 1px solid rgba(167, 165, 165, 0.795);\r\n    }\r\n    .lg-productionTypeArea {\r\n        margin: -7px 0 0 0;\r\n        height: 240px;\r\n    }\r\n    .lg-productionTypeLi {\r\n        line-height:1.8;\r\n        font-size: 14px;\r\n        margin: 0 0 0 -30px;\r\n    }\r\n    .lg-productionCategoryArea {\r\n        margin: 7px 0 0 0;\r\n        height: 530px;\r\n    } \r\n    .lg-productionCategoryArea .optionul {\r\n        height: 510px;\r\n        overflow-x: hidden;\r\n        overflow-y: scroll;\r\n    }\r\n    .lg-productionCategoryArea .optionul::-webkit-scrollbar {\r\n        display: none;\r\n        width: 6px;\r\n    }\r\n    .lg-productionCategoryArea .optionul:hover::-webkit-scrollbar {\r\n        display: inline-block;\r\n    }\r\n    .lg-productionCategoryArea .optionul::-webkit-scrollbar-thumb {/*滚动条里面小方块*/\r\n        border-radius: 10px;\r\n         -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);\r\n        background: #535353;\r\n    }\r\n    .lg-productionCategoryArea .optionul::-webkit-scrollbar-track {/*滚动条里面轨道*/\r\n        -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);\r\n        border-radius: 10px;\r\n        background: #EDEDED;\r\n    }\r\n}\r\n/* 1441px xl 大电视*/\r\n@media screen and (min-width:90.063em){\r\n    .xl-chartArea-12{\r\n        height: 790px;\r\n        border-right: 0;\r\n        border-bottom: 0;\r\n    }\r\n    .xl-chartArea{\r\n        height: 790px;\r\n        border-right: 1px solid rgba(167, 165, 165, 0.795);\r\n        border-bottom: 0;\r\n    }\r\n    .xl-title{\r\n        font-size: 1.3em;\r\n        text-align: center;\r\n        border-bottom: 1px solid rgba(167, 165, 165, 0.795);\r\n    }\r\n    .xl-productionTypeArea {\r\n        margin: -7px 0 0 0;\r\n        height: 300px;\r\n    }\r\n    .xl-productionTypeLi {\r\n        line-height:2.5;\r\n        font-size: 17px;\r\n        margin: 0 0 0 -30px;\r\n    }\r\n    .xl-productionCategoryArea {\r\n        margin: 7px 0 0 0;\r\n        height: 760px;\r\n    }    \r\n    .xl-productionCategoryArea .optionul {\r\n        height: 740px;\r\n        overflow-x: hidden;\r\n        overflow-y: scroll;\r\n    }\r\n    .xl-productionCategoryArea .optionul::-webkit-scrollbar {\r\n        display: none;\r\n        width: 10px;\r\n    }\r\n    .xl-productionCategoryArea .optionul:hover::-webkit-scrollbar {\r\n        display: inline-block;\r\n    }\r\n    .xl-productionCategoryArea .optionul::-webkit-scrollbar-thumb {/*滚动条里面小方块*/\r\n        border-radius: 10px;\r\n         -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);\r\n        background: #535353;\r\n    }\r\n    .xl-productionCategoryArea .optionul::-webkit-scrollbar-track {/*滚动条里面轨道*/\r\n        -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);\r\n        border-radius: 10px;\r\n        background: #EDEDED;\r\n    }\r\n}"

/***/ }),

/***/ "./src/app/quality/chart/cg1view/cg1view.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"ui-g\">\n    <div echarts [options]=\"echartOption\" class=\"ui-g-10 ui-lg-10 ui-xl-10 ui-md-12 ui-sm-12 chartArea xl-chartArea md-chartArea lg-chartArea sm-chartArea\"></div>\n    <div class=\"ui-g-2 ui-lg-2 ui-xl-2 ui-md-12 ui-sm-12\">\n      <div class=\"ui-g-12 ui-lg-12 ui-xl-12 ui-md-6 ui-sm-6 productionCategoryArea xl-productionCategoryArea md-productionCategoryArea lg-productionCategoryArea sm-productionCategoryArea\">\n        <div class=\"xl-title lg-title\"><strong>产品类型</strong></div>\n        <ul class=\"optionul\">\n          <li *ngFor=\"let item of productCategory\" class=\"productionTypeLi xl-productionTypeLi md-productionTypeLi lg-productionTypeLi sm-productionTypeLi\">\n            <p-radioButton name=\"CGProductCategory+{{dataType}}\" value=\"{{item}}\" label=\"{{item}}\" [(ngModel)]=\"selectedProductionCategory\"\n              inputId=\"CGproductCategory+{{dataType}}\" (click)=\"drawChart()\"></p-radioButton>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/quality/chart/cg1view/cg1view.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Cg1viewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_production_common_model_yieldParam__ = __webpack_require__("./src/app/production/common/model/yieldParam.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_common_service_api_api_service__ = __webpack_require__("./src/app/common/service/api/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_quality_common_echart_option_service__ = __webpack_require__("./src/app/quality/common/echart-option.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var Cg1viewComponent = /** @class */ (function () {
    function Cg1viewComponent(httpService, echartService) {
        this.httpService = httpService;
        this.echartService = echartService;
        this.currentUserName = '';
        this.deviceType = '';
        this.shopName = 'MODULE';
        this.selectedProductionCategory = '';
        this.chartParam = new __WEBPACK_IMPORTED_MODULE_1_app_production_common_model_yieldParam__["a" /* YieldParam */]();
    }
    Cg1viewComponent.prototype.ngOnInit = function () {
        this.getProductCategory();
    };
    Cg1viewComponent.prototype.getProductCategory = function () {
        var _this = this;
        var options = {
            params: {
                shopName: this.shopName,
            }
        };
        var url;
        if (this.dataType === 'WIP/Move') {
            url = '/echart/quality/CGWipCategory';
        }
        else if (this.dataType === 'CUM') {
            url = '/echart/quality/CumYieldCategory';
        }
        else if (this.dataType === 'DPPM/LRR') {
            url = '/echart/quality/DppmLrrCategory';
        }
        else if (this.dataType === 'InputOutput') {
            url = '/echart/quality/InputOutputCategory';
        }
        this.httpService.get(url, options).subscribe(function (res) {
            _this.productCategory = res;
            _this.selectedProductionCategory = _this.productCategory[0];
            _this.drawChart();
        }, function (error) { console.log(error); });
    };
    Cg1viewComponent.prototype.drawChart = function () {
        var _this = this;
        this.chartParam.productCategory = this.selectedProductionCategory;
        this.chartParam.deviceType = this.deviceType;
        var nowDate = new Date();
        var currentTime = nowDate.toLocaleString();
        this.waterMark = 'BOECD Confidential@' + this.currentUserName + '\n' + currentTime + '@' + localStorage.getItem('currentIP');
        var url;
        if (this.dataType === 'WIP/Move') {
            url = '/echart/quality/CGWipMove';
        }
        else if (this.dataType === 'CUM') {
            url = '/echart/quality/CumYield';
        }
        else if (this.dataType === 'DPPM/LRR') {
            url = '/echart/quality/DppmLrr';
        }
        else if (this.dataType === 'InputOutput') {
            url = '/echart/quality/InputOutput';
        }
        this.httpService.post(url, this.chartParam).subscribe(function (res) {
            _this.respText = res;
            console.log('this.waterMark:' + _this.waterMark);
            if (_this.dataType === 'WIP/Move') {
                _this.echartOption = _this.echartService.getOption_WipMove(_this.dataType, _this.respText, _this.waterMark, _this.deviceType);
            }
            else if (_this.dataType === 'CUM') {
                _this.echartOption = _this.echartService.getOption_CumYield(_this.dataType, _this.respText, _this.waterMark, _this.deviceType);
            }
            else if (_this.dataType === 'DPPM/LRR') {
                _this.echartOption = _this.echartService.getOption_DppmLrr(_this.dataType, _this.respText, _this.waterMark, _this.deviceType);
            }
            else if (_this.dataType === 'InputOutput') {
                _this.echartOption = _this.echartService.getOption_InputOutput(_this.dataType, _this.respText, _this.waterMark, _this.deviceType);
            }
        }, function (error) {
            console.log(error);
        });
    };
    Cg1viewComponent.prototype.start_Timer = function () {
        var _this = this;
        this.timer = setInterval(function () {
            _this.drawChart();
        }, 300000);
    };
    Cg1viewComponent.prototype.clear_Timer = function () {
        if (this.timer) {
            clearInterval(this.timer);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], Cg1viewComponent.prototype, "currentUserName", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], Cg1viewComponent.prototype, "deviceType", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], Cg1viewComponent.prototype, "dataType", void 0);
    Cg1viewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-cg1view',
            template: __webpack_require__("./src/app/quality/chart/cg1view/cg1view.component.html"),
            styles: [__webpack_require__("./src/app/quality/chart/cg1view/cg1view.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_app_common_service_api_api_service__["a" /* ApiService */], __WEBPACK_IMPORTED_MODULE_3_app_quality_common_echart_option_service__["a" /* EchartOptionService */]])
    ], Cg1viewComponent);
    return Cg1viewComponent;
}());



/***/ }),

/***/ "./src/app/quality/chart/cg2view/cg2view.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g\">\n  <div echarts [options]=\"echartOption\" class=\"ui-g-10 ui-lg-10 ui-xl-10 ui-md-12 ui-sm-12 chartArea xl-chartArea md-chartArea lg-chartArea sm-chartArea\"></div>\n  <div class=\"ui-g-2 ui-lg-2 ui-xl-2 ui-md-12 ui-sm-12\">\n    <div class=\"ui-g-12 ui-lg-12 ui-xl-12 ui-md-6 ui-sm-6 productionTypeArea xl-productionTypeArea md-productionTypeArea lg-productionTypeArea sm-productionTypeArea\">\n      <div class=\"xl-title lg-title\"><strong>{{title}}</strong></div>\n      <ul class=\"optionul\">\n        <li *ngFor=\"let item of productionType\" class=\"productionTypeLi xl-productionTypeLi md-productionTypeLi lg-productionTypeLi sm-productionTypeLi\">\n          <p-radioButton name=\"QAProductionType+{{shopName}}+{{dataType}}\" value=\"{{item.value}}\" label=\"{{item.label}}\"\n            [(ngModel)]=\"selectedProductionType\" inputId=\"QAProductionType+{{shopName}}+{{dataType}}+ {{item.label}}\" (click)=\"drawChart()\"></p-radioButton>\n        </li>\n      </ul>\n    </div>\n    <div class=\"ui-g-12 ui-lg-12 ui-xl-12 ui-md-6 ui-sm-6 productionCategoryArea xl-productionCategoryArea md-productionCategoryArea lg-productionCategoryArea sm-productionCategoryArea\">\n      <div class=\"xl-title lg-title\"><strong>产品类型</strong></div>\n      <ul class=\"optionul\">\n        <li *ngFor=\"let item of productCategory\" class=\"productionTypeLi xl-productionTypeLi md-productionTypeLi lg-productionTypeLi sm-productionTypeLi\">\n          <p-radioButton name=\"QAProductCategory+{{shopName}}+{{dataType}}\" value=\"{{item}}\" label=\"{{item}}\"\n            [(ngModel)]=\"selectedProductionCategory\" inputId=\"QAproductCategory+{{shopName}}+{{dataType}}+ {{item}}\"\n            (click)=\"drawChart()\"></p-radioButton>\n        </li>\n      </ul>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/quality/chart/cg2view/cg2view.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Cg2viewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_production_common_model_yieldParam__ = __webpack_require__("./src/app/production/common/model/yieldParam.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_common_service_api_api_service__ = __webpack_require__("./src/app/common/service/api/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_quality_common_echart_option_service__ = __webpack_require__("./src/app/quality/common/echart-option.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var Cg2viewComponent = /** @class */ (function () {
    function Cg2viewComponent(httpService, echartService) {
        this.httpService = httpService;
        this.echartService = echartService;
        this.currentUserName = '';
        this.deviceType = '';
        this.shopName = 'MODULE';
        this.selectedProductionType = ''; //productionType or operationName
        this.selectedProductionCategory = '';
        this.chartParam = new __WEBPACK_IMPORTED_MODULE_1_app_production_common_model_yieldParam__["a" /* YieldParam */]();
    }
    Cg2viewComponent.prototype.ngOnInit = function () {
        if (this.dataType === 'Yield') {
            this.productionType = [
                { label: 'CG Sorting', value: 'CG Sorting' },
                { label: '1st APP全检', value: '1st APP全检' },
                { label: 'CG 清洁', value: 'CG 清洁' }
            ];
            this.title = '工序名称';
            this.selectedProductionType = 'CG Sorting';
        }
        else if (this.dataType === 'ActPlan') {
            this.productionType = [
                { label: '工厂投入', value: 'In' },
                { label: '工厂产出', value: 'Out' },
            ];
            this.title = '投入产出';
            this.selectedProductionType = 'In';
        }
        this.getProductCategory();
    };
    Cg2viewComponent.prototype.getProductCategory = function () {
        var _this = this;
        var options = {
            params: {
                shopName: this.shopName,
                productionType: this.selectedProductionType,
            }
        };
        var url = '';
        if (this.dataType === 'Yield') {
            url = '/echart/quality/yieldCategory';
        }
        else if (this.dataType === 'ActPlan') {
            url = '/echart/quality/ActPlanCategory';
        }
        this.httpService.get(url, options).subscribe(function (res) {
            _this.productCategory = res;
            _this.selectedProductionCategory = _this.productCategory[0];
            _this.drawChart();
        }, function (error) { console.log(error); });
    };
    Cg2viewComponent.prototype.productionTypeClicked = function () {
        this.getProductCategory();
    };
    Cg2viewComponent.prototype.drawChart = function () {
        var _this = this;
        this.chartParam.productCategory = this.selectedProductionCategory;
        this.chartParam.productionType = this.selectedProductionType;
        this.chartParam.deviceType = this.deviceType;
        var nowDate = new Date();
        var currentTime = nowDate.toLocaleString();
        this.waterMark = 'BOECD Confidential@' + this.currentUserName + '\n' + currentTime + '@' + localStorage.getItem('currentIP');
        var url = '';
        if (this.dataType === 'Yield') {
            url = '/echart/quality/yield';
        }
        else if (this.dataType === 'ActPlan') {
            url = '/echart/quality/ActPlan';
        }
        this.httpService.post(url, this.chartParam).subscribe(function (res) {
            _this.respText = res;
            console.log('this.waterMark:' + _this.waterMark);
            if (_this.dataType === 'Yield') {
                _this.echartOption = _this.echartService.getOption_SQEyield(_this.dataType, _this.respText, _this.waterMark, _this.deviceType);
            }
            else if (_this.dataType === 'ActPlan') {
                _this.echartOption = _this.echartService.getOption_ActPlan(_this.dataType, _this.respText, _this.waterMark, _this.deviceType);
            }
        }, function (error) {
            console.log(error);
        });
    };
    Cg2viewComponent.prototype.start_Timer = function () {
        var _this = this;
        this.timer = setInterval(function () {
            _this.drawChart();
        }, 300000);
    };
    Cg2viewComponent.prototype.clear_Timer = function () {
        if (this.timer) {
            clearInterval(this.timer);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], Cg2viewComponent.prototype, "currentUserName", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], Cg2viewComponent.prototype, "deviceType", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], Cg2viewComponent.prototype, "dataType", void 0);
    Cg2viewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-cg2view',
            template: __webpack_require__("./src/app/quality/chart/cg2view/cg2view.component.html"),
            styles: [__webpack_require__("./src/app/production/pro-eac/pro-eac.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_app_common_service_api_api_service__["a" /* ApiService */], __WEBPACK_IMPORTED_MODULE_3_app_quality_common_echart_option_service__["a" /* EchartOptionService */]])
    ], Cg2viewComponent);
    return Cg2viewComponent;
}());



/***/ }),

/***/ "./src/app/quality/chart/cum/cum.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"ui-g\">\n  <div echarts [options]=\"echartOption\" class=\"ui-g-10 ui-lg-10 ui-xl-10 ui-md-12 ui-sm-12 chartArea xl-chartArea md-chartArea lg-chartArea sm-chartArea\"></div>\n  <div class=\"ui-g-2 ui-lg-2 ui-xl-2 ui-md-12 ui-sm-12\">\n    <div class=\"ui-g-12 ui-lg-12 ui-xl-12 ui-md-6 ui-sm-6 productionTypeArea xl-productionTypeArea md-productionTypeArea lg-productionTypeArea sm-productionTypeArea\">\n      <div class=\"xl-title lg-title\"><strong>产品阶段</strong></div>\n      <ul class=\"optionul\">\n        <li class=\"productionTypeLi xl-productionTypeLi md-productionTypeLi lg-productionTypeLi sm-productionTypeLi\">\n          <p-radioButton name=\"QAProductionType+{{shopName}}+{{processType}}\" value=\"Production\" label=\"正式量产\" [(ngModel)]=\"selectedProductionType\"\n            inputId=\"QAProductionType+{{shopName}}+{{processType}}1\" (click)=\"productionTypeClicked()\"></p-radioButton>\n        </li>\n        <li class=\"productionTypeLi xl-productionTypeLi md-productionTypeLi lg-productionTypeLi sm-productionTypeLi\">\n          <p-radioButton name=\"ProductionType+{{shopName}}+{{processType}}\" value=\"TPCN\" label=\"TPCN\" [(ngModel)]=\"selectedProductionType\"\n            inputId=\"QAProductionType+{{shopName}}+{{processType}}2\" (click)=\"productionTypeClicked()\"></p-radioButton>\n        </li>\n        <li class=\"productionTypeLi xl-productionTypeLi md-productionTypeLi lg-productionTypeLi sm-productionTypeLi\">\n          <p-radioButton name=\"ProductionType+{{shopName}}+{{processType}}\" value=\"Develop\" label=\"客户送样\" [(ngModel)]=\"selectedProductionType\"\n            inputId=\"QAProductionType+{{shopName}}+{{processType}}3\" (click)=\"productionTypeClicked()\"></p-radioButton>\n        </li>\n        <li class=\"productionTypeLi xl-productionTypeLi md-productionTypeLi lg-productionTypeLi sm-productionTypeLi\">\n          <p-radioButton name=\"ProductionType+{{shopName}}+{{processType}}\" value=\"Engineer\" label=\"工程验证\" [(ngModel)]=\"selectedProductionType\"\n            inputId=\"QAProductionType+{{shopName}}+{{processType}}4\" (click)=\"productionTypeClicked()\"></p-radioButton>\n        </li>\n        <li class=\"productionTypeLi xl-productionTypeLi md-productionTypeLi lg-productionTypeLi sm-productionTypeLi\">\n          <p-radioButton name=\"ProductionType+{{shopName}}+{{processType}}\" value=\"PV\" label=\"PV\" [(ngModel)]=\"selectedProductionType\"\n            inputId=\"QAProductionType+{{shopName}}+{{processType}}5\" (click)=\"productionTypeClicked()\"></p-radioButton>\n        </li>\n      </ul>\n    </div>\n    <div class=\"ui-g-12 ui-lg-12 ui-xl-12 ui-md-6 ui-sm-6 productionCategoryArea xl-productionCategoryArea md-productionCategoryArea lg-productionCategoryArea sm-productionCategoryArea\">\n      <div class=\"xl-title lg-title\"><strong>产品类型</strong></div>\n      <ul class=\"optionul\">\n        <li *ngFor=\"let item of productCategory\" class=\"productionTypeLi xl-productionTypeLi md-productionTypeLi lg-productionTypeLi sm-productionTypeLi\">\n          <p-radioButton name=\"QAProductCategory+{{shopName}}+{{processType}}\" value=\"{{item}}\" label=\"{{item}}\" [(ngModel)]=\"selectedProductionCategory\"\n            inputId=\"QAproductCategory+{{shopName}}+{{processType}}+ {{item}}\" (click)=\"drawChart()\"></p-radioButton>\n        </li>\n      </ul>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/quality/chart/cum/cum.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CumComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_production_common_model_yieldParam__ = __webpack_require__("./src/app/production/common/model/yieldParam.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_common_service_api_api_service__ = __webpack_require__("./src/app/common/service/api/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_quality_common_echart_option_service__ = __webpack_require__("./src/app/quality/common/echart-option.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CumComponent = /** @class */ (function () {
    function CumComponent(httpService, echartService) {
        this.httpService = httpService;
        this.echartService = echartService;
        this.currentUserName = '';
        this.deviceType = '';
        this.shopName = '';
        this.processType = '';
        this.selectedProductionType = 'Production';
        this.selectedProductionCategory = '';
        this.chartParam = new __WEBPACK_IMPORTED_MODULE_1_app_production_common_model_yieldParam__["a" /* YieldParam */]();
    }
    CumComponent.prototype.ngOnInit = function () {
        this.getProductCategory();
    };
    CumComponent.prototype.getProductCategory = function () {
        var _this = this;
        var options = {
            params: {
                shopName: this.shopName,
                productionType: this.selectedProductionType,
                processType: this.processType,
                dataType: this.dataType
            }
        };
        var url = '/echart/quality/cumCategory';
        this.httpService.get(url, options).subscribe(function (res) {
            _this.productCategory = res;
            _this.selectedProductionCategory = _this.productCategory[0];
            _this.drawChart();
        }, function (error) { console.log(error); });
    };
    CumComponent.prototype.productionTypeClicked = function () {
        this.getProductCategory();
    };
    CumComponent.prototype.drawChart = function () {
        var _this = this;
        this.chartParam.productCategory = this.selectedProductionCategory;
        this.chartParam.productionType = this.selectedProductionType;
        this.chartParam.datatype = this.dataType;
        this.chartParam.processtype = this.processType;
        this.chartParam.deviceType = this.deviceType;
        var nowDate = new Date();
        var currentTime = nowDate.toLocaleString();
        this.waterMark = 'BOECD Confidential@' + this.currentUserName + '\n' + currentTime + '@' + localStorage.getItem('currentIP');
        var url = '/echart/quality/cum';
        this.httpService.post(url, this.chartParam).subscribe(function (res) {
            _this.respText = res;
            var title = '';
            if (_this.processType == 'M71000N') {
                title = 'ET';
            }
            else {
                title = 'APP';
            }
            _this.echartOption = _this.echartService.getOption_quality(title, _this.respText, _this.waterMark, _this.deviceType);
        }, function (error) {
            console.log(error);
        });
    };
    CumComponent.prototype.start_Timer = function () {
        var _this = this;
        this.timer = setInterval(function () {
            _this.drawChart();
        }, 300000);
    };
    CumComponent.prototype.clear_Timer = function () {
        if (this.timer) {
            clearInterval(this.timer);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], CumComponent.prototype, "currentUserName", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], CumComponent.prototype, "deviceType", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], CumComponent.prototype, "shopName", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], CumComponent.prototype, "processType", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], CumComponent.prototype, "dataType", void 0);
    CumComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-cum',
            template: __webpack_require__("./src/app/quality/chart/cum/cum.component.html"),
            styles: [__webpack_require__("./src/app/production/pro-eac/pro-eac.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_app_common_service_api_api_service__["a" /* ApiService */], __WEBPACK_IMPORTED_MODULE_3_app_quality_common_echart_option_service__["a" /* EchartOptionService */]])
    ], CumComponent);
    return CumComponent;
}());



/***/ }),

/***/ "./src/app/quality/chart/daily/daily.component.css":
/***/ (function(module, exports) {

module.exports = ".chartArea-12{\r\n    height: 700px;\r\n    border-right: 0;\r\n    border-bottom: 0;\r\n}\r\n.chartArea{\r\n    height: 700px;\r\n}\r\n.productionTypeArea {\r\n    height: 300px;\r\n}\r\n.productionCategoryArea {\r\n    height: 400px;\r\n}\r\nul {\r\n    list-style-type: none;\r\n}\r\n/* 640px 手机 sm */\r\n@media screen and (max-width:40em){\r\n    .sm-chartArea-12{\r\n        height: 401px;\r\n        border-right: 0;\r\n        border-bottom: 0;\r\n    }\r\n    .sm-chartArea{\r\n        height: 300px;\r\n        border-bottom: 1px solid rgba(167, 165, 165, 0.795);\r\n    }\r\n    .title{\r\n        font-size: 1.3em;\r\n        text-align: center;\r\n        border-bottom: 1px solid rgba(167, 165, 165, 0.795);\r\n    }\r\n    .sm-productionTypeArea {\r\n        margin: 0 0 0 0;\r\n        height: 214px;\r\n    }\r\n    .sm-productionTypeLi {\r\n        line-height:2.5;\r\n        margin: 0 0 0 -30px;\r\n    }\r\n    .sm-productionCategoryArea {\r\n        margin: 0 0 0 0;\r\n        height: 214px;\r\n    } \r\n}\r\n/* 641px 平板 md*/\r\n@media screen and (min-width:40.063em){\r\n    .md-chartArea-12{\r\n        height: 829px;\r\n        border-right: 0;\r\n        border-bottom: 0;\r\n    }\r\n    .md-chartArea{\r\n        height: 600px;\r\n        border-bottom: 1px solid rgba(167, 165, 165, 0.795);\r\n    }\r\n    .title{\r\n        font-size: 1.3em;\r\n        text-align: center;\r\n        border-bottom: 1px solid rgba(167, 165, 165, 0.795);\r\n    }\r\n    .md-productionTypeArea {\r\n        margin: 0 0 0 0;\r\n        height: 214px;\r\n    }\r\n    .md-productionTypeLi {\r\n        line-height:2.5;\r\n        margin: 0 0 0 -30px;\r\n    }\r\n    .md-productionCategoryArea {\r\n        margin: 0 0 0 0;\r\n        height: 214px;\r\n    } \r\n\r\n}\r\n/* 1025px lg 显示器*/\r\n@media screen and (min-width:64.063em){\r\n    .lg-chartArea-12{\r\n        height: 555px;\r\n        border-right: 0;\r\n        border-bottom: 0;\r\n    }\r\n    .lg-chartArea{\r\n        height: 555px;\r\n        border-right: 1px solid rgba(167, 165, 165, 0.795);\r\n        border-bottom: 0;\r\n    }\r\n    .lg-title{\r\n        font-size: 1.0em;\r\n        text-align: center;\r\n        border-bottom: 1px solid rgba(167, 165, 165, 0.795);\r\n    }\r\n    .lg-productionTypeArea {\r\n        margin: -7px 0 0 0;\r\n        height: 230px;\r\n    }\r\n    .lg-productionTypeLi {\r\n        line-height:1.8;\r\n        font-size: 14px;\r\n        margin: 0 0 0 -35px;\r\n    }\r\n    .lg-productionCategoryArea {\r\n        margin: 7px 0 0 0;\r\n        height: 293px;\r\n    } \r\n    .lg-productionCategoryArea .optionul {\r\n        height: 280px;\r\n        overflow-x: hidden;\r\n        overflow-y: scroll;\r\n    }\r\n    .lg-productionCategoryArea .optionul::-webkit-scrollbar {\r\n        display: none;\r\n        width: 6px;\r\n    }\r\n    .lg-productionCategoryArea .optionul:hover::-webkit-scrollbar {\r\n        display: inline-block;\r\n    }\r\n    .lg-productionCategoryArea .optionul::-webkit-scrollbar-thumb {/*滚动条里面小方块*/\r\n        border-radius: 10px;\r\n         -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);\r\n        background: #535353;\r\n    }\r\n    .lg-productionCategoryArea .optionul::-webkit-scrollbar-track {/*滚动条里面轨道*/\r\n        -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);\r\n        border-radius: 10px;\r\n        background: #EDEDED;\r\n    }\r\n    .lg-table {\r\n        font-size: 12px;\r\n    }\r\n    .lg-tablecol {\r\n        width: 70px;\r\n    }\r\n}\r\n/* 1441px xl 大电视*/\r\n@media screen and (min-width:90.063em){\r\n    .xl-chartArea{\r\n        height: 750px;\r\n        border-right: 1px solid rgba(167, 165, 165, 0.795);\r\n        border-bottom: 0;\r\n    }\r\n    .xl-title{\r\n        font-size: 1.3em;\r\n        text-align: center;\r\n        border-bottom: 1px solid rgba(167, 165, 165, 0.795);\r\n    }\r\n    .xl-productionTypeArea {\r\n        margin: -7px 0 0 0;\r\n        height: 300px;\r\n    }\r\n    .xl-productionTypeLi {\r\n        line-height:2.5;\r\n        font-size: 17px;\r\n        margin: 0 0 0 -30px;\r\n    }\r\n    .xl-productionCategoryArea {\r\n        margin: 7px 0 0 0;\r\n        height: 460px;\r\n    }    \r\n    .xl-productionCategoryArea .optionul {\r\n        height: 420px;\r\n        overflow-x: hidden;\r\n        overflow-y: scroll;\r\n    }\r\n    .xl-productionCategoryArea .optionul::-webkit-scrollbar {\r\n        display: none;\r\n        width: 10px;\r\n    }\r\n    .xl-productionCategoryArea .optionul:hover::-webkit-scrollbar {\r\n        display: inline-block;\r\n    }\r\n    .xl-productionCategoryArea .optionul::-webkit-scrollbar-thumb {/*滚动条里面小方块*/\r\n        border-radius: 10px;\r\n         -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);\r\n        background: #535353;\r\n    }\r\n    .xl-productionCategoryArea .optionul::-webkit-scrollbar-track {/*滚动条里面轨道*/\r\n        -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);\r\n        border-radius: 10px;\r\n        background: #EDEDED;\r\n    }\r\n    .xl-table {\r\n        font-size: 15px;\r\n    }\r\n    .xl-tablecol {\r\n        width: 100px;\r\n    }\r\n\r\n}"

/***/ }),

/***/ "./src/app/quality/chart/daily/daily.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g\">\n  <div class=\"ui-g-8\">\n    <div echarts [options]=\"echartOption\" class=\"ui-g-10 ui-lg-9 ui-xl-10 ui-md-12 ui-sm-12 chartArea xl-chartArea md-chartArea lg-chartArea sm-chartArea\"></div>\n    <div class=\"ui-g-2 ui-lg-3 ui-xl-2 ui-md-12 ui-sm-12\">\n      <div class=\"ui-g-12 ui-lg-12 ui-xl-12 ui-md-6 ui-sm-6 productionTypeArea xl-productionTypeArea md-productionTypeArea lg-productionTypeArea sm-productionTypeArea\">\n        <div class=\"xl-title lg-title\"><strong>产品阶段</strong></div>\n        <ul class=\"optionul\">\n          <li class=\"productionTypeLi xl-productionTypeLi md-productionTypeLi lg-productionTypeLi sm-productionTypeLi\">\n            <p-radioButton name=\"QAProductionType+{{dataType}}+{{shopName}}+{{processType}}\" value=\"Production\" label=\"正式量产\"\n              [(ngModel)]=\"selectedProductionType\" inputId=\"QAProductionType+{{dataType}}+{{shopName}}+{{processType}}1\"\n              (click)=\"productionTypeClicked()\"></p-radioButton>\n          </li>\n          <li class=\"productionTypeLi xl-productionTypeLi md-productionTypeLi lg-productionTypeLi sm-productionTypeLi\">\n            <p-radioButton name=\"QAProductionType+{{dataType}}+{{shopName}}+{{processType}}\" value=\"TPCN\" label=\"TPCN\"\n              [(ngModel)]=\"selectedProductionType\" inputId=\"QAProductionType+{{dataType}}+{{shopName}}+{{processType}}2\"\n              (click)=\"productionTypeClicked()\"></p-radioButton>\n          </li>\n          <li class=\"productionTypeLi xl-productionTypeLi md-productionTypeLi lg-productionTypeLi sm-productionTypeLi\">\n            <p-radioButton name=\"QAProductionType+{{dataType}}+{{shopName}}+{{processType}}\" value=\"Develop\" label=\"客户送样\"\n              [(ngModel)]=\"selectedProductionType\" inputId=\"QAProductionType+{{shopName}}+{{processType}}3\" (click)=\"productionTypeClicked()\"></p-radioButton>\n          </li>\n          <li class=\"productionTypeLi xl-productionTypeLi md-productionTypeLi lg-productionTypeLi sm-productionTypeLi\">\n            <p-radioButton name=\"QAProductionType+{{dataType}}+{{shopName}}+{{processType}}\" value=\"Engineer\" label=\"工程验证\"\n              [(ngModel)]=\"selectedProductionType\" inputId=\"QAProductionType+{{dataType}}+{{shopName}}+{{processType}}4\"\n              (click)=\"productionTypeClicked()\"></p-radioButton>\n          </li>\n          <li class=\"productionTypeLi xl-productionTypeLi md-productionTypeLi lg-productionTypeLi sm-productionTypeLi\">\n            <p-radioButton name=\"QAProductionType+{{dataType}}+{{shopName}}+{{processType}}\" value=\"PV\" label=\"PV\"\n              [(ngModel)]=\"selectedProductionType\" inputId=\"QAProductionType+{{dataType}}+{{shopName}}+{{processType}}5\"\n              (click)=\"productionTypeClicked()\"></p-radioButton>\n          </li>\n        </ul>\n      </div>\n      <div class=\"ui-g-12 ui-lg-12 ui-xl-12 ui-md-6 ui-sm-6 productionCategoryArea xl-productionCategoryArea md-productionCategoryArea lg-productionCategoryArea sm-productionCategoryArea\">\n        <div class=\"xl-title lg-title\"><strong>产品类型</strong></div>\n        <ul class=\"optionul\">\n          <li *ngFor=\"let item of productCategory\" class=\"productionTypeLi xl-productionTypeLi md-productionTypeLi lg-productionTypeLi sm-productionTypeLi\">\n            <p-radioButton name=\"QAproductCategory+{{dataType}}+{{shopName}}+{{processType}}\" value=\"{{item}}\" label=\"{{item}}\"\n              [(ngModel)]=\"selectedProductionCategory\" inputId=\"QAproductCategory+{{dataType}}+{{shopName}}+{{processType}}+ {{item}}\"\n              (click)=\"drawChart()\"></p-radioButton>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </div>\n  <div class=\"ui-g-4 lg-table xl-table\">\n    <p-table #userinfoTable [columns]='cols' [loading]=\"loading\" [value]=\"DailyInfoList\" selectionMode=\"single\"\n      [(selection)]=\"selectedDailyInfo\" (onRowSelect)=\"onRowSelect($event)\" [resizableColumns]=\"true\" [paginator]=\"true\"\n      [rows]=\"rowNumber\">\n      <ng-template pTemplate=\"caption\">\n        <div class=\"ui-helper-clearfix\">\n          {{tableTitle}} Daily Detail\n        </div>\n      </ng-template>\n      <ng-template pTemplate=\"colgroup\" let-columns>\n        <colgroup>\n          <col *ngFor=\"let col of columns\" class=\"xl-tablecol lg-tablecol\">\n        </colgroup>\n      </ng-template>\n      <ng-template pTemplate=\"header\" let-columns>\n        <tr>\n          <th *ngFor=\"let col of cols\">{{col.header}}</th>\n        </tr>\n      </ng-template>\n      <ng-template pTemplate=\"body\" let-DailyInfoList let-columns=\"columns\">\n        <tr [pSelectableRow]=\"DailyInfoList\">\n          <td *ngFor=\"let col of columns\">{{DailyInfoList[col.field]}}</td>\n        </tr>\n      </ng-template>\n    </p-table>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/quality/chart/daily/daily.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DailyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_production_common_model_yieldParam__ = __webpack_require__("./src/app/production/common/model/yieldParam.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_common_service_api_api_service__ = __webpack_require__("./src/app/common/service/api/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_quality_common_echart_option_service__ = __webpack_require__("./src/app/quality/common/echart-option.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DailyComponent = /** @class */ (function () {
    function DailyComponent(httpService, echartService) {
        this.httpService = httpService;
        this.echartService = echartService;
        this.currentUserName = '';
        this.deviceType = '';
        this.shopName = '';
        this.processType = '';
        this.tableTitle = '';
        this.selectedProductionType = 'Production';
        this.selectedProductionCategory = '';
        this.chartParam = new __WEBPACK_IMPORTED_MODULE_1_app_production_common_model_yieldParam__["a" /* YieldParam */]();
    }
    DailyComponent.prototype.ngOnInit = function () {
        if (this.processType == 'M71000N') {
            this.tableTitle = 'ET';
        }
        else {
            this.tableTitle = 'APP';
        }
        this.cols = [
            { field: 'productcategory', header: '产品类型' },
            { field: 'productiontype', header: '产品阶段' },
            { field: 'description', header: '描述' },
            { field: 'in', header: 'IN' },
            { field: 'out', header: 'OUT' },
        ];
        this.getProductCategory();
        if (this.deviceType == 'tv') {
            this.rowNumber = 9;
        }
        else if (this.deviceType == 'monitor') {
            this.rowNumber = 5;
        }
    };
    DailyComponent.prototype.getProductCategory = function () {
        var _this = this;
        var options = {
            params: {
                shopName: this.shopName,
                productionType: this.selectedProductionType,
                processType: this.processType,
                dataType: this.dataType
            }
        };
        var url = '/echart/quality/dailyCategory';
        this.httpService.get(url, options).subscribe(function (res) {
            _this.productCategory = res;
            _this.selectedProductionCategory = _this.productCategory[0];
            _this.drawChart();
            _this.drawTable();
        }, function (error) { console.log(error); });
    };
    DailyComponent.prototype.productionTypeClicked = function () {
        this.getProductCategory();
    };
    DailyComponent.prototype.drawChart = function () {
        var _this = this;
        this.chartParam.productCategory = this.selectedProductionCategory;
        this.chartParam.productionType = this.selectedProductionType;
        this.chartParam.datatype = this.dataType;
        this.chartParam.processtype = this.processType;
        this.chartParam.deviceType = this.deviceType;
        var nowDate = new Date();
        var currentTime = nowDate.toLocaleString();
        this.waterMark = 'BOECD Confidential@' + this.currentUserName + '\n' + currentTime + '@' + localStorage.getItem('currentIP');
        var url = '/echart/quality/daily';
        this.httpService.post(url, this.chartParam).subscribe(function (res) {
            _this.respText = res;
            var title = '';
            if (_this.processType == 'M71000N') {
                title = 'ET';
            }
            else {
                title = 'APP';
            }
            _this.echartOption = _this.echartService.getOption_oqaDaily(title, _this.respText, _this.waterMark, _this.deviceType);
        }, function (error) {
            console.log(error);
        });
    };
    DailyComponent.prototype.drawTable = function () {
        var _this = this;
        var options = {
            params: {
                productionType: this.selectedProductionType,
                processType: this.processType,
                productCategory: this.selectedProductionCategory
            }
        };
        this.httpService.get('/echart/quality/dailyTable', options).subscribe(function (res) {
            console.log(res);
            _this.DailyInfoList = res;
        }, function (error) { console.log(error); });
    };
    DailyComponent.prototype.start_Timer = function () {
        var _this = this;
        this.timer = setInterval(function () {
            _this.drawChart();
            _this.drawTable();
        }, 300000);
    };
    DailyComponent.prototype.clear_Timer = function () {
        if (this.timer) {
            clearInterval(this.timer);
        }
    };
    DailyComponent.prototype.onRowSelect = function (event) {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], DailyComponent.prototype, "currentUserName", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], DailyComponent.prototype, "deviceType", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], DailyComponent.prototype, "shopName", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], DailyComponent.prototype, "processType", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], DailyComponent.prototype, "dataType", void 0);
    DailyComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-daily',
            template: __webpack_require__("./src/app/quality/chart/daily/daily.component.html"),
            styles: [__webpack_require__("./src/app/quality/chart/daily/daily.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_app_common_service_api_api_service__["a" /* ApiService */], __WEBPACK_IMPORTED_MODULE_3_app_quality_common_echart_option_service__["a" /* EchartOptionService */]])
    ], DailyComponent);
    return DailyComponent;
}());



/***/ }),

/***/ "./src/app/quality/chart/operator/operator.component.css":
/***/ (function(module, exports) {

module.exports = ".chartArea-12{\r\n    height: 700px;\r\n    border-right: 0;\r\n    border-bottom: 0;\r\n}\r\n.chartArea{\r\n    height: 700px;\r\n}\r\n.productionTypeArea {\r\n    height: 300px;\r\n}\r\n.productionCategoryArea {\r\n    height: 400px;\r\n}\r\nul {\r\n    list-style-type: none;\r\n}\r\n.button{\r\n    margin: 40% 0 10% 10%;\r\n    width: 100%;\r\n}\r\n/* 640px 手机 sm */\r\n@media screen and (max-width:40em){\r\n    .sm-chartArea-12{\r\n        height: 401px;\r\n        border-right: 0;\r\n        border-bottom: 0;\r\n    }\r\n    .sm-chartArea{\r\n        height: 300px;\r\n        border-bottom: 1px solid rgba(167, 165, 165, 0.795);\r\n    }\r\n    .title{\r\n        font-size: 1.3em;\r\n        text-align: center;\r\n        border-bottom: 1px solid rgba(167, 165, 165, 0.795);\r\n    }\r\n    .sm-productionTypeArea {\r\n        margin: 0 0 0 0;\r\n        height: 214px;\r\n    }\r\n    .sm-productionTypeLi {\r\n        line-height:2.5;\r\n        margin: 0 0 0 -30px;\r\n    }\r\n    .sm-productionCategoryArea {\r\n        margin: 0 0 0 0;\r\n        height: 214px;\r\n    } \r\n}\r\n/* 641px 平板 md*/\r\n@media screen and (min-width:40.063em){\r\n    .md-chartArea-12{\r\n        height: 829px;\r\n        border-right: 0;\r\n        border-bottom: 0;\r\n    }\r\n    .md-chartArea{\r\n        height: 600px;\r\n        border-bottom: 1px solid rgba(167, 165, 165, 0.795);\r\n    }\r\n    .title{\r\n        font-size: 1.3em;\r\n        text-align: center;\r\n        border-bottom: 1px solid rgba(167, 165, 165, 0.795);\r\n    }\r\n    .md-productionTypeArea {\r\n        margin: 0 0 0 0;\r\n        height: 214px;\r\n    }\r\n    .md-productionTypeLi {\r\n        line-height:2.5;\r\n        margin: 0 0 0 -30px;\r\n    }\r\n    .md-productionCategoryArea {\r\n        margin: 0 0 0 0;\r\n        height: 214px;\r\n    } \r\n\r\n}\r\n/* 1025px lg 显示器*/\r\n@media screen and (min-width:64.063em){\r\n    .lg-chartArea-12{\r\n        height: 577px;\r\n        border-right: 0;\r\n        border-bottom: 0;\r\n    }\r\n    .lg-chartArea{\r\n        height: 571px;\r\n        border-right: 1px solid rgba(167, 165, 165, 0.795);\r\n        border-bottom: 0;\r\n    }\r\n    .lg-subchartArea {\r\n        height: 290px;\r\n    }\r\n    .lg-title{\r\n        font-size: 1.0em;\r\n        text-align: center;\r\n        border-bottom: 1px solid rgba(167, 165, 165, 0.795);\r\n    }\r\n    .lg-productionTypeArea {\r\n        margin: -7px 0 0 0;\r\n        height: 210px;\r\n    }\r\n    .lg-productionTypeLi {\r\n        line-height:1.8;\r\n        font-size: 14px;\r\n        margin: 0 0 0 -30px;\r\n    }\r\n    .lg-productionCategoryArea {\r\n        margin: 7px 0 0 0;\r\n        height: 160px;\r\n    } \r\n    .lg-productionCategoryArea .optionul {\r\n        height: 135px;\r\n        overflow-x: hidden;\r\n        overflow-y: scroll;\r\n    }\r\n    .lg-productionCategoryArea .optionul::-webkit-scrollbar {\r\n        display: none;\r\n        width: 10px;\r\n    }\r\n    .lg-productionCategoryArea .optionul:hover::-webkit-scrollbar {\r\n        display: inline-block;\r\n    }\r\n    .lg-productionCategoryArea .optionul::-webkit-scrollbar-thumb {/*滚动条里面小方块*/\r\n        border-radius: 10px;\r\n         -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);\r\n        background: #535353;\r\n    }\r\n    .lg-productionCategoryArea .optionul::-webkit-scrollbar-track {/*滚动条里面轨道*/\r\n        -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);\r\n        border-radius: 10px;\r\n        background: #EDEDED;\r\n    }\r\n    .lg-lineNameArea {\r\n        margin: 0 0 0 0;\r\n        height: 170px;\r\n    } \r\n    .lg-lineNameArea .optionul {\r\n        height: 130px;\r\n        overflow-x: hidden;\r\n        overflow-y: scroll;\r\n    }\r\n    .lg-lineNameArea .optionul::-webkit-scrollbar {\r\n        display: none;\r\n    }\r\n    .searchbutton {\r\n        height: 20px;\r\n    }\r\n    .ui-inputtext {\r\n        width: 50px !important;\r\n    }\r\n\r\n    .lg-datetimelabel {\r\n        font-size: 13px;\r\n    }\r\n}\r\n/* 1441px xl 大电视*/\r\n@media screen and (min-width:90.063em){\r\n    .xl-chartArea-12{\r\n        height: 790px;\r\n        border-right: 0;\r\n        border-bottom: 0;\r\n    }\r\n    .xl-chartArea{\r\n        height: 790px;\r\n        border-right: 1px solid rgba(167, 165, 165, 0.795);\r\n        border-bottom: 0;\r\n    }\r\n    .xl-subchartArea {\r\n        height: 395px;\r\n    }\r\n    .xl-title{\r\n        font-size: 1.3em;\r\n        text-align: center;\r\n        border-bottom: 1px solid rgba(167, 165, 165, 0.795);\r\n    }\r\n    .xl-productionTypeArea {\r\n        margin: -7px 0 0 0;\r\n        height: 250px;\r\n    }\r\n    .xl-productionTypeLi {\r\n        line-height:2.5;\r\n        margin: 0 0 0 -30px;\r\n    }\r\n    .xl-productionCategoryArea {\r\n        margin: 7px 0 0 0;\r\n        height: 355px;\r\n    }  \r\n    .xl-productionCategoryArea .optionul {\r\n        height: 330px;\r\n        overflow-x: hidden;\r\n        overflow-y: scroll;\r\n    }\r\n    .xl-productionCategoryArea .optionul::-webkit-scrollbar {\r\n        display: none;\r\n        width: 10px;\r\n    }\r\n    .xl-productionCategoryArea .optionul:hover::-webkit-scrollbar {\r\n        display: inline-block;\r\n    }\r\n    .xl-productionCategoryArea .optionul::-webkit-scrollbar-thumb {/*滚动条里面小方块*/\r\n        border-radius: 10px;\r\n         -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);\r\n        background: #535353;\r\n    }\r\n    .xl-productionCategoryArea .optionul::-webkit-scrollbar-track {/*滚动条里面轨道*/\r\n        -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);\r\n        border-radius: 10px;\r\n        background: #EDEDED;\r\n    }\r\n    .xl-lineNameArea {\r\n        margin: 7px 0 0 0;\r\n        height: 100px;\r\n    } \r\n    .searchbutton {\r\n        height: 20px;\r\n    }\r\n\r\n    .xl-datetimelabel {\r\n        font-size: 15px;\r\n    }\r\n}"

/***/ }),

/***/ "./src/app/quality/chart/operator/operator.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g\">\n  <div class=\"ui-g-10 ui-lg-10 ui-xl-10 ui-md-12 ui-sm-12 chartArea xl-chartArea md-chartArea lg-chartArea sm-chartArea\">\n    <div echarts [options]=\"echartOption\" (chartClick)=\"chartClick($event)\" class=\"ui-g-12 subchartArea xl-subchartArea md-subchartArea lg-subchartArea sm-subchartArea\"></div>\n    <div echarts [options]=\"echartOption1\" class=\"ui-g-12 subchartArea xl-subchartArea md-subchartArea lg-subchartArea sm-subchartArea\"></div>\n  </div>\n  <div class=\"ui-g-2 ui-lg-2 ui-xl-2 ui-md-12 ui-sm-12\">\n    <div class=\"ui-g-12 ui-lg-12 ui-xl-12 ui-md-6 ui-sm-6 productionTypeArea xl-productionTypeArea md-productionTypeArea lg-productionTypeArea sm-productionTypeArea\">\n      <div class=\"xl-title lg-title\"><strong>产品阶段</strong></div>\n      <ul class=\"optionul\">\n        <li class=\"productionTypeLi xl-productionTypeLi md-productionTypeLi lg-productionTypeLi sm-productionTypeLi\">\n          <p-radioButton name=\"QAOPProductionType+{{shopName}}+{{processType}}\" value=\"Production\" label=\"正式量产\"\n            [(ngModel)]=\"selectedProductionType\" inputId=\"QAOPProductionType1\" (click)=\"productionTypeClicked()\"></p-radioButton>\n        </li>\n        <li class=\"productionTypeLi xl-productionTypeLi md-productionTypeLi lg-productionTypeLi sm-productionTypeLi\">\n          <p-radioButton name=\"QAOPProductionType+{{shopName}}+{{processType}}\" value=\"TPCN\" label=\"TPCN\" [(ngModel)]=\"selectedProductionType\"\n            inputId=\"QAOPProductionType2\" (click)=\"productionTypeClicked()\"></p-radioButton>\n        </li>\n        <li class=\"productionTypeLi xl-productionTypeLi md-productionTypeLi lg-productionTypeLi sm-productionTypeLi\">\n          <p-radioButton name=\"QAOPProductionType+{{shopName}}+{{processType}}\" value=\"Develop\" label=\"客户送样\"\n            [(ngModel)]=\"selectedProductionType\" inputId=\"QAOPProductionType3\" (click)=\"productionTypeClicked()\"></p-radioButton>\n        </li>\n        <li class=\"productionTypeLi xl-productionTypeLi md-productionTypeLi lg-productionTypeLi sm-productionTypeLi\">\n          <p-radioButton name=\"QAOPProductionType+{{shopName}}+{{processType}}\" value=\"Engineer\" label=\"工程验证\"\n            [(ngModel)]=\"selectedProductionType\" inputId=\"QAOPProductionType4\" (click)=\"productionTypeClicked()\"></p-radioButton>\n        </li>\n        <li class=\"productionTypeLi xl-productionTypeLi md-productionTypeLi lg-productionTypeLi sm-productionTypeLi\">\n          <p-radioButton name=\"QAOPProductionType+{{shopName}}+{{processType}}\" value=\"PV\" label=\"PV\" [(ngModel)]=\"selectedProductionType\"\n            inputId=\"QAOPProductionType5\" (click)=\"productionTypeClicked()\"></p-radioButton>\n        </li>\n      </ul>\n    </div>\n    <div class=\"ui-g-12 ui-lg-12 ui-xl-12 ui-md-6 ui-sm-6 productionCategoryArea xl-productionCategoryArea md-productionCategoryArea lg-productionCategoryArea sm-productionCategoryArea\">\n      <div class=\"xl-title lg-title\"><strong>产品类型</strong></div>\n      <ul class=\"optionul\">\n        <li *ngFor=\"let item of productCategory\" class=\"productionTypeLi xl-productionTypeLi md-productionTypeLi lg-productionTypeLi sm-productionTypeLi\">\n          <p-radioButton name=\"QAOPProductCategory+{{shopName}}+{{processType}}\" value=\"{{item}}\" label=\"{{item}}\"\n            [(ngModel)]=\"selectedProductionCategory\" inputId=\"QAOPProductCategory+{{shopName}}+{{processType}}+{{item}}\"\n            (click)=\"searchButtonClick()\"></p-radioButton>\n        </li>\n      </ul>\n    </div>\n    <div class=\"ui-g-12 ui-lg-12 ui-xl-12 ui-md-6 ui-sm-6 lineNameArea xl-lineNameArea md-lineNameArea lg-lineNameArea sm-lineNameArea\">\n      <div class=\"xl-title lg-title\"><strong>日期时间</strong></div>\n      <div class=\"ui-g\">\n        <div class=\"ui-g-10 ui-xl-10 ui-lg-10 xl-datetimelabel lg-datetimelabel\">\n          <span>开始时间 :</span>\n          <br />\n          <p-calendar dateFormat=\"yy-mm-dd\" [(ngModel)]=\"startDate\" [showTime]=\"true\"\n            [showIcon]=\"true\" [readonlyInput]=\"true\"></p-calendar>\n          <br />\n          <span>结束时间 :</span>\n          <br />\n          <p-calendar dateFormat=\"yy-mm-dd\" [(ngModel)]=\"endDate\" [showTime]=\"true\"\n            [showIcon]=\"true\" [readonlyInput]=\"true\"></p-calendar>\n        </div>\n        <div class=\"ui-g-2 ui-xl-2 ui-lg-2 searchbutton\">\n          <br />\n          <button class=\"button\" pButton type=\"button\" (click)=\"searchButtonClick()\" icon='fa fa-search'></button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/quality/chart/operator/operator.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OperatorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_production_common_model_yieldParam__ = __webpack_require__("./src/app/production/common/model/yieldParam.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_common_service_api_api_service__ = __webpack_require__("./src/app/common/service/api/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_quality_common_echart_option_service__ = __webpack_require__("./src/app/quality/common/echart-option.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_common_service_datetime_service__ = __webpack_require__("./src/app/common/service/datetime.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var OperatorComponent = /** @class */ (function () {
    function OperatorComponent(httpService, echartService, dateTimeService) {
        this.httpService = httpService;
        this.echartService = echartService;
        this.dateTimeService = dateTimeService;
        this.selectedProductionType = 'Production';
        this.selectedProductionCategory = '';
        this.chartParam = new __WEBPACK_IMPORTED_MODULE_1_app_production_common_model_yieldParam__["a" /* YieldParam */]();
    }
    OperatorComponent.prototype.ngOnInit = function () {
        this.startDate = this.dateTimeService.getOperatorStartEndTime()[0];
        this.endDate = this.dateTimeService.getOperatorStartEndTime()[1];
        this.getProductCategory();
    };
    OperatorComponent.prototype.getDefaultOpName = function () {
        var _this = this;
        this.chartParam.productCategory = this.selectedProductionCategory;
        this.chartParam.productionType = this.selectedProductionType;
        this.chartParam.shopName = this.shopName;
        this.chartParam.processtype = this.processType;
        this.chartParam.datatype = this.dataType;
        this.chartParam.starttime = this.dateTimeService.date2string(this.startDate);
        this.chartParam.endtime = this.dateTimeService.date2string(this.endDate);
        console.log(this.chartParam.starttime);
        console.log(this.chartParam.endtime);
        var nowDate = new Date();
        var currentTime = nowDate.toLocaleString();
        this.waterMark = 'BOECD Confidential@' + this.currentUserName + '\n' + currentTime + '@' + localStorage.getItem('currentIP');
        var url = '/echart/quality/getOpt_OperatorDefectMDLRENYUANBIEdefaultopName';
        this.httpService.post(url, this.chartParam).subscribe(function (res) {
            _this.respText = res;
            _this.defaultOpName = _this.respText.defaultopName;
            _this.drawChart1();
        }, function (error) {
            console.log(error);
        });
    };
    OperatorComponent.prototype.getProductCategory = function () {
        var _this = this;
        var options = {
            params: {
                shopName: this.shopName,
                productionType: this.selectedProductionType,
                processType: this.processType,
                dataType: this.dataType,
            }
        };
        var url = '/echart/quality/getOpt_OperatorDefectCategory';
        this.httpService.get(url, options).subscribe(function (res) {
            _this.productCategory = res;
            _this.selectedProductionCategory = _this.productCategory[0];
            _this.drawChart();
            _this.getDefaultOpName();
        }, function (error) { console.log(error); });
    };
    OperatorComponent.prototype.productionTypeClicked = function () {
        this.getProductCategory();
        this.getDefaultOpName();
    };
    OperatorComponent.prototype.drawChart = function () {
        var _this = this;
        this.chartParam.productCategory = this.selectedProductionCategory;
        this.chartParam.productionType = this.selectedProductionType;
        this.chartParam.shopName = this.shopName;
        this.chartParam.processtype = this.processType;
        this.chartParam.datatype = this.dataType;
        this.chartParam.starttime = this.dateTimeService.date2string(this.startDate);
        this.chartParam.endtime = this.dateTimeService.date2string(this.endDate);
        this.chartParam.deviceType = this.deviceType;
        var nowDate = new Date();
        var currentTime = nowDate.toLocaleString();
        this.waterMark = 'BOECD Confidential@' + this.currentUserName + '\n' + currentTime + '@' + localStorage.getItem('currentIP');
        var url = '/echart/quality/getOpt_OperatorDefectMDLRENYUANBIEOQA';
        this.httpService.post(url, this.chartParam).subscribe(function (res) {
            _this.respText = res;
            console.log('this.waterMark:' + _this.waterMark);
            _this.echartOption = _this.echartService.getOption_OperatorDefectchannengOQA(_this.processType + ' 良率指标', _this.respText, _this.waterMark, _this.deviceType);
        }, function (error) {
            console.log(error);
        });
    };
    OperatorComponent.prototype.drawChart1 = function () {
        var _this = this;
        this.chartParam.productCategory = this.selectedProductionCategory;
        this.chartParam.productionType = this.selectedProductionType;
        this.chartParam.shopName = this.shopName;
        this.chartParam.processtype = this.processType;
        this.chartParam.datatype = this.defaultOpName;
        this.chartParam.starttime = this.dateTimeService.date2string(this.startDate);
        this.chartParam.endtime = this.dateTimeService.date2string(this.endDate);
        this.chartParam.deviceType = this.deviceType;
        var nowDate = new Date();
        var currentTime = nowDate.toLocaleString();
        this.waterMark = 'BOECD Confidential@' + this.currentUserName + '\n' + currentTime + '@' + localStorage.getItem('currentIP');
        var url = '/echart/quality/getOpt_OperatorDefectMDLRENYUANBIEOneOQA';
        this.httpService.post(url, this.chartParam).subscribe(function (res) {
            _this.respText = res;
            console.log('this.waterMark:' + _this.waterMark);
            _this.echartOption1 = _this.echartService.getOption_OperatorDefectchannengOneOQA(_this.defaultOpName + _this.processType + ' 产能监控', _this.respText, _this.waterMark, _this.deviceType);
        }, function (error) {
            console.log(error);
        });
    };
    OperatorComponent.prototype.start_Timer = function () {
        var _this = this;
        this.timer = setInterval(function () {
            _this.drawChart();
        }, 300000);
    };
    OperatorComponent.prototype.clear_Timer = function () {
        if (this.timer) {
            clearInterval(this.timer);
        }
    };
    OperatorComponent.prototype.searchButtonClick = function () {
        this.drawChart();
        this.getDefaultOpName();
    };
    OperatorComponent.prototype.chartClick = function (event) {
        this.defaultOpName = event.name;
        this.drawChart1();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], OperatorComponent.prototype, "currentUserName", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], OperatorComponent.prototype, "deviceType", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], OperatorComponent.prototype, "shopName", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], OperatorComponent.prototype, "processType", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], OperatorComponent.prototype, "categoryURL", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], OperatorComponent.prototype, "chartURL", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], OperatorComponent.prototype, "dataType", void 0);
    OperatorComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-operator',
            template: __webpack_require__("./src/app/quality/chart/operator/operator.component.html"),
            styles: [__webpack_require__("./src/app/quality/chart/operator/operator.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_app_common_service_api_api_service__["a" /* ApiService */], __WEBPACK_IMPORTED_MODULE_3_app_quality_common_echart_option_service__["a" /* EchartOptionService */], __WEBPACK_IMPORTED_MODULE_4_app_common_service_datetime_service__["a" /* DatetimeService */]])
    ], OperatorComponent);
    return OperatorComponent;
}());



/***/ }),

/***/ "./src/app/quality/chart/qaline/qaline.component.css":
/***/ (function(module, exports) {

module.exports = ".chartArea-12{\r\n    height: 700px;\r\n    border-right: 0;\r\n    border-bottom: 0;\r\n}\r\n.chartArea{\r\n    height: 700px;\r\n}\r\n.productionTypeArea {\r\n    height: 300px;\r\n}\r\n.productionCategoryArea {\r\n    height: 400px;\r\n}\r\nul {\r\n    list-style-type: none;\r\n}\r\n/* 640px 手机 sm */\r\n@media screen and (max-width:40em){\r\n    .sm-chartArea-12{\r\n        height: 401px;\r\n        border-right: 0;\r\n        border-bottom: 0;\r\n    }\r\n    .sm-chartArea{\r\n        height: 300px;\r\n        border-bottom: 1px solid rgba(167, 165, 165, 0.795);\r\n    }\r\n    .title{\r\n        font-size: 1.3em;\r\n        text-align: center;\r\n        border-bottom: 1px solid rgba(167, 165, 165, 0.795);\r\n    }\r\n    .sm-productionTypeArea {\r\n        margin: 0 0 0 0;\r\n        height: 214px;\r\n    }\r\n    .sm-productionTypeLi {\r\n        line-height:2.5;\r\n        margin: 0 0 0 -30px;\r\n    }\r\n    .sm-productionCategoryArea {\r\n        margin: 0 0 0 0;\r\n        height: 214px;\r\n    } \r\n}\r\n/* 641px 平板 md*/\r\n@media screen and (min-width:40.063em){\r\n    .md-chartArea-12{\r\n        height: 829px;\r\n        border-right: 0;\r\n        border-bottom: 0;\r\n    }\r\n    .md-chartArea{\r\n        height: 600px;\r\n        border-bottom: 1px solid rgba(167, 165, 165, 0.795);\r\n    }\r\n    .title{\r\n        font-size: 1.3em;\r\n        text-align: center;\r\n        border-bottom: 1px solid rgba(167, 165, 165, 0.795);\r\n    }\r\n    .md-productionTypeArea {\r\n        margin: 0 0 0 0;\r\n        height: 214px;\r\n    }\r\n    .md-productionTypeLi {\r\n        line-height:2.5;\r\n        margin: 0 0 0 -30px;\r\n    }\r\n    .md-productionCategoryArea {\r\n        margin: 0 0 0 0;\r\n        height: 214px;\r\n    } \r\n\r\n}\r\n/* 1025px lg 显示器*/\r\n@media screen and (min-width:64.063em){\r\n    .lg-chartArea-12{\r\n        height: 570px;\r\n        border-right: 0;\r\n        border-bottom: 0;\r\n    }\r\n    .lg-chartArea{\r\n        height: 570px;\r\n        border-right: 1px solid rgba(167, 165, 165, 0.795);\r\n        border-bottom: 0;\r\n    }\r\n    .lg-title{\r\n        font-size: 1.0em;\r\n        text-align: center;\r\n        border-bottom: 1px solid rgba(167, 165, 165, 0.795);\r\n    }\r\n    .lg-productionTypeArea {\r\n        margin: -7px 0 0 0;\r\n        height: 210px;\r\n    }\r\n    .lg-productionTypeLi {\r\n        line-height:1.8;\r\n        font-size: 14px;\r\n        margin: 0 0 0 -30px;\r\n    }\r\n    .lg-productionCategoryArea {\r\n        margin: 7px 0 0 0;\r\n        height: 170px;\r\n    } \r\n    .lg-productionCategoryArea .optionul {\r\n        height: 150px;\r\n        overflow-x: hidden;\r\n        overflow-y: scroll;\r\n    }\r\n    .lg-productionCategoryArea .optionul::-webkit-scrollbar {\r\n        display: none;\r\n        width: 10px;\r\n    }\r\n    .lg-productionCategoryArea .optionul:hover::-webkit-scrollbar {\r\n        display: inline-block;\r\n    }\r\n    .lg-productionCategoryArea .optionul::-webkit-scrollbar-thumb {/*滚动条里面小方块*/\r\n        border-radius: 10px;\r\n         -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);\r\n        background: #535353;\r\n    }\r\n    .lg-productionCategoryArea .optionul::-webkit-scrollbar-track {/*滚动条里面轨道*/\r\n        -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);\r\n        border-radius: 10px;\r\n        background: #EDEDED;\r\n    }\r\n    .lg-lineNameArea {\r\n        margin: 0 0 0 0;\r\n        height: 170px;\r\n    } \r\n    .lg-lineNameArea .optionul {\r\n        height: 130px;\r\n        overflow-x: hidden;\r\n        overflow-y: scroll;\r\n    }\r\n    .lg-lineNameArea .optionul::-webkit-scrollbar {\r\n        display: none;\r\n        width: 10px;\r\n    }\r\n    .lg-lineNameArea .optionul:hover::-webkit-scrollbar {\r\n        display: inline-block;\r\n    }\r\n    .lg-lineNameArea .optionul::-webkit-scrollbar-thumb {/*滚动条里面小方块*/\r\n        border-radius: 10px;\r\n         -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);\r\n        background: #535353;\r\n    }\r\n    .lg-lineNameArea .optionul::-webkit-scrollbar-track {/*滚动条里面轨道*/\r\n        -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);\r\n        border-radius: 10px;\r\n        background: #EDEDED;\r\n    }\r\n}\r\n/* 1441px xl 大电视*/\r\n@media screen and (min-width:90.063em){\r\n    .xl-chartArea-12{\r\n        height: 790px;\r\n        border-right: 0;\r\n        border-bottom: 0;\r\n    }\r\n    .xl-chartArea{\r\n        height: 790px;\r\n        border-right: 1px solid rgba(167, 165, 165, 0.795);\r\n        border-bottom: 0;\r\n    }\r\n    .xl-title{\r\n        font-size: 1.3em;\r\n        text-align: center;\r\n        border-bottom: 1px solid rgba(167, 165, 165, 0.795);\r\n    }\r\n    .xl-productionTypeArea {\r\n        margin: -7px 0 0 0;\r\n        height: 250px;\r\n    }\r\n    .xl-productionTypeLi {\r\n        line-height:2.5;\r\n        margin: 0 0 0 -30px;\r\n    }\r\n    .xl-productionCategoryArea {\r\n        margin: 7px 0 0 0;\r\n        height: 316px;\r\n    }   \r\n    .xl-productionCategoryArea .optionul {\r\n        height: 300px;\r\n        overflow-x: hidden;\r\n        overflow-y: scroll;\r\n    }\r\n    .xl-productionCategoryArea .optionul::-webkit-scrollbar {\r\n        display: none;\r\n        width: 10px;\r\n    }\r\n    .xl-productionCategoryArea .optionul:hover::-webkit-scrollbar {\r\n        display: inline-block;\r\n    }\r\n    .xl-productionCategoryArea .optionul::-webkit-scrollbar-thumb {/*滚动条里面小方块*/\r\n        border-radius: 10px;\r\n         -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);\r\n        background: #535353;\r\n    }\r\n    .xl-productionCategoryArea .optionul::-webkit-scrollbar-track {/*滚动条里面轨道*/\r\n        -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);\r\n        border-radius: 10px;\r\n        background: #EDEDED;\r\n    }\r\n    .xl-lineNameArea {\r\n        margin: 7px 0 0 0;\r\n        height: 200px;\r\n    } \r\n    .xl-lineNameArea .optionul {\r\n        height: 160px;\r\n        overflow-x: hidden;\r\n        overflow-y: scroll;\r\n    }\r\n    .xl-lineNameArea .optionul::-webkit-scrollbar {\r\n        display: none;\r\n        width: 10px;\r\n    }\r\n    .xl-lineNameArea .optionul:hover::-webkit-scrollbar {\r\n        display: inline-block;\r\n    }\r\n    .xl-lineNameArea .optionul::-webkit-scrollbar-thumb {/*滚动条里面小方块*/\r\n        border-radius: 10px;\r\n         -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);\r\n        background: #535353;\r\n    }\r\n    .xl-lineNameArea .optionul::-webkit-scrollbar-track {/*滚动条里面轨道*/\r\n        -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);\r\n        border-radius: 10px;\r\n        background: #EDEDED;\r\n    }\r\n}"

/***/ }),

/***/ "./src/app/quality/chart/qaline/qaline.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g\">\n    <div echarts [options]=\"echartOption\" class=\"ui-g-10 ui-lg-10 ui-xl-10 ui-md-12 ui-sm-12 chartArea xl-chartArea md-chartArea lg-chartArea sm-chartArea\"></div>\n    <div class=\"ui-g-2 ui-lg-2 ui-xl-2 ui-md-12 ui-sm-12\">\n      <div class=\"ui-g-12 ui-lg-12 ui-xl-12 ui-md-6 ui-sm-6 productionTypeArea xl-productionTypeArea md-productionTypeArea lg-productionTypeArea sm-productionTypeArea\">\n        <div class=\"xl-title lg-title\"><strong>产品阶段</strong></div>\n        <ul class=\"optionul\">\n          <li class=\"productionTypeLi xl-productionTypeLi md-productionTypeLi lg-productionTypeLi sm-productionTypeLi\">\n            <p-radioButton name=\"QaLineProductionType+{{shopName}}+{{processType}}\" value=\"Production\" label=\"正式量产\" [(ngModel)]=\"selectedProductionType\"\n              inputId=\"QaLineProductionType1+{{shopName}}+{{processType}}\" (click)=\"productionTypeClicked()\"></p-radioButton>\n          </li>\n          <li class=\"productionTypeLi xl-productionTypeLi md-productionTypeLi lg-productionTypeLi sm-productionTypeLi\">\n            <p-radioButton name=\"QaLineProductionType+{{shopName}}+{{processType}}\" value=\"TPCN\" label=\"TPCN\" [(ngModel)]=\"selectedProductionType\"\n              inputId=\"QaLineProductionType2+{{shopName}}+{{processType}}\" (click)=\"productionTypeClicked()\"></p-radioButton>\n          </li>\n          <li class=\"productionTypeLi xl-productionTypeLi md-productionTypeLi lg-productionTypeLi sm-productionTypeLi\">\n            <p-radioButton name=\"QaLineProductionType+{{shopName}}+{{processType}}\" value=\"Develop\" label=\"客户送样\" [(ngModel)]=\"selectedProductionType\"\n              inputId=\"QaLineProductionType3+{{shopName}}+{{processType}}\" (click)=\"productionTypeClicked()\"></p-radioButton>\n          </li>\n          <li class=\"productionTypeLi xl-productionTypeLi md-productionTypeLi lg-productionTypeLi sm-productionTypeLi\">\n            <p-radioButton name=\"QaLineProductionType+{{shopName}}+{{processType}}\" value=\"Engineer\" label=\"工程验证\" [(ngModel)]=\"selectedProductionType\"\n              inputId=\"QaLineProductionType4+{{shopName}}+{{processType}}\" (click)=\"productionTypeClicked()\"></p-radioButton>\n          </li>\n          <li class=\"productionTypeLi xl-productionTypeLi md-productionTypeLi lg-productionTypeLi sm-productionTypeLi\">\n            <p-radioButton name=\"QaLineProductionType+{{shopName}}+{{processType}}\" value=\"PV\" label=\"PV\" [(ngModel)]=\"selectedProductionType\"\n              inputId=\"QaLineProductionType5+{{shopName}}+{{processType}}\" (click)=\"productionTypeClicked()\"></p-radioButton>\n          </li>\n        </ul>\n      </div>\n      <div class=\"ui-g-12 ui-lg-12 ui-xl-12 ui-md-6 ui-sm-6 productionCategoryArea xl-productionCategoryArea md-productionCategoryArea lg-productionCategoryArea sm-productionCategoryArea\">\n        <div class=\"xl-title lg-title\"><strong>产品类型</strong></div>\n        <ul class=\"optionul\">\n          <li *ngFor=\"let item of productCategory\" class=\"productionTypeLi xl-productionTypeLi md-productionTypeLi lg-productionTypeLi sm-productionTypeLi\">\n            <p-radioButton name=\"QaLineProductCategory+{{shopName}}+{{processType}}\" value=\"{{item}}\" label=\"{{item}}\" [(ngModel)]=\"selectedProductionCategory\"\n              inputId=\"QaLineProductCategory+{{shopName}}+{{processType}}+{{item}}\" (click)=\"drawChart()\"></p-radioButton>\n          </li>\n        </ul>\n      </div>\n      <div class=\"ui-g-12 ui-lg-12 ui-xl-12 ui-md-6 ui-sm-6 lineNameArea xl-lineNameArea md-lineNameArea lg-lineNameArea sm-lineNameArea\">\n        <div class=\"xl-title lg-title\"><strong>Line别</strong></div>\n        <ul class=\"optionul\">\n          <li *ngFor=\"let item of lineName; index as i\" class=\"productionTypeLi xl-productionTypeLi md-productionTypeLi lg-productionTypeLi sm-productionTypeLi\">\n            <p-radioButton name=\"lineName+{{shopName}}+{{processType}}\" value=\"{{item}}\" label=\"{{item}}\" [(ngModel)]=\"selectedLineName\"\n              inputId=\"lineName+{{item}}\" (click)=\"productionTypeClicked()\"></p-radioButton>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </div>\n"

/***/ }),

/***/ "./src/app/quality/chart/qaline/qaline.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QalineComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_production_common_model_yieldParam__ = __webpack_require__("./src/app/production/common/model/yieldParam.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_common_service_api_api_service__ = __webpack_require__("./src/app/common/service/api/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_quality_common_echart_option_service__ = __webpack_require__("./src/app/quality/common/echart-option.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var QalineComponent = /** @class */ (function () {
    function QalineComponent(httpService, echartService) {
        this.httpService = httpService;
        this.echartService = echartService;
        this.selectedLineName = 'LINE01';
        this.selectedProductionType = 'Production';
        this.chartParam = new __WEBPACK_IMPORTED_MODULE_1_app_production_common_model_yieldParam__["a" /* YieldParam */]();
    }
    QalineComponent.prototype.ngOnInit = function () {
        this.lineName = [
            'LINE01',
            'LINE02',
            'LINE03',
            'LINE04',
            'LINE05',
            'LINE06',
            'LINE07',
            'LINE08',
            'LINE09',
            'LINE10',
            'LINE11',
            'LINE12'
        ];
        this.getProductCategory();
        //this.drawChart();
    };
    QalineComponent.prototype.getProductCategory = function () {
        var _this = this;
        var options = {
            params: {
                shopName: this.shopName,
                productionType: this.selectedProductionType,
                processType: this.processType,
                lineName: this.selectedLineName
            }
        };
        var url = '/echart/quality/getMdlByLineCategory';
        this.httpService.get(url, options).subscribe(function (res) {
            _this.productCategory = res;
            _this.selectedProductionCategory = _this.productCategory[0];
            _this.drawChart();
        }, function (error) { console.log(error); });
    };
    QalineComponent.prototype.productionTypeClicked = function () {
        this.getProductCategory();
    };
    QalineComponent.prototype.drawChart = function () {
        var _this = this;
        this.chartParam.productCategory = this.selectedProductionCategory;
        this.chartParam.productionType = this.selectedProductionType;
        this.chartParam.shopName = this.shopName;
        this.chartParam.processtype = this.processType;
        this.chartParam.linename = this.selectedLineName;
        this.chartParam.datatype = this.dataType;
        this.chartParam.deviceType = this.deviceType;
        var nowDate = new Date();
        var currentTime = nowDate.toLocaleString();
        this.waterMark = 'BOECD Confidential@' + this.currentUserName + '\n' + currentTime + '@' + localStorage.getItem('currentIP');
        var url = '/echart/quality/getOption_QaByLine';
        this.httpService.post(url, this.chartParam).subscribe(function (res) {
            _this.respText = res;
            console.log('this.waterMark:' + _this.waterMark);
            _this.echartOption = _this.echartService.getOption_quality(_this.processType + ' 良率指标', _this.respText, _this.waterMark, _this.deviceType);
        }, function (error) {
            console.log(error);
        });
    };
    QalineComponent.prototype.start_Timer = function () {
        var _this = this;
        this.timer = setInterval(function () {
            _this.drawChart();
        }, 300000);
    };
    QalineComponent.prototype.clear_Timer = function () {
        if (this.timer) {
            clearInterval(this.timer);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], QalineComponent.prototype, "currentUserName", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], QalineComponent.prototype, "deviceType", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], QalineComponent.prototype, "shopName", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], QalineComponent.prototype, "processType", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], QalineComponent.prototype, "dataType", void 0);
    QalineComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-qaline',
            template: __webpack_require__("./src/app/quality/chart/qaline/qaline.component.html"),
            styles: [__webpack_require__("./src/app/quality/chart/qaline/qaline.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_app_common_service_api_api_service__["a" /* ApiService */], __WEBPACK_IMPORTED_MODULE_3_app_quality_common_echart_option_service__["a" /* EchartOptionService */]])
    ], QalineComponent);
    return QalineComponent;
}());



/***/ }),

/***/ "./src/app/quality/common/echart-option.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EchartOptionService; });
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

var EchartOptionService = /** @class */ (function () {
    function EchartOptionService() {
    }
    EchartOptionService.prototype.getOption_quality = function (title, respText, waterMark, deviceType) {
        var fontSize;
        var axisWidth;
        var grid;
        var titleFontSize;
        var legend;
        var watermarkFont;
        switch (deviceType) {
            case 'phone':
                fontSize = '60%';
                titleFontSize = { main: '140%', sub: '80%' };
                axisWidth = 2;
                grid = { x: '10%', x2: '7%', y: '20%' };
                legend = { width: '71%', left: '26%', top: '1%' };
                break;
            case 'pad':
                fontSize = '100%';
                titleFontSize = { main: '160%', sub: '100%' };
                axisWidth = 2;
                grid = { x: '7%', x2: '7%', y: '14%' };
                legend = { width: '71%', left: '35%', top: '7%' };
                break;
            case 'monitor':
                fontSize = '90%';
                titleFontSize = { main: '180%', sub: '90%', left: '0%', bottom: '1.5%' };
                axisWidth = 2;
                grid = [{
                        x: '6%',
                        x2: '6%',
                        y: '14%',
                        height: '76%'
                    }, {
                        x: '6%',
                        x2: '6%',
                        y2: '1%',
                        height: '3%'
                    }];
                legend = { width: '65%', left: '30%', top: '1%' };
                watermarkFont = 'bold 20px Microsoft YaHei';
                break;
            case 'tv':
                fontSize = '120%';
                titleFontSize = { main: '200%', sub: '120%', left: '2%', bottom: '4%' };
                axisWidth = 4;
                grid = [{
                        x: '7%',
                        x2: '7%',
                        y: '12%',
                        height: '75%'
                    }, {
                        x: '7%',
                        x2: '7%',
                        y2: '4%',
                        height: '3%'
                    }];
                legend = { width: '71%', left: '26%', top: '1%' };
                watermarkFont = 'bold 30px Microsoft YaHei';
                break;
        }
        var option = {
            title: [{
                    text: title,
                    //subtext:'     '+respText.today,
                    align: 'left',
                    left: '0%',
                    top: '1%',
                    //itemGap:25,
                    textStyle: {
                        fontFamily: '微软雅黑',
                        fontSize: titleFontSize.main,
                    },
                },
                {
                    text: '接收量:',
                    left: titleFontSize.left,
                    align: 'left',
                    bottom: titleFontSize.bottom,
                    textStyle: {
                        fontFamily: '微软雅黑',
                        fontSize: titleFontSize.sub,
                    },
                }],
            tooltip: {
                padding: 10,
                backgroundColor: '#222',
                borderColor: '#777',
                borderWidth: 1,
                formatter: function (obj) {
                    var value = obj.value;
                    if (obj.seriesName != "总量") {
                        if (obj.seriesType == "bar") {
                            return '<div style="border-bottom: 1px solid rgba(255,255,255,.3); font-size: 18px;padding-bottom: 7px;margin-bottom: 7px">'
                                + value[2] + '：'
                                + '</div>'
                                + obj.seriesName + '：' + value[1] + '<br>';
                            //+ obj.seriesName+' 不良数量：' + value[4] +'<br>'
                        }
                        if (obj.seriesType == "line") {
                            return '<div style="border-bottom: 1px solid rgba(255,255,255,.3); font-size: 18px;padding-bottom: 7px;margin-bottom: 7px">'
                                + value[2] + '：'
                                + '</div>'
                                + obj.seriesName + '：' + value[1] + '%' + '<br>';
                            //+ obj.seriesName+' 等级数量：' + value[4] +'<br>'
                        }
                    }
                }
            },
            color: [
                "#1a778d",
                "#ff9933",
                "#1d18eb",
                "#db7108",
                "#7CCD7C",
                "#0aa28e",
                "#FFB90F",
                "#B03060",
                "#556B2F",
                "#BFBFBF",
                "#EE7942",
                "#dc9de6",
                "#1ef1d5",
                "#b210ce",
                "#b3133e"
            ],
            legend: {
                data: eval('(' + respText.legenddata + ')'),
                type: 'scroll',
                left: legend.left,
                top: legend.top,
                //图例排布
                width: legend.width,
                selected: {
                    'LRR': false,
                }
            },
            xAxis: [
                {
                    type: 'category',
                    data: eval('(' + respText.xdata + ')'),
                    axisPointer: {
                        type: 'shadow'
                    },
                    axisLine: {
                        lineStyle: {
                            width: axisWidth,
                            color: 'rgb(168,168,168)'
                        },
                        axisLabel: {
                            show: true,
                        },
                    },
                    //坐标轴刻度加粗
                    axisTick: {
                        length: 8,
                        lineStyle: {
                            width: axisWidth,
                        }
                    },
                    axisLabel: {
                        color: 'rgb(66,66,66)',
                        fontSize: fontSize,
                        margin: '15',
                    }
                }, {
                    type: 'category',
                    gridIndex: 1,
                    show: false,
                    data: eval('(' + respText.xdata + ')'),
                }
            ],
            yAxis: [
                {
                    type: 'value',
                    name: 'DPPM',
                    nameTextStyle: {
                        fontSize: fontSize,
                        fontFamily: '微软雅黑',
                        color: 'rgb(66,66,66)',
                    },
                    axisLabel: {
                        color: 'rgb(66,66,66)',
                        fontSize: fontSize,
                        margin: '15',
                        //刻度除1000
                        formatter: function (value) {
                            if (value > 999 || value < -999) {
                                var i = value / 1000;
                                return i + 'K';
                            }
                            else {
                                return value;
                            }
                        }
                    },
                    axisLine: {
                        lineStyle: {
                            width: axisWidth,
                            color: 'rgb(168,168,168)'
                        },
                        axisLabel: {
                            show: true,
                        },
                    },
                    //坐标轴刻度加粗
                    axisTick: {
                        length: axisWidth,
                        lineStyle: {
                            width: axisWidth,
                        }
                    },
                    splitNumber: 4,
                },
                {
                    type: 'value',
                    name: 'LRR',
                    nameTextStyle: {
                        fontSize: fontSize,
                        fontFamily: '微软雅黑',
                        color: 'rgb(66,66,66)',
                    },
                    axisLabel: {
                        formatter: '{value}%',
                        color: 'rgb(66,66,66)',
                        fontSize: fontSize,
                        margin: '15',
                    },
                    axisLine: {
                        lineStyle: {
                            width: axisWidth,
                            color: 'rgb(168,168,168)'
                        },
                        axisLabel: {
                            show: true,
                        },
                    },
                    //坐标轴刻度加粗
                    axisTick: {
                        length: 6,
                        lineStyle: {
                            width: axisWidth,
                        }
                    },
                    splitLine: {
                        show: false
                    },
                }, {
                    type: 'value',
                    gridIndex: 1,
                    show: false,
                }
            ],
            grid: grid,
            series: eval('(' + respText.series + ')'),
            //水印增加
            graphic: [
                {
                    type: 'text',
                    left: '5%',
                    top: '20%',
                    z: 0,
                    cursor: 'default',
                    rotation: Math.PI * 0.125,
                    style: {
                        fill: 'rgb(188,188,188)',
                        text: waterMark,
                        font: watermarkFont
                    }
                },
                {
                    type: 'text',
                    left: '50%',
                    top: '20%',
                    z: 0,
                    cursor: 'default',
                    rotation: Math.PI * 0.125,
                    style: {
                        fill: 'rgb(188,188,188)',
                        text: waterMark,
                        font: watermarkFont
                    }
                },
            ],
        };
        return option;
    };
    EchartOptionService.prototype.getOption_oqaDaily = function (title, respText, waterMark, deviceType) {
        var fontSize;
        var axisWidth;
        var grid;
        var titleFontSize;
        var legend;
        var watermarkFont;
        switch (deviceType) {
            case 'phone':
                fontSize = '60%';
                titleFontSize = { main: '140%', sub: '80%' };
                axisWidth = 2;
                grid = { x: '10%', x2: '7%', y: '20%' };
                legend = { width: '71%', left: '26%', top: '1%' };
                break;
            case 'pad':
                fontSize = '100%';
                titleFontSize = { main: '160%', sub: '100%' };
                axisWidth = 2;
                grid = { x: '7%', x2: '7%', y: '14%' };
                legend = { width: '71%', left: '35%', top: '7%' };
                break;
            case 'monitor':
                fontSize = '90%';
                titleFontSize = { main: '180%', sub: '100%' };
                axisWidth = 2;
                grid = { x: '8%', x2: '7%', y: '19%' };
                legend = { width: '71%', left: '26%', top: '1%' };
                watermarkFont = 'bold 20px Microsoft YaHei';
                break;
            case 'tv':
                fontSize = '120%';
                titleFontSize = { main: '200%', sub: '120%' };
                axisWidth = 4;
                grid = {
                    x: '10%',
                    x2: '7%',
                    y: '12%',
                    y2: '14%'
                };
                legend = { width: '71%', left: '26%', top: '1%' };
                watermarkFont = 'bold 30px Microsoft YaHei';
                break;
        }
        var option = {
            title: {
                text: title,
                align: 'left',
                left: '0%',
                top: '1%',
                textStyle: {
                    fontFamily: '微软雅黑',
                    fontSize: titleFontSize.main,
                },
            },
            tooltip: {
                trigger: 'item',
                formatter: '{a} : {c}',
            },
            legend: {
                data: eval('(' + respText.legenddata + ')'),
                type: 'scroll',
                left: '26%',
                top: '2.5%',
                //图例排布
                width: '71%',
                selected: {
                    'LRR': false,
                }
            },
            color: [
                "#1a778d",
                "#ff9933",
                "#1d18eb",
                "#db7108",
                "#7CCD7C",
                "#0aa28e",
                "#FFB90F",
                "#B03060",
                "#556B2F",
                "#BFBFBF",
                "#EE7942",
                "#dc9de6",
                "#1ef1d5",
                "#b210ce",
                "#b3133e"
            ],
            xAxis: [
                {
                    type: 'category',
                    data: eval('(' + respText.xdata + ')'),
                    axisPointer: {
                        type: 'shadow'
                    },
                    axisLine: {
                        lineStyle: {
                            width: axisWidth,
                            color: 'rgb(168,168,168)'
                        },
                        axisLabel: {
                            show: true,
                        },
                    },
                    //坐标轴刻度加粗
                    axisTick: {
                        length: 8,
                        lineStyle: {
                            width: axisWidth,
                        }
                    },
                    axisLabel: {
                        show: true,
                        color: 'rgb(66,66,66)',
                        /*             fontSize: fontSize, */
                        margin: '15',
                        interval: 0,
                        rotate: 315,
                    },
                }
            ],
            yAxis: [
                {
                    type: 'value',
                    name: 'DPPM',
                    nameTextStyle: {
                        fontSize: fontSize,
                        fontFamily: '微软雅黑',
                        color: 'rgb(66,66,66)',
                    },
                    axisLabel: {
                        color: 'rgb(66,66,66)',
                        fontSize: fontSize,
                        margin: '15',
                        //刻度除1000
                        formatter: function (value) {
                            if (value > 999 || value < -999) {
                                var i = value / 1000;
                                return i + 'K';
                            }
                            else {
                                return value;
                            }
                        }
                    },
                    axisLine: {
                        lineStyle: {
                            width: axisWidth,
                            color: 'rgb(168,168,168)'
                        },
                        axisLabel: {
                            show: true,
                        },
                    },
                    //坐标轴刻度加粗
                    axisTick: {
                        length: axisWidth,
                        lineStyle: {
                            width: axisWidth,
                        }
                    },
                    splitNumber: 4,
                },
            ],
            grid: grid,
            series: eval('(' + respText.series + ')'),
            //水印增加
            graphic: [
                {
                    type: 'text',
                    left: '20%',
                    top: '20%',
                    z: 0,
                    cursor: 'default',
                    rotation: Math.PI * 0.125,
                    style: {
                        fill: 'rgb(188,188,188)',
                        text: waterMark,
                        font: watermarkFont
                    }
                }
            ],
        };
        return option;
    };
    EchartOptionService.prototype.getOption_OperatorDefectchannengOQA = function (title, respText, waterMark, deviceType) {
        var fontSize;
        var axisWidth;
        var grid;
        var titleFontSize;
        var legend;
        var watermarkFont;
        var axisFontSize;
        switch (deviceType) {
            case 'phone':
                fontSize = '60%';
                titleFontSize = { main: '140%', sub: '80%' };
                axisWidth = 2;
                grid = { x: '10%', x2: '7%', y: '20%' };
                legend = { width: '71%', left: '26%', top: '1%' };
                break;
            case 'pad':
                fontSize = '100%';
                titleFontSize = { main: '160%', sub: '100%' };
                axisWidth = 2;
                grid = { x: '7%', x2: '7%', y: '14%' };
                legend = { width: '71%', left: '35%', top: '7%' };
                break;
            case 'monitor':
                fontSize = '80%';
                titleFontSize = { main: '140%', sub: '80%', left: '0%', bottom: '1.5%' };
                axisWidth = 2;
                grid = [{
                        x: '4%',
                        x2: '5.5%',
                        y: '24%',
                        y2: '4%',
                        height: '50%'
                    }, {
                        x: '4%',
                        x2: '4%',
                        y2: '6%',
                        height: '6%'
                    }];
                legend = { width: '65%', left: '30%', top: '1%' };
                watermarkFont = 'bold 18px Microsoft YaHei';
                axisFontSize = 11;
                break;
            case 'tv':
                fontSize = '110%';
                titleFontSize = { main: '200%', sub: '110%', left: '2%', bottom: '4%' };
                axisWidth = 4;
                grid = [{
                        x: '7%',
                        x2: '7%',
                        y: '20%',
                        y2: '4%',
                        height: '60%'
                    }, {
                        x: '7%',
                        x2: '7%',
                        y2: '4%',
                        height: '4%'
                    }];
                legend = { width: '71%', left: '26%', top: '1%' };
                watermarkFont = 'bold 25px Microsoft YaHei';
                axisFontSize = 12;
                break;
        }
        var option = {
            title: [{
                    text: title,
                    align: 'left',
                    subtext: '                          总过货量：' + respText.totolOut,
                    left: '0%',
                    top: '0%',
                    itemGap: 17,
                    textStyle: {
                        fontFamily: '微软雅黑',
                        fontSize: titleFontSize.main,
                    },
                    subtextStyle: {
                        fontFamily: '微软雅黑',
                        fontSize: titleFontSize.sub,
                        color: 'rgb(0,0,0)',
                    },
                },],
            color: [
                "#1a778d",
                "#ff9933",
                "#1d18eb",
                "#db7108",
                "#7CCD7C",
                "#0aa28e",
                "#FFB90F",
                "#B03060",
                "#556B2F",
                "#BFBFBF",
                "#EE7942",
                "#dc9de6",
                "#1ef1d5",
                "#b210ce",
                "#b3133e"
            ],
            tooltip: {
                padding: 10,
                backgroundColor: '#222',
                borderColor: '#777',
                borderWidth: 1,
                formatter: function (obj) {
                    var value = obj.value;
                    if (obj.seriesName != "过货量") {
                        if (obj.seriesType == "bar") {
                            return '<div style="border-bottom: 1px solid rgba(255,255,255,.3); font-size: 18px;padding-bottom: 7px;margin-bottom: 7px">'
                                + value[2] + '：'
                                + '</div>'
                                + 'Out Qty：' + value[1] + '<br>';
                        }
                        if (obj.seriesType == "line") {
                            return '<div style="border-bottom: 1px solid rgba(255,255,255,.3); font-size: 18px;padding-bottom: 7px;margin-bottom: 7px">'
                                + value[3] + '：'
                                + '</div>'
                                + obj.seriesName + '：' + value[1] + '%' + '<br>'
                                + 'OK QTY：' + value[2] + '<br>';
                        }
                    }
                }
            },
            legend: {
                data: eval('(' + respText.legenddata + ')'),
                type: 'scroll',
                left: '46%',
                top: '2.5%',
                //图例排布
                width: '49%',
                selected: {
                    'OK': false,
                }
            },
            xAxis: [
                {
                    type: 'category',
                    gridIndex: 0,
                    data: eval('(' + respText.xdata + ')'),
                    axisPointer: {
                        type: 'shadow'
                    },
                    axisLine: {
                        lineStyle: {
                            width: axisWidth,
                            color: 'rgb(168,168,168)'
                        },
                        axisLabel: {
                            show: true,
                        },
                    },
                    //坐标轴刻度加粗
                    axisTick: {
                        length: 8,
                        lineStyle: {
                            width: axisWidth,
                        }
                    },
                    axisLabel: {
                        color: 'rgb(66,66,66)',
                        interval: 0,
                        fontSize: axisFontSize,
                        rotate: 315,
                    },
                }, {
                    type: 'category',
                    gridIndex: 1,
                    show: false,
                    data: eval('(' + respText.xdata + ')'),
                }
            ],
            yAxis: [
                {
                    type: 'value',
                    gridIndex: 0,
                    name: '产出数',
                    nameTextStyle: {
                        fontSize: fontSize,
                        fontFamily: '微软雅黑',
                        color: 'rgb(66,66,66)',
                    },
                    axisLabel: {
                        formatter: '{value}',
                        color: 'rgb(66,66,66)',
                        fontSize: fontSize,
                        margin: '15',
                    },
                    axisLine: {
                        lineStyle: {
                            width: axisWidth,
                            color: 'rgb(168,168,168)'
                        },
                        axisLabel: {
                            show: true,
                        },
                    },
                    //坐标轴刻度加粗
                    axisTick: {
                        length: axisWidth,
                        lineStyle: {
                            width: axisWidth,
                        }
                    },
                    splitNumber: 4,
                }, {
                    type: 'value',
                    gridIndex: 0,
                    name: 'Defect Ratio',
                    scale: true,
                    min: 0,
                    max: 100,
                    nameTextStyle: {
                        fontSize: fontSize,
                        fontFamily: '微软雅黑',
                        color: 'rgb(66,66,66)',
                    },
                    axisLabel: {
                        formatter: '{value}%',
                        color: 'rgb(66,66,66)',
                        fontSize: fontSize,
                        margin: '15',
                    },
                    axisLine: {
                        lineStyle: {
                            width: axisWidth,
                            color: 'rgb(168,168,168)'
                        },
                        axisLabel: {
                            show: true,
                        },
                    },
                    //坐标轴刻度加粗
                    axisTick: {
                        length: axisWidth,
                        lineStyle: {
                            width: axisWidth,
                        }
                    },
                    splitLine: {
                        show: false
                    },
                }, {
                    type: 'value',
                    gridIndex: 1,
                    show: false,
                }
            ],
            dataZoom: [{
                    type: 'slider',
                    show: true,
                    xAxisIndex: [0, 1],
                    handleSize: 13,
                    height: 8,
                    left: 30,
                    right: 40,
                    bottom: 3,
                    handleColor: '#ddd',
                    handleStyle: {
                        borderColor: "#cacaca",
                        borderWidth: "1",
                        shadowBlur: 2,
                        background: "#ddd",
                        shadowColor: "#ddd",
                    },
                    backgroundColor: '#ddd',
                    showDataShadow: false,
                    showDetail: false,
                    handleIcon: 'M-292,322.2c-3.2,0-6.4-0.6-9.3-1.9c-2.9-1.2-5.4-2.9-7.6-5.1s-3.9-4.8-5.1-7.6c-1.3-3-1.9-6.1-1.9-9.3c0-3.2,0.6-6.4,1.9-9.3c1.2-2.9,2.9-5.4,5.1-7.6s4.8-3.9,7.6-5.1c3-1.3,6.1-1.9,9.3-1.9c3.2,0,6.4,0.6,9.3,1.9c2.9,1.2,5.4,2.9,7.6,5.1s3.9,4.8,5.1,7.6c1.3,3,1.9,6.1,1.9,9.3c0,3.2-0.6,6.4-1.9,9.3c-1.2,2.9-2.9,5.4-5.1,7.6s-4.8,3.9-7.6,5.1C-285.6,321.5-288.8,322.2-292,322.2z',
                    filterMode: 'filter',
                },
                //下面这个属性是里面拖到
                {
                    type: 'inside',
                    show: true,
                    xAxisIndex: [0],
                    start: 1,
                    end: 100
                }
            ],
            grid: grid,
            series: eval('(' + respText.series + ')'),
            graphic: [
                {
                    type: 'text',
                    left: '5%',
                    top: '15%',
                    z: 0,
                    cursor: 'default',
                    rotation: Math.PI * 0.125,
                    style: {
                        fill: 'rgb(188,188,188)',
                        text: waterMark,
                        font: watermarkFont
                    }
                },
                {
                    type: 'text',
                    left: '50%',
                    top: '15%',
                    z: 0,
                    cursor: 'default',
                    rotation: Math.PI * 0.125,
                    style: {
                        fill: 'rgb(188,188,188)',
                        text: waterMark,
                        font: watermarkFont
                    }
                },
            ],
        };
        return option;
    };
    EchartOptionService.prototype.getOption_OperatorDefectchannengOneOQA = function (title, respText, waterMark, deviceType) {
        var fontSize;
        var axisWidth;
        var grid;
        var titleFontSize;
        var legend;
        var watermarkFont;
        var axisFontSize;
        switch (deviceType) {
            case 'phone':
                fontSize = '60%';
                titleFontSize = { main: '140%', sub: '80%' };
                axisWidth = 2;
                grid = { x: '10%', x2: '7%', y: '20%' };
                legend = { width: '71%', left: '26%', top: '1%' };
                break;
            case 'pad':
                fontSize = '100%';
                titleFontSize = { main: '160%', sub: '100%' };
                axisWidth = 2;
                grid = { x: '7%', x2: '7%', y: '14%' };
                legend = { width: '71%', left: '35%', top: '7%' };
                break;
            case 'monitor':
                fontSize = '80%';
                titleFontSize = { main: '140%', sub: '80%', left: '0%', bottom: '1.5%' };
                axisWidth = 2;
                axisFontSize = 11;
                grid = [{
                        x: '4%',
                        x2: '5.5%',
                        y: '25%',
                        y2: '7%',
                        height: '58%'
                    }, {
                        x: '4%',
                        x2: '4%',
                        y2: '4%',
                        height: '0%'
                    }];
                legend = { width: '65%', left: '30%', top: '1%' };
                watermarkFont = 'bold 18px Microsoft YaHei';
                break;
            case 'tv':
                fontSize = '120%';
                titleFontSize = { main: '200%', sub: '110%', left: '2%', bottom: '4%' };
                axisWidth = 4;
                axisFontSize = 14;
                grid = [{
                        x: '7%',
                        x2: '7%',
                        y: '22%',
                        y2: '4%',
                        height: '60%'
                    }, {
                        x: '7%',
                        x2: '7%',
                        y2: '4%',
                        height: '0%'
                    }];
                legend = { width: '71%', left: '26%', top: '1%' };
                watermarkFont = 'bold 25px Microsoft YaHei';
                break;
        }
        var option = {
            title: [{
                    text: title,
                    align: 'left',
                    left: '0%',
                    top: '1%',
                    textStyle: {
                        fontFamily: '微软雅黑',
                        fontSize: titleFontSize.main,
                    },
                },],
            tooltip: {
                padding: 10,
                backgroundColor: '#222',
                borderColor: '#777',
                borderWidth: 1,
                formatter: function (obj) {
                    var value = obj.value;
                    if (obj.seriesName != "过货量") {
                        if (obj.seriesType == "bar") {
                            return '<div style="border-bottom: 1px solid rgba(255,255,255,.3); font-size: 18px;padding-bottom: 7px;margin-bottom: 7px">'
                                + value[2] + '：'
                                + '</div>'
                                + 'Out Qty：' + value[1] + '<br>';
                        }
                        if (obj.seriesType == "line") {
                            return '<div style="border-bottom: 1px solid rgba(255,255,255,.3); font-size: 18px;padding-bottom: 7px;margin-bottom: 7px">'
                                + value[3] + '：'
                                + '</div>'
                                + obj.seriesName + '：' + value[1] + '%' + '<br>'
                                + 'OK QTY：' + value[2] + '<br>';
                        }
                    }
                }
            },
            dataZoom: [{
                    type: 'slider',
                    show: true,
                    xAxisIndex: [0, 1],
                    handleSize: 13,
                    height: 8,
                    left: 30,
                    right: 40,
                    bottom: 3,
                    handleColor: '#ddd',
                    handleStyle: {
                        borderColor: "#cacaca",
                        borderWidth: "1",
                        shadowBlur: 2,
                        background: "#ddd",
                        shadowColor: "#ddd",
                    },
                    backgroundColor: '#ddd',
                    showDataShadow: false,
                    showDetail: false,
                    handleIcon: 'M-292,322.2c-3.2,0-6.4-0.6-9.3-1.9c-2.9-1.2-5.4-2.9-7.6-5.1s-3.9-4.8-5.1-7.6c-1.3-3-1.9-6.1-1.9-9.3c0-3.2,0.6-6.4,1.9-9.3c1.2-2.9,2.9-5.4,5.1-7.6s4.8-3.9,7.6-5.1c3-1.3,6.1-1.9,9.3-1.9c3.2,0,6.4,0.6,9.3,1.9c2.9,1.2,5.4,2.9,7.6,5.1s3.9,4.8,5.1,7.6c1.3,3,1.9,6.1,1.9,9.3c0,3.2-0.6,6.4-1.9,9.3c-1.2,2.9-2.9,5.4-5.1,7.6s-4.8,3.9-7.6,5.1C-285.6,321.5-288.8,322.2-292,322.2z',
                    filterMode: 'filter',
                },
                //下面这个属性是里面拖到
                {
                    type: 'inside',
                    show: true,
                    xAxisIndex: [0],
                    start: 1,
                    end: 100
                }
            ],
            legend: {
                data: eval('(' + respText.legenddata + ')'),
                type: 'scroll',
                left: '46%',
                top: '2.5%',
                //图例排布
                width: '49%',
                selected: {
                    'OK': false,
                }
            },
            xAxis: [
                {
                    type: 'category',
                    gridIndex: 0,
                    data: eval('(' + respText.xdata + ')'),
                    axisPointer: {
                        type: 'shadow'
                    },
                    axisLine: {
                        lineStyle: {
                            width: axisWidth,
                            color: 'rgb(168,168,168)'
                        },
                        axisLabel: {
                            show: true,
                        },
                    },
                    //坐标轴刻度加粗
                    axisTick: {
                        length: 8,
                        lineStyle: {
                            width: axisWidth,
                        }
                    },
                    axisLabel: {
                        color: 'rgb(66,66,66)',
                        rotate: 315,
                        fontSize: axisFontSize,
                        //margin:'15',
                        interval: 0,
                    },
                }, {
                    type: 'category',
                    gridIndex: 1,
                    show: false,
                    data: eval('(' + respText.xdata + ')'),
                }
            ],
            yAxis: [
                {
                    type: 'value',
                    gridIndex: 0,
                    name: '产出数',
                    nameTextStyle: {
                        fontSize: fontSize,
                        fontFamily: '微软雅黑',
                        color: 'rgb(66,66,66)',
                    },
                    axisLabel: {
                        formatter: '{value}',
                        color: 'rgb(66,66,66)',
                        fontSize: fontSize,
                        margin: '15',
                    },
                    axisLine: {
                        lineStyle: {
                            width: axisWidth,
                            color: 'rgb(168,168,168)'
                        },
                        axisLabel: {
                            show: true,
                        },
                    },
                    //坐标轴刻度加粗
                    axisTick: {
                        length: 6,
                        lineStyle: {
                            width: axisWidth,
                        }
                    },
                    splitNumber: 4,
                }, {
                    type: 'value',
                    gridIndex: 0,
                    name: 'Defect Ratio',
                    scale: true,
                    min: 0,
                    max: 100,
                    nameTextStyle: {
                        fontSize: fontSize,
                        fontFamily: '微软雅黑',
                        color: 'rgb(66,66,66)',
                    },
                    axisLabel: {
                        formatter: '{value}%',
                        color: 'rgb(66,66,66)',
                        fontSize: fontSize,
                        margin: '15',
                    },
                    axisLine: {
                        lineStyle: {
                            width: axisWidth,
                            color: 'rgb(168,168,168)'
                        },
                        axisLabel: {
                            show: true,
                        },
                    },
                    //坐标轴刻度加粗
                    axisTick: {
                        length: 6,
                        lineStyle: {
                            width: axisWidth,
                        }
                    },
                    splitLine: {
                        show: false
                    },
                }, {
                    type: 'value',
                    gridIndex: 1,
                    show: false,
                }
            ],
            grid: grid,
            series: eval('(' + respText.series + ')'),
            graphic: [
                {
                    type: 'text',
                    left: '5%',
                    top: '15%',
                    z: 0,
                    cursor: 'default',
                    rotation: Math.PI * 0.125,
                    style: {
                        fill: 'rgb(188,188,188)',
                        text: waterMark,
                        font: watermarkFont
                    }
                },
                {
                    type: 'text',
                    left: '50%',
                    top: '15%',
                    z: 0,
                    cursor: 'default',
                    rotation: Math.PI * 0.125,
                    style: {
                        fill: 'rgb(188,188,188)',
                        text: waterMark,
                        font: watermarkFont
                    }
                },
            ],
        };
        return option;
    };
    EchartOptionService.prototype.getOption_AMC = function (title, respText, checkitem, waterMark, deviceType) {
        var fontSize;
        var axisWidth;
        var grid;
        var titleFontSize;
        var legend;
        var waterMarkFontSize;
        switch (deviceType) {
            case 'phone':
                fontSize = '60%';
                titleFontSize = { main: '140%', sub: '80%' };
                axisWidth = 2;
                grid = { x: '10%', x2: '7%', y: '20%' };
                legend = { width: '71%', left: '26%', top: '1%' };
                break;
            case 'pad':
                fontSize = '100%';
                titleFontSize = { main: '160%', sub: '100%' };
                axisWidth = 2;
                grid = { x: '7%', x2: '7%', y: '14%' };
                legend = { width: '71%', left: '35%', top: '7%' };
                break;
            case 'monitor':
                fontSize = '70%';
                titleFontSize = { main: '110%', sub: '100%' };
                axisWidth = 2;
                grid = [{
                        x: '5%',
                        x2: '2%',
                        y: '28%',
                        height: '61%'
                    }];
                legend = [{
                        x: '5%',
                        x2: '2%',
                        y: '20%',
                    }];
                waterMarkFontSize = 'bold 15px Microsoft YaHei';
                break;
            case 'tv':
                fontSize = '80%';
                titleFontSize = { main: '140%', sub: '120%' };
                axisWidth = 3;
                grid = [{
                        x: '5%',
                        x2: '2%',
                        y: '24%',
                        height: '67%'
                    }];
                legend = { width: '71%', left: '26%', top: '1%' };
                waterMarkFontSize = 'bold 20px Microsoft YaHei';
                break;
        }
        var option = {
            title: [{
                    text: title,
                    align: 'left',
                    left: '0%',
                    top: '1%',
                    textStyle: {
                        fontFamily: '微软雅黑',
                        fontSize: titleFontSize.main,
                    },
                }],
            tooltip: {
                padding: 10,
                backgroundColor: '#222',
                borderColor: '#777',
                borderWidth: 1,
                formatter: function (obj) {
                    var value = obj.value;
                    if (obj.seriesName != "过货量") {
                        if (obj.seriesType == "line") {
                            return '<div style="border-bottom: 1px solid rgba(255,255,255,.3); font-size: 18px;padding-bottom: 7px;margin-bottom: 7px">'
                                + value[3] + '：'
                                + '</div>'
                                + obj.seriesName + '：' + value[1] + '%' + '<br>';
                            //+ obj.seriesName+' 不良数量：' + value[4] +'<br>'
                        }
                        /*                    	if(obj.seriesType=="line"){
                                                return '<div style="border-bottom: 1px solid rgba(255,255,255,.3); font-size: 18px;padding-bottom: 7px;margin-bottom: 7px">'
                                                    + value[3] + '：'
                                                    + '</div>'
                                                    + obj.seriesName+'：' + value[1] +'%'+'<br>'
                                                    + obj.seriesName+' 等级数量：' + value[4] +'<br>'
                                              }*/
                    }
                }
            },
            legend: {
                data: eval('(' + respText.legenddata + ')'),
                type: 'scroll',
                left: '45%',
                top: '2.5%',
                //图例排布
                width: '71%',
            },
            color: ['#1a778d',
                '#ff9933',
                '#1d18eb',
                '#db7108',
                '#7CCD7C',
                '#0aa28e',
                '#FFB90F',
                '#B03060',
                '#556B2F',
                '#BFBFBF',
                '#EE7942',
                '#dc9de6',
                '#1ef1d5',
                '#b210ce',
                '#b3133e'],
            xAxis: [
                {
                    type: 'category',
                    gridIndex: 0,
                    data: eval('(' + respText.xdata + ')'),
                    axisPointer: {
                        type: 'shadow'
                    },
                    axisLine: {
                        lineStyle: {
                            width: axisWidth,
                            color: 'rgb(168,168,168)'
                        },
                        axisLabel: {
                            show: true,
                        },
                    },
                    //坐标轴刻度加粗
                    axisTick: {
                        length: 8,
                        lineStyle: {
                            width: axisWidth,
                        }
                    },
                    axisLabel: {
                        color: 'rgb(66,66,66)',
                        fontSize: fontSize,
                        interval: 0,
                    }
                }
            ],
            yAxis: [
                {
                    type: 'value',
                    gridIndex: 0,
                    name: '        /ppbv',
                    scale: true,
                    min: function (value) {
                        var range = value.max - value.min;
                        var rangeplus = range / 5;
                        // 最大值和最小值相同时，坐标轴最小值为value最小值减2
                        if (rangeplus == 0) {
                            rangeplus = 1;
                        }
                        var a = Math.floor(value.min - rangeplus);
                        var spec;
                        switch (checkitem) {
                            case 'HCL':
                                spec = 1;
                                break;
                            case 'HF':
                                spec = 1;
                                break;
                            case 'NH3':
                                spec = 10;
                                break;
                            case 'NO':
                                //x = 0;
                                break;
                            case 'NO2':
                                spec = 20;
                                break;
                            case 'TS':
                                spec = 20;
                                break;
                        }
                        if (a > spec) {
                            return spec;
                        }
                        else if (a >= 0) {
                            return a;
                        }
                        else {
                            return 0;
                        }
                    },
                    max: function (value) {
                        var range = value.max - value.min;
                        var rangeplus = range / 5;
                        // 最大值和最小值相同时，坐标轴最大值为value最大值加2
                        if (rangeplus == 0) {
                            rangeplus = 1;
                        }
                        var a = Math.ceil(value.max + rangeplus);
                        var spec;
                        switch (checkitem) {
                            case 'HCL':
                                spec = 1;
                                break;
                            case 'HF':
                                spec = 1;
                                break;
                            case 'NH3':
                                spec = 10;
                                break;
                            case 'NO':
                                //x = 0;
                                break;
                            case 'NO2':
                                spec = 20;
                                break;
                            case 'TS':
                                spec = 20;
                                break;
                        }
                        if (a < spec) {
                            return spec;
                        }
                        else {
                            return a;
                        }
                    },
                    nameTextStyle: {
                        fontSize: fontSize,
                        fontFamily: '微软雅黑',
                        color: 'rgb(66,66,66)',
                    },
                    axisLabel: {
                        formatter: '{value}',
                        color: 'rgb(66,66,66)',
                        fontSize: fontSize,
                    },
                    axisLine: {
                        lineStyle: {
                            width: axisWidth,
                            color: 'rgb(168,168,168)'
                        },
                        axisLabel: {
                            show: true,
                        },
                    },
                    //坐标轴刻度加粗
                    axisTick: {
                        length: 6,
                        lineStyle: {
                            width: axisWidth,
                        }
                    },
                    splitLine: {
                        show: true
                    },
                },
            ],
            grid: grid,
            series: eval('(' + respText.series + ')'),
            //水印增加
            graphic: [
                {
                    type: 'text',
                    left: '20%',
                    top: '10%',
                    z: 0,
                    cursor: 'default',
                    rotation: Math.PI * 0.125,
                    style: {
                        fill: 'rgb(188,188,188)',
                        text: waterMark,
                        font: waterMarkFontSize
                    }
                }
            ],
        };
        return option;
    };
    EchartOptionService.prototype.getOption_DppmLrr = function (title, respText, waterMark, deviceType) {
        var fontSize;
        var axisWidth;
        var grid;
        var titleFontSize;
        var legend;
        var waterMarkFontsize;
        switch (deviceType) {
            case 'phone':
                fontSize = '60%';
                titleFontSize = { main: '140%', sub: '80%' };
                axisWidth = 2;
                legend = { width: '71%', left: '26%', top: '1%' };
                break;
            case 'pad':
                fontSize = '100%';
                titleFontSize = { main: '180%', sub: '100%' };
                axisWidth = 2;
                legend = { width: '71%', left: '35%', top: '7%' };
                break;
            case 'monitor':
                fontSize = '90%';
                titleFontSize = { main: '180%', sub: '90%' };
                axisWidth = 2;
                grid = [{
                        x: '7%',
                        x2: '7%',
                        y: '13%',
                        height: '76%'
                    }, {
                        x: '7%',
                        x2: '7%',
                        y2: '1.5%',
                        height: '3%'
                    }];
                legend = { width: '64%', left: '30%', top: '2%' };
                waterMarkFontsize = 'bold 20px Microsoft YaHei';
                break;
            case 'tv':
                fontSize = '120%';
                titleFontSize = { main: '200%', sub: '120%' };
                axisWidth = 4;
                grid = [{
                        x: '7%',
                        x2: '7%',
                        y: '13%',
                        height: '75%'
                    }, {
                        x: '7%',
                        x2: '7%',
                        y2: '1%',
                        height: '3%'
                    }];
                legend = { width: '65%', left: '28%', top: '2%' };
                waterMarkFontsize = 'bold 30px Microsoft YaHei';
                break;
        }
        var option = {
            title: [{
                    text: title,
                    //subtext:'     '+respText.today,
                    align: 'left',
                    left: '0%',
                    top: '1%',
                    //itemGap:25,
                    textStyle: {
                        fontFamily: '微软雅黑',
                        fontSize: titleFontSize.main,
                    },
                },
                {
                    text: '过货量:',
                    left: '1.5%',
                    align: 'left',
                    bottom: '1.5%',
                    textStyle: {
                        fontFamily: '微软雅黑',
                        fontSize: titleFontSize.sub,
                    },
                }],
            tooltip: {
                padding: 10,
                backgroundColor: '#222',
                borderColor: '#777',
                borderWidth: 1,
                formatter: function (obj) {
                    var value = obj.value;
                    if (obj.seriesName != "过货量") {
                        if (obj.seriesType == "bar") {
                            return '<div style="border-bottom: 1px solid rgba(255,255,255,.3); font-size: 18px;padding-bottom: 7px;margin-bottom: 7px">'
                                + value[3] + '：'
                                + '</div>'
                                + obj.seriesName + '：' + value[1] + '<br>';
                            //+ obj.seriesName+' 不良数量：' + value[4] +'<br>'
                        }
                        if (obj.seriesType == "line") {
                            return '<div style="border-bottom: 1px solid rgba(255,255,255,.3); font-size: 18px;padding-bottom: 7px;margin-bottom: 7px">'
                                + value[3] + '：'
                                + '</div>'
                                + obj.seriesName + '：' + value[1] + '%' + '<br>';
                            //+ obj.seriesName+' 等级数量：' + value[4] +'<br>'
                        }
                    }
                    /*else{
                      return '<div style="border-bottom: 1px solid rgba(255,255,255,.3); font-size: 18px;padding-bottom: 7px;margin-bottom: 7px">'
                        + '过货量：' + value[2] + '<br>'
                    }*/
                }
            },
            //		    toolbox: {
            //		        feature: {
            //		            dataView: {show: true, readOnly: false},
            //		        },
            //		        bottom:'0%',
            //		        right:'0%', 
            //		    },
            legend: {
                data: eval('(' + respText.legenddata + ')'),
                type: 'scroll',
                left: legend.left,
                top: legend.top,
                //图例排布
                width: legend.width,
            },
            xAxis: [
                {
                    type: 'category',
                    data: eval('(' + respText.xdata + ')'),
                    axisPointer: {
                        type: 'shadow'
                    },
                    axisLine: {
                        lineStyle: {
                            width: axisWidth,
                            color: 'rgb(168,168,168)'
                        },
                        axisLabel: {
                            show: true,
                        },
                    },
                    //坐标轴刻度加粗
                    axisTick: {
                        length: 8,
                        lineStyle: {
                            width: axisWidth,
                        }
                    },
                    axisLabel: {
                        color: 'rgb(66,66,66)',
                        fontSize: fontSize,
                        margin: '15',
                    }
                }, {
                    type: 'category',
                    gridIndex: 1,
                    show: false,
                    data: eval('(' + respText.xdata + ')'),
                }
            ],
            yAxis: [
                {
                    type: 'value',
                    name: 'TOP5 DPPM',
                    nameTextStyle: {
                        fontSize: fontSize,
                        fontFamily: '微软雅黑',
                        color: 'rgb(66,66,66)',
                    },
                    axisLabel: {
                        color: 'rgb(66,66,66)',
                        fontSize: fontSize,
                        margin: '15',
                        //刻度除1000
                        formatter: function (value) {
                            if (value > 999 || value < -999) {
                                var i = value / 1000;
                                return i + 'K';
                            }
                            else {
                                return value;
                            }
                        }
                    },
                    axisLine: {
                        lineStyle: {
                            width: axisWidth,
                            color: 'rgb(168,168,168)'
                        },
                        axisLabel: {
                            show: true,
                        },
                    },
                    //坐标轴刻度加粗
                    axisTick: {
                        length: 6,
                        lineStyle: {
                            width: axisWidth,
                        }
                    },
                    splitNumber: 4,
                },
                {
                    type: 'value',
                    name: 'LRR',
                    nameTextStyle: {
                        fontSize: fontSize,
                        fontFamily: '微软雅黑',
                        color: 'rgb(66,66,66)',
                    },
                    axisLabel: {
                        formatter: '{value}%',
                        color: 'rgb(66,66,66)',
                        fontSize: fontSize,
                        margin: '15',
                    },
                    axisLine: {
                        lineStyle: {
                            width: axisWidth,
                            color: 'rgb(168,168,168)'
                        },
                        axisLabel: {
                            show: true,
                        },
                    },
                    //坐标轴刻度加粗
                    axisTick: {
                        length: 6,
                        lineStyle: {
                            width: axisWidth,
                        }
                    },
                    splitLine: {
                        show: false
                    },
                }, {
                    type: 'value',
                    gridIndex: 1,
                    show: false,
                }
            ],
            grid: grid,
            series: eval('(' + respText.series + ')'),
            //水印增加
            graphic: [
                {
                    type: 'text',
                    left: '5%',
                    top: '20%',
                    z: 0,
                    cursor: 'default',
                    rotation: Math.PI * 0.125,
                    style: {
                        fill: 'rgb(188,188,188)',
                        text: waterMark,
                        font: waterMarkFontsize
                    }
                },
                {
                    type: 'text',
                    left: '50%',
                    top: '20%',
                    z: 0,
                    cursor: 'default',
                    rotation: Math.PI * 0.125,
                    style: {
                        fill: 'rgb(188,188,188)',
                        text: waterMark,
                        font: waterMarkFontsize
                    }
                },
            ],
        };
        return option;
    };
    EchartOptionService.prototype.getOption_WipMove = function (title, respText, waterMark, deviceType) {
        var fontSize;
        var axisWidth;
        var grid;
        var titleFontSize;
        var legend;
        var waterMarkFontSize;
        var symbolSize;
        switch (deviceType) {
            case 'phone':
                fontSize = '60%';
                titleFontSize = { main: '140%', sub: '80%' };
                axisWidth = 2;
                grid = { x: '10%', x2: '7%', y: '20%', y2: '22%' };
                legend = { width: '71%', left: '36%', top: '1%' };
                break;
            case 'pad':
                fontSize = '100%';
                titleFontSize = { main: '200%', sub: '110%' };
                axisWidth = 2;
                grid = { x: '7%', x2: '8%', y: '20%', y2: '22%' };
                legend = { width: '71%', left: '50%', top: '3%' };
                break;
            case 'monitor':
                fontSize = '90%';
                titleFontSize = { main: '180%', sub: '100%' };
                axisWidth = 2;
                grid = { x: '7%', x2: '7%', y: '19%', y2: '22%' };
                legend = { width: '71%', left: '46%', top: '3%' };
                waterMarkFontSize = 'bold 20px Microsoft YaHei';
                symbolSize = 6;
                break;
            case 'tv':
                fontSize = '110%';
                titleFontSize = { main: '200%', sub: '120%' };
                axisWidth = 4;
                grid = { x: '7%', x2: '7%', y: '14%', y2: '22%' };
                legend = { width: '71%', left: '36%', top: '2%' };
                waterMarkFontSize = 'bold 30px Microsoft YaHei';
                symbolSize = 10;
                break;
        }
        var option = {
            title: [{
                    text: title,
                    subtext: '     ' + respText.today + '    WIP总量：' + respText.wiptotal + '    库房WIP总量：' + respText.warehouseWIP,
                    align: 'left',
                    left: '0%',
                    top: '1%',
                    itemGap: 25,
                    textStyle: {
                        fontFamily: '微软雅黑',
                        fontSize: titleFontSize.main,
                    },
                    subtextStyle: {
                        fontFamily: '微软雅黑',
                        fontSize: titleFontSize.sub,
                        color: 'rgb(0,0,0)',
                    },
                },
            ],
            tooltip: {
                trigger: 'item',
                formatter: '{a} : {c}'
            },
            legend: {
                data: ['WIP', "MOVEMENT"],
                left: legend.left,
                top: legend.top,
                //图例排布
                width: legend.width,
            },
            xAxis: [
                {
                    type: 'category',
                    data: eval('(' + respText.xdata + ')'),
                    axisPointer: {
                        type: 'shadow'
                    },
                    axisLabel: {
                        interval: 0,
                        rotate: 315,
                        margin: '15',
                        color: 'rgb(0,0,0)',
                    },
                    //坐标轴颜色调整为灰色，宽度调宽
                    axisLine: {
                        lineStyle: {
                            width: axisWidth,
                            color: 'rgb(168,168,168)'
                        },
                        axisLabel: {
                            show: true,
                        },
                    },
                    //坐标轴刻度加粗
                    axisTick: {
                        length: 8,
                        lineStyle: {
                            width: axisWidth,
                        }
                    }
                }
            ],
            yAxis: [
                {
                    type: 'value',
                    name: 'WIP',
                    nameTextStyle: {
                        fontSize: fontSize,
                        fontFamily: '微软雅黑',
                        color: 'rgb(66,66,66)',
                    },
                    axisLabel: {
                        color: 'rgb(66,66,66)',
                        fontSize: fontSize,
                        margin: '15',
                        formatter: function (value) {
                            if (value > 999 || value < -999) {
                                var i = value / 1000;
                                return i + 'K';
                            }
                            else {
                                return value;
                            }
                        }
                    },
                    axisLine: {
                        lineStyle: {
                            width: axisWidth,
                            color: 'rgb(168,168,168)'
                        },
                        axisLabel: {
                            show: true,
                        },
                    },
                    //坐标轴刻度加粗
                    axisTick: {
                        length: 6,
                        lineStyle: {
                            width: axisWidth,
                        }
                    },
                    splitNumber: 4,
                },
                {
                    type: 'value',
                    name: 'Movement',
                    nameTextStyle: {
                        fontSize: fontSize,
                        fontFamily: '微软雅黑',
                        color: 'rgb(66,66,66)',
                    },
                    axisLabel: {
                        color: 'rgb(66,66,66)',
                        fontSize: fontSize,
                        margin: '15',
                        formatter: function (value) {
                            if (value > 999 || value < -999) {
                                var i = value / 1000;
                                return i + 'K';
                            }
                            else {
                                return value;
                            }
                        }
                    },
                    axisLine: {
                        lineStyle: {
                            width: axisWidth,
                            color: 'rgb(168,168,168)'
                        },
                        axisLabel: {
                            show: true,
                        },
                    },
                    //坐标轴刻度加粗
                    axisTick: {
                        length: 6,
                        lineStyle: {
                            width: axisWidth,
                        }
                    },
                    splitNumber: 4,
                    splitLine: {
                        show: false
                    },
                },
            ],
            dataZoom: [{
                    type: 'slider',
                    show: true,
                    xAxisIndex: [0],
                    handleSize: 20,
                    height: 8,
                    left: 30,
                    right: 40,
                    bottom: 30,
                    handleColor: '#ddd',
                    handleStyle: {
                        borderColor: "#cacaca",
                        borderWidth: "1",
                        shadowBlur: 2,
                        background: "#ddd",
                        shadowColor: "#ddd",
                    },
                    backgroundColor: '#ddd',
                    showDataShadow: false,
                    showDetail: false,
                    handleIcon: 'M-292,322.2c-3.2,0-6.4-0.6-9.3-1.9c-2.9-1.2-5.4-2.9-7.6-5.1s-3.9-4.8-5.1-7.6c-1.3-3-1.9-6.1-1.9-9.3c0-3.2,0.6-6.4,1.9-9.3c1.2-2.9,2.9-5.4,5.1-7.6s4.8-3.9,7.6-5.1c3-1.3,6.1-1.9,9.3-1.9c3.2,0,6.4,0.6,9.3,1.9c2.9,1.2,5.4,2.9,7.6,5.1s3.9,4.8,5.1,7.6c1.3,3,1.9,6.1,1.9,9.3c0,3.2-0.6,6.4-1.9,9.3c-1.2,2.9-2.9,5.4-5.1,7.6s-4.8,3.9-7.6,5.1C-285.6,321.5-288.8,322.2-292,322.2z',
                    filterMode: 'filter',
                },
                //下面这个属性是里面拖到
                {
                    type: 'inside',
                    show: true,
                    xAxisIndex: [0],
                    start: 1,
                    end: 100
                }
            ],
            grid: grid,
            series: [
                {
                    name: 'WIP',
                    type: 'bar',
                    data: eval('(' + respText.wipdata + ')'),
                    label: {
                        normal: {
                            show: true,
                        }
                    },
                    barWidth: '50%',
                }, {
                    name: 'MOVEMENT',
                    type: 'line',
                    yAxisIndex: 1,
                    data: eval('(' + respText.movedata + ')'),
                    symbol: 'circle',
                    symbolSize: symbolSize,
                    label: {
                        normal: {
                            show: true,
                        }
                    }
                },
            ],
            //水印增加
            graphic: [
                {
                    type: 'text',
                    left: '5%',
                    top: '20%',
                    z: 0,
                    cursor: 'default',
                    rotation: Math.PI * 0.125,
                    style: {
                        fill: 'rgb(188,188,188)',
                        text: waterMark,
                        font: waterMarkFontSize
                    }
                },
                {
                    type: 'text',
                    left: '50%',
                    top: '20%',
                    z: 0,
                    cursor: 'default',
                    rotation: Math.PI * 0.125,
                    style: {
                        fill: 'rgb(188,188,188)',
                        text: waterMark,
                        font: waterMarkFontSize
                    }
                },
            ],
        };
        return option;
    };
    EchartOptionService.prototype.getOption_CumYield = function (title, respText, waterMark, deviceType) {
        var fontSize;
        var axisWidth;
        var grid;
        var titleFontSize;
        var legend;
        var waterMarkFontSize;
        switch (deviceType) {
            case 'phone':
                fontSize = '60%';
                titleFontSize = { main: '140%', sub: '80%' };
                axisWidth = 2;
                grid = { x: '10%', x2: '7%', y: '20%', y2: '22%' };
                legend = { width: '71%', left: '36%', top: '1%' };
                break;
            case 'pad':
                fontSize = '100%';
                titleFontSize = { main: '200%', sub: '110%' };
                axisWidth = 2;
                grid = { x: '7%', x2: '8%', y: '20%', y2: '22%' };
                legend = { width: '71%', left: '50%', top: '3%' };
                break;
            case 'monitor':
                fontSize = '90%';
                titleFontSize = { main: '180%', sub: '100%' };
                axisWidth = 2;
                grid = [{
                        x: '7%',
                        x2: '7%',
                        y: '12%',
                        height: '80%'
                    },];
                legend = { width: '71%', left: '46%', top: '3%' };
                waterMarkFontSize = 'bold 20px Microsoft YaHei';
                break;
            case 'tv':
                fontSize = '110%';
                titleFontSize = { main: '200%', sub: '120%' };
                axisWidth = 4;
                grid = [{
                        x: '7%',
                        x2: '7%',
                        y: '12%',
                        height: '80%'
                    },];
                legend = { width: '71%', left: '36%', top: '2%' };
                waterMarkFontSize = 'bold 30px Microsoft YaHei';
                break;
        }
        var option = {
            title: [{
                    text: title,
                    align: 'left',
                    left: '0%',
                    top: '1%',
                    textStyle: {
                        fontFamily: '微软雅黑',
                        fontSize: titleFontSize.main,
                    },
                }],
            tooltip: {
                padding: 10,
                backgroundColor: '#222',
                borderColor: '#777',
                borderWidth: 1,
                formatter: function (obj) {
                    var value = obj.value;
                    if (obj.seriesName != "过货量") {
                        if (obj.seriesType == "bar") {
                            return '<div style="border-bottom: 1px solid rgba(255,255,255,.3); font-size: 18px;padding-bottom: 7px;margin-bottom: 7px">'
                                + value[3] + '：'
                                + '</div>'
                                + obj.seriesName + '：' + value[1] + '%' + '<br>'
                                + obj.seriesName + ' 不良数量：' + value[4] + '<br>';
                        }
                        if (obj.seriesType == "line") {
                            return '<div style="border-bottom: 1px solid rgba(255,255,255,.3); font-size: 18px;padding-bottom: 7px;margin-bottom: 7px">'
                                + value[3] + '：'
                                + '</div>'
                                + obj.seriesName + '：' + value[1] + '%' + '<br>';
                            /*+ obj.seriesName+' 等级数量：' + value[4] +'<br>'*/
                        }
                    }
                    /*else{
                      return '<div style="border-bottom: 1px solid rgba(255,255,255,.3); font-size: 18px;padding-bottom: 7px;margin-bottom: 7px">'
                        + '过货量：' + value[2] + '<br>'
                    }*/
                }
            },
            toolbox: {},
            legend: {
                data: eval('(' + respText.legenddata + ')'),
                type: 'scroll',
                left: legend.left,
                top: legend.top,
                //图例排布
                width: legend.width,
                selected: {
                    '亮点A': false,
                    '多亮点A': false,
                }
            },
            xAxis: [
                {
                    type: 'category',
                    gridIndex: 0,
                    data: eval('(' + respText.xdata + ')'),
                    axisPointer: {
                        type: 'shadow'
                    },
                    axisLine: {
                        lineStyle: {
                            width: axisWidth,
                            color: 'rgb(168,168,168)'
                        },
                        axisLabel: {
                            show: true,
                        },
                    },
                    //坐标轴刻度加粗
                    axisTick: {
                        length: 8,
                        lineStyle: {
                            width: axisWidth,
                        }
                    },
                    axisLabel: {
                        color: 'rgb(66,66,66)',
                        fontSize: fontSize,
                        margin: '15',
                    }
                },
            ],
            yAxis: [
                {
                    type: 'value',
                    gridIndex: 0,
                    name: 'Yield',
                    scale: true,
                    min: function (value) {
                        var range = value.max - value.min;
                        var rangeplus = range / 5;
                        // 最大值和最小值相同时，坐标轴最小值为value最小值减2
                        if (rangeplus == 0) {
                            rangeplus = 2;
                        }
                        var a = Math.floor(value.min - rangeplus);
                        if (a < 5) {
                            return 0;
                        }
                        else {
                            return a;
                        }
                    },
                    max: function (value) {
                        var range = value.max - value.min;
                        var rangeplus = range / 5;
                        // 最大值和最小值相同时，坐标轴最大值为value最大值加2
                        if (rangeplus == 0) {
                            rangeplus = 2;
                        }
                        var a = Math.ceil(value.max + rangeplus);
                        if (a > 100) {
                            return 100;
                        }
                        else {
                            return a;
                        }
                    },
                    nameTextStyle: {
                        fontSize: fontSize,
                        fontFamily: '微软雅黑',
                        color: 'rgb(66,66,66)',
                    },
                    axisLabel: {
                        formatter: '{value}%',
                        color: 'rgb(66,66,66)',
                        fontSize: fontSize,
                        margin: '15',
                    },
                    axisLine: {
                        lineStyle: {
                            width: axisWidth,
                            color: 'rgb(168,168,168)'
                        },
                        axisLabel: {
                            show: true,
                        },
                    },
                    //坐标轴刻度加粗
                    axisTick: {
                        length: 6,
                        lineStyle: {
                            width: axisWidth,
                        }
                    },
                    splitLine: {
                        show: false
                    },
                }, {
                    type: 'value',
                    gridIndex: 1,
                    show: false,
                }
            ],
            grid: grid,
            series: eval('(' + respText.series + ')'),
            //水印增加
            graphic: [
                {
                    type: 'text',
                    left: '5%',
                    top: '20%',
                    z: 0,
                    cursor: 'default',
                    rotation: Math.PI * 0.125,
                    style: {
                        fill: 'rgb(188,188,188)',
                        text: waterMark,
                        font: waterMarkFontSize
                    }
                },
                {
                    type: 'text',
                    left: '50%',
                    top: '20%',
                    z: 0,
                    cursor: 'default',
                    rotation: Math.PI * 0.125,
                    style: {
                        fill: 'rgb(188,188,188)',
                        text: waterMark,
                        font: waterMarkFontSize
                    }
                },
            ],
        };
        return option;
    };
    EchartOptionService.prototype.getOption_InputOutput = function (title, respText, waterMark, deviceType) {
        var fontSize;
        var axisWidth;
        var grid;
        var titleFontSize;
        var legend;
        var waterMarkFontSize;
        var symbolSize;
        switch (deviceType) {
            case 'phone':
                fontSize = '60%';
                titleFontSize = { main: '140%', sub: '80%' };
                axisWidth = 2;
                grid = { x: '10%', x2: '7%', y: '20%' };
                legend = { width: '71%', left: '26%', top: '1%' };
                break;
            case 'pad':
                fontSize = '100%';
                titleFontSize = { main: '160%', sub: '100%' };
                axisWidth = 2;
                grid = { x: '7%', x2: '7%', y: '14%' };
                legend = { width: '71%', left: '35%', top: '7%' };
                break;
            case 'monitor':
                fontSize = '90%';
                titleFontSize = { main: '180%', sub: '100%' };
                axisWidth = 2;
                grid = { x: '7%', x2: '7%', y: '19%' };
                legend = { width: '71%', left: '26%', top: '1%' };
                waterMarkFontSize = 'bold 20px Microsoft YaHei';
                symbolSize = 6;
                break;
            case 'tv':
                fontSize = '120%';
                titleFontSize = { main: '200%', sub: '120%' };
                axisWidth = 4;
                grid = { x: '7%', x2: '7%', y: '14%' };
                legend = { width: '71%', left: '26%', top: '1%' };
                waterMarkFontSize = 'bold 20px Microsoft YaHei';
                symbolSize = 10;
                break;
        }
        var option = {
            title: {
                text: title,
                align: 'left',
                subtext: '     ' + respText.lastUpdatetime,
                left: '0%',
                top: '1%',
                itemGap: 25,
                textStyle: {
                    fontFamily: '微软雅黑',
                    fontSize: titleFontSize.main,
                },
                subtextStyle: {
                    fontFamily: '微软雅黑',
                    fontSize: titleFontSize.sub,
                    color: 'rgb(0,0,0)',
                },
            },
            tooltip: {
                trigger: 'item',
                formatter: '{a} : {c}'
            },
            //		    toolbox: {
            //		        feature: {
            //		            dataView: {show: true, readOnly: true},
            //		        }
            //		    },
            legend: {
                data: ['DAILY IN', 'DAILY OUT', 'CUM IN', 'CUM OUT'],
                selected: {
                    'All': false,
                },
                left: legend.width,
                top: legend.top,
                //图例排布
                width: legend.width,
            },
            xAxis: [
                {
                    type: 'category',
                    data: eval('(' + respText.xdata + ')'),
                    axisPointer: {
                        type: 'shadow'
                    },
                    axisLine: {
                        lineStyle: {
                            width: axisWidth,
                            color: 'rgb(168,168,168)'
                        },
                        axisLabel: {
                            show: true,
                        },
                    },
                    //坐标轴刻度加粗
                    axisTick: {
                        length: 8,
                        lineStyle: {
                            width: axisWidth,
                        }
                    },
                    axisLabel: {
                        color: 'rgb(66,66,66)',
                        fontSize: fontSize,
                        margin: '15',
                    }
                }
            ],
            yAxis: [
                {
                    type: 'value',
                    name: 'Daily',
                    nameTextStyle: {
                        fontSize: fontSize,
                        fontFamily: '微软雅黑',
                        color: 'rgb(66,66,66)',
                    },
                    axisLabel: {
                        color: 'rgb(66,66,66)',
                        fontSize: fontSize,
                        margin: '15',
                        //formatter:function(value){
                        //    var i = value/1000;
                        //    return i+'K';}
                        formatter: function (value) {
                            if (value > 999 || value < -999) {
                                var i = value / 1000;
                                return i + 'K';
                            }
                            else {
                                return value;
                            }
                        }
                    },
                    axisLine: {
                        lineStyle: {
                            width: axisWidth,
                            color: 'rgb(168,168,168)'
                        },
                        axisLabel: {
                            show: true,
                        },
                    },
                    //坐标轴刻度加粗
                    axisTick: {
                        length: 6,
                        lineStyle: {
                            width: axisWidth,
                        }
                    },
                    splitNumber: 4,
                },
                {
                    type: 'value',
                    name: 'CUM',
                    nameTextStyle: {
                        fontSize: fontSize,
                        fontFamily: '微软雅黑',
                        color: 'rgb(66,66,66)',
                    },
                    axisLabel: {
                        color: 'rgb(66,66,66)',
                        fontSize: fontSize,
                        margin: '15',
                        //formatter:function(value){
                        //    var i = value/1000;
                        //    return i+'K';}
                        formatter: function (value) {
                            if (value > 999 || value < -999) {
                                var i = value / 1000;
                                return i + 'K';
                            }
                            else {
                                return value;
                            }
                        }
                    },
                    axisLine: {
                        lineStyle: {
                            width: axisWidth,
                            color: 'rgb(168,168,168)'
                        },
                        axisLabel: {
                            show: true,
                        },
                    },
                    //坐标轴刻度加粗
                    axisTick: {
                        length: 6,
                        lineStyle: {
                            width: axisWidth,
                        }
                    },
                    splitNumber: 4,
                    splitLine: {
                        show: false
                    },
                }
            ],
            grid: grid,
            series: [
                {
                    name: 'DAILY IN',
                    type: 'bar',
                    stack: '1',
                    data: eval('(' + respText.data_dailyIn + ')'),
                },
                {
                    name: 'DAILY OUT',
                    type: 'bar',
                    stack: '2',
                    data: eval('(' + respText.data_dailyOut + ')'),
                },
                {
                    name: 'CUM IN',
                    type: 'line',
                    yAxisIndex: 1,
                    data: eval('(' + respText.data_cumIn + ')'),
                    symbol: 'circle',
                    symbolSize: symbolSize,
                },
                {
                    name: 'CUM OUT',
                    type: 'line',
                    yAxisIndex: 1,
                    data: eval('(' + respText.data_cumOut + ')'),
                    symbol: 'circle',
                    symbolSize: symbolSize,
                },
            ],
            //水印增加
            graphic: [
                {
                    type: 'text',
                    left: '5%',
                    top: '20%',
                    z: 0,
                    cursor: 'default',
                    rotation: Math.PI * 0.125,
                    style: {
                        fill: 'rgb(188,188,188)',
                        text: waterMark,
                        font: waterMarkFontSize
                    }
                },
                {
                    type: 'text',
                    left: '50%',
                    top: '20%',
                    z: 0,
                    cursor: 'default',
                    rotation: Math.PI * 0.125,
                    style: {
                        fill: 'rgb(188,188,188)',
                        text: waterMark,
                        font: waterMarkFontSize
                    }
                },
            ],
        };
        return option;
    };
    EchartOptionService.prototype.getOption_SQEyield = function (title, respText, waterMark, deviceType) {
        var fontSize;
        var axisWidth;
        var grid;
        var titleFontSize;
        var legend;
        var waterMarkFontsize;
        switch (deviceType) {
            case 'phone':
                fontSize = '60%';
                titleFontSize = { main: '140%', sub: '80%' };
                axisWidth = 2;
                legend = { width: '71%', left: '26%', top: '1%' };
                break;
            case 'pad':
                fontSize = '100%';
                titleFontSize = { main: '180%', sub: '100%' };
                axisWidth = 2;
                legend = { width: '71%', left: '35%', top: '7%' };
                break;
            case 'monitor':
                fontSize = '90%';
                titleFontSize = { main: '180%', sub: '90%' };
                axisWidth = 2;
                grid = [{
                        x: '7%',
                        x2: '7%',
                        y: '13%',
                        height: '76%'
                    }, {
                        x: '7%',
                        x2: '7%',
                        y2: '1.5%',
                        height: '3%'
                    }];
                legend = { width: '64%', left: '30%', top: '2%' };
                waterMarkFontsize = 'bold 20px Microsoft YaHei';
                break;
            case 'tv':
                fontSize = '120%';
                titleFontSize = { main: '200%', sub: '120%' };
                axisWidth = 4;
                grid = [{
                        x: '7%',
                        x2: '7%',
                        y: '13%',
                        height: '75%'
                    }, {
                        x: '7%',
                        x2: '7%',
                        y2: '1%',
                        height: '3%'
                    }];
                legend = { width: '65%', left: '28%', top: '2%' };
                waterMarkFontsize = 'bold 30px Microsoft YaHei';
                break;
        }
        var option = {
            title: [{
                    text: title,
                    align: 'left',
                    left: '0%',
                    top: '1%',
                    textStyle: {
                        fontFamily: '微软雅黑',
                        fontSize: titleFontSize.main,
                    },
                },
                {
                    text: '过货量:',
                    left: '1.5%',
                    align: 'left',
                    bottom: '1.5%',
                    textStyle: {
                        fontFamily: '微软雅黑',
                        fontSize: titleFontSize.sub,
                    },
                }],
            tooltip: {
                padding: 10,
                backgroundColor: '#222',
                borderColor: '#777',
                borderWidth: 1,
                formatter: function (obj) {
                    var value = obj.value;
                    if (obj.seriesName != "过货量") {
                        if (obj.seriesType == "bar") {
                            return '<div style="border-bottom: 1px solid rgba(255,255,255,.3); font-size: 18px;padding-bottom: 7px;margin-bottom: 7px">'
                                + value[3] + '：'
                                + '</div>'
                                + obj.seriesName + '：' + value[1] + '%' + '<br>'
                                + obj.seriesName + ' 不良数量：' + value[4] + '<br>';
                        }
                        if (obj.seriesType == "line") {
                            return '<div style="border-bottom: 1px solid rgba(255,255,255,.3); font-size: 18px;padding-bottom: 7px;margin-bottom: 7px">'
                                + value[3] + '：'
                                + '</div>'
                                + obj.seriesName + '：' + value[1] + '%' + '<br>';
                        }
                    }
                    /*else{
                      return '<div style="border-bottom: 1px solid rgba(255,255,255,.3); font-size: 18px;padding-bottom: 7px;margin-bottom: 7px">'
                        + '过货量：' + value[2] + '<br>'
                    }*/
                }
            },
            toolbox: {},
            legend: {
                data: eval('(' + respText.legenddata + ')'),
                type: 'scroll',
                left: legend.left,
                top: legend.top,
                //图例排布
                width: legend.width,
                selected: {
                    '亮点A': false,
                    '多亮点A': false,
                }
            },
            xAxis: [
                {
                    type: 'category',
                    gridIndex: 0,
                    data: eval('(' + respText.xdata + ')'),
                    axisPointer: {
                        type: 'shadow'
                    },
                    axisLine: {
                        lineStyle: {
                            width: axisWidth,
                            color: 'rgb(168,168,168)'
                        },
                        axisLabel: {
                            show: true,
                        },
                    },
                    //坐标轴刻度加粗
                    axisTick: {
                        length: 8,
                        lineStyle: {
                            width: axisWidth,
                        }
                    },
                    axisLabel: {
                        color: 'rgb(66,66,66)',
                        fontSize: fontSize,
                        margin: '15',
                    }
                }, {
                    type: 'category',
                    gridIndex: 1,
                    show: false,
                    data: eval('(' + respText.xdata + ')'),
                }
            ],
            yAxis: [
                {
                    type: 'value',
                    gridIndex: 0,
                    name: 'Defect',
                    nameTextStyle: {
                        fontSize: fontSize,
                        fontFamily: '微软雅黑',
                        color: 'rgb(66,66,66)',
                    },
                    axisLabel: {
                        formatter: '{value}%',
                        color: 'rgb(66,66,66)',
                        fontSize: fontSize,
                        margin: '15',
                    },
                    axisLine: {
                        lineStyle: {
                            width: axisWidth,
                            color: 'rgb(168,168,168)'
                        },
                        axisLabel: {
                            show: true,
                        },
                    },
                    //坐标轴刻度加粗
                    axisTick: {
                        length: 6,
                        lineStyle: {
                            width: axisWidth,
                        }
                    },
                    splitNumber: 4,
                },
                {
                    type: 'value',
                    gridIndex: 0,
                    name: 'Yield',
                    scale: true,
                    min: function (value) {
                        var range = value.max - value.min;
                        var rangeplus = range / 5;
                        // 最大值和最小值相同时，坐标轴最小值为value最小值减2
                        if (rangeplus == 0) {
                            rangeplus = 2;
                        }
                        var a = Math.floor(value.min - rangeplus);
                        if (a < 5) {
                            return 0;
                        }
                        else {
                            return a;
                        }
                    },
                    max: function (value) {
                        var range = value.max - value.min;
                        var rangeplus = range / 5;
                        // 最大值和最小值相同时，坐标轴最大值为value最大值加2
                        if (rangeplus == 0) {
                            rangeplus = 2;
                        }
                        var a = Math.ceil(value.max + rangeplus);
                        if (a > 100) {
                            return 100;
                        }
                        else {
                            return a;
                        }
                    },
                    nameTextStyle: {
                        fontSize: fontSize,
                        fontFamily: '微软雅黑',
                        color: 'rgb(66,66,66)',
                    },
                    axisLabel: {
                        formatter: '{value}%',
                        color: 'rgb(66,66,66)',
                        fontSize: fontSize,
                        margin: '15',
                    },
                    axisLine: {
                        lineStyle: {
                            width: axisWidth,
                            color: 'rgb(168,168,168)'
                        },
                        axisLabel: {
                            show: true,
                        },
                    },
                    //坐标轴刻度加粗
                    axisTick: {
                        length: 6,
                        lineStyle: {
                            width: axisWidth,
                        }
                    },
                    splitLine: {
                        show: false
                    },
                }, {
                    type: 'value',
                    gridIndex: 1,
                    show: false,
                }
            ],
            grid: grid,
            series: eval('(' + respText.series + ')'),
            //水印增加
            graphic: [
                {
                    type: 'text',
                    left: '5%',
                    top: '20%',
                    z: 0,
                    cursor: 'default',
                    rotation: Math.PI * 0.125,
                    style: {
                        fill: 'rgb(188,188,188)',
                        text: waterMark,
                        font: waterMarkFontsize
                    }
                },
                {
                    type: 'text',
                    left: '50%',
                    top: '20%',
                    z: 0,
                    cursor: 'default',
                    rotation: Math.PI * 0.125,
                    style: {
                        fill: 'rgb(188,188,188)',
                        text: waterMark,
                        font: waterMarkFontsize
                    }
                },
            ],
        };
        return option;
    };
    EchartOptionService.prototype.getOption_ActPlan = function (title, respText, waterMark, deviceType) {
        var fontSize;
        var axisWidth;
        var grid;
        var titleFontSize;
        var legend;
        var waterMarkFontSize;
        var symbolSize;
        switch (deviceType) {
            case 'phone':
                fontSize = '60%';
                titleFontSize = { main: '140%', sub: '80%' };
                axisWidth = 2;
                grid = { x: '10%', x2: '7%', y: '20%' };
                legend = { width: '71%', left: '26%', top: '1%' };
                break;
            case 'pad':
                fontSize = '100%';
                titleFontSize = { main: '160%', sub: '100%' };
                axisWidth = 2;
                grid = { x: '7%', x2: '7%', y: '14%' };
                legend = { width: '71%', left: '35%', top: '7%' };
                break;
            case 'monitor':
                fontSize = '90%';
                titleFontSize = { main: '180%', sub: '100%' };
                axisWidth = 2;
                grid = { x: '7%', x2: '7%', y: '19%' };
                legend = { width: '71%', left: '26%', top: '1%' };
                waterMarkFontSize = 'bold 20px Microsoft YaHei';
                symbolSize = 6;
                break;
            case 'tv':
                fontSize = '120%';
                titleFontSize = { main: '200%', sub: '120%' };
                axisWidth = 4;
                grid = { x: '7%', x2: '7%', y: '14%' };
                legend = { width: '71%', left: '26%', top: '1%' };
                waterMarkFontSize = 'bold 20px Microsoft YaHei';
                symbolSize = 10;
                break;
        }
        var option = {
            title: [{
                    text: title,
                    align: 'left',
                    subtext: '     ' + respText.lastUpdatetime,
                    left: '0%',
                    top: '1%',
                    itemGap: 25,
                    textStyle: {
                        fontFamily: '微软雅黑',
                        fontSize: titleFontSize.main,
                    },
                    subtextStyle: {
                        fontFamily: '微软雅黑',
                        fontSize: titleFontSize.sub,
                        color: 'rgb(0,0,0)',
                    },
                }, {
                    text: respText.actplanRatio,
                    right: '18%',
                    align: 'right',
                    top: '5%',
                    textStyle: {
                        fontFamily: '微软雅黑',
                        fontSize: titleFontSize.sub,
                        color: 'rgb(0,0,0)',
                    },
                }],
            tooltip: {
                trigger: 'item',
                formatter: '{a} : {c}'
            },
            //		    toolbox: {
            //		        feature: {
            //		            dataView: {show: true, readOnly: true},
            //		        }
            //		    },
            legend: {
                data: ['DAILY PLAN', 'DAILY ACT', 'CUM PLAN', 'CUM ACT'],
                selected: {
                    'All': false,
                },
                left: legend.left,
                top: legend.top,
                //图例排布
                width: legend.width,
            },
            xAxis: [
                {
                    type: 'category',
                    data: eval('(' + respText.xdata + ')'),
                    axisPointer: {
                        type: 'shadow'
                    },
                    axisLine: {
                        lineStyle: {
                            width: axisWidth,
                            color: 'rgb(168,168,168)'
                        },
                        axisLabel: {
                            show: true,
                        },
                    },
                    //坐标轴刻度加粗
                    axisTick: {
                        length: 8,
                        lineStyle: {
                            width: axisWidth,
                        }
                    },
                    axisLabel: {
                        color: 'rgb(66,66,66)',
                        fontSize: fontSize,
                        margin: '15',
                    }
                }
            ],
            yAxis: [
                {
                    type: 'value',
                    name: 'Daily',
                    nameTextStyle: {
                        fontSize: fontSize,
                        fontFamily: '微软雅黑',
                        color: 'rgb(66,66,66)',
                    },
                    axisLabel: {
                        color: 'rgb(66,66,66)',
                        fontSize: fontSize,
                        margin: '15',
                        formatter: function (value) {
                            if (value > 999 || value < -999) {
                                var i = value / 1000;
                                return i + 'K';
                            }
                            else {
                                return value;
                            }
                        }
                    },
                    axisLine: {
                        lineStyle: {
                            width: axisWidth,
                            color: 'rgb(168,168,168)'
                        },
                        axisLabel: {
                            show: true,
                        },
                    },
                    //坐标轴刻度加粗
                    axisTick: {
                        length: 6,
                        lineStyle: {
                            width: axisWidth,
                        }
                    },
                    splitNumber: axisWidth,
                },
                {
                    type: 'value',
                    name: 'Cum',
                    nameTextStyle: {
                        fontSize: fontSize,
                        fontFamily: '微软雅黑',
                        color: 'rgb(66,66,66)',
                    },
                    axisLabel: {
                        color: 'rgb(66,66,66)',
                        fontSize: fontSize,
                        margin: '15',
                        formatter: function (value) {
                            if (value > 999 || value < -999) {
                                var i = value / 1000;
                                return i + 'K';
                            }
                            else {
                                return value;
                            }
                        }
                    },
                    axisLine: {
                        lineStyle: {
                            width: axisWidth,
                            color: 'rgb(168,168,168)'
                        },
                        axisLabel: {
                            show: true,
                        },
                    },
                    //坐标轴刻度加粗
                    axisTick: {
                        length: 6,
                        lineStyle: {
                            width: axisWidth,
                        }
                    },
                    splitNumber: 4,
                    splitLine: {
                        show: false
                    },
                }
            ],
            grid: grid,
            series: [
                {
                    name: 'DAILY PLAN',
                    type: 'bar',
                    stack: '1',
                    data: eval('(' + respText.data_dailyplan + ')'),
                },
                {
                    name: 'DAILY ACT',
                    type: 'bar',
                    stack: '2',
                    data: eval('(' + respText.data_dailyact + ')'),
                },
                {
                    name: 'CUM PLAN',
                    type: 'line',
                    yAxisIndex: 1,
                    data: eval('(' + respText.data_cumplan + ')'),
                    symbol: 'circle',
                    symbolSize: symbolSize,
                },
                {
                    name: 'CUM ACT',
                    type: 'line',
                    yAxisIndex: 1,
                    data: eval('(' + respText.data_cumact + ')'),
                    symbol: 'circle',
                    symbolSize: symbolSize,
                },
            ],
            //水印增加
            graphic: [
                {
                    type: 'text',
                    left: '5%',
                    top: '20%',
                    z: 0,
                    cursor: 'default',
                    rotation: Math.PI * 0.125,
                    style: {
                        fill: 'rgb(188,188,188)',
                        text: waterMark,
                        font: waterMarkFontSize
                    }
                },
                {
                    type: 'text',
                    left: '50%',
                    top: '20%',
                    z: 0,
                    cursor: 'default',
                    rotation: Math.PI * 0.125,
                    style: {
                        fill: 'rgb(188,188,188)',
                        text: waterMark,
                        font: waterMarkFontSize
                    }
                },
            ],
        };
        //debugger;
        return option;
    };
    EchartOptionService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], EchartOptionService);
    return EchartOptionService;
}());



/***/ }),

/***/ "./src/app/quality/quality-amc/quality-amc.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/quality/quality-amc/quality-amc.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g\">\n  <div class=\"ui-g-6\">\n    <app-amc #Child_HCL [currentUserName]=\"currentUserName\" [deviceType]=\"deviceType\" [dataType]=\"dataType[0]\"></app-amc>\n  </div>\n  <div class=\"ui-g-6\">\n    <app-amc #Child_HF [currentUserName]=\"currentUserName\" [deviceType]=\"deviceType\" [dataType]=\"dataType[1]\"></app-amc>\n  </div>\n  <div class=\"ui-g-6\">\n    <app-amc #Child_NH3 [currentUserName]=\"currentUserName\" [deviceType]=\"deviceType\" [dataType]=\"dataType[2]\"></app-amc>\n  </div>\n  <div class=\"ui-g-6\">\n    <app-amc #Child_NO [currentUserName]=\"currentUserName\" [deviceType]=\"deviceType\" [dataType]=\"dataType[3]\"></app-amc>\n  </div>\n  <div class=\"ui-g-6\">\n    <app-amc #Child_NO2 [currentUserName]=\"currentUserName\" [deviceType]=\"deviceType\" [dataType]=\"dataType[4]\"></app-amc>\n  </div>\n  <div class=\"ui-g-6\">\n    <app-amc #Child_TS [currentUserName]=\"currentUserName\" [deviceType]=\"deviceType\" [dataType]=\"dataType[5]\"></app-amc>\n  </div>\n\n</div>"

/***/ }),

/***/ "./src/app/quality/quality-amc/quality-amc.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QualityAmcComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__breadcrumb_service_breadcrumb_service__ = __webpack_require__("./src/core/layout/breadcrumb/service/breadcrumb.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_layout_retab_service_tab_service__ = __webpack_require__("./src/core/layout/retab/service/tab.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__chart_amc_amc_component__ = __webpack_require__("./src/app/quality/chart/amc/amc.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var QualityAmcComponent = /** @class */ (function () {
    function QualityAmcComponent(breadcrumbService, tService) {
        this.breadcrumbService = breadcrumbService;
        this.tService = tService;
        this.currentUserName = localStorage.getItem('currentUserName');
        this.deviceType = localStorage.getItem('deviceType');
        this.breadcrumbService.setItems([
            { label: '品质指标' },
            { label: 'AMC' },
        ]);
        this.tService.setItems('品质指标 AMC');
    }
    QualityAmcComponent.prototype.ngOnInit = function () {
        this.dataType = ['HCL', 'HF', 'NH3', 'NO', 'NO2', 'TS',];
        this.Child_HCL.start_Timer();
        this.Child_HF.start_Timer();
        this.Child_NH3.start_Timer();
        this.Child_NO.start_Timer();
        this.Child_NO2.start_Timer();
        this.Child_TS.start_Timer();
    };
    QualityAmcComponent.prototype.ngOnDestroy = function () {
        this.Child_HCL.clear_Timer();
        this.Child_HF.clear_Timer();
        this.Child_NH3.clear_Timer();
        this.Child_NO.clear_Timer();
        this.Child_NO2.clear_Timer();
        this.Child_TS.clear_Timer();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('Child_HCL'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__chart_amc_amc_component__["a" /* AmcComponent */])
    ], QualityAmcComponent.prototype, "Child_HCL", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('Child_HF'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__chart_amc_amc_component__["a" /* AmcComponent */])
    ], QualityAmcComponent.prototype, "Child_HF", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('Child_NH3'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__chart_amc_amc_component__["a" /* AmcComponent */])
    ], QualityAmcComponent.prototype, "Child_NH3", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('Child_NO'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__chart_amc_amc_component__["a" /* AmcComponent */])
    ], QualityAmcComponent.prototype, "Child_NO", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('Child_NO2'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__chart_amc_amc_component__["a" /* AmcComponent */])
    ], QualityAmcComponent.prototype, "Child_NO2", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('Child_TS'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__chart_amc_amc_component__["a" /* AmcComponent */])
    ], QualityAmcComponent.prototype, "Child_TS", void 0);
    QualityAmcComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-quality-amc',
            template: __webpack_require__("./src/app/quality/quality-amc/quality-amc.component.html"),
            styles: [__webpack_require__("./src/app/quality/quality-amc/quality-amc.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__breadcrumb_service_breadcrumb_service__["a" /* BreadcrumbService */], __WEBPACK_IMPORTED_MODULE_2_core_layout_retab_service_tab_service__["a" /* TabService */]])
    ], QualityAmcComponent);
    return QualityAmcComponent;
}());



/***/ }),

/***/ "./src/app/quality/quality-app/quality-app.component.css":
/***/ (function(module, exports) {

module.exports = ".tabSetting {\r\n    position: fixed;\r\n    right: 2%;\r\n    top: 9%;\r\n}\r\n\r\n\r\n/* 640px 手机 sm */\r\n\r\n\r\n@media screen and (max-width:40em){\r\n\r\n}\r\n\r\n\r\n/* 641px 平板 md*/\r\n\r\n\r\n@media screen and (min-width:40.063em){\r\n\r\n\r\n}\r\n\r\n\r\n/* 1025px lg 显示器*/\r\n\r\n\r\n@media screen and (min-width:64.063em){\r\n    .lg-tabSetting{\r\n        position: fixed;\r\n        right: 2%;\r\n        top: 11%;\r\n    }\r\n\r\n}\r\n\r\n\r\n/* 1441px xl 大电视*/\r\n\r\n\r\n@media screen and (min-width:90.063em){\r\n    .xl-tabSetting{\r\n        position: fixed;\r\n        right: 2%;\r\n        top: 8.5%;\r\n    }\r\n\r\n}"

/***/ }),

/***/ "./src/app/quality/quality-app/quality-app.component.html":
/***/ (function(module, exports) {

module.exports = "<p-tabView [activeIndex]=\"index\" (onChange)=\"onTabChange($event)\">\n  <p-tabPanel header=\"CUM\" leftIcon=\"pi pi-calendar\" *ngIf=\"items[0].display\">\n    <app-cum #CUM [shopName]=\"shopName\" [currentUserName]=\"currentUserName\" [deviceType]=\"deviceType\" [processType]=\"processType\"\n      [dataType]=\"items[0].dataType\"></app-cum>\n  </p-tabPanel>\n  <p-tabPanel header=\"Daily\" leftIcon=\"pi pi-inbox\" *ngIf=\"items[1].display\">\n    <app-daily #Daily [shopName]=\"shopName\" [currentUserName]=\"currentUserName\" [deviceType]=\"deviceType\" [processType]=\"processType\"\n      [dataType]=\"items[1].dataType\"></app-daily>\n  </p-tabPanel>\n  <p-tabPanel header=\"人员别\" leftIcon=\"pi pi-user\" rightIcon=\"pi pi-star\" *ngIf=\"items[2].display\">\n    <app-operator #OpDiffer [shopName]=\"shopName\" [currentUserName]=\"currentUserName\" [deviceType]=\"deviceType\"\n      [processType]=\"processType2\" [dataType]=\"items[2].dataType\"></app-operator>\n  </p-tabPanel>\n  <p-tabPanel header=\"Line别\" leftIcon=\"pi pi-user\" rightIcon=\"pi pi-star\" *ngIf=\"items[3].display\">\n    <app-qaline #Line [shopName]=\"shopName\" [currentUserName]=\"currentUserName\" [deviceType]=\"deviceType\" [processType]=\"processType2\"></app-qaline>\n  </p-tabPanel>\n</p-tabView>\n<!-- <button type=\"button\" pButton icon=\"fa fa-search\" (click)=\"showTabSetting()\" class=\"xl-tabSetting lg-tabSetting\"></button> -->\n\n<p-dialog header=\"Tab设置\" [(visible)]=\"display_Setting\" [responsive]=\"true\" showEffect=\"fade\" [modal]=\"true\" [width]=\"300\">\n  <div class=\"ui-g ui-fluid\">\n    <div class=\"ui-g-12\" *ngFor='let item of items'>\n      <div class=\"ui-g-6\">\n        <label for=\"{{item.header}}\"><strong>{{item.header}}</strong></label>\n      </div>\n      <div class=\"ui-g-3\">\n        <p-inputSwitch [(ngModel)]=item.display></p-inputSwitch>\n      </div>\n      <div class=\"ui-g-3\">\n        <span> {{item.display}}</span>\n      </div>\n    </div>\n  </div>\n</p-dialog>"

/***/ }),

/***/ "./src/app/quality/quality-app/quality-app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QualityAppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__breadcrumb_service_breadcrumb_service__ = __webpack_require__("./src/core/layout/breadcrumb/service/breadcrumb.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_layout_retab_service_tab_service__ = __webpack_require__("./src/core/layout/retab/service/tab.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__chart_cum_cum_component__ = __webpack_require__("./src/app/quality/chart/cum/cum.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__chart_daily_daily_component__ = __webpack_require__("./src/app/quality/chart/daily/daily.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__chart_operator_operator_component__ = __webpack_require__("./src/app/quality/chart/operator/operator.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__chart_qaline_qaline_component__ = __webpack_require__("./src/app/quality/chart/qaline/qaline.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var QualityAppComponent = /** @class */ (function () {
    function QualityAppComponent(breadcrumbService, tService) {
        this.breadcrumbService = breadcrumbService;
        this.tService = tService;
        this.index = 2;
        this.display_Setting = false;
        this.currentUserName = localStorage.getItem('currentUserName');
        this.deviceType = localStorage.getItem('deviceType');
        this.lineName = '-';
        this.shopName = 'MODULE';
        this.msgs = [];
        this.processType = 'M72000N';
        this.processType2 = 'OQAAPP';
        this.breadcrumbService.setItems([
            { label: '品质指标' },
            { label: 'APP' },
        ]);
        this.tService.setItems('品质指标 APP');
    }
    QualityAppComponent.prototype.ngOnInit = function () {
        this.display = [true, true, true, true, true, true, true, true, true, true];
        this.items = [
            { header: 'CUM', display: true, selected: false, dataType: 'CUM' },
            { header: 'DAILY', display: true, selected: true, dataType: 'Daily' },
            { header: '人员别', display: true, selected: false, dataType: 'OPERATOR' },
            { header: 'Line别', display: true, selected: false },
        ];
    };
    QualityAppComponent.prototype.showTabSetting = function () {
        this.display_Setting = true;
    };
    QualityAppComponent.prototype.onTabChange = function (event) {
        switch (event.index) {
            case 0:
                this.CUM.start_Timer();
                this.Daily.clear_Timer();
                this.OpDiffer.clear_Timer();
                this.Line.clear_Timer();
                break;
            case 1:
                this.CUM.clear_Timer();
                this.Daily.start_Timer();
                this.OpDiffer.clear_Timer();
                this.Line.clear_Timer();
                break;
            case 2:
                this.CUM.clear_Timer();
                this.Daily.clear_Timer();
                this.OpDiffer.start_Timer();
                this.Line.clear_Timer();
                break;
            case 3:
                this.CUM.clear_Timer();
                this.Daily.clear_Timer();
                this.OpDiffer.clear_Timer();
                this.Line.start_Timer();
                break;
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('CUM'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__chart_cum_cum_component__["a" /* CumComponent */])
    ], QualityAppComponent.prototype, "CUM", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('Daily'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4__chart_daily_daily_component__["a" /* DailyComponent */])
    ], QualityAppComponent.prototype, "Daily", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('OpDiffer'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_5__chart_operator_operator_component__["a" /* OperatorComponent */])
    ], QualityAppComponent.prototype, "OpDiffer", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('Line'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_6__chart_qaline_qaline_component__["a" /* QalineComponent */])
    ], QualityAppComponent.prototype, "Line", void 0);
    QualityAppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-quality-app',
            template: __webpack_require__("./src/app/quality/quality-app/quality-app.component.html"),
            styles: [__webpack_require__("./src/app/quality/quality-app/quality-app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__breadcrumb_service_breadcrumb_service__["a" /* BreadcrumbService */], __WEBPACK_IMPORTED_MODULE_2_core_layout_retab_service_tab_service__["a" /* TabService */]])
    ], QualityAppComponent);
    return QualityAppComponent;
}());



/***/ }),

/***/ "./src/app/quality/quality-cg/quality-cg.component.css":
/***/ (function(module, exports) {

module.exports = ".tabSetting {\r\n    position: fixed;\r\n    right: 2%;\r\n    top: 9%;\r\n}\r\n\r\n\r\n/* 640px 手机 sm */\r\n\r\n\r\n@media screen and (max-width:40em){\r\n\r\n}\r\n\r\n\r\n/* 641px 平板 md*/\r\n\r\n\r\n@media screen and (min-width:40.063em){\r\n\r\n\r\n}\r\n\r\n\r\n/* 1025px lg 显示器*/\r\n\r\n\r\n@media screen and (min-width:64.063em){\r\n    .lg-tabSetting{\r\n        position: fixed;\r\n        right: 2%;\r\n        top: 11%;\r\n    }\r\n\r\n}\r\n\r\n\r\n/* 1441px xl 大电视*/\r\n\r\n\r\n@media screen and (min-width:90.063em){\r\n    .xl-tabSetting{\r\n        position: fixed;\r\n        right: 2%;\r\n        top: 8.5%;\r\n    }\r\n\r\n}"

/***/ }),

/***/ "./src/app/quality/quality-cg/quality-cg.component.html":
/***/ (function(module, exports) {

module.exports = "<p-tabView [activeIndex]=\"index\" (onChange)=\"onTabChange($event)\">\n  <p-tabPanel header=\"WIP/Move\" leftIcon=\"pi pi-calendar\" *ngIf=\"items[0].display\">\n    <app-cg1view #WipMove [currentUserName]=\"currentUserName\" [deviceType]=\"deviceType\" [dataType]=\"dataType[0]\"></app-cg1view>\n  </p-tabPanel>\n  <p-tabPanel header=\"CUM\" leftIcon=\"pi pi-inbox\" *ngIf=\"items[1].display\">\n    <app-cg1view #Cum [currentUserName]=\"currentUserName\" [deviceType]=\"deviceType\" [dataType]=\"dataType[1]\"></app-cg1view>\n  </p-tabPanel>\n  <p-tabPanel header=\"Yield\" leftIcon=\"pi pi-user\" rightIcon=\"pi pi-star\" *ngIf=\"items[2].display\">\n    <app-cg2view #Yield [currentUserName]=\"currentUserName\" [deviceType]=\"deviceType\" [dataType]=\"dataType[2]\"></app-cg2view>\n  </p-tabPanel>\n  <p-tabPanel header=\"DPPM/LRR\" leftIcon=\"pi pi-user\" rightIcon=\"pi pi-star\" *ngIf=\"items[3].display\">\n    <app-cg1view #DppmLrr [currentUserName]=\"currentUserName\" [deviceType]=\"deviceType\" [dataType]=\"dataType[3]\"></app-cg1view>\n  </p-tabPanel>\n  <p-tabPanel header=\"投入产出\" leftIcon=\"pi pi-user\" rightIcon=\"pi pi-star\" *ngIf=\"items[3].display\">\n    <app-cg1view #InputOutput [currentUserName]=\"currentUserName\" [deviceType]=\"deviceType\" [dataType]=\"dataType[4]\"></app-cg1view>\n  </p-tabPanel>\n  <p-tabPanel header=\"计划实绩\" leftIcon=\"pi pi-user\" rightIcon=\"pi pi-star\" *ngIf=\"items[3].display\">\n    <app-cg2view #ActPlan [currentUserName]=\"currentUserName\" [deviceType]=\"deviceType\" [dataType]=\"dataType[5]\"></app-cg2view>\n  </p-tabPanel>\n</p-tabView>\n<button type=\"button\" pButton icon=\"fa fa-search\" (click)=\"showTabSetting()\" class=\"xl-tabSetting lg-tabSetting\"></button>\n\n<p-dialog header=\"Tab设置\" [(visible)]=\"display_Setting\" [responsive]=\"true\" showEffect=\"fade\" [modal]=\"true\" [width]=\"300\">\n  <div class=\"ui-g ui-fluid\">\n    <div class=\"ui-g-12\" *ngFor='let item of items'>\n      <div class=\"ui-g-6\">\n        <label for=\"{{item.header}}\"><strong>{{item.header}}</strong></label>\n      </div>\n      <div class=\"ui-g-3\">\n        <p-inputSwitch [(ngModel)]=item.display></p-inputSwitch>\n      </div>\n      <div class=\"ui-g-3\">\n        <span> {{item.display}}</span>\n      </div>\n    </div>\n  </div>\n</p-dialog>"

/***/ }),

/***/ "./src/app/quality/quality-cg/quality-cg.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QualityCgComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__breadcrumb_service_breadcrumb_service__ = __webpack_require__("./src/core/layout/breadcrumb/service/breadcrumb.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_layout_retab_service_tab_service__ = __webpack_require__("./src/core/layout/retab/service/tab.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__chart_cg1view_cg1view_component__ = __webpack_require__("./src/app/quality/chart/cg1view/cg1view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__chart_cg2view_cg2view_component__ = __webpack_require__("./src/app/quality/chart/cg2view/cg2view.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var QualityCgComponent = /** @class */ (function () {
    function QualityCgComponent(breadcrumbService, tService) {
        this.breadcrumbService = breadcrumbService;
        this.tService = tService;
        this.index = 2;
        this.display_Setting = false;
        this.currentUserName = localStorage.getItem('currentUserName');
        this.deviceType = localStorage.getItem('deviceType');
        this.lineName = '-';
        this.shopName = 'MODULE';
        this.msgs = [];
        this.breadcrumbService.setItems([
            { label: '品质指标' },
            { label: 'CG' },
        ]);
        this.tService.setItems('品质指标 CG');
    }
    QualityCgComponent.prototype.ngOnInit = function () {
        this.display = [true, true, true, true, true, true, true, true, true, true];
        this.dataType = ['WIP/Move', 'CUM', 'Yield', 'DPPM/LRR', 'InputOutput', 'ActPlan'];
        this.items = [
            { header: 'WIP/Move', display: true, selected: false, dataType: 'CUM' },
            { header: 'CUM', display: true, selected: true, dataType: 'Daily' },
            { header: 'Yield', display: true, selected: false, dataType: 'OPERATOR' },
            { header: 'DPPM/LRR', display: true, selected: false },
            { header: '投入产出', display: true, selected: false },
            { header: '计划实绩', display: true, selected: false },
        ];
    };
    QualityCgComponent.prototype.showTabSetting = function () {
        this.display_Setting = true;
    };
    QualityCgComponent.prototype.onTabChange = function (event) {
        switch (event.index) {
            case 0:
                this.WipMove.start_Timer();
                this.Cum.clear_Timer();
                this.Yield.clear_Timer();
                this.DppmLrr.clear_Timer();
                this.InputOutput.clear_Timer();
                this.ActPlan.clear_Timer();
                break;
            case 1:
                this.WipMove.clear_Timer();
                this.Cum.start_Timer();
                this.Yield.clear_Timer();
                this.DppmLrr.clear_Timer();
                this.InputOutput.clear_Timer();
                this.ActPlan.clear_Timer();
                break;
            case 2:
                this.WipMove.clear_Timer();
                this.Cum.clear_Timer();
                this.Yield.start_Timer();
                this.DppmLrr.clear_Timer();
                this.InputOutput.clear_Timer();
                this.ActPlan.clear_Timer();
                break;
            case 3:
                this.WipMove.clear_Timer();
                this.Cum.clear_Timer();
                this.Yield.clear_Timer();
                this.DppmLrr.start_Timer();
                this.InputOutput.clear_Timer();
                this.ActPlan.clear_Timer();
                break;
            case 4:
                this.WipMove.clear_Timer();
                this.Cum.clear_Timer();
                this.Yield.clear_Timer();
                this.DppmLrr.clear_Timer();
                this.InputOutput.start_Timer();
                this.ActPlan.clear_Timer();
                break;
            case 5:
                this.WipMove.clear_Timer();
                this.Cum.clear_Timer();
                this.Yield.clear_Timer();
                this.DppmLrr.clear_Timer();
                this.InputOutput.clear_Timer();
                this.ActPlan.start_Timer();
                break;
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('WipMove'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__chart_cg1view_cg1view_component__["a" /* Cg1viewComponent */])
    ], QualityCgComponent.prototype, "WipMove", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('Cum'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__chart_cg1view_cg1view_component__["a" /* Cg1viewComponent */])
    ], QualityCgComponent.prototype, "Cum", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('Yield'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4__chart_cg2view_cg2view_component__["a" /* Cg2viewComponent */])
    ], QualityCgComponent.prototype, "Yield", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('DppmLrr'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__chart_cg1view_cg1view_component__["a" /* Cg1viewComponent */])
    ], QualityCgComponent.prototype, "DppmLrr", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('InputOutput'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__chart_cg1view_cg1view_component__["a" /* Cg1viewComponent */])
    ], QualityCgComponent.prototype, "InputOutput", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('ActPlan'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4__chart_cg2view_cg2view_component__["a" /* Cg2viewComponent */])
    ], QualityCgComponent.prototype, "ActPlan", void 0);
    QualityCgComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-quality-cg',
            template: __webpack_require__("./src/app/quality/quality-cg/quality-cg.component.html"),
            styles: [__webpack_require__("./src/app/quality/quality-cg/quality-cg.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__breadcrumb_service_breadcrumb_service__["a" /* BreadcrumbService */], __WEBPACK_IMPORTED_MODULE_2_core_layout_retab_service_tab_service__["a" /* TabService */]])
    ], QualityCgComponent);
    return QualityCgComponent;
}());



/***/ }),

/***/ "./src/app/quality/quality-et/quality-et.component.css":
/***/ (function(module, exports) {

module.exports = ".tabSetting {\r\n    position: fixed;\r\n    right: 2%;\r\n    top: 9%;\r\n}\r\n\r\n\r\n/* 640px 手机 sm */\r\n\r\n\r\n@media screen and (max-width:40em){\r\n\r\n}\r\n\r\n\r\n/* 641px 平板 md*/\r\n\r\n\r\n@media screen and (min-width:40.063em){\r\n\r\n\r\n}\r\n\r\n\r\n/* 1025px lg 显示器*/\r\n\r\n\r\n@media screen and (min-width:64.063em){\r\n    .lg-tabSetting{\r\n        position: fixed;\r\n        right: 2%;\r\n        top: 11%;\r\n    }\r\n\r\n}\r\n\r\n\r\n/* 1441px xl 大电视*/\r\n\r\n\r\n@media screen and (min-width:90.063em){\r\n    .xl-tabSetting{\r\n        position: fixed;\r\n        right: 2%;\r\n        top: 8.5%;\r\n    }\r\n\r\n}"

/***/ }),

/***/ "./src/app/quality/quality-et/quality-et.component.html":
/***/ (function(module, exports) {

module.exports = "<p-tabView [activeIndex]=\"index\" (onChange)=\"onTabChange($event)\">\n  <p-tabPanel header=\"CUM\" leftIcon=\"pi pi-calendar\" *ngIf=\"items[0].display\">\n    <app-cum #CUM [shopName]=\"shopName\" [currentUserName]=\"currentUserName\" [deviceType]=\"deviceType\" [processType]=\"processType\"\n      [dataType]=\"items[0].dataType\"></app-cum>\n  </p-tabPanel>\n  <p-tabPanel header=\"Daily\" leftIcon=\"pi pi-inbox\" *ngIf=\"items[1].display\">\n    <app-daily #Daily [shopName]=\"shopName\" [currentUserName]=\"currentUserName\" [deviceType]=\"deviceType\" [processType]=\"processType\"\n      [dataType]=\"items[1].dataType\"></app-daily>\n  </p-tabPanel>\n  <p-tabPanel header=\"人员别\" leftIcon=\"pi pi-user\" rightIcon=\"pi pi-star\" *ngIf=\"items[2].display\">\n    <app-operator #OpDiffer [shopName]=\"shopName\" [currentUserName]=\"currentUserName\" [deviceType]=\"deviceType\" [processType]=\"processType2\"\n      [dataType]=\"items[2].dataType\"></app-operator>\n  </p-tabPanel>\n  <p-tabPanel header=\"Line别\" leftIcon=\"pi pi-user\" rightIcon=\"pi pi-star\" *ngIf=\"items[3].display\">\n    <app-qaline #Line [shopName]=\"shopName\" [currentUserName]=\"currentUserName\" [deviceType]=\"deviceType\" [processType]=\"processType2\"></app-qaline>\n  </p-tabPanel>\n</p-tabView>\n<!-- <button type=\"button\" pButton icon=\"fa fa-search\" (click)=\"showTabSetting()\" class=\"xl-tabSetting lg-tabSetting\"></button> -->\n\n<p-dialog header=\"Tab设置\" [(visible)]=\"display_Setting\" [responsive]=\"true\" showEffect=\"fade\" [modal]=\"true\" [width]=\"300\">\n  <div class=\"ui-g ui-fluid\">\n    <div class=\"ui-g-12\" *ngFor='let item of items'>\n      <div class=\"ui-g-6\">\n        <label for=\"{{item.header}}\"><strong>{{item.header}}</strong></label>\n      </div>\n      <div class=\"ui-g-3\">\n        <p-inputSwitch [(ngModel)]=item.display></p-inputSwitch>\n      </div>\n      <div class=\"ui-g-3\">\n        <span> {{item.display}}</span>\n      </div>\n    </div>\n  </div>\n</p-dialog>"

/***/ }),

/***/ "./src/app/quality/quality-et/quality-et.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QualityEtComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__breadcrumb_service_breadcrumb_service__ = __webpack_require__("./src/core/layout/breadcrumb/service/breadcrumb.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_layout_retab_service_tab_service__ = __webpack_require__("./src/core/layout/retab/service/tab.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__chart_cum_cum_component__ = __webpack_require__("./src/app/quality/chart/cum/cum.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__chart_daily_daily_component__ = __webpack_require__("./src/app/quality/chart/daily/daily.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__chart_operator_operator_component__ = __webpack_require__("./src/app/quality/chart/operator/operator.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__chart_qaline_qaline_component__ = __webpack_require__("./src/app/quality/chart/qaline/qaline.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var QualityEtComponent = /** @class */ (function () {
    function QualityEtComponent(breadcrumbService, tService) {
        this.breadcrumbService = breadcrumbService;
        this.tService = tService;
        this.index = 2;
        this.display_Setting = false;
        this.currentUserName = localStorage.getItem('currentUserName');
        this.deviceType = localStorage.getItem('deviceType');
        this.lineName = '-';
        this.shopName = 'MODULE';
        this.msgs = [];
        this.processType = 'M71000N';
        this.processType2 = 'OQAET';
        this.breadcrumbService.setItems([
            { label: '品质指标' },
            { label: 'ET' },
        ]);
        this.tService.setItems('品质指标 ET');
    }
    QualityEtComponent.prototype.ngOnInit = function () {
        this.display = [true, true, true, true, true, true, true, true, true, true];
        this.items = [
            { header: 'CUM', display: true, selected: false, dataType: 'CUM' },
            { header: 'DAILY', display: true, selected: true, dataType: 'Daily' },
            { header: '人员别', display: true, selected: false, dataType: 'OPERATOR' },
            { header: 'Line别', display: true, selected: false },
        ];
    };
    QualityEtComponent.prototype.showTabSetting = function () {
        this.display_Setting = true;
    };
    QualityEtComponent.prototype.onTabChange = function (event) {
        switch (event.index) {
            case 0:
                this.CUM.start_Timer();
                this.Daily.clear_Timer();
                this.OpDiffer.clear_Timer();
                this.Line.clear_Timer();
                break;
            case 1:
                this.CUM.clear_Timer();
                this.Daily.start_Timer();
                this.OpDiffer.clear_Timer();
                this.Line.clear_Timer();
                break;
            case 2:
                this.CUM.clear_Timer();
                this.Daily.clear_Timer();
                this.OpDiffer.start_Timer();
                this.Line.clear_Timer();
                break;
            case 3:
                this.CUM.clear_Timer();
                this.Daily.clear_Timer();
                this.OpDiffer.clear_Timer();
                this.Line.start_Timer();
                break;
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('CUM'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__chart_cum_cum_component__["a" /* CumComponent */])
    ], QualityEtComponent.prototype, "CUM", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('Daily'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4__chart_daily_daily_component__["a" /* DailyComponent */])
    ], QualityEtComponent.prototype, "Daily", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('OpDiffer'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_5__chart_operator_operator_component__["a" /* OperatorComponent */])
    ], QualityEtComponent.prototype, "OpDiffer", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('Line'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_6__chart_qaline_qaline_component__["a" /* QalineComponent */])
    ], QualityEtComponent.prototype, "Line", void 0);
    QualityEtComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-quality-et',
            template: __webpack_require__("./src/app/quality/quality-et/quality-et.component.html"),
            styles: [__webpack_require__("./src/app/quality/quality-et/quality-et.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__breadcrumb_service_breadcrumb_service__["a" /* BreadcrumbService */], __WEBPACK_IMPORTED_MODULE_2_core_layout_retab_service_tab_service__["a" /* TabService */]])
    ], QualityEtComponent);
    return QualityEtComponent;
}());



/***/ }),

/***/ "./src/app/quality/quality-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QualityRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__quality_app_quality_app_component__ = __webpack_require__("./src/app/quality/quality-app/quality-app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__quality_et_quality_et_component__ = __webpack_require__("./src/app/quality/quality-et/quality-et.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__quality_cg_quality_cg_component__ = __webpack_require__("./src/app/quality/quality-cg/quality-cg.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__quality_amc_quality_amc_component__ = __webpack_require__("./src/app/quality/quality-amc/quality-amc.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: 'app',
        component: __WEBPACK_IMPORTED_MODULE_2__quality_app_quality_app_component__["a" /* QualityAppComponent */]
    },
    {
        path: 'et',
        component: __WEBPACK_IMPORTED_MODULE_3__quality_et_quality_et_component__["a" /* QualityEtComponent */]
    },
    {
        path: 'cg',
        component: __WEBPACK_IMPORTED_MODULE_4__quality_cg_quality_cg_component__["a" /* QualityCgComponent */]
    },
    {
        path: 'amc',
        component: __WEBPACK_IMPORTED_MODULE_5__quality_amc_quality_amc_component__["a" /* QualityAmcComponent */]
    }
];
var QualityRoutingModule = /** @class */ (function () {
    function QualityRoutingModule() {
    }
    QualityRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"]]
        })
    ], QualityRoutingModule);
    return QualityRoutingModule;
}());



/***/ }),

/***/ "./src/app/quality/quality.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QualityModule", function() { return QualityModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__quality_routing_module__ = __webpack_require__("./src/app/quality/quality-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__quality_app_quality_app_component__ = __webpack_require__("./src/app/quality/quality-app/quality-app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__quality_et_quality_et_component__ = __webpack_require__("./src/app/quality/quality-et/quality-et.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__quality_cg_quality_cg_component__ = __webpack_require__("./src/app/quality/quality-cg/quality-cg.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__quality_amc_quality_amc_component__ = __webpack_require__("./src/app/quality/quality-amc/quality-amc.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__chart_cum_cum_component__ = __webpack_require__("./src/app/quality/chart/cum/cum.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__chart_daily_daily_component__ = __webpack_require__("./src/app/quality/chart/daily/daily.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__chart_operator_operator_component__ = __webpack_require__("./src/app/quality/chart/operator/operator.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__chart_amc_amc_component__ = __webpack_require__("./src/app/quality/chart/amc/amc.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ngx_echarts__ = __webpack_require__("./node_modules/ngx-echarts/ngx-echarts.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_primeng_panel__ = __webpack_require__("./node_modules/primeng/panel.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_primeng_panel___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_primeng_panel__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_primeng_tabview__ = __webpack_require__("./node_modules/primeng/tabview.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_primeng_tabview___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_primeng_tabview__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_primeng_primeng__ = __webpack_require__("./node_modules/primeng/primeng.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_primeng_primeng__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__common_echart_option_service__ = __webpack_require__("./src/app/quality/common/echart-option.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_primeng_table__ = __webpack_require__("./node_modules/primeng/table.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_primeng_table___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_17_primeng_table__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_app_common_service_datetime_service__ = __webpack_require__("./src/app/common/service/datetime.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__chart_qaline_qaline_component__ = __webpack_require__("./src/app/quality/chart/qaline/qaline.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__chart_cg1view_cg1view_component__ = __webpack_require__("./src/app/quality/chart/cg1view/cg1view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__chart_cg2view_cg2view_component__ = __webpack_require__("./src/app/quality/chart/cg2view/cg2view.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















var QualityModule = /** @class */ (function () {
    function QualityModule() {
    }
    QualityModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__quality_routing_module__["a" /* QualityRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_11_ngx_echarts__["a" /* NgxEchartsModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_13_primeng_panel__["PanelModule"],
                __WEBPACK_IMPORTED_MODULE_14_primeng_tabview__["TabViewModule"],
                __WEBPACK_IMPORTED_MODULE_15_primeng_primeng__["RadioButtonModule"],
                __WEBPACK_IMPORTED_MODULE_15_primeng_primeng__["CardModule"],
                __WEBPACK_IMPORTED_MODULE_15_primeng_primeng__["ScrollPanelModule"],
                __WEBPACK_IMPORTED_MODULE_15_primeng_primeng__["GrowlModule"],
                __WEBPACK_IMPORTED_MODULE_15_primeng_primeng__["SplitButtonModule"],
                __WEBPACK_IMPORTED_MODULE_15_primeng_primeng__["DialogModule"],
                __WEBPACK_IMPORTED_MODULE_15_primeng_primeng__["InputSwitchModule"],
                __WEBPACK_IMPORTED_MODULE_17_primeng_table__["TableModule"],
                __WEBPACK_IMPORTED_MODULE_15_primeng_primeng__["CalendarModule"]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__quality_app_quality_app_component__["a" /* QualityAppComponent */],
                __WEBPACK_IMPORTED_MODULE_4__quality_et_quality_et_component__["a" /* QualityEtComponent */],
                __WEBPACK_IMPORTED_MODULE_5__quality_cg_quality_cg_component__["a" /* QualityCgComponent */],
                __WEBPACK_IMPORTED_MODULE_6__quality_amc_quality_amc_component__["a" /* QualityAmcComponent */],
                __WEBPACK_IMPORTED_MODULE_7__chart_cum_cum_component__["a" /* CumComponent */],
                __WEBPACK_IMPORTED_MODULE_8__chart_daily_daily_component__["a" /* DailyComponent */],
                __WEBPACK_IMPORTED_MODULE_9__chart_operator_operator_component__["a" /* OperatorComponent */],
                __WEBPACK_IMPORTED_MODULE_10__chart_amc_amc_component__["a" /* AmcComponent */], __WEBPACK_IMPORTED_MODULE_19__chart_qaline_qaline_component__["a" /* QalineComponent */], __WEBPACK_IMPORTED_MODULE_20__chart_cg1view_cg1view_component__["a" /* Cg1viewComponent */], __WEBPACK_IMPORTED_MODULE_21__chart_cg2view_cg2view_component__["a" /* Cg2viewComponent */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_16__common_echart_option_service__["a" /* EchartOptionService */], __WEBPACK_IMPORTED_MODULE_18_app_common_service_datetime_service__["a" /* DatetimeService */]]
        })
    ], QualityModule);
    return QualityModule;
}());



/***/ })

});
//# sourceMappingURL=quality.module.chunk.js.map