import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CycletimeRoutingModule } from './cycletime-routing.module';
import { CycletimeBpComponent } from './cycletime-bp/cycletime-bp.component';
import { CycletimeEvenComponent } from './cycletime-even/cycletime-even.component';
import { CycletimeEacComponent } from './cycletime-eac/cycletime-eac.component';
import { CycletimeMdlComponent } from './cycletime-mdl/cycletime-mdl.component';
import { CycletimeComponent } from './common/chart/cycletime/cycletime.component';
import { NgxEchartsModule } from 'ngx-echarts';
import { RadioButtonModule } from 'primeng/primeng';
import { EchartoptionService } from './common/echartoption.service';
import { FormsModule } from '@angular/forms';
import { StringMethodService } from 'app/common/service/stringMethod.service';

@NgModule({
  imports: [
    CommonModule,
    CycletimeRoutingModule,
    NgxEchartsModule,
    RadioButtonModule,
    FormsModule
  ],
  declarations: [
    CycletimeBpComponent,
    CycletimeEvenComponent,
    CycletimeEacComponent,
    CycletimeMdlComponent,
    CycletimeComponent
  ],
  providers: [
    EchartoptionService,
    StringMethodService
  ]
})
export class CycletimeModule { }
