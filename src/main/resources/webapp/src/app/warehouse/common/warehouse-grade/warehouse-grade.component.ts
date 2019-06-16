import { Component, OnInit, Input } from '@angular/core';
import { YieldParam } from 'app/production/common/model/yieldParam';
import { ApiService } from 'app/common/service/api/api.service';
import { EchartOptionService } from '../echart-option.service';

@Component({
  selector: 'app-warehouse-grade',
  templateUrl: './warehouse-grade.component.html',
  styleUrls: ['./warehouse-grade.component.css']
})
export class WarehouseGradeComponent implements OnInit {

  @Input() shopName;

  @Input() currentUserName = '';

  @Input() deviceType = '';

  @Input() selectedProductCategory = '';

  echartOption;

  timer;

  respText;

  waterMark;

  chartParam: YieldParam = new YieldParam();

  constructor(private httpService: ApiService, private echartService: EchartOptionService) { }

  ngOnInit() {
    this.getDefaultProductCategory();
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
        this.drawChart();
      },
      (error) => {
        console.log(error);
      }
    );
  }

  drawChart() {
    this.chartParam.shopName = this.shopName;
    this.chartParam.productCategory = this.selectedProductCategory;
    const nowDate: Date = new Date();
    const currentTime: string = nowDate.toLocaleString();
    this.waterMark = 'BOECD Confidential@' + this.currentUserName + '\n' + currentTime + '@' + localStorage.getItem('currentIP');

    const url = '/echart/warehouse/Grade';

    this.httpService.post(url, this.chartParam).subscribe(
      (res) => {
        this.respText = res;
        this.echartOption = this.echartService.getOption_warehouseGrade('库存等级', this.respText, this.waterMark, this.deviceType);
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
