webpackJsonp(["cassette-use-status.module"],{

/***/ "./src/app/cassette-use-status/bpcstuse/bpcstuse.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/cassette-use-status/bpcstuse/bpcstuse.component.html":
/***/ (function(module, exports) {

module.exports = "<app-common #Child_CommonBP [deviceType]=\"deviceType\" [Params]=\"Params\"  [MenuItems]=\"MenuItems\" [currentUserName]=\"currentUserName\"></app-common>"

/***/ }),

/***/ "./src/app/cassette-use-status/bpcstuse/bpcstuse.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BpcstuseComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_common_component__ = __webpack_require__("./src/app/cassette-use-status/common/common.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BpcstuseComponent = /** @class */ (function () {
    function BpcstuseComponent() {
        this.deviceType = localStorage.getItem('deviceType');
        this.currentUserName = localStorage.getItem('currentUserName');
    }
    BpcstuseComponent.prototype.ngOnInit = function () {
        this.Params = {
            FactoryName: "BP",
            WIP: "BP WIP",
            BANK: "BP Bank",
            DUMMY: "-"
        };
        this.MenuItems = "BPCST Status";
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("Child_CommonBP"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__common_common_component__["a" /* CommonComponent */])
    ], BpcstuseComponent.prototype, "Child_CommonBP", void 0);
    BpcstuseComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-bpcstuse',
            template: __webpack_require__("./src/app/cassette-use-status/bpcstuse/bpcstuse.component.html"),
            styles: [__webpack_require__("./src/app/cassette-use-status/bpcstuse/bpcstuse.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BpcstuseComponent);
    return BpcstuseComponent;
}());



/***/ }),

/***/ "./src/app/cassette-use-status/cassette-use-status-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CassetteUseStatusRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bpcstuse_bpcstuse_component__ = __webpack_require__("./src/app/cassette-use-status/bpcstuse/bpcstuse.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: 'BPCSTUse',
        component: __WEBPACK_IMPORTED_MODULE_2__bpcstuse_bpcstuse_component__["a" /* BpcstuseComponent */]
    }
];
var CassetteUseStatusRoutingModule = /** @class */ (function () {
    function CassetteUseStatusRoutingModule() {
    }
    CassetteUseStatusRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"]]
        })
    ], CassetteUseStatusRoutingModule);
    return CassetteUseStatusRoutingModule;
}());



/***/ }),

/***/ "./src/app/cassette-use-status/cassette-use-status.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CassetteUseStatusModule", function() { return CassetteUseStatusModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_common_component__ = __webpack_require__("./src/app/cassette-use-status/common/common.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__bpcstuse_bpcstuse_component__ = __webpack_require__("./src/app/cassette-use-status/bpcstuse/bpcstuse.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__node_modules_angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__common_service_echart_service__ = __webpack_require__("./src/app/common/service/echart.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__cassette_use_status_common_DrawChartService__ = __webpack_require__("./src/app/cassette-use-status/common/DrawChartService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__cassette_use_status_routing_module__ = __webpack_require__("./src/app/cassette-use-status/cassette-use-status-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__node_modules_ngx_echarts__ = __webpack_require__("./node_modules/ngx-echarts/ngx-echarts.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var CassetteUseStatusModule = /** @class */ (function () {
    function CassetteUseStatusModule() {
    }
    CassetteUseStatusModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_4__node_modules_angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_7__cassette_use_status_routing_module__["a" /* CassetteUseStatusRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_8__node_modules_ngx_echarts__["a" /* NgxEchartsModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__common_common_component__["a" /* CommonComponent */], __WEBPACK_IMPORTED_MODULE_3__bpcstuse_bpcstuse_component__["a" /* BpcstuseComponent */]],
            providers: [__WEBPACK_IMPORTED_MODULE_5__common_service_echart_service__["a" /* EchartService */], __WEBPACK_IMPORTED_MODULE_6__cassette_use_status_common_DrawChartService__["a" /* CassetteChartService */]]
        })
    ], CassetteUseStatusModule);
    return CassetteUseStatusModule;
}());



/***/ }),

/***/ "./src/app/cassette-use-status/common/DrawChartService.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CassetteChartService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CassetteChartService = /** @class */ (function () {
    function CassetteChartService() {
    }
    CassetteChartService.prototype.getOption_CSTStatusDummyjiankong = function (title, respText, deviceType, waterMark) {
        var fontSize;
        var axisWidth;
        var grid;
        var titleFontSize;
        var legend;
        var waterMarkFontsize;
        var axisTextFontsize;
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
                titleFontSize = { main: '140%', sub: '90%' };
                axisWidth = 2;
                grid = [{
                        x: '7%',
                        x2: '7%',
                        y: '18%',
                        height: '67%'
                    }, {
                        x: '7%',
                        x2: '7%',
                        y2: '5%',
                        height: '3%'
                    }];
                legend = { width: '64%', left: '30%', top: '2%' };
                waterMarkFontsize = 'bold 20px Microsoft YaHei';
                break;
            case 'tv':
                fontSize = '120%';
                titleFontSize = { main: '200%', sub: '120%' };
                axisWidth = 4;
                axisTextFontsize = "80";
                grid = [{
                        x: '7%',
                        x2: '7%',
                        y: '13%',
                        height: '75%'
                    }, {
                        x: '7%',
                        x2: '7%',
                        y2: '4%',
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
                    top: '0%',
                    //itemGap:25,
                    textStyle: {
                        fontFamily: '微软雅黑',
                        fontSize: titleFontSize.main,
                    },
                },
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
                            return '<div style="border-bottom: 1px solid rgba(255,255,255,.3); font-size: 13px;padding-bottom: 3px;margin-bottom: 3px">'
                                + obj.name + '：'
                                + '</div>'
                                + '<div style="font-size: 5px;">' + obj.seriesName + ' 数量：' + value[1] + '</div>';
                            //    + obj.seriesName+' AgingOut数量：' + value[3] +'<br>'
                        }
                        /*	if(obj.seriesType=="line"){
                                return '<div style="border-bottom: 1px solid rgba(255,255,255,.3); font-size: 18px;padding-bottom: 7px;margin-bottom: 7px">'
                                    + obj.name + '：'
                                    + '</div>'
                                    + ' Scrap ' +obj.seriesName+"："+value[1] +'%'+'<br>'
                                    + ' Scrap数量：' + value[2]+'<br>'
                                    //+ obj.seriesName+' 等级数量：' + value[4] +'<br>'
                            }*/
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
                left: '45%',
                top: '10%',
                //图例排布
                width: '75%',
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
                        length: 5,
                        lineStyle: {
                            width: 3,
                        }
                    },
                    axisLabel: {
                        color: 'rgb(66,66,66)',
                        fontSize: '80%',
                        margin: '15',
                        rotate: -40,
                        formatter: function (params) {
                            var returnParam = "";
                            var length = params.length;
                            var i = params.indexOf(" ");
                            if (i > 0) {
                                returnParam = params.substring(0, i) + "\n";
                                returnParam += params.substring(i, length);
                            }
                            else {
                                returnParam = params;
                            }
                            return returnParam;
                        }
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
                    name: 'CST QTY',
                    nameTextStyle: {
                        fontSize: '90%',
                        fontFamily: '微软雅黑',
                        color: 'rgb(66,66,66)',
                    },
                    axisLabel: {
                        color: 'rgb(66,66,66)',
                        fontSize: '80%',
                        margin: '12',
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
            ],
            grid: [{
                    x: '4%',
                    x2: '7%',
                    y: '20%',
                    height: '60%'
                }, {
                    x: '7%',
                    x2: '7%',
                    y2: '10%',
                    height: '0%'
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
    CassetteChartService.prototype.getOption_CSTStatusjiankong = function (title, respText, deviceType, waterMark) {
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
                titleFontSize = { main: '140%', sub: '90%' };
                axisWidth = 2;
                grid = [{
                        x: '7%',
                        x2: '7%',
                        y: '18%',
                        height: '100%'
                    }, {
                        x: '7%',
                        x2: '7%',
                        y2: '5%',
                        height: '0%'
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
                        y2: '4%',
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
                            return '<div style="border-bottom: 1px solid rgba(255,255,255,.3); font-size: 11px;padding-bottom: 3px;margin-bottom: 3px">'
                                + obj.name + '：'
                                + '</div>'
                                + '<div style="font-size: 7px;">' + obj.seriesName + ' 数量：' + value[1] + '</div>';
                            //    + obj.seriesName+' AgingOut数量：' + value[3] +'<br>'
                        }
                        /*	if(obj.seriesType=="line"){
                                return '<div style="border-bottom: 1px solid rgba(255,255,255,.3); font-size: 18px;padding-bottom: 7px;margin-bottom: 7px">'
                                    + obj.name + '：'
                                    + '</div>'
                                    + ' Scrap ' +obj.seriesName+"："+value[1] +'%'+'<br>'
                                    + ' Scrap数量：' + value[2]+'<br>'
                                    //+ obj.seriesName+' 等级数量：' + value[4] +'<br>'
                            }*/
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
                left: '15%',
                top: '10%',
                //图例排布
                width: '75%',
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
                        margin: '10',
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
                    name: 'CST QTY',
                    nameTextStyle: {
                        fontSize: '80%',
                        fontFamily: '微软雅黑',
                        color: 'rgb(66,66,66)',
                    },
                    axisLabel: {
                        color: 'rgb(66,66,66)',
                        fontSize: '70%',
                        margin: '12',
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
                        length: 6,
                        lineStyle: {
                            width: 4,
                        }
                    },
                    splitNumber: 4,
                },
            ],
            grid: [{
                    x: '7%',
                    x2: '3%',
                    y: '23%',
                    y2: '1%',
                    height: '65%'
                }, {
                    x: '7%',
                    x2: '7%',
                    y2: '4%',
                    height: '0%'
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
    CassetteChartService.prototype.getOption_CSTStatusjiankongbank = function (title, respText, deviceType, waterMark) {
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
                titleFontSize = { main: '140%', sub: '90%' };
                axisWidth = 2;
                grid = [{
                        x: '7%',
                        x2: '7%',
                        y: '18%',
                        height: '100%'
                    }, {
                        x: '7%',
                        x2: '7%',
                        y2: '5%',
                        height: '0%'
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
                        y2: '4%',
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
                    left: '3%',
                    top: '1%',
                    //itemGap:25,
                    textStyle: {
                        fontFamily: '微软雅黑',
                        fontSize: titleFontSize.main,
                    },
                },
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
                            return '<div style="border-bottom: 1px solid rgba(255,255,255,.3); font-size: 11px;padding-bottom: 3px;margin-bottom: 3px">'
                                + obj.name + '：'
                                + '</div>'
                                + '<div style="font-size: 7px;">' + obj.seriesName + ' 数量：' + value[1] + '</div>';
                            //    + obj.seriesName+' AgingOut数量：' + value[3] +'<br>'
                        }
                        /*	if(obj.seriesType=="line"){
                                return '<div style="border-bottom: 1px solid rgba(255,255,255,.3); font-size: 18px;padding-bottom: 7px;margin-bottom: 7px">'
                                    + obj.name + '：'
                                    + '</div>'
                                    + ' Scrap ' +obj.seriesName+"："+value[1] +'%'+'<br>'
                                    + ' Scrap数量：' + value[2]+'<br>'
                                    //+ obj.seriesName+' 等级数量：' + value[4] +'<br>'
                            }*/
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
                left: '20%',
                top: '10%',
                //图例排布
                width: '71%',
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
                        margin: '10',
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
                    name: 'CST QTY',
                    nameTextStyle: {
                        fontSize: '80%',
                        fontFamily: '微软雅黑',
                        color: 'rgb(66,66,66)',
                    },
                    axisLabel: {
                        color: 'rgb(66,66,66)',
                        fontSize: '70%',
                        margin: '12',
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
                        length: 6,
                        lineStyle: {
                            width: 4,
                        }
                    },
                    splitNumber: 4,
                },
            ],
            grid: [{
                    x: '10%',
                    x2: '3%',
                    y: '23%',
                    y2: '1%',
                    height: '65%'
                }, {
                    x: '7%',
                    x2: '7%',
                    y2: '4%',
                    height: '0%'
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
    CassetteChartService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__node_modules_angular_core__["Injectable"])()
    ], CassetteChartService);
    return CassetteChartService;
}());



/***/ }),

/***/ "./src/app/cassette-use-status/common/common.component.css":
/***/ (function(module, exports) {

module.exports = ".chartArea-12{\r\n    height: 700px;\r\n    border-right: 0;\r\n    border-bottom: 0;\r\n}\r\n.chartArea{\r\n    height: 700px;\r\n}\r\n.productionTypeArea {\r\n    height: 300px;\r\n}\r\n.productionCategoryArea {\r\n    height: 400px;\r\n}\r\nul-g-bigger {\r\n    height:300px;\r\n}\r\n/* 640px 手机 sm */\r\n@media screen and (max-width:40em){\r\n    .sm-chartArea-12{\r\n        height: 401px;\r\n        border-right: 0;\r\n        border-bottom: 0;\r\n    }\r\n    .sm-chartArea{\r\n        height: 300px;\r\n        border-bottom: 1px solid rgba(167, 165, 165, 0.795);\r\n    }\r\n    .title{\r\n        font-size: 1.3em;\r\n        text-align: center;\r\n        border-bottom: 1px solid rgba(167, 165, 165, 0.795);\r\n    }\r\n    .sm-productionTypeArea {\r\n        margin: 0 0 0 0;\r\n        height: 214px;\r\n    }\r\n    .sm-productionTypeLi {\r\n        line-height:2.5;\r\n        margin: 0 0 0 -30px;\r\n    }\r\n    .sm-productionCategoryArea {\r\n        margin: 0 0 0 0;\r\n        height: 214px;\r\n    } \r\n}\r\n/* 641px 平板 md*/\r\n@media screen and (min-width:40.063em){\r\n    .md-chartArea-12{\r\n        height: 829px;\r\n        border-right: 0;\r\n        border-bottom: 0;\r\n    }\r\n    .md-chartArea{\r\n        height: 600px;\r\n        border-bottom: 1px solid rgba(167, 165, 165, 0.795);\r\n    }\r\n    .title{\r\n        font-size: 1.3em;\r\n        text-align: center;\r\n        border-bottom: 1px solid rgba(167, 165, 165, 0.795);\r\n    }\r\n    .md-productionTypeArea {\r\n        margin: 0 0 0 0;\r\n        height: 214px;\r\n    }\r\n    .md-productionTypeLi {\r\n        line-height:2.5;\r\n        margin: 0 0 0 -30px;\r\n    }\r\n    .md-productionCategoryArea {\r\n        margin: 0 0 0 0;\r\n        height: 214px;\r\n    } \r\n\r\n}\r\n/* 1025px lg 显示器*/\r\n@media screen and (min-width:64.063em){\r\n  /*   .ui-g {\r\n        height: 200px;\r\n        width: 500px\r\n    } */\r\n   /*  .ui-Bank{\r\n\r\n        position: relative;\r\n        left:50%;\r\n        top: -338px\r\n    } */\r\n    .lg-chartArea-big{\r\n        position: relative;\r\n        border-top: 1px solid rgba(167, 165, 165, 0.795);\r\n        border-bottom: 0;\r\n        bottom: 0px;\r\n        height: 320px;\r\n    }\r\n    .lg-chartArea-12{\r\n        height: 320px;\r\n        border-right: 0;\r\n        border-bottom: 0;\r\n        float: left;\r\n    }\r\n    .lg-chartArea{\r\n        height: 320px;\r\n/*         width: 570px; */\r\n        border-right: 1px solid rgba(167, 165, 165, 0.795);\r\n        border-bottom: 0;\r\n    }\r\n    .lg-title{\r\n        font-size: 1.0em;\r\n        text-align: center;\r\n        border-bottom: 1px solid rgba(167, 165, 165, 0.795);\r\n    }\r\n    .lg-productionTypeArea {\r\n        margin: -7px 0 0 0;\r\n        height: 240px;\r\n    }\r\n    .lg-productionTypeLi {\r\n        line-height:1.8;\r\n        font-size: 14px;\r\n        margin: 0 0 0 -30px;\r\n    }\r\n    .lg-productionCategoryArea {\r\n        margin: 7px 0 0 0;\r\n        height: 303px;\r\n    } \r\n    .lg-productionCategoryArea .optionul {\r\n        height: 280px;\r\n        overflow-x: hidden;\r\n        overflow-y: scroll;\r\n    }\r\n    .lg-productionCategoryArea .optionul::-webkit-scrollbar {\r\n        display: none;\r\n        width: 6px;\r\n    }\r\n    .lg-productionCategoryArea .optionul:hover::-webkit-scrollbar {\r\n        display: inline-block;\r\n    }\r\n    .lg-productionCategoryArea .optionul::-webkit-scrollbar-thumb {/*滚动条里面小方块*/\r\n        border-radius: 10px;\r\n         -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);\r\n        background: #535353;\r\n    }\r\n    .lg-productionCategoryArea .optionul::-webkit-scrollbar-track {/*滚动条里面轨道*/\r\n        -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);\r\n        border-radius: 10px;\r\n        background: #EDEDED;\r\n    }\r\n}\r\n/* 1441px xl 大电视*/\r\n@media screen and (min-width:90.063em){\r\n    .xl-chartArea-12{\r\n        height: 790px;\r\n        border-right: 0;\r\n        border-bottom: 0;\r\n    }\r\n    .xl-chartArea{\r\n        height: 431px;\r\n        border-right: 1px solid rgba(167, 165, 165, 0.795);\r\n        border-bottom: 0;\r\n    }\r\n    .xl-title{\r\n        font-size: 1.3em;\r\n        text-align: center;\r\n        border-bottom: 1px solid rgba(167, 165, 165, 0.795);\r\n    }\r\n    .xl-productionTypeArea {\r\n        margin: -7px 0 0 0;\r\n        height: 300px;\r\n    }\r\n    .xl-productionTypeLi {\r\n        line-height:2.5;\r\n        font-size: 17px;\r\n        margin: 0 0 0 -30px;\r\n    }\r\n    .xl-productionCategoryArea {\r\n        margin: 7px 0 0 0;\r\n        height: 470px;\r\n    }    \r\n    .xl-productionCategoryArea .optionul {\r\n        height: 440px;\r\n        overflow-x: hidden;\r\n        overflow-y: scroll;\r\n    }\r\n    .xl-productionCategoryArea .optionul::-webkit-scrollbar {\r\n        display: none;\r\n        width: 10px;\r\n    }\r\n    .xl-productionCategoryArea .optionul:hover::-webkit-scrollbar {\r\n        display: inline-block;\r\n    }\r\n    .xl-productionCategoryArea .optionul::-webkit-scrollbar-thumb {/*滚动条里面小方块*/\r\n        border-radius: 10px;\r\n         -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);\r\n        background: #535353;\r\n    }\r\n    .xl-productionCategoryArea .optionul::-webkit-scrollbar-track {/*滚动条里面轨道*/\r\n        -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);\r\n        border-radius: 10px;\r\n        background: #EDEDED;\r\n    }\r\n}"

/***/ }),

/***/ "./src/app/cassette-use-status/common/common.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g\">\n  <div id=\"BPWIPCSTUseStatusChart\" echarts [options]=\"BPWIPCSTUseStatusChartOption\" class=\"ui-g-6 ui-lg-6 ui-xl-6 ui-md-6 ui-sm-6 chartArea xl-chartArea md-chartArea lg-chartArea sm-chartArea\"></div>\n  <div id=\"BPBANKCSTUseStatusChart\" echarts [options]=\"BPBANKCSTUseStatusChartOption\" class=\"ui-g-6 ui-lg-6 ui-xl-6 ui-md-6 ui-sm-6 chartArea xl-chartArea md-chartArea lg-chartArea-12 sm-chartArea\"></div>\n  <div id=\"BPDummyCSTUseStatusChart\" echarts [options]=\"BPDummyCSTUseStatusChartOption\" class=\"ui-g-12 ui-lg-12 ui-xl-12 ui-md-12 ui-sm-12 chartArea xl-chartArea md-chartArea lg-chartArea-big sm-chartArea\"></div>\n</div>"

/***/ }),

/***/ "./src/app/cassette-use-status/common/common.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommonComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__production_common_model_yieldParam__ = __webpack_require__("./src/app/production/common/model/yieldParam.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_service_api_api_service__ = __webpack_require__("./src/app/common/service/api/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__DrawChartService__ = __webpack_require__("./src/app/cassette-use-status/common/DrawChartService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__breadcrumb_service_breadcrumb_service__ = __webpack_require__("./src/core/layout/breadcrumb/service/breadcrumb.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_layout_retab_service_tab_service__ = __webpack_require__("./src/core/layout/retab/service/tab.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CommonComponent = /** @class */ (function () {
    function CommonComponent(httpService, Echart, BBService, tService) {
        this.httpService = httpService;
        this.Echart = Echart;
        this.BBService = BBService;
        this.tService = tService;
        this.waterMark = '';
        this.currentUserName = '';
        this.YieldParam = new __WEBPACK_IMPORTED_MODULE_1__production_common_model_yieldParam__["a" /* YieldParam */]();
        this.tService.setItems("BPCST Status");
    }
    CommonComponent.prototype.ngOnInit = function () {
        this.DrawWIPChart();
        this.DrawBankChart();
        this.DrawDummyChart();
        this.Task_CstUseStatusTimer();
    };
    CommonComponent.prototype.ngOnDestroy = function () {
        this.clear_Task_CstUseStatusTimer();
    };
    CommonComponent.prototype.DrawWIPChart = function () {
        var _this = this;
        this.YieldParam.shopName = this.Params.FactoryName;
        this.YieldParam.datatype = this.Params.WIP;
        var nowDate = new Date();
        var currentTime = nowDate.toLocaleString();
        this.waterMark = 'BOECD Confidential@' + this.currentUserName + '\n' + currentTime + '@' + localStorage.getItem('currentIP');
        this.httpService.post("/CassetteUseStatus/CSTUseStatusBPWIPAndBANK", this.YieldParam).subscribe(function (res) {
            _this.respText = res;
            _this.BPWIPCSTUseStatusChartOption = _this.Echart.getOption_CSTStatusjiankong("BP WIP CST使用情况", _this.respText, _this.deviceType, _this.waterMark);
        }, function (error) {
        });
    };
    CommonComponent.prototype.DrawBankChart = function () {
        var _this = this;
        this.YieldParam.shopName = this.Params.FactoryName;
        this.YieldParam.datatype = this.Params.BANK;
        var nowDate = new Date();
        var currentTime = nowDate.toLocaleString();
        this.waterMark = 'BOECD Confidential@' + this.currentUserName + '\n' + currentTime + '@' + localStorage.getItem('currentIP');
        this.httpService.post("/CassetteUseStatus/CSTUseStatusBPWIPAndBANK", this.YieldParam).subscribe(function (res) {
            _this.respText = res;
            _this.BPBANKCSTUseStatusChartOption = _this.Echart.getOption_CSTStatusjiankongbank("BP BANK CST使用情况", _this.respText, _this.deviceType, _this.waterMark);
        }, function (error) {
        });
    };
    CommonComponent.prototype.DrawDummyChart = function () {
        var _this = this;
        this.YieldParam.shopName = this.Params.FactoryName;
        this.YieldParam.datatype = this.Params.DUMMY;
        var nowDate = new Date();
        var currentTime = nowDate.toLocaleString();
        this.waterMark = 'BOECD Confidential@' + this.currentUserName + '\n' + currentTime + '@' + localStorage.getItem('currentIP');
        this.httpService.post("/CassetteUseStatus/CSTUseStatusDummy", this.YieldParam).subscribe(function (res) {
            _this.respText = res;
            _this.BPDummyCSTUseStatusChartOption = _this.Echart.getOption_CSTStatusDummyjiankong("Dummy CST使用情况", _this.respText, _this.deviceType, _this.waterMark);
        }, function (error) {
        });
    };
    CommonComponent.prototype.Task_CstUseStatusTimer = function () {
        var _this = this;
        this.timer = setInterval(function () {
            _this.DrawWIPChart();
            _this.DrawBankChart();
            _this.DrawDummyChart();
        }, 100000);
    };
    CommonComponent.prototype.clear_Task_CstUseStatusTimer = function () {
        clearInterval(this.timer);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], CommonComponent.prototype, "Params", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], CommonComponent.prototype, "deviceType", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], CommonComponent.prototype, "MenuItems", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], CommonComponent.prototype, "currentUserName", void 0);
    CommonComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-common',
            template: __webpack_require__("./src/app/cassette-use-status/common/common.component.html"),
            styles: [__webpack_require__("./src/app/cassette-use-status/common/common.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__common_service_api_api_service__["a" /* ApiService */],
            __WEBPACK_IMPORTED_MODULE_3__DrawChartService__["a" /* CassetteChartService */],
            __WEBPACK_IMPORTED_MODULE_4__breadcrumb_service_breadcrumb_service__["a" /* BreadcrumbService */],
            __WEBPACK_IMPORTED_MODULE_5_core_layout_retab_service_tab_service__["a" /* TabService */]])
    ], CommonComponent);
    return CommonComponent;
}());



/***/ })

});
//# sourceMappingURL=cassette-use-status.module.chunk.js.map