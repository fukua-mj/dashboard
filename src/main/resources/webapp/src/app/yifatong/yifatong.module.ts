import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { YiFaTongRoutingModule } from './yifatong-routing.module';
import { YifatongEacComponent } from './yifatong-eac/yifatong-eac.component';
import { CommonComponent } from './common/common.component';
import { TableModule } from '../../../node_modules/primeng/table';
import { ButtonModule } from '../../../node_modules/primeng/button';
import { RadioButtonModule, CardModule, ScrollPanelModule, GrowlModule, SplitButtonModule, DialogModule, InputSwitchModule, TabMenuModule, TabViewModule, DropdownModule, ProgressBarModule } from '../../../node_modules/primeng/primeng';
import { FormsModule } from '../../../node_modules/@angular/forms';
import { NgxEchartsModule } from '../../../node_modules/ngx-echarts';
import { TabService } from 'core/layout/retab/service/tab.service';
import {FileUploadModule} from 'primeng/fileupload';


@NgModule({
  imports: [
    CommonModule,
    YiFaTongRoutingModule,
    TableModule,
    ButtonModule,
    RadioButtonModule,
    CardModule,
    ScrollPanelModule,
    GrowlModule,
    SplitButtonModule,
    DialogModule,
    InputSwitchModule,
    FormsModule,
    NgxEchartsModule,
    TabMenuModule,
    TabViewModule,
    DropdownModule,
    FileUploadModule,
    ProgressBarModule,
    InputSwitchModule
  ],
  declarations: [YifatongEacComponent, CommonComponent],
  providers:[TabService,CommonComponent]
})
export class YiFaTongModule { }
