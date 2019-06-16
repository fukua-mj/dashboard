import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EngineerdataRoutingModule } from './engineerdata-routing.module';
import { BpComponent } from './bp/bp.component';
import { EvenComponent } from './even/even.component';
import { EacComponent } from './eac/eac.component';
import { MdlComponent } from './mdl/mdl.component';
import { EngineerdataComponent } from './common/engineerdata/engineerdata.component';
import { NgxEchartsModule } from 'ngx-echarts';
import { PanelModule } from 'primeng/panel';
import { RadioButtonModule, TabViewModule, GrowlModule } from 'primeng/primeng';
import { FormsModule } from '@angular/forms';
import { EchartOptionService } from './common/echart-option.service';
import { ApiService } from 'app/common/service/api/api.service';

@NgModule({
  imports: [
    CommonModule,
    EngineerdataRoutingModule,
    NgxEchartsModule,
    PanelModule,
    RadioButtonModule,
    FormsModule,
    TabViewModule,
    GrowlModule
  ],
  declarations: [BpComponent, EvenComponent, EacComponent, MdlComponent, EngineerdataComponent],
  providers:[EchartOptionService,ApiService]
})
export class EngineerdataModule { }
