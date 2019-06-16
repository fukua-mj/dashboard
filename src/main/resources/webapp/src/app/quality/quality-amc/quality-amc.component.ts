import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { BreadcrumbService } from '@breadcrumb/service/breadcrumb.service';
import { TabService } from 'core/layout/retab/service/tab.service';
import { AmcComponent } from '../chart/amc/amc.component';

@Component({
  selector: 'app-quality-amc',
  templateUrl: './quality-amc.component.html',
  styleUrls: ['./quality-amc.component.css']
})
export class QualityAmcComponent implements OnInit, OnDestroy {

  @ViewChild('Child_HCL')
  Child_HCL: AmcComponent;

  @ViewChild('Child_HF')
  Child_HF: AmcComponent;

  @ViewChild('Child_NH3')
  Child_NH3: AmcComponent;

  @ViewChild('Child_NO')
  Child_NO: AmcComponent;

  @ViewChild('Child_NO2')
  Child_NO2: AmcComponent;

  @ViewChild('Child_TS')
  Child_TS: AmcComponent;

  currentUserName = localStorage.getItem('currentUserName');

  deviceType = localStorage.getItem('deviceType');

  dataType: string[];

  constructor(private breadcrumbService: BreadcrumbService, public tService: TabService) {
    this.breadcrumbService.setItems([
      { label: '品质指标' },
      { label: 'AMC' },
    ]);

    this.tService.setItems('品质指标 AMC');
  }

  ngOnInit() {
    this.dataType = ['HCL', 'HF', 'NH3', 'NO', 'NO2', 'TS',]
    this.Child_HCL.start_Timer();
    this.Child_HF.start_Timer();
    this.Child_NH3.start_Timer();
    this.Child_NO.start_Timer();
    this.Child_NO2.start_Timer();
    this.Child_TS.start_Timer();
  }

  ngOnDestroy() {
    this.Child_HCL.clear_Timer();
    this.Child_HF.clear_Timer();
    this.Child_NH3.clear_Timer();
    this.Child_NO.clear_Timer();
    this.Child_NO2.clear_Timer();
    this.Child_TS.clear_Timer();
  }

}
