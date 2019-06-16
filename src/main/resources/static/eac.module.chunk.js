webpackJsonp(["eac.module"],{

/***/ "./src/app/operatormonitor/common/chart/eachourmonitor/eachourmonitor.component.css":
/***/ (function(module, exports) {

module.exports = "td {\r\n    text-align: center;\r\n    line-height: 10px;\r\n}\r\n.chartArea-12{\r\n    height: 700px;\r\n    border-right: 0;\r\n    border-bottom: 0;\r\n}\r\n.chartArea{\r\n    height: 700px;\r\n}\r\n.productionTypeArea {\r\n    height: 300px;\r\n}\r\n.productionCategoryArea {\r\n    height: 400px;\r\n}\r\nul {\r\n    list-style-type: none;\r\n}\r\n.selectCondition {\r\n    position: fixed;\r\n}\r\n/* 640px 手机 sm */\r\n@media screen and (max-width:40em){\r\n    .sm-chartArea-12{\r\n        height: 401px;\r\n        border-right: 0;\r\n        border-bottom: 0;\r\n    }\r\n    .sm-chartArea{\r\n        height: 300px;\r\n        border-bottom: 1px solid rgba(167, 165, 165, 0.795);\r\n    }\r\n    .title{\r\n        font-size: 1.3em;\r\n        text-align: center;\r\n        border-bottom: 1px solid rgba(167, 165, 165, 0.795);\r\n    }\r\n    .sm-productionTypeArea {\r\n        margin: 0 0 0 0;\r\n        height: 214px;\r\n    }\r\n    .sm-productionTypeLi {\r\n        line-height:2.5;\r\n        margin: 0 0 0 -30px;\r\n    }\r\n    .sm-productionCategoryArea {\r\n        margin: 0 0 0 0;\r\n        height: 214px;\r\n    } \r\n}\r\n/* 641px 平板 md*/\r\n@media screen and (min-width:40.063em){\r\n    .md-chartArea-12{\r\n        height: 829px;\r\n        border-right: 0;\r\n        border-bottom: 0;\r\n    }\r\n    .md-chartArea{\r\n        height: 600px;\r\n        border-bottom: 1px solid rgba(167, 165, 165, 0.795);\r\n    }\r\n    .title{\r\n        font-size: 1.3em;\r\n        text-align: center;\r\n        border-bottom: 1px solid rgba(167, 165, 165, 0.795);\r\n    }\r\n    .md-productionTypeArea {\r\n        margin: 0 0 0 0;\r\n        height: 214px;\r\n    }\r\n    .md-productionTypeLi {\r\n        line-height:2.5;\r\n        margin: 0 0 0 -30px;\r\n    }\r\n    .md-productionCategoryArea {\r\n        margin: 0 0 0 0;\r\n        height: 214px;\r\n    } \r\n\r\n}\r\n/* 1025px lg 显示器*/\r\n@media screen and (min-width:64.063em){\r\n    .lg-chartArea-12{\r\n        height: 570px;\r\n        border-right: 0;\r\n        border-bottom: 0;\r\n    }\r\n    .lg-chartArea{\r\n        height: 570px;\r\n        border-right: 1px solid rgba(167, 165, 165, 0.795);\r\n        border-bottom: 0;\r\n    }\r\n    .lg-title{\r\n        font-size: 1.0em;\r\n        text-align: center;\r\n        border-bottom: 1px solid rgba(167, 165, 165, 0.795);\r\n    }\r\n    .lg-productionTypeArea {\r\n        margin: -7px 0 0 0;\r\n        height: 240px;\r\n    }\r\n    .lg-productionTypeLi {\r\n        line-height:1.8;\r\n        font-size: 14px;\r\n        margin: 0 0 0 -30px;\r\n    }\r\n    .lg-productionCategoryArea {\r\n        margin: 7px 0 0 0;\r\n        height: 190px;\r\n    } \r\n    .lg-productionCategoryArea .optionul {\r\n        height: 170px;\r\n        overflow-x: hidden;\r\n        overflow-y: scroll;\r\n    }\r\n    .lg-productionCategoryArea .optionul::-webkit-scrollbar {\r\n        display: none;\r\n        width: 6px;\r\n    }\r\n    .lg-productionCategoryArea .optionul:hover::-webkit-scrollbar {\r\n        display: inline-block;\r\n    }\r\n    .lg-productionCategoryArea .optionul::-webkit-scrollbar-thumb {/*滚动条里面小方块*/\r\n        border-radius: 10px;\r\n         -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);\r\n        background: #535353;\r\n    }\r\n    .lg-productionCategoryArea .optionul::-webkit-scrollbar-track {/*滚动条里面轨道*/\r\n        -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);\r\n        border-radius: 10px;\r\n        background: #EDEDED;\r\n    }\r\n    .lg-tablearea{\r\n        min-height: 664px;\r\n    }\r\n}\r\n/* 1441px xl 大电视*/\r\n@media screen and (min-width:90.063em){\r\n    tr {\r\n        text-align: center;\r\n        line-height: 3px;\r\n        font-size: 13px;\r\n    }\r\n    .xl-chartArea-12{\r\n        height: 790px;\r\n        border-right: 0;\r\n        border-bottom: 0;\r\n    }\r\n    .xl-chartArea{\r\n        height: 790px;\r\n        border-right: 1px solid rgba(167, 165, 165, 0.795);\r\n        border-bottom: 0;\r\n    }\r\n    .xl-title{\r\n        font-size: 1.3em;\r\n        text-align: center;\r\n        border-bottom: 1px solid rgba(167, 165, 165, 0.795);\r\n    }\r\n    .xl-productionTypeArea {\r\n        margin: -7px 0 0 0;\r\n        height: 330px;\r\n    }\r\n    .xl-productionTypeLi {\r\n        line-height:2.5;\r\n        font-size: 17px;\r\n        margin: 0 0 0 -30px;\r\n    }\r\n    .xl-productionCategoryArea {\r\n        margin: 7px 0 0 0;\r\n        height: 230px;\r\n    }    \r\n    .xl-productionCategoryArea .optionul {\r\n        height: 200px;\r\n        overflow-x: hidden;\r\n        overflow-y: scroll;\r\n    }\r\n    .xl-productionCategoryArea .optionul::-webkit-scrollbar {\r\n        display: none;\r\n        width: 10px;\r\n    }\r\n    .xl-productionCategoryArea .optionul:hover::-webkit-scrollbar {\r\n        display: inline-block;\r\n    }\r\n    .xl-productionCategoryArea .optionul::-webkit-scrollbar-thumb {/*滚动条里面小方块*/\r\n        border-radius: 10px;\r\n         -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);\r\n        background: #535353;\r\n    }\r\n    .xl-productionCategoryArea .optionul::-webkit-scrollbar-track {/*滚动条里面轨道*/\r\n        -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);\r\n        border-radius: 10px;\r\n        background: #EDEDED;\r\n    }\r\n    .xl-tablearea{\r\n        min-height: 883px;\r\n    }\r\n}"

/***/ }),

/***/ "./src/app/operatormonitor/common/chart/eachourmonitor/eachourmonitor.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g xl-tablearea lg-tablearea\">\n  <div class=\"ui-g-10 ui-lg-10 ui-xl-10 ui-md-12 ui-sm-12\">\n    <p-table [value]=\"values\" #dailyReportTable [loading]=\"loading\" selectionMode=\"single\" [(selection)]=\"selectedItem\"\n      (onRowSelect)=\"onRowSelect($event)\" [resizableColumns]=\"true\" [paginator]=\"false\" [rows]=\"15\"\n      [globalFilterFields]=\"['']\" [resizableColumns]=\"true\">\n      <ng-template pTemplate=\"body\" let-data>\n        <tr *ngFor=\"let header of data.header.items\">\n          <td *ngFor=\"let item of header\" [attr.rowspan]=\"item.rowspan\" [attr.colspan]=\"item.colspan\" [ngStyle]=\"{'background-color': data.header.backgroundColor,'width':item.width,'fontSize':data.header.fontSize,'color':data.header.fontColor,'line-height':data.header.lineheight}\">\n            <strong>{{item.header}}</strong>\n          </td>\n        </tr>\n        <tr *ngFor=\"let value of data.values.items\" [pSelectableRow]=\"values\">\n          <td *ngFor=\"let item of value\" class=\"ui-resizable-column\" [attr.rowspan]=\"item.rowspan\" [attr.colspan]=\"item.colspan\"\n            [ngStyle]=\"{'color': item.color,'font-size':item.fontsize,'text-align':'center'}\" pEditableColumn>\n            <label *ngIf=\"!item.editable\">{{item.value}}</label>\n            <p-cellEditor *ngIf=\"item.editable\">\n              <ng-template pTemplate=\"input\">\n                <textarea pInputTextArea [rows]=\"item.editrows\" [cols]=\"item.editcols\" autoResize=\"autoResize\"\n                  [(ngModel)]=\"item.value\" (focus)=\"focus(this)\" (blur)=\"blur()\"></textarea>\n              </ng-template>\n              <ng-template pTemplate=\"output\">\n                <label>{{item.value}}</label>\n              </ng-template>\n            </p-cellEditor>\n          </td>\n        </tr>\n      </ng-template>\n    </p-table>\n    <div>\n      <div class=\"ui-g-12 timeArea xl-timeArea md-timeArea lg-timeArea sm-timeArea\">\n        <div class=\"lg-title xl-title\"><strong>日期时间</strong></div>\n        <div class=\"ui-g-12\">\n          <div class=\"ui-g-1\"></div>\n          <div class=\"ui-g-4\">\n            <span>开始时间：</span>\n            <p-calendar [styleClass]=\"['ui-g-12']\" dateFormat=\"yy-mm-dd\" [(ngModel)]=\"startDate\" [showTime]=\"true\"\n              [showIcon]=\"true\" [readonlyInput]=\"true\"></p-calendar>\n          </div>\n          <div class=\"ui-g-4\">\n            <span>结束时间：</span>\n            <p-calendar [styleClass]=\"['ui-g-12']\" dateFormat=\"yy-mm-dd\" [(ngModel)]=\"endDate\" [showTime]=\"true\"\n              [showIcon]=\"true\" [readonlyInput]=\"true\"></p-calendar>\n          </div>\n          <div class=\"ui-g-3\">\n            <button pButton label=\"Search\" (click)=\"getGridValue()\"></button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"ui-g-2 ui-lg-2 ui-xl-2 ui-md-12 ui-sm-12\">\n    <div class=\"selectCondition\">\n      <div class=\"ui-g-12 ui-lg-12 ui-xl-12 ui-md-6 ui-sm-6 productionTypeArea xl-productionTypeArea md-productionTypeArea lg-productionTypeArea sm-productionTypeArea\">\n        <div class=\"xl-title lg-title ui-g-12\"><strong>产品阶段</strong></div>\n        <ul class=\"optionul\">\n          <li class=\"productionTypeLi xl-productionTypeLi md-productionTypeLi lg-productionTypeLi sm-productionTypeLi\">\n            <p-radioButton name=\"EACMonitorProductionType\" value=\"ALL\" label=\"ALL\" [(ngModel)]=\"selectedProductionType\"\n              inputId=\"EACMonitorProductionType0\" (click)=\"getProductCategory()\"></p-radioButton>\n          </li>\n          <li class=\"productionTypeLi xl-productionTypeLi md-productionTypeLi lg-productionTypeLi sm-productionTypeLi\">\n            <p-radioButton name=\"EACMonitorProductionType\" value=\"Production\" label=\"正式量产\" [(ngModel)]=\"selectedProductionType\"\n              inputId=\"EACMonitorProductionType1\" (click)=\"getProductCategory()\"></p-radioButton>\n          </li>\n          <li class=\"productionTypeLi xl-productionTypeLi md-productionTypeLi lg-productionTypeLi sm-productionTypeLi\">\n            <p-radioButton name=\"EACMonitorProductionType\" value=\"TPCN\" label=\"TPCN\" [(ngModel)]=\"selectedProductionType\"\n              inputId=\"EACMonitorProductionType2\" (click)=\"getProductCategory()\"></p-radioButton>\n          </li>\n          <li class=\"productionTypeLi xl-productionTypeLi md-productionTypeLi lg-productionTypeLi sm-productionTypeLi\">\n            <p-radioButton name=\"EACMonitorProductionType\" value=\"Develop\" label=\"客户送样\" [(ngModel)]=\"selectedProductionType\"\n              inputId=\"EACMonitorProductionType3\" (click)=\"getProductCategory()\"></p-radioButton>\n          </li>\n          <li class=\"productionTypeLi xl-productionTypeLi md-productionTypeLi lg-productionTypeLi sm-productionTypeLi\">\n            <p-radioButton name=\"EACMonitorProductionType\" value=\"Engineer\" label=\"工程验证\" [(ngModel)]=\"selectedProductionType\"\n              inputId=\"EACMonitorProductionType4\" (click)=\"getProductCategory()\"></p-radioButton>\n          </li>\n          <li class=\"productionTypeLi xl-productionTypeLi md-productionTypeLi lg-productionTypeLi sm-productionTypeLi\">\n            <p-radioButton name=\"EACMonitorProductionType\" value=\"PV\" label=\"PV\" [(ngModel)]=\"selectedProductionType\"\n              inputId=\"EACMonitorProductionType5\" (click)=\"getProductCategory()\"></p-radioButton>\n          </li>\n        </ul>\n      </div>\n\n      <div class=\"ui-g-12 ui-lg-12 ui-xl-12 ui-md-6 ui-sm-6 productionCategoryArea xl-productionCategoryArea md-productionCategoryArea lg-productionCategoryArea sm-productionCategoryArea\">\n        <div class=\"xl-title lg-title ui-g-12\"><strong>产品类型</strong></div>\n        <ul class=\"optionul\">\n          <li *ngFor=\"let item of productCategory\" class=\"productionTypeLi xl-productionTypeLi md-productionTypeLi lg-productionTypeLi sm-productionTypeLi\">\n            <p-radioButton name=\"EACMonitorProductCategory\" value=\"{{item}}\" label=\"{{item}}\" [(ngModel)]=\"selectedProductCategory\"\n              inputId=\"EACMonitorProductCategory+{{item}}\" (click)=\"getGridValue()\"></p-radioButton>\n          </li>\n        </ul>\n      </div>\n\n      <div class=\"ui-g-12 ui-lg-12 ui-xl-12 ui-md-6 ui-sm-6 productionCategoryArea xl-productionCategoryArea md-productionCategoryArea lg-productionCategoryArea sm-productionCategoryArea\">\n        <div class=\"xl-title lg-title ui-g-12\"><strong>Type</strong></div>\n        <ul class=\"optionul\">\n          <br />\n          <li class=\"productionTypeLi xl-productionTypeLi md-productionTypeLi lg-productionTypeLi sm-productionTypeLi\">\n            <p-radioButton name=\"EACMonitorDataTypeType\" value=\"OPERATOR\" label=\"By Operator\" [(ngModel)]=\"selectedDataType\"\n              inputId=\"EACMonitorDataTypeType1\" (click)=\"getGridValue()\"></p-radioButton>\n          </li>\n          <li class=\"productionTypeLi xl-productionTypeLi md-productionTypeLi lg-productionTypeLi sm-productionTypeLi\">\n            <p-radioButton name=\"EACMonitorDataTypeType\" value=\"MACHINE\" label=\"By Machine\" [(ngModel)]=\"selectedDataType\"\n              inputId=\"EACMonitorDataTypeType2\" (click)=\"getGridValue()\"></p-radioButton>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/operatormonitor/common/chart/eachourmonitor/eachourmonitor.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EachourmonitorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_production_common_model_yieldParam__ = __webpack_require__("./src/app/production/common/model/yieldParam.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_common_service_api_api_service__ = __webpack_require__("./src/app/common/service/api/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_common_service_datetime_service__ = __webpack_require__("./src/app/common/service/datetime.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EachourmonitorComponent = /** @class */ (function () {
    function EachourmonitorComponent(httpService, dateTimeService) {
        this.httpService = httpService;
        this.dateTimeService = dateTimeService;
        this.selectedProductionType = 'ALL';
        this.selectedProductCategory = '';
        this.selectedDataType = 'OPERATOR';
        this.gridparams = new __WEBPACK_IMPORTED_MODULE_1_app_production_common_model_yieldParam__["a" /* YieldParam */]();
    }
    EachourmonitorComponent.prototype.ngOnInit = function () {
        this.startDate = this.dateTimeService.getOperatorStartEndTimeToday()[0];
        this.endDate = this.dateTimeService.getOperatorStartEndTimeToday()[1];
        this.getProductCategory();
    };
    EachourmonitorComponent.prototype.getProductCategory = function () {
        var _this = this;
        var options = {
            params: {
                shopName: 'EAC2',
                operationName: 'C52000N',
                dataType: this.selectedDataType,
                productionType: this.selectedProductionType,
                startTime: this.dateTimeService.date2string(this.startDate),
                endTime: this.dateTimeService.date2string(this.endDate)
            }
        };
        this.httpService.get('/echart/operatormonitor/getEacHourProductCategory', options).subscribe(function (res) {
            _this.productCategory = res;
            _this.selectedProductCategory = _this.productCategory[0];
            _this.getGridValue();
        }, function (error) { console.log(error); });
    };
    EachourmonitorComponent.prototype.productCategoryClicked = function () {
        this.getGridValue();
    };
    EachourmonitorComponent.prototype.getGridValue = function () {
        var _this = this;
        this.gridparams.shopName = 'EAC2';
        this.gridparams.operationName = 'C52000N';
        this.gridparams.datatype = this.selectedDataType;
        this.gridparams.productionType = this.selectedProductionType;
        this.gridparams.productCategory = this.selectedProductCategory;
        this.gridparams.starttime = this.dateTimeService.date2string(this.startDate);
        this.gridparams.endtime = this.dateTimeService.date2string(this.endDate);
        this.gridparams.deviceType = this.deviceType;
        this.httpService.post('/echart/operatormonitor/getEacHourGridValue', this.gridparams).subscribe(function (res) {
            _this.respText = res;
            _this.gridValueInit(_this.respText);
        }, function (error) {
            console.log(error);
        });
    };
    EachourmonitorComponent.prototype.gridValueInit = function (item) {
        var titleFontSize = '';
        if (this.deviceType == 'tv') {
            titleFontSize = '15px';
        }
        else {
            titleFontSize = '13px';
        }
        this.values = [
            {
                header: {
                    backgroundColor: '#607D8B',
                    fontColor: 'white',
                    fontSize: titleFontSize,
                    lineheight: 1.3,
                    items: item.header
                },
                values: {
                    items: item.value
                }
            },
        ];
    };
    EachourmonitorComponent.prototype.onRowSelect = function (event) {
    };
    EachourmonitorComponent.prototype.start_Timer = function () {
        var _this = this;
        this.timer = setInterval(function () {
            _this.getGridValue();
        }, 300000);
    };
    EachourmonitorComponent.prototype.clear_Timer = function () {
        if (this.timer) {
            clearInterval(this.timer);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], EachourmonitorComponent.prototype, "deviceType", void 0);
    EachourmonitorComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-eachourmonitor',
            template: __webpack_require__("./src/app/operatormonitor/common/chart/eachourmonitor/eachourmonitor.component.html"),
            styles: [__webpack_require__("./src/app/operatormonitor/common/chart/eachourmonitor/eachourmonitor.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_app_common_service_api_api_service__["a" /* ApiService */], __WEBPACK_IMPORTED_MODULE_3_app_common_service_datetime_service__["a" /* DatetimeService */]])
    ], EachourmonitorComponent);
    return EachourmonitorComponent;
}());



/***/ }),

/***/ "./src/app/operatormonitor/common/chart/eacmonitor/eacmonitor.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g\">\n  <div class=\"ui-g-10 ui-lg-10 ui-xl-10 ui-md-12 ui-sm-12\">\n    <div echarts [options]=\"echartOption\" class=\"ui-g-12 chartArea xl-chartArea md-chartArea lg-chartArea sm-chartArea\"></div>\n    <div class=\"ui-g-12 timeArea xl-timeArea md-timeArea lg-timeArea sm-timeArea\">\n      <div class=\"lg-title xl-title\"><strong>日期时间</strong></div>\n      <div class=\"ui-g-12\">\n        <div class=\"ui-g-1\"></div>\n        <div class=\"ui-g-4\">\n          <span>开始时间：</span>\n          <p-calendar [styleClass]=\"['ui-g-12']\" dateFormat=\"yy-mm-dd\" [(ngModel)]=\"startDate\" [showTime]=\"true\"\n            [showIcon]=\"true\" [readonlyInput]=\"true\"></p-calendar>\n        </div>\n        <div class=\"ui-g-4\">\n          <span>结束时间：</span>\n          <p-calendar [styleClass]=\"['ui-g-12']\" dateFormat=\"yy-mm-dd\" [(ngModel)]=\"endDate\" [showTime]=\"true\"\n            [showIcon]=\"true\" [readonlyInput]=\"true\"></p-calendar>\n        </div>\n        <div class=\"ui-g-3\">\n          <button pButton label=\"Search\" (click)=\"productionTypeClicked()\"></button>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"ui-g-2 ui-lg-2 ui-xl-2 ui-md-12 ui-sm-12\">\n    <div class=\"ui-g-12 ui-lg-12 ui-xl-12 ui-md-6 ui-sm-6 productionTypeArea xl-productionTypeArea md-productionTypeArea lg-productionTypeArea sm-productionTypeArea\">\n      <div class=\"lg-title xl-title\"><strong>产品阶段</strong></div>\n      <ul class=\"optionul\">\n        <li class=\"productionTypeLi xl-productionTypeLi md-productionTypeLi lg-productionTypeLi sm-productionTypeLi\">\n          <p-radioButton name=\"EACMonitorProductionType+{{shopName}}+{{processType}}\" value=\"Production\" label=\"正式量产\"\n            [(ngModel)]=\"selectedProductionType\" inputId=\"EACMonitorProductionType+{{shopName}}+{{processType}}+1\"\n            (click)=\"productionTypeClicked()\"></p-radioButton>\n        </li>\n        <li class=\"productionTypeLi xl-productionTypeLi md-productionTypeLi lg-productionTypeLi sm-productionTypeLi\">\n          <p-radioButton name=\"EACMonitorProductionType+{{shopName}}+{{processType}}\" value=\"TPCN\" label=\"TPCN\"\n            [(ngModel)]=\"selectedProductionType\" inputId=\"EACMonitorProductionType+{{shopName}}+{{processType}}+2\"\n            (click)=\"productionTypeClicked()\"></p-radioButton>\n        </li>\n        <li class=\"productionTypeLi xl-productionTypeLi md-productionTypeLi lg-productionTypeLi sm-productionTypeLi\">\n          <p-radioButton name=\"EACMonitorProductionType+{{shopName}}+{{processType}}\" value=\"Develop\" label=\"客户送样\"\n            [(ngModel)]=\"selectedProductionType\" inputId=\"EACMonitorProductionType+{{shopName}}+{{processType}}+3\"\n            (click)=\"productionTypeClicked()\"></p-radioButton>\n        </li>\n        <li class=\"productionTypeLi xl-productionTypeLi md-productionTypeLi lg-productionTypeLi sm-productionTypeLi\">\n          <p-radioButton name=\"EACMonitorProductionType+{{shopName}}+{{processType}}\" value=\"Engineer\" label=\"工程验证\"\n            [(ngModel)]=\"selectedProductionType\" inputId=\"EACMonitorProductionType+{{shopName}}+{{processType}}+4\"\n            (click)=\"productionTypeClicked()\"></p-radioButton>\n        </li>\n        <li class=\"productionTypeLi xl-productionTypeLi md-productionTypeLi lg-productionTypeLi sm-productionTypeLi\">\n          <p-radioButton name=\"EACMonitorProductionType+{{shopName}}+{{processType}}\" value=\"PV\" label=\"PV\" [(ngModel)]=\"selectedProductionType\"\n            inputId=\"EACMonitorProductionType+{{shopName}}+{{processType}}+5\" (click)=\"productionTypeClicked()\"></p-radioButton>\n        </li>\n      </ul>\n    </div>\n    <div class=\"ui-g-12 ui-lg-12 ui-xl-12 ui-md-6 ui-sm-6 productionCategoryArea xl-productionCategoryArea md-productionCategoryArea lg-productionCategoryArea sm-productionCategoryArea\">\n      <div class=\"lg-title xl-title\"><strong>产品类型</strong></div>\n      <ul class=\"optionul\">\n        <li *ngFor=\"let item of productCategory\" class=\"productionTypeLi xl-productionTypeLi md-productionTypeLi lg-productionTypeLi sm-productionTypeLi\">\n          <p-radioButton name=\"EACMonitorProductCategory+{{shopName}}+{{processType}}\" value=\"{{item}}\" label=\"{{item}}\"\n            [(ngModel)]=\"selectedProductionCategory\" inputId=\"EACMonitorProductCategory+{{shopName}}+{{processType}}+ {{item}}\"\n            (click)=\"drawChart()\"></p-radioButton>\n        </li>\n      </ul>\n    </div>\n    <div class=\"ui-g-12 xl-defectCodeArea lg-defectCodeArea\">\n      <div class=\"lg-title xl-title\"><strong>Defect Code</strong></div>\n      <br />\n      <p-dropdown [options]=\"DefectCodes\" [(ngModel)]=\"selectedDefectCode\" placeholder=\"Select a DefectCode\"\n        optionLabel=\"value\" [showClear]=\"true\" (onChange)=\"defectCodeChanged($event)\" [style]=\"{'width':'90%'}\"></p-dropdown>\n    </div>\n    <div class=\"ui-g-12 xl-dataTypeArea lg-dataTypeArea\">\n      <div class=\"lg-title xl-title\"><strong>Type</strong></div>\n      <ul class=\"optionul\">\n        <li class=\"productionTypeLi xl-productionTypeLi md-productionTypeLi lg-productionTypeLi sm-productionTypeLi\">\n          <p-radioButton name=\"EACMonitorDataType+{{shopName}}+{{processType}}\" value=\"OPERATOR\" label=\"OPERATOR\"\n            [(ngModel)]=\"selectedDataType\" inputId=\"EACMonitorDataType+{{shopName}}+{{processType}}+0\" (click)=\"drawChart()\"></p-radioButton>\n        </li>\n        <li class=\"productionTypeLi xl-productionTypeLi md-productionTypeLi lg-productionTypeLi sm-productionTypeLi\">\n          <p-radioButton name=\"EACMonitorDataType+{{shopName}}+{{processType}}\" value=\"MACHINE\" label=\"MACHINE\"\n            [(ngModel)]=\"selectedDataType\" inputId=\"EACMonitorDataType+{{shopName}}+{{processType}}+1\" (click)=\"drawChart()\"></p-radioButton>\n        </li>\n      </ul>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/operatormonitor/common/chart/eacmonitor/eacmonitor.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EacmonitorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_production_common_model_yieldParam__ = __webpack_require__("./src/app/production/common/model/yieldParam.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_common_service_api_api_service__ = __webpack_require__("./src/app/common/service/api/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__echart_option_service__ = __webpack_require__("./src/app/operatormonitor/common/chart/echart-option.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_common_service_datetime_service__ = __webpack_require__("./src/app/common/service/datetime.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__defectcode__ = __webpack_require__("./src/app/operatormonitor/common/defectcode.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var EacmonitorComponent = /** @class */ (function () {
    function EacmonitorComponent(httpService, echartService, dateTimeService) {
        this.httpService = httpService;
        this.echartService = echartService;
        this.dateTimeService = dateTimeService;
        this.currentUserName = '';
        this.deviceType = '';
        this.shopName = '';
        this.processType = '';
        this.selectedProductionType = 'Production';
        this.selectedProductionCategory = '';
        this.selectedDefectCode = new __WEBPACK_IMPORTED_MODULE_5__defectcode__["a" /* DefectCode */]();
        this.selectedDataType = 'OPERATOR';
        this.chartParam = new __WEBPACK_IMPORTED_MODULE_1_app_production_common_model_yieldParam__["a" /* YieldParam */]();
    }
    EacmonitorComponent.prototype.ngOnInit = function () {
        this.startDate = this.dateTimeService.getOperatorStartEndTime()[0];
        this.endDate = this.dateTimeService.getOperatorStartEndTime()[1];
        this.getProductCategory();
    };
    EacmonitorComponent.prototype.defectCodeChanged = function (event) {
        this.drawChart();
    };
    EacmonitorComponent.prototype.getProductCategory = function () {
        var _this = this;
        var options = {
            params: {
                shopName: this.shopName,
                productionType: this.selectedProductionType,
                processType: this.processType,
                dataType: this.selectedDataType
            }
        };
        var url;
        url = '/echart/operatormonitor/defectMonitorProductCategory';
        this.httpService.get(url, options).subscribe(function (res) {
            _this.productCategory = res;
            _this.selectedProductionCategory = _this.productCategory[0];
            _this.getDefectCode();
        }, function (error) { console.log(error); });
    };
    EacmonitorComponent.prototype.getDefectCode = function () {
        var _this = this;
        var options = {
            params: {
                shopName: this.shopName,
                productionType: this.selectedProductionType,
                processType: this.processType,
                dataType: this.selectedDataType,
                productCategory: this.selectedProductionCategory,
                startTime: this.dateTimeService.date2string(this.startDate),
                endTime: this.dateTimeService.date2string(this.endDate)
            }
        };
        var url;
        url = '/echart/operatormonitor/defectMonitorDefectCodeList';
        this.httpService.get(url, options).subscribe(function (res) {
            _this.DefectCodes = res;
            _this.selectedDefectCode = _this.DefectCodes[0];
            _this.drawChart();
        }, function (error) { console.log(error); });
    };
    EacmonitorComponent.prototype.productionTypeClicked = function () {
        this.getProductCategory();
    };
    EacmonitorComponent.prototype.drawChart = function () {
        var _this = this;
        this.chartParam.productCategory = this.selectedProductionCategory;
        this.chartParam.productionType = this.selectedProductionType;
        this.chartParam.shopName = this.shopName;
        this.chartParam.processtype = this.processType;
        this.chartParam.datatype = this.selectedDataType;
        this.chartParam.defectcode = this.selectedDefectCode.value;
        this.chartParam.starttime = this.dateTimeService.date2string(this.startDate);
        this.chartParam.endtime = this.dateTimeService.date2string(this.endDate);
        this.chartParam.deviceType = this.deviceType;
        var nowDate = new Date();
        var currentTime = nowDate.toLocaleString();
        this.waterMark = 'BOECD Confidential@' + this.currentUserName + '\n' + currentTime + '@' + localStorage.getItem('currentIP');
        var url;
        url = '/echart/operatormonitor/defectmonitor';
        this.httpService.post(url, this.chartParam).subscribe(function (res) {
            _this.respText = res;
            _this.echartOption = _this.echartService.getOption_OperatorDefect(_this.processType + ' 检测岗位监控', _this.respText, _this.waterMark, _this.deviceType);
        }, function (error) {
            console.log(error);
        });
    };
    EacmonitorComponent.prototype.start_Timer = function () {
        var _this = this;
        this.timer = setInterval(function () {
            console.log('Monitor Timer Start');
            _this.drawChart();
        }, 300000);
    };
    EacmonitorComponent.prototype.clear_Timer = function () {
        if (this.timer) {
            clearInterval(this.timer);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], EacmonitorComponent.prototype, "currentUserName", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], EacmonitorComponent.prototype, "deviceType", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], EacmonitorComponent.prototype, "shopName", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], EacmonitorComponent.prototype, "processType", void 0);
    EacmonitorComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-eacmonitor',
            template: __webpack_require__("./src/app/operatormonitor/common/chart/eacmonitor/eacmonitor.component.html"),
            styles: [__webpack_require__("./src/app/operatormonitor/common/chart/eacmonitor/eacmonitor.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_app_common_service_api_api_service__["a" /* ApiService */], __WEBPACK_IMPORTED_MODULE_3__echart_option_service__["a" /* EchartOptionService */], __WEBPACK_IMPORTED_MODULE_4_app_common_service_datetime_service__["a" /* DatetimeService */]])
    ], EacmonitorComponent);
    return EacmonitorComponent;
}());



/***/ }),

/***/ "./src/app/operatormonitor/eac/defectmonitor/defectmonitor.component.html":
/***/ (function(module, exports) {

module.exports = "<p-tabView (onChange)=\"onTabChange($event)\" [activeIndex]=\"index\">\n  <!--   <ng-template ngFor let-item [ngForOf]=\"items\" let-i=\"index\">\n    <p-tabPanel [header]=\"item.header\" [selected]=\"item.selected\" *ngIf=\"item.display\">\n      <app-eacmonitor [deviceType]=\"deviceType\" [currentUserName]=\"currentUserName\" [shopName]=\"shopName\"\n        [processType]=\"item.processType\"></app-eacmonitor>\n    </p-tabPanel>\n  </ng-template> -->\n  <p-tabPanel #EacMonitorAet [header]=\"items[0].header\" [selected]=\"items[0].selected\" *ngIf=\"items[0].display\">\n    <app-eacmonitor [deviceType]=\"deviceType\" [currentUserName]=\"currentUserName\" [shopName]=\"shopName\" [processType]=\"items[0].processType\"></app-eacmonitor>\n  </p-tabPanel>\n  <p-tabPanel #EacMonitorReaet [header]=\"items[1].header\" [selected]=\"items[1].selected\" *ngIf=\"items[1].display\">\n    <app-eacmonitor [deviceType]=\"deviceType\" [currentUserName]=\"currentUserName\" [shopName]=\"shopName\" [processType]=\"items[1].processType\"></app-eacmonitor>\n  </p-tabPanel>\n  <p-tabPanel #EacMonitorMet [header]=\"items[2].header\" [selected]=\"items[2].selected\" *ngIf=\"items[2].display\">\n    <app-eacmonitor [deviceType]=\"deviceType\" [currentUserName]=\"currentUserName\" [shopName]=\"shopName\" [processType]=\"items[2].processType\"></app-eacmonitor>\n  </p-tabPanel>\n</p-tabView>\n<button type=\"button\" pButton icon=\"fa fa-search\" (click)=\"showTabSetting()\" class=\"xl-tabSetting lg-tabSetting\"></button>\n\n<p-dialog header=\"Tab设置\" [(visible)]=\"display_Setting\" [responsive]=\"true\" showEffect=\"fade\" [modal]=\"true\" [width]=\"300\">\n  <div class=\"ui-g ui-fluid\">\n    <div class=\"ui-g-12\" *ngFor='let item of items'>\n      <div class=\"ui-g-6\">\n        <label for=\"{{item.header}}\"><strong>{{item.header}} :</strong></label>\n      </div>\n      <div class=\"ui-g-3\">\n        <p-inputSwitch [(ngModel)]=item.display></p-inputSwitch>\n      </div>\n      <div class=\"ui-g-3\">\n        <span> {{item.display ? 'TRUE' : 'FALSE'}}</span>\n      </div>\n    </div>\n  </div>\n</p-dialog>"

/***/ }),

/***/ "./src/app/operatormonitor/eac/defectmonitor/defectmonitor.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DefectmonitorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__breadcrumb_service_breadcrumb_service__ = __webpack_require__("./src/core/layout/breadcrumb/service/breadcrumb.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_layout_retab_service_tab_service__ = __webpack_require__("./src/core/layout/retab/service/tab.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_operatormonitor_common_chart_eacmonitor_eacmonitor_component__ = __webpack_require__("./src/app/operatormonitor/common/chart/eacmonitor/eacmonitor.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DefectmonitorComponent = /** @class */ (function () {
    function DefectmonitorComponent(breadcrumbService, tService) {
        this.breadcrumbService = breadcrumbService;
        this.tService = tService;
        this.index = 0;
        this.display_Setting = false;
        this.currentUserName = localStorage.getItem('currentUserName');
        this.deviceType = localStorage.getItem('deviceType');
        this.shopName = 'EAC2';
        this.msgs = [];
        this.processType = [];
        this.breadcrumbService.setItems([
            { label: '检测岗位' },
            { label: 'EAC监控' },
        ]);
        this.tService.setItems('检测岗位 EAC监控');
    }
    DefectmonitorComponent.prototype.ngOnInit = function () {
        this.display = [true, true, true, true, true, true, true, true, true, true];
        this.items = [
            { header: 'AET', processType: 'AET', display: true, selected: false, component: this.EacMonitorAet },
            { header: 'REAET', processType: 'REAET', display: true, selected: false, component: this.EacMonitorReaet },
            { header: 'MET', processType: 'MET', display: true, selected: false, component: this.EacMonitorMet }
        ];
    };
    DefectmonitorComponent.prototype.showTabSetting = function () {
        this.display_Setting = true;
    };
    DefectmonitorComponent.prototype.onTabChange = function (event) {
        switch (event.index) {
            case 0:
                this.EacMonitorAet.start_Timer();
                this.EacMonitorReaet.clear_Timer();
                this.EacMonitorMet.clear_Timer();
                break;
            case 1:
                this.EacMonitorAet.clear_Timer();
                this.EacMonitorReaet.start_Timer();
                this.EacMonitorMet.clear_Timer();
                break;
            case 2:
                this.EacMonitorAet.clear_Timer();
                this.EacMonitorReaet.clear_Timer();
                this.EacMonitorMet.start_Timer();
                break;
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('EacMonitorAet'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3_app_operatormonitor_common_chart_eacmonitor_eacmonitor_component__["a" /* EacmonitorComponent */])
    ], DefectmonitorComponent.prototype, "EacMonitorAet", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('EacMonitorReaet'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3_app_operatormonitor_common_chart_eacmonitor_eacmonitor_component__["a" /* EacmonitorComponent */])
    ], DefectmonitorComponent.prototype, "EacMonitorReaet", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('EacMonitorMet'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3_app_operatormonitor_common_chart_eacmonitor_eacmonitor_component__["a" /* EacmonitorComponent */])
    ], DefectmonitorComponent.prototype, "EacMonitorMet", void 0);
    DefectmonitorComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-defectmonitor',
            template: __webpack_require__("./src/app/operatormonitor/eac/defectmonitor/defectmonitor.component.html"),
            styles: [__webpack_require__("./src/app/operatormonitor/eac/defectmonitor/defectmonitor.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__breadcrumb_service_breadcrumb_service__["a" /* BreadcrumbService */], __WEBPACK_IMPORTED_MODULE_2_core_layout_retab_service_tab_service__["a" /* TabService */]])
    ], DefectmonitorComponent);
    return DefectmonitorComponent;
}());



/***/ }),

/***/ "./src/app/operatormonitor/eac/detectionmiss/detectionmiss.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/operatormonitor/eac/detectionmiss/detectionmiss.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  detectionmiss works!\n</p>\n"

/***/ }),

/***/ "./src/app/operatormonitor/eac/detectionmiss/detectionmiss.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetectionmissComponent; });
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

var DetectionmissComponent = /** @class */ (function () {
    function DetectionmissComponent() {
    }
    DetectionmissComponent.prototype.ngOnInit = function () {
    };
    DetectionmissComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-detectionmiss',
            template: __webpack_require__("./src/app/operatormonitor/eac/detectionmiss/detectionmiss.component.html"),
            styles: [__webpack_require__("./src/app/operatormonitor/eac/detectionmiss/detectionmiss.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DetectionmissComponent);
    return DetectionmissComponent;
}());



/***/ }),

/***/ "./src/app/operatormonitor/eac/eac-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EacRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__defectmonitor_defectmonitor_component__ = __webpack_require__("./src/app/operatormonitor/eac/defectmonitor/defectmonitor.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__detectionmiss_detectionmiss_component__ = __webpack_require__("./src/app/operatormonitor/eac/detectionmiss/detectionmiss.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__outmonitorbyhour_outmonitorbyhour_component__ = __webpack_require__("./src/app/operatormonitor/eac/outmonitorbyhour/outmonitorbyhour.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__qualityandcapacity_qualityandcapacity_component__ = __webpack_require__("./src/app/operatormonitor/eac/qualityandcapacity/qualityandcapacity.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: 'defectmonitor',
        component: __WEBPACK_IMPORTED_MODULE_2__defectmonitor_defectmonitor_component__["a" /* DefectmonitorComponent */]
    },
    {
        path: 'detectionmiss',
        component: __WEBPACK_IMPORTED_MODULE_3__detectionmiss_detectionmiss_component__["a" /* DetectionmissComponent */]
    },
    {
        path: 'outputbyhour',
        component: __WEBPACK_IMPORTED_MODULE_4__outmonitorbyhour_outmonitorbyhour_component__["a" /* OutmonitorbyhourComponent */]
    },
    {
        path: 'capacity',
        component: __WEBPACK_IMPORTED_MODULE_5__qualityandcapacity_qualityandcapacity_component__["a" /* QualityandcapacityComponent */]
    }
];
var EacRoutingModule = /** @class */ (function () {
    function EacRoutingModule() {
    }
    EacRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"]]
        })
    ], EacRoutingModule);
    return EacRoutingModule;
}());



/***/ }),

/***/ "./src/app/operatormonitor/eac/eac.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EacModule", function() { return EacModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__eac_routing_module__ = __webpack_require__("./src/app/operatormonitor/eac/eac-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__defectmonitor_defectmonitor_component__ = __webpack_require__("./src/app/operatormonitor/eac/defectmonitor/defectmonitor.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__outmonitorbyhour_outmonitorbyhour_component__ = __webpack_require__("./src/app/operatormonitor/eac/outmonitorbyhour/outmonitorbyhour.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__detectionmiss_detectionmiss_component__ = __webpack_require__("./src/app/operatormonitor/eac/detectionmiss/detectionmiss.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__common_chart_eacmonitor_eacmonitor_component__ = __webpack_require__("./src/app/operatormonitor/common/chart/eacmonitor/eacmonitor.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_primeng_panel__ = __webpack_require__("./node_modules/primeng/panel.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_primeng_panel___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_primeng_panel__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_primeng_tabview__ = __webpack_require__("./node_modules/primeng/tabview.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_primeng_tabview___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_primeng_tabview__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_primeng_primeng__ = __webpack_require__("./node_modules/primeng/primeng.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_primeng_primeng__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__common_chart_echart_option_service__ = __webpack_require__("./src/app/operatormonitor/common/chart/echart-option.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ngx_echarts__ = __webpack_require__("./node_modules/ngx-echarts/ngx-echarts.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_app_common_service_datetime_service__ = __webpack_require__("./src/app/common/service/datetime.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_primeng_table__ = __webpack_require__("./node_modules/primeng/table.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_primeng_table___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_primeng_table__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__common_chart_eachourmonitor_eachourmonitor_component__ = __webpack_require__("./src/app/operatormonitor/common/chart/eachourmonitor/eachourmonitor.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__qualityandcapacity_qualityandcapacity_component__ = __webpack_require__("./src/app/operatormonitor/eac/qualityandcapacity/qualityandcapacity.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__qualityandcapacity_qualityandcapacityService__ = __webpack_require__("./src/app/operatormonitor/eac/qualityandcapacity/qualityandcapacityService.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var EacModule = /** @class */ (function () {
    function EacModule() {
    }
    EacModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__eac_routing_module__["a" /* EacRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_7_primeng_panel__["PanelModule"],
                __WEBPACK_IMPORTED_MODULE_8_primeng_tabview__["TabViewModule"],
                __WEBPACK_IMPORTED_MODULE_9_primeng_primeng__["RadioButtonModule"],
                __WEBPACK_IMPORTED_MODULE_9_primeng_primeng__["DialogModule"],
                __WEBPACK_IMPORTED_MODULE_9_primeng_primeng__["DropdownModule"],
                __WEBPACK_IMPORTED_MODULE_11_ngx_echarts__["a" /* NgxEchartsModule */],
                __WEBPACK_IMPORTED_MODULE_9_primeng_primeng__["InputSwitchModule"],
                __WEBPACK_IMPORTED_MODULE_12__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_9_primeng_primeng__["ButtonModule"],
                __WEBPACK_IMPORTED_MODULE_9_primeng_primeng__["CalendarModule"],
                __WEBPACK_IMPORTED_MODULE_14_primeng_table__["TableModule"]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__defectmonitor_defectmonitor_component__["a" /* DefectmonitorComponent */], __WEBPACK_IMPORTED_MODULE_4__outmonitorbyhour_outmonitorbyhour_component__["a" /* OutmonitorbyhourComponent */], __WEBPACK_IMPORTED_MODULE_5__detectionmiss_detectionmiss_component__["a" /* DetectionmissComponent */], __WEBPACK_IMPORTED_MODULE_6__common_chart_eacmonitor_eacmonitor_component__["a" /* EacmonitorComponent */], __WEBPACK_IMPORTED_MODULE_15__common_chart_eachourmonitor_eachourmonitor_component__["a" /* EachourmonitorComponent */], __WEBPACK_IMPORTED_MODULE_16__qualityandcapacity_qualityandcapacity_component__["a" /* QualityandcapacityComponent */]],
            providers: [
                __WEBPACK_IMPORTED_MODULE_10__common_chart_echart_option_service__["a" /* EchartOptionService */],
                __WEBPACK_IMPORTED_MODULE_13_app_common_service_datetime_service__["a" /* DatetimeService */],
                __WEBPACK_IMPORTED_MODULE_17__qualityandcapacity_qualityandcapacityService__["a" /* qualityandcapacityChart */],
            ]
        })
    ], EacModule);
    return EacModule;
}());



/***/ }),

/***/ "./src/app/operatormonitor/eac/outmonitorbyhour/outmonitorbyhour.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/operatormonitor/eac/outmonitorbyhour/outmonitorbyhour.component.html":
/***/ (function(module, exports) {

module.exports = "<app-eachourmonitor #EACHour [deviceType]='deviceType'></app-eachourmonitor>"

/***/ }),

/***/ "./src/app/operatormonitor/eac/outmonitorbyhour/outmonitorbyhour.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OutmonitorbyhourComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__breadcrumb_service_breadcrumb_service__ = __webpack_require__("./src/core/layout/breadcrumb/service/breadcrumb.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_layout_retab_service_tab_service__ = __webpack_require__("./src/core/layout/retab/service/tab.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_operatormonitor_common_chart_eachourmonitor_eachourmonitor_component__ = __webpack_require__("./src/app/operatormonitor/common/chart/eachourmonitor/eachourmonitor.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var OutmonitorbyhourComponent = /** @class */ (function () {
    function OutmonitorbyhourComponent(breadcrumbService, tService) {
        this.breadcrumbService = breadcrumbService;
        this.tService = tService;
        this.deviceType = localStorage.getItem('deviceType');
        this.breadcrumbService.setItems([
            { label: '检测岗位' },
            { label: 'EAC小时别' },
        ]);
        this.tService.setItems('检测岗位 EAC小时别');
    }
    OutmonitorbyhourComponent.prototype.ngOnInit = function () {
        this.EACHour.start_Timer();
    };
    OutmonitorbyhourComponent.prototype.ngOnDestroy = function () {
        this.EACHour.clear_Timer();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('EACHour'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3_app_operatormonitor_common_chart_eachourmonitor_eachourmonitor_component__["a" /* EachourmonitorComponent */])
    ], OutmonitorbyhourComponent.prototype, "EACHour", void 0);
    OutmonitorbyhourComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-outmonitorbyhour',
            template: __webpack_require__("./src/app/operatormonitor/eac/outmonitorbyhour/outmonitorbyhour.component.html"),
            styles: [__webpack_require__("./src/app/operatormonitor/eac/outmonitorbyhour/outmonitorbyhour.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__breadcrumb_service_breadcrumb_service__["a" /* BreadcrumbService */], __WEBPACK_IMPORTED_MODULE_2_core_layout_retab_service_tab_service__["a" /* TabService */]])
    ], OutmonitorbyhourComponent);
    return OutmonitorbyhourComponent;
}());



/***/ }),

/***/ "./src/app/operatormonitor/eac/qualityandcapacity/qualityandcapacity.component.css":
/***/ (function(module, exports) {

module.exports = ".chartArea-12{\r\n    height: 700px;\r\n    border-right: 0;\r\n    border-bottom: 0;\r\n}\r\n.chartArea{\r\n    height: 700px;\r\n}\r\n.productionTypeArea {\r\n    height: 300px;\r\n}\r\n.productionCategoryArea {\r\n    height: 400px;\r\n}\r\nul {\r\n    list-style-type: none;\r\n}\r\n/* 640px 手机 sm */\r\n@media screen and (max-width:40em){\r\n    .sm-chartArea-12{\r\n        height: 401px;\r\n        border-right: 0;\r\n        border-bottom: 0;\r\n    }\r\n    .sm-chartArea{\r\n        height: 300px;\r\n        border-bottom: 1px solid rgba(167, 165, 165, 0.795);\r\n    }\r\n    .title{\r\n        font-size: 1.3em;\r\n        text-align: center;\r\n        border-bottom: 1px solid rgba(167, 165, 165, 0.795);\r\n    }\r\n    .sm-productionTypeArea {\r\n        margin: 0 0 0 0;\r\n        height: 214px;\r\n    }\r\n    .sm-productionTypeLi {\r\n        line-height:2.5;\r\n        margin: 0 0 0 -30px;\r\n    }\r\n    .sm-productionCategoryArea {\r\n        margin: 0 0 0 0;\r\n        height: 214px;\r\n    } \r\n}\r\n/* 641px 平板 md*/\r\n@media screen and (min-width:40.063em){\r\n    .md-chartArea-12{\r\n        height: 829px;\r\n        border-right: 0;\r\n        border-bottom: 0;\r\n    }\r\n    .md-chartArea{\r\n        height: 600px;\r\n        border-bottom: 1px solid rgba(167, 165, 165, 0.795);\r\n    }\r\n    .title{\r\n        font-size: 1.3em;\r\n        text-align: center;\r\n        border-bottom: 1px solid rgba(167, 165, 165, 0.795);\r\n    }\r\n    .md-productionTypeArea {\r\n        margin: 0 0 0 0;\r\n        height: 214px;\r\n    }\r\n    .md-productionTypeLi {\r\n        line-height:2.5;\r\n        margin: 0 0 0 -30px;\r\n    }\r\n    .md-productionCategoryArea {\r\n        margin: 0 0 0 0;\r\n        height: 214px;\r\n    } \r\n\r\n}\r\n/* 1025px lg 显示器*/\r\n@media screen and (min-width:64.063em){\r\n    .ui-dropdown {\r\n        width: 80px !important;\r\n    }\r\n    .lg-chartArea-12{\r\n        height: 577px;\r\n        border-right: 0;\r\n        border-bottom: 0;\r\n    }\r\n    .lg-chartArea{\r\n        height: 313px;\r\n        border-right: 1px solid rgba(167, 165, 165, 0.795);\r\n        border-bottom: 0;\r\n    }\r\n    .lg-timeArea {\r\n        height: 50px;\r\n        border-right: 1px solid rgba(167, 165, 165, 0.795);\r\n    }\r\n    .lg-title{\r\n        font-size: 1.0em;\r\n        text-align: center;\r\n        border-bottom: 1px solid rgba(167, 165, 165, 0.795);\r\n    }\r\n    .lg-productionTypeArea {\r\n        margin: -7px 0 0 0;\r\n        height: 185px;\r\n    }\r\n    .lg-productionTypeLi {\r\n        line-height:1.8;\r\n        font-size: 14px;\r\n        margin: 0 0 0 -30px;\r\n    }\r\n    .lg-productionCategoryArea {\r\n        margin: 7px 0 0 0;\r\n        height: 200px;\r\n    } \r\n    .lg-productionCategoryArea .optionul {\r\n        height: 180px;\r\n        overflow-x: hidden;\r\n        overflow-y: scroll;\r\n    }\r\n    .lg-productionCategoryArea .optionul::-webkit-scrollbar {\r\n        display: none;\r\n        width: 6px;\r\n    }\r\n    .lg-productionCategoryArea .optionul:hover::-webkit-scrollbar {\r\n        display: inline-block;\r\n    }\r\n    .lg-productionCategoryArea .optionul::-webkit-scrollbar-thumb {/*滚动条里面小方块*/\r\n        border-radius: 10px;\r\n         -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);\r\n        background: #535353;\r\n    }\r\n    .lg-productionCategoryArea .optionul::-webkit-scrollbar-track {/*滚动条里面轨道*/\r\n        -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);\r\n        border-radius: 10px;\r\n        background: #EDEDED;\r\n    }\r\n    .lg-defectCodeArea {\r\n        margin: 7px 0 0 0;\r\n        height: 75px;\r\n    } \r\n    .dropdown {\r\n        margin: 20px 0 0 0;\r\n    }\r\n    .lg-dataTypeArea {\r\n        margin: 7px 0 0 0;\r\n        height: 80px;\r\n    }\r\n}\r\n/* 1441px xl 大电视*/\r\n@media screen and (min-width:90.063em){\r\n    .xl-chartArea-12{\r\n        height: 697px;\r\n        border-right: 0;\r\n        border-bottom: 0;\r\n    }\r\n    .xl-chartArea{\r\n        height: 423px;\r\n        border-right: 1px solid rgba(167, 165, 165, 0.795);\r\n        border-bottom: 0;\r\n    }\r\n    .xl-timeArea {\r\n        height: 85px;\r\n        border-right: 1px solid rgba(167, 165, 165, 0.795);\r\n    }\r\n    .xl-title{\r\n        font-size: 1.3em;\r\n        text-align: center;\r\n        border-bottom: 1px solid rgba(167, 165, 165, 0.795);\r\n    }\r\n    .xl-productionTypeArea {\r\n        margin: -7px 0 0 0;\r\n        height: 260px;\r\n    }\r\n    .xl-productionTypeLi {\r\n        line-height:2.5;\r\n        font-size: 17px;\r\n        margin: 0 0 0 -30px;\r\n    }\r\n    .xl-productionCategoryArea {\r\n        margin: 7px 0 0 0;\r\n        height: 270px;\r\n    }  \r\n    .xl-productionCategoryArea .optionul {\r\n        height: 250px;\r\n        overflow-x: hidden;\r\n        overflow-y: scroll;\r\n    }\r\n    .xl-productionCategoryArea .optionul::-webkit-scrollbar {\r\n        display: none;\r\n        width: 10px;\r\n    }\r\n    .xl-productionCategoryArea .optionul:hover::-webkit-scrollbar {\r\n        display: inline-block;\r\n    }\r\n    .xl-productionCategoryArea .optionul::-webkit-scrollbar-thumb {/*滚动条里面小方块*/\r\n        border-radius: 10px;\r\n         -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);\r\n        background: #535353;\r\n    }\r\n    .xl-productionCategoryArea .optionul::-webkit-scrollbar-track {/*滚动条里面轨道*/\r\n        -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);\r\n        border-radius: 10px;\r\n        background: #EDEDED;\r\n    } \r\n    .xl-defectCodeArea {\r\n        margin: 7px 0 0 0;\r\n        height: 100px;\r\n    } \r\n    .dropdown {\r\n        margin: 20px 0 0 0;\r\n    }\r\n    .xl-dataTypeArea {\r\n        margin: 7px 0 0 0;\r\n        height: 100px;\r\n    }\r\n}"

/***/ }),

/***/ "./src/app/operatormonitor/eac/qualityandcapacity/qualityandcapacity.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"ui-g\">\n    <div id=\"EACQualityChart\" echarts [options]=\"qualityOption\" (chartClick)=\"People($event)\" class=\"ui-g-10 ui-lg-10 ui-xl-10 ui-md-12 ui-sm-12 chartArea xl-chartArea md-chartArea lg-chartArea sm-chartArea\"></div>\n    <div class=\"ui-g-2 ui-lg-2 ui-xl-2 ui-md-6 ui-sm-6 productionTypeArea xl-productionTypeArea md-productionTypeArea lg-productionTypeArea sm-productionTypeArea\">\n        <div class=\"xl-title lg-title\">\n            <Strong>产品类型</Strong></div>\n        <ul class=\"optionul\">\n            <li *ngFor=\"let item of ProductionTypes\" class=\"productionTypeLi xl-productionTypeLi md-productionTypeLi lg-productionTypeLi sm-productionTypeLi\">\n                <p-radioButton value=\"{{item.value}}\" label=\"{{item.label}}\" (click)=\"getCategory()\" [(ngModel)]=\"SelectProductionType\"\n                    inputId=\"{{item.value}}\"></p-radioButton>\n            </li>\n        </ul>\n    </div>\n    <div class=\"ui-g-2 ui-lg-2 ui-xl-2 ui-md-6 ui-sm-6 productionCategoryArea xl-productionCategoryArea md-productionCategoryArea lg-productionCategoryArea sm-productionCategoryArea\">\n        <div class=\"xl-title lg-title\"><strong>产品型号</strong></div>\n        <ul class=\"optionul\">\n            <li *ngFor=\"let item of productionCategorys\" class=\"productionTypeLi xl-productionTypeLi md-productionTypeLi lg-productionTypeLi sm-productionTypeLi\">\n                <p-radioButton value=\"{{item}}\" label=\"{{item}}\" (click)=\"DrawChart()\" [(ngModel)]=\"SelectProductionCategory\"\n                    inputId=\"{{item}}\"></p-radioButton>\n            </li>\n        </ul>\n    </div>\n\n    <div id=\"EACQualityChart\" echarts [options]=\"qualityPeopleOption\" class=\"ui-g-10 ui-lg-10 ui-xl-10 ui-md-12 ui-sm-12 chartArea xl-chartArea-12 md-chartArea-12 lg-chartArea-12 sm-chartArea-12\"></div>\n    <div class=\"ui-g-2 ui-lg-2 ui-xl-2 ui-md-6 ui-sm-6 productionCategoryArea xl-productionCategoryArea md-productionCategoryArea lg-productionClasses sm-productionCategoryArea\">\n        <div class=\"xl-title lg-title\"><strong>班次</strong></div>\n        <ul class=\"optionul\">\n            <li *ngFor=\"let item of Days\" class=\"productionTypeLi xl-productionTypeLi md-productionTypeLi lg-productionTypeLi sm-productionTypeLi\">\n                <p-radioButton value=\"{{item.value}}\" label=\"{{item.label}}\" (click)=\"getCategory()\" [(ngModel)]=\"SelectDayOrNight\"\n                    inputId=\"{{item.value}}\"></p-radioButton>\n            </li>\n        </ul>\n    </div>\n    <div class=\"ui-g-2 ui-lg-2 ui-xl-2 ui-md-6 ui-sm-6 productionCategoryArea xl-productionCategoryArea md-productionCategoryArea lg-productionCategoryArea sm-productionCategoryArea\">\n        <div class=\"xl-title lg-title\"><strong>DefectCode</strong></div>\n        <br />\n        <ul class=\"optionul\" class=\"productionTypeLi xl-productionTypeLi md-productionTypeLi lg-productionTypeLi sm-productionTypeLi\">\n            <p-dropdown [options]=\"DefectCodes\" [(ngModel)]=\"SelectDefectCode\" optionLabel=\"label\" [style]=\"{'width':'155px','font-size':'14px'}\"\n                (onChange)=\"DrawPeopleChart()\"></p-dropdown>\n        </ul>\n    </div>\n\n</div> -->\n\n\n\n<div class=\"ui-g\">\n    <div class=\"ui-g-10 ui-lg-10 ui-xl-10 ui-md-12 ui-sm-12\">\n        <div id=\"EACQualityChart\" echarts [options]=\"qualityOption\" (chartClick)=\"People($event)\" class=\"ui-g-12 chartArea xl-chartArea md-chartArea lg-chartArea sm-chartArea\"></div>\n        <div id=\"EACQualityChart\" echarts [options]=\"qualityPeopleOption\" class=\"ui-g-12 chartArea xl-chartArea md-chartArea lg-chartArea sm-chartArea\"></div>\n    </div>\n    <div class=\"ui-g-2 ui-lg-2 ui-xl-2 ui-md-12 ui-sm-12\">\n        <div class=\"ui-g-12 ui-lg-12 ui-xl-12 ui-md-6 ui-sm-6 productionTypeArea xl-productionTypeArea md-productionTypeArea lg-productionTypeArea sm-productionTypeArea\">\n            <div class=\"lg-title xl-title\"><strong>产品阶段</strong></div>\n            <ul class=\"optionul\">\n                <li *ngFor=\"let item of ProductionTypes\" class=\"productionTypeLi xl-productionTypeLi md-productionTypeLi lg-productionTypeLi sm-productionTypeLi\">\n                    <p-radioButton value=\"{{item.value}}\" label=\"{{item.label}}\" (click)=\"getCategory()\" [(ngModel)]=\"SelectProductionType\"\n                        inputId=\"{{item.value}}\"></p-radioButton>\n                </li>\n            </ul>\n        </div>\n        <div class=\"ui-g-12 ui-lg-12 ui-xl-12 ui-md-6 ui-sm-6 productionCategoryArea xl-productionCategoryArea md-productionCategoryArea lg-productionCategoryArea sm-productionCategoryArea\">\n            <div class=\"lg-title xl-title\"><strong>产品类型</strong></div>\n            <ul class=\"optionul\">\n                <li *ngFor=\"let item of productionCategorys\" class=\"productionTypeLi xl-productionTypeLi md-productionTypeLi lg-productionTypeLi sm-productionTypeLi\">\n                    <p-radioButton value=\"{{item}}\" label=\"{{item}}\" (click)=\"DrawChart()\" [(ngModel)]=\"SelectProductionCategory\"\n                        inputId=\"{{item}}\"></p-radioButton>\n                </li>\n            </ul>\n        </div>\n        <div class=\"ui-g-12 xl-defectCodeArea lg-defectCodeArea\">\n            <div class=\"lg-title xl-title\"><strong>Defect Code</strong></div>\n            <br />\n            <!--             <p-dropdown [options]=\"DefectCodes\" [(ngModel)]=\"selectedDefectCode\" placeholder=\"Select a DefectCode\"\n                optionLabel=\"value\" [showClear]=\"true\" (onChange)=\"defectCodeChanged($event)\" [style]=\"{'width':'90%'}\"></p-dropdown> -->\n\n            <ul class=\"optionul\" class=\"productionTypeLi xl-productionTypeLi md-productionTypeLi lg-productionTypeLi sm-productionTypeLi\">\n                <p-dropdown [options]=\"DefectCodes\" [(ngModel)]=\"SelectDefectCode\" optionLabel=\"label\" [style]=\"{'width':'100%','font-size':'14px'}\"\n                    (onChange)=\"DrawPeopleChart()\"></p-dropdown>\n            </ul>\n        </div>\n        <div class=\"ui-g-12 xl-dataTypeArea lg-dataTypeArea\">\n            <div class=\"lg-title xl-title\"><strong>Type</strong></div>\n            <ul class=\"optionul\">\n                <li *ngFor=\"let item of Days\" class=\"productionTypeLi xl-productionTypeLi md-productionTypeLi lg-productionTypeLi sm-productionTypeLi\">\n                    <p-radioButton value=\"{{item.value}}\" label=\"{{item.label}}\" (click)=\"getCategory()\" [(ngModel)]=\"SelectDayOrNight\"\n                        inputId=\"{{item.value}}\"></p-radioButton>\n                </li>\n            </ul>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/operatormonitor/eac/qualityandcapacity/qualityandcapacity.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QualityandcapacityComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_service_api_api_service__ = __webpack_require__("./src/app/common/service/api/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_layout_retab_service_tab_service__ = __webpack_require__("./src/core/layout/retab/service/tab.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__production_common_model_yieldParam__ = __webpack_require__("./src/app/production/common/model/yieldParam.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__qualityandcapacityService__ = __webpack_require__("./src/app/operatormonitor/eac/qualityandcapacity/qualityandcapacityService.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var QualityandcapacityComponent = /** @class */ (function () {
    function QualityandcapacityComponent(httpService, TService, ChartService) {
        this.httpService = httpService;
        this.TService = TService;
        this.ChartService = ChartService;
        this.YieldParams = new __WEBPACK_IMPORTED_MODULE_3__production_common_model_yieldParam__["a" /* YieldParam */]();
        TService.setItems("EAC 产能/品质监控");
    }
    QualityandcapacityComponent.prototype.ngOnInit = function () {
        var nowDate = new Date();
        var currentTime = nowDate.toLocaleString();
        this.waterMark = 'BOECD Confidential@' + localStorage.getItem('currentUserName') + '\n' + currentTime + '@' + localStorage.getItem('currentIP');
        this.ProductionTypes = [
            { value: "Production", label: "正式量产" },
            { value: "TPCN", label: "TPCN" },
            { value: "Develop", label: "客户送样" },
            { value: "Engineer", label: "工程验证" },
            { value: "PV", label: "PV" }
        ];
        this.Days = [
            { value: "THIS", label: "本班次" },
            { value: "LAST", label: "上班次" }
        ];
        this.SelectProductionType = "Production";
        this.SelectDayOrNight = "THIS";
        this.SelectDefectCode = "ALL";
        this.getCategory();
        this.Task_DrawChart();
    };
    QualityandcapacityComponent.prototype.ngOnDestroy = function () {
        clearInterval(this.timer);
    };
    QualityandcapacityComponent.prototype.getCategory = function () {
        var _this = this;
        this.YieldParams.shopName = "EAC2";
        this.YieldParams.operationName = "AET";
        this.YieldParams.productionType = this.SelectProductionType;
        this.YieldParams.datatype = this.SelectDayOrNight;
        this.httpService.post('/echart/operatormonitor/getEacOkQtyCategory', this.YieldParams).subscribe(function (res) {
            _this.respText = res;
            _this.productionCategorys = _this.respText;
            _this.SelectProductionCategory = _this.productionCategorys[0];
            _this.DrawChart();
        }, function (error) {
        });
    };
    QualityandcapacityComponent.prototype.getDefectCode = function () {
        var _this = this;
        this.YieldParams.shopName = "EAC2";
        this.YieldParams.operationName = "AET";
        this.YieldParams.productionType = this.SelectProductionType;
        this.YieldParams.datatype = this.SelectDayOrNight;
        this.YieldParams.datatype1 = this.OperatorId;
        this.httpService.post('/echart/operatormonitor/getPeopleEacOkQtyDefectCode', this.YieldParams).subscribe(function (res) {
            _this.respText = res;
            _this.DefectCodes = _this.respText;
            _this.DrawPeopleChart();
        }, function (error) {
        });
    };
    QualityandcapacityComponent.prototype.DrawChart = function () {
        var _this = this;
        this.YieldParams.shopName = "EAC2";
        this.YieldParams.operationName = "AET";
        this.YieldParams.productionType = this.SelectProductionType;
        this.YieldParams.datatype = this.SelectDayOrNight;
        this.YieldParams.productCategory = this.SelectProductionCategory;
        if (this.SelectProductionCategory == null) {
            this.qualityOption = this.ChartService.getOption_EacChangNeng("EAC人员产能监控", "", this.waterMark);
            this.qualityPeopleOption = this.ChartService.getOption_EacChangNengPeople(this.OperatorId + "  产能检控", "", this.waterMark);
            this.getDefectCode();
        }
        else {
            this.httpService.post('/echart/operatormonitor/getEacOkQtyAllData', this.YieldParams).subscribe(function (res) {
                _this.respText = res;
                _this.OperatorId = _this.respText.Operator;
                _this.qualityOption = _this.ChartService.getOption_EacChangNeng("EAC人员产能监控", _this.respText, _this.waterMark);
                _this.getDefectCode();
            }, function (error) {
            });
        }
    };
    QualityandcapacityComponent.prototype.DrawPeopleChart = function () {
        var _this = this;
        this.YieldParams.shopName = "EAC2";
        this.YieldParams.operationName = "AET";
        this.YieldParams.productionType = this.SelectProductionType;
        this.YieldParams.datatype = this.SelectDayOrNight;
        this.YieldParams.productCategory = this.SelectProductionCategory;
        this.YieldParams.datatype1 = this.OperatorId;
        this.YieldParams.defectcode = this.SelectDefectCode.value;
        if (this.SelectProductionCategory == null) {
            this.qualityPeopleOption = this.ChartService.getOption_EacChangNengPeople(this.OperatorId + "  产能检控", "", this.waterMark);
        }
        else {
            this.httpService.post('/echart/operatormonitor/getPeopleEacOkQty', this.YieldParams).subscribe(function (res) {
                _this.respText = res;
                _this.qualityPeopleOption = _this.ChartService.getOption_EacChangNengPeople(_this.OperatorId + "  产能检控", _this.respText, _this.waterMark);
            }, function (error) {
            });
        }
    };
    QualityandcapacityComponent.prototype.Task_DrawChart = function () {
        var _this = this;
        this.timer = setInterval(function () {
            console.log("In");
            _this.DrawChart();
        }, 500000);
    };
    QualityandcapacityComponent.prototype.People = function (params) {
        var _this = this;
        this.params = params;
        this.YieldParams.shopName = "EAC2";
        this.YieldParams.operationName = "AET";
        this.YieldParams.productionType = this.SelectProductionType;
        this.YieldParams.datatype = this.SelectDayOrNight;
        this.OperatorId = params.name;
        this.YieldParams.datatype1 = this.OperatorId;
        this.httpService.post('/echart/operatormonitor/getPeopleEacOkQtyDefectCode', this.YieldParams).subscribe(function (res) {
            _this.respText = res;
            _this.DefectCodes = _this.respText;
        }, function (error) {
        });
        this.YieldParams.defectcode = this.SelectDefectCode.value;
        if (this.SelectProductionCategory == null) {
            this.qualityPeopleOption = this.ChartService.getOption_EacChangNengPeople(this.OperatorId + "  产能检控", "", this.waterMark);
        }
        else {
            this.httpService.post('/echart/operatormonitor/getPeopleEacOkQty', this.YieldParams).subscribe(function (res) {
                _this.respText = res;
                _this.qualityPeopleOption = _this.ChartService.getOption_EacChangNengPeople(_this.OperatorId + "  产能检控", _this.respText, _this.waterMark);
            }, function (error) {
            });
        }
    };
    QualityandcapacityComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-qualityandcapacity',
            template: __webpack_require__("./src/app/operatormonitor/eac/qualityandcapacity/qualityandcapacity.component.html"),
            styles: [__webpack_require__("./src/app/operatormonitor/eac/qualityandcapacity/qualityandcapacity.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__common_service_api_api_service__["a" /* ApiService */],
            __WEBPACK_IMPORTED_MODULE_2_core_layout_retab_service_tab_service__["a" /* TabService */],
            __WEBPACK_IMPORTED_MODULE_4__qualityandcapacityService__["a" /* qualityandcapacityChart */]])
    ], QualityandcapacityComponent);
    return QualityandcapacityComponent;
}());



/***/ }),

/***/ "./src/app/operatormonitor/eac/qualityandcapacity/qualityandcapacityService.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return qualityandcapacityChart; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var qualityandcapacityChart = /** @class */ (function () {
    function qualityandcapacityChart() {
    }
    qualityandcapacityChart.prototype.getOption_EacChangNeng = function (title, respText, waterMark) {
        var option = {
            title: [{
                    text: title,
                    align: 'left',
                    subtext: '                            总过货量：' + respText.Totol,
                    left: '0%',
                    top: '0%',
                    itemGap: 17,
                    textStyle: {
                        fontFamily: '微软雅黑',
                        fontSize: '160%',
                    },
                    subtextStyle: {
                        fontFamily: '微软雅黑',
                        fontSize: '90%',
                        color: 'rgb(0,0,0)',
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
                                + '<div  style="font-size: 9px;">'
                                + 'Out Qty：' + value[1] + '<br>'
                                + '</div>';
                        }
                        if (obj.seriesType == "line") {
                            return '<div style="border-bottom: 1px solid rgba(255,255,255,.3); font-size: 15px;padding-bottom: 5px;margin-bottom: 5px">'
                                + obj.name + '：'
                                + '</div>'
                                + '<div  style="font-size: 9px;">'
                                + obj.seriesName + '：' + value[1] + '%' + '<br>'
                                + 'OK QTY：' + value[2] + '<br>'
                                + '</div>';
                        }
                    }
                }
            },
            legend: {
                data: eval('(' + respText.legenddata + ')'),
                type: 'scroll',
                left: '46%',
                top: '6%',
                //图例排布
                width: '49%',
                itemWith: 20,
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
                        rotate: 335,
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
                        fontSize: '90%',
                        fontFamily: '微软雅黑',
                        color: 'rgb(66,66,66)',
                    },
                    axisLabel: {
                        formatter: '{value}',
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
                    name: 'Yield',
                    scale: true,
                    min: 0,
                    max: 100,
                    /*		            min:function(value)
                                        {
                                            var range =value.max-value.min;
                                            var rangeplus = range / 5;
                                            
                                            // 最大值和最小值相同时，坐标轴最小值为value最小值减2
                                            if(rangeplus==0)
                                            {
                                                rangeplus = 2;
                                            }
                                            
                                            var a=Math.floor(value.min-rangeplus);
                                            if (a<5) {
                                                return 0;
                                            } else {
                                                return a;
                                            }
                                        },
                                        max:function(value)
                                        {
                                            var range =value.max-value.min;
                                            var rangeplus = range / 5;
                                            
                                            // 最大值和最小值相同时，坐标轴最大值为value最大值加2
                                            if(rangeplus==0)
                                            {
                                                rangeplus = 2;
                                            }
                                            
                                            a=Math.ceil(value.max+rangeplus);
                                            if (a>100) {
                                                return 100;
                                            } else {
                                                return a;
                                            }
                                        },*/
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
            dataZoom: [{
                    type: 'slider',
                    show: true,
                    xAxisIndex: [0, 1],
                    handleSize: 20,
                    height: 8,
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
                    y2: '6%',
                    height: '55%'
                }, {
                    x: '7%',
                    x2: '7%',
                    y2: '4%',
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
    qualityandcapacityChart.prototype.getOption_EacChangNengPeople = function (title, respText, waterMark) {
        var option = {
            title: [{
                    text: title,
                    align: 'left',
                    left: '0%',
                    top: '0%',
                    itemGap: 17,
                    textStyle: {
                        fontFamily: '微软雅黑',
                        fontSize: '160%',
                    },
                },
                {
                    text: '过货量:',
                    left: '0%',
                    align: 'left',
                    bottom: '8%',
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
                                + '<div  style="font-size: 9px;">'
                                + obj.seriesName + ' 不良率：' + value[1] + '%' + '<br>'
                                + '</div>';
                        }
                        if (obj.seriesType == "line") {
                            return '<div style="border-bottom: 1px solid rgba(255,255,255,.3); font-size: 15px;padding-bottom: 5px;margin-bottom: 5px">'
                                + obj.name + '：'
                                + '</div>'
                                //    + obj.seriesName+'：' + value[1] +'%'+'<br>'
                                + '<div  style="font-size: 9px;">'
                                + 'OK Yield：' + value[1] + '%' + '<br>'
                                + '</div>';
                        }
                    }
                }
            },
            legend: {
                data: eval('(' + respText.legenddata + ')'),
                type: 'scroll',
                left: '30%',
                top: '4%',
                //图例排布
                width: '52%',
                itemWith: 20,
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
                        rotate: 335,
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
                    name: '不良率',
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
                    splitNumber: 4,
                }, {
                    type: 'value',
                    gridIndex: 0,
                    name: 'Yield',
                    scale: true,
                    min: 0,
                    max: 100,
                    /*		            min:function(value)
                                        {
                                            var range =value.max-value.min;
                                            var rangeplus = range / 5;
                                            
                                            // 最大值和最小值相同时，坐标轴最小值为value最小值减2
                                            if(rangeplus==0)
                                            {
                                                rangeplus = 2;
                                            }
                                            
                                            var a=Math.floor(value.min-rangeplus);
                                            if (a<5) {
                                                return 0;
                                            } else {
                                                return a;
                                            }
                                        },
                                        max:function(value)
                                        {
                                            var range =value.max-value.min;
                                            var rangeplus = range / 5;
                                            
                                            // 最大值和最小值相同时，坐标轴最大值为value最大值加2
                                            if(rangeplus==0)
                                            {
                                                rangeplus = 2;
                                            }
                                            
                                            a=Math.ceil(value.max+rangeplus);
                                            if (a>100) {
                                                return 100;
                                            } else {
                                                return a;
                                            }
                                        },*/
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
            dataZoom: [{
                    type: 'slider',
                    show: true,
                    xAxisIndex: [0, 1],
                    handleSize: 20,
                    height: 8,
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
                    y: '22%',
                    y2: '15%',
                    height: '50%'
                }, {
                    x: '7%',
                    x2: '7%',
                    y2: '11%',
                    height: '5%'
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
    qualityandcapacityChart = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__node_modules_angular_core__["Injectable"])()
    ], qualityandcapacityChart);
    return qualityandcapacityChart;
}());



/***/ })

});
//# sourceMappingURL=eac.module.chunk.js.map