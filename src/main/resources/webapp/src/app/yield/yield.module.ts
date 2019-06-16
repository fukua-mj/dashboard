import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { YieldRoutingModule } from './yield-routing.module';
import { YieldBpComponent } from './yield-bp/yield-bp.component';
import { YieldEvenComponent } from './yield-even/yield-even.component';
import { YieldEacComponent } from './yield-eac/yield-eac.component';
import { YieldMdlComponent } from './yield-mdl/yield-mdl.component';
import { BpshopComponent } from './yield-chart/bpshop/bpshop.component';
import { Bp4layerComponent } from './yield-chart/bp4layer/bp4layer.component';
import { BpkillingComponent } from './yield-chart/bpkilling/bpkilling.component';
import { EacmdlyieldComponent } from './yield-chart/eacmdlyield/eacmdlyield.component';
import { MdlbylineComponent } from './yield-chart/mdlbyline/mdlbyline.component';
import { NgxEchartsModule } from 'ngx-echarts';
import { FormsModule } from '@angular/forms';
import { PanelModule } from 'primeng/panel';
import { TabViewModule } from 'primeng/tabview';
import { RadioButtonModule, CardModule, ScrollPanelModule, GrowlModule, SplitButtonModule, DialogModule, InputSwitchModule } from 'primeng/primeng';
import { YieldechartOptionService } from './yield-chart/yieldechart-option.service';
import { YieldMdlbylineComponent } from './yield-mdlbyline/yield-mdlbyline.component';
import { YieldStockinComponent } from './yield-stockin/yield-stockin.component';
import { StockinComponent } from './yield-chart/stockin/stockin.component';
import { YieldEventotalComponent } from './yield-eventotal/yield-eventotal.component';
import { ShoptotalComponent } from './yield-chart/shoptotal/shoptotal.component';
import { DepartmentdefectscrapComponent } from './yield-chart/departmentdefectscrap/departmentdefectscrap.component';
import { StringMethodService } from 'app/common/service/stringMethod.service';

@NgModule({
  imports: [
    CommonModule,
    YieldRoutingModule,
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
    InputSwitchModule
  ],
  declarations: [YieldBpComponent, YieldEvenComponent, YieldEacComponent, YieldMdlComponent, BpshopComponent, Bp4layerComponent, BpkillingComponent, EacmdlyieldComponent, MdlbylineComponent, YieldMdlbylineComponent, YieldStockinComponent, StockinComponent, YieldEventotalComponent, ShoptotalComponent, DepartmentdefectscrapComponent],
  providers: [
    YieldechartOptionService,
    StringMethodService
  ]
})
export class YieldModule { }
