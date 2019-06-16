import { Component, OnInit, Input } from '@angular/core';
import { YieldParam } from 'app/production/common/model/yieldParam';
import { ApiService } from 'app/common/service/api/api.service';
import { EchartOptionService } from 'app/quality/common/echart-option.service';

@Component({
  selector: 'app-qaline',
  templateUrl: './qaline.component.html',
  styleUrls: ['./qaline.component.css']
})
export class QalineComponent implements OnInit {

  
  @Input() currentUserName;

  @Input() deviceType;

  @Input() shopName;

  @Input() processType;

  @Input() dataType;

  lineName: string[];

  selectedLineName = 'LINE01';

  selectedProductionType = 'Production';

  productCategory: string[];

  selectedProductionCategory :string;

  echartOption;

  timer;

  respText;

  waterMark;

  chartParam: YieldParam = new YieldParam();

  constructor(private httpService: ApiService, private echartService: EchartOptionService) { }

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
        lineName: this.selectedLineName
      }
    };

    let url = '/echart/quality/getMdlByLineCategory';     

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
    this.chartParam.shopName = this.shopName;
    this.chartParam.processtype = this.processType;
    this.chartParam.linename = this.selectedLineName;
    this.chartParam.datatype = this.dataType;
    this.chartParam.deviceType = this.deviceType;
    const nowDate: Date = new Date();
    const currentTime: string = nowDate.toLocaleString();
    this.waterMark = 'BOECD Confidential@' + this.currentUserName + '\n' + currentTime + '@' + localStorage.getItem('currentIP');

    let url = '/echart/quality/getOption_QaByLine'

    this.httpService.post(url, this.chartParam).subscribe(
      (res) => {
        this.respText = res;
        console.log('this.waterMark:' + this.waterMark);
        this.echartOption = this.echartService.getOption_quality(this.processType + ' 良率指标', this.respText, this.waterMark, this.deviceType);
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
