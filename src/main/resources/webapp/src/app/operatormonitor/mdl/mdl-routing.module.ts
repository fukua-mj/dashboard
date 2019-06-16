import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClassdifferenceComponent } from './classdifference/classdifference.component';
import { DefectmonitorComponent } from './defectmonitor/defectmonitor.component';
import { DetectionmissComponent } from './detectionmiss/detectionmiss.component';
import { DetectionoverComponent } from './detectionover/detectionover.component';
import { OperatordifferenceComponent } from './operatordifference/operatordifference.component';
import { OperatordifferencedetailComponent } from './operatordifferencedetail/operatordifferencedetail.component';

const routes: Routes = [
  {
    path: 'classdiffer',
    component: ClassdifferenceComponent
  },
  {
    path: 'defectmonitor',
    component: DefectmonitorComponent
  },
  {
    path: 'detectionmiss',
    component: DetectionmissComponent
  },
  {
    path: 'detectionover',
    component: DetectionoverComponent
  },
  {
    path: 'operatordiff',
    component: OperatordifferenceComponent
  },
  {
    path: 'operatordiffdetail',
    component: OperatordifferencedetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MdlRoutingModule { }
