import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'bp',
    loadChildren: 'app/operatormonitor/bp/bp.module#BpModule'
  },
  {
    path: 'even',
    loadChildren: 'app/operatormonitor/even/even.module#EvenModule'
  },
  {
    path: 'eac',
    loadChildren: 'app/operatormonitor/eac/eac.module#EacModule'
  },
  {
    path: 'mdl',
    loadChildren: 'app/operatormonitor/mdl/mdl.module#MdlModule'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OperatormonitorRoutingModule { }
