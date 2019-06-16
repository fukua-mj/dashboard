import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from 'app/common/service/api/api.service';
import { Killing } from 'app/common/model/system/killing';
import { CGPlan } from 'app/common/model/system/cgPlan';
import { OperatorTarget } from 'app/common/model/system/operatortarget';
import { OperatorInfo } from 'app/common/model/system/operatorinfo';

@Component({
  selector: 'app-excelimport',
  templateUrl: './excelimport.component.html',
  styleUrls: ['./excelimport.component.css']
})
export class ExcelimportComponent implements OnInit {

  @Input() tableName: string;

  @Input() cols: any[];

  @Input() uploadUrl: string;

  @Input() gridUrl: string;

  @Input() searchItem:any[];

  gridList: any[];

  constructor(private service: ApiService) { }

  ngOnInit() {
    this.getGridData();
  }

  getGridData() {
    this.service.getAll(this.gridUrl).subscribe(
      (res) => {
        debugger;
        if (this.tableName == 'Killing') {
          this.gridList = <Killing[]>res;
        } else if(this.tableName == 'CG'){
          this.gridList = <CGPlan[]>res;
        } else if(this.tableName == 'OperatorTarget') {
          this.gridList = <OperatorTarget[]>res;
        } else if(this.tableName == 'OperatorInfo') {
          this.gridList = <OperatorInfo[]>res;
        }

      },
      (error) => { console.log(error); }
    );
  }

  onUpload(event) {
    const res = event.xhr;
    const result = JSON.parse(res.response);
    console.log(result);
  }

}
