import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WarehouseRoutingModule } from './warehouse-routing.module';
import { SemifinishedgoodsComponent } from './semifinishedgoods/semifinishedgoods.component';
import { FinishedgoodsComponent } from './finishedgoods/finishedgoods.component';
import { WarehouseTotalComponent } from './common/warehouse-total/warehouse-total.component';
import { WarehouseGradeComponent } from './common/warehouse-grade/warehouse-grade.component';
import { WarehouseTimeComponent } from './common/warehouse-time/warehouse-time.component';
import { EchartOptionService } from './common/echart-option.service';
import { NgxEchartsModule } from 'ngx-echarts';
import { WarehouseAllComponent } from './common/warehouse-all/warehouse-all.component';

@NgModule({
  imports: [
    CommonModule,
    WarehouseRoutingModule,
    NgxEchartsModule
  ],
  declarations: [SemifinishedgoodsComponent, FinishedgoodsComponent, WarehouseTotalComponent, WarehouseGradeComponent, WarehouseTimeComponent, WarehouseAllComponent],
  providers: [EchartOptionService]
})
export class WarehouseModule { }
