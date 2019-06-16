webpackJsonp(["dash-board-ui.module"],{

/***/ "./src/app/dash-board-ui/dash-board-ui-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashBoardUiRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__type1_type1_component__ = __webpack_require__("./src/app/dash-board-ui/type1/type1.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__type2_type2_component__ = __webpack_require__("./src/app/dash-board-ui/type2/type2.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__type3_type3_component__ = __webpack_require__("./src/app/dash-board-ui/type3/type3.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    {
        path: 'type1',
        component: __WEBPACK_IMPORTED_MODULE_2__type1_type1_component__["a" /* Type1Component */]
    },
    {
        path: 'type2',
        component: __WEBPACK_IMPORTED_MODULE_3__type2_type2_component__["a" /* Type2Component */]
    },
    {
        path: 'type3',
        component: __WEBPACK_IMPORTED_MODULE_4__type3_type3_component__["a" /* Type3Component */]
    }
];
var DashBoardUiRoutingModule = /** @class */ (function () {
    function DashBoardUiRoutingModule() {
    }
    DashBoardUiRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"]]
        })
    ], DashBoardUiRoutingModule);
    return DashBoardUiRoutingModule;
}());



/***/ }),

/***/ "./src/app/dash-board-ui/dash-board-ui.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashBoardUiModule", function() { return DashBoardUiModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dash_board_ui_routing_module__ = __webpack_require__("./src/app/dash-board-ui/dash-board-ui-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__type1_type1_component__ = __webpack_require__("./src/app/dash-board-ui/type1/type1.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__type2_type2_component__ = __webpack_require__("./src/app/dash-board-ui/type2/type2.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__type3_type3_component__ = __webpack_require__("./src/app/dash-board-ui/type3/type3.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__common_service_api_api_service__ = __webpack_require__("./src/app/common/service/api/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_primeng_primeng__ = __webpack_require__("./node_modules/primeng/primeng.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_primeng_primeng__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_primeng_button__ = __webpack_require__("./node_modules/primeng/button.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_primeng_button___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_primeng_button__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_primeng_panel__ = __webpack_require__("./node_modules/primeng/panel.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_primeng_panel___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_primeng_panel__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_primeng_table__ = __webpack_require__("./node_modules/primeng/table.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_primeng_table___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_primeng_table__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_primeng_dialog__ = __webpack_require__("./node_modules/primeng/dialog.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_primeng_dialog___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_primeng_dialog__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_primeng_chart__ = __webpack_require__("./node_modules/primeng/chart.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_primeng_chart___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_primeng_chart__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_primeng_card__ = __webpack_require__("./node_modules/primeng/card.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_primeng_card___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_primeng_card__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_primeng_tabview__ = __webpack_require__("./node_modules/primeng/tabview.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_primeng_tabview___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_primeng_tabview__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_primeng_galleria__ = __webpack_require__("./node_modules/primeng/galleria.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_primeng_galleria___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16_primeng_galleria__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_ngx_echarts__ = __webpack_require__("./node_modules/ngx-echarts/ngx-echarts.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







// service

// primeng









// echart

var DashBoardUiModule = /** @class */ (function () {
    function DashBoardUiModule() {
    }
    DashBoardUiModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_3__dash_board_ui_routing_module__["a" /* DashBoardUiRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_8_primeng_primeng__["DropdownModule"],
                __WEBPACK_IMPORTED_MODULE_9_primeng_button__["ButtonModule"],
                __WEBPACK_IMPORTED_MODULE_10_primeng_panel__["PanelModule"],
                __WEBPACK_IMPORTED_MODULE_11_primeng_table__["TableModule"],
                __WEBPACK_IMPORTED_MODULE_12_primeng_dialog__["DialogModule"],
                __WEBPACK_IMPORTED_MODULE_8_primeng_primeng__["InputTextModule"],
                __WEBPACK_IMPORTED_MODULE_13_primeng_chart__["ChartModule"],
                __WEBPACK_IMPORTED_MODULE_17_ngx_echarts__["a" /* NgxEchartsModule */],
                __WEBPACK_IMPORTED_MODULE_14_primeng_card__["CardModule"],
                __WEBPACK_IMPORTED_MODULE_15_primeng_tabview__["TabViewModule"],
                __WEBPACK_IMPORTED_MODULE_16_primeng_galleria__["GalleriaModule"]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_4__type1_type1_component__["a" /* Type1Component */], __WEBPACK_IMPORTED_MODULE_5__type2_type2_component__["a" /* Type2Component */], __WEBPACK_IMPORTED_MODULE_6__type3_type3_component__["a" /* Type3Component */]],
            providers: [__WEBPACK_IMPORTED_MODULE_7__common_service_api_api_service__["a" /* ApiService */]]
        })
    ], DashBoardUiModule);
    return DashBoardUiModule;
}());



/***/ }),

/***/ "./src/app/dash-board-ui/type1/type1.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/dash-board-ui/type1/type1.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g\">\n  <div class=\"ui-g-12\">\n    \n    <div class=\"ui-g\">\n      <!-- area1 -->\n      <div class=\"ui-g-12 ui-lg-8\" style=\"border: 1px solid;\">\n        <!-- area1-1 -->\n        <div class=\"ui-g-12\" style=\"border: 1px solid;\">\n          <div echarts [options]=\"chartOptionStackedLine\" class=\"demo-chart\"></div>\n        </div>\n        <!-- area1-2 -->\n        <div class=\"ui-g-12\">\n          <!-- area1-2-1 -->\n          <div class=\"ui-g-12 ui-lg-6\">\n            <div echarts [options]=\"chartOptionDoughnut\" class=\"demo-chart\"></div>\n          </div>\n          <!-- area1-2-2 -->\n          <div class=\"ui-g-12 ui-lg-6\">\n            <div echarts [options]=\"chartOptionBar\" class=\"demo-chart\"></div>\n          </div>\n        </div>\n      </div>\n      <!-- end area1 -->\n      <!-- area2 -->\n      <div class=\"ui-g-12 ui-lg-4\" style=\"border: 1px solid; \">\n        <!-- area2-1 -->\n        <div class=\"ui-g-12\">\n          <div echarts [options]=\"chartOptionPie\" class=\"demo-chart\"></div>\n          <div echarts [options]=\"chartOptionStackedBar\" class=\"demo-chart\"></div>\n        </div>\n      </div>\n      <!-- end area2 -->\n    </div>\n    \n  </div>\n\n  <!-- pannel area -->\n  <div class=\"ui-g-12\">\n      <div class=\"ui-g-12\">\n          <p-panel>\n            <p-header>\n              <div class=\"ui-helper-clearfix\">\n                <span class=\"ui-panel-title\">Detail</span>\n              </div>\n            </p-header>\n            <div class=\"ui-panel-content\">\n              <!-- if you use selection, you must set datakey -->\n              <p-table [columns]=\"cols\" [value]=\"data\" dataKey=\"col1\">\n                <ng-template pTemplate=\"header\" let-columns>\n                  <tr>\n                    <th *ngFor=\"let col of columns\">\n                      {{col.header}}\n                    </th>\n                  </tr>\n                </ng-template>\n                <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\">\n                  <tr [pSelectableRow]=\"rowData\" [class]='test' #chartGride>\n                    <td *ngFor=\"let col of columns;\">\n                      {{rowData[col.field]}}\n                    </td>\n                  </tr>\n                </ng-template>\n              </p-table>\n            </div>\n          </p-panel>\n        </div>\n  </div>\n  <!-- end pannel area -->\n\n  \n</div>"

/***/ }),

/***/ "./src/app/dash-board-ui/type1/type1.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Type1Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_service_api_api_service__ = __webpack_require__("./src/app/common/service/api/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_layout_retab_service_tab_service__ = __webpack_require__("./src/core/layout/retab/service/tab.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__breadcrumb_service_breadcrumb_service__ = __webpack_require__("./src/core/layout/breadcrumb/service/breadcrumb.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var Type1Component = /** @class */ (function () {
    function Type1Component(apiService, breadcrumbService, tService) {
        this.apiService = apiService;
        this.breadcrumbService = breadcrumbService;
        this.tService = tService;
        this.breadcrumbService.setItems([
            { label: 'DASHBOARD UI' },
            { label: 'TYPE1' },
        ]);
        this.tService.setItems('DASHBOARD UI TYPE1');
    }
    Type1Component.prototype.ngOnInit = function () {
        var _this = this;
        this.setChartLine();
        this.setChartDoughnut();
        this.setChartBar();
        this.setChartPie();
        var url = '/assets/demo/data/report-ui/type1.json';
        this.apiService.testGet(url).subscribe(function (res) {
            console.log(res);
            _this.data = res;
        }, function (error) { console.log(error); });
        this.cols = [
            { field: 'col1', header: 'Col1' },
            { field: 'col2', header: 'Col2' },
            { field: 'col3', header: 'Col3' },
            { field: 'col4', header: 'Col4' },
            { field: 'col5', header: 'Col5' },
            { field: 'col6', header: 'Col6' }
        ];
    };
    // echart fucntion
    Type1Component.prototype.setChartLine = function () {
        this.chartOptionStackedLine = {
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎']
            },
            toolbox: {
                show: true,
                feature: {
                    mark: { show: true },
                    dataView: { show: true, readOnly: false },
                    magicType: { show: true, type: ['line', 'bar', 'stack', 'tiled'] },
                    restore: { show: true },
                    saveAsImage: { show: true }
                }
            },
            calculable: true,
            xAxis: [
                {
                    type: 'category',
                    boundaryGap: false,
                    data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
                }
            ],
            yAxis: [
                {
                    type: 'value'
                }
            ],
            series: [
                {
                    name: '邮件营销',
                    type: 'line',
                    stack: '总量',
                    itemStyle: { normal: { areaStyle: { type: 'default' } } },
                    data: [120, 132, 101, 134, 90, 230, 210]
                },
                {
                    name: '联盟广告',
                    type: 'line',
                    stack: '总量',
                    itemStyle: { normal: { areaStyle: { type: 'default' } } },
                    data: [220, 182, 191, 234, 290, 330, 310]
                },
                {
                    name: '视频广告',
                    type: 'line',
                    stack: '总量',
                    itemStyle: { normal: { areaStyle: { type: 'default' } } },
                    data: [150, 232, 201, 154, 190, 330, 410]
                },
                {
                    name: '直接访问',
                    type: 'line',
                    stack: '总量',
                    itemStyle: { normal: { areaStyle: { type: 'default' } } },
                    data: [320, 332, 301, 334, 390, 330, 320]
                },
                {
                    name: '搜索引擎',
                    type: 'line',
                    stack: '总量',
                    itemStyle: { normal: { areaStyle: { type: 'default' } } },
                    data: [820, 932, 901, 934, 1290, 1330, 1320]
                }
            ]
        };
    };
    Type1Component.prototype.setChartDoughnut = function () {
        this.chartOptionDoughnut = {
            tooltip: {
                trigger: 'item',
                formatter: '{a} <br/>{b} : {c} ({d}%)'
            },
            legend: {
                orient: 'vertical',
                x: 'left',
                data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
            },
            toolbox: {
                show: true,
                feature: {
                    mark: { show: true },
                    dataView: { show: true, readOnly: false },
                    magicType: {
                        show: true,
                        type: ['pie', 'funnel'],
                        option: {
                            funnel: {
                                x: '25%',
                                width: '50%',
                                funnelAlign: 'center',
                                max: 1548
                            }
                        }
                    },
                    restore: { show: true },
                    saveAsImage: { show: true }
                }
            },
            calculable: true,
            series: [
                {
                    name: '访问来源',
                    type: 'pie',
                    radius: ['50%', '70%'],
                    itemStyle: {
                        normal: {
                            label: {
                                show: false
                            },
                            labelLine: {
                                show: false
                            }
                        },
                        emphasis: {
                            label: {
                                show: true,
                                position: 'center',
                                textStyle: {
                                    fontSize: '30',
                                    fontWeight: 'bold'
                                }
                            }
                        }
                    },
                    data: [
                        { value: 335, name: '直接访问' },
                        { value: 310, name: '邮件营销' },
                        { value: 234, name: '联盟广告' },
                        { value: 135, name: '视频广告' },
                        { value: 1548, name: '搜索引擎' }
                    ]
                }
            ]
        };
    };
    Type1Component.prototype.setChartBar = function () {
        this.chartOptionBar = {
            title: {},
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data: ['蒸发量', '降水量']
            },
            toolbox: {
                show: true,
                feature: {
                    mark: { show: true },
                    dataView: { show: true, readOnly: false },
                    magicType: { show: true, type: ['line', 'bar'] },
                    restore: { show: true },
                    saveAsImage: { show: true }
                }
            },
            calculable: true,
            xAxis: [
                {
                    type: 'category',
                    data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
                }
            ],
            yAxis: [
                {
                    type: 'value'
                }
            ],
            series: [
                {
                    name: '蒸发量',
                    type: 'bar',
                    data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3],
                    markPoint: {
                        data: [
                            { type: 'max', name: '最大值' },
                            { type: 'min', name: '最小值' }
                        ]
                    },
                    markLine: {
                        data: [
                            { type: 'average', name: '平均值' }
                        ]
                    }
                },
                {
                    name: '降水量',
                    type: 'bar',
                    data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3],
                    markPoint: {
                        data: [
                            { name: '年最高', value: 182.2, xAxis: 7, yAxis: 183, symbolSize: 18 },
                            { name: '年最低', value: 2.3, xAxis: 11, yAxis: 3 }
                        ]
                    },
                    markLine: {
                        data: [
                            { type: 'average', name: '平均值' }
                        ]
                    }
                }
            ]
        };
    };
    Type1Component.prototype.setChartPie = function () {
        this.chartOptionPie = {
            title: {
                text: '某站点用户访问来源',
                subtext: '纯属虚构',
                x: 'center'
            },
            tooltip: {
                trigger: 'item',
                formatter: '{a} <br/>{b} : {c} ({d}%)'
            },
            legend: {
                orient: 'vertical',
                x: 'left',
                data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
            },
            toolbox: {
                show: true,
                feature: {
                    mark: { show: true },
                    dataView: { show: true, readOnly: false },
                    magicType: {
                        show: true,
                        type: ['pie', 'funnel'],
                        option: {
                            funnel: {
                                x: '25%',
                                width: '50%',
                                funnelAlign: 'left',
                                max: 1548
                            }
                        }
                    },
                    restore: { show: true },
                    saveAsImage: { show: true }
                }
            },
            calculable: true,
            series: [
                {
                    name: '访问来源',
                    type: 'pie',
                    radius: '55%',
                    center: ['50%', '60%'],
                    data: [
                        { value: 335, name: '直接访问' },
                        { value: 310, name: '邮件营销' },
                        { value: 234, name: '联盟广告' },
                        { value: 135, name: '视频广告' },
                        { value: 1548, name: '搜索引擎' }
                    ]
                }
            ]
        };
    };
    Type1Component.prototype.setChartStackedBar = function () {
    };
    Type1Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-type1',
            template: __webpack_require__("./src/app/dash-board-ui/type1/type1.component.html"),
            styles: [__webpack_require__("./src/app/dash-board-ui/type1/type1.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__common_service_api_api_service__["a" /* ApiService */], __WEBPACK_IMPORTED_MODULE_3__breadcrumb_service_breadcrumb_service__["a" /* BreadcrumbService */], __WEBPACK_IMPORTED_MODULE_2_core_layout_retab_service_tab_service__["a" /* TabService */]])
    ], Type1Component);
    return Type1Component;
}());



/***/ }),

/***/ "./src/app/dash-board-ui/type2/type2.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/dash-board-ui/type2/type2.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g\">\n  <!-- card area -->\n  <div class=\"ui-g-12\" style=\"border: 1px solid; padding: 5px;\">\n    <!-- card1 -->\n    <div class=\"ui-g-12 ui-lg-4\" style=\"border: 1px solid silver; \">\n      <p-card>\n        <p-header>\n          Header content here\n        </p-header>\n        Body Content\n        <p-footer>\n          Footer content here\n        </p-footer>\n      </p-card>\n    </div>\n    <!-- card2 -->\n    <div class=\"ui-g-12 ui-lg-4\" style=\"border: 1px solid silver; \">\n      <p-card>\n        <p-header>\n          Header content here\n        </p-header>\n        Body Content\n        <p-footer>\n          Footer content here\n        </p-footer>\n      </p-card>\n    </div>\n    <!-- card3 -->\n    <div class=\"ui-g-12 ui-lg-4\" style=\"border: 1px solid silver; \">\n      <p-card>\n        <p-header>\n          Header content here\n        </p-header>\n        Body Content\n        <p-footer>\n          Footer content here\n        </p-footer>\n      </p-card>\n    </div>\n  </div>\n  <!-- end card area -->\n\n  <!-- tap area -->\n  <div class=\"ui-g-12\">\n    <p-tabView>\n      <p-tabPanel header=\"Header 1\">\n        <div echarts [options]=\"chartOption\" class=\"demo-chart\"></div>\n      </p-tabPanel>\n      <p-tabPanel header=\"Header 2\">\n        <!-- echart content -->\n        <ng-template pTemplate=\"content\">\n          <div echarts [options]=\"chartOption\" class=\"demo-chart\"></div>\n        </ng-template>\n      </p-tabPanel>\n      <p-tabPanel header=\"Header 3\">\n          <ng-template pTemplate=\"content\">\n              <div echarts [options]=\"chartOption\" class=\"demo-chart\"></div>\n          </ng-template>\n      </p-tabPanel>\n    </p-tabView>\n  </div>\n  <!-- end tap area -->\n\n  <!-- panel area -->\n  <div class=\"ui-g-12\">\n    <!-- panel 1 -->\n    <div class=\"ui-g-12 ui-lg-4\">\n      <p-panel>\n        <p-header>\n          Header content here\n        </p-header>\n        Body Content\n        <br>\n        <br>\n        <br>\n        \n      </p-panel>\n    </div>\n    <!-- panel 2 -->\n    <div class=\"ui-g-12 ui-lg-4\">\n      <p-panel>\n        <p-header>\n          Header content here\n        </p-header>\n        Body Content\n        <br>\n        <br>\n        <br>\n       \n      </p-panel>\n    </div>\n    <!-- panel 2 -->\n    <div class=\"ui-g-12 ui-lg-4\">\n      <p-panel>\n        <p-header>\n          Header content here\n        </p-header>\n        Body Content\n        <br>\n        <br>\n        <br>\n        \n      </p-panel>\n    </div>\n  </div>\n  <!-- end panel area -->\n</div>"

/***/ }),

/***/ "./src/app/dash-board-ui/type2/type2.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Type2Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__boe_ui_boe_chart_model_echartSet__ = __webpack_require__("./src/app/boe-ui/boe-chart/model/echartSet.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_service_api_api_service__ = __webpack_require__("./src/app/common/service/api/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_layout_retab_service_tab_service__ = __webpack_require__("./src/core/layout/retab/service/tab.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__breadcrumb_service_breadcrumb_service__ = __webpack_require__("./src/core/layout/breadcrumb/service/breadcrumb.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var Type2Component = /** @class */ (function () {
    function Type2Component(apiService, breadcrumbService, tService) {
        this.apiService = apiService;
        this.breadcrumbService = breadcrumbService;
        this.tService = tService;
        this.breadcrumbService.setItems([
            { label: 'DASHBOARD UI' },
            { label: 'TYPE2' },
        ]);
        this.tService.setItems('DASHBOARD UI TYPE2');
    }
    Type2Component.prototype.ngOnInit = function () {
        var _this = this;
        var url = '/assets/demo/data/report-ui/type1.json';
        this.apiService.testGet(url).subscribe(function (res) {
            // make chart
            _this.setEchart(res);
        }, function (error) { console.log(error); });
    };
    // echart setting function
    Type2Component.prototype.setEchart = function (data) {
        this.chartOption = {
            title: {
                text: 'echart',
                subtext: 'example'
            },
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data: this.getKey(data)
            },
            toolbox: {
                show: true,
                feature: {
                    mark: { show: true },
                    dataView: { show: true, readOnly: false },
                    magicType: { show: true, type: ['line', 'bar'] },
                    restore: { show: true },
                    saveAsImage: { show: true }
                }
            },
            calculable: true,
            xAxis: [
                {
                    type: 'category',
                    data: ['Col1', 'Col2', 'Col3', 'Col4', 'Col5', 'Col6'],
                }
            ],
            yAxis: [
                {
                    type: 'value'
                }
            ],
            series: this.setSeriesOption(data)
        };
    };
    Type2Component.prototype.setSeriesOption = function (obj) {
        var seriesArray = new Array();
        if (Array.isArray(obj)) {
            for (var _i = 0, obj_1 = obj; _i < obj_1.length; _i++) {
                var list = obj_1[_i];
                var echartSet = new __WEBPACK_IMPORTED_MODULE_1__boe_ui_boe_chart_model_echartSet__["a" /* EchartSet */]();
                var dataArray = new Array();
                echartSet.name = list['key'];
                echartSet.type = 'bar';
                for (var value in list) {
                    if (list.hasOwnProperty(value)) {
                        if (value !== 'key') {
                            dataArray.push(list[value]);
                        }
                    }
                }
                echartSet.data = dataArray;
                seriesArray.push(echartSet);
            }
        }
        return seriesArray;
    };
    Type2Component.prototype.getKey = function (obj) {
        var keyNameArray = new Array();
        if (Array.isArray(obj)) {
            for (var _i = 0, obj_2 = obj; _i < obj_2.length; _i++) {
                var list = obj_2[_i];
                keyNameArray.push(list['key']);
            }
        }
        return keyNameArray;
    };
    Type2Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-type2',
            template: __webpack_require__("./src/app/dash-board-ui/type2/type2.component.html"),
            styles: [__webpack_require__("./src/app/dash-board-ui/type2/type2.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__common_service_api_api_service__["a" /* ApiService */], __WEBPACK_IMPORTED_MODULE_4__breadcrumb_service_breadcrumb_service__["a" /* BreadcrumbService */], __WEBPACK_IMPORTED_MODULE_3_core_layout_retab_service_tab_service__["a" /* TabService */]])
    ], Type2Component);
    return Type2Component;
}());



/***/ }),

/***/ "./src/app/dash-board-ui/type3/type3.component.css":
/***/ (function(module, exports) {

module.exports = "li.ui-galleria-panel {\r\n    width:100% !important;}\r\n\r\nimg.ui-panel-images {\r\n    width:100vw !important;\r\n}\r\n\r\ndiv.ui-galleria.ui-widget.ui-widget-content.ui-corner-all {\r\n    width:100% !important;\r\n}"

/***/ }),

/***/ "./src/app/dash-board-ui/type3/type3.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g\">\n  <!-- intro/image area -->\n  <div class=\"ui-g-12\">\n      <p-galleria [images]=\"images\" panelWidth=\"800\" panelHeight=\"500\" [showCaption]=\"false\" #galleria (onImageClicked)=\"click()\"></p-galleria>\n  </div>\n  <!-- end intro/image area -->\n\n  <!-- panel area -->\n  <div class=\"ui-g-12\">\n    <!-- panel1 -->\n    <div class=\"ui-g-12 ui-lg-8\">\n        <p-panel>\n            <p-header>\n             Notice\n            </p-header>\n            Body Content\n            <br>\n            <br>\n            <br>\n            \n          </p-panel>\n    </div>\n    <!-- end panel1 -->\n    <div class=\"ui-g-12 ui-lg-4\">\n        <p-panel>\n            <p-header>\n              NyInfo \n            </p-header>\n            Body Content\n            <br>\n            <br>\n            <br>\n            \n          </p-panel>\n    </div>\n    <!-- end panel2 -->\n  </div>\n  <!-- end panel area -->\n</div>"

/***/ }),

/***/ "./src/app/dash-board-ui/type3/type3.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Type3Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_layout_retab_service_tab_service__ = __webpack_require__("./src/core/layout/retab/service/tab.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__breadcrumb_service_breadcrumb_service__ = __webpack_require__("./src/core/layout/breadcrumb/service/breadcrumb.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Type3Component = /** @class */ (function () {
    function Type3Component(breadcrumbService, tService) {
        this.breadcrumbService = breadcrumbService;
        this.tService = tService;
        this.breadcrumbService.setItems([
            { label: 'DASHBOARD UI' },
            { label: 'TYPE3' },
        ]);
        this.tService.setItems('DASHBOARD UI TYPE3');
    }
    Type3Component.prototype.ngAfterViewInit = function () {
    };
    Type3Component.prototype.ngOnInit = function () {
        console.log(this.galleria);
        this.images = [];
        this.images.push({ source: 'assets/demo/images/nature/nature1.jpg', alt: 'Description for Image 1', title: 'Title 1',
            style: 'width: 700px; height: 500px;' });
        this.images.push({ source: 'assets/demo/images/nature/nature2.jpg', alt: 'Description for Image 3', title: 'Title 3' });
        this.images.push({ source: 'assets/demo/images/nature/nature3.jpg', alt: 'Description for Image 3', title: 'Title 3' });
        this.images.push({ source: 'assets/demo/images/nature/nature4.jpg', alt: 'Description for Image 4', title: 'Title 4' });
        this.images.push({ source: 'assets/demo/images/nature/nature5.jpg', alt: 'Description for Image 5', title: 'Title 5' });
        this.images.push({ source: 'assets/demo/images/nature/nature6.jpg', alt: 'Description for Image 6', title: 'Title 6' });
        this.images.push({ source: 'assets/demo/images/nature/nature7.jpg', alt: 'Description for Image 7', title: 'Title 7' });
        this.images.push({ source: 'assets/demo/images/nature/nature8.jpg', alt: 'Description for Image 8', title: 'Title 8' });
        this.images.push({ source: 'assets/demo/images/nature/nature9.jpg', alt: 'Description for Image 9', title: 'Title 9' });
        this.images.push({ source: 'assets/demo/images/nature/nature10.jpg', alt: 'Description for Image 10', title: 'Title 10' });
        this.images.push({ source: 'assets/demo/images/nature/nature11.jpg', alt: 'Description for Image 11', title: 'Title 11' });
        this.images.push({ source: 'assets/demo/images/nature/nature12.jpg', alt: 'Description for Image 12', title: 'Title 12' });
    };
    Type3Component.prototype.click = function () {
        console.log(this.galleria);
    };
    Type3Component.prototype.makeThumnail = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChildren"])('galleria'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["QueryList"])
    ], Type3Component.prototype, "galleria", void 0);
    Type3Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-type3',
            template: __webpack_require__("./src/app/dash-board-ui/type3/type3.component.html"),
            styles: [__webpack_require__("./src/app/dash-board-ui/type3/type3.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__breadcrumb_service_breadcrumb_service__["a" /* BreadcrumbService */], __WEBPACK_IMPORTED_MODULE_1_core_layout_retab_service_tab_service__["a" /* TabService */]])
    ], Type3Component);
    return Type3Component;
}());



/***/ })

});
//# sourceMappingURL=dash-board-ui.module.chunk.js.map