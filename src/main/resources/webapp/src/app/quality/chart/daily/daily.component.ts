import { Component, OnInit, Input } from '@angular/core';
import { YieldParam } from 'app/production/common/model/yieldParam';
import { ApiService } from 'app/common/service/api/api.service';
import { EchartOptionService } from 'app/quality/common/echart-option.service';
import { DailyInfo } from 'app/quality/common/dailyinfo';

@Component({
  selector: 'app-daily',
  templateUrl: './daily.component.html',
  styleUrls: ['./daily.component.css']
})
export class DailyComponent implements OnInit {

  @Input() currentUserName = '';

  @Input() deviceType = '';

  @Input() shopName = '';

  @Input() processType = '';

  @Input() dataType;

  tableTitle: String = '';

  selectedProductionType = 'Production';

  productCategory: string[];

  selectedProductionCategory = '';

  echartOption;

  timer;

  respText;

  waterMark;

  chartParam: YieldParam = new YieldParam();

  cols: any[];

  DailyInfoList: DailyInfo[];

  selectedDailyInfo: DailyInfo;

  rowNumber: Number;

  constructor(private httpService: ApiService, private echartService: EchartOptionService) { }

  ngOnInit() {
    if (this.processType == 'M71000N') {
      this.tableTitle = 'ET';
    } else {
      this.tableTitle = 'APP';
    }

    this.cols = [
      { field: 'productcategory', header: '产品类型' },
      { field: 'productiontype', header: '产品阶段' },
      { field: 'description', header: '描述' },
      { field: 'in', header: 'IN' },
      { field: 'out', header: 'OUT' },
    ];

    this.getProductCategory();
    if (this.deviceType == 'tv') {
      this.rowNumber = 9;
    } else if (this.deviceType == 'monitor') {
      this.rowNumber = 5;
    }
  }

  getProductCategory() {
    const options = {
      params: {
        shopName: this.shopName,
        productionType: this.selectedProductionType,
        processType: this.processType,
        dataType: this.dataType
      }
    };
    const url = '/echart/quality/dailyCategory';

    this.httpService.get(url, options).subscribe(
      (res) => {
        this.productCategory = <string[]>res;
        this.selectedProductionCategory = this.productCategory[0];
        this.drawChart();
        this.drawTable();
      },
      (error) => { console.log(error); }
    );
  }

  productionTypeClicked() {
    this.getProductCategory();
  }

  drawChart() {
    this.chartParam.productCategory = this.selectedProductionCategory;
    this.chartParam.productionType = this.selectedProductionType;
    this.chartParam.datatype = this.dataType;
    this.chartParam.processtype = this.processType;
    this.chartParam.deviceType = this.deviceType;
    const nowDate: Date = new Date();
    const currentTime: string = nowDate.toLocaleString();
    this.waterMark = 'BOECD Confidential@' + this.currentUserName + '\n' + currentTime + '@' + localStorage.getItem('currentIP');
    const url = '/echart/quality/daily';

    this.httpService.post(url, this.chartParam).subscribe(
      (res) => {
        this.respText = res;
        let title = '';
        if (this.processType == 'M71000N') {
          title = 'ET';
        } else {
          title = 'APP';
        }
        this.echartOption = this.echartService.getOption_oqaDaily(title, this.respText, this.waterMark, this.deviceType);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  drawTable() {
    const options = {
      params: {
        productionType: this.selectedProductionType,
        processType: this.processType,
        productCategory: this.selectedProductionCategory
      }
    };
    this.httpService.get('/echart/quality/dailyTable', options).subscribe(
      (res) => {
        console.log(res);
        this.DailyInfoList = <DailyInfo[]>res;
      },
      (error) => { console.log(error); }
    );
  }

  start_Timer() {
    this.timer = setInterval(() => {
      this.drawChart();
      this.drawTable();
    }, 300000);
  }

  clear_Timer() {
    if (this.timer) {
      clearInterval(this.timer);
    }
  }

  onRowSelect(event) {

  }

}
