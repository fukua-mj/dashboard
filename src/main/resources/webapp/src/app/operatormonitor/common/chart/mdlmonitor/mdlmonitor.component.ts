import { Component, OnInit, Input } from '@angular/core';
import { DefectCode } from '../../defectcode';
import { YieldParam } from 'app/production/common/model/yieldParam';
import { ApiService } from 'app/common/service/api/api.service';
import { DatetimeService } from 'app/common/service/datetime.service';
import { EchartOptionService } from '../echart-option.service';

@Component({
  selector: 'app-mdlmonitor',
  templateUrl: './mdlmonitor.component.html',
  styleUrls: ['./../eacmonitor/eacmonitor.component.css']
})
export class MdlmonitorComponent implements OnInit {

  @Input() currentUserName = '';

  @Input() deviceType = '';

  @Input() shopName = '';

  @Input() processType = '';

  @Input() pageType;

  selectedProductionType = 'Production';

  productCategory: string[];

  selectedProductionCategory = '';

  DefectCodes: DefectCode[];

  selectedDefectCode: DefectCode = new DefectCode();

  selectedDataType = 'OPERATOR';

  echartOption;

  startDate: Date;

  endDate: Date;

  timer;

  respText;

  waterMark;

  chartParam: YieldParam = new YieldParam();

  constructor(private httpService: ApiService, private echartService: EchartOptionService, private dateTimeService: DatetimeService) { }

  ngOnInit() {

    this.startDate = this.dateTimeService.getOperatorStartEndTime()[0];
    this.endDate = this.dateTimeService.getOperatorStartEndTime()[1];

    this.getProductCategory();

  }

  getProductCategory() {
    const options = {
      params: {
        shopName: this.shopName,
        productionType: this.selectedProductionType,
        processType: this.processType,
        dataType: this.selectedDataType,
        dataType1: this.pageType
      }
    };
    let url;
    if (this.pageType === '产能监控') {
      url = '/echart/operatormonitor/defectMonitorProductCategory';
    } else {
      url = '/echart/operatormonitor/detectionMissProductCategory';
    }

    this.httpService.get(url, options).subscribe(
      (res) => {
        this.productCategory = <string[]>res;
        this.selectedProductionCategory = this.productCategory[0];
        this.getDefectCode();
      },
      (error) => { console.log(error); }
    );
  }

  defectCodeChanged() {
    this.drawChart();
  }

  getDefectCode() {
    const options = {
      params: {
        shopName: this.shopName,
        productionType: this.selectedProductionType,
        processType: this.processType,
        dataType: this.selectedDataType,
        dataType1: this.pageType,
        productCategory: this.selectedProductionCategory,
        startTime: this.dateTimeService.date2string(this.startDate),
        endTime: this.dateTimeService.date2string(this.endDate)
      }
    };
    let url;
    if (this.pageType === '产能监控') {
      url = '/echart/operatormonitor/defectMonitorDefectCodeList';
    } else {
      url = '/echart/operatormonitor/detectionMissDefectCodeList';
    }

    this.httpService.get(url, options).subscribe(
      (res) => {
        this.DefectCodes = <DefectCode[]>res;
        this.selectedDefectCode = this.DefectCodes[0];
        this.drawChart();
      },
      (error) => { console.log(error); }
    );
  }

  productionTypeClicked() {
    this.getProductCategory();
  }

  drawChart() {
    this.chartParam.productCategory = this.selectedProductionCategory;
    this.chartParam.productionType = this.selectedProductionType;
    this.chartParam.shopName = this.shopName;
    this.chartParam.processtype = this.processType;
    this.chartParam.datatype = this.selectedDataType;
    this.chartParam.defectcode = this.selectedDefectCode.value;
    this.chartParam.starttime = this.dateTimeService.date2string(this.startDate);
    this.chartParam.endtime = this.dateTimeService.date2string(this.endDate);
    this.chartParam.datatype1 = this.pageType;
    this.chartParam.deviceType = this.deviceType;
    const nowDate: Date = new Date();
    const currentTime: string = nowDate.toLocaleString();
    this.waterMark = 'BOECD Confidential@' + this.currentUserName + '\n' + currentTime + '@' + localStorage.getItem('currentIP');

    let url;
    if (this.pageType === '产能监控') {
      url = '/echart/operatormonitor/defectmonitor';
    } else {
      url = '/echart/operatormonitor/detectionMiss';
    }

    this.httpService.post(url, this.chartParam).subscribe(
      (res) => {
        this.respText = res;
        this.echartOption = this.echartService.getOption_OperatorDefect(this.processType + ' 检测岗位监控', this.respText, this.waterMark, this.deviceType);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  start_Timer() {
    this.timer = setInterval(() => {
      this.drawChart();
    }, 300000);
  }

  clear_Timer() {
    if (this.timer) {
      clearInterval(this.timer);
    }
  }

}
