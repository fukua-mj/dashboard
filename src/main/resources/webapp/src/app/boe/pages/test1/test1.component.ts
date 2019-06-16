import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import * as $ from 'jquery';

@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class Test1Component implements OnInit {

  chartOption;

  div1Full: boolean = false;

  div1Icon: string = 'fa fa-expand';

  div1Class: string = 'ui-g-12 ui-md-6 ui-lg-6';

  div1Visible: string = 'block';
  div2Visible: string = 'block';
  div3Visible: string = 'block';
  div4Visible: string = 'block';
  div5Visible: string = 'block';
  div6Visible: string = 'block';
  div7Visible: string = 'block';
  div8Visible: string = 'block';
  div9Visible: string = 'block';

  constructor() { }

  ngOnInit() {
    this.chartOption =  {
      title : {
          text: '某站点用户访问来源',
          subtext: '纯属虚构',
          x:'center'
      },
      tooltip : {
          trigger: 'item',
          formatter: "{a} <br/>{b} : {c} ({d}%)"
      },
      legend: {
          orient: 'vertical',
          left: 'left',
          data: ['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
      },
      series : [
          {
              name: '访问来源',
              type: 'pie',
              radius : '55%',
              center: ['50%', '60%'],
              data:[
                  {value:335, name:'直接访问'},
                  {value:310, name:'邮件营销'},
                  {value:234, name:'联盟广告'},
                  {value:135, name:'视频广告'},
                  {value:1548, name:'搜索引擎'}
              ],
              itemStyle: {
                  emphasis: {
                      shadowBlur: 10,
                      shadowOffsetX: 0,
                      shadowColor: 'rgba(0, 0, 0, 0.5)'
                  }
              }
          }
      ]
    };  
  }

  div1Click() {
    if (this.div1Full) {
        this.restore();
    } else {
        this.div1FullShow();
    }
  }

  div1FullShow() {
    this.div2Visible = 'none';
    this.div3Visible = 'none';
    this.div4Visible = 'none';
    this.div5Visible = 'none';
    this.div6Visible = 'none';
    this.div7Visible = 'none';
    this.div8Visible = 'none';
    this.div9Visible = 'none';

    this.div1Class = 'ui-g-12';
    this.div1Icon = 'fa fa-compress';

    this.div1Full = true;
  }

  restore() {
    this.div1Visible = 'block';
    this.div2Visible = 'block';
    this.div3Visible = 'block';
    this.div4Visible = 'block';
    this.div5Visible = 'block';
    this.div6Visible = 'block';
    this.div7Visible = 'block';
    this.div8Visible = 'block';
    this.div9Visible = 'block';

    this.div1Class = 'ui-g-12 ui-md-6 ui-lg-6';
    this.div1Icon = 'fa fa-expand';

    this.div1Full = false;
  }

}
