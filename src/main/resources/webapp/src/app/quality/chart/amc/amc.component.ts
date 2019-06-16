import { Component, OnInit, Input } from '@angular/core';
import { YieldParam } from 'app/production/common/model/yieldParam';
import { ApiService } from 'app/common/service/api/api.service';
import { EchartOptionService } from 'app/quality/common/echart-option.service';

@Component({
  selector: 'app-amc',
  templateUrl: './amc.component.html',
  styleUrls: ['./amc.component.css']
})
export class AmcComponent implements OnInit {

  @Input() dataType;

  @Input() currentUserName;

  @Input() deviceType;

  chartParam: YieldParam = new YieldParam();

  echartOption: any;

  waterMark: string;

  respText: any;

  timer: any;

  constructor(private httpService: ApiService, private echartService: EchartOptionService) { }

  ngOnInit() {
    this.drawChart();
  }

  drawChart() {
    this.chartParam.datatype = this.dataType;
    this.chartParam.deviceType = this.deviceType;
    const nowDate: Date = new Date();
    const currentTime: string = nowDate.toLocaleString();
    this.waterMark = 'BOECD Confidential@' + this.currentUserName + '\n' + currentTime + '@' + localStorage.getItem('currentIP');

    let url = '/echart/quality/getOpt_AMCData';

    this.httpService.post(url, this.chartParam).subscribe(
      (res) => {
        this.respText = res;
        console.log('this.waterMark:' + this.waterMark);
        this.echartOption = this.echartService.getOption_AMC(this.dataType + ' Trend', this.respText, this.dataType, this.waterMark, this.deviceType);
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
