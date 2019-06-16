import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IconsRoutingModule } from './icons-routing.module';
import { FontawesomeComponent } from './fontawesome/fontawesome.component';
import { MaterialComponent } from './material/material.component';
import { PrimengComponent } from './primeng/primeng.component';

@NgModule({
  imports: [
    CommonModule,
    IconsRoutingModule
  ],
  declarations: [FontawesomeComponent, MaterialComponent, PrimengComponent]
})
export class IconsModule { }
