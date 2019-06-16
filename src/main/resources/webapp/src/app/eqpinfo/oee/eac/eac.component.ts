import { Component, OnInit } from '@angular/core';
import { BreadcrumbService } from '@breadcrumb/service/breadcrumb.service';
import { TabService } from 'core/layout/retab/service/tab.service';
import { Message } from 'primeng/api';

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
      { label: 'OEE' },
      { label: 'EAC' },
    ]);

    this.tService.setItems('OEE EAC');
  }

  ngOnInit() {
    this.display = [true, true, true, true, true, true, true, true, true, true];
    this.items = [
      { header: 'LLO', processType: 'LLO', display: true, selected: false, shopName: 'EAC1' },
      { header: 'Top Lami', processType: 'TLM', display: true, selected: false, shopName: 'EAC1' },
      { header: 'De Lami', processType: 'DLM', display: true, selected: false, shopName: 'EAC1' },
      { header: 'Flexible Cut', processType: 'Cut', display: true, selected: false, shopName: 'EAC2' },
      { header: 'Aging', processType: 'Aging', display: true, selected: false, shopName: 'EAC2' },
      { header: 'Cell Test', processType: 'Test', display: true, selected: false, shopName: 'EAC2' },
    ];
  }

  showTabSetting() {
    this.display_Setting = true;
  }
}
