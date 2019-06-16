import { Component,OnDestroy, OnInit, ViewChild } from '@angular/core';
import { BpmonitorcommonComponent } from '../bpmonitorcommon/bpmonitorcommon.component';
import { TabService } from 'core/layout/retab/service/tab.service';
import { YieldParam } from '../../../production/common/model/yieldParam';

@Component({
  selector: 'app-bpmonitor',
  templateUrl: './bpmonitor.component.html',
  styleUrls: ['./bpmonitor.component.css']
})
export class BpmonitorComponent implements OnInit {

  @ViewChild("Child_TMScomponent")
  Child_TMScomponent:BpmonitorcommonComponent

  @ViewChild("Child_RepairComponent")
  Child_RepairComponent:BpmonitorcommonComponent

  FactoryName:String

  DataType:String

  StartTime

  EndTime

  YieldParam:YieldParam = new YieldParam()

  TMSItems:String[]

  RepairItems:String[]

  TMSDataType

  RepairDataType

  SelectTMSDataType

  SelectRepairDataType
  constructor(
   private tService:TabService,
   
  ) {
    tService.setItems(
      "BP_OP 监控"
    )
   }

  ngOnInit() {
    this.SelectTMSDataType = "TMS-Defect Count";
    this.SelectRepairDataType = "Repair-Defect Count";
  this.TMSItems=[  
      "ALL",
      "ACT",
      "GA1",
      "GA2",
      "SDT",
      "ELSE"
  ]

  this.RepairItems=[
    "ALL",
    "ACT",
    "GA1",
    "GA2",
    "SDT",
    "AND",
    "CVD",
    "ELSE",
  ]

  this.TMSDataType=[
     {
      value:"TMS-Defect Count",
      Type:"Defect Count"
     },
     {
      value:"TMS-Glass Count",
      Type:"Glass Count"
     },
  ]

  this.RepairDataType=[
    {
      value:"Repair-Defect Count",
      Type:"Defect Count"
     },
     {
      value:"Repair-Glass Count",
      Type:"Glass Count"
     },
  ]

  this.getTime();
  }
  ngOnDestory(){
  }

  getTime(){
    let timeNow = new Date();
    let CheckTime = new Date(timeNow.getFullYear(),timeNow.getMonth(),timeNow.getDate(),8,0);
    if(timeNow > CheckTime){
      //今天到明天
      let Today = new Date();
      this.StartTime = new Date(Today.getFullYear(),Today.getMonth(),Today.getDate(),8,0);
      this.EndTime = new Date(Today.getFullYear(),Today.getMonth(),Today.getDate()+1,8,0)
    }else{
      //昨天到今天
      let Today = new Date();
      this.StartTime = new Date(Today.getFullYear(),Today.getMonth(),Today.getDate()-1,8,0);
      this.EndTime = new Date(Today.getFullYear(),Today.getMonth(),Today.getDate(),8,0);
    }
 }

}
