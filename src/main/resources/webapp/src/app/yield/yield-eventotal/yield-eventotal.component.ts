import { Component, OnInit, ViewChild } from '@angular/core';
import { Message } from 'primeng/api';
import { BreadcrumbService } from '@breadcrumb/service/breadcrumb.service';
import { TabService } from 'core/layout/retab/service/tab.service';
import { PlatformLocation } from '@angular/common';
import { StringMethodService } from 'app/common/service/stringMethod.service';
import { ShoptotalComponent } from '../yield-chart/shoptotal/shoptotal.component';
import { DepartmentdefectscrapComponent } from '../yield-chart/departmentdefectscrap/departmentdefectscrap.component';

@Component({
  selector: 'app-yield-eventotal',
  templateUrl: './yield-eventotal.component.html',
  styleUrls: ['./yield-eventotal.component.css']
})
export class YieldEventotalComponent implements OnInit {

  @ViewChild('ShopTotal')
  ShopTotal: ShoptotalComponent;

  @ViewChild('DepartmentDefect')
  DepartmentDefect: DepartmentdefectscrapComponent;

  @ViewChild('DepartmentScrap')
  DepartmentScrap: DepartmentdefectscrapComponent

  display: boolean[];

  index = 0;

  items: any[];

  display_Setting = false;

  currentUserName = localStorage.getItem('currentUserName');

  deviceType = localStorage.getItem('deviceType');

  shopName = 'EVEN';

  msgs: Message[] = [];

  dataType: string[] = ['Defect', 'Scrap'];

  processType: string[] = ['ET_EVEN'];

  constructor(private breadcrumbService: BreadcrumbService, public tService: TabService,
    private location: PlatformLocation,
    private stringMethod: StringMethodService) {
    this.breadcrumbService.setItems([
      { label: '良率指标' },
      { label: 'EVEN综合良率' },
    ]);

    this.tService.setItems('良率指标 EVEN综合良率');
  }

  ngOnInit() {
    this.display = [true, true, true, true, true, true, true, true, true, true];
    this.items = [];

    let locationUrl = '';
    for (const i in this.location) {
      if (i === 'location') {
        locationUrl = this.location[i].href;
        break;
      }
    }
    localStorage.setItem('viewHistory', this.stringMethod.viewHistoryMethod(localStorage.getItem('viewHistory'), locationUrl));

  }

  showTabSetting() {
    this.display_Setting = true;
  }

  onTabChange(event) {
    switch (event.index) {
      case 0:
        this.ShopTotal.start_Timer();
        this.DepartmentDefect.clear_Timer();
        this.DepartmentScrap.clear_Timer();
        break;
      case 1:
        this.ShopTotal.clear_Timer();
        this.DepartmentDefect.start_Timer();
        this.DepartmentScrap.clear_Timer();
        break;
      case 2:
        this.ShopTotal.clear_Timer();
        this.DepartmentDefect.clear_Timer();
        this.DepartmentScrap.start_Timer();
        break;
    }
  }

}
