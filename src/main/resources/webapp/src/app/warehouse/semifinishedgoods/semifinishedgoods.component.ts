import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { BreadcrumbService } from '@breadcrumb/service/breadcrumb.service';
import { TabService } from 'core/layout/retab/service/tab.service';
import { WarehouseAllComponent } from '../common/warehouse-all/warehouse-all.component';

@Component({
  selector: 'app-semifinishedgoods',
  templateUrl: './semifinishedgoods.component.html',
  styleUrls: ['./semifinishedgoods.component.css']
})
export class SemifinishedgoodsComponent implements OnInit,OnDestroy {

  @ViewChild('Child_SemiFinished')
  Child_SemiFinished: WarehouseAllComponent;

  shopName = 'EAC2';

  currentUserName = localStorage.getItem('currentUserName');

  deviceType = localStorage.getItem('deviceType');

  constructor(private breadcrumbService: BreadcrumbService, public tService: TabService) {
    this.breadcrumbService.setItems([
      { label: '库存信息' },
      { label: '半成品' },
    ]);

    this.tService.setItems('库存信息 半成品');
  }

  ngOnInit() {
    this.Child_SemiFinished.start_Timer();
  }

  ngOnDestroy() {
    this.Child_SemiFinished.clear_Timer();
  }

}
