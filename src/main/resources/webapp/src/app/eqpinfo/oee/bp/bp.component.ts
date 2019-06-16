import { Component, OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked } from '@angular/core';
import { Message } from 'primeng/api';
import { BreadcrumbService } from '@breadcrumb/service/breadcrumb.service';
import { TabService } from 'core/layout/retab/service/tab.service';

@Component({
  selector: 'app-bp',
  templateUrl: './bp.component.html',
  styleUrls: ['./bp.component.css']
})
export class BpComponent implements OnInit, OnChanges,DoCheck,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked {

  display: boolean[];

  index = 0;

  items: any[];

  display_Setting = false;

  currentUserName = localStorage.getItem('currentUserName');

  deviceType = localStorage.getItem('deviceType');

  shopName = 'BP';

  msgs: Message[] = [];

  processType: string[] = [];

  constructor(private breadcrumbService: BreadcrumbService, public tService: TabService) {
    this.breadcrumbService.setItems([
      { label: 'OEE' },
      { label: 'BP' },
    ]);

    this.tService.setItems('OEE BP');
  }

  ngOnInit() {
    console.log('ngOnInit');
    this.display = [true, true, true, true, true, true, true, true, true, true];
    this.items = [
      { header: 'ELA', processType: 'ELA', display: true, selected: false },
      { header: 'PI Coater', processType: 'PI Coater', display: true, selected: false },
      { header: 'PECVD', processType: 'PECVD', display: true, selected: false },
      { header: 'Photo', processType: 'Photo', display: true, selected: false },
      { header: 'Implant', processType: 'Implant', display: true, selected: false },
      { header: 'Dry Etch', processType: 'Dry Etch', display: true, selected: false },
      { header: 'Wet Strip', processType: 'Wet Strip', display: true, selected: false },
      { header: 'Pre Clean', processType: 'Pre Clean', display: true, selected: false }
    ];
  }

  ngAfterContentChecked () {
    console.log('ngAfterContentChecked');
  }
  ngAfterContentInit() {
    console.log('ngAfterContentInit');
  }
  ngAfterViewChecked() {
    console.log('ngAfterContentInit');
  }
  ngAfterViewInit() {
    console.log('ngAfterContentInit');
  }
  ngDoCheck() {
    console.log('ngAfterContentInit');
  }
  ngOnChanges() {
    console.log('ngAfterContentInit');
  }

  showTabSetting() {
    this.display_Setting = true;
  }

}
