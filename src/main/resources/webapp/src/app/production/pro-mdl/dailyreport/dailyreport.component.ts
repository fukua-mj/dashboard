import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { ApiService } from 'app/common/service/api/api.service';
import { YieldParam } from 'app/production/common/model/yieldParam';

@Component({
  selector: 'app-dailyreport',
  templateUrl: './dailyreport.component.html',
  styleUrls: ['./dailyreport.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DailyreportComponent implements OnInit {

  @Input() deviceType: string;

  values: any;

  headers: any[];

  productCategory: string[];

  selectedProductCategory: string[];

  AllButtonValue: string;

  gridparams: YieldParam = new YieldParam();

  respText: any;

  constructor(private httpService: ApiService) { }

  ngOnInit() {
    this.getProductCategory();
  }

  getProductCategory() {
    const options = {
      params: {}
    };
    this.httpService.get('/echart/production/getDailyReportCategory', options).subscribe(
      (res) => {
        this.productCategory = <string[]>res;
        this.selectedProductCategory = [this.productCategory[0]];
        this.getDailyReportValue();
      },
      (error) => { console.log(error); }
    );
  }

  productCategoryClicked() {
    this.getDailyReportValue();
  }

  AllChecked() {
    if (this.AllButtonValue == 'ALL') {
      this.selectedProductCategory = this.productCategory;
    } else {
      this.selectedProductCategory = [];
    }
    this.getDailyReportValue();
  }

  getDailyReportValue() {
    this.gridparams.productCategorys = this.selectedProductCategory;
    this.gridparams.deviceType = this.deviceType;

    this.httpService.post('/echart/production/dailyReportValue', this.gridparams).subscribe(
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
    let fontSize = '';
    if (this.deviceType == 'tv') {
      fontSize = '15px';
    } else {
      fontSize = '13px';
    }
    this.values = [
      {
        header: {
          backgroundColor: '#607D8B',
          fontColor: 'white',
          fontSize: fontSize,
          lineheight: 1.3,
          items: [
            [
              { header: 'Shop', rowspan: 2 },
              { header: 'Product Category', rowspan: 2 },
              { header: 'In/Out', rowspan: 2 },
              { header: 'Plan', colspan: 3 },
              { header: 'Act', colspan: 2 },
              { header: 'Balance', colspan: 2 },
              { header: '达成率', rowspan: 2 },
              { header: 'Scrap', colspan: 2 },
              { header: 'Cum Yield', rowspan: 2 }
            ],
            [
              { header: 'Month' },
              { header: 'Cum' },
              { header: 'Daily' },
              { header: 'Cum' },
              { header: 'Daily' },
              { header: 'Cum' },
              { header: 'Daily' },
              { header: 'Cum' },
              { header: 'Daily' }
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
