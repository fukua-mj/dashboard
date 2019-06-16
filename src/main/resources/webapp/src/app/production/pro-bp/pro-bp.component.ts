import { TabService } from 'core/layout/retab/service/tab.service';
import { BreadcrumbService } from '@breadcrumb/service/breadcrumb.service';
import { ApiService } from './../../common/service/api/api.service';
import { ProductionChartOptionService } from './../common/production-chart-option.service';
import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { InoutComponent } from '../pro-mdl/inout/inout.component';
import { ActplanComponent } from '../pro-mdl/actplan/actplan.component';
import { WipmovementComponent } from '../pro-mdl/wipmovement/wipmovement.component';
import { Message } from 'primeng/api';
import { PlatformLocation } from '@angular/common';
import { StringMethodService } from 'app/common/service/stringMethod.service';
import { ScrapComponent } from '../pro-mdl/scrap/scrap.component';
import { DummyComponent } from '../pro-mdl/dummy/dummy.component';

@Component({
  selector: 'app-pro-bp',
  templateUrl: './pro-bp.component.html',
  styleUrls: ['./pro-bp.component.css']
})
export class ProBpComponent implements OnInit {

  @ViewChild('Child_InputOutput')
  Child_InputOutput: InoutComponent;

  @ViewChild('Child_ActPlan')
  Child_ActPlan: ActplanComponent;

  @ViewChild('Child_WipMove')
  Child_WipMove: WipmovementComponent;

  @ViewChild('Child_Scrap')
  Child_Scrap: ScrapComponent;

  @ViewChild('Child_Dummy')
  Child_Dummy: DummyComponent;

  display: boolean[];

  index = 0;

  currentUserName = localStorage.getItem('currentUserName');

  deviceType = localStorage.getItem('deviceType');

  shopName = 'BP';

  msgs: Message[] = [];

  constructor(private httpService: ApiService,
    private location: PlatformLocation,
    private stringMethod: StringMethodService,
    private breadcrumbService: BreadcrumbService, public tService: TabService, private EchartService: ProductionChartOptionService) {
    this.breadcrumbService.setItems([
      { label: 'Production' },
      { label: 'BP' },
    ]);

    this.tService.setItems('Production-BP');
  }

  ngOnInit() {
    this.display = [true, true, true, true, true];

    let locationUrl = '';
    for (const i in this.location) {
      if (i === 'location') {
        locationUrl = this.location[i].href;
        break;
      }
    }
    localStorage.setItem('viewHistory', this.stringMethod.viewHistoryMethod(localStorage.getItem('viewHistory'), locationUrl));


  }

  onTabChange(event) {
    switch (event.index) {
      case 0:
        this.Child_InputOutput.task_ProductionInputOutput();
        this.Child_ActPlan.clear_task_ProductionActPlan();
        this.Child_WipMove.clear_task_ProductionWIPMove();
        this.Child_Scrap.clear_Timer();
        this.Child_Dummy.clear_Timer();
        break;
      case 1:
        this.Child_InputOutput.clear_task_ProductionInputOutput();
        this.Child_ActPlan.task_ProductionActPlan();
        this.Child_WipMove.clear_task_ProductionWIPMove();
        this.Child_Scrap.clear_Timer();
        this.Child_Dummy.clear_Timer();
        break;
      case 2:
        this.Child_InputOutput.clear_task_ProductionInputOutput();
        this.Child_ActPlan.clear_task_ProductionActPlan();
        this.Child_WipMove.task_ProductionWIPMove();
        this.Child_Scrap.clear_Timer();
        this.Child_Dummy.clear_Timer();
        break;
      case 3:
        this.Child_InputOutput.clear_task_ProductionInputOutput();
        this.Child_ActPlan.clear_task_ProductionActPlan();
        this.Child_WipMove.clear_task_ProductionWIPMove();
        this.Child_Scrap.start_Timer();
        this.Child_Dummy.clear_Timer();
        break;
      case 4:
        this.Child_InputOutput.clear_task_ProductionInputOutput();
        this.Child_ActPlan.clear_task_ProductionActPlan();
        this.Child_WipMove.clear_task_ProductionWIPMove();
        this.Child_Scrap.start_Timer();
        this.Child_Dummy.start_Timer();
        break;
    }
  }

  showMessage(severity: string, summary: string, detail: string) {
    this.msgs = [];
    this.msgs.push({ severity: severity, summary: summary, detail: detail });
  }

  watermarkChange(){
    this.Child_InputOutput.waterMarkChange();
  }


}
