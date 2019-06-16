import { Component, OnInit, ViewChild } from '@angular/core';
import { Message } from 'primeng/api';
import { BreadcrumbService } from '@breadcrumb/service/breadcrumb.service';
import { TabService } from 'core/layout/retab/service/tab.service';
import { BpshopComponent } from '../yield-chart/bpshop/bpshop.component';
import { Bp4layerComponent } from '../yield-chart/bp4layer/bp4layer.component';
import { BpkillingComponent } from '../yield-chart/bpkilling/bpkilling.component';
import { PlatformLocation } from '@angular/common';
import { StringMethodService } from 'app/common/service/stringMethod.service';

@Component({
  selector: 'app-yield-bp',
  templateUrl: './yield-bp.component.html',
  styleUrls: ['./yield-bp.component.css']
})
export class YieldBpComponent implements OnInit {

  @ViewChild('Child_BpShop')
  Child_BpShop: BpshopComponent;

  @ViewChild('Child_Bp4layer1')
  Child_Bp4layer1: Bp4layerComponent;

  @ViewChild('Child_Bp4layer2')
  Child_Bp4layer2: Bp4layerComponent;

  @ViewChild('Child_Bp4layer3')
  Child_Bp4layer3: Bp4layerComponent;

  @ViewChild('Child_Bp4layer4')
  Child_Bp4layer4: Bp4layerComponent;

  @ViewChild('Child_BpKilling1')
  Child_BpKilling1: BpkillingComponent;

  @ViewChild('Child_BpKilling2')
  Child_BpKilling2: BpkillingComponent;

  @ViewChild('Child_BpKilling3')
  Child_BpKilling3: BpkillingComponent;

  @ViewChild('Child_BpKilling4')
  Child_BpKilling4: BpkillingComponent;

  @ViewChild('Child_BpKilling5')
  Child_BpKilling5: BpkillingComponent;

  display: boolean[];

  index = 1;

  currentUserName = localStorage.getItem('currentUserName');

  deviceType = localStorage.getItem('deviceType');

  shopName = 'BP';

  msgs: Message[] = [];

  processType: string[] = [];

  constructor(private breadcrumbService: BreadcrumbService, public tService: TabService,
    private location:PlatformLocation,
    private stringMethod:StringMethodService) {
    this.breadcrumbService.setItems([
      { label: '良率指标' },
      { label: 'BP' },
    ]);

    this.tService.setItems('良率指标 BP');
  }

  ngOnInit() {
    this.display = [true, true, true, true, true, true, true, true, true, true];
    this.processType = [
      'BP',
      'ACT',
      'GATE1',
      'GATE2',
      'SD',
      'ACT',
      'GATE1',
      'GATE2',
      'SD',
      'PI2'
    ];
    let locationUrl = '';
    for (const i in this.location) {
        if (i === 'location') {
            locationUrl = this.location[i].href;
            break;
        }
    }
    localStorage.setItem('viewHistory', this.stringMethod.viewHistoryMethod(localStorage.getItem('viewHistory'),locationUrl));

  }

  onTabChange(event) {
    switch (event.index) {
      case 0:
        //this.showMessage('success', 'success message', '投入产出页面打开');
        this.Child_BpShop.start_Timer();
        this.Child_Bp4layer1.clear_Timer();
        this.Child_Bp4layer2.clear_Timer();
        this.Child_Bp4layer3.clear_Timer();
        this.Child_Bp4layer4.clear_Timer();
        this.Child_BpKilling1.clear_Timer();
        this.Child_BpKilling2.clear_Timer();
        this.Child_BpKilling3.clear_Timer();
        this.Child_BpKilling4.clear_Timer();
        this.Child_BpKilling5.clear_Timer();
        break;
      case 1:
        //this.showMessage('success', 'success message', event.index);
        this.Child_BpShop.clear_Timer();
        this.Child_Bp4layer1.start_Timer();
        this.Child_Bp4layer2.clear_Timer();
        this.Child_Bp4layer3.clear_Timer();
        this.Child_Bp4layer4.clear_Timer();
        this.Child_BpKilling1.clear_Timer();
        this.Child_BpKilling2.clear_Timer();
        this.Child_BpKilling3.clear_Timer();
        this.Child_BpKilling4.clear_Timer();
        this.Child_BpKilling5.clear_Timer();
        break;
      case 2:
        //this.showMessage('success', 'success message', event.index);
        this.Child_BpShop.clear_Timer();
        this.Child_Bp4layer1.clear_Timer();
        this.Child_Bp4layer2.start_Timer();
        this.Child_Bp4layer3.clear_Timer();
        this.Child_Bp4layer4.clear_Timer();
        this.Child_BpKilling1.clear_Timer();
        this.Child_BpKilling2.clear_Timer();
        this.Child_BpKilling3.clear_Timer();
        this.Child_BpKilling4.clear_Timer();
        this.Child_BpKilling5.clear_Timer();
        break;
      case 3:
        //this.showMessage('success', 'success message', event.index);
        this.Child_BpShop.clear_Timer();
        this.Child_Bp4layer1.clear_Timer();
        this.Child_Bp4layer2.clear_Timer();
        this.Child_Bp4layer3.start_Timer();
        this.Child_Bp4layer4.clear_Timer();
        this.Child_BpKilling1.clear_Timer();
        this.Child_BpKilling2.clear_Timer();
        this.Child_BpKilling3.clear_Timer();
        this.Child_BpKilling4.clear_Timer();
        this.Child_BpKilling5.clear_Timer();
        break;
      case 4:
        //this.showMessage('success', 'success message', event.index);
        this.Child_BpShop.clear_Timer();
        this.Child_Bp4layer1.clear_Timer();
        this.Child_Bp4layer2.clear_Timer();
        this.Child_Bp4layer3.clear_Timer();
        this.Child_Bp4layer4.start_Timer();
        this.Child_BpKilling1.clear_Timer();
        this.Child_BpKilling2.clear_Timer();
        this.Child_BpKilling3.clear_Timer();
        this.Child_BpKilling4.clear_Timer();
        this.Child_BpKilling5.clear_Timer();
        break;
      case 5:
        //this.showMessage('success', 'success message', event.index);
        this.Child_BpShop.clear_Timer();
        this.Child_Bp4layer1.clear_Timer();
        this.Child_Bp4layer2.clear_Timer();
        this.Child_Bp4layer3.clear_Timer();
        this.Child_Bp4layer4.clear_Timer();
        this.Child_BpKilling1.start_Timer();
        this.Child_BpKilling2.clear_Timer();
        this.Child_BpKilling3.clear_Timer();
        this.Child_BpKilling4.clear_Timer();
        this.Child_BpKilling5.clear_Timer();
        break;
      case 6:
        //this.showMessage('success', 'success message', event.index);
        this.Child_BpShop.clear_Timer();
        this.Child_Bp4layer1.clear_Timer();
        this.Child_Bp4layer2.clear_Timer();
        this.Child_Bp4layer3.clear_Timer();
        this.Child_Bp4layer4.clear_Timer();
        this.Child_BpKilling1.clear_Timer();
        this.Child_BpKilling2.start_Timer();
        this.Child_BpKilling3.clear_Timer();
        this.Child_BpKilling4.clear_Timer();
        this.Child_BpKilling5.clear_Timer();
        break;
      case 7:
        //this.showMessage('success', 'success message', event.index);
        this.Child_BpShop.clear_Timer();
        this.Child_Bp4layer1.clear_Timer();
        this.Child_Bp4layer2.clear_Timer();
        this.Child_Bp4layer3.clear_Timer();
        this.Child_Bp4layer4.clear_Timer();
        this.Child_BpKilling1.clear_Timer();
        this.Child_BpKilling2.clear_Timer();
        this.Child_BpKilling3.start_Timer();
        this.Child_BpKilling4.clear_Timer();
        this.Child_BpKilling5.clear_Timer();
        break;
      case 8:
        //this.showMessage('success', 'success message', event.index);
        this.Child_BpShop.clear_Timer();
        this.Child_Bp4layer1.clear_Timer();
        this.Child_Bp4layer2.clear_Timer();
        this.Child_Bp4layer3.clear_Timer();
        this.Child_Bp4layer4.clear_Timer();
        this.Child_BpKilling1.clear_Timer();
        this.Child_BpKilling2.clear_Timer();
        this.Child_BpKilling3.clear_Timer();
        this.Child_BpKilling4.start_Timer();
        this.Child_BpKilling5.clear_Timer();
        break;
      case 9:
        //this.showMessage('success', 'success message', event.index);
        this.Child_BpShop.clear_Timer();
        this.Child_Bp4layer1.clear_Timer();
        this.Child_Bp4layer2.clear_Timer();
        this.Child_Bp4layer3.clear_Timer();
        this.Child_Bp4layer4.clear_Timer();
        this.Child_BpKilling1.clear_Timer();
        this.Child_BpKilling2.clear_Timer();
        this.Child_BpKilling3.clear_Timer();
        this.Child_BpKilling4.clear_Timer();
        this.Child_BpKilling5.start_Timer();
        break;
    }
  }

  showMessage(severity: string, summary: string, detail: string) {
    this.msgs = [];
    this.msgs.push({ severity: severity, summary: summary, detail: detail });
  }

}
