import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BpComponent } from './bp/bp.component';
import { EvenComponent } from './even/even.component';
import { EacComponent } from './eac/eac.component';
import { MdlComponent } from './mdl/mdl.component';

const routes: Routes = [
  {
    path: 'bp',
    component:BpComponent
  },
  {
    path: 'even',
    component:EvenComponent
  },
  {
    path: 'eac',
    component:EacComponent
  },
  {
    path: 'mdl',
    component:MdlComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EngineerdataRoutingModule { }
