import { Component, OnInit,OnDestroy } from '@angular/core';
import { ApiService } from '../../../common/service/api/api.service';
import { TabService } from 'core/layout/retab/service/tab.service';
import { YieldParam } from '../../../production/common/model/yieldParam';
import { qualityandcapacityChart } from './qualityandcapacityService';

@Component({
  selector: 'app-qualityandcapacity',
  templateUrl: './qualityandcapacity.component.html',
  styleUrls: ['./qualityandcapacity.component.css']
})
export class QualityandcapacityComponent implements OnInit {

  SelectProductionType

  SelectProductionCategory

  qualityOption

  qualityPeopleOption

  ProductionTypes

  productionCategorys

  Days

  SelectDayOrNight

  SelectDefectCode

  DefectCodes

  YieldParams:YieldParam = new YieldParam()

  respText

  OperatorId

  timer

  params

  waterMark
  constructor(
    private  httpService:ApiService,
    private  TService:TabService,
    private  ChartService:qualityandcapacityChart
  ) { 
    TService.setItems(
         "EAC 产能/品质监控"
    )
  }

  ngOnInit() {
    const nowDate: Date = new Date();
    const currentTime: string = nowDate.toLocaleString();
    this.waterMark = 'BOECD Confidential@' + localStorage.getItem('currentUserName') + '\n' + currentTime + '@' + localStorage.getItem('currentIP');
    this.ProductionTypes =[
      {value:"Production",label:"正式量产"},
      {value:"TPCN",label:"TPCN"},
      {value:"Develop",label:"客户送样"},
      {value:"Engineer",label:"工程验证"},
      {value:"PV",label:"PV"}
    ]
    this.Days=[
     {value:"THIS",label:"本班次"},
     {value:"LAST",label:"上班次"}
    ]
    this.SelectProductionType = "Production";
    this.SelectDayOrNight = "THIS";
    this.SelectDefectCode = "ALL";
    this.getCategory();
    this.Task_DrawChart();
  }
  
  ngOnDestroy(){
     clearInterval(this.timer);
   }

  
  getCategory(){
    this.YieldParams.shopName = "EAC2";
    this.YieldParams.operationName = "AET";
    this.YieldParams.productionType = this.SelectProductionType;
    this.YieldParams.datatype = this.SelectDayOrNight;
    this.httpService.post('/echart/operatormonitor/getEacOkQtyCategory',this.YieldParams).subscribe(
       (res)=>
      {
        this.respText = res;
        this.productionCategorys = this.respText;
        this.SelectProductionCategory = this.productionCategorys[0];
        this.DrawChart();
      },
       (error)=>
       {

       }
    )
   
  }
  getDefectCode(){
    this.YieldParams.shopName = "EAC2";
    this.YieldParams.operationName = "AET";
    this.YieldParams.productionType = this.SelectProductionType;
    this.YieldParams.datatype = this.SelectDayOrNight;
    this.YieldParams.datatype1 = this.OperatorId;
    this.httpService.post('/echart/operatormonitor/getPeopleEacOkQtyDefectCode',this.YieldParams).subscribe(
      (res)=>
     {
       this.respText = res;
       this.DefectCodes = this.respText; 
       this.DrawPeopleChart();
     },
      (error)=>
    {

     }
    )
   }
  DrawChart(){
    this.YieldParams.shopName = "EAC2";
    this.YieldParams.operationName = "AET";
    this.YieldParams.productionType = this.SelectProductionType;
    this.YieldParams.datatype = this.SelectDayOrNight;
    this.YieldParams.productCategory = this.SelectProductionCategory ;
    if(this.SelectProductionCategory == null){
      this.qualityOption = this.ChartService.getOption_EacChangNeng("EAC人员产能监控","",this.waterMark);
      this.qualityPeopleOption = this.ChartService.getOption_EacChangNengPeople(this.OperatorId+"  产能检控","",this.waterMark);
      this.getDefectCode();
    }else{
    this.httpService.post('/echart/operatormonitor/getEacOkQtyAllData',this.YieldParams).subscribe(
      (res)=>
     {
          this.respText = res;
          this.OperatorId = this.respText.Operator;
          this.qualityOption = this.ChartService.getOption_EacChangNeng("EAC人员产能监控",this.respText,this.waterMark);
          this.getDefectCode();
     },
      (error)=>
      {

      }
   )
  }
 }

 DrawPeopleChart(){
  this.YieldParams.shopName = "EAC2";
  this.YieldParams.operationName = "AET";
  this.YieldParams.productionType = this.SelectProductionType;
  this.YieldParams.datatype = this.SelectDayOrNight;
  this.YieldParams.productCategory = this.SelectProductionCategory;
  this.YieldParams.datatype1 = this.OperatorId;
  this.YieldParams.defectcode = this.SelectDefectCode.value;
  if(this.SelectProductionCategory == null){
    this.qualityPeopleOption = this.ChartService.getOption_EacChangNengPeople(this.OperatorId+"  产能检控","",this.waterMark);
  }else{
  this.httpService.post('/echart/operatormonitor/getPeopleEacOkQty',this.YieldParams).subscribe(
    (res)=>
   {
      this.respText = res;
      this.qualityPeopleOption = this.ChartService.getOption_EacChangNengPeople(this.OperatorId+"  产能检控",this.respText,this.waterMark);
   },
    (error)=>
    {

    }
  )
 }
}

Task_DrawChart(){
  this.timer = setInterval(()=>
    {
       console.log("In");
       this.DrawChart();
    },500000)
}

People(params){
    this.params = params;
    this.YieldParams.shopName = "EAC2";
    this.YieldParams.operationName = "AET";
    this.YieldParams.productionType = this.SelectProductionType;
    this.YieldParams.datatype = this.SelectDayOrNight;
    this.OperatorId = params.name;
    this.YieldParams.datatype1 = this.OperatorId;
    this.httpService.post('/echart/operatormonitor/getPeopleEacOkQtyDefectCode',this.YieldParams).subscribe(
      (res)=>
         {
          this.respText = res;
          this.DefectCodes = this.respText; 
         },
      (error)=>
         {

         }
    )
    this.YieldParams.defectcode = this.SelectDefectCode.value;
    if(this.SelectProductionCategory == null){
        this.qualityPeopleOption = this.ChartService.getOption_EacChangNengPeople(this.OperatorId+"  产能检控","",this.waterMark);
    }else{
        this.httpService.post('/echart/operatormonitor/getPeopleEacOkQty',this.YieldParams).subscribe(
   (res)=>
      {
        this.respText = res;
        this.qualityPeopleOption = this.ChartService.getOption_EacChangNengPeople(this.OperatorId+"  产能检控",this.respText,this.waterMark);
      },
   (error)=>
      {

      }
   )
 }
}

}
