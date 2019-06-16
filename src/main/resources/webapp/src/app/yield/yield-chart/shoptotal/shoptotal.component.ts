import { Component, OnInit, Input } from '@angular/core';
import { YieldParam } from 'app/production/common/model/yieldParam';
import { ApiService } from 'app/common/service/api/api.service';
import { YieldechartOptionService } from '../yieldechart-option.service';

@Component({
  selector: 'app-shoptotal',
  templateUrl: './shoptotal.component.html',
  styleUrls: ['./shoptotal.component.css']
})
export class ShoptotalComponent implements OnInit {

  @Input() currentUserName;

  @Input() deviceType;

  @Input() shopName;

  @Input() processType;

  productCategory: string[];

  selectedProductionCategory = '';

  TotalYieldChartOption: any;

  DefectChartOption: any;

  ScrapChartOption: any;

  timer;

  respText;

  waterMark;

  chartParam: YieldParam = new YieldParam();

  constructor(private httpService: ApiService, private echartService: YieldechartOptionService) { }

  ngOnInit() {

    this.getProductCategory();

  }

  getProductCategory() {
    let shopName1 = '';
    if (this.shopName == 'EVEN') {
      shopName1 = 'EAC2';
    } else {
      shopName1 = this.shopName;
    }
    const options = {
      params: {
        shopName: shopName1,
        processType: this.processType
      }
    };
    let url;

    url = '/echart/yield/totalYieldProductCategory';

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

  drawTotalYieldChart() {
    this.chartParam.shopName = this.shopName;
    this.chartParam.processtype = this.processType;
    this.chartParam.productionType = 'Production';
    this.chartParam.productCategory = this.selectedProductionCategory;
    this.chartParam.datatype = this.shopName; // SpecDepartmentName
    this.chartParam.deviceType = this.deviceType;

    const nowDate: Date = new Date();
    const currentTime: string = nowDate.toLocaleString();
    this.waterMark = 'BOECD Confidential@' + this.currentUserName + '\n' + currentTime + '@' + localStorage.getItem('currentIP');
    let url;
    url = '/echart/yield/yieldTotal';

    this.httpService.post(url, this.chartParam).subscribe(
      (res) => {
        this.respText = res;
        console.log('this.waterMark:' + this.waterMark);
        this.TotalYieldChartOption = this.echartService.getOption_yieldTotal(this.shopName + '分厂综合良率', this.respText, this.waterMark, this.deviceType);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  drawTotalDefectChart() {
    this.chartParam.shopName = this.shopName;
    this.chartParam.processtype = this.processType;
    this.chartParam.productionType = 'Production';
    this.chartParam.productCategory = this.selectedProductionCategory;
    this.chartParam.datatype = this.shopName; // SpecDepartmentName
    this.chartParam.deviceType = this.deviceType;

    const nowDate: Date = new Date();
    const currentTime: string = nowDate.toLocaleString();
    this.waterMark = 'BOECD Confidential@' + this.currentUserName + '\n' + currentTime + '@' + localStorage.getItem('currentIP');
    let url;
    url = '/echart/yield/yieldTotalDefect';

    this.httpService.post(url, this.chartParam).subscribe(
      (res) => {
        this.respText = res;
        console.log('this.waterMark:' + this.waterMark);
        this.DefectChartOption = this.echartService.getOption_yieldByDepartment(this.shopName + '部门别不良率', this.respText, this.waterMark, this.deviceType);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  drawTotalScrapChart() {
    this.chartParam.shopName = this.shopName;
    this.chartParam.processtype = this.processType;
    this.chartParam.productionType = 'Production';
    this.chartParam.productCategory = this.selectedProductionCategory;
    this.chartParam.datatype = this.shopName; // SpecDepartmentName
    this.chartParam.deviceType = this.deviceType;

    const nowDate: Date = new Date();
    const currentTime: string = nowDate.toLocaleString();
    this.waterMark = 'BOECD Confidential@' + this.currentUserName + '\n' + currentTime + '@' + localStorage.getItem('currentIP');
    let url;
    url = '/echart/yield/yieldTotalScrap';

    this.httpService.post(url, this.chartParam).subscribe(
      (res) => {
        this.respText = res;
        this.ScrapChartOption = this.echartService.getOption_yieldByDepartment(this.shopName + '部门别报废率', this.respText, this.waterMark, this.deviceType);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  drawChart(){
    this.drawTotalYieldChart();
    this.drawTotalDefectChart();
    this.drawTotalScrapChart();
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
