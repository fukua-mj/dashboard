import { Component, OnInit, ViewChild } from '@angular/core';
import { BreadcrumbService } from '@breadcrumb/service/breadcrumb.service';
import { TabService } from 'core/layout/retab/service/tab.service';
import { Message } from 'primeng/api';
import { Cg1viewComponent } from '../chart/cg1view/cg1view.component';
import { Cg2viewComponent } from '../chart/cg2view/cg2view.component';

@Component({
  selector: 'app-quality-cg',
  templateUrl: './quality-cg.component.html',
  styleUrls: ['./quality-cg.component.css']
})
export class QualityCgComponent implements OnInit {

  @ViewChild('WipMove')
  WipMove: Cg1viewComponent;

  @ViewChild('Cum')
  Cum: Cg1viewComponent;

  @ViewChild('Yield')
  Yield: Cg2viewComponent

  @ViewChild('DppmLrr')
  DppmLrr: Cg1viewComponent

  @ViewChild('InputOutput')
  InputOutput: Cg1viewComponent

  @ViewChild('ActPlan')
  ActPlan: Cg2viewComponent

  display: boolean[];

  index = 2;

  items: any[];

  dataType: string[];

  display_Setting = false;

  currentUserName = localStorage.getItem('currentUserName');

  deviceType = localStorage.getItem('deviceType');

  lineName = '-';

  shopName = 'MODULE';

  msgs: Message[] = [];

  constructor(private breadcrumbService: BreadcrumbService, public tService: TabService) {
    this.breadcrumbService.setItems([
      { label: '品质指标' },
      { label: 'CG' },
    ]);

    this.tService.setItems('品质指标 CG');
  }

  ngOnInit() {
    this.display = [true, true, true, true, true, true, true, true, true, true];
    this.dataType = ['WIP/Move', 'CUM', 'Yield', 'DPPM/LRR', 'InputOutput', 'ActPlan'];

    this.items = [
      { header: 'WIP/Move', display: true, selected: false, dataType: 'CUM' },
      { header: 'CUM', display: true, selected: true, dataType: 'Daily' },
      { header: 'Yield', display: true, selected: false, dataType: 'OPERATOR' },
      { header: 'DPPM/LRR', display: true, selected: false },
      { header: '投入产出', display: true, selected: false },
      { header: '计划实绩', display: true, selected: false },
    ];
  }

  showTabSetting() {
    this.display_Setting = true;
  }

  onTabChange(event) {
    switch (event.index) {
      case 0:
        this.WipMove.start_Timer();
        this.Cum.clear_Timer();
        this.Yield.clear_Timer();
        this.DppmLrr.clear_Timer();
        this.InputOutput.clear_Timer();
        this.ActPlan.clear_Timer();
        break;
      case 1:
        this.WipMove.clear_Timer();
        this.Cum.start_Timer();
        this.Yield.clear_Timer();
        this.DppmLrr.clear_Timer();
        this.InputOutput.clear_Timer();
        this.ActPlan.clear_Timer();
        break;
      case 2:
        this.WipMove.clear_Timer();
        this.Cum.clear_Timer();
        this.Yield.start_Timer();
        this.DppmLrr.clear_Timer();
        this.InputOutput.clear_Timer();
        this.ActPlan.clear_Timer();
        break;
      case 3:
        this.WipMove.clear_Timer();
        this.Cum.clear_Timer();
        this.Yield.clear_Timer();
        this.DppmLrr.start_Timer();
        this.InputOutput.clear_Timer();
        this.ActPlan.clear_Timer();
        break;
      case 4:
        this.WipMove.clear_Timer();
        this.Cum.clear_Timer();
        this.Yield.clear_Timer();
        this.DppmLrr.clear_Timer();
        this.InputOutput.start_Timer();
        this.ActPlan.clear_Timer();
        break;
      case 5:
        this.WipMove.clear_Timer();
        this.Cum.clear_Timer();
        this.Yield.clear_Timer();
        this.DppmLrr.clear_Timer();
        this.InputOutput.clear_Timer();
        this.ActPlan.start_Timer();
        break;
    }
  }

}
