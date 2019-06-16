import { Component, OnInit } from '@angular/core';
import { Message } from 'primeng/api';
import { BreadcrumbService } from '@breadcrumb/service/breadcrumb.service';
import { TabService } from 'core/layout/retab/service/tab.service';

@Component({
  selector: 'app-module',
  templateUrl: './module.component.html',
  styleUrls: ['./../bp/bp.component.css']
})
export class ModuleComponent implements OnInit {


  display: boolean[];

  index = 0;

  items: any[];

  display_Setting = false;

  currentUserName = localStorage.getItem('currentUserName');

  deviceType = localStorage.getItem('deviceType');

  shopName = 'MODULE';

  msgs: Message[] = [];

  processType: string[] = [];

  constructor(private breadcrumbService: BreadcrumbService, public tService: TabService) {
    this.breadcrumbService.setItems([
      { label: 'OEE' },
      { label: 'MODULE' },
    ]);

    this.tService.setItems('OEE MODULE');
  }

  ngOnInit() {
    this.display = [true, true, true, true, true, true, true, true, true, true];
    this.items = [
      { header: 'OLB', processType: 'OLB', display: true, selected: false, shopName: 'MODULE' },
      { header: 'BCH', processType: 'BCH', display: true, selected: false, shopName: 'MODULE' },
      { header: 'A_LAMI', processType: 'A_LAMI', display: true, selected: false, shopName: 'MODULE' },
      { header: 'SCP', processType: 'SCP', display: true, selected: false, shopName: 'MODULE' },
      { header: 'OCA', processType: 'OCA', display: true, selected: false, shopName: 'MODULE' },
      { header: 'ACU', processType: 'ACU', display: true, selected: false, shopName: 'MODULE' },
      { header: 'TGP', processType: 'TGP', display: true, selected: false, shopName: 'MODULE' },
      { header: 'BRP', processType: 'BRP', display: true, selected: false, shopName: 'MODULE' },
      { header: 'ATP', processType: 'ATP', display: true, selected: false, shopName: 'MODULE' },
      { header: 'ASSY', processType: 'ASSY', display: true, selected: false, shopName: 'MODULE' }
    ];
  }

  showTabSetting() {
    this.display_Setting = true;
  }

}
