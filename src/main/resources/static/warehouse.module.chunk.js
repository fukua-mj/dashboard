webpackJsonp(["warehouse.module"],{

/***/ "./src/app/warehouse/common/echart-option.service.ts":
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
    EchartOptionService.prototype.getOption_warehouse = function (title, respText, waterMark, deviceType) {
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
                fontSize = '90%';
                titleFontSize = { main: '180%', sub: '100%' };
                axisWidth = 2;
                grid = {
                    x: '10%',
                    x2: '7%',
                    y: '12%',
                    height: '75%'
                };
                legend = { width: '60%', left: '33%', top: '3%' };
                waterMarkFontSize = 'bold 20px Microsoft YaHei';
                break;
            case 'tv':
                fontSize = '120%';
                titleFontSize = { main: '200%', sub: '120%' };
                axisWidth = 4;
                grid = {
                    x: '7%',
                    x2: '7%',
                    y: '12%',
                    height: '75%'
                };
                legend = { width: '71%', left: '26%', top: '3%' };
                waterMarkFontSize = 'bold 30px Microsoft YaHei';
                break;
        }
        var option = {
            title: {
                text: title,
                //subtext:'     '+respText.today,
                align: 'left',
                left: '0%',
                top: '1%',
                itemGap: 25,
                textStyle: {
                    fontFamily: '微软雅黑',
                    fontSize: titleFontSize.main,
                },
            },
            tooltip: {
                trigger: 'item',
                formatter: '{a} : {c}'
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
                selectedMode: true,
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
                        interval: '0',
                        lineStyle: {
                            width: axisWidth,
                        }
                    },
                    axisLabel: {
                        color: 'rgb(0,0,0)',
                        /*             fontSize: fontSize, */
                        rotate: 315,
                        margin: '15',
                        interval: '0',
                    }
                }
            ],
            yAxis: [
                {
                    type: 'value',
                    name: 'Inventory',
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
                            var i = value / 1000;
                            return i + 'K';
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
                }
            ],
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
                        font: waterMarkFontSize
                    }
                },
                {
                    type: 'text',
                    left: '40%',
                    top: '35%',
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
    EchartOptionService.prototype.getOption_warehouseGrade = function (title, respText, waterMark, deviceType) {
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
                fontSize = '90%';
                titleFontSize = { main: '140%', sub: '100%' };
                axisWidth = 3;
                grid = {
                    x: '10%',
                    x2: '7%',
                    y: '12%',
                    height: '75%'
                };
                legend = { width: '71%', left: '26%', top: '1%' };
                waterMarkFontSize = 'bold 20px Microsoft YaHei';
                break;
            case 'tv':
                fontSize = '120%';
                titleFontSize = { main: '150%', sub: '120%' };
                axisWidth = 4;
                grid = {
                    x: '7%',
                    x2: '7%',
                    y: '12%',
                    height: '75%'
                };
                legend = { width: '71%', left: '26%', top: '1%' };
                waterMarkFontSize = 'bold 30px Microsoft YaHei';
                break;
        }
        var option = {
            title: {
                text: title,
                subtext: eval('(' + respText.subTitle + ')'),
                itemGap: 25,
                top: '2%',
                left: '5%',
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
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            color: [
                "#277dc7",
                "#35cba1",
                "#ffc107",
                "#94cd1c"
            ],
            legend: {
                orient: 'horizontal',
                top: 'bottom',
                data: ['S', 'A', 'T', 'F'],
                selectedMode: false,
            },
            series: [
                {
                    name: '库存等级',
                    type: 'pie',
                    radius: '55%',
                    center: ['50%', '55%'],
                    //roseType: 'angle',
                    startAngle: 0,
                    data: eval('(' + respText.piedata1 + ')'),
                    itemStyle: {
                        emphasis: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    },
                    label: {
                        normal: {
                            formatter: ' {d}% ',
                        }
                    },
                }
            ],
            //水印增加
            graphic: [
                {
                    type: 'text',
                    left: '5%',
                    top: '0%',
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
    EchartOptionService.prototype.getOption_warehouseTime = function (title, respText, waterMark, deviceType) {
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
                fontSize = '90%';
                titleFontSize = { main: '140%', sub: '100%' };
                axisWidth = 3;
                grid = {
                    x: '10%',
                    x2: '7%',
                    y: '12%',
                    height: '75%'
                };
                legend = { width: '71%', left: '26%', top: '1%' };
                waterMarkFontSize = 'bold 20px Microsoft YaHei';
                break;
            case 'tv':
                fontSize = '120%';
                titleFontSize = { main: '150%', sub: '120%' };
                axisWidth = 4;
                grid = {
                    x: '7%',
                    x2: '7%',
                    y: '12%',
                    height: '75%'
                };
                legend = { width: '71%', left: '26%', top: '1%' };
                waterMarkFontSize = 'bold 30px Microsoft YaHei';
                break;
        }
        var option = {
            title: {
                text: title,
                subtext: eval('(' + respText.subTitle + ')'),
                itemGap: 25,
                top: '2%',
                left: '5%',
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
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            legend: {
                orient: 'horizontal',
                top: 'bottom',
                data: ['<30', '30<x<60', '60<x<90', '>90'],
                selectedMode: false,
            },
            color: [
                "#53a7e0",
                "#c39560",
                "#f1c40f",
                "#d14233"
            ],
            series: [
                {
                    name: '库龄',
                    type: 'pie',
                    radius: '55%',
                    center: ['50%', '55%'],
                    //roseType: 'angle',
                    startAngle: 0,
                    data: eval('(' + respText.piedata2 + ')'),
                    itemStyle: {
                        emphasis: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    },
                    label: {
                        normal: {
                            formatter: ' {d}% ',
                        }
                    },
                }
            ],
            //水印增加
            graphic: [
                {
                    type: 'text',
                    left: '5%',
                    top: '0%',
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
    EchartOptionService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], EchartOptionService);
    return EchartOptionService;
}());



/***/ }),

/***/ "./src/app/warehouse/common/warehouse-all/warehouse-all.component.css":
/***/ (function(module, exports) {

module.exports = ".chartArea-12{\r\n    height: 700px;\r\n    border-right: 0;\r\n    border-bottom: 0;\r\n}\r\n.chartArea{\r\n    height: 700px;\r\n}\r\n.productionTypeArea {\r\n    height: 300px;\r\n}\r\n.productionCategoryArea {\r\n    height: 400px;\r\n}\r\nul {\r\n    list-style-type: none;\r\n}\r\n/* 640px 手机 sm */\r\n@media screen and (max-width:40em){\r\n    .sm-chartArea-12{\r\n        height: 401px;\r\n        border-right: 0;\r\n        border-bottom: 0;\r\n    }\r\n    .sm-chartArea{\r\n        height: 300px;\r\n        border-bottom: 1px solid rgba(167, 165, 165, 0.795);\r\n    }\r\n    .title{\r\n        font-size: 1.3em;\r\n        text-align: center;\r\n        border-bottom: 1px solid rgba(167, 165, 165, 0.795);\r\n    }\r\n    .sm-productionTypeArea {\r\n        margin: 0 0 0 0;\r\n        height: 214px;\r\n    }\r\n    .sm-productionTypeLi {\r\n        line-height:2.5;\r\n        margin: 0 0 0 -30px;\r\n    }\r\n    .sm-productionCategoryArea {\r\n        margin: 0 0 0 0;\r\n        height: 214px;\r\n    } \r\n}\r\n/* 641px 平板 md*/\r\n@media screen and (min-width:40.063em){\r\n    .md-chartArea-12{\r\n        height: 829px;\r\n        border-right: 0;\r\n        border-bottom: 0;\r\n    }\r\n    .md-chartArea{\r\n        height: 600px;\r\n        border-bottom: 1px solid rgba(167, 165, 165, 0.795);\r\n    }\r\n    .title{\r\n        font-size: 1.3em;\r\n        text-align: center;\r\n        border-bottom: 1px solid rgba(167, 165, 165, 0.795);\r\n    }\r\n    .md-productionTypeArea {\r\n        margin: 0 0 0 0;\r\n        height: 214px;\r\n    }\r\n    .md-productionTypeLi {\r\n        line-height:2.5;\r\n        margin: 0 0 0 -30px;\r\n    }\r\n    .md-productionCategoryArea {\r\n        margin: 0 0 0 0;\r\n        height: 214px;\r\n    } \r\n\r\n}\r\n/* 1025px lg 显示器*/\r\n@media screen and (min-width:64.063em){\r\n    .lg-chartArea-12{\r\n        height: 577px;\r\n        border-right: 0;\r\n        border-bottom: 0;\r\n    }\r\n    .lg-chartArea{\r\n        height: 620px;\r\n        border-right: 1px solid rgba(167, 165, 165, 0.795);\r\n        border-bottom: 0;\r\n    }\r\n    .lg-subchartArea{\r\n        height: 296px;\r\n        border-bottom: 0;\r\n    }\r\n    .title{\r\n        font-size: 1.3em;\r\n        text-align: center;\r\n        border-bottom: 1px solid rgba(167, 165, 165, 0.795);\r\n    }\r\n    .lg-productionTypeArea {\r\n        margin: -7px 0 0 0;\r\n        height: 240px;\r\n    }\r\n    .lg-productionTypeLi {\r\n        line-height:2.5;\r\n        margin: 0 0 0 -30px;\r\n    }\r\n    .lg-productionCategoryArea {\r\n        margin: 7px 0 0 0;\r\n        height: 324px;\r\n    } \r\n}\r\n/* 1441px xl 大电视*/\r\n@media screen and (min-width:90.063em){\r\n    .xl-chartArea-12{\r\n        height: 797px;\r\n        border-right: 0;\r\n        border-bottom: 0;\r\n    }\r\n    .xl-chartArea{\r\n        height: 845px;\r\n        border-right: 1px solid rgba(167, 165, 165, 0.795);\r\n        border-bottom: 0;\r\n    }\r\n    .xl-subchartArea{\r\n        height: 406px;\r\n        border-bottom: 0;\r\n        background-color: white;\r\n    }   \r\n    .title{\r\n        font-size: 1.3em;\r\n        text-align: center;\r\n        border-bottom: 1px solid rgba(167, 165, 165, 0.795);\r\n    }\r\n    .xl-productionTypeArea {\r\n        margin: -7px 0 0 0;\r\n        height: 300px;\r\n    }\r\n    .xl-productionTypeLi {\r\n        line-height:2.5;\r\n        margin: 0 0 0 -30px;\r\n    }\r\n    .xl-productionCategoryArea {\r\n        margin: 7px 0 0 0;\r\n        height: 484px;\r\n    }    \r\n}"

/***/ }),

/***/ "./src/app/warehouse/common/warehouse-all/warehouse-all.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g\">\n  <div class=\"ui-g-7\">\n    <div echarts [options]=\"echartOptionTotal\" (chartClick)=\"chartClick($event)\" class=\"ui-g-12 chartArea xl-chartArea md-chartArea lg-chartArea sm-chartArea\"></div>\n  </div>\n  <div class=\"ui-g-5\">\n    <div class=\"ui-g-12\">\n      <div echarts [options]=\"echartOptionGrade\" class=\"ui-g-12 subchartArea xl-subchartArea md-subchartArea lg-subchartArea sm-subchartArea\"></div>\n    </div>\n    <div class=\"ui-g-12\">\n      <div echarts [options]=\"echartOptionTime\" class=\"ui-g-12 subchartArea xl-subchartArea md-subchartArea lg-subchartArea sm-subchartArea\"></div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/warehouse/common/warehouse-all/warehouse-all.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WarehouseAllComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_production_common_model_yieldParam__ = __webpack_require__("./src/app/production/common/model/yieldParam.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_common_service_api_api_service__ = __webpack_require__("./src/app/common/service/api/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__echart_option_service__ = __webpack_require__("./src/app/warehouse/common/echart-option.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WarehouseAllComponent = /** @class */ (function () {
    function WarehouseAllComponent(httpService, echartService) {
        this.httpService = httpService;
        this.echartService = echartService;
        this.currentUserName = '';
        this.deviceType = '';
        this.selectedProductCategory = '';
        this.chartParam = new __WEBPACK_IMPORTED_MODULE_1_app_production_common_model_yieldParam__["a" /* YieldParam */]();
    }
    WarehouseAllComponent.prototype.ngOnInit = function () {
        this.drawChart();
        this.getDefaultProductCategory();
    };
    WarehouseAllComponent.prototype.drawChart = function () {
        var _this = this;
        console.log('库存指标：' + this.chartParam.shopName);
        this.chartParam.shopName = this.shopName;
        var nowDate = new Date();
        var currentTime = nowDate.toLocaleString();
        this.waterMark = 'BOECD Confidential@' + this.currentUserName + '\n' + currentTime + '@' + localStorage.getItem('currentIP');
        var url = '/echart/warehouse/total';
        this.httpService.post(url, this.chartParam).subscribe(function (res) {
            _this.respText = res;
            var title = '';
            if (_this.shopName === 'EAC2') {
                title = '半成品库存信息';
            }
            else if (_this.shopName === 'MODULE') {
                title = '完成品库存信息';
            }
            _this.echartOptionTotal = _this.echartService.getOption_warehouse(title, _this.respText, _this.waterMark, _this.deviceType);
        }, function (error) {
            console.log(error);
        });
    };
    WarehouseAllComponent.prototype.getDefaultProductCategory = function () {
        var _this = this;
        this.chartParam.shopName = this.shopName;
        console.log(this.chartParam.starttime);
        console.log(this.chartParam.endtime);
        var nowDate = new Date();
        var currentTime = nowDate.toLocaleString();
        this.waterMark = 'BOECD Confidential@' + this.currentUserName + '\n' + currentTime + '@' + localStorage.getItem('currentIP');
        var url = '/echart/warehouse/getdefaultProductCategory';
        this.httpService.post(url, this.chartParam).subscribe(function (res) {
            _this.respText = res;
            _this.selectedProductCategory = _this.respText.productCategory;
            _this.drawChart1();
            _this.drawChart2();
        }, function (error) {
            console.log(error);
        });
    };
    WarehouseAllComponent.prototype.drawChart1 = function () {
        var _this = this;
        this.chartParam.shopName = this.shopName;
        this.chartParam.productCategory = this.selectedProductCategory;
        var nowDate = new Date();
        var currentTime = nowDate.toLocaleString();
        this.waterMark = 'BOECD Confidential@' + this.currentUserName + '\n' + currentTime + '@' + localStorage.getItem('currentIP');
        var url = '/echart/warehouse/Grade';
        this.httpService.post(url, this.chartParam).subscribe(function (res) {
            _this.respText1 = res;
            _this.echartOptionGrade = _this.echartService.getOption_warehouseGrade('库存等级', _this.respText1, _this.waterMark, _this.deviceType);
        }, function (error) {
            console.log(error);
        });
    };
    WarehouseAllComponent.prototype.drawChart2 = function () {
        var _this = this;
        this.chartParam.shopName = this.shopName;
        this.chartParam.productCategory = this.selectedProductCategory;
        var nowDate = new Date();
        var currentTime = nowDate.toLocaleString();
        this.waterMark = 'BOECD Confidential@' + this.currentUserName + '\n' + currentTime + '@' + localStorage.getItem('currentIP');
        var url = '/echart/warehouse/Grade';
        this.httpService.post(url, this.chartParam).subscribe(function (res) {
            _this.respText2 = res;
            _this.echartOptionTime = _this.echartService.getOption_warehouseTime('库龄信息', _this.respText2, _this.waterMark, _this.deviceType);
        }, function (error) {
            console.log(error);
        });
    };
    WarehouseAllComponent.prototype.chartClick = function (event) {
        this.selectedProductCategory = event.name;
        this.drawChart1();
        this.drawChart2();
    };
    WarehouseAllComponent.prototype.start_Timer = function () {
        var _this = this;
        this.timer = setInterval(function () {
            _this.drawChart();
        }, 300000);
    };
    WarehouseAllComponent.prototype.clear_Timer = function () {
        if (this.timer) {
            clearInterval(this.timer);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], WarehouseAllComponent.prototype, "shopName", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], WarehouseAllComponent.prototype, "currentUserName", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], WarehouseAllComponent.prototype, "deviceType", void 0);
    WarehouseAllComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-warehouse-all',
            template: __webpack_require__("./src/app/warehouse/common/warehouse-all/warehouse-all.component.html"),
            styles: [__webpack_require__("./src/app/warehouse/common/warehouse-all/warehouse-all.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_app_common_service_api_api_service__["a" /* ApiService */], __WEBPACK_IMPORTED_MODULE_3__echart_option_service__["a" /* EchartOptionService */]])
    ], WarehouseAllComponent);
    return WarehouseAllComponent;
}());



/***/ }),

/***/ "./src/app/warehouse/common/warehouse-grade/warehouse-grade.component.css":
/***/ (function(module, exports) {

module.exports = ".chartArea{\r\n    height: 700px;\r\n}\r\n\r\n/* 640px 手机 sm */\r\n\r\n@media screen and (max-width:40em){\r\n    .sm-chartArea{\r\n        height: 300px;\r\n    }\r\n}\r\n\r\n/* 641px 平板 md*/\r\n\r\n@media screen and (min-width:40.063em){\r\n    .md-chartArea{\r\n        height: 600px;\r\n    }\r\n\r\n}\r\n\r\n/* 1025px lg 显示器*/\r\n\r\n@media screen and (min-width:64.063em){\r\n    .lg-chartArea{\r\n        height: 296px;\r\n        border-bottom: 0;\r\n    }\r\n}\r\n\r\n/* 1441px xl 大电视*/\r\n\r\n@media screen and (min-width:90.063em){\r\n    .xl-chartArea{\r\n        height: 406px;\r\n        border-bottom: 0;\r\n        background-color: white;\r\n    }   \r\n}"

/***/ }),

/***/ "./src/app/warehouse/common/warehouse-grade/warehouse-grade.component.html":
/***/ (function(module, exports) {

module.exports = "<div echarts [options]=\"echartOption\" class=\"ui-g-12 chartArea xl-chartArea md-chartArea lg-chartArea sm-chartArea\"></div>"

/***/ }),

/***/ "./src/app/warehouse/common/warehouse-grade/warehouse-grade.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WarehouseGradeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_production_common_model_yieldParam__ = __webpack_require__("./src/app/production/common/model/yieldParam.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_common_service_api_api_service__ = __webpack_require__("./src/app/common/service/api/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__echart_option_service__ = __webpack_require__("./src/app/warehouse/common/echart-option.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WarehouseGradeComponent = /** @class */ (function () {
    function WarehouseGradeComponent(httpService, echartService) {
        this.httpService = httpService;
        this.echartService = echartService;
        this.currentUserName = '';
        this.deviceType = '';
        this.selectedProductCategory = '';
        this.chartParam = new __WEBPACK_IMPORTED_MODULE_1_app_production_common_model_yieldParam__["a" /* YieldParam */]();
    }
    WarehouseGradeComponent.prototype.ngOnInit = function () {
        this.getDefaultProductCategory();
    };
    WarehouseGradeComponent.prototype.getDefaultProductCategory = function () {
        var _this = this;
        this.chartParam.shopName = this.shopName;
        console.log(this.chartParam.starttime);
        console.log(this.chartParam.endtime);
        var nowDate = new Date();
        var currentTime = nowDate.toLocaleString();
        this.waterMark = 'BOECD Confidential@' + this.currentUserName + '\n' + currentTime + '@' + localStorage.getItem('currentIP');
        var url = '/echart/warehouse/getdefaultProductCategory';
        this.httpService.post(url, this.chartParam).subscribe(function (res) {
            _this.respText = res;
            _this.selectedProductCategory = _this.respText.productCategory;
            _this.drawChart();
        }, function (error) {
            console.log(error);
        });
    };
    WarehouseGradeComponent.prototype.drawChart = function () {
        var _this = this;
        this.chartParam.shopName = this.shopName;
        this.chartParam.productCategory = this.selectedProductCategory;
        var nowDate = new Date();
        var currentTime = nowDate.toLocaleString();
        this.waterMark = 'BOECD Confidential@' + this.currentUserName + '\n' + currentTime + '@' + localStorage.getItem('currentIP');
        var url = '/echart/warehouse/Grade';
        this.httpService.post(url, this.chartParam).subscribe(function (res) {
            _this.respText = res;
            _this.echartOption = _this.echartService.getOption_warehouseGrade('库存等级', _this.respText, _this.waterMark, _this.deviceType);
        }, function (error) {
            console.log(error);
        });
    };
    WarehouseGradeComponent.prototype.clear_Timer = function () {
        var _this = this;
        this.timer = setInterval(function () {
            _this.drawChart();
        }, 300000);
    };
    WarehouseGradeComponent.prototype.start_Timer = function () {
        if (this.timer) {
            clearInterval(this.timer);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], WarehouseGradeComponent.prototype, "shopName", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], WarehouseGradeComponent.prototype, "currentUserName", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], WarehouseGradeComponent.prototype, "deviceType", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], WarehouseGradeComponent.prototype, "selectedProductCategory", void 0);
    WarehouseGradeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-warehouse-grade',
            template: __webpack_require__("./src/app/warehouse/common/warehouse-grade/warehouse-grade.component.html"),
            styles: [__webpack_require__("./src/app/warehouse/common/warehouse-grade/warehouse-grade.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_app_common_service_api_api_service__["a" /* ApiService */], __WEBPACK_IMPORTED_MODULE_3__echart_option_service__["a" /* EchartOptionService */]])
    ], WarehouseGradeComponent);
    return WarehouseGradeComponent;
}());



/***/ }),

/***/ "./src/app/warehouse/common/warehouse-time/warehouse-time.component.html":
/***/ (function(module, exports) {

module.exports = "<div echarts [options]=\"echartOption\" class=\"ui-g-12 chartArea xl-chartArea md-chartArea lg-chartArea sm-chartArea\"></div>"

/***/ }),

/***/ "./src/app/warehouse/common/warehouse-time/warehouse-time.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WarehouseTimeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_production_common_model_yieldParam__ = __webpack_require__("./src/app/production/common/model/yieldParam.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_common_service_api_api_service__ = __webpack_require__("./src/app/common/service/api/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__echart_option_service__ = __webpack_require__("./src/app/warehouse/common/echart-option.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WarehouseTimeComponent = /** @class */ (function () {
    function WarehouseTimeComponent(httpService, echartService) {
        this.httpService = httpService;
        this.echartService = echartService;
        this.currentUserName = '';
        this.deviceType = '';
        this.selectedProductCategory = '';
        this.chartParam = new __WEBPACK_IMPORTED_MODULE_1_app_production_common_model_yieldParam__["a" /* YieldParam */]();
    }
    WarehouseTimeComponent.prototype.ngOnInit = function () {
        this.getDefaultProductCategory();
    };
    WarehouseTimeComponent.prototype.getDefaultProductCategory = function () {
        var _this = this;
        this.chartParam.shopName = this.shopName;
        console.log(this.chartParam.starttime);
        console.log(this.chartParam.endtime);
        var nowDate = new Date();
        var currentTime = nowDate.toLocaleString();
        this.waterMark = 'BOECD Confidential@' + this.currentUserName + '\n' + currentTime + '@' + localStorage.getItem('currentIP');
        var url = '/echart/warehouse/getdefaultProductCategory';
        this.httpService.post(url, this.chartParam).subscribe(function (res) {
            _this.respText = res;
            _this.selectedProductCategory = _this.respText.productCategory;
            _this.drawChart();
        }, function (error) {
            console.log(error);
        });
    };
    WarehouseTimeComponent.prototype.drawChart = function () {
        var _this = this;
        this.chartParam.shopName = this.shopName;
        this.chartParam.productCategory = this.selectedProductCategory;
        var nowDate = new Date();
        var currentTime = nowDate.toLocaleString();
        this.waterMark = 'BOECD Confidential@' + this.currentUserName + '\n' + currentTime + '@' + localStorage.getItem('currentIP');
        var url = '/echart/warehouse/Grade';
        this.httpService.post(url, this.chartParam).subscribe(function (res) {
            _this.respText = res;
            _this.echartOption = _this.echartService.getOption_warehouseTime('库龄信息', _this.respText, _this.waterMark, _this.deviceType);
        }, function (error) {
            console.log(error);
        });
    };
    WarehouseTimeComponent.prototype.clear_Timer = function () {
        var _this = this;
        this.timer = setInterval(function () {
            _this.drawChart();
        }, 300000);
    };
    WarehouseTimeComponent.prototype.start_Timer = function () {
        if (this.timer) {
            clearInterval(this.timer);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], WarehouseTimeComponent.prototype, "shopName", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], WarehouseTimeComponent.prototype, "currentUserName", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], WarehouseTimeComponent.prototype, "deviceType", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], WarehouseTimeComponent.prototype, "selectedProductCategory", void 0);
    WarehouseTimeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-warehouse-time',
            template: __webpack_require__("./src/app/warehouse/common/warehouse-time/warehouse-time.component.html"),
            styles: [__webpack_require__("./src/app/warehouse/common/warehouse-grade/warehouse-grade.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_app_common_service_api_api_service__["a" /* ApiService */], __WEBPACK_IMPORTED_MODULE_3__echart_option_service__["a" /* EchartOptionService */]])
    ], WarehouseTimeComponent);
    return WarehouseTimeComponent;
}());



/***/ }),

/***/ "./src/app/warehouse/common/warehouse-total/warehouse-total.component.css":
/***/ (function(module, exports) {

module.exports = ".chartArea-12{\r\n    height: 700px;\r\n    border-right: 0;\r\n    border-bottom: 0;\r\n}\r\n.chartArea{\r\n    height: 700px;\r\n}\r\n.productionTypeArea {\r\n    height: 300px;\r\n}\r\n.productionCategoryArea {\r\n    height: 400px;\r\n}\r\nul {\r\n    list-style-type: none;\r\n}\r\n/* 640px 手机 sm */\r\n@media screen and (max-width:40em){\r\n    .sm-chartArea-12{\r\n        height: 401px;\r\n        border-right: 0;\r\n        border-bottom: 0;\r\n    }\r\n    .sm-chartArea{\r\n        height: 300px;\r\n        border-bottom: 1px solid rgba(167, 165, 165, 0.795);\r\n    }\r\n    .title{\r\n        font-size: 1.3em;\r\n        text-align: center;\r\n        border-bottom: 1px solid rgba(167, 165, 165, 0.795);\r\n    }\r\n    .sm-productionTypeArea {\r\n        margin: 0 0 0 0;\r\n        height: 214px;\r\n    }\r\n    .sm-productionTypeLi {\r\n        line-height:2.5;\r\n        margin: 0 0 0 -30px;\r\n    }\r\n    .sm-productionCategoryArea {\r\n        margin: 0 0 0 0;\r\n        height: 214px;\r\n    } \r\n}\r\n/* 641px 平板 md*/\r\n@media screen and (min-width:40.063em){\r\n    .md-chartArea-12{\r\n        height: 829px;\r\n        border-right: 0;\r\n        border-bottom: 0;\r\n    }\r\n    .md-chartArea{\r\n        height: 600px;\r\n        border-bottom: 1px solid rgba(167, 165, 165, 0.795);\r\n    }\r\n    .title{\r\n        font-size: 1.3em;\r\n        text-align: center;\r\n        border-bottom: 1px solid rgba(167, 165, 165, 0.795);\r\n    }\r\n    .md-productionTypeArea {\r\n        margin: 0 0 0 0;\r\n        height: 214px;\r\n    }\r\n    .md-productionTypeLi {\r\n        line-height:2.5;\r\n        margin: 0 0 0 -30px;\r\n    }\r\n    .md-productionCategoryArea {\r\n        margin: 0 0 0 0;\r\n        height: 214px;\r\n    } \r\n\r\n}\r\n/* 1025px lg 显示器*/\r\n@media screen and (min-width:64.063em){\r\n    .lg-chartArea-12{\r\n        height: 577px;\r\n        border-right: 0;\r\n        border-bottom: 0;\r\n    }\r\n    .lg-chartArea{\r\n        height: 620px;\r\n        border-right: 1px solid rgba(167, 165, 165, 0.795);\r\n        border-bottom: 0;\r\n    }\r\n    .title{\r\n        font-size: 1.3em;\r\n        text-align: center;\r\n        border-bottom: 1px solid rgba(167, 165, 165, 0.795);\r\n    }\r\n    .lg-productionTypeArea {\r\n        margin: -7px 0 0 0;\r\n        height: 240px;\r\n    }\r\n    .lg-productionTypeLi {\r\n        line-height:2.5;\r\n        margin: 0 0 0 -30px;\r\n    }\r\n    .lg-productionCategoryArea {\r\n        margin: 7px 0 0 0;\r\n        height: 324px;\r\n    } \r\n}\r\n/* 1441px xl 大电视*/\r\n@media screen and (min-width:90.063em){\r\n    .xl-chartArea-12{\r\n        height: 797px;\r\n        border-right: 0;\r\n        border-bottom: 0;\r\n    }\r\n    .xl-chartArea{\r\n        height: 845px;\r\n        border-right: 1px solid rgba(167, 165, 165, 0.795);\r\n        border-bottom: 0;\r\n    }\r\n    .title{\r\n        font-size: 1.3em;\r\n        text-align: center;\r\n        border-bottom: 1px solid rgba(167, 165, 165, 0.795);\r\n    }\r\n    .xl-productionTypeArea {\r\n        margin: -7px 0 0 0;\r\n        height: 300px;\r\n    }\r\n    .xl-productionTypeLi {\r\n        line-height:2.5;\r\n        margin: 0 0 0 -30px;\r\n    }\r\n    .xl-productionCategoryArea {\r\n        margin: 7px 0 0 0;\r\n        height: 484px;\r\n    }    \r\n}"

/***/ }),

/***/ "./src/app/warehouse/common/warehouse-total/warehouse-total.component.html":
/***/ (function(module, exports) {

module.exports = "<div echarts [options]=\"echartOption\" (chartClick)=\"chartClick($event)\" class=\"ui-g-12 chartArea xl-chartArea md-chartArea lg-chartArea sm-chartArea\"></div>"

/***/ }),

/***/ "./src/app/warehouse/common/warehouse-total/warehouse-total.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WarehouseTotalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_production_common_model_yieldParam__ = __webpack_require__("./src/app/production/common/model/yieldParam.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_common_service_api_api_service__ = __webpack_require__("./src/app/common/service/api/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__echart_option_service__ = __webpack_require__("./src/app/warehouse/common/echart-option.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WarehouseTotalComponent = /** @class */ (function () {
    function WarehouseTotalComponent(httpService, echartService) {
        this.httpService = httpService;
        this.echartService = echartService;
        this.currentUserName = '';
        this.deviceType = '';
        this.chartParam = new __WEBPACK_IMPORTED_MODULE_1_app_production_common_model_yieldParam__["a" /* YieldParam */]();
    }
    WarehouseTotalComponent.prototype.ngOnInit = function () {
        this.drawChart();
    };
    WarehouseTotalComponent.prototype.drawChart = function () {
        var _this = this;
        console.log('库存指标：' + this.chartParam.shopName);
        this.chartParam.shopName = this.shopName;
        var nowDate = new Date();
        var currentTime = nowDate.toLocaleString();
        this.waterMark = 'BOECD Confidential@' + this.currentUserName + '\n' + currentTime + '@' + localStorage.getItem('currentIP');
        var url = '/echart/warehouse/total';
        this.httpService.post(url, this.chartParam).subscribe(function (res) {
            _this.respText = res;
            var title = '';
            if (_this.shopName === 'EAC2') {
                title = '半成品库存信息';
            }
            else if (_this.shopName === 'MODULE') {
                title = '完成品库存信息';
            }
            _this.echartOption = _this.echartService.getOption_warehouse(title, _this.respText, _this.waterMark, _this.deviceType);
        }, function (error) {
            console.log(error);
        });
    };
    WarehouseTotalComponent.prototype.chartClick = function (event) {
    };
    WarehouseTotalComponent.prototype.clear_Timer = function () {
        var _this = this;
        this.timer = setInterval(function () {
            _this.drawChart();
        }, 300000);
    };
    WarehouseTotalComponent.prototype.start_Timer = function () {
        if (this.timer) {
            clearInterval(this.timer);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], WarehouseTotalComponent.prototype, "shopName", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], WarehouseTotalComponent.prototype, "currentUserName", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], WarehouseTotalComponent.prototype, "deviceType", void 0);
    WarehouseTotalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-warehouse-total',
            template: __webpack_require__("./src/app/warehouse/common/warehouse-total/warehouse-total.component.html"),
            styles: [__webpack_require__("./src/app/warehouse/common/warehouse-total/warehouse-total.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_app_common_service_api_api_service__["a" /* ApiService */], __WEBPACK_IMPORTED_MODULE_3__echart_option_service__["a" /* EchartOptionService */]])
    ], WarehouseTotalComponent);
    return WarehouseTotalComponent;
}());



/***/ }),

/***/ "./src/app/warehouse/finishedgoods/finishedgoods.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/warehouse/finishedgoods/finishedgoods.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"ui-g\">\n    <div class=\"ui-g-7\">\n        <app-warehouse-total [shopName]=\"shopName\" [currentUserName]=\"currentUserName\" [deviceType]=\"deviceType\"></app-warehouse-total>\n    </div>\n    <div class=\"ui-g-5\">\n        <div class=\"ui-g-12\">\n            <app-warehouse-grade [shopName]=\"shopName\" [currentUserName]=\"currentUserName\" [deviceType]=\"deviceType\">\n            </app-warehouse-grade>\n        </div>\n        <div class=\"ui-g-12\">\n            <app-warehouse-time [shopName]=\"shopName\" [currentUserName]=\"currentUserName\" [deviceType]=\"deviceType\">\n            </app-warehouse-time>\n        </div>\n    </div>\n</div> -->\n\n<app-warehouse-all #Child_Finished [shopName]=\"shopName\" [currentUserName]=\"currentUserName\" [deviceType]=\"deviceType\"></app-warehouse-all>"

/***/ }),

/***/ "./src/app/warehouse/finishedgoods/finishedgoods.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FinishedgoodsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__breadcrumb_service_breadcrumb_service__ = __webpack_require__("./src/core/layout/breadcrumb/service/breadcrumb.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_layout_retab_service_tab_service__ = __webpack_require__("./src/core/layout/retab/service/tab.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_warehouse_all_warehouse_all_component__ = __webpack_require__("./src/app/warehouse/common/warehouse-all/warehouse-all.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FinishedgoodsComponent = /** @class */ (function () {
    function FinishedgoodsComponent(breadcrumbService, tService) {
        this.breadcrumbService = breadcrumbService;
        this.tService = tService;
        this.shopName = 'MODULE';
        this.currentUserName = localStorage.getItem('currentUserName');
        this.deviceType = localStorage.getItem('deviceType');
        this.breadcrumbService.setItems([
            { label: '库存信息' },
            { label: '完成品' },
        ]);
        this.tService.setItems('库存信息 完成品');
    }
    FinishedgoodsComponent.prototype.ngOnInit = function () {
        this.Child_Finished.start_Timer();
    };
    FinishedgoodsComponent.prototype.ngOnDestroy = function () {
        this.Child_Finished.clear_Timer();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('Child_Finished'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__common_warehouse_all_warehouse_all_component__["a" /* WarehouseAllComponent */])
    ], FinishedgoodsComponent.prototype, "Child_Finished", void 0);
    FinishedgoodsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-finishedgoods',
            template: __webpack_require__("./src/app/warehouse/finishedgoods/finishedgoods.component.html"),
            styles: [__webpack_require__("./src/app/warehouse/finishedgoods/finishedgoods.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__breadcrumb_service_breadcrumb_service__["a" /* BreadcrumbService */], __WEBPACK_IMPORTED_MODULE_2_core_layout_retab_service_tab_service__["a" /* TabService */]])
    ], FinishedgoodsComponent);
    return FinishedgoodsComponent;
}());



/***/ }),

/***/ "./src/app/warehouse/semifinishedgoods/semifinishedgoods.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/warehouse/semifinishedgoods/semifinishedgoods.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"ui-g\">\n    <div class=\"ui-g-7\">\n        <app-warehouse-total [shopName]=\"shopName\" [currentUserName]=\"currentUserName\" [deviceType]=\"deviceType\"></app-warehouse-total>\n    </div>\n    <div class=\"ui-g-5\">\n        <div class=\"ui-g-12\">\n            <app-warehouse-grade [shopName]=\"shopName\" [currentUserName]=\"currentUserName\" [deviceType]=\"deviceType\">\n            </app-warehouse-grade>\n        </div>\n        <div class=\"ui-g-12\">\n            <app-warehouse-time [shopName]=\"shopName\" [currentUserName]=\"currentUserName\" [deviceType]=\"deviceType\">\n            </app-warehouse-time>\n        </div>\n    </div>\n</div> -->\n\n<app-warehouse-all #Child_SemiFinished [shopName]=\"shopName\" [currentUserName]=\"currentUserName\" [deviceType]=\"deviceType\"></app-warehouse-all>"

/***/ }),

/***/ "./src/app/warehouse/semifinishedgoods/semifinishedgoods.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SemifinishedgoodsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__breadcrumb_service_breadcrumb_service__ = __webpack_require__("./src/core/layout/breadcrumb/service/breadcrumb.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_layout_retab_service_tab_service__ = __webpack_require__("./src/core/layout/retab/service/tab.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_warehouse_all_warehouse_all_component__ = __webpack_require__("./src/app/warehouse/common/warehouse-all/warehouse-all.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SemifinishedgoodsComponent = /** @class */ (function () {
    function SemifinishedgoodsComponent(breadcrumbService, tService) {
        this.breadcrumbService = breadcrumbService;
        this.tService = tService;
        this.shopName = 'EAC2';
        this.currentUserName = localStorage.getItem('currentUserName');
        this.deviceType = localStorage.getItem('deviceType');
        this.breadcrumbService.setItems([
            { label: '库存信息' },
            { label: '半成品' },
        ]);
        this.tService.setItems('库存信息 半成品');
    }
    SemifinishedgoodsComponent.prototype.ngOnInit = function () {
        this.Child_SemiFinished.start_Timer();
    };
    SemifinishedgoodsComponent.prototype.ngOnDestroy = function () {
        this.Child_SemiFinished.clear_Timer();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('Child_SemiFinished'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__common_warehouse_all_warehouse_all_component__["a" /* WarehouseAllComponent */])
    ], SemifinishedgoodsComponent.prototype, "Child_SemiFinished", void 0);
    SemifinishedgoodsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-semifinishedgoods',
            template: __webpack_require__("./src/app/warehouse/semifinishedgoods/semifinishedgoods.component.html"),
            styles: [__webpack_require__("./src/app/warehouse/semifinishedgoods/semifinishedgoods.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__breadcrumb_service_breadcrumb_service__["a" /* BreadcrumbService */], __WEBPACK_IMPORTED_MODULE_2_core_layout_retab_service_tab_service__["a" /* TabService */]])
    ], SemifinishedgoodsComponent);
    return SemifinishedgoodsComponent;
}());



/***/ }),

/***/ "./src/app/warehouse/warehouse-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WarehouseRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__semifinishedgoods_semifinishedgoods_component__ = __webpack_require__("./src/app/warehouse/semifinishedgoods/semifinishedgoods.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__finishedgoods_finishedgoods_component__ = __webpack_require__("./src/app/warehouse/finishedgoods/finishedgoods.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    {
        path: 'semifinishedgoods',
        component: __WEBPACK_IMPORTED_MODULE_2__semifinishedgoods_semifinishedgoods_component__["a" /* SemifinishedgoodsComponent */]
    },
    {
        path: 'finishedgoods',
        component: __WEBPACK_IMPORTED_MODULE_3__finishedgoods_finishedgoods_component__["a" /* FinishedgoodsComponent */]
    },
];
var WarehouseRoutingModule = /** @class */ (function () {
    function WarehouseRoutingModule() {
    }
    WarehouseRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"]]
        })
    ], WarehouseRoutingModule);
    return WarehouseRoutingModule;
}());



/***/ }),

/***/ "./src/app/warehouse/warehouse.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WarehouseModule", function() { return WarehouseModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__warehouse_routing_module__ = __webpack_require__("./src/app/warehouse/warehouse-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__semifinishedgoods_semifinishedgoods_component__ = __webpack_require__("./src/app/warehouse/semifinishedgoods/semifinishedgoods.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__finishedgoods_finishedgoods_component__ = __webpack_require__("./src/app/warehouse/finishedgoods/finishedgoods.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__common_warehouse_total_warehouse_total_component__ = __webpack_require__("./src/app/warehouse/common/warehouse-total/warehouse-total.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__common_warehouse_grade_warehouse_grade_component__ = __webpack_require__("./src/app/warehouse/common/warehouse-grade/warehouse-grade.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__common_warehouse_time_warehouse_time_component__ = __webpack_require__("./src/app/warehouse/common/warehouse-time/warehouse-time.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__common_echart_option_service__ = __webpack_require__("./src/app/warehouse/common/echart-option.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ngx_echarts__ = __webpack_require__("./node_modules/ngx-echarts/ngx-echarts.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__common_warehouse_all_warehouse_all_component__ = __webpack_require__("./src/app/warehouse/common/warehouse-all/warehouse-all.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var WarehouseModule = /** @class */ (function () {
    function WarehouseModule() {
    }
    WarehouseModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__warehouse_routing_module__["a" /* WarehouseRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_9_ngx_echarts__["a" /* NgxEchartsModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__semifinishedgoods_semifinishedgoods_component__["a" /* SemifinishedgoodsComponent */], __WEBPACK_IMPORTED_MODULE_4__finishedgoods_finishedgoods_component__["a" /* FinishedgoodsComponent */], __WEBPACK_IMPORTED_MODULE_5__common_warehouse_total_warehouse_total_component__["a" /* WarehouseTotalComponent */], __WEBPACK_IMPORTED_MODULE_6__common_warehouse_grade_warehouse_grade_component__["a" /* WarehouseGradeComponent */], __WEBPACK_IMPORTED_MODULE_7__common_warehouse_time_warehouse_time_component__["a" /* WarehouseTimeComponent */], __WEBPACK_IMPORTED_MODULE_10__common_warehouse_all_warehouse_all_component__["a" /* WarehouseAllComponent */]],
            providers: [__WEBPACK_IMPORTED_MODULE_8__common_echart_option_service__["a" /* EchartOptionService */]]
        })
    ], WarehouseModule);
    return WarehouseModule;
}());



/***/ })

});
//# sourceMappingURL=warehouse.module.chunk.js.map