import { Component, OnInit, Input } from '@angular/core';
import { YieldParam } from 'app/production/common/model/yieldParam';
import { ApiService } from 'app/common/service/api/api.service';
import { EchartOptionService } from '../echart-option.service';

@Component({
  selector: 'app-engineerdata',
  templateUrl: './engineerdata.component.html',
  styleUrls: ['./engineerdata.component.css']
})
export class EngineerdataComponent implements OnInit {

  @Input() currentUserName = '';

  @Input() deviceType = '';

  @Input() shopName = '';

  @Input() processType = '';

  layerName: any[];

  selectedLayerName = '';

  productCategory: string[];

  selectedProductionCategory = '';

  echartOption;

  timer;

  respText;

  waterMark;

  chartParam: YieldParam = new YieldParam();

  constructor(private httpService: ApiService, private echartService: EchartOptionService) { }

  ngOnInit() {
    if (this.processType == 'DI CD') {
      this.layerName = [
        { value: 'ACT', label: 'ACT' },
        { value: 'GATE1', label: 'GATE1' },
        { value: 'GATE2', label: 'GATE2' },
        { value: 'CNT', label: 'CNT' },
        { value: 'SD', label: 'SD' },
        { value: 'ANODE', label: 'ANODE' },
      ];
    } else if (this.processType == 'FI CD') {
      this.layerName = [
        { value: 'ACT', label: 'ACT' },
        { value: 'GATE1', label: 'GATE1' },
        { value: 'GATE2', label: 'GATE2' },
        { value: 'CNT', label: 'CNT' },
        { value: 'SD', label: 'SD' },
        { value: 'HPLN', label: 'HPLN' },
        { value: 'ANODE', label: 'ANODE' },
        { value: 'HPDL', label: 'HPDL' },
      ];
    } else if (this.processType == 'Thickness') {
      this.layerName = [
        { value: 'PI1-G1_THK', label: 'PI1' },
        { value: 'Barrier1-G1_THK', label: 'Barrier1-SiO2' },
        { value: 'PI2-G1_THK', label: 'PI2' },
        { value: 'Barrier2-G4_THK', label: 'Barrier2-SiO2' },
        { value: 'ACT-G3_THK', label: 'ACT-Multi SiO2' },
        { value: 'ACT-G4_THK', label: 'ACT-Multi ASi' },
        { value: 'GI1-G5_THK', label: 'GI1-SiO2' },
        { value: 'GI2-G1_THK', label: 'GI2-GI2 SiNx' },
        { value: 'ILD-G1_THK', label: 'ILD-SiO2' },
        { value: 'ILD-G2_THK', label: 'ILD-SiNx' },
        { value: 'HPLN-G_THK1L', label: 'HPLN' },
        { value: 'HPDL-G_THK2L', label: 'HPDL' },
        { value: 'Anode Top ITO-G1_THK', label: 'Anode Top ITO' },
      ];
    } else if (this.processType == 'RS') {
      this.layerName = [
        { value: 'Gate1', label: 'Gate1' },
        { value: 'Gate2', label: 'Gate2' },
        { value: 'SD', label: 'SD' },
        { value: 'Anode', label: 'Anode' },
      ];
    } else if (this.processType == 'OL') {
      this.layerName = [
        { value: 'Gate1-OVLX', label: 'GATE1-OLX' },
        { value: 'Gate1-OVLY', label: 'GATE1-OLY' },
        { value: 'SD-OVLX', label: 'SD-OLX' },
        { value: 'SD-OVLY', label: 'SD-OLY' },
        { value: 'PLN-OVLX', label: 'PLN-OLX' },
        { value: 'PLN-OVLY', label: 'PLN-OLY' },
        { value: 'HPLN-OVLX', label: 'HPLN-OLX' },
        { value: 'HPLN-OVLY', label: 'HPLN-OLY' },
        { value: 'ANODE-OVLX', label: 'ANODE-OLX' },
        { value: 'ANODE-OVLY', label: 'ANODE-OLY' },
        { value: 'PDL-OVLX', label: 'PDL-OLX' },
        { value: 'PDL-OVLY', label: 'PDL-OLY' },
        { value: 'HPDL-OVLX', label: 'HPDL-OLX' },
        { value: 'HPDL-OVLY', label: 'HPDL-OLY' },
        { value: 'PS-OVLX', label: 'PS-OLX' },
        { value: 'PS-OVLY', label: 'PS-OVLY' },
      ];
    } else if (this.processType == 'TP') {
      this.layerName = [
        { value: 'ACT-TPX', label: 'ACT-TPX' },
        { value: 'ACT-TPY', label: 'ACT-TPY' },
        { value: 'Final-TPX', label: 'Final-TPX' },
        { value: 'Final-TPY', label: 'Final-TPY' },
      ];
    }
    this.selectedLayerName = this.layerName[0].value;

    this.getProductCategory();

  }

  getProductCategory() {
    let layerName = '';
    if (this.processType == 'DI CD') {
      layerName = this.selectedLayerName + '-CD1';
    } else if (this.processType == 'FI CD') {
      layerName = this.selectedLayerName + '-CD1';
    } else if (this.processType == 'Thickness') {
      layerName = this.selectedLayerName;
    } else if (this.processType == 'RS') {
      layerName = this.selectedLayerName + '-4PPPOINT';
    } else if (this.processType == 'OL') {
      layerName = this.selectedLayerName;
    } else if (this.processType == 'TP') {
      layerName = this.selectedLayerName;
    }

    const options = {
      params: {
        shopName: this.shopName,
        layerItem: this.processType,
        layerName: layerName,
      }
    };
    let url;
    url = '/echart/engineerdata/getProductCategory';

    this.httpService.get(url, options).subscribe(
      (res) => {
        this.productCategory = <string[]>res;
        this.selectedProductionCategory = this.productCategory[0];
        this.drawChart();
      },
      (error) => { console.log(error); }
    );
  }

  productionTypeClicked() {
    this.getProductCategory();
    //this.drawChart();
  }

  drawChart() {
    this.chartParam.shopName = this.shopName;
    this.chartParam.productCategory = this.selectedProductionCategory;
    if (this.processType == 'DI CD') {
      this.chartParam.datatype = this.selectedLayerName + '-CD1'; //layerName
    } else if (this.processType == 'FI CD') {
      this.chartParam.datatype = this.selectedLayerName + '-CD1'; //layerName
    } else if (this.processType == 'Thickness') {
      this.chartParam.datatype = this.selectedLayerName; //layerName
    } else if (this.processType == 'RS') {
      this.chartParam.datatype = this.selectedLayerName + '-4PPPOINT'; //layerName
    } else if (this.processType == 'OL') {
      this.chartParam.datatype = this.selectedLayerName; //layerName
    } else if (this.processType == 'TP') {
      this.chartParam.datatype = this.selectedLayerName; //layerName
    }
    this.chartParam.processtype = this.processType; // layerItem
    this.chartParam.deviceType = this.deviceType;
    const nowDate: Date = new Date();
    const currentTime: string = nowDate.toLocaleString();
    this.waterMark = 'BOECD Confidential@' + this.currentUserName + '\n' + currentTime + '@' + localStorage.getItem('currentIP');
    let url;
    url = '/echart/engineerdata/getEngineerData';


    this.httpService.post(url, this.chartParam).subscribe(
      (res) => {
        this.respText = res;
        console.log('this.waterMark:' + this.waterMark);
        this.echartOption = this.echartService.getOption_EngineerData(this.processType + ' 良率指标', this.respText, this.waterMark, this.deviceType);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  start_Timer() {
    this.timer = setInterval(() => {
      this.drawChart();
    }, 300000);
  }

  clear_Timer() {
    if (this.timer) {
      clearInterval(this.timer);
    }
  }

}
