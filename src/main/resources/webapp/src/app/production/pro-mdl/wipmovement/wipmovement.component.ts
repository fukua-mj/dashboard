import { Component, OnInit, Input } from '@angular/core';
import { YieldParam } from 'app/production/common/model/yieldParam';
import { ApiService } from 'app/common/service/api/api.service';
import { ProductionChartOptionService } from 'app/production/common/production-chart-option.service';

@Component({
  selector: 'app-wipmovement',
  templateUrl: './wipmovement.component.html',
  styleUrls: ['./../../pro-eac/pro-eac.component.css']
})
export class WipmovementComponent implements OnInit {

  @Input() currentUserName;

  @Input() deviceType;

  @Input() shopName;

  wipMoveParam: YieldParam = new YieldParam();

  waterMark: string;

  respText;

  selectedWIPMoveProductionType = 'Production';

  wipMoveProductCategory:string[];

  selectedWIPMoveProductionCategory = 'ALL';

  productionWIPMoveChartOption;

  wipMoveTimer;

  constructor(private httpService: ApiService, private echartService: ProductionChartOptionService) { }

  ngOnInit() {

    this.getproductionWipMoveProductCategory();

  }

  //#region WIP/Move
  getproductionWipMoveProductCategory() {
    const options = {
      params: { 
        shopName: this.shopName, 
        productionType: this.selectedWIPMoveProductionType,
        dataType:'MAIN'
      }
    };
    this.httpService.get('/echart/production/wipMoveCategory', options).subscribe(
      (res) => {
        this.wipMoveProductCategory = <string[]>res;
        this.selectedWIPMoveProductionCategory = this.wipMoveProductCategory[0];
        this.drawproductionWipMoveChart();
      },
      (error) => { console.log(error); }
    );
  }

  WIPMoveProductionTypeClicked() {
    this.getproductionWipMoveProductCategory();
    this.drawproductionWipMoveChart();
  }

  drawproductionWipMoveChart() {
    this.wipMoveParam.productCategory = this.selectedWIPMoveProductionCategory;
    this.wipMoveParam.productionType = this.selectedWIPMoveProductionType;
    this.wipMoveParam.shopName = this.shopName;
    this.wipMoveParam.datatype = 'MAIN';
/*     this.wipMoveParam.deviceType = this.deviceType; */
    const nowDate: Date = new Date();
    const currentTime: string = nowDate.toLocaleString();
    this.waterMark = 'BOECD Confidential@' + this.currentUserName + '\n' + currentTime + '@' + localStorage.getItem('currentIP');
    this.httpService.post('/echart/production/wipMove', this.wipMoveParam).subscribe(
      (res) => {
        this.respText = res;
        this.productionWIPMoveChartOption = this.echartService.getOption_WIPMove(this.shopName+' 分厂WIP/Movement', this.respText, this.waterMark, this.deviceType);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  task_ProductionWIPMove() {
    this.wipMoveTimer = setInterval(() => {
      this.drawproductionWipMoveChart();
    }, 300000);
  }

  clear_task_ProductionWIPMove() {
    if (this.wipMoveTimer) {
      clearInterval(this.wipMoveTimer);
    }
  }
  //#endregion


}
