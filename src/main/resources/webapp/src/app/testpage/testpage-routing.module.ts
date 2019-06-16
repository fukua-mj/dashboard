import { Test2Component } from './test2/test2.component';
import { Test1Component } from './test1/test1.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: 'test1',
        component: Test1Component
    },
    {
        path: 'test2',
        component: Test2Component
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestpageRoutingModule { }
