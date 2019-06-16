import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CycletimeBpComponent } from './cycletime-bp/cycletime-bp.component';
import { CycletimeEvenComponent } from './cycletime-even/cycletime-even.component';
import { CycletimeEacComponent } from './cycletime-eac/cycletime-eac.component';
import { CycletimeMdlComponent } from './cycletime-mdl/cycletime-mdl.component';

const routes: Routes = [
  {
    path: 'cycletime-bp',
    component: CycletimeBpComponent
  },
  {
    path: 'cycletime-even',
    component: CycletimeEvenComponent
  },
  {
    path: 'cycletime-eac',
    component: CycletimeEacComponent
  },
  {
    path: 'cycletime-mdl',
    component: CycletimeMdlComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CycletimeRoutingModule { }
