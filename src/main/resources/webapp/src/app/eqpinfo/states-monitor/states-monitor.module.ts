import { EqpinfoChartOptionService } from './../common/eqpinfo-chart-option.service';
import { NgxEchartsModule } from 'ngx-echarts';
import { ButtonModule } from 'primeng/button';
import { PanelModule } from 'primeng/panel';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StatesMonitorRoutingModule } from './states-monitor-routing.module';
import { BpComponent } from './bp/bp.component';
import { EvenComponent } from './even/even.component';
import { EacComponent } from './eac/eac.component';
import { MdlComponent } from './mdl/mdl.component';
import { FormsModule } from '../../../../node_modules/@angular/forms';
import { RadioButtonModule, DropdownModule, InputSwitchModule, TabViewModule, DialogModule, CheckboxModule } from '../../../../node_modules/primeng/primeng';
import { ApiService } from '../../common/service/api/api.service';
import { TableModule } from 'primeng/table';
import { StatesmonitorComponent } from '../common/chart/statesmonitor/statesmonitor.component';
import { StatesmonitormdlComponent } from '../common/chart/statesmonitormdl/statesmonitormdl.component';
import { EchartService } from 'app/common/service/echart.service';

@NgModule({
  imports: [
    CommonModule,
    StatesMonitorRoutingModule,
    FormsModule,
    PanelModule,
    ButtonModule,
    RadioButtonModule,
    NgxEchartsModule,
    DropdownModule,
    InputSwitchModule,
    TabViewModule,
    TableModule,
    DialogModule,
    CheckboxModule
  ],
  declarations: [BpComponent, EvenComponent, EacComponent, MdlComponent, StatesmonitorComponent, StatesmonitormdlComponent],
  providers: [EqpinfoChartOptionService, ApiService,EchartService]
})
export class StatesMonitorModule { }
