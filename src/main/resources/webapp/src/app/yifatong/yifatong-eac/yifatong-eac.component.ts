import { Component, OnInit, ViewChild } from '@angular/core';
import { TabService } from 'core/layout/retab/service/tab.service';
import { CommonComponent } from '../common/common.component';
import { BreadcrumbService } from '@breadcrumb/service/breadcrumb.service';

@Component({
  selector: 'app-yifatong-eac',
  templateUrl: './yifatong-eac.component.html',
  styleUrls: ['./yifatong-eac.component.css']
})
export class YifatongEacComponent implements OnInit {


  cols 

  setItems 

  Oper_Desc = [
    "CUT", 
    "Aging",
    "AET",
    "EAPP"
 ];

  deviceType

  currentUserName

  index

  ShopName

  ngIf=[false,false,false,false];

  @ViewChild("Child_CommonCUT")
  Child_CommonCUT:CommonComponent

  @ViewChild("Child_CommonAging")
  Child_CommonAging:CommonComponent

  @ViewChild("Child_CommonAET")
  Child_CommonAET:CommonComponent

  @ViewChild("Child_CommonEAPP")
  Child_CommonEAPP:CommonComponent


  constructor( 
  private  common:CommonComponent  
  ) {

   
  }

  ngOnInit() {

  this.deviceType = localStorage.getItem("deviceType");

  this.currentUserName = localStorage.getItem("currentUserName");
  
  this.ShopName = "EAC2";

  this.cols = [{
    fileds:"FactoryName",header:"工厂"
  },{
   fileds:"DefectName",header:"不良名"
 },{
   fileds:"NowYield",header:"不良实时发生率"
 },{
   fileds:"NowQTY",header:"产品实时投入母数"
 },{
   fileds:"StandYield",header:"基准不良率"
 },{
   fileds:"StandQTY",header:"基准投入母数"
 },{
   fileds:"Happend",header:"异发通发生与否"
 }
];

this.index = 0 ;
}

  ngDestroy(){
    
  }


  onTabChange(event){
  
 }

}
