import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BusinessDecisionRoutingModule } from './business-decision-routing.module';
import { EnterpriseComponent } from './enterprise/enterprise.component';

@NgModule({
  imports: [
    CommonModule,
    BusinessDecisionRoutingModule
  ],
  declarations: [EnterpriseComponent]
})
export class BusinessDecisionModule { }
