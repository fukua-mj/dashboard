import { Component, OnInit, ViewChild } from '@angular/core';
import { Message } from 'primeng/api';
import { BreadcrumbService } from '@breadcrumb/service/breadcrumb.service';
import { TabService } from 'core/layout/retab/service/tab.service';
import { MdlmonitorComponent } from 'app/operatormonitor/common/chart/mdlmonitor/mdlmonitor.component';

@Component({
  selector: 'app-defectmonitor',
  templateUrl: './defectmonitor.component.html',
  styleUrls: ['./../../eac/defectmonitor/defectmonitor.component.css']
})
export class DefectmonitorComponent implements OnInit {

  @ViewChild('Rt_AFI')
  Rt_AFI: MdlmonitorComponent;

  @ViewChild('MFI')
  MFI: MdlmonitorComponent;

  @ViewChild('Rt_MFI')
  Rt_MFI: MdlmonitorComponent;

  @ViewChild('FAPP')
  FAPP: MdlmonitorComponent;

  @ViewChild('Rt_FAPP')
  Rt_FAPP: MdlmonitorComponent;

  @ViewChild('OQAET')
  OQAET: MdlmonitorComponent;

  @ViewChild('OQAAPP')
  OQAAPP: MdlmonitorComponent;

  display: boolean[];

  index = 0;

  items: any[];

  display_Setting = false;

  currentUserName = localStorage.getItem('currentUserName');

  deviceType = localStorage.getItem('deviceType');

  shopName = 'MODULE';

  pageType = '产能监控';

  msgs: Message[] = [];

  processType: string[] = [];

  constructor(private breadcrumbService: BreadcrumbService, public tService: TabService) {
    this.breadcrumbService.setItems([
      { label: '检测岗位' },
      { label: 'MDL监控' },
    ]);

    this.tService.setItems('检测岗位 MDL监控');
  }

  ngOnInit() {
    this.display = [true, true, true, true, true, true, true, true, true, true];
    this.items = [
      { header: 'Rt_AFI', processType: 'Rt_AFI', display: true, selected: false },
      { header: 'MFI', processType: 'MFI', display: true, selected: false },
      { header: 'Rt_MFI', processType: 'Rt_MFI', display: true, selected: false },
      { header: 'FAPP', processType: 'FAPP', display: true, selected: false },
      { header: 'Rt_FAPP', processType: 'Rt_FAPP', display: true, selected: false },
      { header: 'OQAET', processType: 'OQAET', display: true, selected: false },
      { header: 'OQAAPP', processType: 'OQAAPP', display: true, selected: false }
    ];
  }

  showTabSetting() {
    this.display_Setting = true;
  }

  onTabChange(event) {
    switch (event.index) {
      case 0:
        this.Rt_AFI.start_Timer();
        this.MFI.clear_Timer();
        this.Rt_MFI.clear_Timer();
        this.FAPP.clear_Timer();
        this.Rt_FAPP.clear_Timer();
        this.OQAET.clear_Timer();
        this.OQAAPP.clear_Timer();
        break;
      case 1:
        this.Rt_AFI.clear_Timer();
        this.MFI.start_Timer();
        this.Rt_MFI.clear_Timer();
        this.FAPP.clear_Timer();
        this.Rt_FAPP.clear_Timer();
        this.OQAET.clear_Timer();
        this.OQAAPP.clear_Timer();
        break;
      case 2:
        this.Rt_AFI.clear_Timer();
        this.MFI.clear_Timer();
        this.Rt_MFI.start_Timer();
        this.FAPP.clear_Timer();
        this.Rt_FAPP.clear_Timer();
        this.OQAET.clear_Timer();
        this.OQAAPP.clear_Timer();
        break;
      case 3:
        this.Rt_AFI.clear_Timer();
        this.MFI.clear_Timer();
        this.Rt_MFI.clear_Timer();
        this.FAPP.start_Timer();
        this.Rt_FAPP.clear_Timer();
        this.OQAET.clear_Timer();
        this.OQAAPP.clear_Timer();
        break;
      case 4:
        this.Rt_AFI.start_Timer();
        this.MFI.clear_Timer();
        this.Rt_MFI.clear_Timer();
        this.FAPP.clear_Timer();
        this.Rt_FAPP.start_Timer();
        this.OQAET.clear_Timer();
        this.OQAAPP.clear_Timer();
        break;
      case 5:
        this.Rt_AFI.clear_Timer();
        this.MFI.clear_Timer();
        this.Rt_MFI.clear_Timer();
        this.FAPP.clear_Timer();
        this.Rt_FAPP.clear_Timer();
        this.OQAET.start_Timer();
        this.OQAAPP.clear_Timer();
        break;
      case 6:
        this.Rt_AFI.clear_Timer();
        this.MFI.clear_Timer();
        this.Rt_MFI.clear_Timer();
        this.FAPP.clear_Timer();
        this.Rt_FAPP.clear_Timer();
        this.OQAET.clear_Timer();
        this.OQAAPP.start_Timer();
        break;
    }
  }

}
