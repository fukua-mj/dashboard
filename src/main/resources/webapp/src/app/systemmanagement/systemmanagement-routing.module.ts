import { DataImportComponent } from './data-import/data-import.component';
import { MenuinfoComponent } from './menuinfo/menuinfo.component';
import { AuthorityComponent } from './authority/authority.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserinfoComponent } from './userinfo/userinfo.component';
import { TabviewinfoComponent } from './tabviewinfo/tabviewinfo.component';

const routes: Routes = [
    {
        path: 'userinfo',
        component: UserinfoComponent
    },
    {
        path: 'authority',
        component: AuthorityComponent
    },
    {
        path: 'menuinfo',
        component: MenuinfoComponent
    },
    {
        path: 'dataimport',
        component: DataImportComponent
    }, {
        path: 'roletabviewlink',
        component: TabviewinfoComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SystemmanagementRoutingModule { }
