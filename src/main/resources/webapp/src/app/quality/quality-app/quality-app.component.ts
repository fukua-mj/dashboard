import { Component, OnInit, ViewChild } from '@angular/core';
import { Message } from 'primeng/api';
import { BreadcrumbService } from '@breadcrumb/service/breadcrumb.service';
import { TabService } from 'core/layout/retab/service/tab.service';
import { CumComponent } from '../chart/cum/cum.component';
import { DailyComponent } from '../chart/daily/daily.component';
import { OperatorComponent } from '../chart/operator/operator.component';
import { QalineComponent } from '../chart/qaline/qaline.component';

@Component({
  selector: 'app-quality-app',
  templateUrl: './quality-app.component.html',
  styleUrls: ['./quality-app.component.css']
})
export class QualityAppComponent implements OnInit {

  @ViewChild('CUM')
  CUM: CumComponent;

  @ViewChild('Daily')
  Daily: DailyComponent;

  @ViewChild('OpDiffer')
  OpDiffer: OperatorComponent

  @ViewChild('Line')
  Line: QalineComponent

  display: boolean[];

  index = 2;

  items: any[];

  display_Setting = false;

  currentUserName = localStorage.getItem('currentUserName');

  deviceType = localStorage.getItem('deviceType');

  lineName = '-';

  shopName = 'MODULE';

  msgs: Message[] = [];

  processType: string = 'M72000N';

  processType2: string = 'OQAAPP';

  constructor(private breadcrumbService: BreadcrumbService, public tService: TabService) {
    this.breadcrumbService.setItems([
      { label: '品质指标' },
      { label: 'APP' },
    ]);

    this.tService.setItems('品质指标 APP');
  }

  ngOnInit() {
    this.display = [true, true, true, true, true, true, true, true, true, true];
    this.items = [
      { header: 'CUM', display: true, selected: false, dataType: 'CUM' },
      { header: 'DAILY', display: true, selected: true, dataType: 'Daily' },
      { header: '人员别', display: true, selected: false, dataType: 'OPERATOR' },
      { header: 'Line别', display: true, selected: false },
    ];
  }

  showTabSetting() {
    this.display_Setting = true;
  }

  onTabChange(event) {
    switch (event.index) {
      case 0:
        this.CUM.start_Timer();
        this.Daily.clear_Timer();
        this.OpDiffer.clear_Timer();
        this.Line.clear_Timer();
        break;
      case 1:
        this.CUM.clear_Timer();
        this.Daily.start_Timer();
        this.OpDiffer.clear_Timer();
        this.Line.clear_Timer();
        break;
      case 2:
        this.CUM.clear_Timer();
        this.Daily.clear_Timer();
        this.OpDiffer.start_Timer();
        this.Line.clear_Timer();
        break;
      case 3:
        this.CUM.clear_Timer();
        this.Daily.clear_Timer();
        this.OpDiffer.clear_Timer();
        this.Line.start_Timer();
        break;
    }
  }

}

