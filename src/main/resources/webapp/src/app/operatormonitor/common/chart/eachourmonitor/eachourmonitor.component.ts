import { Component, OnInit, Input } from '@angular/core';
import { YieldParam } from 'app/production/common/model/yieldParam';
import { ApiService } from 'app/common/service/api/api.service';
import { DatetimeService } from 'app/common/service/datetime.service';

@Component({
  selector: 'app-eachourmonitor',
  templateUrl: './eachourmonitor.component.html',
  styleUrls: ['./eachourmonitor.component.css']
})
export class EachourmonitorComponent implements OnInit {

  @Input() deviceType: string;

  values: any;

  headers: any[];

  productCategory: string[];

  selectedProductionType: string = 'ALL';

  selectedProductCategory: string = '';

  selectedDataType: string = 'OPERATOR';

  gridparams: YieldParam = new YieldParam();

  respText: any;

  startDate: Date;

  endDate: Date;

  timer: any;

  constructor(private httpService: ApiService, private dateTimeService: DatetimeService) { }

  ngOnInit() {
    this.startDate = this.dateTimeService.getOperatorStartEndTimeToday()[0];
    this.endDate = this.dateTimeService.getOperatorStartEndTimeToday()[1];
    this.getProductCategory();
  }

  getProductCategory() {
    const options = {
      params: {
        shopName: 'EAC2',
        operationName: 'C52000N',
        dataType: this.selectedDataType,
        productionType: this.selectedProductionType,
        startTime: this.dateTimeService.date2string(this.startDate),
        endTime: this.dateTimeService.date2string(this.endDate)
      }
    };
    this.httpService.get('/echart/operatormonitor/getEacHourProductCategory', options).subscribe(
      (res) => {
        this.productCategory = <string[]>res;
        this.selectedProductCategory = this.productCategory[0];
        this.getGridValue();
      },
      (error) => { console.log(error); }
    );
  }

  productCategoryClicked() {
    this.getGridValue();
  }

  getGridValue() {
    this.gridparams.shopName = 'EAC2';
    this.gridparams.operationName = 'C52000N';
    this.gridparams.datatype = this.selectedDataType;
    this.gridparams.productionType = this.selectedProductionType;
    this.gridparams.productCategory = this.selectedProductCategory;
    this.gridparams.starttime = this.dateTimeService.date2string(this.startDate);
    this.gridparams.endtime = this.dateTimeService.date2string(this.endDate)
    this.gridparams.deviceType = this.deviceType;

    this.httpService.post('/echart/operatormonitor/getEacHourGridValue', this.gridparams).subscribe(
      (res) => {
        this.respText = res;
        this.gridValueInit(this.respText);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  gridValueInit(item: any) {
    let titleFontSize = '';
    if (this.deviceType == 'tv') {
      titleFontSize = '15px';
    } else {
      titleFontSize = '13px';
    }
    this.values = [
      {
        header: {
          backgroundColor: '#607D8B',
          fontColor: 'white',
          fontSize: titleFontSize,
          lineheight: 1.3,
          items: item.header
        },
        values: {
          items: item.value
        }
      },
    ];
  }

  onRowSelect(event) {

  }

  start_Timer() {
    this.timer = setInterval(() => {
      this.getGridValue();
    }, 300000);
  }

  clear_Timer() {
    if (this.timer) {
      clearInterval(this.timer);
    }
  }

}
