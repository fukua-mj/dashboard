webpackJsonp(["bp.module"],{

/***/ "./src/app/operatormonitor/bp/bp-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BpRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bpmonitor_bpmonitor_component__ = __webpack_require__("./src/app/operatormonitor/bp/bpmonitor/bpmonitor.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__prdmonitor_prdmonitor_component__ = __webpack_require__("./src/app/operatormonitor/bp/prdmonitor/prdmonitor.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    {
        path: 'BP_OP',
        component: __WEBPACK_IMPORTED_MODULE_2__bpmonitor_bpmonitor_component__["a" /* BpmonitorComponent */]
    },
    {
        path: 'prdmonitor',
        component: __WEBPACK_IMPORTED_MODULE_3__prdmonitor_prdmonitor_component__["a" /* PrdmonitorComponent */]
    },
];
var BpRoutingModule = /** @class */ (function () {
    function BpRoutingModule() {
    }
    BpRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"]]
        })
    ], BpRoutingModule);
    return BpRoutingModule;
}());



/***/ }),

/***/ "./src/app/operatormonitor/bp/bp.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BpModule", function() { return BpModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bp_routing_module__ = __webpack_require__("./src/app/operatormonitor/bp/bp-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__bpmonitor_bpmonitor_component__ = __webpack_require__("./src/app/operatormonitor/bp/bpmonitor/bpmonitor.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__bpmonitorcommon_bpmonitorcommon_component__ = __webpack_require__("./src/app/operatormonitor/bp/bpmonitorcommon/bpmonitorcommon.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__node_modules_primeng_primeng__ = __webpack_require__("./node_modules/primeng/primeng.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__node_modules_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__node_modules_primeng_primeng__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__node_modules_ngx_echarts__ = __webpack_require__("./node_modules/ngx-echarts/ngx-echarts.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__node_modules_angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__node_modules_primeng_table__ = __webpack_require__("./node_modules/primeng/table.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__node_modules_primeng_table___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__node_modules_primeng_table__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__bpmonitorcommon_BP_OPChartService__ = __webpack_require__("./src/app/operatormonitor/bp/bpmonitorcommon/BP_OPChartService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__prdmonitor_prdmonitor_component__ = __webpack_require__("./src/app/operatormonitor/bp/prdmonitor/prdmonitor.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__common_chart_bpprdmonitor_bpprdmonitor_component__ = __webpack_require__("./src/app/operatormonitor/common/chart/bpprdmonitor/bpprdmonitor.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var BpModule = /** @class */ (function () {
    function BpModule() {
    }
    BpModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__bp_routing_module__["a" /* BpRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_5__node_modules_primeng_primeng__["CalendarModule"],
                __WEBPACK_IMPORTED_MODULE_6__node_modules_ngx_echarts__["a" /* NgxEchartsModule */],
                __WEBPACK_IMPORTED_MODULE_7__node_modules_angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_8__node_modules_primeng_table__["TableModule"],
                __WEBPACK_IMPORTED_MODULE_5__node_modules_primeng_primeng__["CalendarModule"],
                __WEBPACK_IMPORTED_MODULE_5__node_modules_primeng_primeng__["RadioButtonModule"],
                __WEBPACK_IMPORTED_MODULE_5__node_modules_primeng_primeng__["ButtonModule"],
                __WEBPACK_IMPORTED_MODULE_5__node_modules_primeng_primeng__["TabViewModule"],
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__bpmonitor_bpmonitor_component__["a" /* BpmonitorComponent */], __WEBPACK_IMPORTED_MODULE_4__bpmonitorcommon_bpmonitorcommon_component__["a" /* BpmonitorcommonComponent */], __WEBPACK_IMPORTED_MODULE_10__prdmonitor_prdmonitor_component__["a" /* PrdmonitorComponent */], __WEBPACK_IMPORTED_MODULE_11__common_chart_bpprdmonitor_bpprdmonitor_component__["a" /* BpprdmonitorComponent */]],
            providers: [__WEBPACK_IMPORTED_MODULE_9__bpmonitorcommon_BP_OPChartService__["a" /* DrawBp_OpChart */]]
        })
    ], BpModule);
    return BpModule;
}());



/***/ }),

/***/ "./src/app/operatormonitor/bp/bpmonitor/bpmonitor.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/operatormonitor/bp/bpmonitor/bpmonitor.component.html":
/***/ (function(module, exports) {

module.exports = "<p-tabView>\n\n    <p-tabPanel header=\"TMS\">\n        <app-bpmonitorcommon  #Child_TMScomponent [Items]=\"TMSItems\" [DataType]=\"TMSDataType\" [StartTime]=\"StartTime\" [EndTime]=\"EndTime\" [selectedGetDataWay]=\"SelectTMSDataType\" > \n        </app-bpmonitorcommon>\n    </p-tabPanel>\n\n    <p-tabPanel header=\"Repair\">\n        <app-bpmonitorcommon  #Child_RepairComponent [Items]=\"RepairItems\" [DataType]=\"RepairDataType\" [StartTime]=\"StartTime\" [EndTime]=\"EndTime\" [selectedGetDataWay]=\"SelectRepairDataType\" > \n        </app-bpmonitorcommon>\n    </p-tabPanel>\n\n</p-tabView>\n\n\n"

/***/ }),

/***/ "./src/app/operatormonitor/bp/bpmonitor/bpmonitor.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BpmonitorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__bpmonitorcommon_bpmonitorcommon_component__ = __webpack_require__("./src/app/operatormonitor/bp/bpmonitorcommon/bpmonitorcommon.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_layout_retab_service_tab_service__ = __webpack_require__("./src/core/layout/retab/service/tab.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__production_common_model_yieldParam__ = __webpack_require__("./src/app/production/common/model/yieldParam.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BpmonitorComponent = /** @class */ (function () {
    function BpmonitorComponent(tService) {
        this.tService = tService;
        this.YieldParam = new __WEBPACK_IMPORTED_MODULE_3__production_common_model_yieldParam__["a" /* YieldParam */]();
        tService.setItems("BP_OP 监控");
    }
    BpmonitorComponent.prototype.ngOnInit = function () {
        this.SelectTMSDataType = "TMS-Defect Count";
        this.SelectRepairDataType = "Repair-Defect Count";
        this.TMSItems = [
            "ALL",
            "ACT",
            "GA1",
            "GA2",
            "SDT",
            "ELSE"
        ];
        this.RepairItems = [
            "ALL",
            "ACT",
            "GA1",
            "GA2",
            "SDT",
            "AND",
            "CVD",
            "ELSE",
        ];
        this.TMSDataType = [
            {
                value: "TMS-Defect Count",
                Type: "Defect Count"
            },
            {
                value: "TMS-Glass Count",
                Type: "Glass Count"
            },
        ];
        this.RepairDataType = [
            {
                value: "Repair-Defect Count",
                Type: "Defect Count"
            },
            {
                value: "Repair-Glass Count",
                Type: "Glass Count"
            },
        ];
        this.getTime();
    };
    BpmonitorComponent.prototype.ngOnDestory = function () {
    };
    BpmonitorComponent.prototype.getTime = function () {
        var timeNow = new Date();
        var CheckTime = new Date(timeNow.getFullYear(), timeNow.getMonth(), timeNow.getDate(), 8, 0);
        if (timeNow > CheckTime) {
            //今天到明天
            var Today = new Date();
            this.StartTime = new Date(Today.getFullYear(), Today.getMonth(), Today.getDate(), 8, 0);
            this.EndTime = new Date(Today.getFullYear(), Today.getMonth(), Today.getDate() + 1, 8, 0);
        }
        else {
            //昨天到今天
            var Today = new Date();
            this.StartTime = new Date(Today.getFullYear(), Today.getMonth(), Today.getDate() - 1, 8, 0);
            this.EndTime = new Date(Today.getFullYear(), Today.getMonth(), Today.getDate(), 8, 0);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("Child_TMScomponent"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__bpmonitorcommon_bpmonitorcommon_component__["a" /* BpmonitorcommonComponent */])
    ], BpmonitorComponent.prototype, "Child_TMScomponent", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("Child_RepairComponent"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__bpmonitorcommon_bpmonitorcommon_component__["a" /* BpmonitorcommonComponent */])
    ], BpmonitorComponent.prototype, "Child_RepairComponent", void 0);
    BpmonitorComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-bpmonitor',
            template: __webpack_require__("./src/app/operatormonitor/bp/bpmonitor/bpmonitor.component.html"),
            styles: [__webpack_require__("./src/app/operatormonitor/bp/bpmonitor/bpmonitor.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_core_layout_retab_service_tab_service__["a" /* TabService */]])
    ], BpmonitorComponent);
    return BpmonitorComponent;
}());



/***/ }),

/***/ "./src/app/operatormonitor/bp/bpmonitorcommon/BP_OPChartService.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DrawBp_OpChart; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var DrawBp_OpChart = /** @class */ (function () {
    function DrawBp_OpChart() {
    }
    DrawBp_OpChart.prototype.getOption_OperatorBPTMS = function (title, respText, YaxisLabel, Category, waterMark) {
        var option = {
            title: [{
                    text: title,
                    align: 'left',
                    left: '0%',
                    top: '0%',
                    textStyle: {
                        fontFamily: '微软雅黑',
                        fontSize: '160%',
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
                            return '<div style="border-bottom: 1px solid rgba(255,255,255,.3); font-size: 15px;padding-bottom: 5px;margin-bottom: 5px">'
                                + obj.name + '：'
                                + '</div>'
                                + '<div style="font-size:12px">'
                                + obj.seriesName + '：' + value[1] + " " + Category + '<br>'
                                + '</div>';
                            //    + obj.seriesName+' Defect Qty：' + value[2] +'<br>'
                            //   + 'Out Qty：' + value[3] +'<br>'
                        }
                        if (obj.seriesType == "line") {
                            return '<div style="border-bottom: 1px solid rgba(255,255,255,.3); font-size: 15px;padding-bottom: 5px;margin-bottom: 5px">'
                                + obj.name + '：'
                                + '</div>'
                                + '<div style="font-size:12px">'
                                + obj.seriesName + '：' + value[1] + ' S' + '<br>'
                                + '</div>';
                            /*		                        + obj.seriesName+' Defect Qty：' + value[2] +'<br>'
                                                            + 'Out Qty：' + value[3] +'<br>'*/
                        }
                    }
                }
            },
            legend: {
                data: eval('(' + respText.legenddata + ')'),
                type: 'scroll',
                left: '30%',
                top: '2.5%',
                //图例排布
                width: '69%',
                itemWidth: 20,
                itemHeight: 10
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
                        fontSize: '90%',
                        //margin:'15',
                        interval: 0,
                        rotate: 330,
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
                    name: Category,
                    nameTextStyle: {
                        fontSize: '90%',
                        fontFamily: '微软雅黑',
                        color: 'rgb(66,66,66)',
                    },
                    axisLabel: {
                        formatter: YaxisLabel,
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
                    splitNumber: 4,
                }, {
                    type: 'value',
                    gridIndex: 0,
                    //name: 'Yield',
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
                        fontSize: '90%',
                        fontFamily: '微软雅黑',
                        color: 'rgb(66,66,66)',
                    },
                    axisLabel: {
                        formatter: '{value}S',
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
            dataZoom: [{
                    type: 'slider',
                    show: true,
                    xAxisIndex: [0, 1],
                    handleSize: 20,
                    height: 6,
                    left: 30,
                    right: 40,
                    bottom: 10,
                    handleColor: '#ddd',
                    handleStyle: {
                        borderColor: "#cacaca",
                        borderWidth: "1",
                        shadowBlur: 2,
                        background: "#ddd",
                        shadowColor: "#ddd",
                    },
                    /* fillerColor: new echarts.graphic.LinearGradient(1, 0, 0, 0, [{
                        //给颜色设置渐变色 前面4个参数，给第一个设置1，第四个设置0 ，就是水平渐变
                        //给第一个设置0，第四个设置1，就是垂直渐变
                        offset: 0,
                        color: '#1eb5e5'
                    }, {
                        offset: 1,
                        color: '#5ccbb1'
                    }]), */
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
            grid: [{
                    x: '7%',
                    x2: '7%',
                    y: '24%',
                    height: '55%'
                }, {
                    x: '7%',
                    x2: '7%',
                    y2: '2%',
                    height: '0%'
                }],
            series: eval('(' + respText.series + ')'),
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
    DrawBp_OpChart.prototype.getOption_OperatorBPTMSOpeartor = function (title, respText, YaxisLabel, Category, waterMark) {
        var option = {
            title: [{
                    text: title + " 产能监控",
                    align: 'left',
                    left: '0%',
                    top: '0%',
                    textStyle: {
                        fontFamily: '微软雅黑',
                        fontSize: '160%',
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
                            return '<div style="border-bottom: 1px solid rgba(255,255,255,.3); font-size: 15px;padding-bottom: 5px;margin-bottom: 5px">'
                                + obj.name + '：'
                                + '</div>'
                                + '<div style="font-size:12px">'
                                + obj.seriesName + '：' + value[1] + " " + Category + '<br>'
                                + '</div>';
                            //    + obj.seriesName+' Defect Qty：' + value[2] +'<br>'
                            //   + 'Out Qty：' + value[3] +'<br>'
                        }
                        if (obj.seriesType == "line") {
                            return '<div style="border-bottom: 1px solid rgba(255,255,255,.3); font-size: 15px;padding-bottom: 5px;margin-bottom: 5px">'
                                + obj.name + '：'
                                + '</div>'
                                + '<div style="font-size:12px">'
                                + obj.seriesName + '：' + value[1] + 'S' + '<br>'
                                + '</div>';
                            /*		                        + obj.seriesName+' Defect Qty：' + value[2] +'<br>'
                                                            + 'Out Qty：' + value[3] +'<br>'*/
                        }
                    }
                }
            },
            legend: {
                data: eval('(' + respText.legenddata + ')'),
                type: 'scroll',
                left: '30%',
                top: '2.5%',
                //图例排布
                width: '49%',
                itemWidth: 20,
                itemHeight: 10
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
                        //margin:'15',
                        interval: 0,
                        rotate: 325,
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
                    name: Category,
                    nameTextStyle: {
                        fontSize: '90%',
                        fontFamily: '微软雅黑',
                        color: 'rgb(66,66,66)',
                    },
                    axisLabel: {
                        formatter: YaxisLabel,
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
                    splitNumber: 4,
                },
            ],
            dataZoom: [{
                    type: 'slider',
                    show: true,
                    xAxisIndex: [0, 1],
                    handleSize: 20,
                    height: 6,
                    left: 30,
                    right: 40,
                    bottom: 10,
                    handleColor: '#ddd',
                    handleStyle: {
                        borderColor: "#cacaca",
                        borderWidth: "1",
                        shadowBlur: 2,
                        background: "#ddd",
                        shadowColor: "#ddd",
                    },
                    /*  fillerColor: new echarts.graphic.LinearGradient(1, 0, 0, 0, [{
                         //给颜色设置渐变色 前面4个参数，给第一个设置1，第四个设置0 ，就是水平渐变
                         //给第一个设置0，第四个设置1，就是垂直渐变
                         offset: 0,
                         color: '#1eb5e5'
                     }, {
                         offset: 1,
                         color: '#5ccbb1'
                     }]), */
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
            grid: [{
                    x: '7%',
                    x2: '7%',
                    y: '24%',
                    height: '55%'
                }, {
                    x: '7%',
                    x2: '7%',
                    y2: '2%',
                    height: '0%'
                }],
            series: eval('(' + respText.series + ')'),
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
    DrawBp_OpChart = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__node_modules_angular_core__["Injectable"])()
    ], DrawBp_OpChart);
    return DrawBp_OpChart;
}());



/***/ }),

/***/ "./src/app/operatormonitor/bp/bpmonitorcommon/bpmonitorcommon.component.css":
/***/ (function(module, exports) {

module.exports = "/* .chartArea-12{\r\n    height: 700px;\r\n    border-right: 0;\r\n    border-bottom: 0;\r\n}\r\n.chartArea{\r\n    height: 700px;\r\n}\r\n.productionTypeArea {\r\n    height: 300px;\r\n}\r\n.productionCategoryArea {\r\n    height: 400px;\r\n}\r\nul {\r\n    list-style-type: none;\r\n}\r\n\r\n@media screen and (max-width:40em){\r\n    .sm-chartArea-12{\r\n        height: 401px;\r\n        border-right: 0;\r\n        border-bottom: 0;\r\n    }\r\n    .sm-chartArea{\r\n        height: 300px;\r\n        border-bottom: 1px solid rgba(167, 165, 165, 0.795);\r\n    }\r\n    .title{\r\n        font-size: 1.3em;\r\n        text-align: center;\r\n        border-bottom: 1px solid rgba(167, 165, 165, 0.795);\r\n    }\r\n    .sm-productionTypeArea {\r\n        margin: 0 0 0 0;\r\n        height: 214px;\r\n    }\r\n    .sm-productionTypeLi {\r\n        line-height:2.5;\r\n        margin: 0 0 0 -30px;\r\n    }\r\n    .sm-productionCategoryArea {\r\n        margin: 0 0 0 0;\r\n        height: 214px;\r\n    } \r\n}\r\n\r\n@media screen and (min-width:40.063em){\r\n    .md-chartArea-12{\r\n        height: 829px;\r\n        border-right: 0;\r\n        border-bottom: 0;\r\n    }\r\n    .md-chartArea{\r\n        height: 600px;\r\n        border-bottom: 1px solid rgba(167, 165, 165, 0.795);\r\n    }\r\n    .title{\r\n        font-size: 1.3em;\r\n        text-align: center;\r\n        border-bottom: 1px solid rgba(167, 165, 165, 0.795);\r\n    }\r\n    .md-productionTypeArea {\r\n        margin: 0 0 0 0;\r\n        height: 214px;\r\n    }\r\n    .md-productionTypeLi {\r\n        line-height:2.5;\r\n        margin: 0 0 0 -30px;\r\n    }\r\n    .md-productionCategoryArea {\r\n        margin: 0 0 0 0;\r\n        height: 214px;\r\n    } \r\n\r\n}\r\n\r\n@media screen and (min-width:64.063em){\r\n    .lg-chartArea-12{\r\n        height: 268px;\r\n        border-right: 1px solid rgba(167, 165, 165, 0.795);\r\n        border-bottom: 0;\r\n        margin:  0 0 0 0;\r\n    }\r\n    .lg-chartArea{\r\n        height: 268px;\r\n        border-right: 1px solid rgba(167, 165, 165, 0.795);\r\n        border-bottom: 1;\r\n        margin:  0 0 0 0;\r\n    }\r\n    .lg-title{\r\n        font-size: 1.0em;\r\n        text-align: center;\r\n        border-bottom: 1px solid rgba(167, 165, 165, 0.795);\r\n    }\r\n    .lg-productionTypeArea {\r\n        margin: -7px 0 0 0;\r\n        height: 100px;\r\n    }\r\n    .lg-productionTypeLi {\r\n        line-height:1.8;\r\n        font-size: 14px;\r\n        margin: 0 0 0 -30px;\r\n    }\r\n    .lg-productionCategoryArea {\r\n        margin: 7px 0 0 0;\r\n        height: 200px;\r\n        position: relative;\r\n        bottom: 80px;\r\n    } \r\n    .lg-productionCategoryArea .optionul {\r\n        height: 280px;\r\n        overflow-x: hidden;\r\n        overflow-y: scroll;\r\n    }\r\n    .lg-productionCategoryArea .optionul::-webkit-scrollbar {\r\n        display: none;\r\n        width: 6px;\r\n    }\r\n    .lg-productionCategoryArea .optionul:hover::-webkit-scrollbar {\r\n        display: inline-block;\r\n    }\r\n    .lg-productionCategoryArea .optionul::-webkit-scrollbar-thumb {\r\n        border-radius: 10px;\r\n        -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);\r\n        background: #535353;\r\n    }\r\n    .lg-productionCategoryArea .optionul::-webkit-scrollbar-track {\r\n        -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);\r\n        border-radius: 10px;\r\n        background: #EDEDED;\r\n    }\r\n    .lg-timechoose{\r\n        border-top : 0; \r\n        align-content:center;\r\n    }\r\n}\r\n\r\n@media screen and (min-width:90.063em){\r\n    .xl-chartArea-12{\r\n        height: 340px;\r\n        border-right: 0;\r\n        border-bottom: 0;\r\n    }\r\n    .xl-chartArea{\r\n        height: 340px;\r\n        border-right: 1px solid rgba(167, 165, 165, 0.795);\r\n        border-bottom: 0;\r\n    }\r\n    .xl-title{\r\n        font-size: 1.3em;\r\n        text-align: center;\r\n        border-bottom: 1px solid rgba(167, 165, 165, 0.795);\r\n    }\r\n    .xl-productionTypeArea {\r\n        margin: -7px 0 0 0;\r\n        height: 300px;\r\n    }\r\n    .xl-productionTypeLi {\r\n        line-height:2.5;\r\n        font-size: 17px;\r\n        margin: 0 0 0 -30px;\r\n    }\r\n    .xl-productionCategoryArea {\r\n        margin: 7px 0 0 0;\r\n        height: 440px;\r\n    }    \r\n    .xl-productionCategoryArea .optionul {\r\n        height: 410px;\r\n        overflow-x: hidden;\r\n        overflow-y: scroll;\r\n    }\r\n    .xl-productionCategoryArea .optionul::-webkit-scrollbar {\r\n        display: none;\r\n        width: 10px;\r\n    }\r\n    .xl-productionCategoryArea .optionul:hover::-webkit-scrollbar {\r\n        display: inline-block;\r\n    }\r\n    .xl-productionCategoryArea .optionul::-webkit-scrollbar-thumb {\r\n        border-radius: 10px;\r\n         -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);\r\n        background: #535353;\r\n    }\r\n    .xl-productionCategoryArea .optionul::-webkit-scrollbar-track {\r\n        -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);\r\n        border-radius: 10px;\r\n        background: #EDEDED;\r\n    }\r\n} */\r\n\r\n.chartArea-12{\r\n    height: 700px;\r\n    border-right: 0;\r\n    border-bottom: 0;\r\n}\r\n\r\n.chartArea{\r\n    height: 700px;\r\n}\r\n\r\n.productionTypeArea {\r\n    height: 300px;\r\n}\r\n\r\n.productionCategoryArea {\r\n    height: 400px;\r\n}\r\n\r\nul {\r\n    list-style-type: none;\r\n}\r\n\r\n.button{\r\n    margin: 40% 0 10% 10%;\r\n    width: 100%;\r\n}\r\n\r\n.calender {\r\n    width: 100px;\r\n}\r\n\r\n/* 640px 手机 sm */\r\n\r\n@media screen and (max-width:40em){\r\n    .sm-chartArea-12{\r\n        height: 401px;\r\n        border-right: 0;\r\n        border-bottom: 0;\r\n    }\r\n    .sm-chartArea{\r\n        height: 300px;\r\n        border-bottom: 1px solid rgba(167, 165, 165, 0.795);\r\n    }\r\n    .title{\r\n        font-size: 1.3em;\r\n        text-align: center;\r\n        border-bottom: 1px solid rgba(167, 165, 165, 0.795);\r\n    }\r\n    .sm-productionTypeArea {\r\n        margin: 0 0 0 0;\r\n        height: 214px;\r\n    }\r\n    .sm-productionTypeLi {\r\n        line-height:2.5;\r\n        margin: 0 0 0 -30px;\r\n    }\r\n    .sm-productionCategoryArea {\r\n        margin: 0 0 0 0;\r\n        height: 214px;\r\n    } \r\n}\r\n\r\n/* 641px 平板 md*/\r\n\r\n@media screen and (min-width:40.063em){\r\n    .md-chartArea-12{\r\n        height: 829px;\r\n        border-right: 0;\r\n        border-bottom: 0;\r\n    }\r\n    .md-chartArea{\r\n        height: 600px;\r\n        border-bottom: 1px solid rgba(167, 165, 165, 0.795);\r\n    }\r\n    .title{\r\n        font-size: 1.3em;\r\n        text-align: center;\r\n        border-bottom: 1px solid rgba(167, 165, 165, 0.795);\r\n    }\r\n    .md-productionTypeArea {\r\n        margin: 0 0 0 0;\r\n        height: 214px;\r\n    }\r\n    .md-productionTypeLi {\r\n        line-height:2.5;\r\n        margin: 0 0 0 -30px;\r\n    }\r\n    .md-productionCategoryArea {\r\n        margin: 0 0 0 0;\r\n        height: 214px;\r\n    } \r\n\r\n}\r\n\r\n/* 1025px lg 显示器*/\r\n\r\n@media screen and (min-width:64.063em){\r\n    .lg-chartArea-12{\r\n        height: 577px;\r\n        border-right: 0;\r\n        border-bottom: 0;\r\n    }\r\n    .lg-chartArea{\r\n        height: 571px;\r\n        border-right: 1px solid rgba(167, 165, 165, 0.795);\r\n        border-bottom: 0;\r\n    }\r\n    .lg-subchartArea {\r\n        height: 290px;\r\n    }\r\n    .lg-title{\r\n        font-size: 1.0em;\r\n        text-align: center;\r\n        border-bottom: 1px solid rgba(167, 165, 165, 0.795);\r\n    }\r\n    .lg-productionTypeArea {\r\n        margin: -7px 0 0 0;\r\n        height: 210px;\r\n    }\r\n    .lg-productionTypeLi {\r\n        line-height:1.8;\r\n        font-size: 14px;\r\n        margin: 0 0 0 -30px;\r\n    }\r\n    .lg-productionCategoryArea {\r\n        margin: 7px 0 0 0;\r\n        height: 160px;\r\n    } \r\n    .lg-productionCategoryArea .optionul {\r\n        height: 135px;\r\n        overflow-x: hidden;\r\n        overflow-y: scroll;\r\n    }\r\n    .lg-productionCategoryArea .optionul::-webkit-scrollbar {\r\n        display: none;\r\n        width: 10px;\r\n    }\r\n    .lg-productionCategoryArea .optionul:hover::-webkit-scrollbar {\r\n        display: inline-block;\r\n    }\r\n    .lg-productionCategoryArea .optionul::-webkit-scrollbar-thumb {/*滚动条里面小方块*/\r\n        border-radius: 10px;\r\n         -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);\r\n        background: #535353;\r\n    }\r\n    .lg-productionCategoryArea .optionul::-webkit-scrollbar-track {/*滚动条里面轨道*/\r\n        -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);\r\n        border-radius: 10px;\r\n        background: #EDEDED;\r\n    }\r\n    .lg-lineNameArea {\r\n        margin: 0 0 0 0;\r\n        height: 170px;\r\n    } \r\n    .lg-lineNameArea .optionul {\r\n        height: 130px;\r\n        overflow-x: hidden;\r\n        overflow-y: scroll;\r\n    }\r\n    .lg-lineNameArea .optionul::-webkit-scrollbar {\r\n        display: none;\r\n    }\r\n    .searchbutton {\r\n        height: 20px;\r\n    }\r\n    .ui-inputtext {\r\n        width: 50px !important;\r\n    }\r\n\r\n    .lg-datetimelabel {\r\n        font-size: 13px;\r\n    }\r\n}\r\n\r\n/* 1441px xl 大电视*/\r\n\r\n@media screen and (min-width:90.063em){\r\n    .xl-chartArea-12{\r\n        height: 790px;\r\n        border-right: 0;\r\n        border-bottom: 0;\r\n    }\r\n    .xl-chartArea{\r\n        height: 790px;\r\n        border-right: 1px solid rgba(167, 165, 165, 0.795);\r\n        border-bottom: 0;\r\n    }\r\n    .xl-subchartArea {\r\n        height: 395px;\r\n    }\r\n    .xl-title{\r\n        font-size: 1.3em;\r\n        text-align: center;\r\n        border-bottom: 1px solid rgba(167, 165, 165, 0.795);\r\n    }\r\n    .xl-productionTypeArea {\r\n        margin: -7px 0 0 0;\r\n        height: 250px;\r\n    }\r\n    .xl-productionTypeLi {\r\n        line-height:2.5;\r\n        margin: 0 0 0 -30px;\r\n    }\r\n    .xl-productionCategoryArea {\r\n        margin: 7px 0 0 0;\r\n        height: 355px;\r\n    }  \r\n    .xl-productionCategoryArea .optionul {\r\n        height: 330px;\r\n        overflow-x: hidden;\r\n        overflow-y: scroll;\r\n    }\r\n    .xl-productionCategoryArea .optionul::-webkit-scrollbar {\r\n        display: none;\r\n        width: 10px;\r\n    }\r\n    .xl-productionCategoryArea .optionul:hover::-webkit-scrollbar {\r\n        display: inline-block;\r\n    }\r\n    .xl-productionCategoryArea .optionul::-webkit-scrollbar-thumb {/*滚动条里面小方块*/\r\n        border-radius: 10px;\r\n         -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);\r\n        background: #535353;\r\n    }\r\n    .xl-productionCategoryArea .optionul::-webkit-scrollbar-track {/*滚动条里面轨道*/\r\n        -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);\r\n        border-radius: 10px;\r\n        background: #EDEDED;\r\n    }\r\n    .xl-lineNameArea {\r\n        margin: 7px 0 0 0;\r\n        height: 100px;\r\n    } \r\n    .searchbutton {\r\n        height: 20px;\r\n    }\r\n\r\n    .xl-datetimelabel {\r\n        font-size: 15px;\r\n    }\r\n}"

/***/ }),

/***/ "./src/app/operatormonitor/bp/bpmonitorcommon/bpmonitorcommon.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"ui-g\">\n  <div class=\"ui-g-10\">\n    <div id=\"BPTMSChart\" echarts [options]=\"ChartOption\" (chartClick)=\"chartclick($event)\" class=\"ui-g-12 ui-lg-12 ui-xl-12 ui-md-12 ui-sm-12 chartArea xl-chartArea md-chartArea lg-chartArea sm-chartArea\"></div>\n    <div id=\"BPTMSChart1\" #divChangeChart echarts [options]=\"PeopleChartOption\" class=\"ui-g-12 ui-lg-12 ui-xl-12 ui-md-12 ui-sm-12 chartArea xl-chartArea-12 md-chartArea-12 lg-chartArea-12 sm-chartArea-12\"></div>\n\n  </div>\n  <div class=\"ui-g-2 ui-lg-2 ui-xl-2\">\n    <div class=\"ui-g-12 ui-lg-12 ui-xl-12 ui-md-6 ui-sm-6 productionTypeArea xl-productionTypeArea md-productionTypeArea lg-productionTypeArea sm-productionTypeArea\">\n      <div class=\"xl-title lg-title\">\n        <strong>统计方式</strong>\n      </div>\n      <ul class=\"optionul\">\n        <li *ngFor=\"let item of DataType\" class=\"productionTypeLi xl-productionTypeLi md-productionTypeLi lg-productionTypeLi sm-productionTypeLi\">\n          <p-radioButton value=\"{{item.value}}\" label=\"{{item.Type}}\" [(ngModel)]=\"selectedGetDataWay\" inputId=\"GetDataWay+{{item.value}}\"\n            (click)=\"Drawchart()\"></p-radioButton>\n        </li>\n      </ul>\n    </div>\n\n    <div class=\"ui-g-12 ui-lg-12 ui-xl-12 ui-md-16 ui-sm-6 productionCategoryArea xl-productionCategoryArea md-productionCategoryArea lg-productionCategoryArea sm-productionCategoryArea\">\n      <div class=\"xl-title lg-title\">\n        <strong>当前膜层</strong>\n      </div>\n      <div>\n        <ul class=\"optionul\">\n          <li *ngFor=\"let item of Items\" class=\"productionTypeLi xl-productionTypeLi md-productionTypeLi lg-productionTypeLi sm-productionTypeLi\">\n            <p-radioButton value=\"{{item}}\" label=\"{{item}}\" [(ngModel)]=\"selectedFilm\" (click)=\"Drawchart()\"></p-radioButton>\n          </li>\n        </ul>\n      </div>\n    </div>\n\n  </div>\n  <div class=\"ui-g-12 ui-md-4 ui-lg-4 lg-timechoose\" align=\"center\">\n    <Strong>开始时间：</Strong>\n    <p-calendar [(ngModel)]=\"StartTime\" [showTime]=\"true\" [showIcon]=\"true\"></p-calendar>\n  </div>\n  <div class=\"ui-g-12 ui-md-4 ui-lg-4 lg-timechoose\" align=\"center\">\n    <Strong>结束时间：</Strong>\n    <p-calendar [(ngModel)]=\"EndTime\" [showTime]=\"true\" [showIcon]=\"true\"></p-calendar>\n  </div>\n  <div class=\"ui-g-12 ui-md-4 ui-lg-4 lg-timechoose\" align=\"left\">\n    <p-button label=\"Serach\" (onClick)=\"Drawchart()\"></p-button>\n  </div>\n\n\n\n</div> -->\n\n<div class=\"ui-g\">\n  <div class=\"ui-g-10 ui-lg-10 ui-xl-10 ui-md-12 ui-sm-12 chartArea xl-chartArea md-chartArea lg-chartArea sm-chartArea\">\n    <div id=\"BPTMSChart\" echarts [options]=\"ChartOption\" (chartClick)=\"chartclick($event)\" class=\"ui-g-12 subchartArea xl-subchartArea md-subchartArea lg-subchartArea sm-subchartArea\"></div>\n    <div id=\"BPTMSChart1\" #divChangeChart echarts [options]=\"PeopleChartOption\" class=\"ui-g-12 subchartArea xl-subchartArea md-subchartArea lg-subchartArea sm-subchartArea\"></div>\n  </div>\n  <div class=\"ui-g-2 ui-lg-2 ui-xl-2 ui-md-12 ui-sm-12\">\n    <div class=\"ui-g-12 ui-lg-12 ui-xl-12 ui-md-6 ui-sm-6 productionTypeArea xl-productionTypeArea md-productionTypeArea lg-productionTypeArea sm-productionTypeArea\">\n      <div class=\"xl-title lg-title\"><strong>统计方式</strong></div>\n      <ul class=\"optionul\">\n        <li *ngFor=\"let item of DataType\" class=\"productionTypeLi xl-productionTypeLi md-productionTypeLi lg-productionTypeLi sm-productionTypeLi\">\n          <p-radioButton value=\"{{item.value}}\" label=\"{{item.Type}}\"\n            [(ngModel)]=\"selectedGetDataWay\" inputId=\"GetDataWay+{{item.value}}\"\n            (click)=\"Drawchart()\"></p-radioButton>\n        </li>\n      </ul>\n    </div>\n    <div class=\"ui-g-12 ui-lg-12 ui-xl-12 ui-md-6 ui-sm-6 productionCategoryArea xl-productionCategoryArea md-productionCategoryArea lg-productionCategoryArea sm-productionCategoryArea\">\n      <div class=\"xl-title lg-title\"><strong>当前膜层</strong></div>\n      <ul class=\"optionul\">\n        <li *ngFor=\"let item of Items\" class=\"productionTypeLi xl-productionTypeLi md-productionTypeLi lg-productionTypeLi sm-productionTypeLi\">\n            <p-radioButton value=\"{{item}}\" label=\"{{item}}\" [(ngModel)]=\"selectedFilm\" (click)=\"Drawchart()\"></p-radioButton>\n        </li>\n      </ul>\n    </div>\n    <div class=\"ui-g-12 ui-lg-12 ui-xl-12 ui-md-6 ui-sm-6 lineNameArea xl-lineNameArea md-lineNameArea lg-lineNameArea sm-lineNameArea\">\n      <div class=\"xl-title lg-title\"><strong>日期时间</strong></div>\n      <div class=\"ui-g\">\n        <div class=\"ui-g-10 ui-xl-10 ui-lg-10 xl-datetimelabel lg-datetimelabel\">\n          <span>开始时间 :</span>\n          <p-calendar [(ngModel)]=\"StartTime\" [showTime]=\"true\" [showIcon]=\"true\"></p-calendar>\n          <br />\n          <span>结束时间 :</span>\n          <p-calendar [(ngModel)]=\"EndTime\" [showTime]=\"true\" [showIcon]=\"true\"></p-calendar>\n        </div>\n        <div class=\"ui-g-2 ui-xl-2 ui-lg-2 searchbutton\">\n          <br />\n          <button class=\"button\" pButton type=\"button\" (click)=\"Drawchart()\" icon='fa fa-search'></button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/operatormonitor/bp/bpmonitorcommon/bpmonitorcommon.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BpmonitorcommonComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__production_common_model_yieldParam__ = __webpack_require__("./src/app/production/common/model/yieldParam.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_service_api_api_service__ = __webpack_require__("./src/app/common/service/api/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__BP_OPChartService__ = __webpack_require__("./src/app/operatormonitor/bp/bpmonitorcommon/BP_OPChartService.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BpmonitorcommonComponent = /** @class */ (function () {
    function BpmonitorcommonComponent(httpService, ChartService) {
        this.httpService = httpService;
        this.ChartService = ChartService;
        this.YieldParam = new __WEBPACK_IMPORTED_MODULE_1__production_common_model_yieldParam__["a" /* YieldParam */]();
    }
    BpmonitorcommonComponent.prototype.ngOnInit = function () {
        var nowDate = new Date();
        var currentTime = nowDate.toLocaleString();
        this.selectedFilm = "ALL";
        this.deviceType = localStorage.getItem("deviceType");
        this.waterMark = 'BOECD Confidential@' + localStorage.getItem('currentUserName') + '\n' + currentTime + '@' + localStorage.getItem('currentIP');
        this.Drawchart();
        this.Task_DrawChart();
    };
    BpmonitorcommonComponent.prototype.ngOnDestroy = function () {
        clearInterval(this.timer);
    };
    //TMS
    BpmonitorcommonComponent.prototype.Drawchart = function () {
        var _this = this;
        console.log("In");
        this.DateTimeFormat();
        this.checkDataType = this.selectedGetDataWay.substring(0, 3);
        if (this.checkDataType == "TMS") {
            this.YieldParam.shopName = "BP";
            this.YieldParam.productionType = this.selectedGetDataWay;
            this.YieldParam.productCategory = this.selectedFilm;
            this.YieldParam.starttime = this.StartTimeForUse;
            this.YieldParam.endtime = this.EndTimeForUse;
            this.httpService.post("/echart/operatormonitor/getBpTMSData", this.YieldParam).subscribe(function (res) {
                _this.respText = res;
                _this.OperatorID = _this.respText.OperatorID;
                if (_this.selectedGetDataWay.substring(4, 10) == 'Defect') {
                    _this.ChartOption = _this.ChartService.getOption_OperatorBPTMS("BP检测科人员产能", _this.respText, "{value}", "点", _this.waterMark);
                }
                else {
                    _this.ChartOption = _this.ChartService.getOption_OperatorBPTMS("BP检测科人员产能", _this.respText, "{value}", "张", _this.waterMark);
                }
                _this.DrawTMSPeopleChart();
            }, function (error) {
            });
        }
        else {
            this.YieldParam.shopName = "BP";
            this.YieldParam.productionType = this.selectedGetDataWay;
            this.YieldParam.productCategory = this.selectedFilm;
            this.YieldParam.starttime = this.StartTimeForUse;
            this.YieldParam.endtime = this.EndTimeForUse;
            this.httpService.post("/echart/operatormonitor/getBpTMSRepairData", this.YieldParam).subscribe(function (res) {
                _this.respText = res;
                _this.OperatorID = _this.respText.OperatorID;
                if (_this.selectedGetDataWay.substring(7, 13) == "Defect") {
                    _this.ChartOption = _this.ChartService.getOption_OperatorBPTMS("BP检测科人员产能", _this.respText, "{value}", "点", _this.waterMark);
                }
                else {
                    _this.ChartOption = _this.ChartService.getOption_OperatorBPTMS("BP检测科人员产能", _this.respText, "{value}", "张", _this.waterMark);
                }
                _this.DrawRepairPeopleChart();
            }, function (error) {
            });
        }
    };
    BpmonitorcommonComponent.prototype.DrawTMSPeopleChart = function () {
        var _this = this;
        this.YieldParam.shopName = "BP";
        this.YieldParam.productionType = this.selectedGetDataWay;
        this.YieldParam.productCategory = this.selectedFilm;
        this.YieldParam.starttime = this.StartTimeForUse;
        this.YieldParam.endtime = this.EndTimeForUse;
        this.YieldParam.operationName = this.OperatorID;
        this.httpService.post("/echart/operatormonitor/getBpTMSPeopleData", this.YieldParam).subscribe(function (res) {
            _this.respText = res;
            if (_this.selectedGetDataWay.substring(4, 10) == 'Defect') {
                _this.PeopleChartOption = _this.ChartService.getOption_OperatorBPTMSOpeartor(_this.OperatorID, _this.respText, "{value}", "点", _this.waterMark);
            }
            else {
                _this.PeopleChartOption = _this.ChartService.getOption_OperatorBPTMSOpeartor(_this.OperatorID, _this.respText, "{value}", "张", _this.waterMark);
            }
        }, function (error) {
        });
    };
    //Repair
    BpmonitorcommonComponent.prototype.DrawRepairPeopleChart = function () {
        var _this = this;
        this.YieldParam.shopName = "BP";
        this.YieldParam.productionType = this.selectedGetDataWay;
        this.YieldParam.productCategory = this.selectedFilm;
        this.YieldParam.starttime = this.StartTimeForUse;
        this.YieldParam.endtime = this.EndTimeForUse;
        this.YieldParam.operationName = this.OperatorID;
        this.httpService.post("/echart/operatormonitor/getBpTMSPeopleData", this.YieldParam).subscribe(function (res) {
            _this.respText = res;
            if (_this.selectedGetDataWay.substring(7, 13) == "Defect") {
                _this.PeopleChartOption = _this.ChartService.getOption_OperatorBPTMSOpeartor(_this.OperatorID, _this.respText, "{value}", "点", _this.waterMark);
            }
            else {
                _this.PeopleChartOption = _this.ChartService.getOption_OperatorBPTMSOpeartor(_this.OperatorID, _this.respText, "{value}", "张", _this.waterMark);
            }
        }, function (error) {
        });
    };
    BpmonitorcommonComponent.prototype.DateTimeFormat = function () {
        this.StartTimeForUse = this.StartTime;
        this.EndTimeForUse = this.EndTime;
        var StartHour = this.StartTimeForUse.getHours();
        var StartMonth = this.StartTimeForUse.getMonth() + 1;
        if (StartHour.length > 1) {
            if (StartMonth.length > 1) {
                this.StartTimeForUse = this.StartTimeForUse.getFullYear().toString() + (this.StartTimeForUse.getMonth() + 1).toString() + this.StartTimeForUse.getDate().toString() + this.StartTimeForUse.getHours().toString();
            }
            else {
                this.StartTimeForUse = this.StartTimeForUse.getFullYear().toString() + "0" + (this.StartTimeForUse.getMonth() + 1).toString() + this.StartTimeForUse.getDate().toString() + this.StartTimeForUse.getHours().toString();
            }
        }
        else {
            if (StartMonth.length > 1) {
                this.StartTimeForUse = this.StartTimeForUse.getFullYear().toString() + (this.StartTimeForUse.getMonth() + 1).toString() + this.StartTimeForUse.getDate().toString() + "0" + this.StartTimeForUse.getHours().toString();
            }
            else {
                this.StartTimeForUse = this.StartTimeForUse.getFullYear().toString() + "0" + (this.StartTimeForUse.getMonth() + 1).toString() + this.StartTimeForUse.getDate().toString() + "0" + this.StartTimeForUse.getHours().toString();
            }
        }
        var EndHour = this.EndTimeForUse.getHours();
        var EndMonth = this.EndTimeForUse.getMonth() + 1;
        if (EndHour.length > 1) {
            if (EndMonth.length > 1) {
                this.EndTimeForUse = this.EndTimeForUse.getFullYear().toString() + (this.EndTimeForUse.getMonth() + 1).toString() + this.EndTimeForUse.getDate().toString() + this.EndTimeForUse.getHours().toString();
            }
            else {
                this.EndTimeForUse = this.EndTimeForUse.getFullYear().toString() + "0" + (this.EndTimeForUse.getMonth() + 1).toString() + this.EndTimeForUse.getDate().toString() + this.EndTimeForUse.getHours().toString();
            }
        }
        else {
            if (EndMonth.length > 1) {
                this.EndTimeForUse = this.EndTimeForUse.getFullYear().toString() + (this.EndTimeForUse.getMonth() + 1).toString() + this.EndTimeForUse.getDate().toString() + "0" + this.EndTimeForUse.getHours().toString();
            }
            else {
                this.EndTimeForUse = this.EndTimeForUse.getFullYear().toString() + "0" + (this.EndTimeForUse.getMonth() + 1).toString() + this.EndTimeForUse.getDate().toString() + "0" + this.EndTimeForUse.getHours().toString();
            }
        }
    };
    BpmonitorcommonComponent.prototype.chartclick = function (Params) {
        this.OperatorID = Params.name;
        this.DateTimeFormat();
        this.DrawTMSPeopleChart();
    };
    BpmonitorcommonComponent.prototype.Task_DrawChart = function () {
        var _this = this;
        this.timer = setInterval(function () {
            _this.Drawchart();
        }, 500000);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], BpmonitorcommonComponent.prototype, "Items", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], BpmonitorcommonComponent.prototype, "DataType", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], BpmonitorcommonComponent.prototype, "selectedGetDataWay", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], BpmonitorcommonComponent.prototype, "StartTime", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], BpmonitorcommonComponent.prototype, "EndTime", void 0);
    BpmonitorcommonComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-bpmonitorcommon',
            template: __webpack_require__("./src/app/operatormonitor/bp/bpmonitorcommon/bpmonitorcommon.component.html"),
            styles: [__webpack_require__("./src/app/operatormonitor/bp/bpmonitorcommon/bpmonitorcommon.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__common_service_api_api_service__["a" /* ApiService */],
            __WEBPACK_IMPORTED_MODULE_3__BP_OPChartService__["a" /* DrawBp_OpChart */]])
    ], BpmonitorcommonComponent);
    return BpmonitorcommonComponent;
}());



/***/ }),

/***/ "./src/app/operatormonitor/bp/prdmonitor/prdmonitor.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/operatormonitor/bp/prdmonitor/prdmonitor.component.html":
/***/ (function(module, exports) {

module.exports = "<app-bpprdmonitor [shopName]=\"shopName\" [deviceType]='deviceType'></app-bpprdmonitor>\n"

/***/ }),

/***/ "./src/app/operatormonitor/bp/prdmonitor/prdmonitor.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrdmonitorComponent; });
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

var PrdmonitorComponent = /** @class */ (function () {
    function PrdmonitorComponent() {
        this.shopName = 'BP';
        this.deviceType = localStorage.getItem('deviceType');
    }
    PrdmonitorComponent.prototype.ngOnInit = function () {
    };
    PrdmonitorComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-prdmonitor',
            template: __webpack_require__("./src/app/operatormonitor/bp/prdmonitor/prdmonitor.component.html"),
            styles: [__webpack_require__("./src/app/operatormonitor/bp/prdmonitor/prdmonitor.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PrdmonitorComponent);
    return PrdmonitorComponent;
}());



/***/ }),

/***/ "./src/app/operatormonitor/common/chart/bpprdmonitor/bpprdmonitor.component.css":
/***/ (function(module, exports) {

module.exports = "td {\r\n    text-align: center;\r\n    line-height: 10px;\r\n}\r\n.chartArea-12{\r\n    height: 700px;\r\n    border-right: 0;\r\n    border-bottom: 0;\r\n}\r\n.chartArea{\r\n    height: 700px;\r\n}\r\n.productionTypeArea {\r\n    height: 300px;\r\n}\r\n.productionCategoryArea {\r\n    height: 400px;\r\n}\r\nul {\r\n    list-style-type: none;\r\n}\r\n.selectCondition {\r\n    position: fixed;\r\n}\r\n/* 640px 手机 sm */\r\n@media screen and (max-width:40em){\r\n    .sm-chartArea-12{\r\n        height: 401px;\r\n        border-right: 0;\r\n        border-bottom: 0;\r\n    }\r\n    .sm-chartArea{\r\n        height: 300px;\r\n        border-bottom: 1px solid rgba(167, 165, 165, 0.795);\r\n    }\r\n    .title{\r\n        font-size: 1.3em;\r\n        text-align: center;\r\n        border-bottom: 1px solid rgba(167, 165, 165, 0.795);\r\n    }\r\n    .sm-productionTypeArea {\r\n        margin: 0 0 0 0;\r\n        height: 214px;\r\n    }\r\n    .sm-productionTypeLi {\r\n        line-height:2.5;\r\n        margin: 0 0 0 -30px;\r\n    }\r\n    .sm-productionCategoryArea {\r\n        margin: 0 0 0 0;\r\n        height: 214px;\r\n    } \r\n}\r\n/* 641px 平板 md*/\r\n@media screen and (min-width:40.063em){\r\n    .md-chartArea-12{\r\n        height: 829px;\r\n        border-right: 0;\r\n        border-bottom: 0;\r\n    }\r\n    .md-chartArea{\r\n        height: 600px;\r\n        border-bottom: 1px solid rgba(167, 165, 165, 0.795);\r\n    }\r\n    .title{\r\n        font-size: 1.3em;\r\n        text-align: center;\r\n        border-bottom: 1px solid rgba(167, 165, 165, 0.795);\r\n    }\r\n    .md-productionTypeArea {\r\n        margin: 0 0 0 0;\r\n        height: 214px;\r\n    }\r\n    .md-productionTypeLi {\r\n        line-height:2.5;\r\n        margin: 0 0 0 -30px;\r\n    }\r\n    .md-productionCategoryArea {\r\n        margin: 0 0 0 0;\r\n        height: 214px;\r\n    } \r\n\r\n}\r\n/* 1025px lg 显示器*/\r\n@media screen and (min-width:64.063em){\r\n    .lg-chartArea-12{\r\n        height: 570px;\r\n        border-right: 0;\r\n        border-bottom: 0;\r\n    }\r\n    .lg-chartArea{\r\n        height: 570px;\r\n        border-right: 1px solid rgba(167, 165, 165, 0.795);\r\n        border-bottom: 0;\r\n    }\r\n    .lg-title{\r\n        font-size: 1.0em;\r\n        text-align: center;\r\n        border-bottom: 1px solid rgba(167, 165, 165, 0.795);\r\n    }\r\n    .lg-productionTypeArea {\r\n        margin: -7px 0 0 0;\r\n        height: 240px;\r\n    }\r\n    .lg-productionTypeLi {\r\n        line-height:1.8;\r\n        font-size: 14px;\r\n        margin: 0 0 0 -30px;\r\n    }\r\n    .lg-productionCategoryArea {\r\n        margin: 7px 0 0 0;\r\n        height: 240px;\r\n    } \r\n    .lg-productionCategoryArea .optionul {\r\n        height: 210px;\r\n        overflow-x: hidden;\r\n        overflow-y: scroll;\r\n    }\r\n    .lg-productionCategoryArea .optionul::-webkit-scrollbar {\r\n        display: none;\r\n        width: 6px;\r\n    }\r\n    .lg-productionCategoryArea .optionul:hover::-webkit-scrollbar {\r\n        display: inline-block;\r\n    }\r\n    .lg-productionCategoryArea .optionul::-webkit-scrollbar-thumb {/*滚动条里面小方块*/\r\n        border-radius: 10px;\r\n         -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);\r\n        background: #535353;\r\n    }\r\n    .lg-productionCategoryArea .optionul::-webkit-scrollbar-track {/*滚动条里面轨道*/\r\n        -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);\r\n        border-radius: 10px;\r\n        background: #EDEDED;\r\n    }\r\n    .lg-tablearea{\r\n        min-height: 664px;\r\n    }\r\n}\r\n/* 1441px xl 大电视*/\r\n@media screen and (min-width:90.063em){\r\n    .xl-chartArea-12{\r\n        height: 790px;\r\n        border-right: 0;\r\n        border-bottom: 0;\r\n    }\r\n    .xl-chartArea{\r\n        height: 790px;\r\n        border-right: 1px solid rgba(167, 165, 165, 0.795);\r\n        border-bottom: 0;\r\n    }\r\n    .xl-title{\r\n        font-size: 1.3em;\r\n        text-align: center;\r\n        border-bottom: 1px solid rgba(167, 165, 165, 0.795);\r\n    }\r\n    .xl-productionTypeArea {\r\n        margin: -7px 0 0 0;\r\n        height: 300px;\r\n    }\r\n    .xl-productionTypeLi {\r\n        line-height:2.5;\r\n        font-size: 17px;\r\n        margin: 0 0 0 -30px;\r\n    }\r\n    .xl-productionCategoryArea {\r\n        margin: 7px 0 0 0;\r\n        height: 300px;\r\n    }    \r\n    .xl-productionCategoryArea .optionul {\r\n        height: 270px;\r\n        overflow-x: hidden;\r\n        overflow-y: scroll;\r\n    }\r\n    .xl-productionCategoryArea .optionul::-webkit-scrollbar {\r\n        display: none;\r\n        width: 10px;\r\n    }\r\n    .xl-productionCategoryArea .optionul:hover::-webkit-scrollbar {\r\n        display: inline-block;\r\n    }\r\n    .xl-productionCategoryArea .optionul::-webkit-scrollbar-thumb {/*滚动条里面小方块*/\r\n        border-radius: 10px;\r\n         -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);\r\n        background: #535353;\r\n    }\r\n    .xl-productionCategoryArea .optionul::-webkit-scrollbar-track {/*滚动条里面轨道*/\r\n        -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);\r\n        border-radius: 10px;\r\n        background: #EDEDED;\r\n    }\r\n    .xl-tablearea{\r\n        min-height: 883px;\r\n    }\r\n}"

/***/ }),

/***/ "./src/app/operatormonitor/common/chart/bpprdmonitor/bpprdmonitor.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g xl-tablearea lg-tablearea\">\n  <div class=\"ui-g-10 ui-lg-10 ui-xl-10 ui-md-12 ui-sm-12\">\n    <p-table [value]=\"values\" #dailyReportTable [loading]=\"loading\" selectionMode=\"single\" [(selection)]=\"selectedItem\"\n      (onRowSelect)=\"onRowSelect($event)\" [resizableColumns]=\"true\" [paginator]=\"false\" [rows]=\"15\"\n      [globalFilterFields]=\"['']\" [resizableColumns]=\"true\">\n      <ng-template pTemplate=\"caption\">\n        BP 小时别产能监控\n      </ng-template>\n      <ng-template pTemplate=\"body\" let-data>\n        <tr *ngFor=\"let header of data.header.items\">\n          <td *ngFor=\"let item of header\" [attr.rowspan]=\"item.rowspan\" [attr.colspan]=\"item.colspan\" [ngStyle]=\"{'background-color': data.header.backgroundColor,\n          'color':data.header.fontColor,\n          'line-height':data.header.lineheight,\n          'font-size':data.header.fontsize,\n          'width':item.width}\">\n            <strong>{{item.header}}</strong>\n          </td>\n        </tr>\n        <tr *ngFor=\"let value of data.values.items\" [pSelectableRow]=\"values\">\n          <td *ngFor=\"let item of value\" class=\"ui-resizable-column\" [attr.rowspan]=\"item.rowspan\" [attr.colspan]=\"item.colspan\"\n            [ngStyle]=\"{'color': item.color,'width':item.width,'font-size':item.fontsize}\" pEditableColumn>\n            <label *ngIf=\"!item.editable\">{{item.value}}</label>\n            <p-cellEditor *ngIf=\"item.editable\">\n              <ng-template pTemplate=\"input\">\n                <textarea pInputTextArea [rows]=\"item.editrows\" [cols]=\"item.editcols\" autoResize=\"autoResize\"\n                  [(ngModel)]=\"item.value\" (focus)=\"focus(this)\" (blur)=\"blur()\"></textarea>\n              </ng-template>\n              <ng-template pTemplate=\"output\">\n                <label>{{item.value}}</label>\n              </ng-template>\n            </p-cellEditor>\n          </td>\n        </tr>\n      </ng-template>\n    </p-table>\n  </div>\n  <div class=\"ui-g-2 ui-lg-2 ui-xl-2 ui-md-12 ui-sm-12\">\n    <div class=\"selectCondition\">\n\n      <div class=\"ui-g-12 ui-lg-12 ui-xl-12 ui-md-6 ui-sm-6 productionCategoryArea xl-productionCategoryArea md-productionCategoryArea lg-productionCategoryArea sm-productionCategoryArea\">\n        <div class=\"xl-title lg-title ui-g-12\"><strong>ProcessType</strong></div>\n        <ul class=\"optionul\">\n          <li *ngFor=\"let item of lineType\" class=\"productionTypeLi xl-productionTypeLi md-productionTypeLi lg-productionTypeLi sm-productionTypeLi\">\n            <p-radioButton name=\"LineType\" value=\"{{item}}\" label=\"{{item}}\" [(ngModel)]=\"selectedLineType\" inputId=\"lineType+{{item}}\"\n              (click)=\"getGridValue()\"></p-radioButton>\n          </li>\n        </ul>\n      </div>\n\n      <div class=\"ui-g-12 ui-lg-12 ui-xl-12 ui-md-6 ui-sm-6 productionCategoryArea xl-productionCategoryArea md-productionCategoryArea lg-productionCategoryArea sm-productionCategoryArea\">\n        <div class=\"xl-title lg-title ui-g-12\"><strong>Date</strong></div>\n        <ul class=\"optionul\">\n          <li class=\"productionTypeLi xl-productionTypeLi md-productionTypeLi lg-productionTypeLi sm-productionTypeLi\">\n            <p-radioButton name=\"Date\" value=\"Today\" label=\"Today\" [(ngModel)]=\"selectedDate\" inputId=\"Date1\" (click)=\"getGridValue()\"></p-radioButton>\n          </li>\n          <li class=\"productionTypeLi xl-productionTypeLi md-productionTypeLi lg-productionTypeLi sm-productionTypeLi\">\n            <p-radioButton name=\"Date\" value=\"Yesterday\" label=\"Yesterday\" [(ngModel)]=\"selectedDate\" inputId=\"Date2\"\n              (click)=\"getGridValue()\"></p-radioButton>\n          </li>\n          <li class=\"productionTypeLi xl-productionTypeLi md-productionTypeLi lg-productionTypeLi sm-productionTypeLi\">\n            <p-radioButton name=\"Date\" value=\"DayBeforeYesterday\" label=\"Day Before Yesterday\" [(ngModel)]=\"selectedDate\"\n              inputId=\"Date3\" (click)=\"getGridValue()\"></p-radioButton>\n          </li>\n        </ul>\n      </div>\n\n      <div class=\"ui-g-12 ui-lg-12 ui-xl-12 ui-md-6 ui-sm-6 productionCategoryArea xl-productionCategoryArea md-productionCategoryArea lg-productionCategoryArea sm-productionCategoryArea\">\n        <div class=\"xl-title lg-title ui-g-12\"><strong>Type</strong></div>\n        <ul class=\"optionul\">\n          <li class=\"productionTypeLi xl-productionTypeLi md-productionTypeLi lg-productionTypeLi sm-productionTypeLi\">\n            <p-radioButton name=\"DataType\" value=\"OPERPROD HOUR\" label=\"Operator\" [(ngModel)]=\"selectedDataType\"\n              inputId=\"DataType1\" (click)=\"dataTypeCilcked()\"></p-radioButton>\n          </li>\n          <li class=\"productionTypeLi xl-productionTypeLi md-productionTypeLi lg-productionTypeLi sm-productionTypeLi\">\n            <p-radioButton name=\"DataType\" value=\"MMDPROD HOUR\" label=\"Equipment\" [(ngModel)]=\"selectedDataType\"\n              inputId=\"DataType2\" (click)=\"dataTypeCilcked()\"></p-radioButton>\n          </li>\n        </ul>\n      </div>\n\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/operatormonitor/common/chart/bpprdmonitor/bpprdmonitor.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BpprdmonitorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_production_common_model_yieldParam__ = __webpack_require__("./src/app/production/common/model/yieldParam.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_common_service_api_api_service__ = __webpack_require__("./src/app/common/service/api/api.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BpprdmonitorComponent = /** @class */ (function () {
    function BpprdmonitorComponent(httpService) {
        this.httpService = httpService;
        this.selectedLineType = '';
        this.selectedDate = 'Today';
        this.selectedDataType = 'OPERPROD HOUR';
        this.gridparams = new __WEBPACK_IMPORTED_MODULE_1_app_production_common_model_yieldParam__["a" /* YieldParam */]();
    }
    BpprdmonitorComponent.prototype.ngOnInit = function () {
        this.getLineType();
    };
    BpprdmonitorComponent.prototype.getLineType = function () {
        var _this = this;
        var options = {
            params: {
                shopName: this.shopName,
                datatype: this.selectedDataType,
                date: this.selectedDate
            }
        };
        this.httpService.get('/echart/operatormonitor/getBPPrdHourMonitorLineType', options).subscribe(function (res) {
            _this.lineType = res;
            _this.selectedLineType = _this.lineType[0];
            _this.getGridValue();
        }, function (error) { console.log(error); });
    };
    BpprdmonitorComponent.prototype.dataTypeCilcked = function () {
        this.getLineType();
    };
    BpprdmonitorComponent.prototype.getGridValue = function () {
        var _this = this;
        this.gridparams.shopName = this.shopName;
        this.gridparams.datatype = this.selectedDataType;
        this.gridparams.linetype = this.selectedLineType;
        this.gridparams.date = this.selectedDate;
        this.gridparams.deviceType = this.deviceType;
        this.httpService.post('/echart/operatormonitor/getBPPrdHourMonitorGridValue', this.gridparams).subscribe(function (res) {
            _this.respText = res;
            _this.gridValueInit(_this.respText.value);
        }, function (error) {
            console.log(error);
        });
    };
    BpprdmonitorComponent.prototype.gridValueInit = function (item) {
        var headerFontSize = '';
        if (this.deviceType == 'tv') {
            headerFontSize = '15px';
        }
        else {
            headerFontSize = '12px';
        }
        this.values = [
            {
                header: {
                    backgroundColor: '#607D8B',
                    fontColor: 'white',
                    fontsize: headerFontSize,
                    lineheight: 1.3,
                    items: [
                        [
                            { header: 'ID', width: '70px' },
                            { header: 'Sum' },
                            { header: '06H' },
                            { header: '07H' },
                            { header: '08H' },
                            { header: '09H' },
                            { header: '10H' },
                            { header: '11H' },
                            { header: '12H' },
                            { header: '13H' },
                            { header: '14H' },
                            { header: '15H' },
                            { header: '16H' },
                            { header: '17H' },
                            { header: '18H' },
                            { header: '19H' },
                            { header: '20H' },
                            { header: '21H' },
                            { header: '22H' },
                            { header: '23H' },
                            { header: '00H' },
                            { header: '01H' },
                            { header: '02H' },
                            { header: '03H' },
                            { header: '04H' },
                            { header: '05H' },
                        ],
                    ]
                },
                values: {
                    items: item
                }
            },
        ];
    };
    BpprdmonitorComponent.prototype.onRowSelect = function (event) {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], BpprdmonitorComponent.prototype, "shopName", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], BpprdmonitorComponent.prototype, "deviceType", void 0);
    BpprdmonitorComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-bpprdmonitor',
            template: __webpack_require__("./src/app/operatormonitor/common/chart/bpprdmonitor/bpprdmonitor.component.html"),
            styles: [__webpack_require__("./src/app/operatormonitor/common/chart/bpprdmonitor/bpprdmonitor.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_app_common_service_api_api_service__["a" /* ApiService */]])
    ], BpprdmonitorComponent);
    return BpprdmonitorComponent;
}());



/***/ })

});
//# sourceMappingURL=bp.module.chunk.js.map