import { ApiService } from './../common/service/api/api.service';
import { ProductionChartOptionService } from './common/production-chart-option.service';
import { FormsModule } from '@angular/forms';
import { NgxEchartsModule } from 'ngx-echarts';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductionRoutingModule } from './production-routing.module';
import { ProBpComponent } from './pro-bp/pro-bp.component';
import { ProEvenComponent } from './pro-even/pro-even.component';
import { PanelModule } from '../../../node_modules/primeng/panel';
import { TabViewModule } from 'primeng/tabview';
import { RadioButtonModule, CardModule, ScrollPanelModule, GrowlModule, SplitButtonModule, CheckboxModule } from '../../../node_modules/primeng/primeng';
import { ProEacComponent } from './pro-eac/pro-eac.component';
import { ProMdlComponent } from './pro-mdl/pro-mdl.component';
import { EchartService } from 'app/common/service/echart.service';
import { ActplanComponent } from './pro-mdl/actplan/actplan.component';
import { InoutComponent } from './pro-mdl/inout/inout.component';
import { LinedifferenceComponent } from './pro-mdl/linedifference/linedifference.component';
import { WipmovementComponent } from './pro-mdl/wipmovement/wipmovement.component';
import { WipmoveBylineComponent } from './pro-mdl/wipmove-byline/wipmove-byline.component';
import { WipmoveByoperationComponent } from './pro-mdl/wipmove-byoperation/wipmove-byoperation.component';
import { StringMethodService } from 'app/common/service/stringMethod.service';
import { ProDailyreportComponent } from './pro-dailyreport/pro-dailyreport.component';
import { DailyreportComponent } from './pro-mdl/dailyreport/dailyreport.component';
import { TableModule } from 'primeng/table';
import { ScrapComponent } from './pro-mdl/scrap/scrap.component';
import { DatetimeService } from 'app/common/service/datetime.service';
import { RouterInterceptorService } from 'app/common/service/routerInterceptor.service';
import { ActivatedRouteSnapshot } from '@angular/router';
import { DummyComponent } from './pro-mdl/dummy/dummy.component';
import { RtComponent } from './pro-mdl/rt/rt.component';
import { EchartWatermarkService } from 'app/common/service/echar-watermark.service';

@NgModule({
  imports: [
    CommonModule,
    ProductionRoutingModule,
    NgxEchartsModule,
    FormsModule,
    PanelModule,
    TabViewModule,
    FormsModule,
    RadioButtonModule,
    TabViewModule,
    CardModule,
    ScrollPanelModule,
    GrowlModule,
    SplitButtonModule,
    TableModule,
    CheckboxModule
  ],
  declarations: [ProBpComponent, ProEvenComponent, ProEacComponent, ProMdlComponent,
    ActplanComponent, InoutComponent, LinedifferenceComponent, WipmovementComponent, WipmoveBylineComponent, WipmoveByoperationComponent, ProDailyreportComponent,
    DailyreportComponent,ScrapComponent,DummyComponent,RtComponent],
  providers: [
    ProductionChartOptionService, 
    ApiService, 
    EchartService,
    StringMethodService,
    DatetimeService,
    RouterInterceptorService,
    EchartWatermarkService
  ]
})
export class ProductionModule { }
