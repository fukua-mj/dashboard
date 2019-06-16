import { Component, OnInit, ViewChild } from '@angular/core';
import { BreadcrumbService } from '@breadcrumb/service/breadcrumb.service';
import { TabService } from 'core/layout/retab/service/tab.service';
import { EngineerdataComponent } from '../common/engineerdata/engineerdata.component';

@Component({
  selector: 'app-bp',
  templateUrl: './bp.component.html',
  styleUrls: ['./bp.component.css']
})
export class BpComponent implements OnInit {

  @ViewChild('DICD')
  DICD: EngineerdataComponent;

  @ViewChild('FICD')
  FICD: EngineerdataComponent;

  @ViewChild('THICKNESS')
  THICKNESS: EngineerdataComponent;

  @ViewChild('RS')
  RS: EngineerdataComponent;

  @ViewChild('OL')
  OL: EngineerdataComponent;

  @ViewChild('TP')
  TP: EngineerdataComponent;

  deviceType: string = localStorage.getItem('deviceType');

  currentUserName: string = localStorage.getItem('currentUserName');

  shopName: string = 'BP';

  display: boolean[];

  items: any[];

  constructor(private breadcrumbService: BreadcrumbService, public tService: TabService) {
    this.breadcrumbService.setItems([
      { label: 'EngineerData' },
      { label: 'BP' },
    ]);

    this.tService.setItems('EngineerData BP');
  }

  ngOnInit() {

    this.display = [true, true, true, true, true, true, true, true, true, true];
    this.items = [
      { header: 'DI CD', processType: 'DI CD', display: true, selected: true },
      { header: 'FI CD', processType: 'FI CD', display: true, selected: false },
      { header: 'Thickness', processType: 'Thickness', display: true, selected: false },
      { header: 'RS', processType: 'RS', display: true, selected: false },
      { header: 'OL', processType: 'OL', display: true, selected: false },
      { header: 'TP', processType: 'TP', display: true, selected: false }
    ];
  }

  onTabChange(event) {
    switch (event.index) {
      case 0:
        this.DICD.start_Timer();
        this.FICD.clear_Timer();
        this.THICKNESS.clear_Timer();
        this.RS.clear_Timer();
        this.OL.clear_Timer();
        this.TP.clear_Timer()
        break;
      case 1:
        this.DICD.clear_Timer();
        this.FICD.start_Timer();
        this.THICKNESS.clear_Timer();
        this.RS.clear_Timer();
        this.OL.clear_Timer();
        this.TP.clear_Timer()
        break;
      case 2:
        this.DICD.clear_Timer();
        this.FICD.clear_Timer();
        this.THICKNESS.start_Timer();
        this.RS.clear_Timer();
        this.OL.clear_Timer();
        this.TP.clear_Timer()
        break;
      case 3:
        this.DICD.clear_Timer();
        this.FICD.clear_Timer();
        this.THICKNESS.clear_Timer();
        this.RS.start_Timer();
        this.OL.clear_Timer();
        this.TP.clear_Timer()
        break;
      case 4:
        this.DICD.clear_Timer();
        this.FICD.clear_Timer();
        this.THICKNESS.clear_Timer();
        this.RS.clear_Timer();
        this.OL.start_Timer();
        this.TP.clear_Timer()
        break;
      case 5:
        this.DICD.clear_Timer();
        this.FICD.clear_Timer();
        this.THICKNESS.clear_Timer();
        this.RS.clear_Timer();
        this.OL.start_Timer();
        this.TP.clear_Timer()
        break;
      default:
        break;
    }
  }

}
