import { Component, OnInit, Input } from '@angular/core';
import { YieldParam } from 'app/production/common/model/yieldParam';
import { ApiService } from 'app/common/service/api/api.service';
import { YieldechartOptionService } from '../yieldechart-option.service';

@Component({
  selector: 'app-bpkilling',
  templateUrl: './bpkilling.component.html',
  styleUrls: ['./../../../production/pro-eac/pro-eac.component.css']
})
export class BpkillingComponent implements OnInit {

  @Input() currentUserName;

  @Input() deviceType;

  @Input() shopName;

  @Input() processType;

  selectedProductionType = 'Production';

  productCategory: string[];

  selectedProductionCategory = '6.39QHD';

  echartOption;

  timer;

  respText;

  waterMark;

  chartParam: YieldParam = new YieldParam();

  constructor(private httpService: ApiService, private echartService: YieldechartOptionService) { }

  ngOnInit() {

    this.getProductCategory();

    //this.drawChart();
  }

  getProductCategory() {
    const options = {
      params: { shopName: this.shopName, productionType: this.selectedProductionType, processType: this.processType }
    };
    this.httpService.get('/echart/yield/yield4LayerKillingProductCategory', options).subscribe(
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
    this.chartParam.deviceType = this.deviceType;
    const nowDate: Date = new Date();
    const currentTime: string = nowDate.toLocaleString();
    this.waterMark = 'BOECD Confidential@' + this.currentUserName + '\n' + currentTime + '@' + localStorage.getItem('currentIP');
    this.httpService.post('/echart/yield/yield4LayerKilling', this.chartParam).subscribe(
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
