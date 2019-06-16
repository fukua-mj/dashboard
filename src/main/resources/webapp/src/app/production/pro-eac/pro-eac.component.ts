import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { ProductionChartOptionService } from '../common/production-chart-option.service';
import { ApiService } from 'app/common/service/api/api.service';
import { EchartService } from 'app/common/service/echart.service';
import { YieldParam } from '../common/model/yieldParam';
import { Message } from 'primeng/api';
import { BreadcrumbService } from '@breadcrumb/service/breadcrumb.service';
import { TabService } from 'core/layout/retab/service/tab.service';
import { PlatformLocation } from '@angular/common';
import { StringMethodService } from 'app/common/service/stringMethod.service';
import { RtComponent } from '../pro-mdl/rt/rt.component';

@Component({
  selector: 'app-pro-eac',
  templateUrl: './pro-eac.component.html',
  styleUrls: ['./pro-eac.component.css']
})
export class ProEacComponent implements OnInit, OnDestroy {

  @ViewChild('Child_RT')
  Child_RT: RtComponent;

  deviceType;

  items: any[];

  respText;
  productionInOutChartOption;
  productionActPlanChartOption;
  productionWIPMoveChartOption;
  productionCutLineOption;
  currentUserName = localStorage.getItem('currentUserName');
  waterMark: string;
  display: boolean[];
  selectTab: boolean[];

  actPlanParam: YieldParam = new YieldParam();
  inOutParam: YieldParam = new YieldParam();
  productCategory: string;
  dataType: string;
  shopName = 'EAC';

  msgs: Message[] = [];

  private inOutTimer;
  private actPlanTimer;
  private wipMoveTimer;
  private cutLineTimer;

  inOutType = 'IN';
  productionType = 'Production';
  actPlanProductCategory: string[];
  selectedactPlanProductCategory = 'ALL';

  wipMoveParam: YieldParam = new YieldParam();
  selectedWIPMoveProductionType = 'Production';
  wipMoveProductCategory: string[];
  selectedWIPMoveProductionCategory = 'ALL';

  cutLineParam: YieldParam = new YieldParam();
  cutLineDifferCategory: string[];
  selectedCutLineProductionCategory = '6.39QHD';

  constructor(private echartService: ProductionChartOptionService,
    private stringMethod: StringMethodService,
    private location: PlatformLocation,
    private httpService: ApiService, private echart: EchartService,
    private breadcrumbService: BreadcrumbService, public tService: TabService) {
    this.breadcrumbService.setItems([
      { label: '产量指标' },
      { label: 'EAC' },
    ]);

    this.tService.setItems('产量指标 EAC');
  }

  ngOnInit() {
    let locationUrl = '';
    for (const i in this.location) {
      if (i === 'location') {
        locationUrl = this.location[i].href;
        break;
      }
    }
    localStorage.setItem('viewHistory', this.stringMethod.viewHistoryMethod(localStorage.getItem('viewHistory'), locationUrl));

    this.deviceType = localStorage.getItem('deviceType');
    console.log(this.deviceType);

    this.display = [true, true, true, true];
    this.selectTab = [true, false, false, false];
    this.items = [
      { header: '投入产出', optionName: 'productionInOutChartOption' },
      { header: '计划实绩', optionName: 'productionActPlanChartOption' },
      { header: 'WIP/Move', optionName: 'productionWIPMoveChartOption' },
      { header: 'Cut/Line别', optionName: 'productionCutLineOption' }
    ];
    this.drawproductionInOutChart();

    this.getproductionActPlanProductCategory();
    this.drawproductionActPlanChart();

    this.getproductionWipMoveProductCategory();
    this.drawproductionWipMoveChart();

    this.getproductionCutLineProductCategory();
    this.drawproductionLineDifferenceChart();

  }

  ngOnDestroy() {
    this.clear_task_ProductionActPlan();
    this.clear_task_ProductionInputOutput();
    this.clear_task_ProductionLineDifference();
    this.clear_task_ProductionWIPMove();
  }

  tabChartInit() {

  }

  onTabChange(event) {
    switch (event.index) {
      case 0:
        this.task_ProductionInputOutput();
        this.clear_task_ProductionActPlan();
        this.clear_task_ProductionLineDifference();
        this.clear_task_ProductionWIPMove();
        this.Child_RT.clear_task_ProductionActPlan();
        break;
      case 1:
        //this.showMessage('success', 'success message', event.index);
        this.task_ProductionActPlan();
        this.clear_task_ProductionInputOutput();
        this.clear_task_ProductionLineDifference();
        this.clear_task_ProductionWIPMove();
        this.Child_RT.clear_task_ProductionActPlan();
        break;
      case 2:
        //this.showMessage('success', 'success message', event.index);
        this.task_ProductionWIPMove();
        this.clear_task_ProductionActPlan();
        this.clear_task_ProductionInputOutput();
        this.clear_task_ProductionLineDifference();
        this.Child_RT.clear_task_ProductionActPlan();
        break;
      case 3:
        //this.showMessage('success', 'success message', event.index);
        this.task_ProductionLineDifference();
        this.clear_task_ProductionActPlan();
        this.clear_task_ProductionInputOutput();
        this.clear_task_ProductionWIPMove();
        this.Child_RT.clear_task_ProductionActPlan();
        break;
      case 4:
        //this.showMessage('success', 'success message', event.index);
        this.task_ProductionLineDifference();
        this.clear_task_ProductionActPlan();
        this.clear_task_ProductionInputOutput();
        this.clear_task_ProductionWIPMove();
        this.Child_RT.task_ProductionActPlan();
        break;
    }
  }

  onTabClose(event) {
    switch (event.index) {
      case 0:
        this.showMessage('success', 'close info', event.index);
        this.clear_task_ProductionInputOutput();
        break;
      case 1:
        this.clear_task_ProductionActPlan();
        break;
      case 2:
        this.clear_task_ProductionWIPMove();
        break;
      case 3:
        this.clear_task_ProductionLineDifference();
        break;
    }
  }

  showMessage(severity: string, summary: string, detail: string) {
    this.msgs = [];
    this.msgs.push({ severity: severity, summary: summary, detail: detail });
  }
  //#region 投入产出
  drawproductionInOutChart() {
    this.inOutParam.shopName = 'EAC';
    this.inOutParam.deviceType = this.deviceType;
    const nowDate: Date = new Date();
    const currentTime: string = nowDate.toLocaleString();
    this.waterMark = 'BOECD Confidential@' + this.currentUserName + '\n' + currentTime + '@' + localStorage.getItem('currentIP');
    this.httpService.post('/echart/production/getProductionInputOutput', this.inOutParam).subscribe(
      (res) => {
        this.respText = res;
        console.log('this.waterMark:' + this.waterMark);
        this.productionInOutChartOption = this.echartService.getOptionInputOutput('EAC分厂投入产出',
          this.respText, this.waterMark, this.deviceType);
      },
      (error) => {

      }
    );
  }

  task_ProductionInputOutput() {
    this.inOutTimer = setInterval(() => {
      this.drawproductionInOutChart();
    }, 5000);
  }

  clear_task_ProductionInputOutput() {
    console.log('到函数外面了');
    if (this.inOutTimer) {
      console.log('到函数里面来了');
      clearInterval(this.inOutTimer);
    }
  }
  //#endregion

  //#region 计划实绩
  getproductionActPlanProductCategory() {
    this.actPlanParam.datatype = this.dataType;
    this.actPlanParam.shopName = this.shopName;
    const options = {
      params: { shopName: this.shopName }
    };
    this.httpService.get('/echart/production/actplanCategory', options).subscribe(
      (res) => {
        this.actPlanProductCategory = <string[]>res;
        this.selectedactPlanProductCategory = this.actPlanProductCategory[0];
        this.drawproductionActPlanChart();
      },
      (error) => { console.log(error); }
    );
  };

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
        console.log('this.waterMark:' + this.waterMark);
        this.productionActPlanChartOption = this.echartService.getOption_ActPlan('EAC分厂计划实绩', this.respText, this.waterMark, this.deviceType);
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
  //#endregion

  //#region WIP/Move
  getproductionWipMoveProductCategory() {
    const options = {
      params: {
        shopName: this.shopName,
        productionType: this.selectedWIPMoveProductionType,
        dataType: 'MAIN'
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
    const nowDate: Date = new Date();
    const currentTime: string = nowDate.toLocaleString();
    this.waterMark = 'BOECD Confidential@' + this.currentUserName + '\n' + currentTime + '@' + localStorage.getItem('currentIP');
    this.httpService.post('/echart/production/wipMove', this.wipMoveParam).subscribe(
      (res) => {
        this.respText = res;
        console.log('this.waterMark:' + this.waterMark);
        this.productionWIPMoveChartOption = this.echartService.getOption_WIPMove('EAC分厂WIP/Movement', this.respText, this.waterMark, this.deviceType);
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

  //#region Cut Line别
  getproductionCutLineProductCategory() {
    const options = {
      params: { shopName: 'C20000N', processType: 'CUT' }
    };
    this.httpService.get('/echart/production/cutLineProductCategory', options).subscribe(
      (res) => {
        this.cutLineDifferCategory = <string[]>res;
        this.selectedCutLineProductionCategory = this.cutLineDifferCategory[0];
        this.drawproductionLineDifferenceChart();
      },
      (error) => { console.log(error); }
    );
  }

  drawproductionLineDifferenceChart() {
    this.cutLineParam.productCategory = this.selectedCutLineProductionCategory;
    this.cutLineParam.processtype = '7CCCC%';
    const nowDate: Date = new Date();
    const currentTime: string = nowDate.toLocaleString();
    this.waterMark = 'BOECD Confidential@' + this.currentUserName + '\n' + currentTime + '@' + localStorage.getItem('currentIP');
    this.httpService.post('/echart/production/cutLineFPY', this.cutLineParam).subscribe(
      (res) => {
        this.respText = res;
        console.log('this.waterMark:' + this.waterMark);
        this.productionCutLineOption = this.echartService.getOption_eacCutproduction('CUT Line FPY', this.respText, this.waterMark, this.deviceType);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  task_ProductionLineDifference() {
    this.cutLineTimer = setInterval(() => {
      this.drawproductionLineDifferenceChart();
    }, 300000);
  }

  clear_task_ProductionLineDifference() {
    if (this.cutLineTimer) {
      clearInterval(this.cutLineTimer);
    }
  }
  //#endregion



}
