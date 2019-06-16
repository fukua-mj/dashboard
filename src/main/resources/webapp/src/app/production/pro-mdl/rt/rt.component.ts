import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { YieldParam } from 'app/production/common/model/yieldParam';
import { ApiService } from 'app/common/service/api/api.service';
import { ProductionChartOptionService } from 'app/production/common/production-chart-option.service';

@Component({
  selector: 'app-rt',
  templateUrl: './rt.component.html',
  styleUrls: ['./../../pro-eac/pro-eac.component.css']
})
export class RtComponent implements OnInit, OnDestroy {

  @Input() currentUserName;

  @Input() deviceType;

  @Input() shopName;

  actPlanParam: YieldParam = new YieldParam();

  dataType: string;

  actPlanProductCategory: string[];

  selectedactPlanProductCategory = '';

  waterMark: string;

  respText;

  productionActPlanChartOption;

  actPlanTimer;

  constructor(private httpService: ApiService, private echartService: ProductionChartOptionService) { }

  ngOnInit() {
    this.getproductionActPlanProductCategory();

  }

  ngOnDestroy() {

  }

  getproductionActPlanProductCategory() {
    this.actPlanParam.datatype = this.dataType;
    this.actPlanParam.shopName = this.shopName;
    const options = {
      params: { shopName: this.shopName }
    };
    this.httpService.get('/echart/production/rtCategory', options).subscribe(
      (res) => {
        this.actPlanProductCategory = <string[]>res;
        this.selectedactPlanProductCategory = this.actPlanProductCategory[0];
        this.drawproductionActPlanChart();
      },
      (error) => { console.log(error); }
    );
  }

  drawproductionActPlanChart() {
    this.actPlanParam.productCategory = this.selectedactPlanProductCategory;
    this.actPlanParam.shopName = this.shopName;
    const nowDate: Date = new Date();
    const currentTime: string = nowDate.toLocaleString();
    this.waterMark = 'BOECD Confidential@' + this.currentUserName + '\n' + currentTime + '@' + localStorage.getItem('currentIP');
    this.httpService.post('/echart/production/rt', this.actPlanParam).subscribe(
      (res) => {
        this.respText = res;
        this.productionActPlanChartOption = this.echartService.getOption_Rt(this.shopName + ' RT信息',
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
