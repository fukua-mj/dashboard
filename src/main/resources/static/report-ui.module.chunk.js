webpackJsonp(["report-ui.module"],{

/***/ "./src/app/report-ui/report-ui-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportUiRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__type1_type1_component__ = __webpack_require__("./src/app/report-ui/type1/type1.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__type2_type2_component__ = __webpack_require__("./src/app/report-ui/type2/type2.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__type3_type3_component__ = __webpack_require__("./src/app/report-ui/type3/type3.component.ts");
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
var ReportUiRoutingModule = /** @class */ (function () {
    function ReportUiRoutingModule() {
    }
    ReportUiRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"]]
        })
    ], ReportUiRoutingModule);
    return ReportUiRoutingModule;
}());



/***/ }),

/***/ "./src/app/report-ui/report-ui.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportUiModule", function() { return ReportUiModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__report_ui_routing_module__ = __webpack_require__("./src/app/report-ui/report-ui-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__type1_type1_component__ = __webpack_require__("./src/app/report-ui/type1/type1.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__ = __webpack_require__("./node_modules/primeng/primeng.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_primeng_primeng__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_primeng_button__ = __webpack_require__("./node_modules/primeng/button.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_primeng_button___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_primeng_button__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_primeng_panel__ = __webpack_require__("./node_modules/primeng/panel.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_primeng_panel___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_primeng_panel__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_primeng_table__ = __webpack_require__("./node_modules/primeng/table.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_primeng_table___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_primeng_table__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_primeng_dialog__ = __webpack_require__("./node_modules/primeng/dialog.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_primeng_dialog___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_primeng_dialog__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_primeng_chart__ = __webpack_require__("./node_modules/primeng/chart.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_primeng_chart___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_primeng_chart__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__common_service_api_api_service__ = __webpack_require__("./src/app/common/service/api/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__type2_type2_component__ = __webpack_require__("./src/app/report-ui/type2/type2.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__type3_type3_component__ = __webpack_require__("./src/app/report-ui/type3/type3.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_ngx_echarts__ = __webpack_require__("./node_modules/ngx-echarts/ngx-echarts.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__service_report_ui_common_service__ = __webpack_require__("./src/app/report-ui/service/report-ui-common.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





// primeng









// echart


var ReportUiModule = /** @class */ (function () {
    function ReportUiModule() {
    }
    ReportUiModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__report_ui_routing_module__["a" /* ReportUiRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__["DropdownModule"],
                __WEBPACK_IMPORTED_MODULE_6_primeng_button__["ButtonModule"],
                __WEBPACK_IMPORTED_MODULE_7_primeng_panel__["PanelModule"],
                __WEBPACK_IMPORTED_MODULE_8_primeng_table__["TableModule"],
                __WEBPACK_IMPORTED_MODULE_9_primeng_dialog__["DialogModule"],
                __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__["InputTextModule"],
                __WEBPACK_IMPORTED_MODULE_10_primeng_chart__["ChartModule"],
                __WEBPACK_IMPORTED_MODULE_14_ngx_echarts__["a" /* NgxEchartsModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__type1_type1_component__["a" /* Type1Component */], __WEBPACK_IMPORTED_MODULE_12__type2_type2_component__["a" /* Type2Component */], __WEBPACK_IMPORTED_MODULE_13__type3_type3_component__["a" /* Type3Component */]],
            providers: [__WEBPACK_IMPORTED_MODULE_11__common_service_api_api_service__["a" /* ApiService */], __WEBPACK_IMPORTED_MODULE_15__service_report_ui_common_service__["a" /* ReportUiCommonService */]]
        })
    ], ReportUiModule);
    return ReportUiModule;
}());



/***/ }),

/***/ "./src/app/report-ui/type1/model/chartSet.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChartSet; });
var ChartSet = /** @class */ (function () {
    function ChartSet() {
    }
    return ChartSet;
}());



/***/ }),

/***/ "./src/app/report-ui/type1/model/echartSet.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export EchartOption */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EchartSet; });
var EchartOption = /** @class */ (function () {
    function EchartOption() {
    }
    return EchartOption;
}());

var EchartSet = /** @class */ (function () {
    function EchartSet() {
    }
    return EchartSet;
}());



/***/ }),

/***/ "./src/app/report-ui/type1/type1.component.css":
/***/ (function(module, exports) {

module.exports = ".demo-chart {\r\n    height: 400px;\r\n  }"

/***/ }),

/***/ "./src/app/report-ui/type1/type1.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g\" #fullScreenTest style=\"background-color:#ffffff\">\n\n\n  <div class=\"ui-g-12\">\n    <h3 class=\"first\">Title MES UI - TYPE1</h3>\n    <button pButton type=\"button\" (click)=\"onFull(fullScreenTest)\" label=\"content full test\"></button>\n    <hr>\n  </div>\n  <!-- search area -->\n  <div class=\"ui-g-12\">\n    <!-- search option area -->\n    <div class=\"ui-g-12 ui-lg-12\" style=\"border:1px solid lightgray; background-color:mintcream; box-shadow: 5px 5px 5px grey;\">\n      <!-- if you add the other option, change the class source -->\n      <div class=\"ui-g-12 ui-md-6 ui-lg-2\">\n        <label>Condition1</label>\n        <p-dropdown [options]=\"option1\" [(ngModel)]=\"selectedOption1\" placeholder=\"not connect\"></p-dropdown>\n      </div>\n      <div class=\"ui-g-12 ui-md-6 ui-lg-2\">\n        <!-- <h3 class=\"first\">Condition2</h3> -->\n        <label>Condition2</label>\n        <p-dropdown [options]=\"option2\" [(ngModel)]=\"selectedOption2\" placeholder=\"not connect\"></p-dropdown>\n      </div>\n      <div class=\"ui-g-12 ui-md-6 ui-lg-2\">\n        <!-- <h3 class=\"first\">Condition3</h3> -->\n        <label>Condition3</label>\n        <p-dropdown [options]=\"option3\" [(ngModel)]=\"selectedOption3\" placeholder=\"not connect\"></p-dropdown>\n      </div>\n      <div class=\"ui-g-12 ui-md-6 ui-lg-2\">\n        <!-- <h3 class=\"first\">Condition4</h3> -->\n        <label>Condition4</label>\n        <p-dropdown [options]=\"option4\" [(ngModel)]=\"selectedOption4\" placeholder=\"not connect\"></p-dropdown>\n      </div>\n      <div class=\"ui-g-12 ui-md-6 ui-lg-2\">\n        <!-- <h3 class=\"first\">Condition4</h3> -->\n        <button pButton type=\"button\" (click)=\"onSearch()\" label=\"Search\"></button>\n      </div>\n    </div>\n  </div>\n  <!-- end search area -->\n\n  <!-- prime chart area -->\n  <div class=\"ui-g-12\" #fullScreenTarget>\n    <p-panel>\n      <p-header>\n        <div class=\"ui-helper-clearfix\">\n          <span class=\"ui-panel-title\">Prime Bar Chart</span>\n          <button pButton type=\"button\" (click)=\"onFullThis(fullScreenTarget)\" label=\"this full test\"></button>\n        </div>\n      </p-header>\n      <!-- chart content -->\n      <p-chart type=\"bar\" [data]=\"dataChart\" (onDataSelect)=\"selectData($event)\"></p-chart>\n\n    </p-panel>\n  </div>\n  <!-- end prime chart area -->\n\n  <!-- echart chart area -->\n  <div class=\"ui-g-12\">\n    <p-panel>\n      <p-header>\n        <div class=\"ui-helper-clearfix\">\n          <span class=\"ui-panel-title\">Echart Bar Chart</span>\n        </div>\n      </p-header>\n      <!-- chart content -->\n      <div echarts [options]=\"chartOption\" class=\"demo-chart\"></div>\n\n    </p-panel>\n  </div>\n  <!-- end echart chart area -->\n\n  <!-- data gride area -->\n  <div class=\"ui-g-12\">\n    <p-panel>\n      <p-header>\n        <div class=\"ui-helper-clearfix\">\n          <span class=\"ui-panel-title\">Detail</span>\n        </div>\n      </p-header>\n      <div class=\"ui-panel-content\">\n        <!-- if you use selection, you must set datakey -->\n        <p-table [columns]=\"cols\" [value]=\"data\" dataKey=\"col1\" #chartGride>\n          <ng-template pTemplate=\"header\" let-columns>\n            <tr>\n              <th *ngFor=\"let col of columns\">\n                {{col.header}}\n              </th>\n            </tr>\n          </ng-template>\n          <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\">\n            <tr [pSelectableRow]=\"rowData\" [class]='test' #chartGride2>\n              <td *ngFor=\"let col of columns;\">\n                {{rowData[col.field]}}\n              </td>\n            </tr>\n          </ng-template>\n        </p-table>\n      </div>\n    </p-panel>\n  </div>\n  <!-- end data gride area -->\n\n</div>"

/***/ }),

/***/ "./src/app/report-ui/type1/type1.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Type1Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_service_api_api_service__ = __webpack_require__("./src/app/common/service/api/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__model_chartSet__ = __webpack_require__("./src/app/report-ui/type1/model/chartSet.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__model_echartSet__ = __webpack_require__("./src/app/report-ui/type1/model/echartSet.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_report_ui_common_service__ = __webpack_require__("./src/app/report-ui/service/report-ui-common.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_layout_retab_service_tab_service__ = __webpack_require__("./src/core/layout/retab/service/tab.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__breadcrumb_service_breadcrumb_service__ = __webpack_require__("./src/core/layout/breadcrumb/service/breadcrumb.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_screenfull__ = __webpack_require__("./node_modules/screenfull/dist/screenfull.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_screenfull___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_screenfull__);
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
    function Type1Component(apiService, reportComnService, breadcrumbService, tService) {
        this.apiService = apiService;
        this.reportComnService = reportComnService;
        this.breadcrumbService = breadcrumbService;
        this.tService = tService;
        // echart end;
        //full screen status
        this.fullScreenStatus = false;
        this.breadcrumbService.setItems([
            { label: 'REPORT UI' },
            { label: 'TYPE1' },
        ]);
        this.tService.setItems('REPORT UI-TYPE1');
    }
    Type1Component.prototype.ngAfterViewInit = function () {
    };
    Type1Component.prototype.ngOnInit = function () {
        var _this = this;
        var url = '/assets/demo/data/report-ui/type1.json';
        this.apiService.testGet(url).subscribe(function (res) {
            _this.data = res;
            // make chart
            _this.setPchart(res);
            _this.setEchart(res);
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
    // gride function
    Type1Component.prototype.selectData = function (event) {
        this.resetHighlight();
        this.grideHighlight(event.element['_model'].datasetLabel);
    };
    Type1Component.prototype.setPchart = function (data) {
        this.dataChart = {
            labels: ['Col1', 'Col2', 'Col3', 'Col4', 'Col5', 'Col6'],
            datasets: this.makeDatasets(data)
        };
    };
    Type1Component.prototype.makeDatasets = function (obj) {
        var datasets = new Array();
        // check Array
        if (Array.isArray(obj)) {
            for (var _i = 0, obj_1 = obj; _i < obj_1.length; _i++) {
                var list = obj_1[_i];
                var chartSet = new __WEBPACK_IMPORTED_MODULE_2__model_chartSet__["a" /* ChartSet */]();
                var dataArray = new Array();
                var color = this.reportComnService.getRandomColor();
                chartSet.label = list['key'];
                chartSet.backgroundColor = color;
                chartSet.borderColor = color;
                for (var value in list) {
                    if (list.hasOwnProperty(value)) {
                        if (value !== 'key') {
                            dataArray.push(list[value]);
                        }
                    }
                }
                chartSet.data = dataArray;
                datasets.push(chartSet);
            }
        }
        return datasets;
    };
    Type1Component.prototype.resetHighlight = function () {
        for (var i = 0; i < this.chartGride2['_results'].length; i++) {
            this.chartGride2['_results'][i].nativeElement.className = '';
        }
    };
    // set grid hign
    Type1Component.prototype.grideHighlight = function (key) {
        var rsIdx = null;
        this.data.forEach(function (value, idx) {
            if (key === value['key']) {
                rsIdx = idx;
            }
        });
        for (var i = 0; i < this.chartGride2['_results'].length; i++) {
            if (i === rsIdx) {
                this.chartGride2['_results'][i].nativeElement.className = 'ui-state-highlight';
            }
        }
    };
    Type1Component.prototype.onRowSelect = function (event) {
        console.log(event);
    };
    // echart setting function
    Type1Component.prototype.setEchart = function (data) {
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
    Type1Component.prototype.setSeriesOption = function (obj) {
        var seriesArray = new Array();
        if (Array.isArray(obj)) {
            for (var _i = 0, obj_2 = obj; _i < obj_2.length; _i++) {
                var list = obj_2[_i];
                var echartSet = new __WEBPACK_IMPORTED_MODULE_3__model_echartSet__["a" /* EchartSet */]();
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
    Type1Component.prototype.getKey = function (obj) {
        var keyNameArray = new Array();
        if (Array.isArray(obj)) {
            for (var _i = 0, obj_3 = obj; _i < obj_3.length; _i++) {
                var list = obj_3[_i];
                keyNameArray.push(list['key']);
            }
        }
        return keyNameArray;
    };
    Type1Component.prototype._resize = function () {
        this.fullScreenStatus = __WEBPACK_IMPORTED_MODULE_7_screenfull__["isFullscreen"];
    };
    //event(#id)  => event(fullScreenTest)  $envent is fullScreenTest Element
    Type1Component.prototype.onFull = function ($event) {
        if (__WEBPACK_IMPORTED_MODULE_7_screenfull__["enabled"]) {
            //screenfull.request($event);
            //this.fullScreenTest.nativeElement.parentElement.parentElement => app.component.html <router-outlet>
            __WEBPACK_IMPORTED_MODULE_7_screenfull__["request"](this.fullScreenTest.nativeElement.parentElement.parentElement);
            /*
            screenfull.toggle() => full screen
            screenfull.request(elem) => select html element
            */
        }
    };
    Type1Component.prototype.onFullThis = function (screentarget) {
        console.log('onFullThis v : ', screentarget);
        if (__WEBPACK_IMPORTED_MODULE_7_screenfull__["enabled"]) {
            __WEBPACK_IMPORTED_MODULE_7_screenfull__["request"](screentarget);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('fullScreenTest'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], Type1Component.prototype, "fullScreenTest", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChildren"])('chartGride2'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["QueryList"])
    ], Type1Component.prototype, "chartGride2", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('window:resize'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], Type1Component.prototype, "_resize", null);
    Type1Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-type1',
            template: __webpack_require__("./src/app/report-ui/type1/type1.component.html"),
            styles: [__webpack_require__("./src/app/report-ui/type1/type1.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__common_service_api_api_service__["a" /* ApiService */], __WEBPACK_IMPORTED_MODULE_4__service_report_ui_common_service__["a" /* ReportUiCommonService */],
            __WEBPACK_IMPORTED_MODULE_6__breadcrumb_service_breadcrumb_service__["a" /* BreadcrumbService */], __WEBPACK_IMPORTED_MODULE_5_core_layout_retab_service_tab_service__["a" /* TabService */]])
    ], Type1Component);
    return Type1Component;
}());



/***/ }),

/***/ "./src/app/report-ui/type2/model/chartSet.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChartSet; });
var ChartSet = /** @class */ (function () {
    function ChartSet() {
    }
    return ChartSet;
}());



/***/ }),

/***/ "./src/app/report-ui/type2/type2.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/report-ui/type2/type2.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g\">\n\n\n  <div class=\"ui-g-12\">\n    <h3 class=\"first\">Title MES UI - TYPE1</h3>\n    <hr>\n  </div>\n <!-- search area -->\n <div class=\"ui-g-12\">\n    <!-- search option area -->\n    <div class=\"ui-g-12 ui-lg-12\" style=\"border:1px solid lightgray; background-color:mintcream; box-shadow: 5px 5px 5px grey;\">\n      <!-- if you add the other option, change the class source -->\n      <div class=\"ui-g-12 ui-md-6 ui-lg-2\">\n        <label>Condition1</label>\n        <p-dropdown [options]=\"option1\" [(ngModel)]=\"selectedOption1\" placeholder=\"not connect\"></p-dropdown>\n      </div>\n      <div class=\"ui-g-12 ui-md-6 ui-lg-2\">\n        <!-- <h3 class=\"first\">Condition2</h3> -->\n        <label>Condition2</label>\n        <p-dropdown [options]=\"option2\" [(ngModel)]=\"selectedOption2\" placeholder=\"not connect\"></p-dropdown>\n      </div>\n      <div class=\"ui-g-12 ui-md-6 ui-lg-2\">\n        <!-- <h3 class=\"first\">Condition3</h3> -->\n        <label>Condition3</label>\n        <p-dropdown [options]=\"option3\" [(ngModel)]=\"selectedOption3\" placeholder=\"not connect\"></p-dropdown>\n      </div>\n      <div class=\"ui-g-12 ui-md-6 ui-lg-2\">\n        <!-- <h3 class=\"first\">Condition4</h3> -->\n        <label>Condition4</label>\n        <p-dropdown [options]=\"option4\" [(ngModel)]=\"selectedOption4\" placeholder=\"not connect\"></p-dropdown>\n      </div>\n      <div class=\"ui-g-12 ui-md-6 ui-lg-2\">\n        <!-- <h3 class=\"first\">Condition4</h3> -->\n        <button pButton type=\"button\" (click)=\"onSearch()\" label=\"Search\"></button>\n      </div>\n    </div>\n  </div>\n  <!-- end search area -->\n\n  <!-- prime chart area -->\n  <div class=\"ui-g-12\">\n    <p-panel>\n      <p-header>\n        <div class=\"ui-helper-clearfix\">\n          <span class=\"ui-panel-title\">Prime Line Chart</span>\n        </div>\n      </p-header>\n      <!-- chart content -->\n      <p-chart type=\"line\" [data]=\"dataChart\" (onDataSelect)=\"selectData($event)\"></p-chart>\n\n    </p-panel>\n  </div>\n  <!-- end prime chart area -->\n\n  <!-- echart chart area -->\n  <div class=\"ui-g-12\">\n    <p-panel>\n      <p-header>\n        <div class=\"ui-helper-clearfix\">\n          <span class=\"ui-panel-title\">Echart Lin Chart</span>\n        </div>\n      </p-header>\n      <!-- chart content -->\n      <div echarts [options]=\"chartOption\" class=\"demo-chart\"></div>\n\n    </p-panel>\n  </div>\n  <!-- end echart chart area -->\n\n  <!-- data gride area -->\n  <div class=\"ui-g-12\">\n    <p-panel>\n      <p-header>\n        <div class=\"ui-helper-clearfix\">\n          <span class=\"ui-panel-title\">Detail</span>\n        </div>\n      </p-header>\n      <div class=\"ui-panel-content\">\n        <!-- if you use selection, you must set datakey -->\n        <p-table [columns]=\"cols\" [value]=\"data\" dataKey=\"col1\">\n          <ng-template pTemplate=\"header\" let-columns>\n            <tr>\n              <th *ngFor=\"let col of columns\">\n                {{col.header}}\n              </th>\n            </tr>\n          </ng-template>\n          <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\">\n            <tr [pSelectableRow]=\"rowData\" [class]='test' #chartGride>\n              <td *ngFor=\"let col of columns;\">\n                {{rowData[col.field]}}\n              </td>\n            </tr>\n          </ng-template>\n        </p-table>\n      </div>\n    </p-panel>\n  </div>\n  <!-- end data gride area -->\n\n</div>"

/***/ }),

/***/ "./src/app/report-ui/type2/type2.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Type2Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_service_api_api_service__ = __webpack_require__("./src/app/common/service/api/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__model_chartSet__ = __webpack_require__("./src/app/report-ui/type2/model/chartSet.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__type1_model_echartSet__ = __webpack_require__("./src/app/report-ui/type1/model/echartSet.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_report_ui_common_service__ = __webpack_require__("./src/app/report-ui/service/report-ui-common.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_layout_retab_service_tab_service__ = __webpack_require__("./src/core/layout/retab/service/tab.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__breadcrumb_service_breadcrumb_service__ = __webpack_require__("./src/core/layout/breadcrumb/service/breadcrumb.service.ts");
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
    function Type2Component(apiService, reportComnService, breadcrumbService, tService) {
        this.apiService = apiService;
        this.reportComnService = reportComnService;
        this.breadcrumbService = breadcrumbService;
        this.tService = tService;
        this.breadcrumbService.setItems([
            { label: 'REPORT UI' },
            { label: 'TYPE2' },
        ]);
        this.tService.setItems('REPORT UI-TYPE2');
    }
    Type2Component.prototype.ngAfterViewInit = function () { };
    Type2Component.prototype.ngOnInit = function () {
        var _this = this;
        var url = '/assets/demo/data/report-ui/type1.json';
        this.apiService.testGet(url).subscribe(function (res) {
            console.log(res);
            _this.data = res;
            _this.setPchart(res);
            _this.setEchart(res);
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
    // gride function
    Type2Component.prototype.selectData = function (event) {
        // 하이라이트 처리안됨. event.dataset에서 key값인 label을 가져올 수 없음...찾아보기...
        this.resetHighlight();
        this.grideHighlight(event.element['_model'].datasetLabel);
    };
    // pchart function
    Type2Component.prototype.setPchart = function (data) {
        this.dataChart = {
            labels: ['Col1', 'Col2', 'Col3', 'Col4', 'Col5', 'Col6'],
            datasets: this.makeDatasets(data)
        };
    };
    Type2Component.prototype.makeDatasets = function (obj) {
        var datasets = new Array();
        // check Array
        if (Array.isArray(obj)) {
            for (var _i = 0, obj_1 = obj; _i < obj_1.length; _i++) {
                var list = obj_1[_i];
                var chartSet = new __WEBPACK_IMPORTED_MODULE_2__model_chartSet__["a" /* ChartSet */]();
                var dataArray = new Array();
                var color = this.reportComnService.getRandomColor();
                chartSet.label = list['key'];
                chartSet.fill = false;
                // chartSet.backgroundColor = '#42A5F5';
                chartSet.borderColor = color;
                for (var value in list) {
                    if (list.hasOwnProperty(value)) {
                        if (value !== 'key') {
                            dataArray.push(list[value]);
                        }
                    }
                }
                chartSet.data = dataArray;
                datasets.push(chartSet);
            }
        }
        return datasets;
    };
    Type2Component.prototype.resetHighlight = function () {
        for (var i = 0; i < this.chartGride['_results'].length; i++) {
            this.chartGride['_results'][i].nativeElement.className = '';
        }
    };
    Type2Component.prototype.grideHighlight = function (key) {
        var rsIdx = null;
        this.data.forEach(function (value, idx) {
            if (key === value['key']) {
                rsIdx = idx;
            }
        });
        for (var i = 0; i < this.chartGride['_results'].length; i++) {
            if (i === rsIdx) {
                this.chartGride['_results'][i].nativeElement.className = 'ui-state-highlight';
            }
        }
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
            for (var _i = 0, obj_2 = obj; _i < obj_2.length; _i++) {
                var list = obj_2[_i];
                var echartSet = new __WEBPACK_IMPORTED_MODULE_3__type1_model_echartSet__["a" /* EchartSet */]();
                var dataArray = new Array();
                echartSet.name = list['key'];
                echartSet.type = 'line';
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
            for (var _i = 0, obj_3 = obj; _i < obj_3.length; _i++) {
                var list = obj_3[_i];
                keyNameArray.push(list['key']);
            }
        }
        return keyNameArray;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChildren"])('chartGride'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["QueryList"])
    ], Type2Component.prototype, "chartGride", void 0);
    Type2Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-type2',
            template: __webpack_require__("./src/app/report-ui/type2/type2.component.html"),
            styles: [__webpack_require__("./src/app/report-ui/type2/type2.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__common_service_api_api_service__["a" /* ApiService */], __WEBPACK_IMPORTED_MODULE_4__service_report_ui_common_service__["a" /* ReportUiCommonService */],
            __WEBPACK_IMPORTED_MODULE_6__breadcrumb_service_breadcrumb_service__["a" /* BreadcrumbService */], __WEBPACK_IMPORTED_MODULE_5_core_layout_retab_service_tab_service__["a" /* TabService */]])
    ], Type2Component);
    return Type2Component;
}());



/***/ }),

/***/ "./src/app/report-ui/type3/model/chartSet.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChartSet; });
var ChartSet = /** @class */ (function () {
    function ChartSet() {
    }
    return ChartSet;
}());



/***/ }),

/***/ "./src/app/report-ui/type3/type3.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/report-ui/type3/type3.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g\">\n\n\n  <div class=\"ui-g-12\">\n    <h3 class=\"first\">Title MES UI - TYPE1</h3>\n    <hr>\n  </div>\n  <!-- search area -->\n  <div class=\"ui-g-12\">\n    <!-- search option area -->\n    <div class=\"ui-g-12 ui-lg-12\" style=\"border:1px solid lightgray; background-color:mintcream; box-shadow: 5px 5px 5px grey;\">\n      <!-- if you add the other option, change the class source -->\n      <div class=\"ui-g-12 ui-md-6 ui-lg-2\">\n        <label>Condition1</label>\n        <p-dropdown [options]=\"option1\" [(ngModel)]=\"selectedOption1\" placeholder=\"not connect\"></p-dropdown>\n      </div>\n      <div class=\"ui-g-12 ui-md-6 ui-lg-2\">\n        <!-- <h3 class=\"first\">Condition2</h3> -->\n        <label>Condition2</label>\n        <p-dropdown [options]=\"option2\" [(ngModel)]=\"selectedOption2\" placeholder=\"not connect\"></p-dropdown>\n      </div>\n      <div class=\"ui-g-12 ui-md-6 ui-lg-2\">\n        <!-- <h3 class=\"first\">Condition3</h3> -->\n        <label>Condition3</label>\n        <p-dropdown [options]=\"option3\" [(ngModel)]=\"selectedOption3\" placeholder=\"not connect\"></p-dropdown>\n      </div>\n      <div class=\"ui-g-12 ui-md-6 ui-lg-2\">\n        <!-- <h3 class=\"first\">Condition4</h3> -->\n        <label>Condition4</label>\n        <p-dropdown [options]=\"option4\" [(ngModel)]=\"selectedOption4\" placeholder=\"not connect\"></p-dropdown>\n      </div>\n      <div class=\"ui-g-12 ui-md-6 ui-lg-2\">\n        <!-- <h3 class=\"first\">Condition4</h3> -->\n        <button pButton type=\"button\" (click)=\"onSearch()\" label=\"Search\"></button>\n      </div>\n    </div>\n  </div>\n  <!-- end search area -->\n\n  <!-- prime chart area -->\n  <div class=\"ui-g-12\">\n    <p-panel>\n      <p-header>\n        <div class=\"ui-helper-clearfix\">\n          <span class=\"ui-panel-title\">Prime Pie Chart</span>\n        </div>\n      </p-header>\n      <!-- chart content -->\n      <p-chart type=\"pie\" [data]=\"dataChart\" [responsive]=\"true\" (refresh)=\"refresh()\" #chart [style.display]=\"isDisplay ? '': 'none' \"></p-chart>\n    </p-panel>\n  </div>\n\n  <!-- echart chart area -->\n  <div class=\"ui-g-12\">\n    <p-panel>\n      <p-header>\n        <div class=\"ui-helper-clearfix\">\n          <span class=\"ui-panel-title\">Echart Pie Chart</span>\n        </div>\n      </p-header>\n      <!-- chart content -->\n      <div echarts [options]=\"chartOption\" class=\"demo-chart\"></div>\n\n    </p-panel>\n  </div>\n  <!-- end echart chart area -->\n\n\n  <!-- data gride area -->\n  <div class=\"ui-g-12\">\n    <p-panel>\n      <p-header>\n        <div class=\"ui-helper-clearfix\">\n          <span class=\"ui-panel-title\">Detail</span>\n        </div>\n      </p-header>\n      <div class=\"ui-panel-content\">\n        <!-- if you use selection, you must set datakey -->\n        <p-table [columns]=\"cols\" [value]=\"data\" selectionMode=\"single\" [(selection)]=\"selectedData\" dataKey=\"col1\" (onRowSelect)=\"onRowSelect($event)\">\n          <ng-template pTemplate=\"header\" let-columns>\n            <tr>\n\n              <th *ngFor=\"let col of columns\">\n                {{col.header}}\n              </th>\n            </tr>\n          </ng-template>\n          <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\">\n            <tr [pSelectableRow]=\"rowData\" [class]='test' #chartGride>\n              <td *ngFor=\"let col of columns;\">\n                {{rowData[col.field]}}\n              </td>\n            </tr>\n          </ng-template>\n        </p-table>\n      </div>\n    </p-panel>\n  </div>\n  <!-- end data gride area -->\n\n</div>"

/***/ }),

/***/ "./src/app/report-ui/type3/type3.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Type3Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model_chartSet__ = __webpack_require__("./src/app/report-ui/type3/model/chartSet.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_service_api_api_service__ = __webpack_require__("./src/app/common/service/api/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_util__ = __webpack_require__("./node_modules/util/util.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_util___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_util__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_primeng_chart__ = __webpack_require__("./node_modules/primeng/chart.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_primeng_chart___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_primeng_chart__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__service_report_ui_common_service__ = __webpack_require__("./src/app/report-ui/service/report-ui-common.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__type1_model_echartSet__ = __webpack_require__("./src/app/report-ui/type1/model/echartSet.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_layout_retab_service_tab_service__ = __webpack_require__("./src/core/layout/retab/service/tab.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__breadcrumb_service_breadcrumb_service__ = __webpack_require__("./src/core/layout/breadcrumb/service/breadcrumb.service.ts");
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
    function Type3Component(apiService, reportComnService, breadcrumbService, tService) {
        this.apiService = apiService;
        this.reportComnService = reportComnService;
        this.breadcrumbService = breadcrumbService;
        this.tService = tService;
        this.echartHeight = '100px;';
        this.isDisplay = false;
        this.breadcrumbService.setItems([
            { label: 'REPORT UI' },
            { label: 'TYPE3' },
        ]);
        this.tService.setItems('REPORT UI-TYPE3');
    }
    Type3Component.prototype.ngAfterViewInit = function () { };
    Type3Component.prototype.ngOnInit = function () {
        var _this = this;
        var url = '/assets/demo/data/report-ui/type1.json';
        this.apiService.testGet(url).subscribe(function (res) {
            _this.data = res;
            _this.options = {
                height: '100px'
            };
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
    // gride function
    Type3Component.prototype.selectData = function (event) {
        console.log(event);
    };
    Type3Component.prototype.onRowSelect = function (event) {
        this.isDisplay = true;
        this.setPchart(event.data);
        this.setEchart(event.data);
        this.chart.refresh();
    };
    Type3Component.prototype.setPchart = function (data) {
        this.dataChart = {
            labels: ['Col1', 'Col2', 'Col3', 'Col4', 'Col5', 'Col6'],
            datasets: this.makeDatasets(data)
        };
    };
    Type3Component.prototype.makeDatasets = function (obj) {
        var datasets = new Array();
        if (Object(__WEBPACK_IMPORTED_MODULE_3_util__["isObject"])(obj)) {
            var chartSet = new __WEBPACK_IMPORTED_MODULE_1__model_chartSet__["a" /* ChartSet */]();
            var dataArray = new Array();
            var backgroundColorArray = new Array();
            var hoberBackgroundColorArray = new Array();
            chartSet.total = this.makeTotal(obj);
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
    Type3Component.prototype.resetHighlight = function () {
        for (var i = 0; i < this.chartGride['_results'].length; i++) {
            this.chartGride['_results'][i].nativeElement.className = '';
        }
    };
    Type3Component.prototype.grideHighlight = function (key) {
        var rsIdx = null;
        this.data.forEach(function (value, idx) {
            if (key === value['key']) {
                rsIdx = idx;
            }
        });
        for (var i = 0; i < this.chartGride['_results'].length; i++) {
            if (i === rsIdx) {
                this.chartGride['_results'][i].nativeElement.className = 'ui-state-highlight';
            }
        }
    };
    Type3Component.prototype.makeTotal = function (list) {
        var total = 0;
        for (var value in list) {
            if (list.hasOwnProperty(value)) {
                if (value !== 'key') {
                    total += list[value];
                }
            }
        }
        return total;
    };
    Type3Component.prototype.makeRatio = function (value, total) {
        var ratio = (value / total) * 100;
        return ratio;
    };
    // echart setting function
    Type3Component.prototype.setEchart = function (data) {
        this.chartOption = {
            title: {
                text: 'echart',
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
    Type3Component.prototype.setSeriesOption = function (obj) {
        var seriesArray = new Array();
        var echartSet = new __WEBPACK_IMPORTED_MODULE_6__type1_model_echartSet__["a" /* EchartSet */]();
        var dataArray = new Array();
        if (Object(__WEBPACK_IMPORTED_MODULE_3_util__["isObject"])(obj)) {
            echartSet.type = 'pie';
            echartSet.redius = '55%';
            echartSet.center = ['50%', '60%'];
            for (var value in obj) {
                if (obj.hasOwnProperty(value)) {
                    if (value !== 'key') {
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
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChildren"])('chartGride'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["QueryList"])
    ], Type3Component.prototype, "chartGride", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('chart'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4_primeng_chart__["UIChart"])
    ], Type3Component.prototype, "chart", void 0);
    Type3Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-type3',
            template: __webpack_require__("./src/app/report-ui/type3/type3.component.html"),
            styles: [__webpack_require__("./src/app/report-ui/type3/type3.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__common_service_api_api_service__["a" /* ApiService */], __WEBPACK_IMPORTED_MODULE_5__service_report_ui_common_service__["a" /* ReportUiCommonService */],
            __WEBPACK_IMPORTED_MODULE_8__breadcrumb_service_breadcrumb_service__["a" /* BreadcrumbService */], __WEBPACK_IMPORTED_MODULE_7_core_layout_retab_service_tab_service__["a" /* TabService */]])
    ], Type3Component);
    return Type3Component;
}());



/***/ })

});
//# sourceMappingURL=report-ui.module.chunk.js.map