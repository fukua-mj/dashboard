webpackJsonp(["cycletime.module"],{

/***/ "./src/app/cycletime/common/chart/cycletime/cycletime.component.css":
/***/ (function(module, exports) {

module.exports = ".chartArea-12{\r\n    height: 700px;\r\n    border-right: 0;\r\n    border-bottom: 0;\r\n}\r\n.chartArea{\r\n    height: 700px;\r\n}\r\n.productionTypeArea {\r\n    height: 300px;\r\n}\r\n.productionCategoryArea {\r\n    height: 400px;\r\n}\r\nul {\r\n    list-style-type: none;\r\n}\r\n/* 640px 手机 sm */\r\n@media screen and (max-width:40em){\r\n    .sm-chartArea-12{\r\n        height: 401px;\r\n        border-right: 0;\r\n        border-bottom: 0;\r\n    }\r\n    .sm-chartArea{\r\n        height: 300px;\r\n        border-bottom: 1px solid rgba(167, 165, 165, 0.795);\r\n    }\r\n    .title{\r\n        font-size: 1.3em;\r\n        text-align: center;\r\n        border-bottom: 1px solid rgba(167, 165, 165, 0.795);\r\n    }\r\n    .sm-productionTypeArea {\r\n        margin: 0 0 0 0;\r\n        height: 214px;\r\n    }\r\n    .sm-productionTypeLi {\r\n        line-height:2.5;\r\n        margin: 0 0 0 -30px;\r\n    }\r\n    .sm-productionCategoryArea {\r\n        margin: 0 0 0 0;\r\n        height: 214px;\r\n    } \r\n}\r\n/* 641px 平板 md*/\r\n@media screen and (min-width:40.063em){\r\n    .md-chartArea-12{\r\n        height: 829px;\r\n        border-right: 0;\r\n        border-bottom: 0;\r\n    }\r\n    .md-chartArea{\r\n        height: 600px;\r\n        border-bottom: 1px solid rgba(167, 165, 165, 0.795);\r\n    }\r\n    .title{\r\n        font-size: 1.3em;\r\n        text-align: center;\r\n        border-bottom: 1px solid rgba(167, 165, 165, 0.795);\r\n    }\r\n    .md-productionTypeArea {\r\n        margin: 0 0 0 0;\r\n        height: 214px;\r\n    }\r\n    .md-productionTypeLi {\r\n        line-height:2.5;\r\n        margin: 0 0 0 -30px;\r\n    }\r\n    .md-productionCategoryArea {\r\n        margin: 0 0 0 0;\r\n        height: 214px;\r\n    } \r\n\r\n}\r\n/* 1025px lg 显示器*/\r\n@media screen and (min-width:64.063em){\r\n    .lg-chartArea{\r\n        height: 640px;\r\n        border-right: 1px solid rgba(167, 165, 165, 0.795);\r\n        border-bottom: 0;\r\n    }\r\n    .lg-title{\r\n        font-size: 1.0em;\r\n        text-align: center;\r\n        border-bottom: 1px solid rgba(167, 165, 165, 0.795);\r\n    }\r\n    .lg-productionTypeArea {\r\n        margin: -7px 0 0 0;\r\n        height: 240px;\r\n    }\r\n    .lg-productionTypeLi {\r\n        line-height:1.8;\r\n        font-size: 14px;\r\n        margin: 0 0 0 -30px;\r\n    }\r\n    .lg-productionCategoryArea {\r\n        margin: 7px 0 0 0;\r\n        height: 370px;\r\n    } \r\n    .lg-productionCategoryArea .optionul {\r\n        height: 350px;\r\n        overflow-x: hidden;\r\n        overflow-y: scroll;\r\n    }\r\n    .lg-productionCategoryArea .optionul::-webkit-scrollbar {\r\n        display: none;\r\n        width: 6px;\r\n    }\r\n    .lg-productionCategoryArea .optionul:hover::-webkit-scrollbar {\r\n        display: inline-block;\r\n    }\r\n    .lg-productionCategoryArea .optionul::-webkit-scrollbar-thumb {/*滚动条里面小方块*/\r\n        border-radius: 10px;\r\n         -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);\r\n        background: #535353;\r\n    }\r\n    .lg-productionCategoryArea .optionul::-webkit-scrollbar-track {/*滚动条里面轨道*/\r\n        -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);\r\n        border-radius: 10px;\r\n        background: #EDEDED;\r\n    }\r\n}\r\n/* 1441px xl 大电视*/\r\n@media screen and (min-width:90.063em){\r\n    .xl-chartArea{\r\n        height: 860px;\r\n        border-right: 1px solid rgba(167, 165, 165, 0.795);\r\n        border-bottom: 0;\r\n    }\r\n    .xl-title{\r\n        font-size: 1.3em;\r\n        text-align: center;\r\n        border-bottom: 1px solid rgba(167, 165, 165, 0.795);\r\n    }\r\n    .xl-productionTypeArea {\r\n        margin: -7px 0 0 0;\r\n        height: 350px;\r\n    }\r\n    .xl-productionTypeLi {\r\n        line-height:2.5;\r\n        font-size: 17px;\r\n        margin: 0 0 0 -30px;\r\n    }\r\n    .xl-productionCategoryArea {\r\n        margin: 7px 0 0 0;\r\n        height: 470px;\r\n    }    \r\n    .xl-productionCategoryArea .optionul {\r\n        height: 440px;\r\n        overflow-x: hidden;\r\n        overflow-y: scroll;\r\n    }\r\n    .xl-productionCategoryArea .optionul::-webkit-scrollbar {\r\n        display: none;\r\n        width: 10px;\r\n    }\r\n    .xl-productionCategoryArea .optionul:hover::-webkit-scrollbar {\r\n        display: inline-block;\r\n    }\r\n    .xl-productionCategoryArea .optionul::-webkit-scrollbar-thumb {/*滚动条里面小方块*/\r\n        border-radius: 10px;\r\n         -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);\r\n        background: #535353;\r\n    }\r\n    .xl-productionCategoryArea .optionul::-webkit-scrollbar-track {/*滚动条里面轨道*/\r\n        -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);\r\n        border-radius: 10px;\r\n        background: #EDEDED;\r\n    }\r\n}"

/***/ }),

/***/ "./src/app/cycletime/common/chart/cycletime/cycletime.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g\">\n  <div echarts [options]=\"echartOption\" class=\"ui-g-10 ui-lg-10 ui-xl-10 ui-md-12 ui-sm-12 chartArea xl-chartArea md-chartArea lg-chartArea sm-chartArea\"></div>\n  <div class=\"ui-g-2 ui-lg-2 ui-xl-2 ui-md-12 ui-sm-12\">\n    <div class=\"ui-g-12 ui-lg-12 ui-xl-12 ui-md-6 ui-sm-6 productionTypeArea xl-productionTypeArea md-productionTypeArea lg-productionTypeArea sm-productionTypeArea\">\n      <div class=\"xl-title lg-title\"><strong>产品阶段</strong></div>\n      <ul class=\"optionul\">\n        <li class=\"productionTypeLi xl-productionTypeLi md-productionTypeLi lg-productionTypeLi sm-productionTypeLi\">\n          <p-radioButton name=\"ProductionType+{{shopName}}\" value=\"Production\" label=\"正式量产\" [(ngModel)]=\"selectedProductionType\"\n            inputId=\"productionType1\" (click)=\"productionTypeClicked()\"></p-radioButton>\n        </li>\n        <li class=\"productionTypeLi xl-productionTypeLi md-productionTypeLi lg-productionTypeLi sm-productionTypeLi\">\n          <p-radioButton name=\"ProductionType+{{shopName}}\" value=\"TPCN\" label=\"TPCN\" [(ngModel)]=\"selectedProductionType\"\n            inputId=\"productionType2\" (click)=\"productionTypeClicked()\"></p-radioButton>\n        </li>\n        <li class=\"productionTypeLi xl-productionTypeLi md-productionTypeLi lg-productionTypeLi sm-productionTypeLi\">\n          <p-radioButton name=\"ProductionType+{{shopName}}\" value=\"Develop\" label=\"客户送样\" [(ngModel)]=\"selectedProductionType\"\n            inputId=\"productionType3\" (click)=\"productionTypeClicked()\"></p-radioButton>\n        </li>\n        <li class=\"productionTypeLi xl-productionTypeLi md-productionTypeLi lg-productionTypeLi sm-productionTypeLi\">\n          <p-radioButton name=\"ProductionType+{{shopName}}\" value=\"Engineer\" label=\"工程验证\" [(ngModel)]=\"selectedProductionType\"\n            inputId=\"productionType4\" (click)=\"productionTypeClicked()\"></p-radioButton>\n        </li>\n        <li class=\"productionTypeLi xl-productionTypeLi md-productionTypeLi lg-productionTypeLi sm-productionTypeLi\">\n          <p-radioButton name=\"ProductionType+{{shopName}}\" value=\"PV\" label=\"PV\" [(ngModel)]=\"selectedProductionType\"\n            inputId=\"productionType5\" (click)=\"productionTypeClicked()\"></p-radioButton>\n        </li>\n        <li class=\"productionTypeLi xl-productionTypeLi md-productionTypeLi lg-productionTypeLi sm-productionTypeLi\">\n          <p-radioButton name=\"ProductionType+{{shopName}}\" value=\"ALL MP TYPE\" label=\"ALL\" [(ngModel)]=\"selectedProductionType\"\n            inputId=\"productionType6\" (click)=\"productionTypeClicked()\"></p-radioButton>\n        </li>\n      </ul>\n    </div>\n    <div class=\"ui-g-12 ui-lg-12 ui-xl-12 ui-md-6 ui-sm-6 productionCategoryArea xl-productionCategoryArea md-productionCategoryArea lg-productionCategoryArea sm-productionCategoryArea\">\n      <div class=\"xl-title lg-title\"><strong>产品类型</strong></div>\n      <ul class=\"optionul\">\n        <li *ngFor=\"let item of productCategory\" class=\"productionTypeLi xl-productionTypeLi md-productionTypeLi lg-productionTypeLi sm-productionTypeLi\">\n          <p-radioButton name=\"ProductCategory+{{shopName}}\" value=\"{{item}}\" label=\"{{item}}\" [(ngModel)]=\"selectedProductionCategory\"\n            inputId=\"productCategory+{{shopName}}+ {{item}}\" (click)=\"drawChart()\"></p-radioButton>\n        </li>\n      </ul>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/cycletime/common/chart/cycletime/cycletime.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CycletimeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_production_common_model_yieldParam__ = __webpack_require__("./src/app/production/common/model/yieldParam.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_common_service_api_api_service__ = __webpack_require__("./src/app/common/service/api/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__echartoption_service__ = __webpack_require__("./src/app/cycletime/common/echartoption.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CycletimeComponent = /** @class */ (function () {
    function CycletimeComponent(httpService, echartService) {
        this.httpService = httpService;
        this.echartService = echartService;
        this.currentUserName = '';
        this.deviceType = '';
        this.shopName = '';
        this.selectedProductionType = 'Production';
        this.selectedProductionCategory = '';
        this.chartParam = new __WEBPACK_IMPORTED_MODULE_1_app_production_common_model_yieldParam__["a" /* YieldParam */]();
    }
    CycletimeComponent.prototype.ngOnInit = function () {
        this.getProductCategory();
    };
    CycletimeComponent.prototype.getProductCategory = function () {
        var _this = this;
        var options = {
            params: {
                shopName: this.shopName,
                productionType: this.selectedProductionType,
            }
        };
        var url;
        url = '/echart/cycletime/getCycleTimeProductCategory';
        this.httpService.get(url, options).subscribe(function (res) {
            _this.productCategory = res;
            _this.selectedProductionCategory = _this.productCategory[0];
            _this.drawChart();
        }, function (error) { console.log(error); });
    };
    CycletimeComponent.prototype.productionTypeClicked = function () {
        this.getProductCategory();
    };
    CycletimeComponent.prototype.drawChart = function () {
        var _this = this;
        this.chartParam.productCategory = this.selectedProductionCategory;
        this.chartParam.productionType = this.selectedProductionType;
        this.chartParam.shopName = this.shopName;
        this.chartParam.deviceType = this.deviceType;
        var nowDate = new Date();
        var currentTime = nowDate.toLocaleString();
        this.waterMark = 'BOECD Confidential@' + this.currentUserName + '\n' + currentTime + '@' + localStorage.getItem('currentIP');
        var url;
        url = '/echart/cycletime/getCycleTime';
        this.httpService.post(url, this.chartParam).subscribe(function (res) {
            _this.respText = res;
            console.log('this.waterMark:' + _this.waterMark);
            _this.echartOption = _this.echartService.getOption_CycleTime(_this.shopName + '分厂 CycleTime信息', _this.respText, _this.waterMark, _this.deviceType);
        }, function (error) {
            console.log(error);
        });
    };
    CycletimeComponent.prototype.start_Timer = function () {
        var _this = this;
        this.timer = setInterval(function () {
            _this.drawChart();
        }, 300000);
    };
    CycletimeComponent.prototype.clear_Timer = function () {
        if (this.timer) {
            clearInterval(this.timer);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], CycletimeComponent.prototype, "currentUserName", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], CycletimeComponent.prototype, "deviceType", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], CycletimeComponent.prototype, "shopName", void 0);
    CycletimeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-cycletime',
            template: __webpack_require__("./src/app/cycletime/common/chart/cycletime/cycletime.component.html"),
            styles: [__webpack_require__("./src/app/cycletime/common/chart/cycletime/cycletime.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_app_common_service_api_api_service__["a" /* ApiService */], __WEBPACK_IMPORTED_MODULE_3__echartoption_service__["a" /* EchartoptionService */]])
    ], CycletimeComponent);
    return CycletimeComponent;
}());



/***/ }),

/***/ "./src/app/cycletime/common/echartoption.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EchartoptionService; });
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

var EchartoptionService = /** @class */ (function () {
    function EchartoptionService() {
    }
    /**
   * yield
   * @param title
   * @param respText
   * @returns
   */
    EchartoptionService.prototype.getOption_CycleTime = function (title, respText, waterMark, deviceType) {
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
                        height: '82%'
                    }, {
                        x: '7%',
                        x2: '7%',
                        y2: '1.5%',
                        height: '3%'
                    }];
                legend = { width: '50%', left: '45%', top: '2%' };
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
                        height: '83%'
                    }, {
                        x: '7%',
                        x2: '7%',
                        y2: '1%',
                        height: '3%'
                    }];
                legend = { width: '65%', left: '35%', top: '2%' };
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
                                + obj.name + '：'
                                + '</div>'
                                + obj.seriesName + '：' + value[1] + '天' + '<br>';
                        }
                        if (obj.seriesType == "line") {
                            return '<div style="border-bottom: 1px solid rgba(255,255,255,.3); font-size: 18px;padding-bottom: 7px;margin-bottom: 7px">'
                                + obj.name + '：'
                                + '</div>'
                                + obj.seriesName + '：' + value[1] + '天' + '<br>';
                        }
                    }
                    /*else{
                      return '<div style="border-bottom: 1px solid rgba(255,255,255,.3); font-size: 18px;padding-bottom: 7px;margin-bottom: 7px">'
                        + '过货量：' + value[2] + '<br>'
                    }*/
                }
            },
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
                    name: 'Cycle Time / (Day)',
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
                },
                {
                    type: 'value',
                    gridIndex: 0,
                    name: '',
                    show: false
                }, {
                    type: 'value',
                    gridIndex: 1,
                    show: false,
                }
            ],
            color: ["#6423AA",
                "#FA4B32",
                "#8DACC1",
                "#61A0A8",
                "#B8C306",
                "#D48265",
                "#91C7AE",
                "#749F83",
                "#CA8622",
                "#2F9BC1",
                "#BDA29A",
                "#6E7074",
                "#546570",
                "#C4CCD3",
                "#005766",
                "#008B8B",
                "#00CDCD",
                "#00FF7F",
                "#228B22",
                "#2E8B57",
                "#4876FF",
                "#6CA6CD",
                "#698B22",
                "#6CA6CD",
                "#8B1A1A",
                "#7F3569",
                "#8B3626",
                "#8B4500",
                "#E9F16F",
                "#8B4789",
                "#8B5A2B",
                "#8B6508",
                "#8B7355",
                "#8CFFA1",
                "#B895D8",
                "#310D52",
                "#B0E2FF",
                "#8E8E19",
                "#0E123E",
                "#731941",
                "#CC9DBE",
                "#090831",
                "#9050C1",
                "#886838",
                "#6B4814",
                "#375A9A",
                "#32B323",
                "#1E92C7",
                "#C71E5C",
                "#AF1F5E"],
            grid: grid,
            series: eval('(' + respText.series + ')'),
            //水印增加
            graphic: [
                {
                    type: 'text',
                    left: '8%',
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
    EchartoptionService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], EchartoptionService);
    return EchartoptionService;
}());



/***/ }),

/***/ "./src/app/cycletime/cycletime-bp/cycletime-bp.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/cycletime/cycletime-bp/cycletime-bp.component.html":
/***/ (function(module, exports) {

module.exports = "<app-cycletime #Child_CycleTime [currentUserName]=\"currentUserName\" [deviceType]=\"deviceType\" [shopName]=\"shopName\">\n</app-cycletime>"

/***/ }),

/***/ "./src/app/cycletime/cycletime-bp/cycletime-bp.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CycletimeBpComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_common_service_api_api_service__ = __webpack_require__("./src/app/common/service/api/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_common_service_stringMethod_service__ = __webpack_require__("./src/app/common/service/stringMethod.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__breadcrumb_service_breadcrumb_service__ = __webpack_require__("./src/core/layout/breadcrumb/service/breadcrumb.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_layout_retab_service_tab_service__ = __webpack_require__("./src/core/layout/retab/service/tab.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__common_chart_cycletime_cycletime_component__ = __webpack_require__("./src/app/cycletime/common/chart/cycletime/cycletime.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var CycletimeBpComponent = /** @class */ (function () {
    function CycletimeBpComponent(httpService, location, stringMethod, breadcrumbService, tService) {
        this.httpService = httpService;
        this.location = location;
        this.stringMethod = stringMethod;
        this.breadcrumbService = breadcrumbService;
        this.tService = tService;
        this.index = 3;
        this.currentUserName = localStorage.getItem('currentUserName');
        this.deviceType = localStorage.getItem('deviceType');
        this.shopName = 'BP';
        this.msgs = [];
        this.breadcrumbService.setItems([
            { label: 'CycleTime' },
            { label: 'BP' },
        ]);
        this.tService.setItems('CycleTime-BP');
    }
    CycletimeBpComponent.prototype.ngOnInit = function () {
        this.display = [true, true, true, true];
        var locationUrl = '';
        for (var i in this.location) {
            if (i === 'location') {
                locationUrl = this.location[i].href;
                break;
            }
        }
        localStorage.setItem('viewHistory', this.stringMethod.viewHistoryMethod(localStorage.getItem('viewHistory'), locationUrl));
        this.Child_CycleTime.start_Timer();
    };
    CycletimeBpComponent.prototype.ngOnDestroy = function () {
        this.Child_CycleTime.clear_Timer();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('Child_CycleTime'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_6__common_chart_cycletime_cycletime_component__["a" /* CycletimeComponent */])
    ], CycletimeBpComponent.prototype, "Child_CycleTime", void 0);
    CycletimeBpComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-cycletime-bp',
            template: __webpack_require__("./src/app/cycletime/cycletime-bp/cycletime-bp.component.html"),
            styles: [__webpack_require__("./src/app/cycletime/cycletime-bp/cycletime-bp.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_app_common_service_api_api_service__["a" /* ApiService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["PlatformLocation"],
            __WEBPACK_IMPORTED_MODULE_3_app_common_service_stringMethod_service__["a" /* StringMethodService */],
            __WEBPACK_IMPORTED_MODULE_4__breadcrumb_service_breadcrumb_service__["a" /* BreadcrumbService */], __WEBPACK_IMPORTED_MODULE_5_core_layout_retab_service_tab_service__["a" /* TabService */]])
    ], CycletimeBpComponent);
    return CycletimeBpComponent;
}());



/***/ }),

/***/ "./src/app/cycletime/cycletime-eac/cycletime-eac.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/cycletime/cycletime-eac/cycletime-eac.component.html":
/***/ (function(module, exports) {

module.exports = "<app-cycletime #Child_CycleTime [currentUserName]=\"currentUserName\" [deviceType]=\"deviceType\" [shopName]=\"shopName\">\n</app-cycletime>\n"

/***/ }),

/***/ "./src/app/cycletime/cycletime-eac/cycletime-eac.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CycletimeEacComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_common_service_api_api_service__ = __webpack_require__("./src/app/common/service/api/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_common_service_stringMethod_service__ = __webpack_require__("./src/app/common/service/stringMethod.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__breadcrumb_service_breadcrumb_service__ = __webpack_require__("./src/core/layout/breadcrumb/service/breadcrumb.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_layout_retab_service_tab_service__ = __webpack_require__("./src/core/layout/retab/service/tab.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__common_chart_cycletime_cycletime_component__ = __webpack_require__("./src/app/cycletime/common/chart/cycletime/cycletime.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var CycletimeEacComponent = /** @class */ (function () {
    function CycletimeEacComponent(httpService, location, stringMethod, breadcrumbService, tService) {
        this.httpService = httpService;
        this.location = location;
        this.stringMethod = stringMethod;
        this.breadcrumbService = breadcrumbService;
        this.tService = tService;
        this.index = 3;
        this.currentUserName = localStorage.getItem('currentUserName');
        this.deviceType = localStorage.getItem('deviceType');
        this.shopName = 'EAC';
        this.msgs = [];
        this.breadcrumbService.setItems([
            { label: 'CycleTime' },
            { label: 'EAC' },
        ]);
        this.tService.setItems('CycleTime-EAC');
    }
    CycletimeEacComponent.prototype.ngOnInit = function () {
        this.display = [true, true, true, true];
        var locationUrl = '';
        for (var i in this.location) {
            if (i === 'location') {
                locationUrl = this.location[i].href;
                break;
            }
        }
        localStorage.setItem('viewHistory', this.stringMethod.viewHistoryMethod(localStorage.getItem('viewHistory'), locationUrl));
        this.Child_CycleTime.start_Timer();
    };
    CycletimeEacComponent.prototype.ngOnDestroy = function () {
        this.Child_CycleTime.clear_Timer();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('Child_CycleTime'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_6__common_chart_cycletime_cycletime_component__["a" /* CycletimeComponent */])
    ], CycletimeEacComponent.prototype, "Child_CycleTime", void 0);
    CycletimeEacComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-cycletime-eac',
            template: __webpack_require__("./src/app/cycletime/cycletime-eac/cycletime-eac.component.html"),
            styles: [__webpack_require__("./src/app/cycletime/cycletime-eac/cycletime-eac.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_app_common_service_api_api_service__["a" /* ApiService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["PlatformLocation"],
            __WEBPACK_IMPORTED_MODULE_3_app_common_service_stringMethod_service__["a" /* StringMethodService */],
            __WEBPACK_IMPORTED_MODULE_4__breadcrumb_service_breadcrumb_service__["a" /* BreadcrumbService */], __WEBPACK_IMPORTED_MODULE_5_core_layout_retab_service_tab_service__["a" /* TabService */]])
    ], CycletimeEacComponent);
    return CycletimeEacComponent;
}());



/***/ }),

/***/ "./src/app/cycletime/cycletime-even/cycletime-even.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/cycletime/cycletime-even/cycletime-even.component.html":
/***/ (function(module, exports) {

module.exports = "<app-cycletime #Child_CycleTime [currentUserName]=\"currentUserName\" [deviceType]=\"deviceType\" [shopName]=\"shopName\">\n</app-cycletime>"

/***/ }),

/***/ "./src/app/cycletime/cycletime-even/cycletime-even.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CycletimeEvenComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_chart_cycletime_cycletime_component__ = __webpack_require__("./src/app/cycletime/common/chart/cycletime/cycletime.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_common_service_api_api_service__ = __webpack_require__("./src/app/common/service/api/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_common_service_stringMethod_service__ = __webpack_require__("./src/app/common/service/stringMethod.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__breadcrumb_service_breadcrumb_service__ = __webpack_require__("./src/core/layout/breadcrumb/service/breadcrumb.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_layout_retab_service_tab_service__ = __webpack_require__("./src/core/layout/retab/service/tab.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var CycletimeEvenComponent = /** @class */ (function () {
    function CycletimeEvenComponent(httpService, location, stringMethod, breadcrumbService, tService) {
        this.httpService = httpService;
        this.location = location;
        this.stringMethod = stringMethod;
        this.breadcrumbService = breadcrumbService;
        this.tService = tService;
        this.index = 3;
        this.currentUserName = localStorage.getItem('currentUserName');
        this.deviceType = localStorage.getItem('deviceType');
        this.shopName = 'EVEN';
        this.msgs = [];
        this.breadcrumbService.setItems([
            { label: 'CycleTime' },
            { label: 'EVEN' },
        ]);
        this.tService.setItems('CycleTime-EVEN');
    }
    CycletimeEvenComponent.prototype.ngOnInit = function () {
        this.display = [true, true, true, true];
        var locationUrl = '';
        for (var i in this.location) {
            if (i === 'location') {
                locationUrl = this.location[i].href;
                break;
            }
        }
        localStorage.setItem('viewHistory', this.stringMethod.viewHistoryMethod(localStorage.getItem('viewHistory'), locationUrl));
        this.Child_CycleTime.start_Timer();
    };
    CycletimeEvenComponent.prototype.ngOnDestroy = function () {
        this.Child_CycleTime.clear_Timer();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('Child_CycleTime'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__common_chart_cycletime_cycletime_component__["a" /* CycletimeComponent */])
    ], CycletimeEvenComponent.prototype, "Child_CycleTime", void 0);
    CycletimeEvenComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-cycletime-even',
            template: __webpack_require__("./src/app/cycletime/cycletime-even/cycletime-even.component.html"),
            styles: [__webpack_require__("./src/app/cycletime/cycletime-even/cycletime-even.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_app_common_service_api_api_service__["a" /* ApiService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common__["PlatformLocation"],
            __WEBPACK_IMPORTED_MODULE_4_app_common_service_stringMethod_service__["a" /* StringMethodService */],
            __WEBPACK_IMPORTED_MODULE_5__breadcrumb_service_breadcrumb_service__["a" /* BreadcrumbService */], __WEBPACK_IMPORTED_MODULE_6_core_layout_retab_service_tab_service__["a" /* TabService */]])
    ], CycletimeEvenComponent);
    return CycletimeEvenComponent;
}());



/***/ }),

/***/ "./src/app/cycletime/cycletime-mdl/cycletime-mdl.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/cycletime/cycletime-mdl/cycletime-mdl.component.html":
/***/ (function(module, exports) {

module.exports = "<app-cycletime #Child_CycleTime [currentUserName]=\"currentUserName\" [deviceType]=\"deviceType\" [shopName]=\"shopName\">\n</app-cycletime>"

/***/ }),

/***/ "./src/app/cycletime/cycletime-mdl/cycletime-mdl.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CycletimeMdlComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_chart_cycletime_cycletime_component__ = __webpack_require__("./src/app/cycletime/common/chart/cycletime/cycletime.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_common_service_api_api_service__ = __webpack_require__("./src/app/common/service/api/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_common_service_stringMethod_service__ = __webpack_require__("./src/app/common/service/stringMethod.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__breadcrumb_service_breadcrumb_service__ = __webpack_require__("./src/core/layout/breadcrumb/service/breadcrumb.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_layout_retab_service_tab_service__ = __webpack_require__("./src/core/layout/retab/service/tab.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var CycletimeMdlComponent = /** @class */ (function () {
    function CycletimeMdlComponent(httpService, location, stringMethod, breadcrumbService, tService) {
        this.httpService = httpService;
        this.location = location;
        this.stringMethod = stringMethod;
        this.breadcrumbService = breadcrumbService;
        this.tService = tService;
        this.index = 3;
        this.currentUserName = localStorage.getItem('currentUserName');
        this.deviceType = localStorage.getItem('deviceType');
        this.shopName = 'MODULE';
        this.msgs = [];
        this.breadcrumbService.setItems([
            { label: 'CycleTime' },
            { label: 'MODULE' },
        ]);
        this.tService.setItems('CycleTime-MODULE');
    }
    CycletimeMdlComponent.prototype.ngOnInit = function () {
        this.display = [true, true, true, true];
        var locationUrl = '';
        for (var i in this.location) {
            if (i === 'location') {
                locationUrl = this.location[i].href;
                break;
            }
        }
        localStorage.setItem('viewHistory', this.stringMethod.viewHistoryMethod(localStorage.getItem('viewHistory'), locationUrl));
        this.Child_CycleTime.start_Timer();
    };
    CycletimeMdlComponent.prototype.ngOnDestroy = function () {
        this.Child_CycleTime.clear_Timer();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('Child_CycleTime'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__common_chart_cycletime_cycletime_component__["a" /* CycletimeComponent */])
    ], CycletimeMdlComponent.prototype, "Child_CycleTime", void 0);
    CycletimeMdlComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-cycletime-mdl',
            template: __webpack_require__("./src/app/cycletime/cycletime-mdl/cycletime-mdl.component.html"),
            styles: [__webpack_require__("./src/app/cycletime/cycletime-mdl/cycletime-mdl.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_app_common_service_api_api_service__["a" /* ApiService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common__["PlatformLocation"],
            __WEBPACK_IMPORTED_MODULE_4_app_common_service_stringMethod_service__["a" /* StringMethodService */],
            __WEBPACK_IMPORTED_MODULE_5__breadcrumb_service_breadcrumb_service__["a" /* BreadcrumbService */], __WEBPACK_IMPORTED_MODULE_6_core_layout_retab_service_tab_service__["a" /* TabService */]])
    ], CycletimeMdlComponent);
    return CycletimeMdlComponent;
}());



/***/ }),

/***/ "./src/app/cycletime/cycletime-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CycletimeRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cycletime_bp_cycletime_bp_component__ = __webpack_require__("./src/app/cycletime/cycletime-bp/cycletime-bp.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cycletime_even_cycletime_even_component__ = __webpack_require__("./src/app/cycletime/cycletime-even/cycletime-even.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__cycletime_eac_cycletime_eac_component__ = __webpack_require__("./src/app/cycletime/cycletime-eac/cycletime-eac.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__cycletime_mdl_cycletime_mdl_component__ = __webpack_require__("./src/app/cycletime/cycletime-mdl/cycletime-mdl.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: 'cycletime-bp',
        component: __WEBPACK_IMPORTED_MODULE_2__cycletime_bp_cycletime_bp_component__["a" /* CycletimeBpComponent */]
    },
    {
        path: 'cycletime-even',
        component: __WEBPACK_IMPORTED_MODULE_3__cycletime_even_cycletime_even_component__["a" /* CycletimeEvenComponent */]
    },
    {
        path: 'cycletime-eac',
        component: __WEBPACK_IMPORTED_MODULE_4__cycletime_eac_cycletime_eac_component__["a" /* CycletimeEacComponent */]
    },
    {
        path: 'cycletime-mdl',
        component: __WEBPACK_IMPORTED_MODULE_5__cycletime_mdl_cycletime_mdl_component__["a" /* CycletimeMdlComponent */]
    },
];
var CycletimeRoutingModule = /** @class */ (function () {
    function CycletimeRoutingModule() {
    }
    CycletimeRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"]]
        })
    ], CycletimeRoutingModule);
    return CycletimeRoutingModule;
}());



/***/ }),

/***/ "./src/app/cycletime/cycletime.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CycletimeModule", function() { return CycletimeModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cycletime_routing_module__ = __webpack_require__("./src/app/cycletime/cycletime-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cycletime_bp_cycletime_bp_component__ = __webpack_require__("./src/app/cycletime/cycletime-bp/cycletime-bp.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__cycletime_even_cycletime_even_component__ = __webpack_require__("./src/app/cycletime/cycletime-even/cycletime-even.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__cycletime_eac_cycletime_eac_component__ = __webpack_require__("./src/app/cycletime/cycletime-eac/cycletime-eac.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__cycletime_mdl_cycletime_mdl_component__ = __webpack_require__("./src/app/cycletime/cycletime-mdl/cycletime-mdl.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__common_chart_cycletime_cycletime_component__ = __webpack_require__("./src/app/cycletime/common/chart/cycletime/cycletime.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ngx_echarts__ = __webpack_require__("./node_modules/ngx-echarts/ngx-echarts.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_primeng_primeng__ = __webpack_require__("./node_modules/primeng/primeng.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_primeng_primeng__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__common_echartoption_service__ = __webpack_require__("./src/app/cycletime/common/echartoption.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_app_common_service_stringMethod_service__ = __webpack_require__("./src/app/common/service/stringMethod.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var CycletimeModule = /** @class */ (function () {
    function CycletimeModule() {
    }
    CycletimeModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__cycletime_routing_module__["a" /* CycletimeRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_8_ngx_echarts__["a" /* NgxEchartsModule */],
                __WEBPACK_IMPORTED_MODULE_9_primeng_primeng__["RadioButtonModule"],
                __WEBPACK_IMPORTED_MODULE_11__angular_forms__["FormsModule"]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__cycletime_bp_cycletime_bp_component__["a" /* CycletimeBpComponent */],
                __WEBPACK_IMPORTED_MODULE_4__cycletime_even_cycletime_even_component__["a" /* CycletimeEvenComponent */],
                __WEBPACK_IMPORTED_MODULE_5__cycletime_eac_cycletime_eac_component__["a" /* CycletimeEacComponent */],
                __WEBPACK_IMPORTED_MODULE_6__cycletime_mdl_cycletime_mdl_component__["a" /* CycletimeMdlComponent */],
                __WEBPACK_IMPORTED_MODULE_7__common_chart_cycletime_cycletime_component__["a" /* CycletimeComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_10__common_echartoption_service__["a" /* EchartoptionService */],
                __WEBPACK_IMPORTED_MODULE_12_app_common_service_stringMethod_service__["a" /* StringMethodService */]
            ]
        })
    ], CycletimeModule);
    return CycletimeModule;
}());



/***/ })

});
//# sourceMappingURL=cycletime.module.chunk.js.map