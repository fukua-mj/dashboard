import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from 'app/common/service/api/api.service';
import { YieldechartOptionService } from '../yieldechart-option.service';
import { YieldParam } from 'app/production/common/model/yieldParam';

@Component({
  selector: 'app-bpshop',
  templateUrl: './bpshop.component.html',
  styleUrls: ['./../../../production/pro-eac/pro-eac.component.css']
})
export class BpshopComponent implements OnInit {

  @Input() currentUserName = '';

  @Input() deviceType = '';

  @Input() shopName = '';

  @Input() processType = '';

  @Input() categoryURL = '';

  @Input() chartURL = '';

  @Input() dataType = '';

  @Input() lineName = '';

  selectedProductionType = 'Production';

  productCategory: string[];

  selectedProductionCategory = '';

  echartOption;

  timer;

  respText;

  waterMark;

  chartParam: YieldParam = new YieldParam();

  constructor(private httpService: ApiService, private echartService: YieldechartOptionService) { }

  ngOnInit() {
    if (this.shopName == 'EVEN') {
      this.lineName = '-';
    }

    this.getProductCategory();

  }

  getProductCategory() {
    const options = {
      params: {
        shopName: this.shopName,
        productionType: this.selectedProductionType,
        processType: this.processType,
        dataType: this.dataType,
        lineName: this.lineName
      }
    };
    let url;
    if (this.shopName === 'BP') {
      url = '/echart/yield/yieldProductCategory';
    } else if (this.shopName === 'EVEN') {
      url = '/echart/yield/yieldEACMDLCategory';
    } else if (this.shopName === 'EAC' || this.shopName === 'MODULE') {
      if (this.processType === 'MDLMAINCUM') {
        url = '/echart/yield/yieldMDLCUMCategory';
      } else {
        url = '/echart/yield/yieldEACMDLCategory';
      }
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

  productionTypeClicked() {
    this.getProductCategory();
    //this.drawChart();
  }

  drawChart() {
    this.chartParam.productCategory = this.selectedProductionCategory;
    this.chartParam.productionType = this.selectedProductionType;
    this.chartParam.shopName = this.shopName;
    this.chartParam.processtype = this.processType;
    this.chartParam.linename = this.lineName;
    this.chartParam.datatype = this.dataType;
    this.chartParam.deviceType = this.deviceType;
    const nowDate: Date = new Date();
    const currentTime: string = nowDate.toLocaleString();
    this.waterMark = 'BOECD Confidential@' + this.currentUserName + '\n' + currentTime + '@' + localStorage.getItem('currentIP');
    let url;
    if (this.shopName === 'BP') {
      url = '/echart/yield/yield';
    } else if (this.shopName === 'EVEN') {
      url = '/echart/yield/yieldEACMDL';
    } else if (this.shopName === 'EAC' || this.shopName === 'MODULE') {
      if (this.processType === 'MDLMAINCUM') {
        url = '/echart/yield/yieldMDLCUM';
      } else {
        url = '/echart/yield/yieldEACMDL';
      }
    }

    this.httpService.post(url, this.chartParam).subscribe(
      (res) => {
        this.respText = res;
        let title = '';
        if (this.processType == 'E31000R_TFE_AOI_REVIEW') {
          title = 'TFE AOI';
        } else {
          title = this.processType;
        }
        this.echartOption = this.echartService.getOption_yield(title + ' 良率指标', this.respText, this.waterMark, this.deviceType);
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
