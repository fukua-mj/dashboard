import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../common/service/api/api.service';

@Component({
  selector: 'app-analysispage',
  templateUrl: './analysispage.component.html',
  styleUrls: ['./analysispage.component.css']
})
export class AnalysispageComponent implements OnInit {

  userName:string = "";


  menuClickOption;
  userLoginOption;

  report1_loadTime:string = "";
  report2_loadTime:string = "";

  constructor(private apiService: ApiService ) { }

  ngOnInit() {  
    
    this.setUserLoginChart();
    this.setMenuClickChart();
  }



  setUserLoginChart(){
    let http_startTime = new Date();
    // user login
    const options = {
      params: {
        log_reportName:'UserLogin_Top5',
        log_menuId:'analysispage'
      }
    };

    this.apiService.get('/userlog/tbload/userlogintop',options).subscribe((res)=>{
      this.createOption_UserLogin(res);
      let http_endTime = new Date();
        this.report1_loadTime = (http_endTime.getTime() - http_startTime.getTime())/1000 + "s";
    });
  }

  setMenuClickChart() {
    let http_startTime = new Date();
    // menu click 
    const options = {
      params: {
        log_reportName:'MenuClick_Top5',
        log_menuId:'analysispage'
      }
    };
    this.apiService.get('/userlog/tbload/menuclicktop',options).subscribe((res)=>{
      let legend_data = [];
      let series_data = [];
      let total = 0;
      //获取所有点击数之和
      for(var obj of res){
        total += obj.CTIMES;
      }
        for(var obj of res){
          legend_data.push(obj.MENUID);
          series_data.push({value: (obj.CTIMES/total * 100).toFixed(2) , name: obj.MENUID + " " + obj.CTIMES +"次"});
        }

        this.createOption_MenuClick(legend_data,series_data);
        let http_endTime = new Date();
        this.report2_loadTime = (http_endTime.getTime() - http_startTime.getTime())/1000 + "s";
    });
  }

  createOption_UserLogin(obj){
       var plantCap =  obj;
    
    var datalist = [{
        offset: [56, 48],
        symbolSize: 120,
        opacity: .95,
        color: '#f467ce'
    }, {
        offset: [35, 80],
        symbolSize: 95,
        opacity: .88,
        color: '#7aabe2'
    }, {
        offset: [20, 43],
        symbolSize: 90,
        opacity: .84,
        color: '#ff7123'
    }, {
        offset: [83, 30],
        symbolSize: 90,
        opacity: .8,
        color: '#ffc400'
    }, {
        offset: [36, 20],
        symbolSize: 65,
        opacity: .75,
        color: '#5e333f'
    }, {
        offset: [64, 10],
        symbolSize: 70,
        opacity: .7,
        color: '#6b3442'
    }, {
        offset: [75, 75],
        symbolSize: 60,
        opacity: .68,
        color: '#8a3647'
    }, {
        offset: [88, 62],
        symbolSize: 50,
        opacity: .6,
        color: '#68333f'
    }];
    var datas = [];
    for (var i = 0; i < plantCap.length; i++) {
        var item = plantCap[i];
        var itemToStyle = datalist[i];
        datas.push({
            name: item.value + '\n' + item.name,
            value: itemToStyle.offset,
            symbolSize: itemToStyle.symbolSize,
            label: {
                normal: {
                    textStyle: {
                        fontSize: 11
                    }
                }
            },
            itemStyle: {
                normal: {
                    color: itemToStyle.color,
                    opacity: itemToStyle.opacity
                }
            },
        })
    }
    this.userLoginOption = {
        title: {
            text: '近1个月活跃用户TOP5',
            x:'center'
          },
        toolbox: {
            feature: {
                dataView: {readOnly: false},
                restore: {},
                saveAsImage: {}
            }
        },
        grid: {
            show: false,
            top: 10,
            bottom: 10
        },
        xAxis: [{
            gridIndex: 0,
            type: 'value',
            show: false,
            min: 0,
            max: 100,
            nameLocation: 'middle',
            nameGap: 5
        }],
        yAxis: [{
            gridIndex: 0,
            min: 0,
            show: false,
            max: 100,
            nameLocation: 'middle',
            nameGap: 30
        }],
        series: [{
            type: 'scatter',
            symbol: 'circle',
            symbolSize: 120,
            label: {
                normal: {
                    show: true,
                    formatter: '{b}',
                    color: '#fff',
                    textStyle: {
                        fontSize: '20'
                    }
                },
            },
            itemStyle: {
                normal: {
                    color: '#00acea'
                }
            },
            data: datas
        }]
    };
  }

  createOption_MenuClick(legend_data,series_data){
        this.menuClickOption = {
          title: {
            text: '近1个月用户关注界面TOP5',
            x:'center'
          },
          tooltip: {
              trigger: 'item',
              formatter: "{a} <br/>{b} : {c}%"
          },
          toolbox: {
              feature: {
                  dataView: {readOnly: false},
                  restore: {},
                  saveAsImage: {}
              }
          },
          legend: {
              data: legend_data
          },
          calculable: true,
          series: [
              {
                name:'',
                type: 'funnel',
                top:'15%',
                left: '15%',
                width:'70%',
                height:'85%',
                label: {
                    normal: {
                        position: 'inside',
                        textStyle: {
                          fontSize: 14,
                            color: '#000000'
                        }
                    }
                },
                itemStyle: {
                    normal: {
                        borderColor: '#fff',
                        borderWidth: 2
                    }
                },
                  data: series_data
              }
          ]
      };
  }
}

