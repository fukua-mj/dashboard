import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BpmonitorComponent } from './bpmonitor/bpmonitor.component';
import { PrdmonitorComponent } from './prdmonitor/prdmonitor.component';

const routes: Routes = [
{
   path:'BP_OP',
   component:BpmonitorComponent
},
  {
    path: 'prdmonitor',
    component: PrdmonitorComponent
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BpRoutingModule { }
