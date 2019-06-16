import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from 'app/common/service/api/api.service';
import { ProductionChartOptionService } from 'app/production/common/production-chart-option.service';
import { YieldParam } from 'app/production/common/model/yieldParam';
import { ScrapEntity } from 'app/production/common/model/scrapentity';
import { DatetimeService } from 'app/common/service/datetime.service';

@Component({
  selector: 'app-scrap',
  templateUrl: './scrap.component.html',
  styleUrls: ['./scrap.component.css']
})
export class ScrapComponent implements OnInit {

  @Input() shopName;

  @Input() currentUserName;

  @Input() deviceType;

  cols: any[];

  DayScrapBarChartOption;

  DetailScrapPieChartOption;

  ProductCategoryList: string[];

  MonthWeekScrapList: ScrapEntity[];

  selectedProductCategory: string;

  chartParam: YieldParam = new YieldParam();

  waterMark: string;

  respText: any;

  selectDate: string;

  selectDateType = 'MONTH';

  selectedScrapValue: ScrapEntity = new ScrapEntity();

  rowNumber: number;

  timer: any;

  constructor(private httpService: ApiService, private echartService: ProductionChartOptionService,
    private dateService: DatetimeService) { }

  ngOnInit() {

    if (this.deviceType == 'tv') {
      this.rowNumber = 6;
    } else {
      this.rowNumber = 5;
    }

    this.cols = [
      { field: 'factoryDate', header: '日期' },
      { field: 'factoryName', header: '分厂' },
/*       { field: 'dateType', header: '日期类型' }, */
      { field: 'productCategory', header: '产品类型' },
      /*       { field: 'productionType', header: '产品阶段' }, */
      /* { field: 'causeDepartment', header: '责任科室' }, */
      /* { field: 'scrapQty', header: '数量' }, */
      { field: 'outQty', header: '产出数' },
      { field: 'totalScrap', header: '总报废数' },
      { field: 'inQty', header: '投入数' },
      { field: 'causeRatio', header: '百分比' }
    ];

    this.getDefaultMonth();
    this.getProductCategory();
  }

  getDefaultMonth() {
    this.selectDate = this.dateService.getThisMonth();
    console.log("this.selectDate:" + this.selectDate);
  }

  getProductCategory() {
    const options = {
      params: { shopName: this.shopName }
    };
    this.httpService.get('/echart/production/getScrapProductCategory', options).subscribe(
      (res) => {
        this.ProductCategoryList = <string[]>res;
        this.selectedProductCategory = this.ProductCategoryList[0];
        this.drawChart();
      },
      (error) => { console.log(error); }
    );
  }

  drawChart() {
    this.getMonthWeekGridValue();
    this.drawBarChart();
    this.drawPieChart();
  }

  getMonthWeekGridValue() {
    const options = {
      params: { shopName: this.shopName, productCategory: this.selectedProductCategory }
    };
    this.httpService.get('/echart/production/getScrapGridValue', options).subscribe(
      (res) => {
        this.MonthWeekScrapList = <ScrapEntity[]>res;
      },
      (error) => { console.log(error); }
    );
  }

  drawBarChart() {
    this.chartParam.shopName = this.shopName;
    this.chartParam.productCategory = this.selectedProductCategory;
    const nowDate: Date = new Date();
    const currentTime: string = nowDate.toLocaleString();
    this.waterMark = 'BOECD Confidential@' + this.currentUserName + '\n' + currentTime + '@' + localStorage.getItem('currentIP');
    this.httpService.post('/echart/production/dayScrapValue', this.chartParam).subscribe(
      (res) => {
        this.respText = res;
        console.log('this.waterMark:' + this.waterMark);
        this.DayScrapBarChartOption = this.echartService.getOPtion_DayScrapBrtChart(this.shopName + ' 分厂Scrap', this.respText, this.waterMark, this.deviceType);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  drawPieChart() {
    this.chartParam.shopName = this.shopName;
    this.chartParam.productCategory = this.selectedProductCategory;
    this.chartParam.date = this.selectDate;
    this.chartParam.datatype = this.selectDateType;
    const nowDate: Date = new Date();
    const currentTime: string = nowDate.toLocaleString();
    this.waterMark = 'BOECD Confidential@' + this.currentUserName + '\n' + currentTime + '@' + localStorage.getItem('currentIP');
    this.httpService.post('/echart/production/detailScrapValue', this.chartParam).subscribe(
      (res) => {
        this.respText = res;
        console.log('this.waterMark:' + this.waterMark);
        this.DetailScrapPieChartOption = this.echartService.getOPtion_DetailScrapPieChart(this.shopName + ' 分厂Scrap', this.respText, this.waterMark, this.deviceType);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  onRowSelect(event) {
    this.selectedScrapValue = event.data;
    this.selectDate = this.selectedScrapValue.factoryDate.substring(0, 4) + this.selectedScrapValue.factoryDate.substring(5);
    this.selectDateType = this.selectedScrapValue.dateType;
    this.drawPieChart();
  }

  chartClick(event) {
    this.selectDate = this.dateService.regularDayDate(event.name);
    this.selectDateType = 'DAY';
    this.drawPieChart();
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
