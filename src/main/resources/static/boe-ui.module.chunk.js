webpackJsonp(["boe-ui.module"],{

/***/ "./node_modules/primeng/calendar.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* Shorthand */

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__("./node_modules/primeng/components/calendar/calendar.js"));

/***/ }),

/***/ "./node_modules/primeng/inputswitch.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* Shorthand */

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__("./node_modules/primeng/components/inputswitch/inputswitch.js"));

/***/ }),

/***/ "./node_modules/primeng/overlaypanel.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* Shorthand */

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__("./node_modules/primeng/components/overlaypanel/overlaypanel.js"));

/***/ }),

/***/ "./src/app/boe-ui/boe-chart/boe-chart.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/boe-ui/boe-chart/boe-chart.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g\">\n  <!-- <div class=\"ui-g-12\">\n            <h3 class=\"first\">Title MES UI - TYPE1</h3>\n            <hr>\n          </div> -->\n  <!-- search area -->\n  <div class=\"ui-g-12\">\n    <!-- search option area -->\n    <div class=\"ui-g-12\">\n      <!-- if you add the other option, change the class source -->\n      <!-- <div class=\"ui-g-12 ui-md-6 ui-lg-3\">\n        <label>Condition1</label>\n        <input type=\"text\" pInputText />\n      </div> -->\n      <div class=\"ui-g-12 ui-md-6 ui-lg-3\">\n        <label>chartKey</label>\n        <p-dropdown [options]=\"option1\" [(ngModel)]=\"selectedOption1\" (onChange) = \"onChangeDropBox()\"></p-dropdown>\n      </div>\n    </div>\n  </div>\n  <!-- panel area -->\n  <div class=\"ui-g-12\">\n    <!-- panel1 -->\n    <div class=\"ui-g-12 ui-lg-6\">\n      <p-panel>\n        <p-header>\n          <div class=\"ui-helper-clearfix\">\n            <span class=\"ui-panel-title\">Echart Pie Chart</span>\n          </div>\n        </p-header>\n        <!-- chart content -->\n        <div echarts [options]=\"chartOption\" class=\"demo-chart\" (click)=\"echartClick(chartOption)\"></div>\n      </p-panel>\n    </div>\n    <!-- end panel1 -->\n    <!-- panel2 -->\n    <div class=\"ui-g-12 ui-lg-6\">\n      <p-panel>\n        <p-header>\n          <div class=\"ui-helper-clearfix\">\n            <span class=\"ui-panel-title\">Prime Pie Chart</span>\n          </div>\n        </p-header>\n        <!-- chart content -->\n        <p-chart type=\"pie\" [data]=\"dataChart\" [responsive]=\"true\" (refresh)=\"refresh()\" #chart (click)=\"pchartClick(dataChart)\"></p-chart>\n      </p-panel>\n    </div>\n    <!-- end panel2 -->\n\n  </div>\n  <!-- end panel are -->\n\n\n\n  <!-- dialog1 -->\n  <!-- <app-type1-modal [modalData]=\"modalData\" [(modalVisible)]=\"modalVisible\"></app-type1-modal> -->\n  <div class=\"ui-g-12\">\n\n    <p-dialog header=\"Dailog\" [(visible)]=\"modalVisible\" [modal]=\"true\" [responsive]=\"true\" [width]=\"560\">\n      <div class=\"ui-dialog-content\">\n        <div class=\"ui-g-12\">\n          <p-table [columns]=\"cols\" [value]=\"data\" selectionMode=\"single\" [(selection)]=\"selectedData\" dataKey=\"col1\" (onRowSelect)=\"onRowSelect($event)\">\n            <ng-template pTemplate=\"header\" let-columns>\n              <tr>\n                <th *ngFor=\"let col of columns\">\n                  {{col.header}}\n                </th>\n              </tr>\n            </ng-template>\n            <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\">\n              <tr [pSelectableRow]=\"rowData\" [class]='test' #chartGride>\n                <td *ngFor=\"let col of columns;\">\n                  {{rowData[col.field]}}\n                </td>\n              </tr>\n            </ng-template>\n          </p-table>\n        </div>\n      </div>\n      <!-- dialog content -->\n      <p-footer>\n        <!-- <button type=\"button\" pButton icon=\"pi pi-check\" (click)=\"save()\" label=\"save\"></button> -->\n        <div class=\"ui-helper-clearfix\">\n          <span style=\"text-align: center;\">\n            <button type=\"button\" pButton icon=\"pi pi-close\" (click)=\"modalVisible=false\" label=\"cancel\" class=\"ui-button-secondary\"></button>\n          </span>\n        </div>\n      </p-footer>\n    </p-dialog>\n  </div>\n  <!-- end dialog1 -->\n\n  <!-- dialog1 -->\n  <!-- <app-type1-modal [modalData]=\"modalData\" [(modalVisible)]=\"modalVisible\"></app-type1-modal> -->\n  <div class=\"ui-g-12\">\n\n    <p-dialog header=\"Dailog\" [(visible)]=\"modalVisible1\" [modal]=\"true\" [responsive]=\"true\" [width]=\"560\">\n      <div class=\"ui-dialog-content\">\n        <div class=\"ui-g-12\">\n\n        </div>\n      </div>\n      <!-- dialog content -->\n      <p-footer>\n        <!-- <button type=\"button\" pButton icon=\"pi pi-check\" (click)=\"save()\" label=\"save\"></button> -->\n        <div class=\"ui-helper-clearfix\">\n          <span style=\"text-align: center;\">\n            <button type=\"button\" pButton icon=\"pi pi-close\" (click)=\"modalVisible1=false\" label=\"cancel\" class=\"ui-button-secondary\"></button>\n          </span>\n        </div>\n      </p-footer>\n    </p-dialog>\n  </div>\n  <!-- end dialog1 -->\n\n  <div class=\"ui-g-12\">\n    <p-panel header=\"changeTheme\">\n      <div id=\"main\" style=\"width:600px;height:400px;\">\n      </div>\n    </p-panel>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/boe-ui/boe-chart/boe-chart.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BoeChartComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_service_api_api_service__ = __webpack_require__("./src/app/common/service/api/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__model_echartSet__ = __webpack_require__("./src/app/boe-ui/boe-chart/model/echartSet.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_util__ = __webpack_require__("./node_modules/util/util.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_util___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_util__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__model_chartSet__ = __webpack_require__("./src/app/boe-ui/boe-chart/model/chartSet.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__report_ui_service_report_ui_common_service__ = __webpack_require__("./src/app/report-ui/service/report-ui-common.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_layout_retab_service_tab_service__ = __webpack_require__("./src/core/layout/retab/service/tab.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__breadcrumb_service_breadcrumb_service__ = __webpack_require__("./src/core/layout/breadcrumb/service/breadcrumb.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__common_service_echart_service__ = __webpack_require__("./src/app/common/service/echart.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var BoeChartComponent = /** @class */ (function () {
    function BoeChartComponent(apiService, reportComnService, breadcrumbService, tService, echartService) {
        this.apiService = apiService;
        this.reportComnService = reportComnService;
        this.breadcrumbService = breadcrumbService;
        this.tService = tService;
        this.echartService = echartService;
        // modal data
        this.modalVisible = false;
        // modalData: Type1 = new Type1();
        this.option = {
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            legend: {
                data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎', '百度', '谷歌', '必应', '其他']
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: [
                {
                    type: 'category',
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
                    name: '直接访问',
                    type: 'bar',
                    data: [320, 332, 301, 334, 390, 330, 320]
                },
                {
                    name: '邮件营销',
                    type: 'bar',
                    stack: '广告',
                    data: [120, 132, 101, 134, 90, 230, 210]
                },
                {
                    name: '联盟广告',
                    type: 'bar',
                    stack: '广告',
                    data: [220, 182, 191, 234, 290, 330, 310]
                },
                {
                    name: '视频广告',
                    type: 'bar',
                    stack: '广告',
                    data: [150, 232, 201, 154, 190, 330, 410]
                },
                {
                    name: '搜索引擎',
                    type: 'bar',
                    data: [862, 1018, 964, 1026, 1679, 1600, 1570],
                    markLine: {
                        lineStyle: {
                            normal: {
                                type: 'dashed'
                            }
                        },
                        data: [
                            [{ type: 'min' }, { type: 'max' }]
                        ]
                    }
                },
                {
                    name: '百度',
                    type: 'bar',
                    barWidth: 5,
                    stack: '搜索引擎',
                    data: [620, 732, 701, 734, 1090, 1130, 1120]
                },
                {
                    name: '谷歌',
                    type: 'bar',
                    stack: '搜索引擎',
                    data: [120, 132, 101, 134, 290, 230, 220]
                },
                {
                    name: '必应',
                    type: 'bar',
                    stack: '搜索引擎',
                    data: [60, 72, 71, 74, 190, 130, 110]
                },
                {
                    name: '其他',
                    type: 'bar',
                    stack: '搜索引擎',
                    data: [62, 82, 91, 84, 109, 110, 120]
                }
            ]
        };
        this.breadcrumbService.setItems([
            { label: 'BOE UI' },
            { label: 'CHART' },
        ]);
        this.tService.setItems('BOE UI-CHART');
    }
    BoeChartComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.apiService.getAll('/boeui/list/chart/all').subscribe(function (res) {
            var chartList = res;
            _this.option1 = new Array();
            var idx = 0;
            for (var _i = 0, chartList_1 = chartList; _i < chartList_1.length; _i++) {
                var value = chartList_1[_i];
                if (idx === 0) {
                    _this.getChartData(value['chartKey']);
                }
                _this.option1.push({ label: value['chartKey'], value: value['chartKey'] });
                ++idx;
                console.log(value);
            }
        }, function (error) {
            console.log(error);
        });
        this.createEchartWithUniformTheme();
    };
    BoeChartComponent.prototype.onChangeDropBox = function () {
        this.getChartData(this.selectedOption1);
    };
    BoeChartComponent.prototype.getChartData = function (value) {
        var _this = this;
        var url = '/boeui/chart';
        var options = {
            params: { chartKey: value }
        };
        this.apiService.getOne(url, options).subscribe(function (res) {
            _this.chartData = res;
            _this.setEchart(_this.chartData);
            _this.setPchart(_this.chartData);
        }, function (error) { console.log(error); });
    };
    BoeChartComponent.prototype.echartClick = function (event) {
        var key = event.title['text']; // = this.data[0]의 key
        this.modalShow();
    };
    BoeChartComponent.prototype.pchartClick = function (event) {
        this.modalShow();
    };
    BoeChartComponent.prototype.modalShow = function () {
        this.makeCols();
        var dataArray = new Array();
        dataArray.push(this.chartData);
        this.data = dataArray;
        this.modalVisible = true;
    };
    BoeChartComponent.prototype.makeCols = function () {
        this.cols = [
            { field: 'col1', header: 'Col1' },
            { field: 'col2', header: 'Col2' },
            { field: 'col3', header: 'Col3' },
            { field: 'col4', header: 'Col4' },
            { field: 'col5', header: 'Col5' },
            { field: 'col6', header: 'Col6' },
            { field: 'col7', header: 'Col7' },
            { field: 'col8', header: 'Col8' },
            { field: 'col9', header: 'Col9' },
        ];
    };
    // pchart
    BoeChartComponent.prototype.setPchart = function (data) {
        this.dataChart = {
            labels: ['Col1', 'Col2', 'Col3', 'Col4', 'Col5', 'Col6'],
            datasets: this.makeDatasets(data)
        };
    };
    BoeChartComponent.prototype.makeDatasets = function (obj) {
        var datasets = new Array();
        if (Object(__WEBPACK_IMPORTED_MODULE_3_util__["isObject"])(obj)) {
            var chartSet = new __WEBPACK_IMPORTED_MODULE_4__model_chartSet__["a" /* ChartSet */]();
            var dataArray = new Array();
            var backgroundColorArray = new Array();
            var hoberBackgroundColorArray = new Array();
            for (var value in obj) {
                if (obj.hasOwnProperty(value)) {
                    if (value !== 'key') {
                        dataArray.push(obj[value]);
                        var color = this.reportComnService.getRandomColor();
                        backgroundColorArray.push(color);
                        hoberBackgroundColorArray.push(color);
                    }
                }
            }
            chartSet.data = dataArray;
            chartSet.backgroundColor = backgroundColorArray;
            chartSet.hoverBackgroundColor = hoberBackgroundColorArray;
            datasets.push(chartSet);
        }
        return datasets;
    };
    // echart setting function
    BoeChartComponent.prototype.setEchart = function (data) {
        console.log(data);
        this.chartOption = {
            title: {
                text: data['chartKey'],
                subtext: 'example',
                x: 'center'
            },
            tooltip: {
                trigger: 'item',
                formatter: '{a} <br/>{b} : {c} ({d}%)'
            },
            legend: {
                orient: 'vertical',
                x: 'left',
                data: ['col1', 'col2', 'col3', 'col4', 'col5', 'col6']
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
            series: this.setSeriesOption(data)
        };
    };
    BoeChartComponent.prototype.setSeriesOption = function (obj) {
        var seriesArray = new Array();
        var echartSet = new __WEBPACK_IMPORTED_MODULE_2__model_echartSet__["a" /* EchartSet */]();
        var dataArray = new Array();
        if (Object(__WEBPACK_IMPORTED_MODULE_3_util__["isObject"])(obj)) {
            echartSet.type = 'pie';
            echartSet.redius = '55%';
            echartSet.center = ['50%', '60%'];
            for (var value in obj) {
                if (obj.hasOwnProperty(value)) {
                    if (value !== 'chartKey') {
                        console.log(value);
                        var data = { 'value': obj[value], 'name': value };
                        dataArray.push(data);
                    }
                    else {
                        echartSet.name = obj[value];
                    }
                }
            }
            echartSet.data = dataArray;
        }
        seriesArray.push(echartSet);
        return seriesArray;
    };
    // echart end;
    //创建有统一主题的echart
    BoeChartComponent.prototype.createEchartWithUniformTheme = function () {
        var myChart = this.echartService.init(document.getElementById('main'));
        myChart.setOption(this.option);
    };
    BoeChartComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-boe-chart',
            template: __webpack_require__("./src/app/boe-ui/boe-chart/boe-chart.component.html"),
            styles: [__webpack_require__("./src/app/boe-ui/boe-chart/boe-chart.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__common_service_api_api_service__["a" /* ApiService */], __WEBPACK_IMPORTED_MODULE_5__report_ui_service_report_ui_common_service__["a" /* ReportUiCommonService */],
            __WEBPACK_IMPORTED_MODULE_7__breadcrumb_service_breadcrumb_service__["a" /* BreadcrumbService */], __WEBPACK_IMPORTED_MODULE_6_core_layout_retab_service_tab_service__["a" /* TabService */], __WEBPACK_IMPORTED_MODULE_8__common_service_echart_service__["a" /* EchartService */]])
    ], BoeChartComponent);
    return BoeChartComponent;
}());



/***/ }),

/***/ "./src/app/boe-ui/boe-chart/model/chartSet.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChartSet; });
var ChartSet = /** @class */ (function () {
    function ChartSet() {
    }
    return ChartSet;
}());



/***/ }),

/***/ "./src/app/boe-ui/boe-dashboard/boe-dashboard.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/boe-ui/boe-dashboard/boe-dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g\">\n\n  <div class=\"ui-g dashboard\">\n\n    <div class=\"ui-g-12 ui-lg-3\">\n      <div class=\"task-box task-box-1\">\n        <div class=\"task-box-header\">\n          <i class=\"material-icons\">refresh</i>\n        </div>\n        <div class=\"task-box-content\">\n          <h3>Client Meeting</h3>\n          <p>Waiting brief from the client</p>\n        </div>\n        <div class=\"task-box-footer\">\n          <span class=\"task-status\">WAITING</span>\n          <img src=\"assets/layout/images/avatar1.png\">\n          <img src=\"assets/layout/images/avatar2.png\">\n          <img src=\"assets/layout/images/avatar3.png\">\n        </div>\n      </div>\n    </div>\n    <div class=\"ui-g-12 ui-lg-3\">\n      <div class=\"task-box task-box-2\">\n        <div class=\"task-box-header\">\n          <i class=\"material-icons\">refresh</i>\n        </div>\n        <div class=\"task-box-content\">\n          <h3>Sale Reports</h3>\n          <p>Annual reports per branch</p>\n        </div>\n        <div class=\"task-box-footer\">\n          <span class=\"task-status\">IN PROGRESS</span>\n          <img src=\"assets/layout/images/avatar2.png\">\n          <img src=\"assets/layout/images/avatar3.png\">\n          <img src=\"assets/layout/images/avatar4.png\">\n        </div>\n      </div>\n    </div>\n    <div class=\"ui-g-12 ui-lg-3\">\n      <div class=\"task-box task-box-3\">\n        <div class=\"task-box-header\">\n            <i class=\"fa fa-angle-down\" style=\"float: right; padding-right: 10px;\" (click)=\"op1.toggle($event)\"></i>\n            <p-overlayPanel #op1 [style]=\"{'padding':'0'}\">\n                <p-listbox [options]=\"timeOption\" [(ngModel)]=\"selectedTimeOption\" [style]=\"{'padding':'15px;'}\" (onChange)=\"timeChange(op1)\"></p-listbox>\n              </p-overlayPanel> \n        </div>\n        <div class=\"task-box-content\">\n          <h3>Marketing Meeting</h3>\n          <p>{{bodyContent1.dataValue}}</p>\n        </div>\n        <div class=\"task-box-footer\">\n          <span class=\"task-status\">ON HOLD</span>\n          <img src=\"assets/layout/images/avatar1.png\">\n          <img src=\"assets/layout/images/avatar2.png\">\n          <img src=\"assets/layout/images/avatar3.png\">\n        </div>\n      </div>\n    </div>\n\n    <div class=\"ui-g-12 ui-lg-3\">\n        <div class=\"task-box task-box-3\">\n          <div class=\"task-box-header\">\n            <i class=\"material-icons\">refresh</i>\n          </div>\n          <div class=\"task-box-content\">\n            <h3>Marketing Meeting</h3>\n            <p>{{bodyContent2.dataValue}}</p>\n          </div>\n          <div class=\"task-box-footer\">\n            <span class=\"task-status\">ON HOLD</span>\n            <img src=\"assets/layout/images/avatar1.png\">\n            <img src=\"assets/layout/images/avatar2.png\">\n            <img src=\"assets/layout/images/avatar3.png\">\n          </div>\n        </div>\n      </div>\n    \n    <div class=\"ui-g-12 ui-xl-6\">\n      <p-panel styleClass=\"knobs\">\n        <p-header>\n          TimeOption\n          <i class=\"fa fa-angle-down\" style=\"float: right; padding-right: 10px;\" (click)=\"op2.toggle($event)\"></i>\n          <p-overlayPanel #op2 [style]=\"{'padding':'0'}\">\n            <p-listbox [options]=\"timeOption\" [(ngModel)]=\"selectedTimeOption2\" [style]=\"{'padding':'15px;'}\" (onChange)=\"timeChange2(op2)\"></p-listbox>\n          </p-overlayPanel>\n        </p-header>\n        <div echarts [options]=\"chartOption\" class=\"demo-chart\"></div>\n      </p-panel>\n    </div>\n    <div class=\"ui-g-12 ui-xl-6\">\n      <p-panel styleClass=\"knobs\">\n        <p-header>\n          RealTime\n        </p-header>\n        <div echarts [options]=\"chartOption2\" class=\"demo-chart\"></div>\n      </p-panel>\n    </div>\n\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/boe-ui/boe-dashboard/boe-dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BoeDashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model_dashbaord_data__ = __webpack_require__("./src/app/boe-ui/boe-dashboard/model/dashbaord-data.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_service_web_socket_service__ = __webpack_require__("./src/app/common/service/web-socket.service.ts");
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





var BoeDashboardComponent = /** @class */ (function () {
    function BoeDashboardComponent(websocket, breadcrumbService, tService) {
        var _this = this;
        this.websocket = websocket;
        this.breadcrumbService = breadcrumbService;
        this.tService = tService;
        this.test = 0;
        this.test2 = 0;
        this.breadcrumbService.setItems([
            { label: 'BOE UI' },
            { label: 'DASHBOARD' },
        ]);
        this.tService.setItems('BOE UI-DASHBOARD');
        var socket = websocket.WebSocketConnection();
        socket.onopen = function (event) {
            var msgObj = { msgText: '60' };
            socket.send(msgObj.toString());
        };
        socket.onmessage = function (event) {
            if (!isNaN(Number(event.data))) {
                _this.test2 += 1;
                _this.xlist2.push(_this.test2);
                _this.datalist2.push(event.data);
            }
            _this.setEchart2();
        };
    }
    BoeDashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.timeOption = [{ label: '1s', value: 1000 }, { label: '5s', value: 5000 },
            { label: '10s', value: 10000 }, { label: '15s', value: 15000 }];
        this.bodyContent1 = new __WEBPACK_IMPORTED_MODULE_1__model_dashbaord_data__["a" /* DashbaordData */]();
        this.bodyContent1.index = 0;
        this.bodyContent1.dataValue = 'aaa';
        this.bodyContent1.interverIime = 5000;
        this.bodyContent1.timeInterval();
        this.bodyContent2 = new __WEBPACK_IMPORTED_MODULE_1__model_dashbaord_data__["a" /* DashbaordData */]();
        this.bodyContent2.index = 0;
        this.bodyContent2.dataValue = 'bbb';
        this.bodyContent2.interverIime = 1000;
        this.bodyContent2.timeInterval();
        this.xlist = new Array();
        this.xlist2 = new Array();
        for (var i = 1; i <= 30; i++) {
            this.xlist.push('2013-03-' + i);
            this.xlist2.push('2013-03-' + i);
        }
        this.datalist = new Array();
        this.datalist2 = new Array();
        for (var i = 1; i <= 30; i++) {
            this.datalist.push(Math.round(Math.random() * 30) + 30);
            this.datalist2.push(Math.round(Math.random() * 30) + 30);
        }
        this.bodyContent3 = new __WEBPACK_IMPORTED_MODULE_1__model_dashbaord_data__["a" /* DashbaordData */]();
        this.bodyContent3.interverIime = 5000;
        this.setEchart();
        this.bodyContent3.timeInterval2(function () { _this.datalistChange(); }, function () { _this.setEchart(); });
        this.bodyContent4 = new __WEBPACK_IMPORTED_MODULE_1__model_dashbaord_data__["a" /* DashbaordData */]();
        this.bodyContent4.interverIime = 1000;
    };
    BoeDashboardComponent.prototype.timeChange = function (overlayPanel) {
        this.bodyContent1.interverIime = this.selectedTimeOption;
        this.bodyContent1.clearInterval();
        this.bodyContent1.timeInterval();
        overlayPanel.hide();
    };
    BoeDashboardComponent.prototype.timeChange2 = function (overlayPanel) {
        var _this = this;
        this.bodyContent3.interverIime = this.selectedTimeOption2;
        this.bodyContent3.clearInterval();
        this.bodyContent3.timeInterval2(function () { _this.datalistChange(); }, function () { _this.setEchart(); });
        overlayPanel.hide();
    };
    BoeDashboardComponent.prototype.datalistChange = function () {
        this.test += 1;
        this.xlist.push(this.test);
        this.datalist.push(Math.round(Math.random() * 30) + 30);
    };
    BoeDashboardComponent.prototype.datalistChange2 = function () {
        this.test2 += 1;
        this.xlist2.push(this.test2);
        this.datalist2.push(Math.round(Math.random() * 30) + 30);
    };
    // echart setting function
    BoeDashboardComponent.prototype.setEchart = function () {
        this.chartOption = {
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data: ['最高', '最低']
            },
            toolbox: {
                show: true,
                feature: {
                    mark: { show: true },
                    dataView: { readOnly: false },
                    magicType: { show: true, type: ['line'] },
                    restore: { show: true },
                    saveAsImage: { show: true }
                }
            },
            calculable: true,
            dataZoom: {
                show: true,
                realtime: true,
                start: 80,
                end: 100
            },
            xAxis: [
                {
                    type: 'category',
                    boundaryGap: true,
                    data: this.xlist
                }
            ],
            yAxis: [
                {
                    type: 'value'
                }
            ],
            series: [
                {
                    name: '最高',
                    type: 'line',
                    data: this.datalist
                }
            ]
        };
    };
    BoeDashboardComponent.prototype.setEchart2 = function () {
        this.chartOption2 = {
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data: ['最高', '最低']
            },
            toolbox: {
                show: true,
                feature: {
                    mark: { show: true },
                    dataView: { readOnly: false },
                    magicType: { show: true, type: ['line'] },
                    restore: { show: true },
                    saveAsImage: { show: true }
                }
            },
            calculable: true,
            dataZoom: {
                show: true,
                realtime: true,
                start: 0,
                end: 100
            },
            xAxis: [
                {
                    type: 'category',
                    boundaryGap: true,
                    data: this.xlist2
                }
            ],
            yAxis: [
                {
                    type: 'value'
                }
            ],
            series: [
                {
                    name: '最高',
                    type: 'line',
                    data: this.datalist2
                }
            ]
        };
    };
    BoeDashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-boe-dashboard',
            template: __webpack_require__("./src/app/boe-ui/boe-dashboard/boe-dashboard.component.html"),
            styles: [__webpack_require__("./src/app/boe-ui/boe-dashboard/boe-dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__common_service_web_socket_service__["a" /* WebSocketService */], __WEBPACK_IMPORTED_MODULE_4__breadcrumb_service_breadcrumb_service__["a" /* BreadcrumbService */], __WEBPACK_IMPORTED_MODULE_3_core_layout_retab_service_tab_service__["a" /* TabService */]])
    ], BoeDashboardComponent);
    return BoeDashboardComponent;
}());



/***/ }),

/***/ "./src/app/boe-ui/boe-dashboard/model/dashbaord-data.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashbaordData; });
var DashbaordData = /** @class */ (function () {
    function DashbaordData() {
    }
    DashbaordData.prototype.timeInterval = function () {
        var _this = this;
        this.Interval = setInterval(function () {
            _this.index += 1;
            _this.dataValue = 'changed_' + _this.index;
        }, this.interverIime);
    };
    DashbaordData.prototype.timeInterval2 = function (obj, obj2) {
        this.Interval = setInterval(function () {
            obj();
            obj2();
        }, this.interverIime);
    };
    DashbaordData.prototype.clearInterval = function () {
        clearInterval((this.Interval));
    };
    return DashbaordData;
}());



/***/ }),

/***/ "./src/app/boe-ui/boe-dashboard/service/time-interver.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimeInterverService; });
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

var TimeInterverService = /** @class */ (function () {
    function TimeInterverService() {
    }
    TimeInterverService.prototype.timeInterval = function (time, obj, i) {
        setInterval(function () {
            i += 1;
            obj = 'changed_' + i;
        }, time);
        // console.log(obj);
        // return obj;
    };
    TimeInterverService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], TimeInterverService);
    return TimeInterverService;
}());



/***/ }),

/***/ "./src/app/boe-ui/boe-grid/boe-grid.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/boe-ui/boe-grid/boe-grid.component.html":
/***/ (function(module, exports) {

module.exports = "<h3>Rowspan</h3>\r\n\r\n<!-- <p=table></p-table> -->\r\n<div class=\"FullTable\">\r\n    <p-table #table1 [value]=\"cars\">\r\n        <ng-template pTemplate=\"header\">\r\n            <tr>\r\n                <th colspan=\"2\" style=\"background-color:darkseagreen\">colspan1</th>\r\n                <th colspan=\"2\">colspan2</th>\r\n            </tr>\r\n            <tr>\r\n                <th>Vin</th>\r\n                <th>Year</th>\r\n                <th>Brand</th>\r\n                <th>Color</th>\r\n            </tr>\r\n        </ng-template>\r\n        <ng-template pTemplate=\"body\" let-car>\r\n            <tr>\r\n                <td>{{car.vin}}</td>\r\n                <td>{{car.year}}</td>\r\n                <td>{{car.brand}}</td>\r\n                <td>{{car.color}}</td>\r\n            </tr>\r\n        </ng-template>\r\n    </p-table>\r\n    <p-table #table2 [value]=\"cars\">\r\n        <ng-template pTemplate=\"header\">\r\n            <tr>\r\n                <th colspan=\"3\" style=\"background-color:darkseagreen\">colspan3</th>\r\n                <th colspan=\"1\">colspan4</th>\r\n            </tr>\r\n            <tr>\r\n                <th>Vin</th>\r\n                <th>Year</th>\r\n                <th>Brand</th>\r\n                <th>Color</th>\r\n            </tr>\r\n        </ng-template>\r\n        <ng-template pTemplate=\"body\" let-car>\r\n            <tr>\r\n                <td>{{car.vin}}</td>\r\n                <td>{{car.year}}</td>\r\n                <td>{{car.brand}}</td>\r\n                <td>{{car.color}}</td>\r\n            </tr>\r\n        </ng-template>\r\n    </p-table>\r\n    <p-table #table3 [value]=\"cars\">\r\n        <ng-template pTemplate=\"header\">\r\n            <tr>\r\n                <th>Vin</th>\r\n                <th>Year</th>\r\n                <th>Brand</th>\r\n                <th>Color</th>\r\n            </tr>\r\n        </ng-template>\r\n        <ng-template pTemplate=\"body\" let-car>\r\n            <tr>\r\n                <td>{{car.vin}}</td>\r\n                <td>{{car.year}}</td>\r\n                <td>{{car.brand}}</td>\r\n                <td>{{car.color}}</td>\r\n            </tr>\r\n        </ng-template>\r\n        <ng-template pTemplate=\"footer\" style=\"background-color: darkseagreen\">\r\n            <tr style=\"height: 10%;\">\r\n                <td colspan=\"2\" style=\"background-color:darkseagreen\">Coment</td>\r\n                <td colspan=\"2\" style=\"background-color:darkseagreen\">\r\n                    <textarea pInputTextarea [(ngModel)]=\"coment\" style=\"width:100%; height:300px;\"></textarea>\r\n                </td>\r\n            </tr>\r\n        </ng-template>\r\n    </p-table>\r\n</div>\r\n\r\n<!-- <p-table [value]=\"cars\" sortField=\"brand\" sortMode=\"single\" (onSort)=\"onSort()\">\r\n        <ng-template pTemplate=\"header\">\r\n            <tr>\r\n                <th>Brand</th>\r\n                <th>Vin</th>\r\n                <th>Year</th>\r\n                <th>Color</th>\r\n            </tr>\r\n        </ng-template>\r\n        <ng-template pTemplate=\"body\" let-rowData let-rowIndex=\"rowIndex\">\r\n            <tr>\r\n                <td *ngIf=\"rowGroupMetadata[rowData.brand].index === rowIndex\" [attr.rowspan]=\"rowGroupMetadata[rowData.brand].size\">\r\n                    {{rowData.brand}}\r\n                </td>\r\n                <td>{{rowData.vin}}</td>\r\n                <td>{{rowData.year}}</td>\r\n                <td>{{rowData.color}}</td>\r\n            </tr>\r\n        </ng-template>\r\n    </p-table> -->"

/***/ }),

/***/ "./src/app/boe-ui/boe-grid/boe-grid.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BoeGridComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
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




var BoeGridComponent = /** @class */ (function () {
    // rowGroupMetadata: any;
    function BoeGridComponent(http, breadcrumbService, tService) {
        this.http = http;
        this.breadcrumbService = breadcrumbService;
        this.tService = tService;
        this.breadcrumbService.setItems([
            { label: 'BOE UI' },
            { label: 'GRID' },
        ]);
        this.tService.setItems('BOE UI-GRID');
    }
    BoeGridComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get('assets/demo/data/cars-small.json').subscribe(function (data) {
            _this.cars = data['data'];
        });
    };
    BoeGridComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-boe-grid',
            template: __webpack_require__("./src/app/boe-ui/boe-grid/boe-grid.component.html"),
            styles: [__webpack_require__("./src/app/boe-ui/boe-grid/boe-grid.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3__breadcrumb_service_breadcrumb_service__["a" /* BreadcrumbService */], __WEBPACK_IMPORTED_MODULE_2_core_layout_retab_service_tab_service__["a" /* TabService */]])
    ], BoeGridComponent);
    return BoeGridComponent;
}());



/***/ }),

/***/ "./src/app/boe-ui/boe-list/boe-list.component.css":
/***/ (function(module, exports) {

module.exports = ".tooltip {\r\n    position: relative;\r\n    /* display: inline-block; */\r\n    /* border-bottom: 1px dotted black; */\r\n}\r\n\r\n.tooltip .tooltiptext {\r\n    visibility: hidden;\r\n    width: 120px;\r\n    background-color: #555;\r\n    color: #fff;\r\n    text-align: center;\r\n    border-radius: 6px;\r\n    padding: 5px 0;\r\n    position: absolute;\r\n    z-index: 1;\r\n    bottom: 125%;\r\n    left: 50%;\r\n    margin-left: -60px;\r\n    opacity: 0;\r\n    -webkit-transition: opacity 0.3s;\r\n    transition: opacity 0.3s;\r\n}\r\n\r\n.tooltip .tooltiptext::after {\r\n    content: \"\";\r\n    position: absolute;\r\n    top: 100%;\r\n    left: 50%;\r\n    margin-left: -5px;\r\n    border-width: 5px;\r\n    border-style: solid;\r\n    border-color: #555 transparent transparent transparent;\r\n}\r\n\r\n.tooltip:hover .tooltiptext {\r\n    visibility: visible;\r\n    opacity: 1;\r\n}"

/***/ }),

/***/ "./src/app/boe-ui/boe-list/boe-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g\">\n  <!-- <div class=\"ui-g-12\">\n      <h3 class=\"first\">Title MES UI - TYPE1</h3>\n      <hr>\n    </div> -->\n  <!-- search area -->\n  <div class=\"ui-g-12\" style=\"border: 1px solid #c8c8c8;\">\n    <!-- search option area -->\n    <div class=\"ui-g-12\" style=\"padding: 10 px\">\n      <!-- if you add the other option, change the class source -->\n      <div class=\"ui-g-12 ui-md-6 ui-lg-3\">\n\n        <label for=\"search\" style=\"margin-right: 10%\">\n          <strong>Search : </strong>\n        </label>\n        <input type=\"text\" pInputText style=\"width: 70%\" [(ngModel)]=\"\n        searchWord\" />\n\n      </div>\n      <div class=\"ui-g-12 ui-md-6 ui-lg-3\">\n        <label for=\"search\" style=\"margin-right: 10%\">\n          <strong>header : </strong>\n        </label>\n        <p-dropdown [options]=\"option1\" [(ngModel)]=\"selectedOption1\" [style]=\"{'width': '70%'}\" (onChange)=\"onChangedOption()\"></p-dropdown>\n      </div>\n      <div class=\"ui-g-12 ui-md-6 ui-lg-3\">\n        <div class=\"ui-g\">\n          <label for=\"search\" style=\"margin-right: 10%\">\n            <strong>date : </strong>\n          </label>\n          <p-calendar [(ngModel)]=\"searchDate\" [showIcon]=\"true\" dateFormat=\"yy.mm.dd\"></p-calendar>\n        </div>\n      </div>\n      <div class=\"ui-g-12 ui-md-6 ui-lg-3\">\n        <button pButton type=\"button\" (click)=\"onSearch()\" label=\"Search\" style=\"width: 30%\" icon=\"fa fa-search icon-search\"></button>\n      </div>\n    </div>\n    <!-- end search option area -->\n    <!-- search button area -->\n  </div>\n  <!-- end search area -->\n\n  <!-- data gride area -->\n  <div class=\"ui-g-12\">\n    <div>\n      <!-- if you use selection, you must set datakey -->\n      <p-table #dt [columns]=\"cols\" [value]=\"data\" [(selection)]=\"selectedData\" dataKey=\"col1\" (sortFunction)=\"customSort($event)\"\n        [customSort]=\"true\">\n        <ng-template pTemplate=\"caption\">\n          <div class=\"ui-helper-clearfix\">\n            <span style=\"float: left;\">\n              <button type=\"button\" pButton label=\"Delete\" (click)=\"deleteSelectedData()\"></button>\n            </span>\n            <span style=\"float: right;\">\n              <button type=\"button\" pButton label=\"ADD\" (click)=\"addData()\"></button>\n              <button type=\"button\" pButton icon=\"fa fa-file-o\" iconPos=\"left\" label=\"forntExcelDown\" (click)=\"forntExcelDown()\"></button>\n              <button type=\"button\" pButton icon=\"fa fa-file-o\" iconPos=\"left\" label=\"excelDown\" (click)=\"excelDown()\"></button>\n            </span>\n            <!-- <button type=\"button\" pButton icon=\"fa fa-file\" iconPos=\"left\" label=\"Selection Only\" (click)=\"\" style=\"float:right\"></button> -->\n          </div>\n        </ng-template>\n        <ng-template pTemplate=\"header\" let-columns>\n          <tr>\n            <th style=\"width: 3.25em\">\n              <p-tableHeaderCheckbox></p-tableHeaderCheckbox>\n            </th>\n            <ng-container *ngFor=\"let col of columns; \" [ngSwitch]=\"col.field\">\n\n              <ng-container *ngSwitchCase=\"'col4'\">\n                <th [pSortableColumn]=\"col.field\">\n                  {{col.header}}\n                  <p-sortIcon [field]=\"col.field\"></p-sortIcon>\n                </th>\n              </ng-container>\n              <ng-container *ngSwitchCase=\"'col5'\">\n                <th [pSortableColumn]=\"col.field\">\n                  {{col.header}}\n                  <p-sortIcon [field]=\"col.field\"></p-sortIcon>\n                </th>\n              </ng-container>\n              <ng-container *ngSwitchDefault>\n                <th>\n                  {{col.header}}\n                </th>\n              </ng-container>\n            </ng-container>\n            <th></th>\n          </tr>\n        </ng-template>\n        <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\">\n\n          <tr [pSelectableRow]=\"rowData\" #dtTr ondblclick=\"ondblclick()\">\n            <td>\n              <p-tableCheckbox [value]=\"rowData\"></p-tableCheckbox>\n            </td>\n            <ng-container *ngFor=\"let col of columns; let len = count \" [ngSwitch]=\"col.field\">\n              <ng-container *ngSwitchCase=\"'col1'\">\n                <td title=\"{{rowData[col.field]}}\">\n                  <a href=\"#\" (click)=\"openDetail(rowData)\">{{rowData[col.field]}}</a>\n                </td>\n              </ng-container>\n              <ng-container *ngSwitchCase=\"'col2'\">\n                <td style=\"background-color: royalblue\">\n                  {{rowData[col.field]}}\n                </td>\n              </ng-container>\n              <ng-container *ngSwitchCase=\"'col3'\">\n                <td style=\"color: red\">\n                  {{rowData[col.field] }}\n                </td>\n              </ng-container>\n              <ng-container *ngSwitchCase=\"'col8'\">\n                <td class=\"tooltip\">\n                  <a href=\"#\" (click)=\"openDetail(rowData)\" >{{rowData[col.field] | decimalPrecision: '2' : 'trunc' }}</a>\n                  <span class=\"tooltiptext\">{{rowData[col.field]}}</span>\n                </td>\n              </ng-container>\n              <ng-container *ngSwitchCase=\"'col9'\">\n                <td title=\"{{rowData[col.field]}}\">\n                  {{rowData[col.field] | decimalPrecision: '1' : 'ceil'}}\n                </td>\n              </ng-container>\n\n              <ng-container *ngSwitchDefault>\n                <td>{{rowData[col.field] }}</td>\n              </ng-container>\n\n            </ng-container>\n            <!-- <td *ngFor=\"let col of columns;\" [ngSwitch]=\"col.field\">\n              <ng-container *ngSwitchCase=\"'col1'\">\n                <a href=\"#\" (click)=\"openDetail(rowData)\">{{rowData[col.field]}}</a>\n              </ng-container>\n              <ng-container *ngSwitchCase=\"'col2'\">\n                  <a href=\"#\" (click)=\"openDetail(rowData)\">{{rowData[col.field]}}</a>\n                </ng-container>\n              <ng-container *ngSwitchDefault>\n                {{rowData[col.field]}}\n              </ng-container>\n            </td> -->\n            <td>\n              <button pButton type=\"button\" (click)=\"deleteData(rowData)\" label=\"Delete\"></button>\n            </td>\n          </tr>\n\n        </ng-template>\n      </p-table>\n      <br>\n      <p-paginator [rows]=\"rows\" [totalRecords]=\"totalRecords\" [rowsPerPageOptions]=\"rowsPerPageOptions\" (onPageChange)=\"paginate($event)\"></p-paginator>\n\n    </div>\n  </div>\n  <!-- end data gride area -->\n\n  <!-- dialog -->\n  <!-- <app-type1-modal [modalData]=\"modalData\" [(modalVisible)]=\"modalVisible\"></app-type1-modal> -->\n  <div class=\"ui-g-12\">\n\n    <p-dialog header=\"Dailog\" [(visible)]=\"modalVisible\" [modal]=\"true\" [responsive]=\"true\" [width]=\"560\">\n      <div class=\"ui-dialog-content\">\n        <div class=\"ui-g-12\">\n          <div class=\"ui-g-12 ui-md-6 ui-lg-6\">\n            <label for=\"\">col1</label>\n          </div>\n          <div class=\"ui-g-12 ui-md-6 ui-lg-6\">\n            <input type=\"number\" pInputText [(ngModel)]=\"modalData.col1\" />\n          </div>\n        </div>\n        <div class=\"ui-g-12\">\n          <div class=\"ui-g-12 ui-md-6 ui-lg-6\">\n            <label for=\"\">col2</label>\n          </div>\n          <div class=\"ui-g-12 ui-md-6 ui-lg-6\">\n            <input type=\"number\" pInputText [(ngModel)]=\"modalData.col2\" />\n          </div>\n        </div>\n        <div class=\"ui-g-12\">\n          <div class=\"ui-g-12 ui-md-6 ui-lg-6\">\n            <label for=\"\">col3</label>\n          </div>\n          <div class=\"ui-g-12 ui-md-6 ui-lg-6\">\n            <input type=\"number\" pInputText [(ngModel)]=\"modalData.col3\" />\n          </div>\n        </div>\n        <div class=\"ui-g-12\">\n          <div class=\"ui-g-12 ui-md-6 ui-lg-6\">\n            <label for=\"\">col4</label>\n          </div>\n          <div class=\"ui-g-12 ui-md-6 ui-lg-6\">\n            <input type=\"number\" pInputText [(ngModel)]=\"modalData.col4\" />\n          </div>\n        </div>\n        <div class=\"ui-g-12\">\n          <div class=\"ui-g-12 ui-md-6 ui-lg-6\">\n            <label for=\"\">col5</label>\n          </div>\n          <div class=\"ui-g-12 ui-md-6 ui-lg-6\">\n            <input type=\"number\" pInputText [(ngModel)]=\"modalData.col5\" />\n          </div>\n        </div>\n        <div class=\"ui-g-12\">\n          <div class=\"ui-g-12 ui-md-6 ui-lg-6\">\n            <label for=\"\">col6</label>\n          </div>\n          <div class=\"ui-g-12 ui-md-6 ui-lg-6\">\n            <input type=\"number\" pInputText [(ngModel)]=\"modalData.col6\" />\n          </div>\n        </div>\n        <div class=\"ui-g-12\">\n          <div class=\"ui-g-12 ui-md-6 ui-lg-6\">\n            <label for=\"\">col7</label>\n          </div>\n          <div class=\"ui-g-12 ui-md-6 ui-lg-6\">\n            <input type=\"number\" pInputText [(ngModel)]=\"modalData.col7\" />\n          </div>\n        </div>\n        <div class=\"ui-g-12\">\n          <div class=\"ui-g-12 ui-md-6 ui-lg-6\">\n            <label for=\"\">col8</label>\n          </div>\n          <div class=\"ui-g-12 ui-md-6 ui-lg-6\">\n            <input type=\"number\" pInputText [(ngModel)]=\"modalData.col8\" />\n          </div>\n        </div>\n        <div class=\"ui-g-12\">\n          <div class=\"ui-g-12 ui-md-6 ui-lg-6\">\n            <label for=\"\">col9</label>\n          </div>\n          <div class=\"ui-g-12 ui-md-6 ui-lg-6\">\n            <input type=\"number\" pInputText [(ngModel)]=\"modalData.col9\" />\n          </div>\n        </div>\n        <div class=\"ui-g-12\">\n          <div class=\"ui-g-12 ui-md-6 ui-lg-6\">\n            <label for=\"\">inputSwitch</label>\n          </div>\n          <div class=\"ui-g-12 ui-md-6 ui-lg-6\">\n            <p-inputSwitch onLabel=\"Check\" offLabel=\"Uncheck\" [(ngModel)]=\"inputSwitchChecked\"></p-inputSwitch>\n          </div>\n        </div>\n\n      </div>\n\n\n      <p-footer>\n        <button type=\"button\" pButton icon=\"pi pi-check\" (click)=\"save()\" label=\"save\"></button>\n        <button type=\"button\" pButton icon=\"pi pi-close\" (click)=\"modalVisible=false\" label=\"cancel\" class=\"ui-button-secondary\"></button>\n      </p-footer>\n    </p-dialog>\n  </div>\n</div>\n<hr>\n<p-fileUpload name=\"myfile[]\" url=\"/api/file/upload\"></p-fileUpload>\n<hr>\n\n<div class=\"ui-g\">\n<!-- search area -->\n<div class=\"ui-g-12\" style=\"border: 1px solid #c8c8c8;\">\n  <!-- search option area -->\n  <div class=\"ui-g-12\" style=\"padding: 10 px\">\n    <!-- if you add the other option, change the class source -->\n    <div class=\"ui-g-12 ui-md-6 ui-lg-6\">\n\n      <label for=\"fileName\" style=\"margin-right: 10%\">\n        <strong>FileName : </strong>\n      </label>\n      <input type=\"text\" pInputText style=\"width: 70%\" [(ngModel)]=\"\n      fileName\" />\n    </div>\n \n    <div class=\"ui-g-12 ui-md-6 ui-lg-6\">\n      <button pButton type=\"button\" (click)=\"onFileDownload()\" label=\"DOWNLOAD\" style=\"width: 30%\" icon=\"fa fa-download icon-download\"></button>\n    </div>\n  </div>\n  <!-- end search option area -->\n  <!-- search button area -->\n</div>\n<!-- end search area -->\n\n  \n</div>"

/***/ }),

/***/ "./src/app/boe-ui/boe-list/boe-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BoeListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_service_api_api_service__ = __webpack_require__("./src/app/common/service/api/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_service_sps_service__ = __webpack_require__("./src/app/common/service/sps.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_model_sps_model__ = __webpack_require__("./src/app/common/model/sps-model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_model_chart__ = __webpack_require__("./src/app/common/model/chart.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__service_file_upload_service__ = __webpack_require__("./src/app/boe-ui/boe-list/service/file-upload.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_layout_retab_service_tab_service__ = __webpack_require__("./src/core/layout/retab/service/tab.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__breadcrumb_service_breadcrumb_service__ = __webpack_require__("./src/core/layout/breadcrumb/service/breadcrumb.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





// import { Router } from '@angular/router';

// import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';


var BoeListComponent = /** @class */ (function () {
    function BoeListComponent(apiService, spsService, file, breadcrumbService, tService) {
        this.apiService = apiService;
        this.spsService = spsService;
        this.file = file;
        this.breadcrumbService = breadcrumbService;
        this.tService = tService;
        this.page = new __WEBPACK_IMPORTED_MODULE_3__common_model_sps_model__["a" /* SpsModel */]();
        // search data;
        this.rows = 5;
        // search data;
        this.searchWord = null;
        this.option1 = null;
        this.selectedOption1 = null;
        // sort
        this.sortCol = 'chartKey';
        this.sortType = 'desc';
        this.searchInfo = { searchOption: '', searchWord: '', searchDate: '' };
        this.pageInfo = { pageRow: this.rows, startRow: 0 };
        this.sortInfo = { sortCol: this.sortCol, sortType: this.sortType };
        // modal data
        this.modalVisible = false;
        this.modalData = new __WEBPACK_IMPORTED_MODULE_4__common_model_chart__["a" /* Chart */]();
        this.inputSwitchChecked = true;
        this.breadcrumbService.setItems([
            { label: 'BOE UI' },
            { label: 'LIST' },
        ]);
        this.tService.setItems('BOE UI-LIST');
    }
    BoeListComponent.prototype.ngAfterViewInit = function () {
    };
    BoeListComponent.prototype.ngOnInit = function () {
        this.initPage();
        this.cols = [
            { field: 'col1', header: 'Col1' },
            { field: 'col2', header: 'Col2' },
            { field: 'col3', header: 'Col3' },
            { field: 'col4', header: 'Col4' },
            { field: 'col5', header: 'Col5' },
            { field: 'col6', header: 'Col6' },
            { field: 'col7', header: 'Col7' },
            { field: 'col8', header: 'Col8' },
            { field: 'col9', header: 'Col9' }
        ];
        this.option1 = [
            { label: 'Select column', value: null },
            { label: 'col1', value: 'col1' },
            { label: 'col2', value: 'col2' },
            { label: 'col3', value: 'col3' },
            { label: 'col4', value: 'col4' },
            { label: 'col5', value: 'col5' },
            { label: 'col6', value: 'col6' },
            { label: 'col7', value: 'col7' },
            { label: 'col8', value: 'col8' },
            { label: 'col9', value: 'col9' }
        ];
    };
    BoeListComponent.prototype.initPage = function () {
        var url = '/grid/list';
        this.getPageCount();
        this.getTableInfo();
    };
    BoeListComponent.prototype.getTableInfo = function () {
        var _this = this;
        var url = '/boeui/list';
        var options = {
            params: {
                searchOption: this.searchInfo['searchOption'],
                searchWord: this.searchInfo['searchWord'],
                pageRow: this.pageInfo['pageRow'],
                startRow: this.pageInfo['startRow'],
                sortCol: this.sortInfo['sortCol'],
                sortType: this.sortInfo['sortType']
            }
        };
        this.apiService.get(url, options).subscribe(function (res) {
            _this.data = res['data'];
            _this.totalRecords = res['totalRecords'][0].totalRecords;
        }, function (error) {
            console.log(error);
        });
    };
    // getTotpage
    BoeListComponent.prototype.getPageCount = function () {
        var _this = this;
        var url = '/boeui/list/count';
        this.apiService.get(url).subscribe(function (res) {
            _this.totalRecords = res;
        }, function (error) {
            console.log(error);
        });
    };
    BoeListComponent.prototype.resetpageAndSearch = function () {
        this.searchWord = '';
        this.selectedOption1 = null;
        this.searchInfo.searchWord = this.searchWord;
        this.searchInfo.searchOption = this.selectedOption1;
        this.sortCol = 'chartKey';
        this.sortType = 'desc';
        this.pageInfo.startRow = 0;
        this.pageInfo.pageRow = 5;
    };
    BoeListComponent.prototype.paginate = function (event) {
        this.pageInfo.pageRow = event['rows'];
        this.pageInfo.startRow = event['first'];
        this.getTableInfo();
    };
    BoeListComponent.prototype.getTimeStamp = function () {
        var date = this.searchDate;
        var searchDate = null;
        if (date) {
            var yyyy = date.getFullYear().toString();
            var mm = (date.getMonth() + 1).toString();
            var dd = (date.getDate()).toString();
            searchDate = yyyy + '-' + (mm[1] ? mm : '0' + mm[0]) + '-' + (dd[1] ? dd : '0' + dd[0]);
        }
        return searchDate;
    };
    BoeListComponent.prototype.onChangedOption = function () {
    };
    BoeListComponent.prototype.onSearch = function () {
        this.searchInfo.searchWord = this.searchWord;
        this.searchInfo.searchOption = this.selectedOption1;
        this.pageInfo.pageRow = 5;
        this.pageInfo.startRow = 0;
        this.getTableInfo();
    };
    // 검색조건 셋팅
    BoeListComponent.prototype.setSearch = function () {
        var search = new Object();
        var paramsMap = new Map();
        this.option = {
            params: {
                searchWord: this.searchWord,
                searchOpt: this.selectedOption1,
                searchDate: this.getTimeStamp(),
                sortCol: this.sortCol,
                sortType: this.sortType
            }
        };
        this.spsService.page.search = search;
    };
    BoeListComponent.prototype.customSort = function (event) {
        // 1: asc, -1 desc
        this.sortCol = event['field'];
        this.sortType = ((event['order'] === 1) ? 'asc' : 'desc');
        this.onSearch();
    };
    // dialog function
    BoeListComponent.prototype.addData = function () {
        this.modalData = new __WEBPACK_IMPORTED_MODULE_4__common_model_chart__["a" /* Chart */]();
        this.modalVisible = true;
    };
    BoeListComponent.prototype.openDetail = function (obj, idx) {
        // object copy
        this.modalData = Object.assign({}, obj);
        this.modalVisible = true;
        return false;
    };
    BoeListComponent.prototype.save = function () {
        var _this = this;
        var key = this.modalData.chartKey;
        if (key == null || key === '') {
            var url = '/boeui/create';
            this.apiService.post(url, this.modalData).subscribe(function (res) {
                _this.modalVisible = false;
                _this.resetpageAndSearch();
                _this.getTableInfo();
            }, function (error) {
                console.log(error);
            }); // api
        }
        else {
            var url = '/boeui/update';
            this.apiService.put(url, this.modalData).subscribe(function (res) {
                _this.modalVisible = false;
                _this.resetpageAndSearch();
                _this.getTableInfo();
            }, function (error) {
                console.log(error);
            }); // api
        }
    };
    BoeListComponent.prototype.deleteSelectedData = function () {
        this.actionDelete(this.selectedData);
    };
    BoeListComponent.prototype.deleteData = function (obj) {
        this.modalData = Object.assign({}, obj);
        var arrayData = new Array();
        arrayData.push(this.modalData);
        this.actionDelete(arrayData);
    };
    BoeListComponent.prototype.actionDelete = function (arrayData) {
        var _this = this;
        var url = '/boeui/delete';
        var data = { body: arrayData };
        this.apiService.delete(url, data).subscribe(function (res) {
            _this.resetpageAndSearch();
            _this.getTableInfo();
        }, function (error) {
            console.log(error);
        });
    };
    BoeListComponent.prototype.excelDown = function () {
        var url = '/excel/download';
        var params = {
            searchOption: this.searchInfo['searchOption'],
            searchWord: this.searchInfo['searchWord'],
            searchDate: '',
            pageRow: this.pageInfo['pageRow'],
            startRow: this.pageInfo['startRow'],
            sortCol: this.sortInfo['sortCol'],
            sortType: this.sortInfo['sortType']
        };
        var data = { header: this.cols, content: this.data, params: params };
        this.excelDownApi(url, data);
    };
    BoeListComponent.prototype.forntExcelDown = function () {
        var url = '/excel/download/front';
        var data = { header: this.cols, content: this.data };
        this.excelDownApi(url, data);
    };
    BoeListComponent.prototype.excelDownApi = function (url, data) {
        this.file.getExcelDownLoad(url, data).subscribe(function (res) {
            var blob = new Blob([res], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
            if (navigator.msSaveBlob) {
                // IE 10+
                navigator.msSaveBlob(blob, 'excelFile.xls');
            }
            else {
                var link = document.createElement('a');
                // Browsers that support HTML5 download attribute
                if (link.download !== undefined) {
                    var bloburl = URL.createObjectURL(blob);
                    link.setAttribute('href', bloburl);
                    link.setAttribute('download', 'excelFile.xls');
                    link.style.visibility = 'hidden';
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                }
            }
        }, function (error) { console.log(error); });
    };
    BoeListComponent.prototype.onFileDownload = function () {
        window.location.href = this.file.getDownloadUrl() + this.fileName;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChildren"])('dtTr'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["QueryList"])
    ], BoeListComponent.prototype, "dtTr", void 0);
    BoeListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-boe-list',
            template: __webpack_require__("./src/app/boe-ui/boe-list/boe-list.component.html"),
            styles: [__webpack_require__("./src/app/boe-ui/boe-list/boe-list.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__common_service_api_api_service__["a" /* ApiService */], __WEBPACK_IMPORTED_MODULE_2__common_service_sps_service__["a" /* SpsService */], __WEBPACK_IMPORTED_MODULE_5__service_file_upload_service__["a" /* FileUploadService */],
            __WEBPACK_IMPORTED_MODULE_7__breadcrumb_service_breadcrumb_service__["a" /* BreadcrumbService */], __WEBPACK_IMPORTED_MODULE_6_core_layout_retab_service_tab_service__["a" /* TabService */]])
    ], BoeListComponent);
    return BoeListComponent;
}());



/***/ }),

/***/ "./src/app/boe-ui/boe-list/service/file-upload.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileUploadService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_environments_environment__ = __webpack_require__("./src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FileUploadService = /** @class */ (function () {
    // constructor(private http: HttpClient) { }
    function FileUploadService(http) {
        this.http = http;
        this.apiUrl = __WEBPACK_IMPORTED_MODULE_2_environments_environment__["a" /* environment */].apiPath;
    }
    FileUploadService.prototype.getFileDownLoad = function (fileId) {
        console.log('apiUrl : ', this.apiUrl);
        console.log(this.apiUrl + '/file/download?fileId=' + fileId);
        return this.http.get(this.apiUrl + '/file/download?fileId=' + fileId, {
            responseType: 'blob'
        });
        // .map(res => res.blob())
        // .catch(this.handleError)
    };
    FileUploadService.prototype.getExcelDownLoad = function (url, data) {
        console.log('url : ', url);
        console.log(this.apiUrl + url);
        return this.http.post(this.apiUrl + url, data, {
            responseType: 'blob'
        });
    };
    FileUploadService.prototype.getDownloadUrl = function () {
        return this.apiUrl + '/file/download?localPath=&fileId=';
    };
    FileUploadService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["b" /* HttpClient */]])
    ], FileUploadService);
    return FileUploadService;
}());



/***/ }),

/***/ "./src/app/boe-ui/boe-ui-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BoeUiRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__boe_list_boe_list_component__ = __webpack_require__("./src/app/boe-ui/boe-list/boe-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__boe_grid_boe_grid_component__ = __webpack_require__("./src/app/boe-ui/boe-grid/boe-grid.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__boe_chart_boe_chart_component__ = __webpack_require__("./src/app/boe-ui/boe-chart/boe-chart.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__boe_dashboard_boe_dashboard_component__ = __webpack_require__("./src/app/boe-ui/boe-dashboard/boe-dashboard.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: 'boe-list',
        component: __WEBPACK_IMPORTED_MODULE_2__boe_list_boe_list_component__["a" /* BoeListComponent */]
    },
    {
        path: 'boe-grid',
        component: __WEBPACK_IMPORTED_MODULE_3__boe_grid_boe_grid_component__["a" /* BoeGridComponent */]
    },
    {
        path: 'boe-chart',
        component: __WEBPACK_IMPORTED_MODULE_4__boe_chart_boe_chart_component__["a" /* BoeChartComponent */]
    },
    {
        path: 'boe-dashboard',
        component: __WEBPACK_IMPORTED_MODULE_5__boe_dashboard_boe_dashboard_component__["a" /* BoeDashboardComponent */]
    }
];
var BoeUiRoutingModule = /** @class */ (function () {
    function BoeUiRoutingModule() {
    }
    BoeUiRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"]]
        })
    ], BoeUiRoutingModule);
    return BoeUiRoutingModule;
}());



/***/ }),

/***/ "./src/app/boe-ui/boe-ui.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoeUiModule", function() { return BoeUiModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__boe_ui_routing_module__ = __webpack_require__("./src/app/boe-ui/boe-ui-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__boe_list_boe_list_component__ = __webpack_require__("./src/app/boe-ui/boe-list/boe-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__boe_grid_boe_grid_component__ = __webpack_require__("./src/app/boe-ui/boe-grid/boe-grid.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__boe_dashboard_boe_dashboard_component__ = __webpack_require__("./src/app/boe-ui/boe-dashboard/boe-dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__common_service_api_api_service__ = __webpack_require__("./src/app/common/service/api/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__report_ui_service_report_ui_common_service__ = __webpack_require__("./src/app/report-ui/service/report-ui-common.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_primeng_primeng__ = __webpack_require__("./node_modules/primeng/primeng.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_primeng_primeng__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_primeng_button__ = __webpack_require__("./node_modules/primeng/button.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_primeng_button___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_primeng_button__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_primeng_panel__ = __webpack_require__("./node_modules/primeng/panel.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_primeng_panel___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_primeng_panel__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_primeng_table__ = __webpack_require__("./node_modules/primeng/table.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_primeng_table___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_primeng_table__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_primeng_dialog__ = __webpack_require__("./node_modules/primeng/dialog.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_primeng_dialog___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_primeng_dialog__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_primeng_chart__ = __webpack_require__("./node_modules/primeng/chart.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_primeng_chart___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_primeng_chart__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_primeng_card__ = __webpack_require__("./node_modules/primeng/card.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_primeng_card___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_primeng_card__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_primeng_tabview__ = __webpack_require__("./node_modules/primeng/tabview.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_primeng_tabview___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16_primeng_tabview__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_primeng_galleria__ = __webpack_require__("./node_modules/primeng/galleria.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_primeng_galleria___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_17_primeng_galleria__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_primeng_paginator__ = __webpack_require__("./node_modules/primeng/paginator.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_primeng_paginator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_18_primeng_paginator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_primeng_inputswitch__ = __webpack_require__("./node_modules/primeng/inputswitch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_primeng_inputswitch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_19_primeng_inputswitch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_primeng_splitbutton__ = __webpack_require__("./node_modules/primeng/splitbutton.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_primeng_splitbutton___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_20_primeng_splitbutton__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_primeng_overlaypanel__ = __webpack_require__("./node_modules/primeng/overlaypanel.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_primeng_overlaypanel___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_21_primeng_overlaypanel__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_primeng_listbox__ = __webpack_require__("./node_modules/primeng/listbox.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_primeng_listbox___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_22_primeng_listbox__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_primeng_calendar__ = __webpack_require__("./node_modules/primeng/calendar.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_primeng_calendar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_23_primeng_calendar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_ngx_echarts__ = __webpack_require__("./node_modules/ngx-echarts/ngx-echarts.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__boe_chart_boe_chart_component__ = __webpack_require__("./src/app/boe-ui/boe-chart/boe-chart.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__boe_dashboard_service_time_interver_service__ = __webpack_require__("./src/app/boe-ui/boe-dashboard/service/time-interver.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__common_service_web_socket_service__ = __webpack_require__("./src/app/common/service/web-socket.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__common_service_sps_service__ = __webpack_require__("./src/app/common/service/sps.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__boe_list_service_file_upload_service__ = __webpack_require__("./src/app/boe-ui/boe-list/service/file-upload.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__common_pipe_decimal_precision_decimal_precision_pipe__ = __webpack_require__("./src/app/common/pipe/decimal-precision/decimal-precision.pipe.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







// service


// primeng















// echart






// pipe

var BoeUiModule = /** @class */ (function () {
    function BoeUiModule() {
    }
    BoeUiModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_3__boe_ui_routing_module__["a" /* BoeUiRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_9_primeng_primeng__["DropdownModule"],
                __WEBPACK_IMPORTED_MODULE_10_primeng_button__["ButtonModule"],
                __WEBPACK_IMPORTED_MODULE_11_primeng_panel__["PanelModule"],
                __WEBPACK_IMPORTED_MODULE_12_primeng_table__["TableModule"],
                __WEBPACK_IMPORTED_MODULE_13_primeng_dialog__["DialogModule"],
                __WEBPACK_IMPORTED_MODULE_9_primeng_primeng__["InputTextModule"],
                __WEBPACK_IMPORTED_MODULE_14_primeng_chart__["ChartModule"],
                __WEBPACK_IMPORTED_MODULE_24_ngx_echarts__["a" /* NgxEchartsModule */],
                __WEBPACK_IMPORTED_MODULE_15_primeng_card__["CardModule"],
                __WEBPACK_IMPORTED_MODULE_16_primeng_tabview__["TabViewModule"],
                __WEBPACK_IMPORTED_MODULE_17_primeng_galleria__["GalleriaModule"],
                __WEBPACK_IMPORTED_MODULE_18_primeng_paginator__["PaginatorModule"],
                __WEBPACK_IMPORTED_MODULE_19_primeng_inputswitch__["InputSwitchModule"],
                __WEBPACK_IMPORTED_MODULE_20_primeng_splitbutton__["SplitButtonModule"],
                __WEBPACK_IMPORTED_MODULE_21_primeng_overlaypanel__["OverlayPanelModule"],
                __WEBPACK_IMPORTED_MODULE_22_primeng_listbox__["ListboxModule"],
                __WEBPACK_IMPORTED_MODULE_23_primeng_calendar__["CalendarModule"],
                __WEBPACK_IMPORTED_MODULE_9_primeng_primeng__["FileUploadModule"]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_4__boe_list_boe_list_component__["a" /* BoeListComponent */], __WEBPACK_IMPORTED_MODULE_5__boe_grid_boe_grid_component__["a" /* BoeGridComponent */], __WEBPACK_IMPORTED_MODULE_25__boe_chart_boe_chart_component__["a" /* BoeChartComponent */], __WEBPACK_IMPORTED_MODULE_6__boe_dashboard_boe_dashboard_component__["a" /* BoeDashboardComponent */], __WEBPACK_IMPORTED_MODULE_30__common_pipe_decimal_precision_decimal_precision_pipe__["a" /* DecimalPrecisionPipe */]],
            providers: [__WEBPACK_IMPORTED_MODULE_7__common_service_api_api_service__["a" /* ApiService */], __WEBPACK_IMPORTED_MODULE_8__report_ui_service_report_ui_common_service__["a" /* ReportUiCommonService */], __WEBPACK_IMPORTED_MODULE_26__boe_dashboard_service_time_interver_service__["a" /* TimeInterverService */], __WEBPACK_IMPORTED_MODULE_27__common_service_web_socket_service__["a" /* WebSocketService */], __WEBPACK_IMPORTED_MODULE_28__common_service_sps_service__["a" /* SpsService */], __WEBPACK_IMPORTED_MODULE_29__boe_list_service_file_upload_service__["a" /* FileUploadService */]],
        })
    ], BoeUiModule);
    return BoeUiModule;
}());



/***/ }),

/***/ "./src/app/common/model/chart.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Chart; });
var Chart = /** @class */ (function () {
    function Chart() {
        this.chartKey = null;
        this.col1 = null;
        this.col2 = null;
        this.col3 = null;
        this.col4 = null;
        this.col5 = null;
        this.col6 = null;
        this.col7 = null;
        this.col8 = null;
        this.col9 = null;
    }
    return Chart;
}());



/***/ }),

/***/ "./src/app/common/pipe/decimal-precision/decimal-precision.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export MethType */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DecimalPrecisionPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MethType;
(function (MethType) {
    MethType[MethType["round"] = 0] = "round";
    MethType[MethType["ceil"] = 1] = "ceil";
    MethType[MethType["trunc"] = 2] = "trunc";
    MethType[MethType["null"] = 3] = "null";
})(MethType || (MethType = {}));
var DecimalPrecisionPipe = /** @class */ (function () {
    function DecimalPrecisionPipe() {
    }
    DecimalPrecisionPipe.prototype.transform = function (value, num, type) {
        var rsltValue = value;
        var count = Math.pow(10, num - 1);
        switch (type) {
            case 'ceil':
                value = Math.ceil(value * count) / count;
                break;
            case 'trunc':
                value = Math.floor(value * count) / count;
                break;
            default:
                value = Math.round(value * count) / count;
        }
        rsltValue = value.toFixed(num);
        return rsltValue;
    };
    DecimalPrecisionPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'decimalPrecision'
        })
    ], DecimalPrecisionPipe);
    return DecimalPrecisionPipe;
}());



/***/ })

});
//# sourceMappingURL=boe-ui.module.chunk.js.map