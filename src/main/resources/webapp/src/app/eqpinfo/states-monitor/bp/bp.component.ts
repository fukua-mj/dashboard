import { Component, OnInit } from '@angular/core';
import { Message } from 'primeng/api';
import { BreadcrumbService } from '@breadcrumb/service/breadcrumb.service';
import { TabService } from 'core/layout/retab/service/tab.service';

@Component({
  selector: 'app-bp',
  templateUrl: './bp.component.html',
  styleUrls: ['./bp.component.css']
})
export class BpComponent implements OnInit {

  display: boolean[];

  index = 0;

  items: any[];

  display_Setting = false;

  currentUserName = localStorage.getItem('currentUserName');

  deviceType = localStorage.getItem('deviceType');

  shopName = 'BP';

  msgs: Message[] = [];

  processType: string[] = [];

  constructor(private breadcrumbService: BreadcrumbService, public tService: TabService) {
    this.breadcrumbService.setItems([
      { label: '状态监控' },
      { label: 'BP' },
    ]);

    this.tService.setItems('状态监控 BP');
  }

  ngOnInit() {
    this.display = [true, true, true, true, true, true, true, true, true, true];
    this.items = [
      { header: 'Initial Cleaner', processType: 'Initial Clean', display: true, shopName: 'BP' },
      { header: 'PI Coater', processType: 'PI Coater', display: true, shopName: 'BP' },
      { header: 'Sputter', processType: 'Sputter', display: true, shopName: 'BP' },
      { header: 'PECVD', processType: 'PECVD', display: true, shopName: 'BP' },
      { header: 'Furnace', processType: 'Furnace', display: true, shopName: 'BP' },
      { header: 'Implant', processType: 'Implant', display: true, shopName: 'BP' },
      { header: 'ELA', processType: 'ELA', display: true, shopName: 'BP' },
      { header: 'Wet Etch', processType: 'Wet Etch', display: true, shopName: 'BP' },
      { header: 'Wet Strip', processType: 'Wet Strip', display: true, shopName: 'BP' },
      { header: 'Pre Clean', processType: 'Pre Clean', display: true, shopName: 'BP' },
      { header: 'Dry Etch', processType: 'Dry Etch', display: true, shopName: 'BP' },
      { header: 'Photo', processType: 'Photo', display: true, shopName: 'BP' },
      { header: 'Oven', processType: 'OVEN', display: false, shopName: 'BP' }
    ];
  }

  showTabSetting() {
    this.display_Setting = true;
  }
}
