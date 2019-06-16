import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BpRoutingModule } from './bp-routing.module';
import { BpmonitorComponent } from './bpmonitor/bpmonitor.component';
import { BpmonitorcommonComponent } from './bpmonitorcommon/bpmonitorcommon.component';
import { CalendarModule, RadioButtonModule, ButtonModule, TabViewModule } from '../../../../node_modules/primeng/primeng';
import { NgxEchartsModule } from '../../../../node_modules/ngx-echarts';
import { FormsModule } from '../../../../node_modules/@angular/forms';
import { TableModule } from '../../../../node_modules/primeng/table';
import { DrawBp_OpChart } from './bpmonitorcommon/BP_OPChartService';
import { PrdmonitorComponent } from './prdmonitor/prdmonitor.component';
import { BpprdmonitorComponent } from '../common/chart/bpprdmonitor/bpprdmonitor.component';

@NgModule({
  imports: [
    CommonModule,
    BpRoutingModule,
    CalendarModule,
    NgxEchartsModule,
    FormsModule,
    TableModule,
    CalendarModule,
    RadioButtonModule,
    ButtonModule,
    TabViewModule,
  ],
  declarations: [BpmonitorComponent, BpmonitorcommonComponent,PrdmonitorComponent,BpprdmonitorComponent],
  providers:[DrawBp_OpChart]
})
export class BpModule { }
