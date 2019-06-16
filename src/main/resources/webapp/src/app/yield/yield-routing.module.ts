import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { YieldBpComponent } from './yield-bp/yield-bp.component';
import { YieldEvenComponent } from './yield-even/yield-even.component';
import { YieldEacComponent } from './yield-eac/yield-eac.component';
import { YieldMdlComponent } from './yield-mdl/yield-mdl.component';
import { YieldStockinComponent } from './yield-stockin/yield-stockin.component';
import { YieldMdlbylineComponent } from './yield-mdlbyline/yield-mdlbyline.component';
import { YieldEventotalComponent } from './yield-eventotal/yield-eventotal.component';

const routes: Routes = [
  {
    path: 'yield-bp',
    component: YieldBpComponent
  },
  {
    path: 'yield-even',
    component: YieldEvenComponent
  },
  {
    path: 'yield-eventotal',
    component: YieldEventotalComponent
  },
  {
    path: 'yield-eac',
    component: YieldEacComponent
  },
  {
    path: 'yield-mdl',
    component: YieldMdlComponent
  },
  {
    path: 'yield-mdlbyline',
    component: YieldMdlbylineComponent
  },
  {
    path: 'yield-stockin',
    component: YieldStockinComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class YieldRoutingModule { }
