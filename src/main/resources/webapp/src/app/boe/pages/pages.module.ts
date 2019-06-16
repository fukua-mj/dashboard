import { SplitButtonModule } from 'primeng/splitbutton';
import { NgxEchartsModule } from 'ngx-echarts';
import { ButtonModule } from 'primeng/button';
import { ApiService } from './../../common/service/api/api.service';
import { PanelModule } from 'primeng/panel';
import { ComponentsModule } from './../components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { TestComponent } from './test/test.component';
import { FormsModule } from '@angular/forms';
import { InputTextModule, AccordionModule, TabViewModule } from 'primeng/primeng';
import { Test1Component } from './test1/test1.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    PagesRoutingModule,
    ComponentsModule,
    FormsModule,
    PanelModule,
    ButtonModule,
    InputTextModule,
    NgxEchartsModule,
    AccordionModule,
    SplitButtonModule,
    TabViewModule,
    TranslateModule
  ],
  declarations: [TestComponent, Test1Component],
  providers: [ApiService]
})
export class PagesModule { }
