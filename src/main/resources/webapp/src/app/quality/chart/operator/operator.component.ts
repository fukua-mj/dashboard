import { Component, OnInit, Input } from '@angular/core';
import { YieldParam } from 'app/production/common/model/yieldParam';
import { ApiService } from 'app/common/service/api/api.service';
import { EchartOptionService } from 'app/quality/common/echart-option.service';
import { DatetimeService } from 'app/common/service/datetime.service';

@Component({
  selector: 'app-operator',
  templateUrl: './operator.component.html',
  styleUrls: ['./operator.component.css']
})
export class OperatorComponent implements OnInit {

  @Input() currentUserName;

  @Input() deviceType;

  @Input() shopName;

  @Input() processType;

  @Input() categoryURL;

  @Input() chartURL;

  @Input() dataType;

  selectedProductionType = 'Production';

  productCategory: string[];

  selectedProductionCategory = '';

  echartOption;

  echartOption1;

  timer;

  respText;

  waterMark;

  chartParam: YieldParam = new YieldParam();

  startDate: Date;

  endDate: Date;

  defaultOpName: string;

  constructor(private httpService: ApiService, private echartService: EchartOptionService, private dateTimeService: DatetimeService) { }

  ngOnInit() {

    this.startDate = this.dateTimeService.getOperatorStartEndTime()[0];
    this.endDate = this.dateTimeService.getOperatorStartEndTime()[1];
    this.getProductCategory();

  }

  getDefaultOpName() {
    this.chartParam.productCategory = this.selectedProductionCategory;
    this.chartParam.productionType = this.selectedProductionType;
    this.chartParam.shopName = this.shopName;
    this.chartParam.processtype = this.processType;
    this.chartParam.datatype = this.dataType;
    this.chartParam.starttime = this.dateTimeService.date2string(this.startDate);
    this.chartParam.endtime = this.dateTimeService.date2string(this.endDate);
    console.log(this.chartParam.starttime);
    console.log(this.chartParam.endtime);
    const nowDate: Date = new Date();
    const currentTime: string = nowDate.toLocaleString();
    this.waterMark = 'BOECD Confidential@' + this.currentUserName + '\n' + currentTime + '@' + localStorage.getItem('currentIP');

    let url = '/echart/quality/getOpt_OperatorDefectMDLRENYUANBIEdefaultopName';

    this.httpService.post(url, this.chartParam).subscribe(
      (res) => {
        this.respText = res;
        this.defaultOpName = this.respText.defaultopName;

        this.drawChart1();
      },
      (error) => {
        console.log(error);
      }
    );
  }

  getProductCategory() {
    const options = {
      params: {
        shopName: this.shopName,
        productionType: this.selectedProductionType,
        processType: this.processType,
        dataType: this.dataType,
      }
    };

    let url = '/echart/quality/getOpt_OperatorDefectCategory';

    this.httpService.get(url, options).subscribe(
      (res) => {
        this.productCategory = <string[]>res;
        this.selectedProductionCategory = this.productCategory[0];
        this.drawChart();
        this.getDefaultOpName();
      },
      (error) => { console.log(error); }
    );
  }

  productionTypeClicked() {
    this.getProductCategory();
    this.getDefaultOpName();
  }

  drawChart() {
    this.chartParam.productCategory = this.selectedProductionCategory;
    this.chartParam.productionType = this.selectedProductionType;
    this.chartParam.shopName = this.shopName;
    this.chartParam.processtype = this.processType;
    this.chartParam.datatype = this.dataType;
    this.chartParam.starttime = this.dateTimeService.date2string(this.startDate);
    this.chartParam.endtime = this.dateTimeService.date2string(this.endDate);
    this.chartParam.deviceType = this.deviceType;
    const nowDate: Date = new Date();
    const currentTime: string = nowDate.toLocaleString();
    this.waterMark = 'BOECD Confidential@' + this.currentUserName + '\n' + currentTime + '@' + localStorage.getItem('currentIP');

    let url = '/echart/quality/getOpt_OperatorDefectMDLRENYUANBIEOQA';

    this.httpService.post(url, this.chartParam).subscribe(
      (res) => {
        this.respText = res;
        console.log('this.waterMark:' + this.waterMark);
        this.echartOption = this.echartService.getOption_OperatorDefectchannengOQA(this.processType + ' 良率指标', this.respText, this.waterMark, this.deviceType);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  drawChart1() {
    this.chartParam.productCategory = this.selectedProductionCategory;
    this.chartParam.productionType = this.selectedProductionType;
    this.chartParam.shopName = this.shopName;
    this.chartParam.processtype = this.processType;
    this.chartParam.datatype = this.defaultOpName;
    this.chartParam.starttime = this.dateTimeService.date2string(this.startDate);
    this.chartParam.endtime = this.dateTimeService.date2string(this.endDate);
    this.chartParam.deviceType = this.deviceType;
    const nowDate: Date = new Date();
    const currentTime: string = nowDate.toLocaleString();
    this.waterMark = 'BOECD Confidential@' + this.currentUserName + '\n' + currentTime + '@' + localStorage.getItem('currentIP');

    let url = '/echart/quality/getOpt_OperatorDefectMDLRENYUANBIEOneOQA';

    this.httpService.post(url, this.chartParam).subscribe(
      (res) => {
        this.respText = res;
        console.log('this.waterMark:' + this.waterMark);
        this.echartOption1 = this.echartService.getOption_OperatorDefectchannengOneOQA(this.defaultOpName + this.processType + ' 产能监控', this.respText, this.waterMark, this.deviceType);
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

  searchButtonClick() {
    this.drawChart();
    this.getDefaultOpName();
  }

  chartClick(event) {
    this.defaultOpName = event.name;
    this.drawChart1();
  }
}
