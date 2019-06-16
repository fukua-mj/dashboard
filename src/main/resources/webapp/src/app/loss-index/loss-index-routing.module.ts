import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PanelLossComponent } from './panel-loss/panel-loss.component';

const routes: Routes = [{
 path:'PanelLoss',
 component:PanelLossComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LossIndexRoutingModule { }
