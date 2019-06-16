import { Component, OnInit } from '@angular/core';
import { Message } from 'primeng/api';
import { BreadcrumbService } from '@breadcrumb/service/breadcrumb.service';
import { TabService } from 'core/layout/retab/service/tab.service';

@Component({
  selector: 'app-even',
  templateUrl: './even.component.html',
  styleUrls: ['./../bp/bp.component.css']
})
export class EvenComponent implements OnInit {

  display: boolean[];

  index = 0;

  items: any[];

  display_Setting = false;

  currentUserName = localStorage.getItem('currentUserName');

  deviceType = localStorage.getItem('deviceType');

  shopName = 'EVEN';

  msgs: Message[] = [];

  processType: string[] = [];

  constructor(private breadcrumbService: BreadcrumbService, public tService: TabService) {
    this.breadcrumbService.setItems([
      { label: '状态监控' },
      { label: 'EVEN' },
    ]);

    this.tService.setItems('状态监控 EVEN');
  }

  ngOnInit() {
    this.display = [true, true, true, true, true, true, true, true, true, true];
    this.items = [
      { header: 'Half Cut', processType: 'Half Cut', display: true, shopName: 'EAC' },
      { header: 'EVEN', processType: 'EVEN', display: true, shopName: 'EAC' }
    ];
  }

  showTabSetting() {
    this.display_Setting = true;
  }

}
