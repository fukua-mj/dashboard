import { Component, OnInit, Input } from '@angular/core';
import { OutQty } from '../../outqty';
import { YieldParam } from 'app/production/common/model/yieldParam';
import { ApiService } from 'app/common/service/api/api.service';
import { EqpinfoChartOptionService } from '../../eqpinfo-chart-option.service';
import { EchartService } from 'app/common/service/echart.service';

@Component({
  selector: 'app-statesmonitormdl',
  templateUrl: './statesmonitormdl.component.html',
  styleUrls: ['./statesmonitormdl.component.css']
})
export class StatesmonitormdlComponent implements OnInit {

  @Input() currentUserName = '';

  @Input() deviceType = '';

  @Input() shopName = '';

  @Input() processType;

  divid: string = '';

  divIndex: string = localStorage.getItem('index');

  lineName: any[];

  selectedLineName: string[];

  date: string[];

  selectedDate = 'Today';

  echartOption;

  timer;

  respText;

  waterMark;

  title: string;

  cols: any[];

  AllButtonValue: string;

  outQtyList: OutQty[];

  chartParam: YieldParam = new YieldParam();

  constructor(private httpService: ApiService, private echartService: EqpinfoChartOptionService, private echartCommonService: EchartService) {
    let divIndexTemp = + this.divIndex;
    divIndexTemp++;
    localStorage.setItem('index', divIndexTemp.toString());
    this.divid = 'MDLStatesMonitor' + this.divIndex;
  }

  ngOnInit() {

    this.cols = [
      { field: 'time', header: 'Time' },
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

    this.date = ['Today', 'Yesterday', 'BeforeYesterday'];

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
    const options = {
      params: {
        shopName: this.shopName,
        processType: this.processType,
      }
    };
    let url = '';

    url = '/echart/statesmonitor/getMachineNameMdl';

    this.httpService.get(url, options).subscribe(
      (res) => {
        this.lineName = <string[]>res;
        this.selectedLineName = [this.lineName[0]];
        this.drawChart();
      },
      (error) => { console.log(error); }
    );
  }

  AllChecked() {
    if (this.AllButtonValue == 'ALL') {
      this.selectedLineName = this.lineName;
    } else {
      this.selectedLineName = [];
    }
    this.drawChart();
  }

  productionTypeClicked() {
    this.getLineName();
  }

  drawChart() {
    this.chartParam.lineNames = this.selectedLineName;
    this.chartParam.processtype = this.processType;
    this.chartParam.date = this.selectedDate;
    const nowDate: Date = new Date();
    const currentTime: string = nowDate.toLocaleString();
    this.waterMark = 'BOECD Confidential@' + this.currentUserName + '\n' + currentTime + '@' + localStorage.getItem('currentIP');
    let url = '';
    url = '/echart/statesmonitor/statesmonitorMdl';


    this.httpService.post(url, this.chartParam).subscribe(
      (res) => {
        this.respText = res;
        const myChart = this.echartCommonService.init(document.getElementById(this.divid));
        this.echartOption = this.echartService.getOption_statesMonitor(this.processType + ' 设备状态监控', this.respText, this.waterMark, this.deviceType);
        myChart.clear();
        myChart.setOption(this.echartOption);
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

  getChartHeight() {
    if (this.deviceType == 'tv') {
      return '678px';
    } else {
      return '458px';
    }
  }

}
