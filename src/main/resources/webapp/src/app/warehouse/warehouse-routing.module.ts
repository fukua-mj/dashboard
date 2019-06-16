import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SemifinishedgoodsComponent } from './semifinishedgoods/semifinishedgoods.component';
import { FinishedgoodsComponent } from './finishedgoods/finishedgoods.component';

const routes: Routes = [
    {
        path : 'semifinishedgoods',
        component : SemifinishedgoodsComponent
    },
    {
        path : 'finishedgoods',
        component : FinishedgoodsComponent
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WarehouseRoutingModule { }
