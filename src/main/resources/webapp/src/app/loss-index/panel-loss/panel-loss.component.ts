import { Component, OnInit, ViewChild } from '@angular/core';
import { LossCommonComponent } from '../loss-common/loss-common.component';
import { TabService } from 'core/layout/retab/service/tab.service';

@Component({
  selector: 'app-panel-loss',
  templateUrl: './panel-loss.component.html',
  styleUrls: ['./panel-loss.component.css']
})
export class PanelLossComponent implements OnInit {

  @ViewChild('Child_PanelLossComponent')
  Child_PanelLossComponent:LossCommonComponent

  ProductionType
  constructor(
    private  Tservice : TabService,
  ) {
    Tservice.setItems(
      "Panel Loss"
    )
   }

  ngOnInit() {
     this.ProductionType =[
        {value:"Production",label:"Production"},
        {value:"TPCN",label:"TPCN"},
        {value:"Develop",label:"Develop"},
        {value:"Engineer",label:"Engineer"} ,
        {value:"PV",label:"PV"} ,
        {value:"ALL TYPE",label:"ALL"},
     ]

  }

}
