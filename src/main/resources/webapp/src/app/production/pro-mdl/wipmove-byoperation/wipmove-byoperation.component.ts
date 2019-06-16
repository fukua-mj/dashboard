import { Component, OnInit } from '@angular/core';
import { YieldParam } from 'app/production/common/model/yieldParam';
import { ApiService } from 'app/common/service/api/api.service';
import { ProductionChartOptionService } from 'app/production/common/production-chart-option.service';

@Component({
  selector: 'app-wipmove-byoperation',
  templateUrl: './wipmove-byoperation.component.html',
  styleUrls: ['./wipmove-byoperation.component.css']
})
export class WipmoveByoperationComponent implements OnInit {

  currentUserName = localStorage.getItem('currentUserName');

  deviceType = localStorage.getItem('deviceType');

  shopName = 'MODULE';

  selectedOperationType = 'MAIN';

  productionType: any[];

  selectedWIPMoveProductionType = 'Production'; //productionType or operationName

  productCategory: string[];

  selectedProductionCategory = '';

  echartOption;

  timer;

  respText;

  waterMark;

  title: string;

  chartParam: YieldParam = new YieldParam();

  constructor(private httpService: ApiService, private echartService: ProductionChartOptionService) { }

  ngOnInit() {
    this.getProductCategory();
  }

  getProductCategory() {
    const options = {
      params: {
        shopName: this.shopName,
        productionType: this.selectedWIPMoveProductionType,
        dataType: 'MAIN'
      }
    };
    let url = '/echart/production/wipMoveByOperationTypeCategory';

    this.httpService.get(url, options).subscribe(
      (res) => {
        this.productCategory = <string[]>res;
        this.selectedProductionCategory = this.productCategory[0];
        this.drawChart();
      },
      (error) => { console.log(error); }
    );
  }

  WIPMoveProductionTypeClicked() {
    this.getProductCategory();
  }

  drawChart() {
    this.chartParam.shopName = this.shopName;
    this.chartParam.productCategory = this.selectedProductionCategory;
    this.chartParam.productionType = this.selectedWIPMoveProductionType;
    this.chartParam.deviceType = this.deviceType;
    this.chartParam.datatype = this.selectedOperationType;
    const nowDate: Date = new Date();
    const currentTime: string = nowDate.toLocaleString();
    this.waterMark = 'BOECD Confidential@' + this.currentUserName + '\n' + currentTime + '@' + localStorage.getItem('currentIP');

    let url = '/echart/production/wipMoveByOperationType';

    this.httpService.post(url, this.chartParam).subscribe(
      (res) => {
        this.respText = res;
        this.echartOption = this.echartService.getOption_WIPMove('MODULE 分厂WIP/Movement', this.respText, this.waterMark, this.deviceType);
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
