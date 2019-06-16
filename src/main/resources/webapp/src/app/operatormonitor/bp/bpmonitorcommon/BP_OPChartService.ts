import { Injectable } from "../../../../../node_modules/@angular/core";

@Injectable()
export class DrawBp_OpChart {

    getOption_OperatorBPTMS(title, respText, YaxisLabel, Category, waterMark) {
        let option = {
            title: [{
                text: title,
                align: 'left',
                left: '0%',
                top: '0%',
                textStyle:
                {
                    fontFamily: '微软雅黑',
                    fontSize: '160%',
                },
            },
                /*{
                    text:'过货量:',
                    left:'2%',
                    align:'left',
                    bottom:'4%',
                }*/],
            tooltip: {
                padding: 10,
                backgroundColor: '#222',
                borderColor: '#777',
                borderWidth: 1,
                formatter: function (obj) {
                    var value = obj.value;
                    if (obj.seriesName != "过货量") {
                        if (obj.seriesType == "bar") {
                            return '<div style="border-bottom: 1px solid rgba(255,255,255,.3); font-size: 15px;padding-bottom: 5px;margin-bottom: 5px">'
                                + obj.name + '：'
                                + '</div>'
                                + '<div style="font-size:12px">'
                                + obj.seriesName + '：' + value[1] + " " + Category + '<br>'
                                + '</div>'
                            //    + obj.seriesName+' Defect Qty：' + value[2] +'<br>'
                            //   + 'Out Qty：' + value[3] +'<br>'
                        }
                        if (obj.seriesType == "line") {
                            return '<div style="border-bottom: 1px solid rgba(255,255,255,.3); font-size: 15px;padding-bottom: 5px;margin-bottom: 5px">'
                                + obj.name + '：'
                                + '</div>'
                                + '<div style="font-size:12px">'
                                + obj.seriesName + '：' + value[1] + ' S' + '<br>'
                                + '</div>'
                            /*		                        + obj.seriesName+' Defect Qty：' + value[2] +'<br>'
                                                            + 'Out Qty：' + value[3] +'<br>'*/
                        }
                    }
                }
            },
            legend: {
                data: eval('(' + respText.legenddata + ')'),
                type: 'scroll',
                left: '30%',
                top: '2.5%',
                //图例排布
                width: '69%',
                itemWidth: 20,
                itemHeight: 10
            },
            xAxis: [
                {
                    type: 'category',
                    gridIndex: 0,
                    data: eval('(' + respText.xdata + ')'),
                    axisPointer: {
                        type: 'shadow'
                    },
                    axisLine:
                    {
                        lineStyle:
                        {
                            width: 3,
                            color: 'rgb(168,168,168)'
                        },
                        axisLabel:
                        {
                            show: true,
                        },
                    },
                    //坐标轴刻度加粗
                    axisTick:
                    {
                        length: 5,
                        lineStyle:
                        {
                            width: 3,
                        }
                    },
                    axisLabel:
                    {
                        color: 'rgb(66,66,66)',
                        fontSize: '90%',
                        //margin:'15',
                        interval: 0,
                        rotate: 330,
                    },
                }, {
                    type: 'category',
                    gridIndex: 1,
                    show: false,
                    data: eval('(' + respText.xdata + ')'),
                }
            ],
            yAxis: [
                {
                    type: 'value',
                    gridIndex: 0,
                    name: Category,
                    nameTextStyle:
                    {
                        fontSize: '90%',
                        fontFamily: '微软雅黑',
                        color: 'rgb(66,66,66)',
                    },
                    axisLabel:
                    {
                        formatter: YaxisLabel,
                        color: 'rgb(66,66,66)',
                        fontSize: '90%',
                        margin: '15',
                    },
                    axisLine:
                    {
                        lineStyle:
                        {
                            width: 3,
                            color: 'rgb(168,168,168)'
                        },
                        axisLabel:
                        {
                            show: true,
                        },
                    },
                    //坐标轴刻度加粗
                    axisTick:
                    {
                        length: 5,
                        lineStyle:
                        {
                            width: 3,
                        }
                    },
                    splitNumber: 4,
                }, {
                    type: 'value',
                    gridIndex: 0,
                    //name: 'Yield',
                    scale: true,
                    min: function (value) {
                        var range = value.max - value.min;
                        var rangeplus = range / 5;

                        // 最大值和最小值相同时，坐标轴最小值为value最小值减2
                        if (rangeplus == 0) {
                            rangeplus = 2;
                        }

                        var a = Math.floor(value.min - rangeplus);
                        if (a < 5) {
                            return 0;
                        } else {
                            return a;
                        }
                    },
                    max: function (value) {
                        var range = value.max - value.min;
                        var rangeplus = range / 5;

                        // 最大值和最小值相同时，坐标轴最大值为value最大值加2
                        if (rangeplus == 0) {
                            rangeplus = 2;
                        }

                        let a = Math.ceil(value.max + rangeplus);
                        if (a > 100) {
                            return 100;
                        } else {
                            return a;
                        }
                    },
                    nameTextStyle:
                    {
                        fontSize: '90%',
                        fontFamily: '微软雅黑',
                        color: 'rgb(66,66,66)',
                    },
                    axisLabel: {
                        formatter: '{value}S',
                        color: 'rgb(66,66,66)',
                        fontSize: '90%',
                        margin: '15',
                    },
                    axisLine:
                    {
                        lineStyle:
                        {
                            width: 3,
                            color: 'rgb(168,168,168)'
                        },
                        axisLabel:
                        {
                            show: true,
                        },
                    },
                    //坐标轴刻度加粗
                    axisTick:
                    {
                        length: 5,
                        lineStyle:
                        {
                            width: 3,
                        }
                    },
                    splitLine:
                    {
                        show: false
                    },
                    //interval:20,
                    //max:100
                }, {
                    type: 'value',
                    gridIndex: 1,
                    show: false,

                }
            ],
            dataZoom: [{
                type: 'slider',
                show: true,
                xAxisIndex: [0, 1],
                handleSize: 20,//滑动条的 左右2个滑动条的大小
                height: 6,//组件高度
                left: 30, //左边的距离
                right: 40,//右边的距离
                bottom: 10,//右边的距离
                handleColor: '#ddd',//h滑动图标的颜色
                handleStyle: {
                    borderColor: "#cacaca",
                    borderWidth: "1",
                    shadowBlur: 2,
                    background: "#ddd",
                    shadowColor: "#ddd",
                },
                /* fillerColor: new echarts.graphic.LinearGradient(1, 0, 0, 0, [{
                    //给颜色设置渐变色 前面4个参数，给第一个设置1，第四个设置0 ，就是水平渐变
                    //给第一个设置0，第四个设置1，就是垂直渐变
                    offset: 0,
                    color: '#1eb5e5'
                }, {
                    offset: 1,
                    color: '#5ccbb1'
                }]), */
                backgroundColor: '#ddd',//两边未选中的滑动条区域的颜色
                showDataShadow: false,//是否显示数据阴影 默认auto
                showDetail: false,//即拖拽时候是否显示详细数值信息 默认true
                handleIcon: 'M-292,322.2c-3.2,0-6.4-0.6-9.3-1.9c-2.9-1.2-5.4-2.9-7.6-5.1s-3.9-4.8-5.1-7.6c-1.3-3-1.9-6.1-1.9-9.3c0-3.2,0.6-6.4,1.9-9.3c1.2-2.9,2.9-5.4,5.1-7.6s4.8-3.9,7.6-5.1c3-1.3,6.1-1.9,9.3-1.9c3.2,0,6.4,0.6,9.3,1.9c2.9,1.2,5.4,2.9,7.6,5.1s3.9,4.8,5.1,7.6c1.3,3,1.9,6.1,1.9,9.3c0,3.2-0.6,6.4-1.9,9.3c-1.2,2.9-2.9,5.4-5.1,7.6s-4.8,3.9-7.6,5.1C-285.6,321.5-288.8,322.2-292,322.2z',
                filterMode: 'filter',
            },
            //下面这个属性是里面拖到
            {
                type: 'inside',
                show: true,
                xAxisIndex: [0],
                start: 1,
                end: 100
            }

            ],
            grid: [{
                x: '7%',
                x2: '7%',
                y: '24%',
                height: '55%'
            }, {
                x: '7%',
                x2: '7%',
                y2: '2%',
                height: '0%'
            }],
            series: eval('(' + respText.series + ')'),

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

    getOption_OperatorBPTMSOpeartor(title, respText, YaxisLabel, Category, waterMark) {
        let option = {
            title: [{
                text: title + " 产能监控",
                align: 'left',
                left: '0%',
                top: '0%',
                textStyle:
                {
                    fontFamily: '微软雅黑',
                    fontSize: '160%',
                },
            },
                /*{
                    text:'过货量:',
                    left:'2%',
                    align:'left',
                    bottom:'4%',
                }*/],
            tooltip: {
                padding: 10,
                backgroundColor: '#222',
                borderColor: '#777',
                borderWidth: 1,
                formatter: function (obj) {
                    var value = obj.value;
                    if (obj.seriesName != "过货量") {
                        if (obj.seriesType == "bar") {
                            return '<div style="border-bottom: 1px solid rgba(255,255,255,.3); font-size: 15px;padding-bottom: 5px;margin-bottom: 5px">'
                                + obj.name + '：'
                                + '</div>'
                                + '<div style="font-size:12px">'
                                + obj.seriesName + '：' + value[1] + " " + Category + '<br>'
                                + '</div>'
                            //    + obj.seriesName+' Defect Qty：' + value[2] +'<br>'
                            //   + 'Out Qty：' + value[3] +'<br>'
                        }
                        if (obj.seriesType == "line") {
                            return '<div style="border-bottom: 1px solid rgba(255,255,255,.3); font-size: 15px;padding-bottom: 5px;margin-bottom: 5px">'
                                + obj.name + '：'
                                + '</div>'
                                + '<div style="font-size:12px">'
                                + obj.seriesName + '：' + value[1] + 'S' + '<br>'
                                + '</div>'
                            /*		                        + obj.seriesName+' Defect Qty：' + value[2] +'<br>'
                                                            + 'Out Qty：' + value[3] +'<br>'*/
                        }
                    }
                }
            },
            legend: {
                data: eval('(' + respText.legenddata + ')'),
                type: 'scroll',
                left: '30%',
                top: '2.5%',
                //图例排布
                width: '49%',
                itemWidth: 20,
                itemHeight: 10
            },
            xAxis: [
                {
                    type: 'category',
                    gridIndex: 0,
                    data: eval('(' + respText.xdata + ')'),
                    axisPointer: {
                        type: 'shadow'
                    },
                    axisLine:
                    {
                        lineStyle:
                        {
                            width: 3,
                            color: 'rgb(168,168,168)'
                        },
                        axisLabel:
                        {
                            show: true,
                        },
                    },
                    //坐标轴刻度加粗
                    axisTick:
                    {
                        length: 5,
                        lineStyle:
                        {
                            width: 3,
                        }
                    },
                    axisLabel:
                    {
                        color: 'rgb(66,66,66)',
                        fontSize: '80%',
                        //margin:'15',
                        interval: 0,
                        rotate: 325,
                    },
                }, {
                    type: 'category',
                    gridIndex: 1,
                    show: false,
                    data: eval('(' + respText.xdata + ')'),
                }
            ],
            yAxis: [
                {
                    type: 'value',
                    gridIndex: 0,
                    name: Category,
                    nameTextStyle:
                    {
                        fontSize: '90%',
                        fontFamily: '微软雅黑',
                        color: 'rgb(66,66,66)',
                    },
                    axisLabel:
                    {
                        formatter: YaxisLabel,
                        color: 'rgb(66,66,66)',
                        fontSize: '90%',
                        margin: '15',
                    },
                    axisLine:
                    {
                        lineStyle:
                        {
                            width: 3,
                            color: 'rgb(168,168,168)'
                        },
                        axisLabel:
                        {
                            show: true,
                        },
                    },
                    //坐标轴刻度加粗
                    axisTick:
                    {
                        length: 5,
                        lineStyle:
                        {
                            width: 3,
                        }
                    },
                    splitNumber: 4,
                },/*{
                        type: 'value',
                        gridIndex:0,
                        //name: 'Yield',
                        scale: true,
                        min:function(value)
                        {
                            var range =value.max-value.min;
                            var rangeplus = range / 5;
                            
                            // 最大值和最小值相同时，坐标轴最小值为value最小值减2
                            if(rangeplus==0)
                            {
                                rangeplus = 2;
                            }
                            
                            var a=Math.floor(value.min-rangeplus);
                            if (a<5) {
                                return 0;
                            } else {
                                return a;
                            }
                        },
                        max:function(value)
                        {
                            var range =value.max-value.min;
                            var rangeplus = range / 5;
                            
                            // 最大值和最小值相同时，坐标轴最大值为value最大值加2
                            if(rangeplus==0)
                            {
                                rangeplus = 2;
                            }
                            
                            a=Math.ceil(value.max+rangeplus);
                            if (a>100) {
                                return 100;
                            } else {
                                return a;
                            }
                        },
                        nameTextStyle:
                        {
                            fontSize:'120%' ,
                            fontFamily:'微软雅黑',
                            color:'rgb(66,66,66)',
                        },
                        axisLabel: {
                            formatter: '{value}S',
                            color:'rgb(66,66,66)',
                            fontSize:'120%',
                            margin:'15',
                        },
                        axisLine:
                        {
                            lineStyle:
                            {
                                width:5,
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
                            length:6,
                            lineStyle:
                            {
                                width:4,    
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
    
                        }*/
            ],
            dataZoom: [{
                type: 'slider',
                show: true,
                xAxisIndex: [0, 1],
                handleSize: 20,//滑动条的 左右2个滑动条的大小
                height: 6,//组件高度
                left: 30, //左边的距离
                right: 40,//右边的距离
                bottom: 10,//右边的距离
                handleColor: '#ddd',//h滑动图标的颜色
                handleStyle: {
                    borderColor: "#cacaca",
                    borderWidth: "1",
                    shadowBlur: 2,
                    background: "#ddd",
                    shadowColor: "#ddd",
                },
                /*  fillerColor: new echarts.graphic.LinearGradient(1, 0, 0, 0, [{
                     //给颜色设置渐变色 前面4个参数，给第一个设置1，第四个设置0 ，就是水平渐变
                     //给第一个设置0，第四个设置1，就是垂直渐变
                     offset: 0,
                     color: '#1eb5e5'
                 }, {
                     offset: 1,
                     color: '#5ccbb1'
                 }]), */
                backgroundColor: '#ddd',//两边未选中的滑动条区域的颜色
                showDataShadow: false,//是否显示数据阴影 默认auto
                showDetail: false,//即拖拽时候是否显示详细数值信息 默认true
                handleIcon: 'M-292,322.2c-3.2,0-6.4-0.6-9.3-1.9c-2.9-1.2-5.4-2.9-7.6-5.1s-3.9-4.8-5.1-7.6c-1.3-3-1.9-6.1-1.9-9.3c0-3.2,0.6-6.4,1.9-9.3c1.2-2.9,2.9-5.4,5.1-7.6s4.8-3.9,7.6-5.1c3-1.3,6.1-1.9,9.3-1.9c3.2,0,6.4,0.6,9.3,1.9c2.9,1.2,5.4,2.9,7.6,5.1s3.9,4.8,5.1,7.6c1.3,3,1.9,6.1,1.9,9.3c0,3.2-0.6,6.4-1.9,9.3c-1.2,2.9-2.9,5.4-5.1,7.6s-4.8,3.9-7.6,5.1C-285.6,321.5-288.8,322.2-292,322.2z',
                filterMode: 'filter',
            },
            //下面这个属性是里面拖到
            {
                type: 'inside',
                show: true,
                xAxisIndex: [0],
                start: 1,
                end: 100
            }

            ],
            grid: [{
                x: '7%',
                x2: '7%',
                y: '24%',
                height: '55%'
            }, {
                x: '7%',
                x2: '7%',
                y2: '2%',
                height: '0%'
            }],
            series: eval('(' + respText.series + ')'),

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