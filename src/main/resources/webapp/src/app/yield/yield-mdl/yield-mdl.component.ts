import { Component, OnInit, ViewChild } from '@angular/core';
import { Message } from 'primeng/api';
import { BreadcrumbService } from '@breadcrumb/service/breadcrumb.service';
import { TabService } from 'core/layout/retab/service/tab.service';
import { BpshopComponent } from '../yield-chart/bpshop/bpshop.component';
import { PlatformLocation } from '@angular/common';
import { StringMethodService } from 'app/common/service/stringMethod.service';

@Component({
  selector: 'app-yield-mdl',
  templateUrl: './yield-mdl.component.html',
  styleUrls: ['./yield-mdl.component.css']
})
export class YieldMdlComponent implements OnInit {

  @ViewChild('Child_GAM1')
  Child_EA: BpshopComponent;

  @ViewChild('Child_AMI')
  Child_AMI: BpshopComponent;

  @ViewChild('Child_MAPP')
  Child_MAPP: BpshopComponent;

  @ViewChild('Child_B_Dispenser')
  Child_B_Dispenser: BpshopComponent;

  @ViewChild('Child_Chamfering')
  Child_Chamfering: BpshopComponent;

  @ViewChild('Child_A_LAMI')
  Child_A_LAMI: BpshopComponent;

  @ViewChild('Child_SHC_PT')
  Child_SHC_PT: BpshopComponent;

  @ViewChild('Child_D_LAMI')
  Child_D_LAMI: BpshopComponent;

  @ViewChild('Child_AutoClave')
  Child_AutoClave: BpshopComponent;

  @ViewChild('Child_UV_Curing')
  Child_UV_Curing: BpshopComponent;

  @ViewChild('Child_TFOF')
  Child_TFOF: BpshopComponent;

  @ViewChild('Child_DEMU')
  Child_DEMU: BpshopComponent;

  @ViewChild('Child_GAM2')
  Child_GAM2: BpshopComponent;

  @ViewChild('Child_AFI')
  Child_AFI: BpshopComponent;

  @ViewChild('Child_BFI')
  Child_BFI: BpshopComponent;

  @ViewChild('Child_RFA')
  Child_RFA: BpshopComponent;

  @ViewChild('Child_PadBending')
  Child_PadBending: BpshopComponent;

  @ViewChild('Child_2nd_ASSY')
  Child_2nd_ASSY: BpshopComponent;

  @ViewChild('Child_TPTest')
  Child_TPTest: BpshopComponent;

  @ViewChild('Child_MFI')
  Child_MFI: BpshopComponent;

  @ViewChild('Child_FAPP')
  Child_FAPP: BpshopComponent;

  @ViewChild('Child_ATG')
  Child_ATG: BpshopComponent;

  @ViewChild('Child_RW_EI')
  Child_RW_EI: BpshopComponent;

  @ViewChild('Child_RW_APP')
  Child_RW_APP: BpshopComponent;

  @ViewChild('Child_IQC_ET')
  Child_IQC_ET: BpshopComponent;

  @ViewChild('Child_IQC_APP')
  Child_IQC_APP: BpshopComponent;

  @ViewChild('Child_CUM')
  Child_CUM: BpshopComponent;

  display: boolean[];

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

  tabCount: number;

  constructor(private breadcrumbService: BreadcrumbService, public tService: TabService,
    private location: PlatformLocation,
    private stringMethod: StringMethodService) {
    this.breadcrumbService.setItems([
      { label: '良率指标' },
      { label: 'MDL' },
    ]);

    this.tService.setItems('良率指标 MDL');
  }

  ngOnInit() {
    if (this.deviceType == 'tv') {
      this.tabCount = 10;
    } else {
      this.tabCount = 7;
    }
    this.display = [true, true, true, true, true, true, true, true, true, true];
    this.items = [
      { header: 'GAM1', processType: 'GAMMA1', dataType: 'MDLMAIN', display: true, selected: false },
      { header: 'AMI', processType: 'AMI', dataType: 'MDLMAIN', display: true, selected: false },
      { header: 'MAPP', processType: 'MAPP', dataType: 'MDLMAIN', display: false, selected: false },
      { header: 'B_Dispenser', processType: 'B_DISPENSER', dataType: 'MDLMAIN', display: false, selected: false },
      { header: 'Chamfering', processType: 'CHAMFERING', dataType: 'MDLMAIN', display: false, selected: false },
      { header: 'A_LAMI', processType: 'A_LAMI', dataType: 'MDLMAIN', display: false, selected: false },
      { header: 'SHC_PT', processType: 'SHC_PT', dataType: 'MDLMAIN', display: false, selected: false },
      { header: 'D_LAMI', processType: 'D_LAMI', dataType: 'MDLMAIN', display: false, selected: false },
      { header: 'AutoClave', processType: 'AUTOCLAVE', dataType: 'MDLMAIN', display: false, selected: false },
      { header: 'UV_Curing', processType: 'UV Curing', dataType: 'MDLMAIN', display: false, selected: false },
      { header: 'TFOF', processType: 'TFOF', dataType: 'MDLMAIN', display: false, selected: false },
      { header: 'DEMU', processType: 'DEMURA', dataType: 'MDLMAIN', display: false, selected: false },
      { header: 'GAM2', processType: 'GAMMA2', dataType: 'MDLMAIN', display: false, selected: false },
      { header: 'AFI', processType: 'AFI', dataType: 'MDLMAIN', display: true, selected: false },
      { header: 'BFI', processType: 'BFI', dataType: 'MDLMAIN', display: false, selected: false },
      { header: 'RFA', processType: 'RFA', dataType: 'MDLMAIN', display: false, selected: false },
      { header: 'PadBending', processType: 'Pad Bending', dataType: 'MDLMAIN', display: false, selected: false },
      { header: '2nd_ASSY', processType: '2ND Assy', dataType: 'MDLMAIN', display: true, selected: false },
      { header: 'TPTest', processType: 'TP test', dataType: 'MDLMAIN', display: true, selected: false },
      { header: 'MFI', processType: 'MFI', dataType: 'MDLMAIN', display: true, selected: false },
      { header: 'FAPP', processType: 'FAPP', dataType: 'MDLMAIN', display: true, selected: false },
      { header: 'ATG', processType: 'ATG', dataType: 'MDLMAIN', display: true, selected: false },
      { header: 'RW_EI', processType: 'RW_EI', dataType: 'MDLREWORK', display: false, selected: false },
      { header: 'RW_APP', processType: 'RW_APP', dataType: 'MDLREWORK', display: false, selected: false },
      { header: 'IQC_ET', processType: 'IQC_ET', dataType: 'MDLMAIN', display: false, selected: false },
      { header: 'IQC_APP', processType: 'IQC_APP', dataType: 'MDLMAIN', display: false, selected: false },
      { header: 'CUM', processType: 'MDLMAINCUM', dataType: 'MDLMAINCUM', display: true, selected: false, lineName: '-' }
    ];

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

        break;
      case 1:

        break;
      case 2:

        break;
      case 3:

        break;
      case 4:

        break;
      case 5:

        break;
      case 6:

        break;
      case 7:

        break;
      case 8:

        break;
    }
  }

  leftClick() {
    let startIndex;
    let endIndex;
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i].display == true) {
        startIndex = i;
        break;
      }
    }
    for (let i = startIndex; i < this.items.length; i++) {
      if (this.items[i].display == false) {
        endIndex = i - 1;
        break;
      }
    }
    debugger;
    if (endIndex - startIndex + 1 > this.tabCount) {
      for (let i = 0; i < startIndex + 1; i++) {
        this.items[i].display = false;
      }
      for (let i = startIndex + 1; i < endIndex + 2; i++) {
        this.items[i].display = true;
      }
      for (let i = endIndex + 2; i < this.items.length; i++) {
        this.items[i].display = false;
      }
    }

  }

  rightClick() {

    let startIndex;
    let endIndex;
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i].display == true) {
        startIndex = i;
        break;
      }
    }
    for (let i = startIndex; i < this.items.length; i++) {
      if (this.items[i].display == false) {
        endIndex = i - 1;
        break;
      }
    }
    if (endIndex == undefined || endIndex == null) {
      endIndex = this.items.length - 1;
    }

    let falseStart;
    if (startIndex - 1 < 0) {
      falseStart = 0;
    } else {
      falseStart = startIndex - 1;
    }
    if (endIndex - falseStart > this.tabCount) {
      for (let i = 0; i < falseStart; i++) {
        this.items[i].display = false;
      }

      for (let i = falseStart; i < endIndex; i++) {
        this.items[i].display = true;
      }
      for (let i = endIndex; i < this.items.length; i++) {
        this.items[i].display = false;
      }
    }
  }

  tabDisplayOnChange(event) {
    if (event.checked == true) {
      let trueCount: number = 0;
      for (let i = 0; i < this.items.length; i++) {
        if (this.items[i].display == true) {
          trueCount++;
        }
      }
      if (trueCount > this.tabCount) {
        for (let i = 0; i < this.items.length; i++) {
          if (this.items[i].display == true) {
            this.items[i].display = false;
            break;
          }
        }
      }
    }
  }

}
