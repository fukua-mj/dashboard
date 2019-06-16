import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from 'app/common/service/api/api.service';
import { EqpinfoChartOptionService } from '../../eqpinfo-chart-option.service';
import { YieldParam } from 'app/production/common/model/yieldParam';

@Component({
  selector: 'app-oee',
  templateUrl: './oee.component.html',
  styleUrls: ['./oee.component.css']

})
export class OeeComponent implements OnInit {

  @Input() currentUserName;

  @Input() deviceType;

  @Input() shopName;

  @Input() processType;

  chartParam: YieldParam = new YieldParam();

  MachineName: string[];

  selectedMachineName: any;

  waterMark: string;

  respText;

  echartOption;

  Timer;

  constructor(private httpService: ApiService, private echartService: EqpinfoChartOptionService) { }

  ngOnInit() {
    this.getMachineName();
  }

  getMachineName() {
    const options = {
      params: {
        shopName: this.shopName,
        processType: this.processType
      }
    };

    let url;
    if (this.shopName === 'MODULE') {
      url = '/echart/oee/getMDLLineName';
    } else {
      url = '/echart/oee/getMachineName';
    }

    this.httpService.get(url, options).subscribe(
      (res) => {
        this.MachineName = <string[]>res;
        this.selectedMachineName = this.MachineName[0];
        this.drawChart();
      },
      (error) => { console.log(error); }
    );
  }

  drawChart() {
    this.chartParam.linename = this.selectedMachineName;
    this.chartParam.shopName = this.shopName;
    this.chartParam.processtype = this.processType;
    this.chartParam.deviceType = this.deviceType;
    const nowDate: Date = new Date();
    const currentTime: string = nowDate.toLocaleString();
    this.waterMark = 'BOECD Confidential@' + this.currentUserName + '\n' + currentTime + '@' + localStorage.getItem('currentIP');

    let url = '';
    if (this.selectedMachineName === '设备别') {
      url = '/echart/oee/oeeByLineDifference';
    } else {
      url = '/echart/oee/oee';
    }

    this.httpService.post(url, this.chartParam).subscribe(
      (res) => {
        this.respText = res;
        console.log('this.waterMark:' + this.waterMark);
        this.echartOption = this.echartService.getOption_oee(this.processType + ' 稼动率',
          this.respText, this.selectedMachineName, this.waterMark, this.deviceType);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  start_Timer() {
    this.Timer = setInterval(() => {
      this.drawChart();
    }, 300000);
  }

  clear_Timer() {
    if (this.Timer) {
      clearInterval(this.Timer);
    }
  }

}
