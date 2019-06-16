import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LossIndexRoutingModule } from './loss-index-routing.module';
import { PanelLossComponent } from './panel-loss/panel-loss.component';
import { LossCommonComponent } from './loss-common/loss-common.component';
import { FormsModule } from '../../../node_modules/@angular/forms';
import { NgxEchartsModule } from '../../../node_modules/ngx-echarts';
import { TabViewModule } from '../../../node_modules/primeng/tabview';
import { PanelLossChartService } from './loss-common/PanelLossChartService';
import { RadioButtonModule } from '../../../node_modules/primeng/primeng';

@NgModule({
  imports: [
    CommonModule,
    LossIndexRoutingModule,
    FormsModule,
    NgxEchartsModule,
    TabViewModule,
    RadioButtonModule
  ],
  declarations: [ PanelLossComponent, LossCommonComponent],
  providers:[PanelLossChartService],
})
export class LossIndexModule { }
