import { Component, OnInit, ViewChild } from '@angular/core';
import { BreadcrumbService } from '@breadcrumb/service/breadcrumb.service';
import { TabService } from 'core/layout/retab/service/tab.service';
import { InoutComponent } from './inout/inout.component';
import { Message } from 'primeng/api';
import { ActplanComponent } from './actplan/actplan.component';
import { WipmovementComponent } from './wipmovement/wipmovement.component';
import { WipmoveBylineComponent } from './wipmove-byline/wipmove-byline.component';
import { WipmoveByoperationComponent } from './wipmove-byoperation/wipmove-byoperation.component';
import { LinedifferenceComponent } from './linedifference/linedifference.component';
import { PlatformLocation } from '@angular/common';
import { StringMethodService } from 'app/common/service/stringMethod.service';
import { RtComponent } from './rt/rt.component';

@Component({
  selector: 'app-pro-mdl',
  templateUrl: './pro-mdl.component.html',
  styleUrls: ['./pro-mdl.component.css']
})
export class ProMdlComponent implements OnInit {

  @ViewChild('Child_InputOutput')
  Child_InputOutput: InoutComponent;

  @ViewChild('Child_ActPlan')
  Child_ActPlan: ActplanComponent;

  @ViewChild('Child_WipMove')
  Child_WipMove: WipmovementComponent;

  @ViewChild('Child_WipMoveByLine')
  Child_WipMoveByLine: WipmoveBylineComponent;

  @ViewChild('Child_WipMoveByOperation')
  Child_WipMoveByOperation: WipmoveByoperationComponent;

  @ViewChild('Child_LineDiffer')
  Child_LineDiffer: LinedifferenceComponent;

  @ViewChild('Child_RT')
  Child_RT: RtComponent

  display: boolean[];

  index = 0;

  currentUserName = localStorage.getItem('currentUserName');

  deviceType = localStorage.getItem('deviceType');

  shopName = 'MODULE';

  msgs: Message[] = [];

  constructor(private breadcrumbService: BreadcrumbService, public tService: TabService,
    private location: PlatformLocation,
    private stringMethod: StringMethodService) {
    this.breadcrumbService.setItems([
      { label: '产量指标' },
      { label: 'MDL' },
    ]);

    this.tService.setItems('产量指标 MDL');
  }

  ngOnInit() {
    this.display = [true, true, true, true, true, true];
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
        this.Child_WipMoveByLine.clear_task_ProductionActPlan();
        this.Child_WipMoveByOperation.clear_Timer();
        this.Child_LineDiffer.clear_task_ProductionLineDifference();
        this.Child_RT.clear_task_ProductionActPlan();
        break;
      case 1:
        this.Child_InputOutput.clear_task_ProductionInputOutput();
        this.Child_ActPlan.task_ProductionActPlan();
        this.Child_WipMove.clear_task_ProductionWIPMove();
        this.Child_WipMoveByLine.clear_task_ProductionActPlan();
        this.Child_WipMoveByOperation.clear_Timer();
        this.Child_LineDiffer.clear_task_ProductionLineDifference();
        this.Child_RT.clear_task_ProductionActPlan();
        break;
      case 2:
        this.Child_InputOutput.clear_task_ProductionInputOutput();
        this.Child_ActPlan.clear_task_ProductionActPlan();
        this.Child_WipMove.task_ProductionWIPMove();
        this.Child_WipMoveByLine.clear_task_ProductionActPlan();
        this.Child_WipMoveByOperation.clear_Timer();
        this.Child_LineDiffer.clear_task_ProductionLineDifference();
        this.Child_RT.clear_task_ProductionActPlan();
        break;
      case 3:
        this.Child_InputOutput.clear_task_ProductionInputOutput();
        this.Child_ActPlan.clear_task_ProductionActPlan();
        this.Child_WipMove.clear_task_ProductionWIPMove();
        this.Child_WipMoveByLine.task_ProductionActPlan();
        this.Child_WipMoveByOperation.clear_Timer();
        this.Child_LineDiffer.clear_task_ProductionLineDifference();
        this.Child_RT.clear_task_ProductionActPlan();
        break;
      case 4:
        this.Child_InputOutput.clear_task_ProductionInputOutput();
        this.Child_ActPlan.clear_task_ProductionActPlan();
        this.Child_WipMove.clear_task_ProductionWIPMove();
        this.Child_WipMoveByLine.clear_task_ProductionActPlan();
        this.Child_WipMoveByOperation.start_Timer();
        this.Child_LineDiffer.clear_task_ProductionLineDifference();
        this.Child_RT.clear_task_ProductionActPlan();
        break;
      case 5:
        this.Child_InputOutput.clear_task_ProductionInputOutput();
        this.Child_ActPlan.clear_task_ProductionActPlan();
        this.Child_WipMove.clear_task_ProductionWIPMove();
        this.Child_WipMoveByLine.clear_task_ProductionActPlan();
        this.Child_WipMoveByOperation.clear_Timer();
        this.Child_LineDiffer.task_ProductionLineDifference();
        this.Child_RT.clear_task_ProductionActPlan();
        break;
      case 6:
        this.Child_InputOutput.clear_task_ProductionInputOutput();
        this.Child_ActPlan.clear_task_ProductionActPlan();
        this.Child_WipMove.clear_task_ProductionWIPMove();
        this.Child_WipMoveByLine.clear_task_ProductionActPlan();
        this.Child_WipMoveByOperation.clear_Timer();
        this.Child_LineDiffer.clear_task_ProductionLineDifference();
        this.Child_RT.task_ProductionActPlan();
        break;
    }
  }

  showMessage(severity: string, summary: string, detail: string) {
    this.msgs = [];
    this.msgs.push({ severity: severity, summary: summary, detail: detail });
  }

}
