import { Component, OnInit, Input } from '@angular/core';
import { YieldParam } from 'app/production/common/model/yieldParam';
import { ApiService } from 'app/common/service/api/api.service';
import { EchartOptionService } from 'app/quality/common/echart-option.service';

@Component({
  selector: 'app-cg2view',
  templateUrl: './cg2view.component.html',
  styleUrls: ['./../../../production/pro-eac/pro-eac.component.css']
})
export class Cg2viewComponent implements OnInit {

  @Input() currentUserName = '';

  @Input() deviceType = '';

  shopName = 'MODULE';

  @Input() dataType;

  productionType: any[];

  selectedProductionType = ''; //productionType or operationName

  productCategory: string[];

  selectedProductionCategory = '';

  echartOption;

  timer;

  respText;

  waterMark;

  title: string;

  chartParam: YieldParam = new YieldParam();

  constructor(private httpService: ApiService, private echartService: EchartOptionService) { }

  ngOnInit() {

    if (this.dataType === 'Yield') {
      this.productionType = [
        { label: 'CG Sorting', value: 'CG Sorting' },
        { label: '1st APP全检', value: '1st APP全检' },
        { label: 'CG 清洁', value: 'CG 清洁' }
      ];
      this.title = '工序名称';
      this.selectedProductionType = 'CG Sorting';
    } else if (this.dataType === 'ActPlan') {
      this.productionType = [
        { label: '工厂投入', value: 'In' },
        { label: '工厂产出', value: 'Out' },
      ];
      this.title = '投入产出';
      this.selectedProductionType = 'In'
    }

    this.getProductCategory();
  }

  getProductCategory() {
    const options = {
      params: {
        shopName: this.shopName,
        productionType: this.selectedProductionType,
      }
    };
    let url = '';

    if (this.dataType === 'Yield') {
      url = '/echart/quality/yieldCategory';
    } else if (this.dataType === 'ActPlan') {
      url = '/echart/quality/ActPlanCategory';
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
  }

  drawChart() {
    this.chartParam.productCategory = this.selectedProductionCategory;
    this.chartParam.productionType = this.selectedProductionType;
    this.chartParam.deviceType = this.deviceType;
    const nowDate: Date = new Date();
    const currentTime: string = nowDate.toLocaleString();
    this.waterMark = 'BOECD Confidential@' + this.currentUserName + '\n' + currentTime + '@' + localStorage.getItem('currentIP');
    let url = '';

    if (this.dataType === 'Yield') {
      url = '/echart/quality/yield';
    } else if (this.dataType === 'ActPlan') {
      url = '/echart/quality/ActPlan';
    }

    this.httpService.post(url, this.chartParam).subscribe(
      (res) => {
        this.respText = res;
        console.log('this.waterMark:' + this.waterMark);

        if (this.dataType === 'Yield') {
          this.echartOption = this.echartService.getOption_SQEyield(this.dataType, this.respText, this.waterMark, this.deviceType);
        } else if (this.dataType === 'ActPlan') {
          this.echartOption = this.echartService.getOption_ActPlan(this.dataType, this.respText, this.waterMark, this.deviceType);
        }
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
