import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { ApiService } from 'app/common/service/api/api.service';
import { YieldParam } from 'app/production/common/model/yieldParam';
import { ProductionChartOptionService } from 'app/production/common/production-chart-option.service';

@Component({
  selector: 'app-dummy',
  templateUrl: './dummy.component.html',
  styleUrls: ['./../../pro-eac/pro-eac.component.css']
})
export class DummyComponent implements OnInit, OnDestroy {

  @Input() currentUserName;

  @Input() deviceType;

  @Input() shopName;

  respText;

  echartOption;

  private timer;

  chartParam: YieldParam = new YieldParam();

  waterMark: string;

  constructor(private echartService: ProductionChartOptionService,
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
    this.httpService.post('/echart/production/getDummyOption', this.chartParam).subscribe(
      (res) => {
        this.respText = res;
        this.echartOption = this.echartService.getOptionDummy(this.shopName + ' Dummy使用情况',
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
