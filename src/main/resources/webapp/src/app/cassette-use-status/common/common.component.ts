import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { YieldParam } from '../../production/common/model/yieldParam';
import { ApiService } from '../../common/service/api/api.service';
import { CassetteChartService } from './DrawChartService';
import { BreadcrumbService } from '@breadcrumb/service/breadcrumb.service';
import { TabService } from 'core/layout/retab/service/tab.service';

@Component({
  selector: 'app-common',
  templateUrl: './common.component.html',
  styleUrls: ['./common.component.css']
})
export class CommonComponent implements OnInit {

  @Input()
  Params: any;

  @Input()
  deviceType

  @Input()
  MenuItems;

  waterMark: string = '';

  @Input() currentUserName = '';

  YieldParam: YieldParam = new YieldParam()

  respText: any

  BPWIPCSTUseStatusChartOption: any

  BPBANKCSTUseStatusChartOption: any

  BPDummyCSTUseStatusChartOption: any

  timer
  constructor(
    private httpService: ApiService,
    private Echart: CassetteChartService,
    private BBService: BreadcrumbService,
    public tService: TabService
  ) {
    this.tService.setItems(
      "BPCST Status"
    )
  }

  ngOnInit() {
    this.DrawWIPChart();
    this.DrawBankChart();
    this.DrawDummyChart();

    this.Task_CstUseStatusTimer();

  }
  ngOnDestroy() {
    this.clear_Task_CstUseStatusTimer();

  }
  DrawWIPChart() {
    this.YieldParam.shopName = this.Params.FactoryName;
    this.YieldParam.datatype = this.Params.WIP;
    const nowDate: Date = new Date();
    const currentTime: string = nowDate.toLocaleString();
    this.waterMark = 'BOECD Confidential@' + this.currentUserName + '\n' + currentTime + '@' + localStorage.getItem('currentIP');
    this.httpService.post("/CassetteUseStatus/CSTUseStatusBPWIPAndBANK", this.YieldParam).subscribe(
      (res) => {
        this.respText = res;
        this.BPWIPCSTUseStatusChartOption = this.Echart.getOption_CSTStatusjiankong("BP WIP CST使用情况", this.respText, this.deviceType, this.waterMark);
      },
      (error) => {

      }
    )
  }
  DrawBankChart() {
    this.YieldParam.shopName = this.Params.FactoryName;
    this.YieldParam.datatype = this.Params.BANK;
    const nowDate: Date = new Date();
    const currentTime: string = nowDate.toLocaleString();
    this.waterMark = 'BOECD Confidential@' + this.currentUserName + '\n' + currentTime + '@' + localStorage.getItem('currentIP');
    this.httpService.post("/CassetteUseStatus/CSTUseStatusBPWIPAndBANK", this.YieldParam).subscribe(
      (res) => {
        this.respText = res;
        this.BPBANKCSTUseStatusChartOption = this.Echart.getOption_CSTStatusjiankongbank("BP BANK CST使用情况", this.respText, this.deviceType, this.waterMark);
      },
      (error) => {

      }
    )
  }
  DrawDummyChart() {
    this.YieldParam.shopName = this.Params.FactoryName;
    this.YieldParam.datatype = this.Params.DUMMY;
    const nowDate: Date = new Date();
    const currentTime: string = nowDate.toLocaleString();
    this.waterMark = 'BOECD Confidential@' + this.currentUserName + '\n' + currentTime + '@' + localStorage.getItem('currentIP');
    this.httpService.post("/CassetteUseStatus/CSTUseStatusDummy", this.YieldParam).subscribe(
      (res) => {
        this.respText = res;
        this.BPDummyCSTUseStatusChartOption = this.Echart.getOption_CSTStatusDummyjiankong("Dummy CST使用情况", this.respText, this.deviceType, this.waterMark);
      },
      (error) => {

      }
    )
  }

  Task_CstUseStatusTimer() {
    this.timer = setInterval(() => {
      this.DrawWIPChart();
      this.DrawBankChart();
      this.DrawDummyChart();
    }, 100000)
  }

  clear_Task_CstUseStatusTimer() {
    clearInterval(this.timer)
  }

}
