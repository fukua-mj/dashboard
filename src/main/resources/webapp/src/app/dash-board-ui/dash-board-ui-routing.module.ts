import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Type1Component } from './type1/type1.component';
import { Type2Component } from './type2/type2.component';
import { Type3Component } from './type3/type3.component';

const routes: Routes = [
  {
    path : 'type1',
    component : Type1Component
  },
  {
    path : 'type2',
    component : Type2Component
  },
  {
    path : 'type3',
    component : Type3Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashBoardUiRoutingModule { }
