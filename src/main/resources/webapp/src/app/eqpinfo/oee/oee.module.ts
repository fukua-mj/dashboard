import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OeeRoutingModule } from './oee-routing.module';
import { BpComponent } from './bp/bp.component';
import { EvenComponent } from './even/even.component';
import { EacComponent } from './eac/eac.component';
import { ModuleComponent } from './module/module.component';
import { NgxEchartsModule } from 'ngx-echarts';
import { FormsModule } from '@angular/forms';
import { RadioButtonModule, PanelModule, DialogModule, TabViewModule, InputSwitchModule, ButtonModule } from 'primeng/primeng';
import { OeeComponent } from '../common/chart/oee/oee.component';
import { EqpinfoChartOptionService } from '../common/eqpinfo-chart-option.service';

@NgModule({
  imports: [
    CommonModule,
    OeeRoutingModule,
    NgxEchartsModule,
    FormsModule,
    RadioButtonModule,
    PanelModule,
    DialogModule,
    TabViewModule,
    InputSwitchModule,
    ButtonModule
  ],
  declarations: [BpComponent, EvenComponent, EacComponent, ModuleComponent, OeeComponent],
  providers: [EqpinfoChartOptionService]
})
export class OeeModule { }
