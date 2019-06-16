import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { CycletimeComponent } from '../common/chart/cycletime/cycletime.component';
import { Message } from 'primeng/api';
import { ApiService } from 'app/common/service/api/api.service';
import { PlatformLocation } from '@angular/common';
import { StringMethodService } from 'app/common/service/stringMethod.service';
import { BreadcrumbService } from '@breadcrumb/service/breadcrumb.service';
import { TabService } from 'core/layout/retab/service/tab.service';

@Component({
  selector: 'app-cycletime-even',
  templateUrl: './cycletime-even.component.html',
  styleUrls: ['./cycletime-even.component.css']
})
export class CycletimeEvenComponent implements OnInit, OnDestroy {


  @ViewChild('Child_CycleTime')
  Child_CycleTime: CycletimeComponent;

  display: boolean[];

  index = 3;

  currentUserName = localStorage.getItem('currentUserName');

  deviceType = localStorage.getItem('deviceType');

  shopName = 'EVEN';

  msgs: Message[] = [];

  constructor(private httpService: ApiService,
    private location: PlatformLocation,
    private stringMethod: StringMethodService,
    private breadcrumbService: BreadcrumbService, public tService: TabService) {
    this.breadcrumbService.setItems([
      { label: 'CycleTime' },
      { label: 'EVEN' },
    ]);

    this.tService.setItems('CycleTime-EVEN');
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
