import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrdmonitorRoutingModule } from './prdmonitor-routing.module';
import { BpComponent } from './bp/bp.component';
import { EvenComponent } from './even/even.component';
import { EacComponent } from './eac/eac.component';
import { MdlComponent } from './mdl/mdl.component';
import { PrdmonitorComponent } from '../common/chart/prdmonitor/prdmonitor.component';
import { ApiService } from 'app/common/service/api/api.service';
import { EqpinfoChartOptionService } from '../common/eqpinfo-chart-option.service';
import { NgxEchartsModule } from 'ngx-echarts';

@NgModule({
  imports: [
    CommonModule,
    PrdmonitorRoutingModule,
    NgxEchartsModule
  ],
  declarations: [BpComponent, EvenComponent, EacComponent, MdlComponent, PrdmonitorComponent],
  providers: [EqpinfoChartOptionService, ApiService]
})
export class PrdmonitorModule { }
