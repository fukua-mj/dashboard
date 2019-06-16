import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OperatormonitorRoutingModule } from './operatormonitor-routing.module';
import { NgxEchartsModule } from 'ngx-echarts';
import { RadioButtonModule, DialogModule, TabViewModule, PanelModule, DropdownModule, InputSwitchModule, CheckboxModule } from 'primeng/primeng';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    OperatormonitorRoutingModule,
    NgxEchartsModule,
    RadioButtonModule,
    DialogModule,
    TabViewModule,
    PanelModule,
    FormsModule,
    DropdownModule,
    InputSwitchModule,
    CheckboxModule
  ],
  declarations: [ ]
})
export class OperatormonitorModule { }
