import { Component, OnInit, Input } from '@angular/core';
import { OutQty } from '../../outqty';
import { YieldParam } from 'app/production/common/model/yieldParam';
import { ApiService } from 'app/common/service/api/api.service';
import { EqpinfoChartOptionService } from '../../eqpinfo-chart-option.service';

@Component({
  selector: 'app-statesmonitormdltotal',
  templateUrl: './statesmonitormdltotal.component.html',
  styleUrls: ['./statesmonitormdltotal.component.css']
})
export class StatesmonitormdltotalComponent implements OnInit {
  @Input() currentUserName = '';

  @Input() deviceType = '';

  @Input() shopName = '';

  @Input() processType;

  lineName: any[];

  selectedLineName = '';

  date: string[];

  selectedDate = 'Today';

  echartOption;

  timer;

  respText;

  waterMark;

  title: string;

  cols: any[];

  outQtyList: OutQty[];

  chartParam: YieldParam = new YieldParam();

  display_table: boolean;

  constructor(private httpService: ApiService, private echartService: EqpinfoChartOptionService) { }

  ngOnInit() {

    this.cols = [
      { field: 'time', header: 'time' },
      { field: 'h_06', header: '6' },
      { field: 'h_07', header: '7' },
      { field: 'h_08', header: '8' },
      { field: 'h_09', header: '9' },
      { field: 'h_10', header: '10' },
      { field: 'h_11', header: '11' },
      { field: 'h_12', header: '12' },
      { field: 'h_13', header: '13' },
      { field: 'h_14', header: '14' },
      { field: 'h_15', header: '15' },
      { field: 'h_16', header: '16' },
      { field: 'h_17', header: '17' },
      { field: 'h_18', header: '18' },
      { field: 'h_19', header: '19' },
      { field: 'h_20', header: '20' },
      { field: 'h_21', header: '21' },
      { field: 'h_22', header: '22' },
      { field: 'h_23', header: '23' },
      { field: 'h_00', header: '0' },
      { field: 'h_01', header: '1' },
      { field: 'h_02', header: '2' },
      { field: 'h_03', header: '3' },
      { field: 'h_04', header: '4' },
      { field: 'h_05', header: '5' }
    ];

    if (this.shopName === 'MODULE') {
      this.date = ['Today', 'Yesterday', 'Before Yesterday'];
      if (this.processType === 'Total') {
        this.display_table = false;
      } else {
        this.display_table = true;
      }
    } else {
      this.date = ['Today', 'Yesterday'];
      this.display_table = true;
    }

    this.getLineName();
  }

  getOutQty() {
    const options = {
      params: {
        shopName: this.shopName,
        processType: this.processType,
        date: this.selectedDate,
        lineName: this.selectedLineName
      }
    };
    let url = '';

    url = '/echart/statesmonitor/getQutQty';

    this.httpService.get(url, options).subscribe(
      (res) => {
        this.outQtyList = <OutQty[]>res;
      },
      (error) => { console.log(error); }
    );
  }

  getLineName() {
    if (this.shopName === 'MODULE') {
      if (this.processType === 'Total') {
        this.lineName = [
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
          'LINE19'
        ];
      } else {
        this.lineName = ['LINE00']
      }
      this.selectedLineName = this.lineName[0];
      this.drawChart();
    } else {
      const options = {
        params: {
          shopName: this.shopName,
          processType: this.processType,
        }
      };
      let url = '';

      url = '/echart/statesmonitor/getMachineName';

      this.httpService.get(url, options).subscribe(
        (res) => {
          this.lineName = <string[]>res;
          this.selectedLineName = this.lineName[0];
          this.drawChart();
        },
        (error) => { console.log(error); }
      );
    }
  }

  productionTypeClicked() {
    this.getLineName();
  }

  drawChart() {
    this.chartParam.linename = this.selectedLineName;
    this.chartParam.processtype = this.processType;
    this.chartParam.date = this.selectedDate;
    const nowDate: Date = new Date();
    const currentTime: string = nowDate.toLocaleString();
    this.waterMark = 'BOECD Confidential@' + this.currentUserName + '\n' + currentTime + '@' + localStorage.getItem('currentIP');
    let url = '';
    if (this.shopName === 'MODULE') {
      if (this.processType === 'Total') {
        url = '/echart/statesmonitor/statesmonitormdlTotal';
      } else {
        url = '/echart/statesmonitor/statesmonitormdlRadio';
      }
    } else {
      url = '/echart/statesmonitor/statesmonitor';
    }


    this.httpService.post(url, this.chartParam).subscribe(
      (res) => {
        this.respText = res;
        console.log('this.waterMark:' + this.waterMark);

        this.echartOption = this.echartService.getOption_statesMonitor(this.processType, this.respText, this.waterMark, this.deviceType);
        this.getOutQty();
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
