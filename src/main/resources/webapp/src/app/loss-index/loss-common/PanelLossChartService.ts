import { Injectable } from "../../../../node_modules/@angular/core";

@Injectable()
export class PanelLossChartService{

    getOption_Losszhibiao(title,respText,waterMark){
     let  option = {
                title:[{
                    text:title,
                    //subtext:'     '+respText.today,
                    align:'left',
                    left:'0%',
                    top:'0%',
                    //itemGap:25,
                    textStyle:
                    {
                        fontFamily:'微软雅黑',
                        fontSize:'160%',  
                    },
                },
               {
                    text:'过货量:',
                    left:'0%',
                    align:'left',
                    bottom:'1%',
                }],
                tooltip: {
                    padding: 10,
                    backgroundColor: '#222',
                    borderColor: '#777',
                    borderWidth: 1,
                    formatter: function (obj) {
                        var value = obj.value;
                        if(obj.seriesName!="过货量"){
                            if(obj.seriesType=="bar"){
                                return '<div style="border-bottom: 1px solid rgba(255,255,255,.3); font-size: 15px;padding-bottom: 5px;margin-bottom: 5px">'
                                    + obj.name + '：'
                                    + '</div>'
                                    +'<div style="font-size: 12px;">'
                                    + obj.seriesName+' Scarp数量：' + value[1] +'<br>'
                                    + obj.seriesName+' 报废率：' + value[2] +'%'
                                    +'</div>'
                                //    + obj.seriesName+' AgingOut数量：' + value[3] +'<br>'
                            }
                            if(obj.seriesType=="line"){
                                return '<div style="border-bottom: 1px solid rgba(255,255,255,.3); font-size: 15px;padding-bottom: 5px;margin-bottom: 5px">'
                                    + obj.name + '：'
                                    + '</div>'
                                    +'<div style="font-size: 12px;">'
                                    + ' Scrap ' +obj.seriesName+"："+value[1] +'%'+'<br>'
                                    + ' Scrap数量：' + value[2]+'<br>'
                                    +'</div>'
                                    //+ obj.seriesName+' 等级数量：' + value[4] +'<br>'
                            }
                        }
                        /*else{
                            return '<div style="border-bottom: 1px solid rgba(255,255,255,.3); font-size: 18px;padding-bottom: 7px;margin-bottom: 7px">'
                            + '过货量：' + value[2] + '<br>'
                        }*/
                    }
                },
                legend: {
                    data:eval('(' + respText.legenddata + ')'),
                    type:'scroll',
                    left:'22%',
                    top:'5%',
                    //图例排布
                    width:'65%',
                },
                xAxis: [
                    {
                        type: 'category',
                        data: eval('(' + respText.xdata + ')'),
                        axisPointer: {
                            type: 'shadow'
                        },
                        axisLine:
                        {
                            lineStyle:
                            {
                                width:3,
                                color: 'rgb(168,168,168)'
                            },
                            axisLabel:
                            {
                                show:true,
                            },
                        },
                      //坐标轴刻度加粗
                        axisTick:
                        {
                            length:8,
                            lineStyle:
                            {
                                width:4,    
                            }
                        },
                        axisLabel:
                        {
                            color:'rgb(66,66,66)',
                            fontSize:'90%',
                            margin:'15',
                        }
                    },{
                           type: 'category',
                           gridIndex:1,
                           show:false,
                           data: eval('(' + respText.xdata + ')'),
                        }
                ],
                yAxis: [
                    {
                        type: 'value',
                        name: 'Scrap QTY',
                        nameTextStyle:
                        {
                            fontSize:'90%' ,
                            fontFamily:'微软雅黑',
                            color:'rgb(66,66,66)',
                        },
                        axisLabel: {
                            color:'rgb(66,66,66)',
                            fontSize:'90%',
                            margin:'15',
                            //刻度除1000
                            formatter:function(value){
                                if(value > 999 || value < -999)
                                {
                                    var i = value/1000;
                                    return i+'K';
                                }
                                else
                                {
                                    return value;
                                }
                                }
                        },
                        axisLine:
                        {
                            lineStyle:
                            {
                                width:3,
                                color: 'rgb(168,168,168)'
                            },
                            axisLabel:
                            {
                                show:true,
                            },
                        },
                      //坐标轴刻度加粗
                        axisTick:
                        {
                            length:5,
                            lineStyle:
                            {
                                width:3,    
                            }
                        },
                        splitNumber:4,
                    },
                    {
                        type: 'value',
                        name: 'Ratio',
                        nameTextStyle:
                        {
                            fontSize:'90%' ,
                            fontFamily:'微软雅黑',
                            color:'rgb(66,66,66)',
                        },
                        axisLabel: {
                            formatter: '{value}%',
                            color:'rgb(66,66,66)',
                            fontSize:'90%',
                            margin:'15',
                        },
                        axisLine:
                        {
                            lineStyle:
                            {
                                width:3,
                                color: 'rgb(168,168,168)'
                            },
                            axisLabel:
                            {
                                show:true,
                            },
                        },
                      //坐标轴刻度加粗
                        axisTick:
                        {
                            length:5,
                            lineStyle:
                            {
                                width:3,    
                            }
                        },
                        splitLine:
                        {
                            show:false
                        },
                        //interval:20,
                        //max:100
    
                    },{
                           type: 'value',
                           gridIndex:1,
                           show:false,
    
                        }
                ],
                grid:[{
                    x:'7%',
                    x2:'7%',
                    y:'12%',
                    height: '75%'
                },{
                       x:'7%',
                    x2:'7%',
                    y2:'2%' ,
                    height: '3%'
                }],
                series: eval('(' + respText.series + ')'),
                  //水印增加
                graphic: [
                           {
                            type: 'text',
                            left: '8%',
                            top: '20%',
                            z: 0,
                            cursor: 'default',
                            rotation: Math.PI * 0.125,
                            style: {
                                fill: 'rgb(188,188,188)',
                                text: waterMark,
                                font: 'bold 20px Microsoft YaHei'
                            }
                           },
                           {
                                type: 'text',
                                left: '50%',
                                top: '20%',
                                z: 0,
                                cursor: 'default',
                                rotation: Math.PI * 0.125,
                                style: {
                                    fill: 'rgb(188,188,188)',
                                    text: waterMark,
                                    font: 'bold 20px Microsoft YaHei'
                                }
                               },
                          ],
            };
        return option;
    }


}