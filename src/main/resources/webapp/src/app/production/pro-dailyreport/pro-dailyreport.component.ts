import { Component, OnInit } from '@angular/core';
import { BreadcrumbService } from '@breadcrumb/service/breadcrumb.service';
import { TabService } from 'core/layout/retab/service/tab.service';

@Component({
  selector: 'app-pro-dailyreport',
  templateUrl: './pro-dailyreport.component.html',
  styleUrls: ['./pro-dailyreport.component.css']
})
export class ProDailyreportComponent implements OnInit {

  deviceType: string = localStorage.getItem('deviceType');

  gridValues: any;

  constructor(
    private breadcrumbService: BreadcrumbService, public tService: TabService) {
    this.breadcrumbService.setItems([
      { label: '产量指标' },
      { label: 'Daily Report' },
    ]);

    this.tService.setItems('产量指标 Daily Report');
  }

  ngOnInit() {
    //this.initGridValue();
  }

  initGridValue() {
    this.gridValues = [
      {
        header: {
          backgroundColor: '#607D8B',
          items: [
            [
              { header: 'Shop', rowspan: 2 },
              { header: 'ProductCategory', rowspan: 2 },
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
          items: [
            [
              { value: 'BP', rowspan: 10 },
              { value: 'Sum', rowspan: 2 },
              { value: 'IN' },
              { value: '15,540' },
              { value: '9,716' },
              { value: '560' },
              { value: '9.576' },
              { value: '588' },
              { value: '-140', color: 'red' },
              { value: '28' },
              { value: '61.6%' },
              { value: '29' },
              { value: '4' },
              { value: '0.0%' }
            ],
            [
              { value: 'Out' },
              { value: '15,540' },
              { value: '9,716' },
              { value: '560' },
              { value: '9.576' },
              { value: '588' },
              { value: '-140', color: 'red' },
              { value: '28' },
              { value: '61.6%' },
              { value: '29' },
              { value: '4' },
              { value: '0.0%' }
            ],
            [
              { value: '6.47FHD', rowspan: 2 },
              { value: 'IN' },
              { value: '15,540' },
              { value: '9,716' },
              { value: '560' },
              { value: '9.576' },
              { value: '588' },
              { value: '-140', color: 'red' },
              { value: '28' },
              { value: '61.6%' },
              { value: '29' },
              { value: '4' },
              { value: '0.0%' }
            ],
            [
              { value: 'Out' },
              { value: '15,540' },
              { value: '9,716' },
              { value: '560' },
              { value: '9.576' },
              { value: '588' },
              { value: '-140', color: 'red' },
              { value: '28' },
              { value: '61.6%' },
              { value: '29' },
              { value: '4' },
              { value: '0.0%' }
            ],
            [
              { value: '6.39QHD', rowspan: 2 },
              { value: 'IN' },
              { value: '15,540' },
              { value: '9,716' },
              { value: '560' },
              { value: '9.576' },
              { value: '588' },
              { value: '-140', color: 'red' },
              { value: '28' },
              { value: '61.6%' },
              { value: '29' },
              { value: '4' },
              { value: '0.0%' }
            ],
            [
              { value: 'Out' },
              { value: '15,540' },
              { value: '9,716' },
              { value: '560' },
              { value: '9.576' },
              { value: '588' },
              { value: '-140', color: 'red' },
              { value: '28' },
              { value: '61.6%' },
              { value: '29' },
              { value: '4' },
              { value: '0.0%' }
            ],
            [
              { value: '5.99QHD', rowspan: 2 },
              { value: 'IN' },
              { value: '15,540' },
              { value: '9,716' },
              { value: '560' },
              { value: '9.576' },
              { value: '588' },
              { value: '-140', color: 'red' },
              { value: '28' },
              { value: '61.6%' },
              { value: '29' },
              { value: '4' },
              { value: '0.0%' }
            ],
            [
              { value: 'Out' },
              { value: '15,540' },
              { value: '9,716' },
              { value: '560' },
              { value: '9.576' },
              { value: '588' },
              { value: '-140', color: 'red' },
              { value: '28' },
              { value: '61.6%' },
              { value: '29' },
              { value: '4' },
              { value: '0.0%' }
            ],
            [
              { value: '5.1HD', rowspan: 2 },
              { value: 'IN' },
              { value: '15,540' },
              { value: '9,716' },
              { value: '560' },
              { value: '9.576' },
              { value: '588' },
              { value: '-140', color: 'red' },
              { value: '28' },
              { value: '61.6%' },
              { value: '29' },
              { value: '4' },
              { value: '0.0%' }
            ],
            [
              { value: 'Out' },
              { value: '15,540' },
              { value: '9,716' },
              { value: '560' },
              { value: '9.576' },
              { value: '588' },
              { value: '-140', color: 'red' },
              { value: '28' },
              { value: '61.6%' },
              { value: '29' },
              { value: '4' },
              { value: '0.0%' }
            ],

            [
              { value: 'EAC', rowspan: 10 },
              { value: 'Sum', rowspan: 2 },
              { value: 'IN' },
              { value: '15,540' },
              { value: '9,716' },
              { value: '560' },
              { value: '9.576' },
              { value: '588' },
              { value: '-140', color: 'red' },
              { value: '28' },
              { value: '61.6%' },
              { value: '29' },
              { value: '4' },
              { value: '0.0%' }
            ],
            [
              { value: 'Out' },
              { value: '15,540' },
              { value: '9,716' },
              { value: '560' },
              { value: '9.576' },
              { value: '588' },
              { value: '-140', color: 'red' },
              { value: '28' },
              { value: '61.6%' },
              { value: '29' },
              { value: '4' },
              { value: '0.0%' }
            ],
            [
              { value: '6.47FHD', rowspan: 2 },
              { value: 'IN' },
              { value: '15,540' },
              { value: '9,716' },
              { value: '560' },
              { value: '9.576' },
              { value: '588' },
              { value: '-140', color: 'red' },
              { value: '28' },
              { value: '61.6%' },
              { value: '29' },
              { value: '4' },
              { value: '0.0%' }
            ],
            [
              { value: 'Out' },
              { value: '15,540' },
              { value: '9,716' },
              { value: '560' },
              { value: '9.576' },
              { value: '588' },
              { value: '-140', color: 'red' },
              { value: '28' },
              { value: '61.6%' },
              { value: '29' },
              { value: '4' },
              { value: '0.0%' }
            ],
            [
              { value: '6.39QHD', rowspan: 2 },
              { value: 'IN' },
              { value: '15,540' },
              { value: '9,716' },
              { value: '560' },
              { value: '9.576' },
              { value: '588' },
              { value: '-140', color: 'red' },
              { value: '28' },
              { value: '61.6%' },
              { value: '29' },
              { value: '4' },
              { value: '0.0%' }
            ],
            [
              { value: 'Out' },
              { value: '15,540' },
              { value: '9,716' },
              { value: '560' },
              { value: '9.576' },
              { value: '588' },
              { value: '-140', color: 'red' },
              { value: '28' },
              { value: '61.6%' },
              { value: '29' },
              { value: '4' },
              { value: '0.0%' }
            ],
            [
              { value: '5.99QHD', rowspan: 2 },
              { value: 'IN' },
              { value: '15,540' },
              { value: '9,716' },
              { value: '560' },
              { value: '9.576' },
              { value: '588' },
              { value: '-140', color: 'red' },
              { value: '28' },
              { value: '61.6%' },
              { value: '29' },
              { value: '4' },
              { value: '0.0%' }
            ],
            [
              { value: 'Out' },
              { value: '15,540' },
              { value: '9,716' },
              { value: '560' },
              { value: '9.576' },
              { value: '588' },
              { value: '-140', color: 'red' },
              { value: '28' },
              { value: '61.6%' },
              { value: '29' },
              { value: '4' },
              { value: '0.0%' }
            ],
            [
              { value: '5.1HD', rowspan: 2 },
              { value: 'IN' },
              { value: '15,540' },
              { value: '9,716' },
              { value: '560' },
              { value: '9.576' },
              { value: '588' },
              { value: '-140', color: 'red' },
              { value: '28' },
              { value: '61.6%' },
              { value: '29' },
              { value: '4' },
              { value: '0.0%' }
            ],
            [
              { value: 'Out' },
              { value: '15,540' },
              { value: '9,716' },
              { value: '560' },
              { value: '9.576' },
              { value: '588' },
              { value: '-140', color: 'red' },
              { value: '28' },
              { value: '61.6%' },
              { value: '29' },
              { value: '4' },
              { value: '0.0%' }
            ],
            [
              { value: 'BP', rowspan: 10 },
              { value: 'Sum', rowspan: 2 },
              { value: 'IN' },
              { value: '15,540' },
              { value: '9,716' },
              { value: '560' },
              { value: '9.576' },
              { value: '588' },
              { value: '-140', color: 'red' },
              { value: '28' },
              { value: '61.6%' },
              { value: '29' },
              { value: '4' },
              { value: '0.0%' }
            ],
            [
              { value: 'Out' },
              { value: '15,540' },
              { value: '9,716' },
              { value: '560' },
              { value: '9.576' },
              { value: '588' },
              { value: '-140', color: 'red' },
              { value: '28' },
              { value: '61.6%' },
              { value: '29' },
              { value: '4' },
              { value: '0.0%' }
            ],
            [
              { value: '6.47FHD', rowspan: 2 },
              { value: 'IN' },
              { value: '15,540' },
              { value: '9,716' },
              { value: '560' },
              { value: '9.576' },
              { value: '588' },
              { value: '-140', color: 'red' },
              { value: '28' },
              { value: '61.6%' },
              { value: '29' },
              { value: '4' },
              { value: '0.0%' }
            ],
            [
              { value: 'Out' },
              { value: '15,540' },
              { value: '9,716' },
              { value: '560' },
              { value: '9.576' },
              { value: '588' },
              { value: '-140', color: 'red' },
              { value: '28' },
              { value: '61.6%' },
              { value: '29' },
              { value: '4' },
              { value: '0.0%' }
            ],
            [
              { value: '6.39QHD', rowspan: 2 },
              { value: 'IN' },
              { value: '15,540' },
              { value: '9,716' },
              { value: '560' },
              { value: '9.576' },
              { value: '588' },
              { value: '-140', color: 'red' },
              { value: '28' },
              { value: '61.6%' },
              { value: '29' },
              { value: '4' },
              { value: '0.0%' }
            ],
            [
              { value: 'Out' },
              { value: '15,540' },
              { value: '9,716' },
              { value: '560' },
              { value: '9.576' },
              { value: '588' },
              { value: '-140', color: 'red' },
              { value: '28' },
              { value: '61.6%' },
              { value: '29' },
              { value: '4' },
              { value: '0.0%' }
            ],
            [
              { value: '5.99QHD', rowspan: 2 },
              { value: 'IN' },
              { value: '15,540' },
              { value: '9,716' },
              { value: '560' },
              { value: '9.576' },
              { value: '588' },
              { value: '-140', color: 'red' },
              { value: '28' },
              { value: '61.6%' },
              { value: '29' },
              { value: '4' },
              { value: '0.0%' }
            ],
            [
              { value: 'Out' },
              { value: '15,540' },
              { value: '9,716' },
              { value: '560' },
              { value: '9.576' },
              { value: '588' },
              { value: '-140', color: 'red' },
              { value: '28' },
              { value: '61.6%' },
              { value: '29' },
              { value: '4' },
              { value: '0.0%' }
            ],
            [
              { value: '5.1HD', rowspan: 2 },
              { value: 'IN' },
              { value: '15,540' },
              { value: '9,716' },
              { value: '560' },
              { value: '9.576' },
              { value: '588' },
              { value: '-140', color: 'red' },
              { value: '28' },
              { value: '61.6%' },
              { value: '29' },
              { value: '4' },
              { value: '0.0%' }
            ],
            [
              { value: 'Out' },
              { value: '15,540' },
              { value: '9,716' },
              { value: '560' },
              { value: '9.576' },
              { value: '588' },
              { value: '-140', color: 'red' },
              { value: '28' },
              { value: '61.6%' },
              { value: '29' },
              { value: '4' },
              { value: '0.0%' }
            ],
          ]
        }
      },
    ];

    console.log(typeof (this.gridValues.values.items));

  }

}
