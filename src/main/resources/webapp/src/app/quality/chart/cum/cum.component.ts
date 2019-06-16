import { Component, OnInit, Input } from '@angular/core';
import { YieldParam } from 'app/production/common/model/yieldParam';
import { ApiService } from 'app/common/service/api/api.service';
import { EchartOptionService } from 'app/quality/common/echart-option.service';

@Component({
  selector: 'app-cum',
  templateUrl: './cum.component.html',
  styleUrls: ['./../../../production/pro-eac/pro-eac.component.css']
})
export class CumComponent implements OnInit {

  @Input() currentUserName = '';

  @Input() deviceType = '';

  @Input() shopName = '';

  @Input() processType = '';

  @Input() dataType;

  selectedProductionType = 'Production';

  productCategory: string[];

  selectedProductionCategory = '';

  echartOption;

  timer;

  respText;

  waterMark;

  chartParam: YieldParam = new YieldParam();

  constructor(private httpService: ApiService, private echartService: EchartOptionService) { }

  ngOnInit() {

    this.getProductCategory();
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
    const url = '/echart/quality/cumCategory';

    this.httpService.get(url, options).subscribe(
      (res) => {
        this.productCategory = <string[]>res;
        this.selectedProductionCategory = this.productCategory[0];
        this.drawChart();
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
    const url = '/echart/quality/cum';

    this.httpService.post(url, this.chartParam).subscribe(
      (res) => {
        this.respText = res;
        let title = '';
        if (this.processType == 'M71000N') {
          title = 'ET';
        } else {
          title = 'APP';
        }
        this.echartOption = this.echartService.getOption_quality(title , this.respText, this.waterMark, this.deviceType);      },
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
