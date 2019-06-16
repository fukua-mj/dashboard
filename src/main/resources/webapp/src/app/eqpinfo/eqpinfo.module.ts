import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EqpinfoRoutingModule } from './eqpinfo-routing.module';
import { FormsModule } from '@angular/forms';
import { NgxEchartsModule } from 'ngx-echarts';
import { RadioButtonModule } from 'primeng/primeng';
import { StatesmonitormdltotalComponent } from './common/chart/statesmonitormdltotal/statesmonitormdltotal.component';

@NgModule({
  imports: [
    CommonModule,
    EqpinfoRoutingModule,
    FormsModule,
    NgxEchartsModule,
    RadioButtonModule
  ],
  declarations: [StatesmonitormdltotalComponent]
})
export class EqpinfoModule { }
