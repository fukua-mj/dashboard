import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommonComponent } from './common/common.component';
import { BpcstuseComponent } from './bpcstuse/bpcstuse.component';
import { FormsModule } from '../../../node_modules/@angular/forms';
import { EchartService } from '../common/service/echart.service';
import { CassetteChartService } from '../cassette-use-status/common/DrawChartService'
import { CassetteUseStatusRoutingModule } from './cassette-use-status-routing.module';
import { NgxEchartsModule } from '../../../node_modules/ngx-echarts';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CassetteUseStatusRoutingModule,
    NgxEchartsModule
  ],
  declarations: [CommonComponent, BpcstuseComponent],
  providers:[EchartService,CassetteChartService]
  
})
export class CassetteUseStatusModule { }
