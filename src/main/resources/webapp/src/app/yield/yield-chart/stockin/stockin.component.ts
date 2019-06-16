import { Component, OnInit, Input } from '@angular/core';
import { YieldParam } from 'app/production/common/model/yieldParam';
import { ApiService } from 'app/common/service/api/api.service';
import { YieldechartOptionService } from '../yieldechart-option.service';

@Component({
  selector: 'app-stockin',
  templateUrl: './stockin.component.html',
  styleUrls: ['./../../../production/pro-eac/pro-eac.component.css']
})
export class StockinComponent implements OnInit {


  @Input() currentUserName = '';

  @Input() deviceType = '';

  @Input() shopName = '';

  @Input() processType = '';

  @Input() categoryURL = '';

  @Input() chartURL = '';

  @Input() dataType = '';

  @Input() lineName = '';

  @Input() productionTypeDisplay;

  selectedProductionType = 'Production';

  productCategory: string[];

  selectedProductionCategory = '';

  echartOption;

  timer;

  respText;

  waterMark;

  chartParam: YieldParam = new YieldParam();

  constructor(private httpService: ApiService, private echartService: YieldechartOptionService) { }

  ngOnInit() {

    this.getProductCategory();
  }

  getProductCategory() {
    const options = {
      params: {
        shopName: this.shopName,
        productionType: this.selectedProductionType,
        processType: this.processType,
        dataType: this.dataType,
        lineName: this.lineName
      }
    };
    let url;
    if (this.processType === 'CUM') {
      url = '/echart/yield/yieldStockInCUMCategory';
    } else {
      url = '/echart/yield/yieldEACMDLCategory';
    }

    this.httpService.get(url, options).subscribe(
      (res) => {
        this.productCategory = <string[]>res;
        this.selectedProductionCategory = this.productCategory[0];
        this.drawChart();
      },
      (error) => { console.log(error); }
    );
  }

  productionTypeClicked() {
    this.getProductCategory();
    //this.drawChart();
  }

  drawChart() {
    this.chartParam.productCategory = this.selectedProductionCategory;
    this.chartParam.productionType = this.selectedProductionType;
    this.chartParam.shopName = this.shopName;
    this.chartParam.processtype = this.processType;
    this.chartParam.linename = this.lineName;
    this.chartParam.datatype = this.dataType;
    this.chartParam.deviceType = this.deviceType;
    const nowDate: Date = new Date();
    const currentTime: string = nowDate.toLocaleString();
    this.waterMark = 'BOECD Confidential@' + this.currentUserName + '\n' + currentTime + '@' + localStorage.getItem('currentIP');
    let url;

    if (this.processType === 'CUM') {
      url = '/echart/yield/yieldStockInCUM';
    } else {
      url = '/echart/yield/yieldEACMDL';
    }


    this.httpService.post(url, this.chartParam).subscribe(
      (res) => {
        this.respText = res;
        console.log('this.waterMark:' + this.waterMark);
        this.echartOption = this.echartService.getOption_yield(this.processType + ' 良率指标', this.respText, this.waterMark, this.deviceType);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  clear_Timer() {
    this.timer = setInterval(() => {
      this.drawChart();
    }, 300000);
  }

  start_Timer() {
    if (this.timer) {
      clearInterval(this.timer);
    }
  }

}
