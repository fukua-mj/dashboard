import { Component, OnInit } from '@angular/core';
import { Message } from 'primeng/api';
import { BreadcrumbService } from '@breadcrumb/service/breadcrumb.service';
import { TabService } from 'core/layout/retab/service/tab.service';

@Component({
  selector: 'app-detectionmiss',
  templateUrl: './detectionmiss.component.html',
  styleUrls: ['./../../eac/defectmonitor/defectmonitor.component.css']
})
export class DetectionmissComponent implements OnInit {

  display: boolean[];

  index = 0;

  items: any[];

  display_Setting = false;

  currentUserName = localStorage.getItem('currentUserName');

  deviceType = localStorage.getItem('deviceType');

  shopName = 'MODULE';

  pageType = '人员漏检';

  msgs: Message[] = [];

  processType: string[] = [];

  constructor(private breadcrumbService: BreadcrumbService, public tService: TabService) {
    this.breadcrumbService.setItems([
      { label: '检测岗位' },
      { label: 'MDL漏检' },
    ]);

    this.tService.setItems('检测岗位 MDL漏检');
  }

  ngOnInit() {
    this.display = [true, true, true, true, true, true, true, true, true, true];
    this.items = [
      { header: 'Rt_AFI', processType: 'Rt_AFI', display: true, selected: false },
      { header: 'MFI', processType: 'MFI', display: true, selected: false },
      { header: 'Rt_MFI', processType: 'Rt_MFI', display: true, selected: false },
      { header: 'FAPP', processType: 'FAPP', display: true, selected: false },
      { header: 'Rt_FAPP', processType: 'Rt_FAPP', display: true, selected: false }
    ];
  }

  showTabSetting() {
    this.display_Setting = true;
  }


}
