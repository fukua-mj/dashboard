import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { ProductionChartOptionService } from 'app/production/common/production-chart-option.service';
import { ApiService } from 'app/common/service/api/api.service';
import { YieldParam } from 'app/production/common/model/yieldParam';
import { EchartWatermarkService } from 'app/common/service/echar-watermark.service';

@Component({
  selector: 'app-inout',
  templateUrl: './inout.component.html',
  styleUrls: ['./../../pro-eac/pro-eac.component.css']
})
export class InoutComponent implements OnInit, OnDestroy {

  @Input() currentUserName;

  @Input() deviceType;

  @Input() shopName;

  respText;

  productionInOutChartOption;

  private inOutTimer;

  inOutParam: YieldParam = new YieldParam();

  waterMark: string;

  waterMarkObject: any;

  waterMarkIndex = 0;

  constructor(private echartService: ProductionChartOptionService, private waterMarkService: EchartWatermarkService,
    private httpService: ApiService, ) { }

  ngOnInit() {
/*     this.test(); */
    this.drawproductionInOutChart();
  }

  ngOnDestroy() {
    this.clear_task_ProductionInputOutput();
  }

/*   test() {
    this.httpService.get('/echart/production/test').subscribe(
      (res) => {
        debugger;
        let keyIn: string;
        keyIn = <string>res['keyIn'];
        console.log(keyIn);
      },
      (error) => {

      }
    )
  } */

  drawproductionInOutChart() {
    this.inOutParam.shopName = this.shopName;
    this.inOutParam.deviceType = this.deviceType;
    const nowDate: Date = new Date();
    const currentTime: string = nowDate.toLocaleString();
    this.waterMark = 'BOECD Confidential@' + this.currentUserName + '\n' + currentTime + '@' + localStorage.getItem('currentIP');
    this.httpService.post('/echart/production/getProductionInputOutput', this.inOutParam).subscribe(
      (res) => {
        this.respText = res;
        this.productionInOutChartOption = this.echartService.getOptionInputOutput(this.shopName + ' 分厂投入产出',
          this.respText, this.waterMark, this.deviceType);
      },
      (error) => {

      }
    );
  }

  task_ProductionInputOutput() {
    this.inOutTimer = setInterval(() => {
      this.drawproductionInOutChart();
    }, 300000);
  }

  clear_task_ProductionInputOutput() {
    if (this.inOutTimer) {
      clearInterval(this.inOutTimer);
    }
  }

  waterMarkChange() {
    switch (this.waterMarkIndex) {
      case 0:
        this.waterMarkObject = this.waterMarkService.getWaterMark12(this.deviceType, this.waterMark);
        break;
      case 1:
        this.waterMarkObject = this.waterMarkService.getWaterMark9(this.deviceType, this.waterMark);
        break;
      case 2:
        this.waterMarkObject = this.waterMarkService.getWaterMark8(this.deviceType, this.waterMark);
        break;
      case 3:
        this.waterMarkObject = this.waterMarkService.getWaterMark6(this.deviceType, this.waterMark);
        break;
      case 4:
        this.waterMarkObject = this.waterMarkService.getWaterMark4(this.deviceType, this.waterMark);
        break;
      case 5:
        this.waterMarkObject = this.waterMarkService.getWaterMark12(this.deviceType, this.waterMark);
        break;

      default:
        break;
    }

    this.productionInOutChartOption = this.echartService.getOptionInputOutputFlexible(this.shopName + ' 分厂投入产出',
      this.respText, this.waterMarkObject, this.deviceType);

    if (this.waterMarkIndex < 5) {
      this.waterMarkIndex++;
    } else {
      this.waterMarkIndex = 0;
    }
  }

}
