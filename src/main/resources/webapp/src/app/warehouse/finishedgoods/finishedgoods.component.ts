import { Component, OnInit, ViewChild } from '@angular/core';
import { BreadcrumbService } from '@breadcrumb/service/breadcrumb.service';
import { TabService } from 'core/layout/retab/service/tab.service';
import { WarehouseAllComponent } from '../common/warehouse-all/warehouse-all.component';

@Component({
  selector: 'app-finishedgoods',
  templateUrl: './finishedgoods.component.html',
  styleUrls: ['./finishedgoods.component.css']
})
export class FinishedgoodsComponent implements OnInit {

  @ViewChild('Child_Finished')
  Child_Finished: WarehouseAllComponent;

  shopName = 'MODULE';

  currentUserName = localStorage.getItem('currentUserName');

  deviceType = localStorage.getItem('deviceType');

  constructor(private breadcrumbService: BreadcrumbService, public tService: TabService) {
    this.breadcrumbService.setItems([
      { label: '库存信息' },
      { label: '完成品' },
    ]);

    this.tService.setItems('库存信息 完成品');
  }

  ngOnInit() {
    this.Child_Finished.start_Timer();
  }

  ngOnDestroy() {
    this.Child_Finished.clear_Timer();
  }

}
