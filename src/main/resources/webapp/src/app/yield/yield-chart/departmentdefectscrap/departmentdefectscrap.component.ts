import { Component, OnInit, Input } from '@angular/core';
import { YieldParam } from 'app/production/common/model/yieldParam';
import { ApiService } from 'app/common/service/api/api.service';
import { YieldechartOptionService } from '../yieldechart-option.service';

@Component({
  selector: 'app-departmentdefectscrap',
  templateUrl: './departmentdefectscrap.component.html',
  styleUrls: ['./../shoptotal/shoptotal.component.css']
})
export class DepartmentdefectscrapComponent implements OnInit {

  @Input() currentUserName;

  @Input() deviceType;

  @Input() shopName;

  @Input() dataType;

  @Input() processType;

  productCategory: string[];

  selectedProductionCategory = '';

  ChartOption1: any;

  ChartOption2: any;

  ChartOption3: any;

  ChartOption4: any;

  timer;

  respText;

  waterMark;

  chartParam: YieldParam = new YieldParam();

  constructor(private httpService: ApiService, private echartService: YieldechartOptionService) { }

  ngOnInit() {
    this.getProductCategory();
  }

  getProductCategory() {
    let shopName1 = '';
    if (this.shopName == 'EVEN') {
      shopName1 = 'EAC2';
    } else {
      shopName1 = this.shopName;
    }
    const options = {
      params: {
        shopName: shopName1,
        processType: this.processType
      }
    };
    let url;

    url = '/echart/yield/totalYieldProductCategory';

    this.httpService.get(url, options).subscribe(
      (res) => {
        this.productCategory = <string[]>res;
        this.selectedProductionCategory = this.productCategory[0];
        this.drawChart();
      },
      (error) => { console.log(error); }
    );
  }

  drawDepartmentChart(departmentName:string) {
    this.chartParam.shopName = this.shopName; // EVEN
    this.chartParam.processtype = this.processType; // ET_EVEN
    this.chartParam.productionType = 'Production';
    this.chartParam.productCategory = this.selectedProductionCategory;
    this.chartParam.datatype = departmentName; // SpecDepartmentName
    this.chartParam.deviceType = this.deviceType;

    const nowDate: Date = new Date();
    const currentTime: string = nowDate.toLocaleString();
    this.waterMark = 'BOECD Confidential@' + this.currentUserName + '\n' + currentTime + '@' + localStorage.getItem('currentIP');
    let url;
    if (this.dataType == 'Defect') {
      url = '/echart/yield/defectByDepartment';
    } else if(this.dataType == 'Scrap') {
      url = '/echart/yield/scrapByDepartment';
    }

    this.httpService.post(url, this.chartParam).subscribe(
      (res) => {
        this.respText = res;
        console.log('this.waterMark:' + this.waterMark);
        if (departmentName == 'EV') {
          this.ChartOption1 = this.echartService.getOption_yieldByDepartment(departmentName + '部门' + this.dataType, this.respText, this.waterMark, this.deviceType);
        } else if(departmentName == 'Mask') {
          this.ChartOption2 = this.echartService.getOption_yieldByDepartment(departmentName + '部门' + this.dataType, this.respText, this.waterMark, this.deviceType);
        } else if(departmentName == 'EN') {
          this.ChartOption3 = this.echartService.getOption_yieldByDepartment(departmentName + '部门' + this.dataType, this.respText, this.waterMark, this.deviceType);
        } else if(departmentName == 'PI') {
          this.ChartOption4 = this.echartService.getOption_yieldByDepartment(departmentName + '部门' + this.dataType, this.respText, this.waterMark, this.deviceType);
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }

  drawChart(){
    this.drawDepartmentChart('EV');
    this.drawDepartmentChart('Mask');
    this.drawDepartmentChart('PI');
    this.drawDepartmentChart('EN');
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
