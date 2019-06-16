import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BoeListComponent } from './boe-list/boe-list.component';
import { BoeGridComponent } from './boe-grid/boe-grid.component';
import { BoeChartComponent } from './boe-chart/boe-chart.component';
import { BoeDashboardComponent } from './boe-dashboard/boe-dashboard.component';

const routes: Routes = [
  {
    path: 'boe-list',
    component: BoeListComponent
  },
  {
    path: 'boe-grid',
    component: BoeGridComponent
  },
  {
    path: 'boe-chart',
    component: BoeChartComponent
  },
  {
    path: 'boe-dashboard',
    component: BoeDashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BoeUiRoutingModule { }
