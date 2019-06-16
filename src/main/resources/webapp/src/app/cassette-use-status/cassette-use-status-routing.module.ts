import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BpcstuseComponent } from './bpcstuse/bpcstuse.component';

const routes: Routes = [
{
  path:'BPCSTUse',
  component:BpcstuseComponent
}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CassetteUseStatusRoutingModule { }
