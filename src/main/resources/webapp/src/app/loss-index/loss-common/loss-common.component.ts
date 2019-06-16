import { Component, OnInit,OnDestroy, Input } from '@angular/core';
import { TabService } from 'core/layout/retab/service/tab.service';
import { ApiService } from '../../common/service/api/api.service';
import { YieldParam } from '../../production/common/model/yieldParam';
import { PanelLossChartService } from './PanelLossChartService';
import { timer } from '../../../../node_modules/rxjs/observable/timer';
import { areIterablesEqual } from '../../../../node_modules/@angular/core/src/change_detection/change_detection_util';

@Component({
  selector: 'app-loss-common',
  templateUrl: './loss-common.component.html',
  styleUrls: ['./loss-common.component.css']
})
export class LossCommonComponent implements OnInit {


  @Input()
  ProductionTypes

  YieldParams : YieldParam = new YieldParam()

  SelectProductType

  SelectProductCategory

  respText

  PanelLossOption

  ProductCategory

  isVisitable:boolean

  timer

  waterMark
  constructor(
    private  httpService:ApiService,
    private  ChartService:PanelLossChartService
  ) { 


  }

  ngOnInit() {
    const nowDate: Date = new Date();
    const currentTime: string = nowDate.toLocaleString();
    this.waterMark = 'BOECD Confidential@' + localStorage.getItem('currentUserName') + '\n' + currentTime + '@' + localStorage.getItem('currentIP');
    this.isVisitable = true;
    this.SelectProductType = "Production"
    this.getProductionCategotry();
    this.task_DrawChart();
  }
  ngOnDestroy(){
     clearInterval(this.timer);
  }

  getProductionCategotry(){
    if(this.SelectProductType == "ALL TYPE"){
      this.isVisitable = false;
     }else{
      this.isVisitable = true;
     }
    this.YieldParams.shopName = "EAC" ;
    this.YieldParams.datatype = "LossCode";
    this.YieldParams.productionType = this.SelectProductType;
    this.httpService.post('/LossIndex/getPanelLossCategory',this.YieldParams).subscribe(
      (res)=>{
          this.respText = res;
          this.ProductCategory = this.respText;
          this.SelectProductCategory = this.ProductCategory[0];
          if(this.ProductCategory.length == 0){
             this.PanelLossOption = this.ChartService.getOption_Losszhibiao('Panel_Loss指标监控',"",this.waterMark); 
          }else{
             this.DrawPanelLossChart();
          }
      },
      (error)=>{

      }
    )
   }
  
   DrawPanelLossChart(){
    this.YieldParams.shopName = "EAC" ;
    this.YieldParams.datatype = "LossCode";
    this.YieldParams.productionType = this.SelectProductType;
    this.YieldParams.productCategory = this.SelectProductCategory;
    this.httpService.post('/LossIndex/getPanelLossData',this.YieldParams).subscribe(
       (res)=>{
           this.respText = res;
           this.PanelLossOption = this.ChartService.getOption_Losszhibiao('Panel_Loss指标监控',this.respText,this.waterMark); 
          },
       (error)=>{

       }

    )
   }
 
   task_DrawChart(){
      this.timer = setInterval(()=>
        {
           this.getProductionCategotry();
        },500000)
   }


}
