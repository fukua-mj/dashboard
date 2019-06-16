import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { AuthGuard } from './guards/auth.guard';
import { AuthFalseGuard } from './guards/auth.false.guard.';
import { LoginComponent } from './login/login.component';
import { LayoutFullScreenComponent } from 'core/layout/fullscreen/fullscreen.component';
import { LayoutDefaultComponent } from 'core/layout/default/default.component';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';

export const routes: Routes = [
    { path: '', redirectTo: 'boe/home', pathMatch: 'full' },
    {
        path: 'boe',
        canActivate: [AuthGuard],
        canActivateChild: [AuthGuard],
        component: AppComponent,
        children: [
            {
                path: 'home',
                component: HomepageComponent
            },
            {
                path: 'mes-ui',
                // component : AppComponent,
                loadChildren: 'app/mes-ui/mes-ui.module#MesUiModule'
            },
            {
                path: 'report-ui',
                // component : AppComponent,
                loadChildren: 'app/report-ui/report-ui.module#ReportUiModule'
            },
            {
                path: 'dash-board-ui',
                // component : AppComponent,
                loadChildren: 'app/dash-board-ui/dash-board-ui.module#DashBoardUiModule'
            },
            {
                path: 'boe-ui',
                // component : AppComponent,
                loadChildren: 'app/boe-ui/boe-ui.module#BoeUiModule'
            },
            {
                path: 'pages',
                loadChildren: 'app/boe/pages/pages.module#PagesModule'
            },
            {
                path: 'icons',

                loadChildren: 'app/iconsexamples/icons.module#IconsModule'
            },
            // { path: '*', redirectTo: '' }
            {
                path: 'production',
                loadChildren: 'app/production/production.module#ProductionModule'
            },
            {
                path: 'eqpinfo',
                loadChildren: 'app/eqpinfo/eqpinfo.module#EqpinfoModule'
            },
            {
                path: 'yield',
                loadChildren: 'app/yield/yield.module#YieldModule',
            },
            {
                path: 'testpage',
                loadChildren: 'app/testpage/testpage.module#TestpageModule'
            },
            {
                path: 'systemmanagement',
                loadChildren: 'app/systemmanagement/systemmanagement.module#SystemmanagementModule'
            },
            {
                path: 'warehouse',
                loadChildren: 'app/warehouse/warehouse.module#WarehouseModule'
            },
            {
                path: 'communication',
                loadChildren: 'app/communication/communication.module#CommunicationModule'
            },
            {
                path: 'quality',
                loadChildren: 'app/quality/quality.module#QualityModule'
            },
            {
                path: 'operatormonitor',
                loadChildren: 'app/operatormonitor/operatormonitor.module#OperatormonitorModule'
            },
            {
                path: 'cycletime',
                loadChildren: 'app/cycletime/cycletime.module#CycletimeModule'
            },
            {
                path: 'engineerdata',
                loadChildren: 'app/engineerdata/engineerdata.module#EngineerdataModule'
            },
            {
                path: 'YiFaTongGrid',
                loadChildren: 'app/yifatong/yifatong.module#YiFaTongModule'
            },
            {
                path: 'MaterialManagement',
                loadChildren: 'app/cassette-use-status/cassette-use-status.module#CassetteUseStatusModule'
            },
            {
                path: 'Loss',
                loadChildren: 'app/loss-index/loss-index.module#LossIndexModule'
            },
            {
                path: 'decission',
                loadChildren: 'app/business-decision/business-decision.module#BusinessDecisionModule'
            }
        ],

    },
    {
        path: 'login',
        canActivate: [AuthFalseGuard],
        component: LayoutFullScreenComponent,
        children: [
            { path: '', component: LoginComponent }
        ],
    },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const AppRoutes: ModuleWithProviders = RouterModule.forRoot(routes);
