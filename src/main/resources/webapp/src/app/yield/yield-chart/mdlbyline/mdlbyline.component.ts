import { Component, OnInit, Input } from '@angular/core';
import { YieldParam } from 'app/production/common/model/yieldParam';
import { ApiService } from 'app/common/service/api/api.service';
import { YieldechartOptionService } from '../yieldechart-option.service';

@Component({
  selector: 'app-mdlbyline',
  templateUrl: './mdlbyline.component.html',
  styleUrls: ['./mdlbyline.component.css']
})
export class MdlbylineComponent implements OnInit {
  
  @Input() currentUserName;

  @Input() deviceType;

  @Input() shopName;

  @Input() processType;

  @Input() categoryURL;

  @Input() chartURL;

  @Input() dataType;

  lineName: string[];

  selectedLineName = 'LINE01';

  selectedProductionType = 'Production';

  productCategory: string[];

  selectedProductionCategory = '6.39QHD';

  echartOption;

  timer;

  respText;

  waterMark;

  chartParam: YieldParam = new YieldParam();

  constructor(private httpService: ApiService, private echartService: YieldechartOptionService) { }

  ngOnInit() {

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
      'LINE12'
    ];

    this.getProductCategory();

    //this.drawChart();
  }

  getProductCategory() {
    const options = {
      params: {
        shopName: this.shopName,
        productionType: this.selectedProductionType,
        processType: this.processType,
        dataType: this.dataType,
        lineName: this.selectedLineName
      }
    };

    let url;
    if (this.processType === 'MDLBYLINECUM') {
      url = '/echart/yield/yieldMDLCUMCategory';
    } else {
      url = '/echart/yield/yieldEACMDLCategory';
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
    this.chartParam.linename = this.selectedLineName;
    this.chartParam.datatype = this.dataType;
    this.chartParam.deviceType = this.deviceType;
    const nowDate: Date = new Date();
    const currentTime: string = nowDate.toLocaleString();
    this.waterMark = 'BOECD Confidential@' + this.currentUserName + '\n' + currentTime + '@' + localStorage.getItem('currentIP');

    let url;
    if (this.processType === 'MDLBYLINECUM') {
      url = '/echart/yield/yieldMDLCUM';
    } else {
      url = '/echart/yield/yieldEACMDL';
    }

    this.httpService.post(url, this.chartParam).subscribe(
      (res) => {
        this.respText = res;
        console.log('this.waterMark:' + this.waterMark);
        this.echartOption = this.echartService.getOption_yield(this.processType + ' 良率指标', this.respText, this.waterMark, this.deviceType);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  clear_Timer() {
    this.timer = setInterval(() => {
      this.drawChart();
    }, 300000);
  }

  start_Timer() {
    if (this.timer) {
      clearInterval(this.timer);
    }
  }

}
