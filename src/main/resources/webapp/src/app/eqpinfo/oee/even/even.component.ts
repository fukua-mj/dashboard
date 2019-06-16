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
      { label: 'OEE' },
      { label: 'EVEN' },
    ]);

    this.tService.setItems('OEE EVEN');
  }

  ngOnInit() {
    this.display = [true, true, true, true, true, true, true, true, true, true];
    this.items = [
      { header: 'EVEN', processType: 'EVEN', display: true, selected: false, shopName: 'EVEN' },
      { header: 'Half Cut', processType: 'Half Cut', display: true, selected: false, shopName: 'EVEN' },
    ];
  }

  showTabSetting() {
    this.display_Setting = true;
  }

}
