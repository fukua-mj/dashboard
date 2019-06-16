import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from 'app/common/service/api/api.service';
import { ProductionChartOptionService } from 'app/production/common/production-chart-option.service';
import { YieldParam } from 'app/production/common/model/yieldParam';

@Component({
  selector: 'app-linedifference',
  templateUrl: './linedifference.component.html',
  styleUrls: ['./linedifference.component.css']
})
export class LinedifferenceComponent implements OnInit {

  @Input() currentUserName;

  @Input() deviceType;

  @Input() shopName;

  waterMark;

  respText;

  LineDifferProductCategory:string[];

  selectedLineDifferProductionCategory:string = '5.1HD-7D00';

  selectedMachineType:string = 'COF%';

  LineDifferParam:YieldParam = new YieldParam();

  productionLineDifferChartOption;

  LineTimer;

  constructor(private httpService: ApiService, private echartService: ProductionChartOptionService) { }

  ngOnInit() {

    this.getproductionCutLineProductCategory();
  }

  MahcineTypeClicked(){
    this.getproductionCutLineProductCategory();
  }

  getproductionCutLineProductCategory() {
    const options = {
      params: { shopName: this.shopName, processType: this.selectedMachineType }
    };
    this.httpService.get('/echart/production/cutLineProductCategory', options).subscribe(
      (res) => {
        this.LineDifferProductCategory = <string[]>res;
        this.selectedLineDifferProductionCategory = this.LineDifferProductCategory[0];
        this.drawproductionLineDifferenceChart();
      },
      (error) => { console.log(error); }
    );
  }

  drawproductionLineDifferenceChart() {
    this.LineDifferParam.productCategory = this.selectedLineDifferProductionCategory;
    this.LineDifferParam.processtype = this.selectedMachineType;
    this.LineDifferParam.shopName = this.shopName;
    const nowDate: Date = new Date();
    const currentTime: string = nowDate.toLocaleString();
    this.waterMark = 'BOECD Confidential@' + this.currentUserName + '\n' + currentTime + '@' + localStorage.getItem('currentIP');
    this.httpService.post('/echart/production/cutLineFPY', this.LineDifferParam).subscribe(
      (res) => {
        this.respText = res;
        console.log('this.waterMark:' + this.waterMark);
        this.productionLineDifferChartOption = this.echartService.getOption_eacCutproduction(this.shopName +' Line FPY', this.respText, this.waterMark, this.deviceType);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  task_ProductionLineDifference() {
    this.LineTimer = setInterval(() => {
      this.drawproductionLineDifferenceChart();
    }, 300000);
  }

  clear_task_ProductionLineDifference() {
    if (this.LineTimer) {
      clearInterval(this.LineTimer);
    }
  }

}
