import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from 'app/common/service/api/api.service';
import { YieldParam } from 'app/production/common/model/yieldParam';
import { EqpinfoChartOptionService } from '../../eqpinfo-chart-option.service';

@Component({
  selector: 'app-prdmonitor',
  templateUrl: './prdmonitor.component.html',
  styleUrls: ['./prdmonitor.component.css']
})
export class PrdmonitorComponent implements OnInit {

  @Input() currentUserName = '';

  @Input() deviceType = '';

  @Input() shopName = '';

  respText;

  echartOption;

  private timer;

  chartParam: YieldParam = new YieldParam();

  waterMark: string;

  constructor(private echartService: EqpinfoChartOptionService,
    private httpService: ApiService, ) { }

  ngOnInit() {
    this.drawChart();
  }

  ngOnDestroy() {
    this.clear_Timer();
  }

  drawChart() {
    this.chartParam.shopName = this.shopName;
    this.chartParam.deviceType = this.deviceType;
    const nowDate: Date = new Date();
    const currentTime: string = nowDate.toLocaleString();
    this.waterMark = 'BOECD Confidential@' + this.currentUserName + '\n' + currentTime + '@' + localStorage.getItem('currentIP');
    this.httpService.post('/echart/oee/getPrdMonitorHeatMap', this.chartParam).subscribe(
      (res) => {
        this.respText = res;
        this.echartOption = this.echartService.getOption_OeePrdMonitorHeatMap(this.shopName + ' 产能热点图',
          this.respText, this.waterMark, this.deviceType);
      },
      (error) => {

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
