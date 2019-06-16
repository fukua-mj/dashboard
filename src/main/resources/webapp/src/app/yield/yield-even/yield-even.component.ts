import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { BreadcrumbService } from '@breadcrumb/service/breadcrumb.service';
import { TabService } from 'core/layout/retab/service/tab.service';
import { Message } from 'primeng/api';
import { PlatformLocation } from '@angular/common';
import { StringMethodService } from 'app/common/service/stringMethod.service';
import { BpshopComponent } from '../yield-chart/bpshop/bpshop.component';

@Component({
  selector: 'app-yield-even',
  templateUrl: './yield-even.component.html',
  styleUrls: ['./yield-even.component.css']
})
export class YieldEvenComponent implements OnInit, OnDestroy {

  @ViewChild('TFE_AOI')
  TFE_AOI: BpshopComponent;

  display: boolean[];

  index = 1;

  currentUserName = localStorage.getItem('currentUserName');

  deviceType = localStorage.getItem('deviceType');

  shopName = 'EVEN';

  msgs: Message[] = [];

  processType: string[] = [];

  categoryURL: string;

  chartURL: string;

  items: any[];

  constructor(private breadcrumbService: BreadcrumbService, public tService: TabService,
    private location: PlatformLocation,
    private stringMethod: StringMethodService) {
    this.breadcrumbService.setItems([
      { label: '良率指标' },
      { label: 'EVEN' },
    ]);

    this.tService.setItems('良率指标 EVEN');
  }

  ngOnInit() {
    this.items = [
      { header: 'TFE AOI', processType: 'TFE AOI', dataType: 'EVENMAIN', display: true, selected: true },
    ];

    this.display = [true, true, true, true, true, true, true, true, true, true];
    this.processType = [
      'E31000R_TFE_AOI_REVIEW'
    ];

    let locationUrl = '';
    for (const i in this.location) {
      if (i === 'location') {
        locationUrl = this.location[i].href;
        break;
      }
    }
    localStorage.setItem('viewHistory', this.stringMethod.viewHistoryMethod(localStorage.getItem('viewHistory'), locationUrl));

    this.TFE_AOI.start_Timer();
  }

  onTabChange(event) {
    switch (event.index) {
      case 0:
        this.showMessage('success', 'success message', '投入产出页面打开');

        break;
      case 1:
        this.showMessage('success', 'success message', event.index);

        break;
    }
  }

  showMessage(severity: string, summary: string, detail: string) {
    this.msgs = [];
    this.msgs.push({ severity: severity, summary: summary, detail: detail });
  }

  ngOnDestroy() {
    this.TFE_AOI.clear_Timer();
  }


}
