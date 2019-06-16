import { Injectable } from '@angular/core';

@Injectable()
export class EqpinfoChartOptionService {

    constructor() { }

    getOption_statesMonitor(title: string, respText, waterMark, deviceType) {
        let fontSize;
        let axisWidth;
        let grid;
        let titleFontSize;
        let legend;
        let watermarkFont;
        let symbolSize;
        let symbolFontSize;
        switch (deviceType) {
            case 'phone':
                fontSize = '60%';
                titleFontSize = { main: '140%', sub: '80%' };
                axisWidth = 2;
                grid = { x: '10%', x2: '7%', y: '20%' };
                legend = { width: '71%', left: '26%', top: '1%' };
                break;
            case 'pad':
                fontSize = '100%';
                titleFontSize = { main: '160%', sub: '100%' };
                axisWidth = 2;
                grid = { x: '7%', x2: '7%', y: '14%' };
                legend = { width: '71%', left: '35%', top: '7%' };
                break;
            case 'monitor':
                fontSize = '80%';
                titleFontSize = { main: '160%', sub: '90%', left: '0%', bottom: '1.5%' };
                axisWidth = 2;
                grid = [
                    {
                        left: '2%',
                        right: '7%',
                        bottom: '5%',
                        top: '14%',
                        containLabel: true
                    }
                ];
                legend = { width: '65%', left: '30%', top: '1%' };
                watermarkFont = 'bold 20px Microsoft YaHei';
                symbolSize = 6;
                symbolFontSize = '75%';
                break;
            case 'tv':
                fontSize = '85%';
                titleFontSize = { main: '200%', sub: '110%', left: '2%', bottom: '4%' };
                axisWidth = 4;
                grid = [
                    {
                        left: '2%',
                        right: '7%',
                        bottom: '5%',
                        top: '12%',
                        containLabel: true
                    }
                ];
                legend = {
                    width: '71%',
                    left: '26%',
                    top: '1%'
                };
                watermarkFont = 'bold 30px Microsoft YaHei';
                symbolSize = 10;
                symbolFontSize = '100%';
                break;
        };

        const option = {
            title: [{
                text: title,
                subtext: '     ' + respText.runratio,
                align: 'left',
                left: '0%',
                top: '0%',
                itemGap: 25,
                textStyle:
                {
                    fontFamily: '微软雅黑',
                    fontSize: titleFontSize.main,
                },
                subtextStyle:
                {
                    fontFamily: '微软雅黑',
                    fontSize: titleFontSize.sub,
                    color: 'rgb(0,0,0)',
                },
            }],
            tooltip: {
                padding: 10,
                backgroundColor: '#222',
                borderColor: '#777',
                borderWidth: 1,
                formatter: function (obj) {
                    const value = obj.value;
                    if (obj.seriesName != "echartReserved") {
                        return '<div style="border-bottom: 1px solid rgba(255,255,255,.3); font-size: 18px;padding-bottom: 7px;margin-bottom: 7px">'
                            + obj.seriesName + '：'
                            + '</div>'
                            + 'Start：' + value[2].toLocaleString() + '<br>'
                            + 'End：' + value[0].toLocaleString() + '<br>'
                            + 'Duration Time：' + value[3] + '<br>'
                            + 'Reason Code:' + value[4] + '<br>'
                            + 'Machine State Comment:' + value[5] + '<br>';

                    }
                }
            },
            grid: grid,
            dataZoom: [{
                type: 'slider',
                show: true,
                xAxisIndex: [0],
                handleSize: 20, // 滑动条的 左右2个滑动条的大小
                height: 8, // 组件高度
                left: 60, // 左边的距离
                right: 60, // 右边的距离
                bottom: 13, // 右边的距离
                handleColor: '#ddd', // h滑动图标的颜色
                handleStyle: {
                    borderColor: '#cacaca',
                    borderWidth: '1',
                    shadowBlur: 2,
                    background: '#ddd',
                    shadowColor: '#ddd',
                },
                /*                 fillerColor: new echarts.graphic.LinearGradient(1, 0, 0, 0, [{
                                    //给颜色设置渐变色 前面4个参数，给第一个设置1，第四个设置0 ，就是水平渐变
                                    //给第一个设置0，第四个设置1，就是垂直渐变
                                    offset: 0,
                                    color: '#1eb5e5'
                                }, {
                                    offset: 1,
                                    color: '#5ccbb1'
                                }]), */
                backgroundColor: '#ddd', // 两边未选中的滑动条区域的颜色
                showDataShadow: false, // 是否显示数据阴影 默认auto
                showDetail: false, // 即拖拽时候是否显示详细数值信息 默认true
                handleIcon: 'M-292,322.2c-3.2,0-6.4-0.6-9.3-1.9c-2.9-1.2-5.4-2.9-7.6-5.1s-3.9-4.8-5.1-7.6c-1.3-3-1.9-6.1-1.9-9.3c0-3.2,0.6-6.4,1.9-9.3c1.2-2.9,2.9-5.4,5.1-7.6s4.8-3.9,7.6-5.1c3-1.3,6.1-1.9,9.3-1.9c3.2,0,6.4,0.6,9.3,1.9c2.9,1.2,5.4,2.9,7.6,5.1s3.9,4.8,5.1,7.6c1.3,3,1.9,6.1,1.9,9.3c0,3.2-0.6,6.4-1.9,9.3c-1.2,2.9-2.9,5.4-5.1,7.6s-4.8,3.9-7.6,5.1C-285.6,321.5-288.8,322.2-292,322.2z',
                filterMode: 'filter',
            },
            // 下面这个属性是里面拖到
            {
                type: 'inside',
                show: true,
                xAxisIndex: [0],
                start: 1,
                end: 100
            }

            ],
            legend: {
                data: eval('(' + respText.legenddata + ')'),
                type: 'scroll',
                left: legend.left,
                top: legend.top,
                width: legend.width,
                selectedMode: false,
            },
            xAxis: {
                type: 'time',

                // minInterval: 3600,
                maxInterval: 3600 * 1000 * 2,
                // min:new Date("2018/01/01/00:00"),
                min: eval('(' + respText.starttime + ')'),

                max: eval('(' + respText.endtime + ')'),
                axisLabel:
                {
                    color: 'rgb(66,66,66)',
                    fontSize: fontSize,
                },
                axisLine:
                {
                    lineStyle:
                    {
                        width: axisWidth,
                        color: 'rgb(168,168,168)'
                    },
                    axisLabel:
                    {
                        show: true,
                    },
                },
                // 坐标轴刻度加粗
                axisTick:
                {
                    length: 8,
                    lineStyle:
                    {
                        width: axisWidth,
                    }
                },
            },
            yAxis: {
                type: 'category',
                data: eval('(' + respText.ydata + ')'),
                // show:false,
                // minInterval: 1,
                maxInterval: 3600 * 1000,
                axisLabel:
                {
                    color: 'rgb(66,66,66)',
                    fontSize: fontSize,
                },
                axisLine:
                {
                    lineStyle:
                    {
                        width: axisWidth,
                        color: 'rgb(168,168,168)'
                    },
                    axisLabel:
                    {
                        show: true,
                    },
                },
                // 坐标轴刻度加粗
                axisTick:
                {
                    length: 8,
                    lineStyle:
                    {
                        width: axisWidth,
                    }
                },

            },
            //水印增加
            graphic: [
                {
                    type: 'text',
                    left: '5%',
                    top: '20%',
                    z: 0,
                    cursor: 'default',
                    rotation: Math.PI * 0.125,
                    style: {
                        fill: 'rgb(188,188,188)',
                        text: waterMark,
                        font: watermarkFont
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
                        font: watermarkFont
                    }
                },
            ],
            series: eval('(' + respText.series + ')'),
            /*             graphic: [
                                    {
                                        type: 'text',
                                        left: '10%',
                                        top: '20%',
                                        z: 0,
                                        cursor: 'default',
                                        rotation: Math.PI * 0.125,
                                        style: {
                                            fill: 'rgb(188,188,188)',
                                            text: eval('(' + respText.userinfo + ')') + '@',
                                            font: 'bold 30px Microsoft YaHei'
                                        }
                                    },
                                    {
                                            type: 'text',
                                            left: '60%',
                                            top: '20%',
                                            z: 0,
                                            cursor: 'default',
                                            rotation: Math.PI * 0.125,
                                            style: {
                                                fill: 'rgb(188,188,188)',
                                                text: eval('(' + respText.userinfo + ')') + '@',
                                                font: 'bold 30px Microsoft YaHei'
                                            }
                                        },
                                    ], */

        };

        return option;
    }

    getOption_oee(title, respText, EQPID, waterMark, deviceType) {
        let fontSize;
        let axisWidth;
        let grid;
        let titleFontSize;
        let legend;
        let watermarkFont;
        let symbolSize;
        let symbolFontSize;
        switch (deviceType) {
            case 'phone':
                fontSize = '60%';
                titleFontSize = { main: '140%', sub: '80%' };
                axisWidth = 2;
                grid = { x: '10%', x2: '7%', y: '20%' };
                legend = { width: '71%', left: '26%', top: '1%' };
                break;
            case 'pad':
                fontSize = '100%';
                titleFontSize = { main: '160%', sub: '100%' };
                axisWidth = 2;
                grid = { x: '7%', x2: '7%', y: '14%' };
                legend = { width: '71%', left: '35%', top: '7%' };
                break;
            case 'monitor':
                fontSize = '90%';
                titleFontSize = { main: '160%', sub: '90%', left: '0%', bottom: '1.5%' };
                axisWidth = 2;
                grid = [
                    { x: '7%', y: '8%', x2: '7%', height: '25%' },
                    { x: '7%', y2: '8%', x2: '7%', height: '57%' },
                ];
                legend = { width: '65%', left: '30%', top: '1%' };
                watermarkFont = 'bold 20px Microsoft YaHei';
                symbolSize = 6;
                symbolFontSize = '75%';
                break;
            case 'tv':
                fontSize = '120%';
                titleFontSize = { main: '200%', sub: '110%', left: '2%', bottom: '4%' };
                axisWidth = 4;
                grid = [
                    { x: '7%', y: '8%', x2: '7%', height: '25%' },
                    { x: '7%', y2: '8%', x2: '7%', height: '57%' },
                ];
                legend = { width: '71%', left: '26%', top: '1%' };
                watermarkFont = 'bold 30px Microsoft YaHei';
                symbolSize = 10;
                symbolFontSize = '100%';
                break;
        }

        const option = {
            title: [{
                text: title,
                //subtext:respText.todaydate,
                align: 'left',
                left: '0%',
                top: '1%',
                textStyle:
                {
                    fontFamily: '微软雅黑',
                    fontSize: titleFontSize.main,
                },
            },
            ],
            tooltip: {
                padding: 10,
                backgroundColor: '#222',
                borderColor: '#777',
                borderWidth: 1,
                formatter: function (obj) {
                    var value = obj.value;
                    return '<div style="border-bottom: 1px solid rgba(255,255,255,.3); font-size: 18px;padding-bottom: 7px;margin-bottom: 7px">'
                        + value[2] + '：'
                        + '</div>'
                        + obj.seriesName + '：' + value[1] + '%' + '<br>'
                    //+ '过货量：' + value[2] + '<br>'

                }
            },
            legend: {
                data: ['RUN', 'EN', 'IDLE', '设备Down', '工艺Down', '其它Down', 'PM', 'Holiday', 'J/C', 'M/C', '设备CM', '可稼动率', '时间稼动率', '性能稼动率', 'OEE'],
                type: 'scroll',
                left: legend.left,
                top: legend.top,
                //图例排布
                width: legend.width,
            },
            xAxis: [
                {
                    gridIndex: 0,
                    type: 'category',
                    data: eval('(' + respText.xdata + ')'),
                    axisPointer: {
                        type: 'shadow'
                    },
                    show: false,
                    axisLine:
                    {
                        lineStyle:
                        {
                            width: axisWidth,
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
                        length: 8,
                        lineStyle:
                        {
                            width: 4,
                        }
                    },
                    axisLabel:
                    {
                        color: 'rgb(66,66,66)',
                        fontSize: fontSize,
                        margin: '15',
                    }
                },
                {
                    gridIndex: 1,
                    type: 'category',
                    data: eval('(' + respText.xdata + ')'),
                    axisPointer: {
                        type: 'shadow'
                    },
                    axisLine:
                    {
                        lineStyle:
                        {
                            width: axisWidth,
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
                        length: 8,
                        lineStyle:
                        {
                            width: axisWidth,
                        }
                    },
                    axisLabel:
                    {
                        color: 'rgb(66,66,66)',
                        fontSize: fontSize,
                        margin: '15',
                    }
                }
            ],
            yAxis: [
                {
                    gridIndex: 0,
                    type: 'value',
                    name: '',
                    scale: true,
                    nameTextStyle:
                    {
                        fontSize: fontSize,
                        fontFamily: '微软雅黑',
                        color: 'rgb(66,66,66)',
                    },
                    axisLabel:
                    {
                        formatter: '{value}%',
                        color: 'rgb(66,66,66)',
                        fontSize: fontSize,
                        margin: '15',
                    },
                    axisLine:
                    {
                        lineStyle:
                        {
                            width: axisWidth,
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
                        length: 6,
                        lineStyle:
                        {
                            width: 4,
                        }
                    },
                    //splitNumber:4,
                },
                {
                    gridIndex: 1,
                    type: 'value',
                    name: '',
                    max: 100,
                    //scale: true,
                    nameTextStyle:
                    {
                        fontSize: fontSize,
                        fontFamily: '微软雅黑',
                        color: 'rgb(66,66,66)',
                    },
                    axisLabel:
                    {
                        formatter: '{value}%',
                        color: 'rgb(66,66,66)',
                        fontSize: fontSize,
                        margin: '15',
                    },
                    axisLine:
                    {
                        lineStyle:
                        {
                            width: axisWidth,
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
                        length: 6,
                        lineStyle:
                        {
                            width: axisWidth,
                        }
                    },
                    //splitNumber:4,
                },
                {
                    gridIndex: 1,
                    type: 'value',
                    name: '可稼动率',
                    max: 110,
                    show: false,
                    scale: true,
                    nameTextStyle:
                    {
                        fontSize: fontSize,
                        fontFamily: '微软雅黑',
                        color: 'rgb(66,66,66)',
                    },
                    axisLabel: {
                        formatter: '{value}%',
                        color: 'rgb(66,66,66)',
                        fontSize: fontSize,
                        margin: '15',
                    },
                    axisLine:
                    {
                        lineStyle:
                        {
                            width: axisWidth,
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
                        length: 6,
                        lineStyle:
                        {
                            width: axisWidth,
                        }
                    },
                    splitLine:
                    {
                        show: false
                    },
                    //interval:20,
                    //max:100
                }
            ],
		    /*dataZoom: [            
            {
                type: 'inside',
                show: true,
                yAxisIndex: [0],
                start: 1,
                end: 100
            }

          ],*/
            color: [
                "#00b050",   //RUN
                "#c3d69b",   //EN
                "#ff0",     //Idle
                "#ff0000",  //设备Down
                "#e46c0a",  //工艺Down
                "#fac090",  //其他Down
                "#06f",     //PM
                "#fc0",     //Holiday
                "#9fc",     //JC
                "#cff",     //MC
                "#ccccff",  //CM
                "#1fe87b",   //可稼动率												
                "#006600",   //时间稼动率
                "#92D050",   //性能稼动率
                "#F68B32"       //OEE
            ],
            grid: grid,
            series: [{
                name: 'RUN',
                type: 'bar',
                stack: '1',
                xAxisIndex: 1,
                yAxisIndex: 1,
                barWidth: '50%',
                data: eval('(' + respText.RUNData + ')')
            }, {
                name: 'EN',
                type: 'bar',
                stack: '1',
                xAxisIndex: 1,
                yAxisIndex: 1,
                barWidth: '50%',
                data: eval('(' + respText.ENData + ')')
            }, {
                name: 'IDLE',
                type: 'bar',
                stack: '1',
                xAxisIndex: 1,
                yAxisIndex: 1,
                barWidth: '50%',
                data: eval('(' + respText.IDLEData + ')')
            }, {
                name: '设备Down',
                type: 'bar',
                stack: '1',
                xAxisIndex: 1,
                yAxisIndex: 1,
                barWidth: '50%',
                data: eval('(' + respText.eqpDownData + ')')
            }, {
                name: '工艺Down',
                type: 'bar',
                stack: '1',
                xAxisIndex: 1,
                yAxisIndex: 1,
                barWidth: '50%',
                data: eval('(' + respText.processDownData + ')')
            }, {
                name: '其它Down',
                type: 'bar',
                stack: '1',
                xAxisIndex: 1,
                yAxisIndex: 1,
                barWidth: '50%',
                data: eval('(' + respText.otherDownData + ')')
            }, {
                name: 'PM',
                type: 'bar',
                stack: '1',
                xAxisIndex: 1,
                yAxisIndex: 1,
                barWidth: '50%',
                data: eval('(' + respText.PMData + ')')
            }, {
                name: 'Holiday',
                type: 'bar',
                stack: '1',
                xAxisIndex: 1,
                yAxisIndex: 1,
                barWidth: '50%',
                data: eval('(' + respText.HolidayData + ')')
            }, {
                name: 'J/C',
                type: 'bar',
                stack: '1',
                xAxisIndex: 1,
                yAxisIndex: 1,
                barWidth: '50%',
                data: eval('(' + respText.J_CData + ')')
            }, {
                name: 'M/C',
                type: 'bar',
                stack: '1',
                xAxisIndex: 1,
                yAxisIndex: 1,
                barWidth: '50%',
                data: eval('(' + respText.M_CData + ')'),
            }, {
                name: '设备CM',
                type: 'bar',
                stack: '1',
                xAxisIndex: 1,
                yAxisIndex: 1,
                barWidth: '50%',
                data: eval('(' + respText.CMData + ')'),
            }, {
                name: '可稼动率',
                type: 'line',
                xAxisIndex: 1,
                yAxisIndex: 1,
                symbol: 'circle',
                symbolSize: symbolSize,
                smooth: true,
                label: {
                    normal: {
                        show: true,
                        position: 'bottom',
                        fontSize: symbolFontSize,
                        formatter: function (obj) {
                            var value = obj.value;
                            return value[1] + '%'
                        },
                        fontWeight: 'bold',
                    }
                },
                data: eval('(' + respText.ableRatioData + ')')
            }, {
                name: '时间稼动率',
                type: 'line',
                xAxisIndex: 0,
                yAxisIndex: 0,
                symbol: 'circle',
                symbolSize: symbolSize,
                smooth: true,
                label: {
                    normal: {
                        show: true,
                        position: 'top',
                        fontSize: symbolFontSize,
                        formatter: function (obj) {
                            if (obj.value[1] != 0) {
                                var value = obj.value;
                                return value[1] + '%';
                            } else {
                                return '';
                            }
                        },
                        fontWeight: 'bold',
                    }
                },
                data: eval('(' + respText.timeRatioData + ')')
            }, {
                name: '性能稼动率',
                type: 'line',
                xAxisIndex: 0,
                yAxisIndex: 0,
                symbol: 'circle',
                symbolSize: symbolSize,
                smooth: true,
                label: {
                    normal: {
                        show: true,
                        position: 'top',
                        fontSize: symbolFontSize,
                        formatter: function (obj) {
                            if (obj.value[1] != 0) {
                                var value = obj.value;
                                return value[1] + '%';
                            } else {
                                return '';
                            }
                        },
                        fontWeight: 'bold',
                    }
                },
                data: eval('(' + respText.properRatioData + ')')
            }, {
                name: 'OEE',
                type: 'line',
                xAxisIndex: 0,
                yAxisIndex: 0,
                symbol: 'circle',
                symbolSize: symbolSize,
                smooth: true,
                label: {
                    normal: {
                        show: true,
                        position: 'top',
                        fontSize: symbolFontSize,
                        formatter: function (obj) {
                            if (obj.value[1] != 0) {
                                var value = obj.value;
                                return value[1] + '%';
                            } else {
                                return '';
                            }
                        },
                        fontWeight: 'bold',
                    }
                },
                data: eval('(' + respText.OEEData + ')')
            },],

            //水印增加
            graphic: [
                {
                    type: 'text',
                    left: '5%',
                    top: '20%',
                    z: 0,
                    cursor: 'default',
                    rotation: Math.PI * 0.125,
                    style: {
                        fill: 'rgb(188,188,188)',
                        text: waterMark,
                        font: watermarkFont
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
                        font: watermarkFont
                    }
                },
            ],
        };

        return option;
    }

    getOption_OeePrdMonitorHeatMap(title, respText, waterMark, deviceType) {
        let fontSize;
        let axisWidth;
        let grid;
        let titleFontSize;
        let legend;
        let watermarkFont;
        let symbolSize;
        let symbolFontSize;
        switch (deviceType) {
            case 'phone':
                fontSize = '60%';
                titleFontSize = { main: '140%', sub: '80%' };
                axisWidth = 2;
                grid = { x: '10%', x2: '7%', y: '20%' };
                legend = { width: '71%', left: '26%', top: '1%' };
                break;
            case 'pad':
                fontSize = '100%';
                titleFontSize = { main: '160%', sub: '100%' };
                axisWidth = 2;
                grid = { x: '7%', x2: '7%', y: '14%' };
                legend = { width: '71%', left: '35%', top: '7%' };
                break;
            case 'monitor':
                fontSize = '90%';
                titleFontSize = { main: '180%', sub: '90%', left: '0%', bottom: '1.5%' };
                axisWidth = 2;
                grid = [
                    { x: '7%', y: '15%', x2: '7%', height: '80%' },
                    { x: '7%', y2: '8%', x2: '7%', height: '0%' },
                ];
                legend = { width: '65%', left: '30%', top: '4%' };
                watermarkFont = 'bold 20px Microsoft YaHei';
                symbolSize = 6;
                symbolFontSize = '75%';
                break;
            case 'tv':
                fontSize = '120%';
                titleFontSize = { main: '200%', sub: '110%', left: '2%', bottom: '4%' };
                axisWidth = 4;
                grid = [
                    { x: '7%', y: '15%', x2: '7%', height: '78%' },
                    { x: '7%', y2: '8%', x2: '7%', height: '0%' },
                ];
                legend = { width: '71%', left: '35%', top: '4%' };
                watermarkFont = 'bold 30px Microsoft YaHei';
                symbolSize = 10;
                symbolFontSize = '100%';
                break;
        }

        const option = {
            title: [{
                text: title,
                align: 'left',
                left: '0%',
                top: '1%',
                textStyle:
                {
                    fontFamily: '微软雅黑',
                    fontSize: titleFontSize.main,
                },
            },
            ],
            tooltip: {
                padding: 10,
                backgroundColor: '#222',
                borderColor: '#777',
                borderWidth: 1,
                formatter: function (obj) {
                    var value = obj.value;
                    if (value[5] > 2000) {
                        return '<div style="border-bottom: 1px solid rgba(255,255,255,.3); font-size: 18px;padding-bottom: 7px;margin-bottom: 7px">'
                            + obj.seriesName + '：' + '<br>'
                            + '</div>'
                            + '产能差缺 ：' + value[5] + '<br>'
                            + '运营TT超标 ：' + value[2] + '<br>'
                            + 'Down机超标 ：' + value[3] + '<br>'
                            + 'PM超标 ：' + value[4] + '<br>'
                    } else {
                        return '<div style="border-bottom: 1px solid rgba(255,255,255,.3); font-size: 18px;padding-bottom: 7px;margin-bottom: 7px">'
                            + obj.seriesName + '：' + '<br>'
                            + '</div>'
                            + '产能差缺 ：' + value[5] + '<br>'
                            + '运营TT超标 ：' + value[2] + '<br>'
                            + 'Down机超标 ：' + value[3] + '<br>'
                            + 'PM超标 ：' + value[4] + '<br>'
                    }

                }
            },
            xAxis: [
                {
                    gridIndex: 0,
                    type: 'category',
                    name: '工艺',
                    data: eval('(' + respText.xdata + ')'),
                    axisPointer: {
                        type: 'shadow'
                    },
                    show: true,
                    nameTextStyle:
                    {
                        fontSize: fontSize,
                        fontFamily: '微软雅黑',
                        color: 'rgb(66,66,66)',
                    },
                    axisLine:
                    {
                        lineStyle:
                        {
                            width: axisWidth,
                            color: 'rgb(168,168,168)'
                        },
                        axisLabel:
                        {
                            show: true,
                        },
                    },
                    splitArea: {
                        show: true
                    },
                    //坐标轴刻度加粗
                    axisTick:
                    {
                        length: 8,
                        lineStyle:
                        {
                            width: 4,
                        }
                    },
                    axisLabel:
                    {
                        color: 'rgb(66,66,66)',
                        fontSize: fontSize,
                        margin: '15',
                    }
                },
            ],
            yAxis: [
                {
                    gridIndex: 0,
                    type: 'category',
                    name: '线体',
                    data: eval('(' + respText.ydata + ')'),
                    splitArea: {
                        show: true
                    },
                    nameTextStyle:
                    {
                        fontSize: fontSize,
                        fontFamily: '微软雅黑',
                        color: 'rgb(66,66,66)',
                    },
                    axisLabel:
                    {
                        /*                         formatter: '{value}%', */
                        color: 'rgb(66,66,66)',
                        fontSize: fontSize,
                        margin: '15',
                    },
                    axisLine:
                    {
                        lineStyle:
                        {
                            width: axisWidth,
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
                        length: 6,
                        lineStyle:
                        {
                            width: 4,
                        }
                    },
                    //splitNumber:4,
                },
            ],
            visualMap: {
                type: 'piecewise',
                orient: 'horizontal',
                left: legend.left,
                top: legend.top,
                pieces: [
                    { min: 2000, label: '产能差缺>2K', color: 'red' },
                    { min: 1001, max: 1999, label: '产能差缺1K~2K', color: 'orange' },
                    { min: 1, max: 1000, label: '产能差缺<1K', color: '#FCEF57' },
                    { value: 0, label: '产能达标', color: 'green' }
                ],
                color: ['#E0022B', '#E09107', '#A3E00B']
            },
            grid: grid,
            series: [{
                name: '产能差缺',
                type: 'heatmap',
                data: eval('(' + respText.series + ')'),
                label: {
                    normal: {
                        show: true,
                        formatter: function (obj) {
                            var value = obj.value;
                            return value[5];
                        }
                    },
                    itemStyle: {
                        emphasis: {
                            shadowBlur: 10,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }
            }],
            //水印增加
            graphic: [
                {
                    type: 'text',
                    left: '5%',
                    top: '20%',
                    z: 0,
                    cursor: 'default',
                    rotation: Math.PI * 0.125,
                    style: {
                        fill: 'rgb(188,188,188)',
                        text: waterMark,
                        font: watermarkFont
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
                        font: watermarkFont
                    }
                },
            ],
        };

        return option;
    }

}
