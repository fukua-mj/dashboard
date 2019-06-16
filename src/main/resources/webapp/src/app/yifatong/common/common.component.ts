import { Component, OnInit,OnDestroy, Input } from '@angular/core';
import { YieldParam } from '../../production/common/model/yieldParam';
import { ApiService } from '../../common/service/api/api.service';
import { TabService } from 'core/layout/retab/service/tab.service';
import { TableValue } from './TableValue';

@Component({
  selector: 'app-common',
  templateUrl: './common.component.html',
  styleUrls: ['./common.component.css']
})
export class CommonComponent implements OnInit {

  @Input() Oper_Desc  //AET
 
  @Input() shopName  //EAC2

  @Input() deviceType 

  @Input() currentUserName

  @Input() cols 

  @Input() test 

  operationName   

  yieldParam: YieldParam = new YieldParam()

  respText:any

  GridPanel:any

  selectedProductionType  = "Production";

  selectedProductionCategory

  productCategory

  TableValues:TableValue[]

  DateTimeForDay

  selectedTimeDate

  ShowProcessBar:boolean

  checked:boolean

  timer
  constructor(
     private httpService:ApiService,
     private tService:TabService
  ) { 
   this.tService.setItems(
     "易发通 监控"
   )
     
  }

  ngOnInit() {
    this.Task_drwaYiFaTongCUT();
    this.ShowProcessBar = false;
    this.TypeAndDateChangeClicked();
    this.checked = false;
   
  }


  ngOnDestory(){
    this.clear_Task_drwaYiFaTongCUT();
  }
  TypeAndDateChangeClicked(){
    this.yieldParam.datatype="易发通";
    this.yieldParam.productionType = this.selectedProductionType;
    this.yieldParam.operationName = this.Oper_Desc;
    this.httpService.post('/YiFaTong/YiFaTongForGetCategory',this.yieldParam).subscribe(
       (res)=>{
        this.respText = res;
        if(this.respText.ProductCategory.length == 0 ){
          this.productCategory =[];
          this.TableValues = [];
        }else{
          this.productCategory = this.respText.ProductCategory;
          this.DateTimeForDay = this.respText.DayButton;
          this.selectedTimeDate = this.DateTimeForDay[6];
          this.selectedProductionCategory = this.productCategory[0];
          this.drawTable();
        }
       
       },
       (error)=>{
       }
    )
  }
 
  drawTable(){
       this.yieldParam.date = this.selectedTimeDate.value;
       this.yieldParam.productionType = this.selectedProductionType;
       this.yieldParam.productCategory = this.selectedProductionCategory;
       this.httpService.post('/YiFaTong/YiFaTongForGetData',this.yieldParam).subscribe(
        (res)=>{
              this.respText = res;
              this.TableValues = this.respText;
        },
        (error)=>{
        }
     )
  }

  onBasicUpload(event){
    this.ShowProcessBar = true;
    let file = event.files;//取得上传文件

    //传入ForData类型文件
    let formdata:FormData = new FormData();

    //多文件导入
    file.forEach(data => {
      formdata.append("file",data);
    });


    this.httpService.post("/YiFaTong/getYiFaTongExcelData",formdata).subscribe(
      (res)=>{
        this.respText = res;
        this.ShowProcessBar = false;
        alert(this.respText.Message);
        this.checked = false;
        this.test = false;
      }
    )

  }
  onProgressLabel(event){
    alert("处理中");
    console.log(event);
   

  }

  handleChange(event){
    this.test = event.checked;
  }

  Task_drwaYiFaTongCUT(){
    this.timer = setInterval(()=>{
      this.TypeAndDateChangeClicked();
      this.drawTable();
    },500000)  
}

clear_Task_drwaYiFaTongCUT(){
    clearInterval(this.timer);    
}

}
