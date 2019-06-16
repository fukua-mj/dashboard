import { Component, OnInit, Input } from '@angular/core';
import { YieldParam } from 'app/production/common/model/yieldParam';
import { ApiService } from 'app/common/service/api/api.service';
import { EchartOptionService } from '../echart-option.service';

@Component({
  selector: 'app-warehouse-all',
  templateUrl: './warehouse-all.component.html',
  styleUrls: ['./warehouse-all.component.css']
})
export class WarehouseAllComponent implements OnInit {

  @Input() shopName;

  @Input() currentUserName = '';

  @Input() deviceType = '';

  echartOptionTotal;

  echartOptionGrade;

  echartOptionTime;

  timer;

  selectedProductCategory = '';

  respText;

  respText1;

  respText2;

  waterMark;

  chartParam: YieldParam = new YieldParam();

  constructor(private httpService: ApiService, private echartService: EchartOptionService) { }

  ngOnInit() {

    this.drawChart();
    this.getDefaultProductCategory();
  }

  drawChart() {
    console.log('库存指标：'+this.chartParam.shopName);
    this.chartParam.shopName = this.shopName;
    const nowDate: Date = new Date();
    const currentTime: string = nowDate.toLocaleString();
    this.waterMark = 'BOECD Confidential@' + this.currentUserName + '\n' + currentTime + '@' + localStorage.getItem('currentIP');

    const url = '/echart/warehouse/total';

    this.httpService.post(url, this.chartParam).subscribe(
      (res) => {
        this.respText = res;
        let title = '';
        if (this.shopName === 'EAC2') {
          title = '半成品库存信息';
        } else if(this.shopName === 'MODULE') {
          title = '完成品库存信息';
        }
        this.echartOptionTotal = this.echartService.getOption_warehouse(title, this.respText, this.waterMark, this.deviceType);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  getDefaultProductCategory() {
    this.chartParam.shopName = this.shopName;
    console.log(this.chartParam.starttime);
    console.log(this.chartParam.endtime);
    const nowDate: Date = new Date();
    const currentTime: string = nowDate.toLocaleString();
    this.waterMark = 'BOECD Confidential@' + this.currentUserName + '\n' + currentTime + '@' + localStorage.getItem('currentIP');

    let url = '/echart/warehouse/getdefaultProductCategory';

    this.httpService.post(url, this.chartParam).subscribe(
      (res) => {
        this.respText = res;
        this.selectedProductCategory = this.respText.productCategory;
        this.drawChart1();
        this.drawChart2();
      },
      (error) => {
        console.log(error);
      }
    );
  }

  drawChart1() {
    this.chartParam.shopName = this.shopName;
    this.chartParam.productCategory = this.selectedProductCategory;
    const nowDate: Date = new Date();
    const currentTime: string = nowDate.toLocaleString();
    this.waterMark = 'BOECD Confidential@' + this.currentUserName + '\n' + currentTime + '@' + localStorage.getItem('currentIP');

    const url = '/echart/warehouse/Grade';

    this.httpService.post(url, this.chartParam).subscribe(
      (res) => {
        this.respText1 = res;
        this.echartOptionGrade = this.echartService.getOption_warehouseGrade('库存等级', this.respText1, this.waterMark, this.deviceType);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  drawChart2() {
    this.chartParam.shopName = this.shopName;
    this.chartParam.productCategory = this.selectedProductCategory;
    const nowDate: Date = new Date();
    const currentTime: string = nowDate.toLocaleString();
    this.waterMark = 'BOECD Confidential@' + this.currentUserName + '\n' + currentTime + '@' + localStorage.getItem('currentIP');

    const url = '/echart/warehouse/Grade';

    this.httpService.post(url, this.chartParam).subscribe(
      (res) => {
        this.respText2 = res;
        this.echartOptionTime = this.echartService.getOption_warehouseTime('库龄信息', this.respText2, this.waterMark, this.deviceType);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  chartClick(event) {
    this.selectedProductCategory = event.name;
    this.drawChart1();
    this.drawChart2();
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
