import { Component, OnInit, Input } from '@angular/core';
import { YieldParam } from 'app/production/common/model/yieldParam';
import { ApiService } from 'app/common/service/api/api.service';
import { EchartOptionService } from 'app/quality/common/echart-option.service';

@Component({
  selector: 'app-cg1view',
  templateUrl: './cg1view.component.html',
  styleUrls: ['./cg1view.component.css']
})
export class Cg1viewComponent implements OnInit {

  @Input() currentUserName = '';

  @Input() deviceType = '';

  shopName = 'MODULE';

  @Input() dataType;

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
      }
    };

    let url;
    if (this.dataType === 'WIP/Move') {
      url = '/echart/quality/CGWipCategory';
    } else if (this.dataType === 'CUM') {
      url = '/echart/quality/CumYieldCategory';
    } else if (this.dataType === 'DPPM/LRR') {
      url = '/echart/quality/DppmLrrCategory';
    } else if (this.dataType === 'InputOutput') {
      url = '/echart/quality/InputOutputCategory';
    }

    this.httpService.get(url, options).subscribe(
      (res) => {
        this.productCategory = <string[]>res;
        this.selectedProductionCategory = this.productCategory[0];
        this.drawChart();
      },
      (error) => { console.log(error); }
    );
  }

  drawChart() {
    this.chartParam.productCategory = this.selectedProductionCategory;
    this.chartParam.deviceType = this.deviceType;
    const nowDate: Date = new Date();
    const currentTime: string = nowDate.toLocaleString();
    this.waterMark = 'BOECD Confidential@' + this.currentUserName + '\n' + currentTime + '@' + localStorage.getItem('currentIP');

    let url;
    if (this.dataType === 'WIP/Move') {
      url = '/echart/quality/CGWipMove';
    } else if (this.dataType === 'CUM') {
      url = '/echart/quality/CumYield';
    } else if (this.dataType === 'DPPM/LRR') {
      url = '/echart/quality/DppmLrr';
    } else if (this.dataType === 'InputOutput') {
      url = '/echart/quality/InputOutput';
    }

    this.httpService.post(url, this.chartParam).subscribe(
      (res) => {
        this.respText = res;
        console.log('this.waterMark:' + this.waterMark);

        if (this.dataType === 'WIP/Move') {
          this.echartOption = this.echartService.getOption_WipMove(this.dataType, this.respText, this.waterMark, this.deviceType);
        } else if (this.dataType === 'CUM') {
          this.echartOption = this.echartService.getOption_CumYield(this.dataType, this.respText, this.waterMark, this.deviceType);
        } else if (this.dataType === 'DPPM/LRR') {
          this.echartOption = this.echartService.getOption_DppmLrr(this.dataType, this.respText, this.waterMark, this.deviceType);
        } else if (this.dataType === 'InputOutput') {
          this.echartOption = this.echartService.getOption_InputOutput(this.dataType, this.respText, this.waterMark, this.deviceType);
        }

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
