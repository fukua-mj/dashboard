import { Component, OnInit, Input } from '@angular/core';
import { YieldParam } from 'app/production/common/model/yieldParam';
import { ApiService } from 'app/common/service/api/api.service';
import { EchartOptionService } from '../echart-option.service';

@Component({
  selector: 'app-warehouse-total',
  templateUrl: './warehouse-total.component.html',
  styleUrls: ['./warehouse-total.component.css']
})
export class WarehouseTotalComponent implements OnInit {

  @Input() shopName;

  @Input() currentUserName = '';

  @Input() deviceType = '';

  echartOption;

  timer;

  respText;

  waterMark;

  chartParam: YieldParam = new YieldParam();

  constructor(private httpService: ApiService, private echartService: EchartOptionService) { }

  ngOnInit() {

    this.drawChart();
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
        this.echartOption = this.echartService.getOption_warehouse(title, this.respText, this.waterMark, this.deviceType);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  chartClick(event) {
    
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
