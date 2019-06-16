import { Component, OnInit, Input } from '@angular/core';
import { YieldParam } from 'app/production/common/model/yieldParam';
import { ApiService } from 'app/common/service/api/api.service';

@Component({
  selector: 'app-bpprdmonitor',
  templateUrl: './bpprdmonitor.component.html',
  styleUrls: ['./bpprdmonitor.component.css']
})
export class BpprdmonitorComponent implements OnInit {

  @Input() shopName: string;

  @Input() deviceType: string;

  values: any;

  headers: any[];

  lineType: string[];

  selectedLineType: string = '';

  selectedDate: string = 'Today';

  selectedDataType: string = 'OPERPROD HOUR';

  gridparams: YieldParam = new YieldParam();

  respText: any;

  constructor(private httpService: ApiService) { }

  ngOnInit() {
    this.getLineType();
  }

  getLineType() {
    const options = {
      params: {
        shopName: this.shopName,
        datatype: this.selectedDataType,
        date: this.selectedDate
      }
    };
    this.httpService.get('/echart/operatormonitor/getBPPrdHourMonitorLineType', options).subscribe(
      (res) => {
        this.lineType = <string[]>res;
        this.selectedLineType = this.lineType[0];
        this.getGridValue();
      },
      (error) => { console.log(error); }
    );
  }

  dataTypeCilcked() {
    this.getLineType();
  }

  getGridValue() {
    this.gridparams.shopName = this.shopName;
    this.gridparams.datatype = this.selectedDataType;
    this.gridparams.linetype = this.selectedLineType;
    this.gridparams.date = this.selectedDate;
    this.gridparams.deviceType = this.deviceType;

    this.httpService.post('/echart/operatormonitor/getBPPrdHourMonitorGridValue', this.gridparams).subscribe(
      (res) => {
        this.respText = res;
        this.gridValueInit(this.respText.value);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  gridValueInit(item: any) {
    let headerFontSize: string = '';
    if (this.deviceType == 'tv') {
      headerFontSize = '15px';
    } else {
      headerFontSize = '12px';
    }
    this.values = [
      {
        header: {
          backgroundColor: '#607D8B',
          fontColor: 'white',
          fontsize: headerFontSize,
          lineheight: 1.3,
          items: [
            [
              { header: 'ID', width: '70px' },
              { header: 'Sum' },
              { header: '06H' },
              { header: '07H' },
              { header: '08H' },
              { header: '09H' },
              { header: '10H' },
              { header: '11H' },
              { header: '12H' },
              { header: '13H' },
              { header: '14H' },
              { header: '15H' },
              { header: '16H' },
              { header: '17H' },
              { header: '18H' },
              { header: '19H' },
              { header: '20H' },
              { header: '21H' },
              { header: '22H' },
              { header: '23H' },
              { header: '00H' },
              { header: '01H' },
              { header: '02H' },
              { header: '03H' },
              { header: '04H' },
              { header: '05H' },
            ],
          ]
        },
        values: {
          items: item
        }
      },
    ];
  }

  onRowSelect(event) {

  }

}
