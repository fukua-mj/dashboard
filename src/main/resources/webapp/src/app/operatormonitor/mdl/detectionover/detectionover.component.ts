import { Component, OnInit } from '@angular/core';
import { Message } from 'primeng/api';
import { BreadcrumbService } from '@breadcrumb/service/breadcrumb.service';
import { TabService } from 'core/layout/retab/service/tab.service';

@Component({
  selector: 'app-detectionover',
  templateUrl: './detectionover.component.html',
  styleUrls: ['./../../eac/defectmonitor/defectmonitor.component.css']
})
export class DetectionoverComponent implements OnInit {

  display: boolean[];

  index = 0;

  items: any[];

  display_Setting = false;

  currentUserName = localStorage.getItem('currentUserName');

  deviceType = localStorage.getItem('deviceType');

  shopName = 'MODULE';

  pageType = '人员过判';

  msgs: Message[] = [];

  processType: string[] = [];

  constructor(private breadcrumbService: BreadcrumbService, public tService: TabService) {
    this.breadcrumbService.setItems([
      { label: '检测岗位' },
      { label: 'MDL过判' },
    ]);

    this.tService.setItems('检测岗位 MDL过判');
  }

  ngOnInit() {
    this.display = [true, true, true, true, true, true, true, true, true, true];
    this.items = [
      { header: 'MFI', processType: 'MFI', display: true, selected: false },
      { header: 'FAPP', processType: 'FAPP', display: true, selected: false }
    ];
  }

  showTabSetting() {
    this.display_Setting = true;
  }
}
