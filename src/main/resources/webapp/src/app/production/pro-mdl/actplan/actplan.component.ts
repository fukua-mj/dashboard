import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { YieldParam } from 'app/production/common/model/yieldParam';
import { ApiService } from 'app/common/service/api/api.service';
import { ProductionChartOptionService } from 'app/production/common/production-chart-option.service';

@Component({
  selector: 'app-actplan',
  templateUrl: './actplan.component.html',
  styleUrls: ['./../../pro-eac/pro-eac.component.css']
})
export class ActplanComponent implements OnInit , OnDestroy {

  @Input() currentUserName;

  @Input() deviceType;

  @Input() shopName;

  actPlanParam: YieldParam = new YieldParam();

  dataType: string;

  inOutType = 'IN';

  productionType = 'Production';

  actPlanProductCategory: string[];

  selectedactPlanProductCategory = 'ALL';

  waterMark: string;

  respText;

  productionActPlanChartOption;

  actPlanTimer;

  constructor(private httpService: ApiService, private echartService: ProductionChartOptionService) { }

  ngOnInit() {
    this.getproductionActPlanProductCategory();
    this.drawproductionActPlanChart();
  }

  ngOnDestroy() {
    console.log('ACT Plan Destroy');
  }

  getproductionActPlanProductCategory() {
    this.actPlanParam.datatype = this.dataType;
    this.actPlanParam.shopName = this.shopName;
    const options = {
      params: { shopName: this.shopName }
    };
    this.httpService.get('/echart/production/actplanCategory', options).subscribe(
      (res) => {
        this.actPlanProductCategory = <string[]>res;
      },
      (error) => { console.log(error); }
    );
  }

  drawproductionActPlanChart() {
    this.actPlanParam.productCategory = this.selectedactPlanProductCategory;
    this.actPlanParam.datatype = this.inOutType;
    this.actPlanParam.shopName = this.shopName;
    const nowDate: Date = new Date();
    const currentTime: string = nowDate.toLocaleString();
    this.waterMark = 'BOECD Confidential@' + this.currentUserName + '\n' + currentTime + '@' + localStorage.getItem('currentIP');
    this.httpService.post('/echart/production/actplan', this.actPlanParam).subscribe(
      (res) => {
        this.respText = res;
        this.productionActPlanChartOption = this.echartService.getOption_ActPlan(this.shopName + ' 分厂计划实绩',
          this.respText, this.waterMark, this.deviceType);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  task_ProductionActPlan() {
    this.actPlanTimer = setInterval(() => {
      this.drawproductionActPlanChart();
    }, 300000);
  }

  clear_task_ProductionActPlan() {
    if (this.actPlanTimer) {
      clearInterval(this.actPlanTimer);
    }
  }

}
