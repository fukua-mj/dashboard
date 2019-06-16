import { Component, OnInit } from '@angular/core';
import { BreadcrumbService } from '@breadcrumb/service/breadcrumb.service';
import { TabService } from 'core/layout/retab/service/tab.service';
import { Message } from 'primeng/api';
import { PlatformLocation } from '@angular/common';
import { StringMethodService } from 'app/common/service/stringMethod.service';

@Component({
  selector: 'app-yield-mdlbyline',
  templateUrl: './yield-mdlbyline.component.html',
  styleUrls: ['./../yield-mdl/yield-mdl.component.css']
})
export class YieldMdlbylineComponent implements OnInit {

  index = 0;

  items: any[];

  display_Setting = false;

  currentUserName = localStorage.getItem('currentUserName');

  deviceType = localStorage.getItem('deviceType');

  shopName = 'MODULE';

  dataType = 'MDLMAIN';

  lineName = '-';

  msgs: Message[] = [];

  processType: string[] = [];

  constructor(private breadcrumbService: BreadcrumbService, public tService: TabService,
    private location:PlatformLocation,
    private stringMethod:StringMethodService) {
    this.breadcrumbService.setItems([
      { label: '良率指标' },
      { label: 'MDL ByLine' },
    ]);

    this.tService.setItems('良率指标 MDL ByLine');

    let locationUrl = '';
    for (const i in this.location) {
        if (i === 'location') {
            locationUrl = this.location[i].href;
            break;
        }
    }
    localStorage.setItem('viewHistory', this.stringMethod.viewHistoryMethod(localStorage.getItem('viewHistory'),locationUrl));

  }

  ngOnInit() {
    this.items = [
      { header: 'AMI', processType: 'AMI', dataType: 'MDLBYLINE', display: true, selected: true },
      { header: 'MAPP', processType: 'MAPP', dataType: 'MDLBYLINE', display: true, selected: false },
      { header: 'Demura', processType: 'DEMURA', dataType: 'MDLBYLINE', display: true, selected: false },
      { header: 'Gamma1', processType: 'GAMMA1', dataType: 'MDLBYLINE', display: true, selected: false },
      { header: 'Gamma2', processType: 'GAMMA2', dataType: 'MDLBYLINE', display: true, selected: false },
      { header: 'AFI', processType: 'AFI', dataType: 'MDLBYLINE', display: true, selected: false },
      { header: 'MFI', processType: 'MFI', dataType: 'MDLBYLINE', display: true, selected: false },
      { header: 'TPTest', processType: 'TP test', dataType: 'MDLBYLINE', display: true, selected: false },
      { header: 'FAPP', processType: 'FAPP', dataType: 'MDLBYLINE', display: true, selected: false },
      { header: 'CUM', processType: 'MDLBYLINECUM', dataType: 'MDLBYLINECUM', display: true, selected: false }
    ];
  }

  showTabSetting() {
    this.display_Setting = true;
  }
}
