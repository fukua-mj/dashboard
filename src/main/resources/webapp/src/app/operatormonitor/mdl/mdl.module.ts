import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MdlRoutingModule } from './mdl-routing.module';
import { DetectionmissComponent } from './detectionmiss/detectionmiss.component';
import { DefectmonitorComponent } from './defectmonitor/defectmonitor.component';
import { OperatordifferenceComponent } from './operatordifference/operatordifference.component';
import { DetectionoverComponent } from './detectionover/detectionover.component';
import { ClassdifferenceComponent } from './classdifference/classdifference.component';
import { OperatordifferencedetailComponent } from './operatordifferencedetail/operatordifferencedetail.component';
import { PanelModule } from 'primeng/panel';
import { TabViewModule } from 'primeng/tabview';
import { RadioButtonModule, DialogModule, DropdownModule, InputSwitchModule, ButtonModule, CalendarModule } from 'primeng/primeng';
import { NgxEchartsModule } from 'ngx-echarts';
import { FormsModule } from '@angular/forms';
import { MdlmonitorComponent } from '../common/chart/mdlmonitor/mdlmonitor.component';
import { EchartOptionService } from '../common/chart/echart-option.service';
import { DatetimeService } from 'app/common/service/datetime.service';
import { OpdifferenceComponent } from '../common/chart/opdifference/opdifference.component';

@NgModule({
  imports: [
    CommonModule,
    MdlRoutingModule,
    PanelModule,
    TabViewModule,
    RadioButtonModule,
    DialogModule,
    DropdownModule,
    NgxEchartsModule,
    InputSwitchModule,
    FormsModule,
    ButtonModule,
    CalendarModule
  ],
  declarations: [
    DetectionmissComponent, 
    DefectmonitorComponent, 
    OperatordifferenceComponent, 
    DetectionoverComponent, 
    ClassdifferenceComponent, 
    OperatordifferencedetailComponent,
    MdlmonitorComponent,
    OpdifferenceComponent
  ],
  providers:[
    EchartOptionService,
    DatetimeService
  ]
})
export class MdlModule { }
