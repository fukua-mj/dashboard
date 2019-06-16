import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { PrdmonitorComponent } from 'app/eqpinfo/common/chart/prdmonitor/prdmonitor.component';
import { BreadcrumbService } from '@breadcrumb/service/breadcrumb.service';
import { TabService } from 'core/layout/retab/service/tab.service';

@Component({
  selector: 'app-mdl',
  templateUrl: './mdl.component.html',
  styleUrls: ['./mdl.component.css']
})
export class MdlComponent implements OnInit, OnDestroy {

  @ViewChild('Child_MDL')
  Child_MDL: PrdmonitorComponent;

  deviceType: string = localStorage.getItem('deviceType');

  currentUserName: string = localStorage.getItem('currentUserName');

  shopName: string = 'MODULE';

  constructor(private breadcrumbService: BreadcrumbService, public tService: TabService) {
    this.breadcrumbService.setItems([
      { label: '产能热点' },
      { label: 'MDL' },
    ]);

    this.tService.setItems('产能热点 MDL');
  }

  ngOnInit() {
    this.Child_MDL.start_Timer();
  }

  ngOnDestroy() {
    this.Child_MDL.clear_Timer();
  }

}
