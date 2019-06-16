import { Component, OnInit, ViewChild } from '@angular/core';
import { Message } from 'primeng/api';
import { BreadcrumbService } from '@breadcrumb/service/breadcrumb.service';
import { TabService } from 'core/layout/retab/service/tab.service';
import { EacmonitorComponent } from 'app/operatormonitor/common/chart/eacmonitor/eacmonitor.component';

@Component({
  selector: 'app-defectmonitor',
  templateUrl: './defectmonitor.component.html',
  styleUrls: ['./defectmonitor.component.css']
})
export class DefectmonitorComponent implements OnInit {

  @ViewChild('EacMonitorAet')
  EacMonitorAet: EacmonitorComponent;

  @ViewChild('EacMonitorReaet')
  EacMonitorReaet: EacmonitorComponent;

  @ViewChild('EacMonitorMet')
  EacMonitorMet: EacmonitorComponent;

  display: boolean[];

  index = 0;

  items: any[];

  display_Setting = false;

  currentUserName = localStorage.getItem('currentUserName');

  deviceType = localStorage.getItem('deviceType');

  shopName = 'EAC2';

  msgs: Message[] = [];

  processType: string[] = [];

  constructor(private breadcrumbService: BreadcrumbService, public tService: TabService) {
    this.breadcrumbService.setItems([
      { label: '检测岗位' },
      { label: 'EAC监控' },
    ]);

    this.tService.setItems('检测岗位 EAC监控');
  }

  ngOnInit() {
    this.display = [true, true, true, true, true, true, true, true, true, true];
    this.items = [
      { header: 'AET', processType: 'AET', display: true, selected: false, component: this.EacMonitorAet },
      { header: 'REAET', processType: 'REAET', display: true, selected: false, component: this.EacMonitorReaet },
      { header: 'MET', processType: 'MET', display: true, selected: false, component: this.EacMonitorMet }
    ];
  }

  showTabSetting() {
    this.display_Setting = true;
  }

  onTabChange(event) {
    switch (event.index) {
      case 0:
        this.EacMonitorAet.start_Timer();
        this.EacMonitorReaet.clear_Timer();
        this.EacMonitorMet.clear_Timer();
        break;
      case 1:
        this.EacMonitorAet.clear_Timer();
        this.EacMonitorReaet.start_Timer();
        this.EacMonitorMet.clear_Timer();
        break;
      case 2:
        this.EacMonitorAet.clear_Timer();
        this.EacMonitorReaet.clear_Timer();
        this.EacMonitorMet.start_Timer();
        break;
    }
  }

}
