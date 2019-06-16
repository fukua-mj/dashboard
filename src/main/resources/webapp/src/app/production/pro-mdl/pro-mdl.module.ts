import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InoutComponent } from './inout/inout.component';
import { ActplanComponent } from './actplan/actplan.component';
import { WipmovementComponent } from './wipmovement/wipmovement.component';
import { LinedifferenceComponent } from './linedifference/linedifference.component';
import { TabViewModule } from 'primeng/tabview';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ProMdlComponent } from './pro-mdl.component';
import { WipmoveBylineComponent } from './wipmove-byline/wipmove-byline.component';
import { WipmoveByoperationComponent } from './wipmove-byoperation/wipmove-byoperation.component';
import { ScrapComponent } from './scrap/scrap.component';
import { DummyComponent } from './dummy/dummy.component';
import { RtComponent } from './rt/rt.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    TabViewModule
  ],
  declarations: [InoutComponent, ActplanComponent,
    WipmovementComponent, LinedifferenceComponent, ProMdlComponent, WipmoveBylineComponent, WipmoveByoperationComponent, DummyComponent, RtComponent,]
})
export class ProMdlModule { }
