import { TableModule } from 'primeng/table';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestpageRoutingModule } from './testpage-routing.module';
import { Test1Component } from './test1/test1.component';
import { Test2Component } from './test2/test2.component';
import { RadioButtonModule, TabMenuModule, TabViewModule, ScrollPanelModule, DropdownModule, CalendarModule, MessagesModule, MessageModule, GrowlModule, OrderListModule } from '../../../node_modules/primeng/primeng';
import { Child1Component } from './common/child1/child1.component';
import { Child2Component } from './common/child2/child2.component';
import { MessageService } from 'app/common/service/message.service';
import { CarService } from 'app/common/service/car.service';

@NgModule({
  imports: [
    CommonModule,
    TestpageRoutingModule,
    RadioButtonModule,
    FormsModule,
    ButtonModule,
    BreadcrumbModule,
    TabMenuModule,
    TableModule,
    TabViewModule,
    ScrollPanelModule,
    DropdownModule,
    CalendarModule,
    MessagesModule,
    MessageModule,
    GrowlModule,
    OrderListModule
  ],
  declarations: [Test1Component, Test2Component, Child1Component, Child2Component],
  providers: [MessageService, CarService]
})
export class TestpageModule { }
