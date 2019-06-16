import { MdlComponent } from './mdl/mdl.component';
import { EvenComponent } from './even/even.component';
import { BpComponent } from './bp/bp.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EacComponent } from './eac/eac.component';

const routes: Routes = [
    {
        path : 'bp' ,
        component: BpComponent
    },
    {
        path : 'even',
        component: EvenComponent
    },
    {
        path : 'eac' ,
        component: EacComponent
    },
    {
        path : 'module',
        component: MdlComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StatesMonitorRoutingModule { }
