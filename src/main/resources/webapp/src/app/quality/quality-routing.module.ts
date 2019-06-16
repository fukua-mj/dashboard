import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QualityAppComponent } from './quality-app/quality-app.component';
import { QualityEtComponent } from './quality-et/quality-et.component';
import { QualityCgComponent } from './quality-cg/quality-cg.component';
import { QualityAmcComponent } from './quality-amc/quality-amc.component';

const routes: Routes = [
  {
    path: 'app',
    component: QualityAppComponent
  },
  {
    path: 'et',
    component: QualityEtComponent
  },
  {
    path: 'cg',
    component: QualityCgComponent
  },
  {
    path: 'amc',
    component: QualityAmcComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QualityRoutingModule { }
