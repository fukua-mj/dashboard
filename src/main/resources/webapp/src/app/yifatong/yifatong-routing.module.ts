import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { YifatongEacComponent } from './yifatong-eac/yifatong-eac.component';

const routes: Routes = [
{
   path:'YiFaTongGrid_EAC',
   component:YifatongEacComponent
}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers:[]
})
export class YiFaTongRoutingModule { }
