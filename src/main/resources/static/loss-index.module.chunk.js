webpackJsonp(["loss-index.module"],{

/***/ "./src/app/loss-index/loss-common/PanelLossChartService.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PanelLossChartService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var PanelLossChartService = /** @class */ (function () {
    function PanelLossChartService() {
    }
    PanelLossChartService.prototype.getOption_Losszhibiao = function (title, respText, waterMark) {
        var option = {
            title: [{
                    text: title,
                    //subtext:'     '+respText.today,
                    align: 'left',
                    left: '0%',
                    top: '0%',
                    //itemGap:25,
                    textStyle: {
                        fontFamily: '微软雅黑',
                        fontSize: '160%',
                    },
                },
                {
                    text: '过货量:',
                    left: '0%',
                    align: 'left',
                    bottom: '1%',
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
                            return '<div style="border-bottom: 1px solid rgba(255,255,255,.3); font-size: 15px;padding-bottom: 5px;margin-bottom: 5px">'
                                + obj.name + '：'
                                + '</div>'
                                + '<div style="font-size: 12px;">'
                                + obj.seriesName + ' Scarp数量：' + value[1] + '<br>'
                                + obj.seriesName + ' 报废率：' + value[2] + '%'
                                + '</div>';
                            //    + obj.seriesName+' AgingOut数量：' + value[3] +'<br>'
                        }
                        if (obj.seriesType == "line") {
                            return '<div style="border-bottom: 1px solid rgba(255,255,255,.3); font-size: 15px;padding-bottom: 5px;margin-bottom: 5px">'
                                + obj.name + '：'
                                + '</div>'
                                + '<div style="font-size: 12px;">'
                                + ' Scrap ' + obj.seriesName + "：" + value[1] + '%' + '<br>'
                                + ' Scrap数量：' + value[2] + '<br>'
                                + '</div>';
                            //+ obj.seriesName+' 等级数量：' + value[4] +'<br>'
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
                left: '22%',
                top: '5%',
                //图例排布
                width: '65%',
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
                            width: 3,
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
                            width: 4,
                        }
                    },
                    axisLabel: {
                        color: 'rgb(66,66,66)',
                        fontSize: '90%',
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
                    name: 'Scrap QTY',
                    nameTextStyle: {
                        fontSize: '90%',
                        fontFamily: '微软雅黑',
                        color: 'rgb(66,66,66)',
                    },
                    axisLabel: {
                        color: 'rgb(66,66,66)',
                        fontSize: '90%',
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
                            width: 3,
                            color: 'rgb(168,168,168)'
                        },
                        axisLabel: {
                            show: true,
                        },
                    },
                    //坐标轴刻度加粗
                    axisTick: {
                        length: 5,
                        lineStyle: {
                            width: 3,
                        }
                    },
                    splitNumber: 4,
                },
                {
                    type: 'value',
                    name: 'Ratio',
                    nameTextStyle: {
                        fontSize: '90%',
                        fontFamily: '微软雅黑',
                        color: 'rgb(66,66,66)',
                    },
                    axisLabel: {
                        formatter: '{value}%',
                        color: 'rgb(66,66,66)',
                        fontSize: '90%',
                        margin: '15',
                    },
                    axisLine: {
                        lineStyle: {
                            width: 3,
                            color: 'rgb(168,168,168)'
                        },
                        axisLabel: {
                            show: true,
                        },
                    },
                    //坐标轴刻度加粗
                    axisTick: {
                        length: 5,
                        lineStyle: {
                            width: 3,
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
            grid: [{
                    x: '7%',
                    x2: '7%',
                    y: '12%',
                    height: '75%'
                }, {
                    x: '7%',
                    x2: '7%',
                    y2: '2%',
                    height: '3%'
                }],
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
                        font: 'bold 20px Microsoft YaHei'
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
                        font: 'bold 20px Microsoft YaHei'
                    }
                },
            ],
        };
        return option;
    };
    PanelLossChartService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__node_modules_angular_core__["Injectable"])()
    ], PanelLossChartService);
    return PanelLossChartService;
}());



/***/ }),

/***/ "./src/app/loss-index/loss-common/loss-common.component.css":
/***/ (function(module, exports) {

module.exports = ".chartArea-12{\r\n    height: 700px;\r\n    border-right: 0;\r\n    border-bottom: 0;\r\n}\r\n.chartArea{\r\n    height: 700px;\r\n}\r\n.productionTypeArea {\r\n    height: 300px;\r\n}\r\n.productionCategoryArea {\r\n    height: 400px;\r\n}\r\nul {\r\n    list-style-type: none;\r\n}\r\n/* 640px 手机 sm */\r\n@media screen and (max-width:40em){\r\n    .sm-chartArea-12{\r\n        height: 401px;\r\n        border-right: 0;\r\n        border-bottom: 0;\r\n    }\r\n    .sm-chartArea{\r\n        height: 300px;\r\n        border-bottom: 1px solid rgba(167, 165, 165, 0.795);\r\n    }\r\n    .title{\r\n        font-size: 1.3em;\r\n        text-align: center;\r\n        border-bottom: 1px solid rgba(167, 165, 165, 0.795);\r\n    }\r\n    .sm-productionTypeArea {\r\n        margin: 0 0 0 0;\r\n        height: 214px;\r\n    }\r\n    .sm-productionTypeLi {\r\n        line-height:2.5;\r\n        margin: 0 0 0 -30px;\r\n    }\r\n    .sm-productionCategoryArea {\r\n        margin: 0 0 0 0;\r\n        height: 214px;\r\n    } \r\n}\r\n/* 641px 平板 md*/\r\n@media screen and (min-width:40.063em){\r\n    .md-chartArea-12{\r\n        height: 829px;\r\n        border-right: 0;\r\n        border-bottom: 0;\r\n    }\r\n    .md-chartArea{\r\n        height: 600px;\r\n        border-bottom: 1px solid rgba(167, 165, 165, 0.795);\r\n    }\r\n    .title{\r\n        font-size: 1.3em;\r\n        text-align: center;\r\n        border-bottom: 1px solid rgba(167, 165, 165, 0.795);\r\n    }\r\n    .md-productionTypeArea {\r\n        margin: 0 0 0 0;\r\n        height: 214px;\r\n    }\r\n    .md-productionTypeLi {\r\n        line-height:2.5;\r\n        margin: 0 0 0 -30px;\r\n    }\r\n    .md-productionCategoryArea {\r\n        margin: 0 0 0 0;\r\n        height: 214px;\r\n    } \r\n\r\n}\r\n/* 1025px lg 显示器*/\r\n@media screen and (min-width:64.063em){\r\n    .lg-chartArea-12{\r\n        height: 570px;\r\n        border-right: 0;\r\n        border-bottom: 0;\r\n    }\r\n    .lg-chartArea{\r\n        height: 640px;\r\n        border-right: 1px solid rgba(167, 165, 165, 0.795);\r\n        border-bottom: 0;\r\n    }\r\n    .lg-title{\r\n        font-size: 1.0em;\r\n        text-align: center;\r\n        border-bottom: 1px solid rgba(167, 165, 165, 0.795);\r\n    }\r\n    .lg-productionTypeArea {\r\n        margin: -7px 0 0 0;\r\n        height: 240px;\r\n    }\r\n    .lg-productionTypeLi {\r\n        line-height:1.8;\r\n        font-size: 14px;\r\n        margin: 0 0 0 -30px;\r\n    }\r\n    .lg-productionCategoryArea {\r\n        margin: 7px 0 0 0;\r\n        height: 303px;\r\n    } \r\n    .lg-productionCategoryArea .optionul {\r\n        height: 280px;\r\n        overflow-x: hidden;\r\n        overflow-y: scroll;\r\n    }\r\n    .lg-productionCategoryArea .optionul::-webkit-scrollbar {\r\n        display: none;\r\n        width: 6px;\r\n    }\r\n    .lg-productionCategoryArea .optionul:hover::-webkit-scrollbar {\r\n        display: inline-block;\r\n    }\r\n    .lg-productionCategoryArea .optionul::-webkit-scrollbar-thumb {/*滚动条里面小方块*/\r\n        border-radius: 10px;\r\n         -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);\r\n        background: #535353;\r\n    }\r\n    .lg-productionCategoryArea .optionul::-webkit-scrollbar-track {/*滚动条里面轨道*/\r\n        -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);\r\n        border-radius: 10px;\r\n        background: #EDEDED;\r\n    }\r\n}\r\n/* 1441px xl 大电视*/\r\n@media screen and (min-width:90.063em){\r\n    .xl-chartArea-12{\r\n        height: 890px;\r\n        border-right: 0;\r\n        border-bottom: 0;\r\n    }\r\n    .xl-chartArea{\r\n        height: 862px;\r\n        border-right: 1px solid rgba(167, 165, 165, 0.795);\r\n        border-bottom: 0;\r\n    }\r\n    .xl-title{\r\n        font-size: 1.3em;\r\n        text-align: center;\r\n        border-bottom: 1px solid rgba(167, 165, 165, 0.795);\r\n    }\r\n    .xl-productionTypeArea {\r\n        margin: -7px 0 0 0;\r\n        height: 300px;\r\n    }\r\n    .xl-productionTypeLi {\r\n        line-height:2.5;\r\n        font-size: 17px;\r\n        margin: 0 0 0 -30px;\r\n    }\r\n    .xl-productionCategoryArea {\r\n        margin: 7px 0 0 0;\r\n        height: 470px;\r\n    }    \r\n    .xl-productionCategoryArea .optionul {\r\n        height: 440px;\r\n        overflow-x: hidden;\r\n        overflow-y: scroll;\r\n    }\r\n    .xl-productionCategoryArea .optionul::-webkit-scrollbar {\r\n        display: none;\r\n        width: 10px;\r\n    }\r\n    .xl-productionCategoryArea .optionul:hover::-webkit-scrollbar {\r\n        display: inline-block;\r\n    }\r\n    .xl-productionCategoryArea .optionul::-webkit-scrollbar-thumb {/*滚动条里面小方块*/\r\n        border-radius: 10px;\r\n         -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);\r\n        background: #535353;\r\n    }\r\n    .xl-productionCategoryArea .optionul::-webkit-scrollbar-track {/*滚动条里面轨道*/\r\n        -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);\r\n        border-radius: 10px;\r\n        background: #EDEDED;\r\n    }\r\n}"

/***/ }),

/***/ "./src/app/loss-index/loss-common/loss-common.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g\">\n\n  <div id=\"PanelLoss\" echarts [options]=\"PanelLossOption\" class=\"ui-g-10 ui-lg-10 ui-xl-10 ui-md-12 ui-sm-12 chartArea xl-chartArea md-chartArea lg-chartArea sm-chartArea\"></div>\n  <div class=\"ui-g-2 ui-lg-2 ui-xl-2 ui-md-6 ui-sm-6 productionTypeArea xl-productionTypeArea md-productionTypeArea lg-productionTypeArea sm-productionTypeArea\">\n    <div class=\"xl-title lg-title\"><strong>产品类型</strong></div>\n     <ul class=\"optionul\">\n       <li *ngFor=\"let ProductType of ProductionTypes\" class=\"productionTypeLi xl-productionTypeLi md-productionTypeLi lg-productionTypeLi sm-productionTypeLi\">\n         <p-radioButton value=\"{{ProductType.value}}\" label=\"{{ProductType.label}}\" [(ngModel)]=\"SelectProductType\" (click)=\"getProductionCategotry()\" inputId=\"Input+{{ProductType.label}}\">\n         </p-radioButton>\n       </li>\n     </ul>\n  </div>\n   <div class=\"ui-g-2 ui-lg-2 ui-xl-2 ui-md-6 ui-sm-6 productionCategoryArea xl-productionCategoryArea md-productionCategoryArea lg-productionCategoryArea sm-productionCategoryArea\">\n     <div class=\"xl-title lg-title\"><strong>产品型号</strong></div>\n       <div class=\"optionul\" *ngIf=\"isVisitable\">\n          <ul *ngFor=\"let item of ProductCategory\" class=\"productionTypeLi xl-productionTypeLi md-productionTypeLi lg-productionTypeLi sm-productionTypeLi\">\n              <p-radioButton value=\"{{item}}\" label=\"{{item}}\" [(ngModel)]=\"SelectProductCategory\" (click)=\"DrawPanelLossChart()\" inputId=\"{{item}}\">\n              </p-radioButton>\n          </ul>\n       </div>\n   </div>\n\n</div>"

/***/ }),

/***/ "./src/app/loss-index/loss-common/loss-common.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LossCommonComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_service_api_api_service__ = __webpack_require__("./src/app/common/service/api/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__production_common_model_yieldParam__ = __webpack_require__("./src/app/production/common/model/yieldParam.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__PanelLossChartService__ = __webpack_require__("./src/app/loss-index/loss-common/PanelLossChartService.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LossCommonComponent = /** @class */ (function () {
    function LossCommonComponent(httpService, ChartService) {
        this.httpService = httpService;
        this.ChartService = ChartService;
        this.YieldParams = new __WEBPACK_IMPORTED_MODULE_2__production_common_model_yieldParam__["a" /* YieldParam */]();
    }
    LossCommonComponent.prototype.ngOnInit = function () {
        var nowDate = new Date();
        var currentTime = nowDate.toLocaleString();
        this.waterMark = 'BOECD Confidential@' + localStorage.getItem('currentUserName') + '\n' + currentTime + '@' + localStorage.getItem('currentIP');
        this.isVisitable = true;
        this.SelectProductType = "Production";
        this.getProductionCategotry();
        this.task_DrawChart();
    };
    LossCommonComponent.prototype.ngOnDestroy = function () {
        clearInterval(this.timer);
    };
    LossCommonComponent.prototype.getProductionCategotry = function () {
        var _this = this;
        if (this.SelectProductType == "ALL TYPE") {
            this.isVisitable = false;
        }
        else {
            this.isVisitable = true;
        }
        this.YieldParams.shopName = "EAC";
        this.YieldParams.datatype = "LossCode";
        this.YieldParams.productionType = this.SelectProductType;
        this.httpService.post('/LossIndex/getPanelLossCategory', this.YieldParams).subscribe(function (res) {
            _this.respText = res;
            _this.ProductCategory = _this.respText;
            _this.SelectProductCategory = _this.ProductCategory[0];
            if (_this.ProductCategory.length == 0) {
                _this.PanelLossOption = _this.ChartService.getOption_Losszhibiao('Panel_Loss指标监控', "", _this.waterMark);
            }
            else {
                _this.DrawPanelLossChart();
            }
        }, function (error) {
        });
    };
    LossCommonComponent.prototype.DrawPanelLossChart = function () {
        var _this = this;
        this.YieldParams.shopName = "EAC";
        this.YieldParams.datatype = "LossCode";
        this.YieldParams.productionType = this.SelectProductType;
        this.YieldParams.productCategory = this.SelectProductCategory;
        this.httpService.post('/LossIndex/getPanelLossData', this.YieldParams).subscribe(function (res) {
            _this.respText = res;
            _this.PanelLossOption = _this.ChartService.getOption_Losszhibiao('Panel_Loss指标监控', _this.respText, _this.waterMark);
        }, function (error) {
        });
    };
    LossCommonComponent.prototype.task_DrawChart = function () {
        var _this = this;
        this.timer = setInterval(function () {
            _this.getProductionCategotry();
        }, 500000);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], LossCommonComponent.prototype, "ProductionTypes", void 0);
    LossCommonComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-loss-common',
            template: __webpack_require__("./src/app/loss-index/loss-common/loss-common.component.html"),
            styles: [__webpack_require__("./src/app/loss-index/loss-common/loss-common.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__common_service_api_api_service__["a" /* ApiService */],
            __WEBPACK_IMPORTED_MODULE_3__PanelLossChartService__["a" /* PanelLossChartService */]])
    ], LossCommonComponent);
    return LossCommonComponent;
}());



/***/ }),

/***/ "./src/app/loss-index/loss-index-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LossIndexRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__panel_loss_panel_loss_component__ = __webpack_require__("./src/app/loss-index/panel-loss/panel-loss.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [{
        path: 'PanelLoss',
        component: __WEBPACK_IMPORTED_MODULE_2__panel_loss_panel_loss_component__["a" /* PanelLossComponent */]
    }];
var LossIndexRoutingModule = /** @class */ (function () {
    function LossIndexRoutingModule() {
    }
    LossIndexRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"]]
        })
    ], LossIndexRoutingModule);
    return LossIndexRoutingModule;
}());



/***/ }),

/***/ "./src/app/loss-index/loss-index.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LossIndexModule", function() { return LossIndexModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__loss_index_routing_module__ = __webpack_require__("./src/app/loss-index/loss-index-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__panel_loss_panel_loss_component__ = __webpack_require__("./src/app/loss-index/panel-loss/panel-loss.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__loss_common_loss_common_component__ = __webpack_require__("./src/app/loss-index/loss-common/loss-common.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__node_modules_angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__node_modules_ngx_echarts__ = __webpack_require__("./node_modules/ngx-echarts/ngx-echarts.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__node_modules_primeng_tabview__ = __webpack_require__("./node_modules/primeng/tabview.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__node_modules_primeng_tabview___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__node_modules_primeng_tabview__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__loss_common_PanelLossChartService__ = __webpack_require__("./src/app/loss-index/loss-common/PanelLossChartService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__node_modules_primeng_primeng__ = __webpack_require__("./node_modules/primeng/primeng.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__node_modules_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__node_modules_primeng_primeng__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var LossIndexModule = /** @class */ (function () {
    function LossIndexModule() {
    }
    LossIndexModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__loss_index_routing_module__["a" /* LossIndexRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_5__node_modules_angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_6__node_modules_ngx_echarts__["a" /* NgxEchartsModule */],
                __WEBPACK_IMPORTED_MODULE_7__node_modules_primeng_tabview__["TabViewModule"],
                __WEBPACK_IMPORTED_MODULE_9__node_modules_primeng_primeng__["RadioButtonModule"]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__panel_loss_panel_loss_component__["a" /* PanelLossComponent */], __WEBPACK_IMPORTED_MODULE_4__loss_common_loss_common_component__["a" /* LossCommonComponent */]],
            providers: [__WEBPACK_IMPORTED_MODULE_8__loss_common_PanelLossChartService__["a" /* PanelLossChartService */]],
        })
    ], LossIndexModule);
    return LossIndexModule;
}());



/***/ }),

/***/ "./src/app/loss-index/panel-loss/panel-loss.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/loss-index/panel-loss/panel-loss.component.html":
/***/ (function(module, exports) {

module.exports = "<app-loss-common #Child_PanelLossComponent [ProductionTypes]=\"ProductionType\"></app-loss-common>\n"

/***/ }),

/***/ "./src/app/loss-index/panel-loss/panel-loss.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PanelLossComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__loss_common_loss_common_component__ = __webpack_require__("./src/app/loss-index/loss-common/loss-common.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_layout_retab_service_tab_service__ = __webpack_require__("./src/core/layout/retab/service/tab.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PanelLossComponent = /** @class */ (function () {
    function PanelLossComponent(Tservice) {
        this.Tservice = Tservice;
        Tservice.setItems("Panel Loss");
    }
    PanelLossComponent.prototype.ngOnInit = function () {
        this.ProductionType = [
            { value: "Production", label: "Production" },
            { value: "TPCN", label: "TPCN" },
            { value: "Develop", label: "Develop" },
            { value: "Engineer", label: "Engineer" },
            { value: "PV", label: "PV" },
            { value: "ALL TYPE", label: "ALL" },
        ];
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('Child_PanelLossComponent'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__loss_common_loss_common_component__["a" /* LossCommonComponent */])
    ], PanelLossComponent.prototype, "Child_PanelLossComponent", void 0);
    PanelLossComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-panel-loss',
            template: __webpack_require__("./src/app/loss-index/panel-loss/panel-loss.component.html"),
            styles: [__webpack_require__("./src/app/loss-index/panel-loss/panel-loss.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_core_layout_retab_service_tab_service__["a" /* TabService */]])
    ], PanelLossComponent);
    return PanelLossComponent;
}());



/***/ })

});
//# sourceMappingURL=loss-index.module.chunk.js.map