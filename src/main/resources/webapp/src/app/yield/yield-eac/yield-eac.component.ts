import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { Message } from 'primeng/api';
import { BreadcrumbService } from '@breadcrumb/service/breadcrumb.service';
import { TabService } from 'core/layout/retab/service/tab.service';
import { BpshopComponent } from '../yield-chart/bpshop/bpshop.component';
import { PlatformLocation } from '@angular/common';
import { StringMethodService } from 'app/common/service/stringMethod.service';

@Component({
  selector: 'app-yield-eac',
  templateUrl: './yield-eac.component.html',
  styleUrls: ['./yield-eac.component.css']
})
export class YieldEacComponent implements OnInit , OnDestroy{

  @ViewChild('Child_EA')
  Child_EA: BpshopComponent;

  @ViewChild('Child_CUT')
  Child_CUT: BpshopComponent;

  @ViewChild('Child_Aging')
  Child_Aging: BpshopComponent;

  @ViewChild('Child_AET')
  Child_AET: BpshopComponent;

  @ViewChild('Child_AET1')
  Child_AET1: BpshopComponent;

  @ViewChild('Child_AET2')
  Child_AET2: BpshopComponent;

  @ViewChild('Child_MET')
  Child_MET: BpshopComponent;

  @ViewChild('Child_EAPP')
  Child_EAPP: BpshopComponent;

  @ViewChild('Child_REAET')
  Child_REAET: BpshopComponent;

  display: boolean[];

  index = 0;

  items: any[];

  display_Setting = false;

  currentUserName = localStorage.getItem('currentUserName');

  deviceType = localStorage.getItem('deviceType');

  shopName = 'EAC';

  dataType = 'EACMAIN';

  lineName = '-';

  msgs: Message[] = [];

  processType: string[] = [];

  constructor(private breadcrumbService: BreadcrumbService, public tService: TabService,
    private location:PlatformLocation,
    private stringMethod:StringMethodService) {
    this.breadcrumbService.setItems([
      { label: '良率指标' },
      { label: 'EAC' },
    ]);

    this.tService.setItems('良率指标 EAC');
  }

  ngOnInit() {
    this.display = [true, true, true, true, true, true, true, true, true, true];
    this.items = [
      { header: 'EA', processType: 'EA', display: true, selected: true },
      { header: 'CUT', processType: 'CUT', display: true, selected: false },
      { header: 'Aging', processType: 'Aging', display: true, selected: false },
      { header: 'AET', processType: 'AET', display: true, selected: false },
      { header: 'MET', processType: 'MET', display: true, selected: false },
      { header: 'EAPP', processType: 'EAPP', display: true, selected: false },
      { header: 'REAET', processType: 'Re_AET', display: true, selected: false }
    ];

    let locationUrl = '';
    for (const i in this.location) {
        if (i === 'location') {
            locationUrl = this.location[i].href;
            break;
        }
    }
    localStorage.setItem('viewHistory', this.stringMethod.viewHistoryMethod(localStorage.getItem('viewHistory'),locationUrl));
    this.Child_EA.start_Timer();
  }

  ngOnDestroy() {
    this.Child_EA.clear_Timer();
  }

  showTabSetting() {
    this.display_Setting = true;
  }

  onTabChange(event) {
    switch (event.index) {
      case 0:
        console.log('this.Child_EA.start_Timer()');
        this.Child_EA.start_Timer();
        this.Child_CUT.clear_Timer();
        this.Child_Aging.clear_Timer();
        this.Child_AET.clear_Timer();
        this.Child_MET.clear_Timer();
        this.Child_EAPP.clear_Timer();
        this.Child_REAET.clear_Timer();
        break;
      case 1:
        console.log('this.Child_CUT.start_Timer()');
        this.Child_EA.clear_Timer();
        this.Child_CUT.start_Timer();
        this.Child_Aging.clear_Timer();
        this.Child_AET.clear_Timer();
        this.Child_MET.clear_Timer();
        this.Child_EAPP.clear_Timer();
        this.Child_REAET.clear_Timer();
        break;
      case 2:
        this.Child_EA.clear_Timer();
        this.Child_CUT.clear_Timer();
        this.Child_Aging.start_Timer();
        this.Child_AET.clear_Timer();
        this.Child_MET.clear_Timer();
        this.Child_EAPP.clear_Timer();
        this.Child_REAET.clear_Timer();
        break;
      case 3:
        this.Child_EA.clear_Timer();
        this.Child_CUT.clear_Timer();
        this.Child_Aging.clear_Timer();
        this.Child_AET.start_Timer();
        this.Child_MET.clear_Timer();
        this.Child_EAPP.clear_Timer();
        this.Child_REAET.clear_Timer();
        break;
      case 4:
        this.Child_EA.clear_Timer();
        this.Child_CUT.clear_Timer();
        this.Child_Aging.clear_Timer();
        this.Child_AET.clear_Timer();
        this.Child_MET.start_Timer();
        this.Child_EAPP.clear_Timer();
        this.Child_REAET.clear_Timer();
        break;
      case 5:
        this.Child_EA.clear_Timer();
        this.Child_CUT.clear_Timer();
        this.Child_Aging.clear_Timer();
        this.Child_AET.clear_Timer();
        this.Child_MET.clear_Timer();
        this.Child_EAPP.start_Timer();
        this.Child_REAET.clear_Timer();
        break;
      case 6:
        this.Child_EA.clear_Timer();
        this.Child_CUT.clear_Timer();
        this.Child_Aging.clear_Timer();
        this.Child_AET.clear_Timer();
        this.Child_MET.clear_Timer();
        this.Child_EAPP.start_Timer();
        this.Child_REAET.clear_Timer();
        break;
    }
  }

}
