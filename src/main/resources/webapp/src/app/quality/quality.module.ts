import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QualityRoutingModule } from './quality-routing.module';
import { QualityAppComponent } from './quality-app/quality-app.component';
import { QualityEtComponent } from './quality-et/quality-et.component';
import { QualityCgComponent } from './quality-cg/quality-cg.component';
import { QualityAmcComponent } from './quality-amc/quality-amc.component';
import { CumComponent } from './chart/cum/cum.component';
import { DailyComponent } from './chart/daily/daily.component';
import { OperatorComponent } from './chart/operator/operator.component';
import { AmcComponent } from './chart/amc/amc.component';
import { NgxEchartsModule } from 'ngx-echarts';
import { FormsModule } from '@angular/forms';
import { PanelModule } from 'primeng/panel';
import { TabViewModule } from 'primeng/tabview';
import { RadioButtonModule, CardModule, ScrollPanelModule, GrowlModule, SplitButtonModule, DialogModule, InputSwitchModule, CalendarModule } from 'primeng/primeng';
import { EchartOptionService } from './common/echart-option.service';
import { TableModule } from 'primeng/table';
import { DatetimeService } from 'app/common/service/datetime.service';
import { QalineComponent } from './chart/qaline/qaline.component';
import { Cg1viewComponent } from './chart/cg1view/cg1view.component';
import { Cg2viewComponent } from './chart/cg2view/cg2view.component';

@NgModule({
  imports: [
    CommonModule,
    QualityRoutingModule,
    NgxEchartsModule,
    FormsModule,
    PanelModule,
    TabViewModule,
    RadioButtonModule,
    CardModule,
    ScrollPanelModule,
    GrowlModule,
    SplitButtonModule,
    DialogModule,
    InputSwitchModule,
    TableModule,
    CalendarModule
  ],
  declarations: [
    QualityAppComponent, 
    QualityEtComponent, 
    QualityCgComponent, 
    QualityAmcComponent, 
    CumComponent, 
    DailyComponent, 
    OperatorComponent, 
    AmcComponent, QalineComponent, Cg1viewComponent, Cg2viewComponent
  ],
  providers: [EchartOptionService,DatetimeService]
})
export class QualityModule { }
