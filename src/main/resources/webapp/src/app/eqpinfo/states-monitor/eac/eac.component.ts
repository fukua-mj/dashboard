import { Component, OnInit } from '@angular/core';
import { Message } from 'primeng/api';
import { BreadcrumbService } from '@breadcrumb/service/breadcrumb.service';
import { TabService } from 'core/layout/retab/service/tab.service';

@Component({
  selector: 'app-eac',
  templateUrl: './eac.component.html',
  styleUrls: ['./../bp/bp.component.css']
})
export class EacComponent implements OnInit {

  display: boolean[];

  index = 0;

  items: any[];

  display_Setting = false;

  currentUserName = localStorage.getItem('currentUserName');

  deviceType = localStorage.getItem('deviceType');

  shopName = 'EAC';

  msgs: Message[] = [];

  processType: string[] = [];

  constructor(private breadcrumbService: BreadcrumbService, public tService: TabService) {
    this.breadcrumbService.setItems([
      { label: '状态监控' },
      { label: 'EAC' },
    ]);

    this.tService.setItems('状态监控 EAC');
  }

  ngOnInit() {
    this.display = [true, true, true, true, true, true, true, true, true, true];
    this.items = [
      { header: 'Flexible Cut', processType: 'Cut', display: true, shopName: 'EAC' },
      { header: 'LLO', processType: 'LLO', display: true, shopName: 'EAC' },
      { header: 'Top Lami', processType: 'TLM', display: true, shopName: 'EAC' },
      { header: 'Delami', processType: 'DLM', display: true, shopName: 'EAC' },
      { header: 'Aging', processType: 'Aging', display: true, shopName: 'EAC' },
      { header: 'Cell Test', processType: 'Test', display: true, shopName: 'EAC' }
    ];
  }

  showTabSetting() {
    this.display_Setting = true;
  }

}
