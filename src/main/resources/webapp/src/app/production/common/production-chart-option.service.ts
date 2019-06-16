import { Injectable } from '@angular/core';
import { EchartWatermarkService } from 'app/common/service/echar-watermark.service';

@Injectable()
export class ProductionChartOptionService {

    constructor(private waterMarkService:EchartWatermarkService) { }

    getOptionInputOutput(title, respText, waterMark, deviceType) {
        const waterMarkObject:any = this.waterMarkService.getWaterMark9(deviceType, waterMark);
        let fontSize;
        let axisWidth;
        let grid;
        let titleFontSize;
        let legend;
        let waterMarkFontSize;
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
                titleFontSize = { main: '180%', sub: '100%' };
                axisWidth = 2;
                grid = { x: '7%', x2: '7%', y: '19%' };
                legend = { width: '65%', left: '30%', top: '3%' };
                waterMarkFontSize = 'bold 20px Microsoft YaHei';
                break;
            case 'tv':
                fontSize = '120%';
                titleFontSize = { main: '200%', sub: '120%' };
                axisWidth = 4;
                grid = { x: '7%', x2: '7%', y: '14%' };
                legend = { width: '67%', left: '26%', top: '3%' };
                waterMarkFontSize = 'bold 25px Microsoft YaHei';
                break;
        }

        const option = {
            title: {
                text: title,
                subtext: '     ' + respText.today,
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
            },
            color: ['#1a778d',
                '#ff9933',
                '#1d18eb',
                '#db7108',
                '#7CCD7C',
                '#0aa28e',
                '#FFB90F',
                '#B03060',
                '#556B2F',
                '#BFBFBF',
                '#EE7942',
                '#dc9de6',
                '#1ef1d5',
                '#b210ce',
                '#b3133e'],
            tooltip: {
                trigger: 'item',
                formatter: '{a} : {c}'
            },
            legend: {
                data: eval('(' + respText.legend + ')'),
                type: 'scroll',
                textStyle: {
                    fontSize: 10,
                },
                left: legend.left,
                top: legend.top,
                // 图例排布
                width: legend.width,
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
                    type: 'value',
                    name: 'Movement',
                    nameTextStyle:
                    {
                        fontSize: fontSize,
                        fontFamily: '微软雅黑',
                        color: 'rgb(66,66,66)',
                    },
                    axisLabel: {
                        color: 'rgb(66,66,66)',
                        fontSize: fontSize,
                        margin: '15',
                        formatter: function (value) {
                            if (value > 999 || value < -999) {
                                const i = value / 1000;
                                return i + 'K';
                            } else {
                                return value;
                            }
                        }
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
                        length: 6,
                        lineStyle:
                        {
                            width: axisWidth,
                        }
                    },
                    splitNumber: 4,
                }
            ],
            grid: grid,
            series: eval('(' + respText.series + ')'),
            // 水印增加
            graphic: waterMarkObject
        };

        return option;
    }

    getOptionInputOutputFlexible(title, respText, waterMarkObject, deviceType) {
        let fontSize;
        let axisWidth;
        let grid;
        let titleFontSize;
        let legend;
        let waterMarkFontSize;
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
                titleFontSize = { main: '180%', sub: '100%' };
                axisWidth = 2;
                grid = { x: '7%', x2: '7%', y: '19%' };
                legend = { width: '65%', left: '30%', top: '3%' };
                waterMarkFontSize = 'bold 20px Microsoft YaHei';
                break;
            case 'tv':
                fontSize = '120%';
                titleFontSize = { main: '200%', sub: '120%' };
                axisWidth = 4;
                grid = { x: '7%', x2: '7%', y: '14%' };
                legend = { width: '67%', left: '26%', top: '3%' };
                waterMarkFontSize = 'bold 25px Microsoft YaHei';
                break;
        }

        const option = {
            title: {
                text: title,
                subtext: '     ' + respText.today,
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
            },
            color: ['#1a778d',
                '#ff9933',
                '#1d18eb',
                '#db7108',
                '#7CCD7C',
                '#0aa28e',
                '#FFB90F',
                '#B03060',
                '#556B2F',
                '#BFBFBF',
                '#EE7942',
                '#dc9de6',
                '#1ef1d5',
                '#b210ce',
                '#b3133e'],
            tooltip: {
                trigger: 'item',
                formatter: '{a} : {c}'
            },
            legend: {
                data: eval('(' + respText.legend + ')'),
                type: 'scroll',
                textStyle: {
                    fontSize: 10,
                },
                left: legend.left,
                top: legend.top,
                // 图例排布
                width: legend.width,
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
                    type: 'value',
                    name: 'Movement',
                    nameTextStyle:
                    {
                        fontSize: fontSize,
                        fontFamily: '微软雅黑',
                        color: 'rgb(66,66,66)',
                    },
                    axisLabel: {
                        color: 'rgb(66,66,66)',
                        fontSize: fontSize,
                        margin: '15',
                        formatter: function (value) {
                            if (value > 999 || value < -999) {
                                const i = value / 1000;
                                return i + 'K';
                            } else {
                                return value;
                            }
                        }
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
                        length: 6,
                        lineStyle:
                        {
                            width: axisWidth,
                        }
                    },
                    splitNumber: 4,
                }
            ],
            grid: grid,
            series: eval('(' + respText.series + ')'),
            // 水印增加
            graphic: waterMarkObject
        };

        return option;
    }

    getOptionDummy(title, respText, waterMark, deviceType) {
        let fontSize;
        let axisWidth;
        let grid;
        let titleFontSize;
        let legend;
        let waterMarkFontSize;
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
                titleFontSize = { main: '180%', sub: '100%' };
                axisWidth = 2;
                grid = { x: '7%', x2: '7%', y: '19%' };
                legend = { width: '71%', left: '26%', top: '1%' };
                waterMarkFontSize = 'bold 20px Microsoft YaHei';
                break;
            case 'tv':
                fontSize = '120%';
                titleFontSize = { main: '200%', sub: '120%' };
                axisWidth = 4;
                grid = { x: '7%', x2: '7%', y: '14%' };
                legend = { width: '71%', left: '26%', top: '1%' };
                waterMarkFontSize = 'bold 30px Microsoft YaHei';
                break;
        }

        const option = {
            title: {
                text: title,
                subtext: '     ' + respText.todaydate,
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
            },
            color: ['#1a778d',
                '#ff9933',
                '#1d18eb',
                '#db7108',
                '#7CCD7C',
                '#0aa28e',
                '#FFB90F',
                '#B03060',
                '#556B2F',
                '#BFBFBF',
                '#EE7942',
                '#dc9de6',
                '#1ef1d5',
                '#b210ce',
                '#b3133e'],
            tooltip: {
                padding: 10,
                backgroundColor: '#222',
                borderColor: '#777',
                borderWidth: 1,
                formatter: function (obj) {
                    const value = obj.value;
                    return '<div style="border-bottom: 1px solid rgba(255,255,255,.3);'
                        + 'font-size: 18px;padding-bottom: 7px;margin-bottom: 7px">'
                        + value[2] + '：'
                        + '</div>'
                        + obj.seriesName + ' : ' + value[1] + '<br>';
                }
            },
            legend: {
                data: eval('(' + respText.legend + ')'),
                type: 'scroll',
                textStyle: {
                    fontSize: 10,
                },
                left: legend.left,
                top: legend.top,
                // 图例排布
                width: legend.width,
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
                    type: 'value',
                    name: 'Dummt Qty',
                    nameTextStyle:
                    {
                        fontSize: fontSize,
                        fontFamily: '微软雅黑',
                        color: 'rgb(66,66,66)',
                    },
                    axisLabel: {
                        color: 'rgb(66,66,66)',
                        fontSize: fontSize,
                        margin: '15',
                        formatter: function (value) {
                            /*                             if (value > 999 || value < -999) {
                                                            const i = value / 1000;
                                                            return i + 'K';
                                                        } else {
                                                            return value;
                                                        } */
                            return value;
                        }
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
                        length: 6,
                        lineStyle:
                        {
                            width: axisWidth,
                        }
                    },
                    splitNumber: 4,
                }
            ],
            grid: grid,
            series: eval('(' + respText.series + ')'),
            // 水印增加
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
                        font: waterMarkFontSize
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
                        font: waterMarkFontSize
                    }
                },
            ],
        };

        return option;
    }

    getOption_Yield(respText, title: string) {
        const option = {
            title: [{
                text: title,
                align: 'left',
                left: '0%',
                top: '1%',
                textStyle:
                {
                    fontFamily: '微软雅黑',
                    fontSize: '220%',
                },
            },
            {
                text: '过货量:',
                left: '2%',
                align: 'left',
                bottom: '3%',
            }],
            tooltip: {
                padding: 10,
                backgroundColor: '#222',
                borderColor: '#777',
                borderWidth: 1,
                formatter: function (obj) {
                    const value = obj.value;
                    if (obj.seriesName !== '过货量') {
                        if (obj.seriesType === 'bar') {
                            return '<div style="border-bottom: 1px solid rgba(255,255,255,.3);'
                                + 'font-size: 18px;padding-bottom: 7px;margin-bottom: 7px">'
                                + value[3] + '：'
                                + '</div>'
                                + obj.seriesName + '：' + value[1] + '%' + '<br>'
                                + obj.seriesName + ' 不良数量：' + value[4] + '<br>';
                        }
                        if (obj.seriesType === 'line') {
                            return '<div style="border-bottom: 1px solid rgba(255,255,255,.3);'
                                + 'font-size: 18px;padding-bottom: 7px;margin-bottom: 7px">'
                                + value[3] + '：'
                                + '</div>'
                                + obj.seriesName + '：' + value[1] + '%' + '<br>';
                        }
                    }
                }
            },
            legend: {
                data: eval('(' + respText.legenddata + ')'),
                type: 'scroll',
                left: '45%',
                top: '2.5%',
                width: '50%',
                selected: {
                    '亮点A': false,
                    '多亮点A': false,
                }
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
                            width: 5,
                            color: 'rgb(168,168,168)'
                        },
                        axisLabel:
                        {
                            show: true,
                        },
                    },
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
                        fontSize: '120%',
                        margin: '15',
                    }
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
                    name: 'Defect',
                    nameTextStyle:
                    {
                        fontSize: '120%',
                        fontFamily: '微软雅黑',
                        color: 'rgb(66,66,66)',
                    },
                    axisLabel:
                    {
                        formatter: '{value}%',
                        color: 'rgb(66,66,66)',
                        fontSize: '120%',
                        margin: '15',
                    },
                    axisLine:
                    {
                        lineStyle:
                        {
                            width: 5,
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
                        length: 6,
                        lineStyle:
                        {
                            width: 4,
                        }
                    },
                    splitNumber: 4,
                },
                {
                    type: 'value',
                    gridIndex: 0,
                    name: 'Yield',
                    scale: true,
                    min: function (value) {
                        const range = value.max - value.min;
                        let rangeplus = range / 5;

                        // 最大值和最小值相同时，坐标轴最小值为value最小值减2
                        if (rangeplus === 0) {
                            rangeplus = 2;
                        }

                        const a = Math.floor(value.min - rangeplus);
                        if (a < 5) {
                            return 0;
                        } else {
                            return a;
                        }
                    },
                    max: function (value) {
                        const range = value.max - value.min;
                        let rangeplus = range / 5;

                        // 最大值和最小值相同时，坐标轴最大值为value最大值加2
                        if (rangeplus === 0) {
                            rangeplus = 2;
                        }

                        const a = Math.ceil(value.max + rangeplus);
                        if (a > 100) {
                            return 100;
                        } else {
                            return a;
                        }
                    },
                    nameTextStyle:
                    {
                        fontSize: '120%',
                        fontFamily: '微软雅黑',
                        color: 'rgb(66,66,66)',
                    },
                    axisLabel: {
                        formatter: '{value}%',
                        color: 'rgb(66,66,66)',
                        fontSize: '120%',
                        margin: '15',
                    },
                    axisLine:
                    {
                        lineStyle:
                        {
                            width: 5,
                            color: 'rgb(168,168,168)'
                        },
                        axisLabel:
                        {
                            show: true,
                        },
                    },
                    axisTick:
                    {
                        length: 6,
                        lineStyle:
                        {
                            width: 4,
                        }
                    },
                    splitLine:
                    {
                        show: false
                    },
                }, {
                    type: 'value',
                    gridIndex: 1,
                    show: false,

                }
            ],
            grid: [{
                x: '7%',
                x2: '7%',
                y: '12%',
                height: '70%'
            }, {
                x: '7%',
                x2: '7%',
                y2: '4%',
                height: '4%'
            }],
            series: eval('(' + respText.series + ')'),
        };
        return option;
    }

    getOption_ActPlan(title, respText, waterMark, deviceType) {
        let fontSize;
        let axisWidth;
        let grid;
        let titleFontSize;
        let legend;
        let waterMarkFontSize;
        let symbolSize;
        switch (deviceType) {
            case 'phone':
                fontSize = '60%';
                titleFontSize = { main: '140%', sub: '80%' };
                axisWidth = 2;
                grid = { x: '10%', x2: '7%', y: '20%' };
                legend = { width: '71%', left: '36%', top: '1%' };
                break;
            case 'pad':
                fontSize = '100%';
                titleFontSize = { main: '200%', sub: '110%' };
                axisWidth = 2;
                grid = { x: '7%', x2: '8%', y: '20%' };
                legend = { width: '71%', left: '35%', top: '3%' };
                break;
            case 'monitor':
                fontSize = '90%';
                titleFontSize = { main: '180%', sub: '90%' };
                axisWidth = 2;
                grid = { x: '7%', x2: '7%', y: '19%' };
                legend = { width: '71%', left: '36%', top: '1%' };
                waterMarkFontSize = 'bold 20px Microsoft YaHei';
                symbolSize = 7;
                break;
            case 'tv':
                fontSize = '120%';
                titleFontSize = { main: '200%', sub: '120%' };
                axisWidth = 4;
                grid = { x: '7%', x2: '7%', y: '14%' };
                legend = { width: '71%', left: '36%', top: '1%' };
                waterMarkFontSize = 'bold 30px Microsoft YaHei';
                symbolSize = 10;
                break;
        }
        const option = {
            title: [{
                text: title,
                align: 'left',
                subtext: '     ' + respText.lastUpdatetime,
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
            }, {
                text: respText.actplanRatio,
                right: '18%',
                align: 'right',
                top: '7%',
                textStyle:
                {
                    fontFamily: '微软雅黑',
                    fontSize: titleFontSize.sub,
                    color: 'rgb(0,0,0)',
                },
            }],
            color: ['#1a778d',
                '#ff9933',
                '#1d18eb',
                '#db7108',
                '#7CCD7C',
                '#0aa28e',
                '#FFB90F',
                '#B03060',
                '#556B2F',
                '#BFBFBF',
                '#EE7942',
                '#dc9de6',
                '#1ef1d5',
                '#b210ce',
                '#b3133e'],
            tooltip: {
                trigger: 'item',
                formatter: '{a} : {c}'
            },
            legend: {
                data: ['DAILY PLAN', 'DAILY ACT', 'CUM PLAN', 'CUM ACT'],
                selected: {
                    'All': false,
                },
                left: legend.left,
                top: legend.top,
                // 图例排布
                width: legend.width,
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
                    type: 'value',
                    name: 'Daily',
                    nameTextStyle:
                    {
                        fontSize: fontSize,
                        fontFamily: '微软雅黑',
                        color: 'rgb(66,66,66)',
                    },
                    axisLabel: {
                        color: 'rgb(66,66,66)',
                        fontSize: fontSize,
                        margin: '15',
                        formatter: function (value) {
                            if (value > 999 || value < -999) {
                                const i = value / 1000;
                                return i + 'K';
                            } else {
                                return value;
                            }
                        }
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
                        length: 6,
                        lineStyle:
                        {
                            width: axisWidth,
                        }
                    },
                    splitNumber: 4,
                },
                {
                    type: 'value',
                    name: 'Cum',
                    nameTextStyle:
                    {
                        fontSize: fontSize,
                        fontFamily: '微软雅黑',
                        color: 'rgb(66,66,66)',
                    },
                    axisLabel: {
                        color: 'rgb(66,66,66)',
                        fontSize: fontSize,
                        margin: '15',
                        formatter: function (value) {
                            if (value > 999 || value < -999) {
                                const i = value / 1000;
                                return i + 'K';
                            } else {
                                return value;
                            }
                        }
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
                        length: 6,
                        lineStyle:
                        {
                            width: axisWidth,
                        }
                    },
                    splitNumber: 4,
                    splitLine:
                    {
                        show: false
                    },
                }
            ],
            grid: grid,
            series: [
                {
                    name: 'DAILY PLAN',
                    type: 'bar',
                    stack: '1',
                    data: eval('(' + respText.data_dailyplan + ')'),
                },
                {
                    name: 'DAILY ACT',
                    type: 'bar',
                    stack: '2',
                    data: eval('(' + respText.data_dailyact + ')'),
                },
                {
                    name: 'CUM PLAN',
                    type: 'line',
                    yAxisIndex: 1,
                    data: eval('(' + respText.data_cumplan + ')'),
                    symbol: 'circle',
                    symbolSize: symbolSize,

                },
                {
                    name: 'CUM ACT',
                    type: 'line',
                    yAxisIndex: 1,
                    data: eval('(' + respText.data_cumact + ')'),
                    symbol: 'circle',
                    symbolSize: symbolSize,
                },
            ],
            // 水印增加
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
                        font: waterMarkFontSize
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
                        font: waterMarkFontSize
                    }
                },
            ],
        };
        return option;
    }

    getOption_Rt(title, respText, waterMark, deviceType) {
        let fontSize;
        let axisWidth;
        let grid;
        let titleFontSize;
        let legend;
        let waterMarkFontSize;
        let symbolSize;
        switch (deviceType) {
            case 'phone':
                fontSize = '60%';
                titleFontSize = { main: '140%', sub: '80%' };
                axisWidth = 2;
                grid = { x: '10%', x2: '7%', y: '20%' };
                legend = { width: '71%', left: '36%', top: '1%' };
                break;
            case 'pad':
                fontSize = '100%';
                titleFontSize = { main: '200%', sub: '110%' };
                axisWidth = 2;
                grid = { x: '7%', x2: '8%', y: '20%' };
                legend = { width: '71%', left: '35%', top: '3%' };
                break;
            case 'monitor':
                fontSize = '90%';
                titleFontSize = { main: '180%', sub: '90%' };
                axisWidth = 2;
                grid = { x: '7%', x2: '7%', y: '19%' };
                legend = { width: '71%', left: '36%', top: '1%' };
                waterMarkFontSize = 'bold 20px Microsoft YaHei';
                symbolSize = 7;
                break;
            case 'tv':
                fontSize = '120%';
                titleFontSize = { main: '200%', sub: '120%' };
                axisWidth = 4;
                grid = { x: '7%', x2: '7%', y: '14%' };
                legend = { width: '71%', left: '36%', top: '1%' };
                waterMarkFontSize = 'bold 30px Microsoft YaHei';
                symbolSize = 10;
                break;
        }
        const option = {
            title: [{
                text: title,
                align: 'left',
                subtext: '     ' + respText.lastUpdatetime,
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
            }, {
                text: respText.actplanRatio,
                right: '18%',
                align: 'right',
                top: '7%',
                textStyle:
                {
                    fontFamily: '微软雅黑',
                    fontSize: titleFontSize.sub,
                    color: 'rgb(0,0,0)',
                },
            }],
            color: ['#1a778d',
                '#ff9933',
                '#1d18eb',
                '#db7108',
                '#7CCD7C',
                '#0aa28e',
                '#FFB90F',
                '#B03060',
                '#556B2F',
                '#BFBFBF',
                '#EE7942',
                '#dc9de6',
                '#1ef1d5',
                '#b210ce',
                '#b3133e'],
            tooltip: {
                trigger: 'item',
                formatter: '{a} : {c}'
            },
            legend: {
                data: ['Stock In Cum', 'Rt Cum', 'Stock In Daily', 'Rt Daily'],
                selected: {
                    'All': false,
                },
                left: legend.left,
                top: legend.top,
                // 图例排布
                width: legend.width,
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
                    type: 'value',
                    name: 'Daily',
                    nameTextStyle:
                    {
                        fontSize: fontSize,
                        fontFamily: '微软雅黑',
                        color: 'rgb(66,66,66)',
                    },
                    axisLabel: {
                        color: 'rgb(66,66,66)',
                        fontSize: fontSize,
                        margin: '15',
                        formatter: function (value) {
                            if (value > 999 || value < -999) {
                                const i = value / 1000;
                                return i + 'K';
                            } else {
                                return value;
                            }
                        }
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
                        length: 6,
                        lineStyle:
                        {
                            width: axisWidth,
                        }
                    },
                    splitNumber: 4,
                },
                {
                    type: 'value',
                    name: 'Cum',
                    nameTextStyle:
                    {
                        fontSize: fontSize,
                        fontFamily: '微软雅黑',
                        color: 'rgb(66,66,66)',
                    },
                    axisLabel: {
                        color: 'rgb(66,66,66)',
                        fontSize: fontSize,
                        margin: '15',
                        formatter: function (value) {
                            if (value > 999 || value < -999) {
                                const i = value / 1000;
                                return i + 'K';
                            } else {
                                return value;
                            }
                        }
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
                        length: 6,
                        lineStyle:
                        {
                            width: axisWidth,
                        }
                    },
                    splitNumber: 4,
                    splitLine:
                    {
                        show: false
                    },
                }
            ],
            grid: grid,
            series: [
                {
                    name: 'Stock In Daily',
                    type: 'bar',
                    stack: '1',
                    barWidth: '70%',
                    data: eval('(' + respText.data_dailyplan + ')'),
                },
                {
                    name: 'Rt Daily',
                    type: 'bar',
                    stack: '1',
                    barWidth: '70%',
                    data: eval('(' + respText.data_dailyact + ')'),
                },
                {
                    name: 'Stock In Cum',
                    type: 'line',
                    yAxisIndex: 1,
                    data: eval('(' + respText.data_cumplan + ')'),
                    symbol: 'circle',
                    symbolSize: symbolSize,

                },
                {
                    name: 'Rt Cum',
                    type: 'line',
                    yAxisIndex: 1,
                    data: eval('(' + respText.data_cumact + ')'),
                    symbol: 'circle',
                    symbolSize: symbolSize,
                },
            ],
            // 水印增加
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
                        font: waterMarkFontSize
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
                        font: waterMarkFontSize
                    }
                },
            ],
        };
        return option;
    }

    getOption_WIPMove(title, respText, waterMark, deviceType) {
        let fontSize;
        let axisWidth;
        let grid;
        let titleFontSize;
        let legend;
        let waterMarkFontSize;
        let symbolSize;
        let seriesFontSize;
        let axisLabelFontSize;
        switch (deviceType) {
            case 'phone':
                fontSize = '60%';
                titleFontSize = { main: '140%', sub: '80%' };
                axisWidth = 2;
                grid = { x: '10%', x2: '7%', y: '20%', y2: '22%' };
                legend = { width: '71%', left: '36%', top: '1%' };
                break;
            case 'pad':
                fontSize = '100%';
                titleFontSize = { main: '200%', sub: '110%' };
                axisWidth = 2;
                grid = { x: '7%', x2: '8%', y: '20%', y2: '22%' };
                legend = { width: '71%', left: '50%', top: '3%' };
                break;
            case 'monitor':
                fontSize = '90%';
                titleFontSize = { main: '180%', sub: '100%' };
                axisWidth = 2;
                grid = { x: '7%', x2: '7%', y: '19%', y2: '22%' };
                legend = { width: '71%', left: '50%', top: '3%' };
                waterMarkFontSize = 'bold 20px Microsoft YaHei';
                symbolSize = 6;
                seriesFontSize = 9;
                axisLabelFontSize = 9;
                break;
            case 'tv':
                fontSize = '110%';
                titleFontSize = { main: '200%', sub: '120%' };
                axisWidth = 4;
                grid = { x: '7%', x2: '7%', y: '14%', y2: '22%' };
                legend = { width: '71%', left: '40%', top: '2%' };
                waterMarkFontSize = 'bold 30px Microsoft YaHei';
                symbolSize = 10;
                seriesFontSize = 11;
                axisLabelFontSize = 10;
                break;
        }
        const option = {
            title: {
                text: title,
                subtext: '     ' + respText.today + '    WIP总量：' + respText.wiptotal,
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
            },
            color: ['#1a778d',
                '#ff9933',
                '#1d18eb',
                '#db7108',
                '#7CCD7C',
                '#0aa28e',
                '#FFB90F',
                '#B03060',
                '#556B2F',
                '#BFBFBF',
                '#EE7942',
                '#dc9de6',
                '#1ef1d5',
                '#b210ce',
                '#b3133e'],
            tooltip: {
                trigger: 'item',
                formatter: '{a} : {c}'
            },
            legend: {
                data: ['WIP', 'MOVEMENT', 'MOVEMENT_OK'],
                left: legend.left,
                top: legend.top,
                // 图例排布
                width: legend.width,
            },
            xAxis: [
                {
                    type: 'category',
                    data: eval('(' + respText.xdata + ')'),
                    axisPointer: {
                        type: 'shadow'
                    },
                    axisLabel: {
                        interval: 0,
                        rotate: 315,
                        color: 'rgb(66,66,66)',
                        fontSize: axisLabelFontSize,
                    },
                    // 坐标轴颜色调整为灰色，宽度调宽
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
                    }
                }
            ],
            yAxis: [
                {
                    type: 'value',
                    name: 'WIP',
                    nameTextStyle:
                    {
                        fontSize: fontSize,
                        fontFamily: '微软雅黑',
                        color: 'rgb(66,66,66)',
                    },
                    axisLabel: {
                        color: 'rgb(66,66,66)',
                        fontSize: fontSize,
                        margin: '15',
                        formatter: function (value) {
                            if (value > 999 || value < -999) {
                                const i = value / 1000;
                                return i + 'K';
                            } else {
                                return value;
                            }
                        }
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
                        length: 6,
                        lineStyle:
                        {
                            width: axisWidth,
                        }
                    },
                    splitNumber: 4,
                },
                {
                    type: 'value',
                    name: 'Movement',
                    nameTextStyle:
                    {
                        fontSize: fontSize,
                        fontFamily: '微软雅黑',
                        color: 'rgb(66,66,66)',
                    },
                    axisLabel: {
                        color: 'rgb(66,66,66)',
                        fontSize: fontSize,
                        margin: '15',
                        formatter: function (value) {
                            if (value > 999 || value < -999) {
                                const i = value / 1000;
                                return i + 'K';
                            } else {
                                return value;
                            }
                        }
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
                        length: 6,
                        lineStyle:
                        {
                            width: axisWidth,
                        }
                    },
                    splitNumber: 4,
                    splitLine:
                    {
                        show: false
                    },
                },
            ],
            dataZoom: [{
                type: 'slider',
                show: true,
                xAxisIndex: [0],
                handleSize: 15, // 滑动条的 左右2个滑动条的大小
                height: 8, // 组件高度
                left: 30, // 左边的距离
                right: 40, // 右边的距离
                bottom: 30, // 右边的距离
                handleColor: '#ddd', // h滑动图标的颜色
                handleStyle: {
                    borderColor: '#cacaca',
                    borderWidth: '0.5',
                    shadowBlur: 2,
                    background: '#ddd',
                    shadowColor: '#ddd',
                },
                /*                     fillerColor: new echarts.graphic.LinearGradient(1, 0, 0, 0, [{
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
            grid: grid,
            series: [
                {
                    name: 'WIP',
                    type: 'bar',
                    data: eval('(' + respText.wipdata + ')'),
                    label:
                    {
                        normal:
                        {
                            show: true,
                            fontSize: seriesFontSize
                        }
                    },
                    barWidth: '50%',
                }, {
                    name: 'MOVEMENT',
                    type: 'line',
                    yAxisIndex: 1,
                    data: eval('(' + respText.movedata + ')'),
                    symbol: 'circle',
                    symbolSize: symbolSize,
                    label:
                    {
                        normal:
                        {
                            show: true,
                            fontSize: seriesFontSize
                        }
                    }
                },
                {
                    name: 'MOVEMENT_OK',
                    type: 'line',
                    yAxisIndex: 1,
                    data: eval('(' + respText.okmovedata + ')'),
                    symbol: 'circle',
                    symbolSize: symbolSize,
                    label:
                    {
                        normal:
                        {
                            show: true,
                            position: 'bottom',
                            fontSize: seriesFontSize
                        }
                    }
                },
            ],
            // 水印增加
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
                        font: waterMarkFontSize
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
                        font: waterMarkFontSize
                    }
                },
            ],
        };
        return option;
    }

    getOption_WIPMoveByLine(title, respText, waterMark, deviceType) {
        let fontSize;
        let axisWidth;
        let grid;
        let titleFontSize;
        let legend;
        let waterMarkFontSize;
        switch (deviceType) {
            case 'phone':
                fontSize = '60%';
                titleFontSize = { main: '140%', sub: '80%' };
                axisWidth = 2;
                grid = { x: '10%', x2: '7%', y: '20%', y2: '22%' };
                legend = { width: '71%', left: '36%', top: '1%' };
                break;
            case 'pad':
                fontSize = '100%';
                titleFontSize = { main: '200%', sub: '110%' };
                axisWidth = 2;
                grid = { x: '7%', x2: '8%', y: '20%', y2: '22%' };
                legend = { width: '71%', left: '50%', top: '3%' };
                break;
            case 'monitor':
                fontSize = '90%';
                titleFontSize = { main: '180%', sub: '100%' };
                axisWidth = 2;
                grid = { x: '7%', x2: '7%', y: '19%', y2: '22%' };
                legend = { width: '50%', left: '46%', top: '3%' };
                waterMarkFontSize = 'bold 20px Microsoft YaHei';
                break;
            case 'tv':
                fontSize = '110%';
                titleFontSize = { main: '200%', sub: '120%' };
                axisWidth = 4;
                grid = { x: '7%', x2: '7%', y: '14%', y2: '22%' };
                legend = { width: '55%', left: '40%', top: '2%' };
                waterMarkFontSize = 'bold 30px Microsoft YaHei';
                break;
        }
        const option = {
            title: {
                text: title,
                subtext: '     ' + respText.today + '    WIP总量：' + respText.wiptotal,
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
            },
            color: ['#1a778d',
                '#ff9933',
                '#1d18eb',
                '#db7108',
                '#7CCD7C',
                '#0aa28e',
                '#FFB90F',
                '#B03060',
                '#556B2F',
                '#BFBFBF',
                '#EE7942',
                '#dc9de6',
                '#1ef1d5',
                '#b210ce',
                '#b3133e'],
            tooltip: {
                trigger: 'item',
                formatter: '{a} : {c}'
            },
            // toolbox: {
            // feature: {
            // dataView: {show: true, readOnly: true},
            // }
            // },
            legend: {
                data: eval('(' + respText.legendData + ')'),
                type: 'scroll',
                left: legend.left,
                top: legend.top,
                // 图例排布
                width: legend.width,
            },
            xAxis: [
                {
                    type: 'category',
                    data: eval('(' + respText.xdata + ')'),
                    axisPointer: {
                        type: 'shadow'
                    },
                    axisLabel: {
                        interval: 0,
                        rotate: 315,
                        color: 'rgb(66,66,66)',
                        // fontSize: fontSize,
                    },
                    // 坐标轴颜色调整为灰色，宽度调宽
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
                    }
                }
            ],
            yAxis: [
                {
                    type: 'value',
                    name: 'WIP',
                    nameTextStyle:
                    {
                        fontSize: fontSize,
                        fontFamily: '微软雅黑',
                        color: 'rgb(66,66,66)',
                    },
                    axisLabel: {
                        color: 'rgb(66,66,66)',
                        fontSize: fontSize,
                        margin: '15',
                        formatter: function (value) {
                            if (value > 999 || value < -999) {
                                const i = value / 1000;
                                return i + 'K';
                            } else {
                                return value;
                            }
                        }
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
                        length: 6,
                        lineStyle:
                        {
                            width: axisWidth,
                        }
                    },
                    splitNumber: 4,
                },
                {
                    type: 'value',
                    name: 'Movement',
                    nameTextStyle:
                    {
                        fontSize: fontSize,
                        fontFamily: '微软雅黑',
                        color: 'rgb(66,66,66)',
                    },
                    axisLabel: {
                        color: 'rgb(66,66,66)',
                        fontSize: '120%',
                        margin: '15',
                        formatter: function (value) {
                            if (value > 999 || value < -999) {
                                const i = value / 1000;
                                return i + 'K';
                            } else {
                                return value;
                            }
                        }
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
                        length: 6,
                        lineStyle:
                        {
                            width: axisWidth,
                        }
                    },
                    splitNumber: 4,
                    splitLine:
                    {
                        show: false
                    },
                },
            ],
            dataZoom: [{
                type: 'slider',
                show: true,
                xAxisIndex: [0],
                handleSize: 20, // 滑动条的 左右2个滑动条的大小
                height: 8, // 组件高度
                left: 30, // 左边的距离
                right: 40, // 右边的距离
                bottom: 30, // 右边的距离
                handleColor: '#ddd', // h滑动图标的颜色
                handleStyle: {
                    borderColor: '#cacaca',
                    borderWidth: '1',
                    shadowBlur: 2,
                    background: '#ddd',
                    shadowColor: '#ddd',
                },
                /*                     fillerColor: new echarts.graphic.LinearGradient(1, 0, 0, 0, [{
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
            grid: grid,
            series: eval('(' + respText.series + ')'),
            // 水印增加
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
                        font: waterMarkFontSize
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
                        font: waterMarkFontSize
                    }
                },
            ],
        };
        return option;
    }

    getOption_eacCutproduction(title, respText, waterMark, deviceType) {
        const schema = [
            { name: 'date', index: 0, text: '日' },
            { name: 'FPY', index: 1, text: 'FPY' },
            { name: '良品', index: 2, text: '良品' },
            { name: '产出', index: 3, text: '产出' },
        ];

        let fontSize;
        let axisWidth;
        let symbolSize;
        let visualMap;
        let titleFontsize;
        let waterMarkFontSize;
        switch (deviceType) {
            case 'phone':
                fontSize = '100%';
                axisWidth = 2;
                symbolSize = [10, 20];
                visualMap = { height: 0, width: 0 };
                break;
            case 'pad':
                fontSize = '100%';
                axisWidth = 2;
                symbolSize = [10, 50];
                visualMap = { height: 100, width: 20 };
                break;
            case 'monitor':
                fontSize = '90%';
                titleFontsize = '180%';
                axisWidth = 2;
                symbolSize = [10, 70];
                visualMap = { height: 100, width: 25 };
                waterMarkFontSize = 'bold 20px Microsoft YaHei';
                break;
            case 'tv':
                fontSize = '120%';
                titleFontsize = '220%';
                axisWidth = 4;
                symbolSize = [10, 100];
                visualMap = { height: 120, width: 30 };
                waterMarkFontSize = 'bold 30px Microsoft YaHei';
                break;
        }

        const option = {
            title: {
                text: title,
                align: 'left',
                left: '0%',
                top: '1%',
                textStyle:
                {
                    fontFamily: '微软雅黑',
                    fontSize: titleFontsize,
                },
            },
            color: ['#1a778d',
                '#ff9933',
                '#1d18eb',
                '#db7108',
                '#7CCD7C',
                '#0aa28e',
                '#FFB90F',
                '#B03060',
                '#556B2F',
                '#BFBFBF',
                '#EE7942',
                '#dc9de6',
                '#1ef1d5',
                '#b210ce',
                '#b3133e'],
            legend: {
                type: 'scroll',
                left: '25%',
                top: '2.5%',
                // 图例排布
                width: '71%',
                data: eval('(' + respText.legenddata + ')'),
                //data: ['7CCCC01', '7CCCC02', '7CCCC03', '7CCCC04', '7CCCC05', '7CCCC06', '7CCCC07', '7CCCC08', '7CCCC09', '7CCCC10']
            },
            grid: {
                x: '7%',
                x2: '7%',
                y: '14%',
                // y2: '10%'
            },
            tooltip: {
                padding: 10,
                backgroundColor: '#222',
                borderColor: '#777',
                borderWidth: 1,
                formatter: function (obj) {
                    const value = obj.value;
                    return '<div style="border-bottom: 1px solid rgba(255,255,255,.3);'
                        + ' font-size: 18px;padding-bottom: 7px;margin-bottom: 7px">'
                        + obj.seriesName + ' ' + value[4] + '：'
                        + '</div>'
                        + schema[1].text + '：' + value[1] + '%' + '<br>'
                        + schema[2].text + '：' + value[2] + '<br>'
                        + schema[3].text + '：' + value[3] + '<br>';
                }
            },
            xAxis: {
                name: '日期',
                type: 'category',
                data: eval('(' + respText.xdata + ')'),
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
                // 坐标轴刻度加粗
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
                },
            },
            yAxis: {
                type: 'value',
                name: 'FPY',
                // nameGap: 20,
                scale: true,
                min: function (value) {
                    const range = value.max - value.min;
                    const rangeplus = range / 5;

                    const a = Math.floor(value.min - rangeplus);
                    if (a < 5) {
                        return 0;
                    } else {
                        return a;
                    }
                },
                max: function (value) {
                    const range = value.max - value.min;
                    const rangeplus = range / 5;

                    const a = Math.ceil(value.max + rangeplus);
                    if (a > 100) {
                        return 100;
                    } else {
                        return a;
                    }
                },
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
                // 坐标轴刻度加粗
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
                    show: true,
                },
                splitNumber: 4,

            },
            visualMap: [
                {
                    left: 'right',
                    top: '8%',
                    dimension: 3,
                    min: eval('(' + respText.min + ')'),
                    max: eval('(' + respText.max + ')'),
                    itemWidth: visualMap.width,
                    itemHeight: visualMap.height,
                    calculable: true,
                    precision: 0.1,
                    text: ['圆形大小：产量'],
                    textGap: 30,
                    inRange: {
                        symbolSize: symbolSize
                    },
                    outOfRange: {
                        symbolSize: [10, 70],
                        color: ['rgba(255,255,255,.2)']
                    },
                    controller: {
                        inRange: {
                            color: ['#919191']
                        },
                        outOfRange: {
                            color: ['#d0d0d0']
                        }
                    }
                },

            ],
            series: eval('(' + respText.series + ')'),
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
                        font: waterMarkFontSize
                    }
                },
                {
                    type: 'text',
                    left: '47%',
                    top: '35%',
                    z: 0,
                    cursor: 'default',
                    rotation: Math.PI * 0.125,
                    style: {
                        fill: 'rgb(188,188,188)',
                        text: waterMark,
                        font: waterMarkFontSize
                    }
                },
            ],
        };

        return option;
    }

    getOPtion_DayScrapBrtChart(title, respText, waterMark, deviceType) {
        let fontSize;
        let axisWidth;
        let grid;
        let titleFontSize;
        let legend;
        let waterMarkFontsize;
        switch (deviceType) {
            case 'phone':
                fontSize = '60%';
                titleFontSize = { main: '140%', sub: '80%' };
                axisWidth = 2;

                legend = { width: '71%', left: '26%', top: '1%' };
                break;
            case 'pad':
                fontSize = '100%';
                titleFontSize = { main: '180%', sub: '100%' };
                axisWidth = 2;

                legend = { width: '71%', left: '35%', top: '7%' };
                break;
            case 'monitor':
                fontSize = '80%';
                titleFontSize = { main: '140%', sub: '90%' };
                axisWidth = 2;
                grid = [{
                    x: '8%',
                    x2: '7%',
                    y: '18%',
                    height: '71%'
                }, {
                    x: '7%',
                    x2: '7%',
                    y2: '0%',
                    height: '4%'
                }];
                legend = { width: '55%', left: '40%', top: '2%' };
                waterMarkFontsize = 'bold 20px Microsoft YaHei';
                break;
            case 'tv':
                fontSize = '105%';
                titleFontSize = { main: '180%', sub: '110%' };
                axisWidth = 4;
                grid = [{
                    x: '8%',
                    x2: '7%',
                    y: '16%',
                    height: '72%'
                }, {
                    x: '7%',
                    x2: '7%',
                    y2: '1%',
                    height: '3%'
                }];
                legend = { width: '57%', left: '35%', top: '2%' };
                waterMarkFontsize = 'bold 25px Microsoft YaHei';
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
            {
                text: '数量:',
                left: '0%',
                align: 'left',
                bottom: '0%',
                textStyle:
                {
                    fontFamily: '微软雅黑',
                    fontSize: titleFontSize.sub,
                },
            }],
            tooltip: {
                padding: 10,
                backgroundColor: '#222',
                borderColor: '#777',
                borderWidth: 1,
                formatter: function (obj) {
                    var value = obj.value;
                    if (obj.seriesName != "过货量") {
                        if (obj.seriesType == "bar") {
                            return '<div style="border-bottom: 1px solid rgba(255,255,255,.3); font-size: 18px;padding-bottom: 7px;margin-bottom: 7px">'
                                + obj.name + '：'
                                + '</div>'
                                + obj.seriesName + '：' + value[1] + '%' + '<br>'
                                + obj.seriesName + ' Scrap数量：' + value[4] + '<br>'
                        }
                        if (obj.seriesType == "line") {
                            return '<div style="border-bottom: 1px solid rgba(255,255,255,.3); font-size: 18px;padding-bottom: 7px;margin-bottom: 7px">'
                                + obj.name + '：'
                                + '</div>'
                                + obj.seriesName + '：' + value[1] + '%' + '<br>'
                                + obj.seriesName + ' 等级数量：' + value[4] + '<br>'
                        }
                    }
                    /*else{
                      return '<div style="border-bottom: 1px solid rgba(255,255,255,.3); font-size: 18px;padding-bottom: 7px;margin-bottom: 7px">'
                        + '过货量：' + value[2] + '<br>'
                    }*/
                }
            },
            legend: {
                data: eval('(' + respText.legenddata + ')'),
                type: 'scroll',
                left: legend.left,
                top: legend.top,
                width: '35%',

                /*                 orient: 'horizontal',
                                data: eval('(' + respText.legenddata + ')'),
                                selectedMode: false,
                                type: 'scroll', */
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
                        margin: '10',
                    }
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
                    name: 'Scrap Ratio',
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
                        margin: '5',
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
                    splitNumber: 4,
                },
                {
                    type: 'value',
                    gridIndex: 0,
                    show: false,
                }, {
                    type: 'value',
                    gridIndex: 1,
                    show: false,
                }
            ],
            color: ["#6423AA",
                "#FA4B32",
                "#8DACC1",
                "#61A0A8",
                "#B8C306",
                "#D48265",
                "#91C7AE",
                "#749F83",
                "#CA8622",
                "#2F9BC1",
                "#BDA29A",
                "#6E7074",
                "#546570",
                "#C4CCD3",
                "#005766",
                "#008B8B",
                "#00CDCD",
                "#00FF7F",
                "#228B22",
                "#2E8B57",
                "#4876FF",
                "#6CA6CD",
                "#698B22",
                "#6CA6CD",
                "#8B1A1A",
                "#7F3569",
                "#8B3626",
                "#8B4500",
                "#E9F16F",
                "#8B4789",
                "#8B5A2B",
                "#8B6508",
                "#8B7355",
                "#8CFFA1",
                "#B895D8",
                "#310D52",
                "#B0E2FF",
                "#8E8E19",
                "#0E123E",
                "#731941",
                "#CC9DBE",
                "#090831",
                "#9050C1",
                "#886838",
                "#6B4814",
                "#375A9A",
                "#32B323",
                "#1E92C7",
                "#C71E5C",
                "#AF1F5E"],
            grid: grid,
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
                        font: waterMarkFontsize
                    }
                }
            ],
        };

        return option;
    }

    getOPtion_DetailScrapPieChart(title, respText, waterMark, deviceType) {
        let fontSize;
        let axisWidth;
        let grid;
        let titleFontSize;
        let legend;
        let waterMarkFontSize;
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
                titleFontSize = { main: '140%', sub: '100%' };
                axisWidth = 3;
                grid = {
                    x: '10%',
                    x2: '7%',
                    y: '12%',
                    height: '75%'
                };
                legend = { width: '71%', left: '26%', top: '1%' };
                waterMarkFontSize = 'bold 20px Microsoft YaHei';
                break;
            case 'tv':
                fontSize = '120%';
                titleFontSize = { main: '150%', sub: '120%' };
                axisWidth = 4;
                grid = {
                    x: '7%',
                    x2: '7%',
                    y: '12%',
                    height: '75%'
                };
                legend = { width: '71%', left: '26%', top: '1%' };
                waterMarkFontSize = 'bold 25px Microsoft YaHei';
                break;
        }

        const option = {
            title: {
                text: title,
                subtext: eval('(' + respText.subTitle + ')'),
                itemGap: 25,
                top: '2%',
                left: '5%',
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
            },
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            legend: {
                orient: 'horizontal',
                top: 'bottom',
                data: eval('(' + respText.legendData + ')'),
                selectedMode: false,
                type: 'scroll',
                /*             left: legend.left,
                            top: legend.top,
                            width: legend.width, */
            },
            series: [
                {
                    name: 'Scrap百分数',
                    type: 'pie',
                    radius: '55%',
                    center: ['50%', '55%'],
                    // roseType: 'angle',
                    startAngle: 0,
                    data: eval('(' + respText.series + ')'),
                    itemStyle: {
                        emphasis: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    },
                    label: {
                        normal: {
                            formatter: ' {d}% ',
                        }
                    },
                }
            ],
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
                        font: waterMarkFontSize
                    }
                },
            ],
        };
        return option;
    }

}
