import { Component, OnInit, Input } from '@angular/core';
import { YieldParam } from 'app/production/common/model/yieldParam';
import { ApiService } from 'app/common/service/api/api.service';
import { ProductionChartOptionService } from 'app/production/common/production-chart-option.service';

@Component({
  selector: 'app-wipmove-byline',
  templateUrl: './wipmove-byline.component.html',
  styleUrls: ['./wipmove-byline.component.css']
})
export class WipmoveBylineComponent implements OnInit {

  @Input() currentUserName;

  @Input() deviceType;

  @Input() shopName;

  chartParam: YieldParam = new YieldParam();

  LineName: string[];

  selectedLineName = 'LINE01';

  waterMark: string;

  respText;

  echartOption;

  Timer;

  constructor(private httpService: ApiService, private echartService: ProductionChartOptionService) { }

  ngOnInit() {
    this.getLineName();
    this.drawChart();
  }

  getLineName() {
    /*     this.chartParam.shopName = this.shopName;
        const options = {
          params: { shopName: this.shopName }
        };
        this.httpService.get('/echart/production/getMDLLineName', options).subscribe(
          (res) => {
            this.LineName = <string[]>res;
          },
          (error) => { console.log(error); }
        ); */

    this.LineName = [
      'LINE01',
      'LINE02',
      'LINE03',
      'LINE04',
      'LINE05',
      'LINE06',
      'LINE07',
      'LINE08',
      'LINE09',
      'LINE10',
      'LINE11',
      'LINE12',
      'LINE13',
      'LINE14',
      'LINE15',
      'LINE16',
      'LINE17',
      'LINE18',
      'LINE19',
    ];
  }

  drawChart() {
    this.chartParam.linename = this.selectedLineName;
    this.chartParam.shopName = this.shopName;
    this.chartParam.deviceType = this.deviceType;
    this.chartParam.linetype = 'MAIN';
    const nowDate: Date = new Date();
    const currentTime: string = nowDate.toLocaleString();
    this.waterMark = 'BOECD Confidential@' + this.currentUserName + '\n' + currentTime + '@' + localStorage.getItem('currentIP');
    this.httpService.post('/echart/production/wipMoveByLine', this.chartParam).subscribe(
      (res) => {
        this.respText = res;
        console.log('this.waterMark:' + this.waterMark);
        this.echartOption = this.echartService.getOption_WIPMoveByLine(this.shopName + ' ' + this.selectedLineName + ' WIP/Move',
          this.respText, this.waterMark, this.deviceType);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  task_ProductionActPlan() {
    this.Timer = setInterval(() => {
      this.drawChart();
    }, 300000);
  }

  clear_task_ProductionActPlan() {
    if (this.Timer) {
      clearInterval(this.Timer);
    }
  }

}
