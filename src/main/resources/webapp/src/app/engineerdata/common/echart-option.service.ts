import { Injectable } from '@angular/core';

@Injectable()
export class EchartOptionService {

    constructor() { }

    getOption_EngineerData(title, respText, waterMark, deviceType) {
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
                    { x: '7%', y: '17%', x2: '7%', height: '47%' },
                    { x: '7%', y2: '8%', x2: '7%', height: '25%' },
                ]
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
                    { x: '7%', y: '15%', x2: '7%', height: '47%' },
                    { x: '7%', y2: '8%', x2: '7%', height: '25%' },
                ]
                legend = { width: '71%', left: '26%', top: '1%' };
                watermarkFont = 'bold 30px Microsoft YaHei';
                symbolSize = 10;
                symbolFontSize = '100%';
                break;
        }

        const option = {
            title: [{
                text: title,
                subtext: respText.todaydate,
                align: 'left',
                left: '0%',
                top: '1%',
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
            },],
            tooltip: {
                padding: 10,
                backgroundColor: '#222',
                borderColor: '#777',
                borderWidth: 1,
                formatter: function (obj) {
                    var value = obj.value;
                    return '<div style="border-bottom: 1px solid rgba(255,255,255,.3); font-size: 18px;padding-bottom: 7px;margin-bottom: 7px">'
                        + value[3] + '：'
                        + '</div>'
                        + obj.seriesName + '：' + value[1] + '<br>'

                }
            },
            legend: {
                data: eval('(' + respText.legenddata + ')'),
                type: 'scroll',
                left: legend.left,
                top: legend.top,
                //图例排布
                width: '71%',
                selected: {
                    '亮点A': false,
                    '多亮点A': false,
                }
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
                            width: axisWidth,
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
                    name: 'Xbar',
                    scale: true,
                    nameTextStyle:
                    {
                        fontSize: fontSize,
                        fontFamily: '微软雅黑',
                        color: 'rgb(66,66,66)',
                    },
                    axisLabel:
                    {
                        formatter: '{value}',
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
                    name: 'Unif',
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
                            width: axisWidth,
                        }
                    },
                    //splitNumber:4,
                }, {
                    gridIndex: 1,
                    type: 'value',
                    name: 'Cpk',
                    scale: true,
                    nameTextStyle:
                    {
                        fontSize: fontSize,
                        fontFamily: '微软雅黑',
                        color: 'rgb(66,66,66)',
                    },
                    axisLabel:
                    {
                        formatter: '{value}',
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
                },
            ],
            grid: grid,
            series: eval('(' + respText.series + ')'),

            //水印增加
            graphic: [
                {
                    type: 'text',
                    left: '10%',
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
