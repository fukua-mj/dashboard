import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EacRoutingModule } from './eac-routing.module';
import { DefectmonitorComponent } from './defectmonitor/defectmonitor.component';
import { OutmonitorbyhourComponent } from './outmonitorbyhour/outmonitorbyhour.component';
import { DetectionmissComponent } from './detectionmiss/detectionmiss.component';
import { EacmonitorComponent } from '../common/chart/eacmonitor/eacmonitor.component';
import { PanelModule } from 'primeng/panel';
import { TabViewModule } from 'primeng/tabview';
import { RadioButtonModule, DialogModule, DropdownModule, InputSwitchModule, ButtonModule, CalendarModule } from 'primeng/primeng';
import { EchartOptionService } from '../common/chart/echart-option.service';
import { NgxEchartsModule } from 'ngx-echarts';
import { FormsModule } from '@angular/forms';
import { DatetimeService } from 'app/common/service/datetime.service';
import { TableModule } from 'primeng/table';
import { EachourmonitorComponent } from '../common/chart/eachourmonitor/eachourmonitor.component';
import { QualityandcapacityComponent } from './qualityandcapacity/qualityandcapacity.component';
import { qualityandcapacityChart } from './qualityandcapacity/qualityandcapacityService';

@NgModule({
  imports: [
    CommonModule,
    EacRoutingModule,
    PanelModule,
    TabViewModule,
    RadioButtonModule,
    DialogModule,
    DropdownModule,
    NgxEchartsModule,
    InputSwitchModule,
    FormsModule,
    ButtonModule,
    CalendarModule,
    TableModule
  ],
  declarations: [DefectmonitorComponent, OutmonitorbyhourComponent, DetectionmissComponent, EacmonitorComponent, EachourmonitorComponent, QualityandcapacityComponent],
  providers: [
    EchartOptionService,
    DatetimeService,
    qualityandcapacityChart,
  ]
})
export class EacModule { }
