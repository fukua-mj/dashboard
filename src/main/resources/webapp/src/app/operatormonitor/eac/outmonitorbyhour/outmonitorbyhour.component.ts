import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { BreadcrumbService } from '@breadcrumb/service/breadcrumb.service';
import { TabService } from 'core/layout/retab/service/tab.service';
import { EachourmonitorComponent } from 'app/operatormonitor/common/chart/eachourmonitor/eachourmonitor.component';

@Component({
  selector: 'app-outmonitorbyhour',
  templateUrl: './outmonitorbyhour.component.html',
  styleUrls: ['./outmonitorbyhour.component.css']
})
export class OutmonitorbyhourComponent implements OnInit,OnDestroy {

  @ViewChild('EACHour')
  EACHour:EachourmonitorComponent

  deviceType:string = localStorage.getItem('deviceType');

  constructor(private breadcrumbService: BreadcrumbService, public tService: TabService) {
    this.breadcrumbService.setItems([
      { label: '检测岗位' },
      { label: 'EAC小时别' },
    ]);

    this.tService.setItems('检测岗位 EAC小时别');
  }

  ngOnInit() {
    this.EACHour.start_Timer();
  }

  ngOnDestroy() {
    this.EACHour.clear_Timer();
  }

}
