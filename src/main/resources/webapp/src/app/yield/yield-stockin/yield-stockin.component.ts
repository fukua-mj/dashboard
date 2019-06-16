import { Component, OnInit } from '@angular/core';
import { Message } from 'primeng/api';
import { BreadcrumbService } from '@breadcrumb/service/breadcrumb.service';
import { TabService } from 'core/layout/retab/service/tab.service';
import { PlatformLocation } from '@angular/common';
import { StringMethodService } from 'app/common/service/stringMethod.service';

@Component({
  selector: 'app-yield-stockin',
  templateUrl: './yield-stockin.component.html',
  styleUrls: ['./yield-stockin.component.css']
})
export class YieldStockinComponent implements OnInit {

  display: boolean[];

  index = 0;

  items: any[];

  display_Setting = false;

  currentUserName = localStorage.getItem('currentUserName');

  deviceType = localStorage.getItem('deviceType');

  lineName = '-';

  msgs: Message[] = [];

  processType: string[] = [];

  constructor(private breadcrumbService: BreadcrumbService, public tService: TabService,
    private location: PlatformLocation,
    private stringMethod: StringMethodService) {
    this.breadcrumbService.setItems([
      { label: '良率指标' },
      { label: '入库良率' },
    ]);

    this.tService.setItems('良率指标 入库良率');

    let locationUrl = '';
    for (const i in this.location) {
      if (i === 'location') {
        locationUrl = this.location[i].href;
        break;
      }
    }
    localStorage.setItem('viewHistory', this.stringMethod.viewHistoryMethod(localStorage.getItem('viewHistory'), locationUrl));

  }

  ngOnInit() {
    this.display = [true, true, true, true, true, true, true, true, true, true];
    this.items = [
      { header: 'BP', processType: 'BP', display: true, selected: true, dataType: 'SHOPYIELD', productionTypeDisplay: true },
      { header: 'EVEN', processType: 'EVEN', display: true, selected: false, dataType: 'SHOPYIELD', productionTypeDisplay: true },
      { header: 'EAC1', processType: 'EAC1', display: true, selected: false, dataType: 'SHOPYIELD', productionTypeDisplay: true },
      { header: 'EAC2', processType: 'EAC2', display: true, selected: false, dataType: 'SHOPYIELD', productionTypeDisplay: true },
      { header: 'MODULE', processType: 'MODULE', display: true, selected: false, dataType: 'SHOPYIELD', productionTypeDisplay: true },
      { header: 'CUM', processType: 'CUM', display: true, selected: false, dataType: 'SHOPYIELDCUM', productionTypeDisplay: false }
    ];
  }

  showTabSetting() {
    this.display_Setting = true;
  }

}
