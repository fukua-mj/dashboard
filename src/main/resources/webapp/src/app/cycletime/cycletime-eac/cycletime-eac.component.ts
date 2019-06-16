import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { ApiService } from 'app/common/service/api/api.service';
import { Message } from 'primeng/api';
import { PlatformLocation } from '@angular/common';
import { StringMethodService } from 'app/common/service/stringMethod.service';
import { BreadcrumbService } from '@breadcrumb/service/breadcrumb.service';
import { TabService } from 'core/layout/retab/service/tab.service';
import { CycletimeComponent } from '../common/chart/cycletime/cycletime.component';

@Component({
  selector: 'app-cycletime-eac',
  templateUrl: './cycletime-eac.component.html',
  styleUrls: ['./cycletime-eac.component.css']
})
export class CycletimeEacComponent implements OnInit, OnDestroy {


  @ViewChild('Child_CycleTime')
  Child_CycleTime: CycletimeComponent;

  display: boolean[];

  index = 3;

  currentUserName = localStorage.getItem('currentUserName');

  deviceType = localStorage.getItem('deviceType');

  shopName = 'EAC';

  msgs: Message[] = [];

  constructor(private httpService: ApiService,
    private location: PlatformLocation,
    private stringMethod: StringMethodService,
    private breadcrumbService: BreadcrumbService, public tService: TabService) {
    this.breadcrumbService.setItems([
      { label: 'CycleTime' },
      { label: 'EAC' },
    ]);

    this.tService.setItems('CycleTime-EAC');
  }

  ngOnInit() {
    this.display = [true, true, true, true];

    let locationUrl = '';
    for (const i in this.location) {
      if (i === 'location') {
        locationUrl = this.location[i].href;
        break;
      }
    }
    localStorage.setItem('viewHistory', this.stringMethod.viewHistoryMethod(localStorage.getItem('viewHistory'), locationUrl));

    this.Child_CycleTime.start_Timer();
  }

  ngOnDestroy() {
    this.Child_CycleTime.clear_Timer();
  }

}
