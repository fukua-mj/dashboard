import { AppRoutes } from './../app.routes';
import { DataImportComponent } from './data-import/data-import.component';
import { ListboxModule } from 'primeng/listbox';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SystemmanagementRoutingModule } from './systemmanagement-routing.module';
import { UserinfoComponent } from './userinfo/userinfo.component';
import { AuthorityComponent } from './authority/authority.component';
import { MenuinfoComponent } from './menuinfo/menuinfo.component';
import { FormsModule } from '../../../node_modules/@angular/forms';
import { PanelModule } from '../../../node_modules/primeng/panel';
import { PickListModule, MessageModule, MessagesModule, GrowlModule, InputMaskModule, TabViewModule, FileUploadModule } from '../../../node_modules/primeng/primeng';
import { KeyFilterModule, PaginatorModule, PasswordModule, DropdownModule } from '../../../node_modules/primeng/primeng';
import {TabMenuModule} from 'primeng/tabmenu';
import { ExcelimportComponent } from './data-import/excelimport/excelimport.component';
import { TabviewinfoComponent } from './tabviewinfo/tabviewinfo.component';

@NgModule({
  imports: [
    CommonModule,
    SystemmanagementRoutingModule,
    FormsModule,
    TableModule,
    PanelModule,
    ButtonModule,
    InputTextModule,
    DialogModule,
    ListboxModule,
    PickListModule,
    MessageModule,
    MessagesModule,
    GrowlModule,
    InputMaskModule,
    PaginatorModule,
    PasswordModule,
    DropdownModule,
    KeyFilterModule,
    TabMenuModule,
    TabViewModule,
    FileUploadModule
  ],
  declarations: [UserinfoComponent, AuthorityComponent, MenuinfoComponent, DataImportComponent, ExcelimportComponent, TabviewinfoComponent,]
})
export class SystemmanagementModule { }
