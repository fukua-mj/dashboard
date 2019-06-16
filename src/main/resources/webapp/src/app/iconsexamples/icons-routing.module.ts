import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FontawesomeComponent } from './fontawesome/fontawesome.component';
import { MaterialComponent } from './material/material.component';
import { PrimengComponent } from './primeng/primeng.component';
const routes: Routes = [
  {
    path: 'fontawesome',
    component: FontawesomeComponent
  },
  {
    path: 'material',
    component: MaterialComponent
  },
  {
    path: 'primeng',
    component: PrimengComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IconsRoutingModule { }
