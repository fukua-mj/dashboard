import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProBpComponent } from './pro-bp/pro-bp.component';
import { ProEvenComponent } from './pro-even/pro-even.component';
import { ProEacComponent } from './pro-eac/pro-eac.component';
import { ProMdlComponent } from './pro-mdl/pro-mdl.component';
import { ProDailyreportComponent } from './pro-dailyreport/pro-dailyreport.component';
import { RouterInterceptorService } from 'app/common/service/routerInterceptor.service';

const routes: Routes = [
    {
        path : 'pro-bp' ,
        component: ProBpComponent,
        //canActivate:[RouterInterceptorService]
    },
    {
        path : 'pro-even',
        component: ProEvenComponent
    },
    {
        path : 'pro-eac',
        component: ProEacComponent
    },
    {
        path : 'pro-mdl',
        component: ProMdlComponent
    },
    {
        path : 'pro-dailyreport',
        component: ProDailyreportComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductionRoutingModule { }
