import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path : 'oee' ,
        loadChildren: 'app/eqpinfo/oee/oee.module#OeeModule'
    },
    {
        path : 'statesmonitor',
        loadChildren: 'app/eqpinfo/states-monitor/states-monitor.module#StatesMonitorModule'
    },
    {
        path : 'prdmonitor',
        loadChildren: 'app/eqpinfo/prdmonitor/prdmonitor.module#PrdmonitorModule'
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EqpinfoRoutingModule { }
