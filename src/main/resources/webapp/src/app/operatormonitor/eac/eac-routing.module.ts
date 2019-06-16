import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefectmonitorComponent } from './defectmonitor/defectmonitor.component';
import { DetectionmissComponent } from './detectionmiss/detectionmiss.component';
import { OutmonitorbyhourComponent } from './outmonitorbyhour/outmonitorbyhour.component';
import { QualityandcapacityComponent } from './qualityandcapacity/qualityandcapacity.component';

const routes: Routes = [
  {
    path: 'defectmonitor',
    component: DefectmonitorComponent
  },
  {
    path: 'detectionmiss',
    component: DetectionmissComponent
  },
  {
    path: 'outputbyhour',
    component: OutmonitorbyhourComponent
  },
  {
    path:'capacity',
    component:QualityandcapacityComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EacRoutingModule { }
