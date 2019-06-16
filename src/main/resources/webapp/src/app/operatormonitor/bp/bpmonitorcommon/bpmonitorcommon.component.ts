import { Component, OnInit, Input,OnDestroy  } from '@angular/core';
import { YieldParam } from '../../../production/common/model/yieldParam';
import { ApiService } from '../../../common/service/api/api.service';
import { DrawBp_OpChart } from './BP_OPChartService';

@Component({
  selector: 'app-bpmonitorcommon',
  templateUrl: './bpmonitorcommon.component.html',
  styleUrls: ['./bpmonitorcommon.component.css']
})
export class BpmonitorcommonComponent implements OnInit {

  @Input()
  Items

  @Input()
  DataType

  @Input()
  selectedGetDataWay

  selectedFilm 

  respText

  OperatorID

  YieldParam: YieldParam = new YieldParam()

  BPBPOPChartOption:any

  @Input()
  StartTime
  @Input()
  EndTime
 
  StartTimeForUse

  EndTimeForUse

  checkDataType

  ChartOption

  PeopleChartOption

  deviceType

  timer

  username

  waterMark
  constructor(
    private httpService:ApiService,
    private ChartService:DrawBp_OpChart,
  ) { }

  ngOnInit() {
    const nowDate: Date = new Date();
    const currentTime: string = nowDate.toLocaleString();
    this.selectedFilm= "ALL";
    this.deviceType = localStorage.getItem("deviceType");
    this.waterMark = 'BOECD Confidential@' + localStorage.getItem('currentUserName') + '\n' + currentTime + '@' + localStorage.getItem('currentIP');
    this.Drawchart();
    this.Task_DrawChart();
  }
  ngOnDestroy(){
  
    clearInterval(this.timer);

  }
   //TMS
   Drawchart(){
     console.log("In");
    this.DateTimeFormat();
    this.checkDataType = this.selectedGetDataWay.substring(0,3);
    if(this.checkDataType == "TMS"){
      this.YieldParam.shopName = "BP";
      this.YieldParam.productionType = this.selectedGetDataWay;
      this.YieldParam.productCategory = this.selectedFilm;
      this.YieldParam.starttime = this.StartTimeForUse;
      this.YieldParam.endtime = this.EndTimeForUse;
      this.httpService.post("/echart/operatormonitor/getBpTMSData",this.YieldParam).subscribe(
      (res)=>{
          this.respText = res;
          this.OperatorID = this.respText.OperatorID;
          if(this.selectedGetDataWay.substring(4,10) == 'Defect'){
            this.ChartOption = this.ChartService.getOption_OperatorBPTMS("BP检测科人员产能",this.respText,"{value}","点",this.waterMark);
          }else{
            this.ChartOption = this.ChartService.getOption_OperatorBPTMS("BP检测科人员产能",this.respText,"{value}","张",this.waterMark);
          }
            this.DrawTMSPeopleChart();
        },
      (error)=>{
         
      }     
     )
    }else{
      this.YieldParam.shopName = "BP";
      this.YieldParam.productionType = this.selectedGetDataWay;
      this.YieldParam.productCategory = this.selectedFilm;
      this.YieldParam.starttime = this.StartTimeForUse;
      this.YieldParam.endtime = this.EndTimeForUse;
      this.httpService.post("/echart/operatormonitor/getBpTMSRepairData",this.YieldParam).subscribe(
      (res)=>{
         this.respText = res;
         this.OperatorID = this.respText.OperatorID;
         if(this.selectedGetDataWay.substring(7,13) == "Defect"){
          this.ChartOption = this.ChartService.getOption_OperatorBPTMS("BP检测科人员产能",this.respText,"{value}","点",this.waterMark);
         }else{
          this.ChartOption = this.ChartService.getOption_OperatorBPTMS("BP检测科人员产能",this.respText,"{value}","张",this.waterMark);
         }
          this.DrawRepairPeopleChart();
        },
      (error)=>{
          
      }     
     )
    }
    
  }
  DrawTMSPeopleChart(){
    this.YieldParam.shopName = "BP";
    this.YieldParam.productionType = this.selectedGetDataWay;
    this.YieldParam.productCategory = this.selectedFilm;
    this.YieldParam.starttime = this.StartTimeForUse;
    this.YieldParam.endtime = this.EndTimeForUse;
    this.YieldParam.operationName = this.OperatorID;
    this.httpService.post("/echart/operatormonitor/getBpTMSPeopleData",this.YieldParam).subscribe(
      (res)=>{
        this.respText = res;
        if(this.selectedGetDataWay.substring(4,10) == 'Defect'){
          this.PeopleChartOption = this.ChartService.getOption_OperatorBPTMSOpeartor(this.OperatorID,this.respText,"{value}","点",this.waterMark)
        }else{
          this.PeopleChartOption = this.ChartService.getOption_OperatorBPTMSOpeartor(this.OperatorID,this.respText,"{value}","张",this.waterMark)
        }
         },
      (error)=>{
        
      }     
     )
  }

 //Repair
DrawRepairPeopleChart(){
  this.YieldParam.shopName = "BP";
  this.YieldParam.productionType = this.selectedGetDataWay;
  this.YieldParam.productCategory = this.selectedFilm;
  this.YieldParam.starttime = this.StartTimeForUse;
  this.YieldParam.endtime = this.EndTimeForUse;
  this.YieldParam.operationName = this.OperatorID;
  this.httpService.post("/echart/operatormonitor/getBpTMSPeopleData",this.YieldParam).subscribe(
    (res)=>{
      this.respText = res;
      if(this.selectedGetDataWay.substring(7,13) == "Defect"){
        this.PeopleChartOption = this.ChartService.getOption_OperatorBPTMSOpeartor(this.OperatorID,this.respText,"{value}","点",this.waterMark)
      }else{
        this.PeopleChartOption = this.ChartService.getOption_OperatorBPTMSOpeartor(this.OperatorID,this.respText,"{value}","张",this.waterMark)
      }
       },
    (error)=>{
      
    }     
   )
}

DateTimeFormat(){
    this.StartTimeForUse = this.StartTime;
    this.EndTimeForUse = this.EndTime;
    let StartHour = this.StartTimeForUse.getHours();
    let StartMonth = this.StartTimeForUse.getMonth()+1; 
    if(StartHour.length >1){
      if(StartMonth.length >1){
        this.StartTimeForUse = this.StartTimeForUse.getFullYear().toString() + (this.StartTimeForUse.getMonth()+1).toString() + this.StartTimeForUse.getDate().toString() + this.StartTimeForUse.getHours().toString(); 
      }else{
        this.StartTimeForUse = this.StartTimeForUse.getFullYear().toString() + "0" +(this.StartTimeForUse.getMonth()+1).toString() + this.StartTimeForUse.getDate().toString() + this.StartTimeForUse.getHours().toString(); 
      }
    }else{
      if(StartMonth.length >1){
        this.StartTimeForUse = this.StartTimeForUse.getFullYear().toString() + (this.StartTimeForUse.getMonth()+1).toString() + this.StartTimeForUse.getDate().toString()+"0" + this.StartTimeForUse.getHours().toString();
      }else{
        this.StartTimeForUse = this.StartTimeForUse.getFullYear().toString() + "0"+(this.StartTimeForUse.getMonth()+1).toString() + this.StartTimeForUse.getDate().toString()+"0" + this.StartTimeForUse.getHours().toString();
      }
    }
    let EndHour = this.EndTimeForUse.getHours();
    let EndMonth = this.EndTimeForUse.getMonth()+1;
    if(EndHour.length >1){
      if(EndMonth.length >1){
        this.EndTimeForUse = this.EndTimeForUse.getFullYear().toString() + (this.EndTimeForUse.getMonth()+1).toString() + this.EndTimeForUse.getDate().toString() + this.EndTimeForUse.getHours().toString(); 
      }else{
        this.EndTimeForUse = this.EndTimeForUse.getFullYear().toString() + "0" +(this.EndTimeForUse.getMonth()+1).toString() + this.EndTimeForUse.getDate().toString() + this.EndTimeForUse.getHours().toString(); 
      }
    }else{
      if(EndMonth.length >1){
        this.EndTimeForUse = this.EndTimeForUse.getFullYear().toString() + (this.EndTimeForUse.getMonth()+1).toString() + this.EndTimeForUse.getDate().toString()+"0" + this.EndTimeForUse.getHours().toString();
      }else{
        this.EndTimeForUse = this.EndTimeForUse.getFullYear().toString() + "0"+(this.EndTimeForUse.getMonth()+1).toString() + this.EndTimeForUse.getDate().toString()+"0" + this.EndTimeForUse.getHours().toString();
      }
    }
}

chartclick(Params){
   this.OperatorID = Params.name;
   this.DateTimeFormat();
   this.DrawTMSPeopleChart();
}
Task_DrawChart(){
  this.timer = setInterval(()=>{
    this.Drawchart();
  },500000)
}



}
