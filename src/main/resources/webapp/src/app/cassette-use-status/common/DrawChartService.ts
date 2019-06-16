import { Injectable } from "../../../../node_modules/@angular/core";


@Injectable()
export class CassetteChartService {

    getOption_CSTStatusDummyjiankong(title, respText, deviceType, waterMark) {
        let fontSize;
        let axisWidth;
        let grid;
        let titleFontSize;
        let legend;
        let waterMarkFontsize;
        let axisTextFontsize;
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
                fontSize = '90%';
                titleFontSize = { main: '140%', sub: '90%' };
                axisWidth = 2;
                grid = [{
                    x: '7%',
                    x2: '7%',
                    y: '18%',
                    height: '67%'
                }, {
                    x: '7%',
                    x2: '7%',
                    y2: '5%',
                    height: '3%'
                }];
                legend = { width: '64%', left: '30%', top: '2%' };
                waterMarkFontsize = 'bold 20px Microsoft YaHei';
                break;
            case 'tv':
                fontSize = '120%';
                titleFontSize = { main: '200%', sub: '120%' };
                axisWidth = 4;
                axisTextFontsize = "80";
                grid = [{
                    x: '7%',
                    x2: '7%',
                    y: '13%',
                    height: '75%'
                }, {
                    x: '7%',
                    x2: '7%',
                    y2: '4%',
                    height: '3%'
                }];
                legend = { width: '65%', left: '28%', top: '2%' };
                waterMarkFontsize = 'bold 30px Microsoft YaHei';
                break;
        }
        const option = {
            title: [{
                text: title,
                //subtext:'     '+respText.today,
                align: 'left',
                left: '0%',
                top: '0%',
                //itemGap:25,
                textStyle:
                {
                    fontFamily: '微软雅黑',
                    fontSize: titleFontSize.main,
                },
            },
              /* {
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
                            return '<div style="border-bottom: 1px solid rgba(255,255,255,.3); font-size: 13px;padding-bottom: 3px;margin-bottom: 3px">'
                                + obj.name + '：'
                                + '</div>'
                                + '<div style="font-size: 5px;">' + obj.seriesName + ' 数量：' + value[1] + '</div>'
                            //    + obj.seriesName+' AgingOut数量：' + value[3] +'<br>'
                        }
                        /*	if(obj.seriesType=="line"){
                                return '<div style="border-bottom: 1px solid rgba(255,255,255,.3); font-size: 18px;padding-bottom: 7px;margin-bottom: 7px">'
                                    + obj.name + '：'
                                    + '</div>'
                                    + ' Scrap ' +obj.seriesName+"："+value[1] +'%'+'<br>'
                                    + ' Scrap数量：' + value[2]+'<br>'
                                    //+ obj.seriesName+' 等级数量：' + value[4] +'<br>'
                            }*/
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
                left: '45%',
                top: '10%',
                //图例排布
                width: '75%',
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
                        margin: '15',
                        rotate: -40,
                        formatter: function (params) {
                            var returnParam = "";
                            var length = params.length;
                            var i = params.indexOf(" ");
                            if (i > 0) {
                                returnParam = params.substring(0, i) + "\n";
                                returnParam += params.substring(i, length);
                            } else {
                                returnParam = params;
                            }
                            return returnParam;
                        }
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
                    name: 'CST QTY',
                    nameTextStyle:
                    {
                        fontSize: '90%',
                        fontFamily: '微软雅黑',
                        color: 'rgb(66,66,66)',
                    },
                    axisLabel: {
                        color: 'rgb(66,66,66)',
                        fontSize: '80%',
                        margin: '12',
                        //刻度除1000
                        formatter: function (value) {
                            if (value > 999 || value < -999) {
                                var i = value / 1000;
                                return i + 'K';
                            }
                            else {
                                return value;
                            }
                        }
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
                },
                /*{
                    type: 'value',
                    name: 'Ratio',
                    nameTextStyle:
                    {
                        fontSize:'120%' ,
                        fontFamily:'微软雅黑',
                        color:'rgb(66,66,66)',
                    },
                    axisLabel: {
                        formatter: '{value}%',
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
            grid: [{
                x: '4%',
                x2: '7%',
                y: '20%',
                height: '60%'
            }, {
                x: '7%',
                x2: '7%',
                y2: '10%',
                height: '0%'
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

    getOption_CSTStatusjiankong(title, respText, deviceType, waterMark) {
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
                fontSize = '90%';
                titleFontSize = { main: '140%', sub: '90%' };
                axisWidth = 2;
                grid = [{
                    x: '7%',
                    x2: '7%',
                    y: '18%',
                    height: '100%'
                }, {
                    x: '7%',
                    x2: '7%',
                    y2: '5%',
                    height: '0%'
                }];
                legend = { width: '64%', left: '30%', top: '2%' };
                waterMarkFontsize = 'bold 20px Microsoft YaHei';
                break;
            case 'tv':
                fontSize = '120%';
                titleFontSize = { main: '200%', sub: '120%' };
                axisWidth = 4;
                grid = [{
                    x: '7%',
                    x2: '7%',
                    y: '13%',
                    height: '75%'
                }, {
                    x: '7%',
                    x2: '7%',
                    y2: '4%',
                    height: '3%'
                }];
                legend = { width: '65%', left: '28%', top: '2%' };
                waterMarkFontsize = 'bold 30px Microsoft YaHei';
                break;
        }
        const option = {
            title: [{
                text: title,
                //subtext:'     '+respText.today,
                align: 'left',
                left: '0%',
                top: '1%',
                //itemGap:25,
                textStyle:
                {
                    fontFamily: '微软雅黑',
                    fontSize: titleFontSize.main,
                },
            },
              /* {
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
                            return '<div style="border-bottom: 1px solid rgba(255,255,255,.3); font-size: 11px;padding-bottom: 3px;margin-bottom: 3px">'
                                + obj.name + '：'
                                + '</div>'
                                + '<div style="font-size: 7px;">' + obj.seriesName + ' 数量：' + value[1] + '</div>'
                            //    + obj.seriesName+' AgingOut数量：' + value[3] +'<br>'
                        }
                        /*	if(obj.seriesType=="line"){
                                return '<div style="border-bottom: 1px solid rgba(255,255,255,.3); font-size: 18px;padding-bottom: 7px;margin-bottom: 7px">'
                                    + obj.name + '：'
                                    + '</div>'
                                    + ' Scrap ' +obj.seriesName+"："+value[1] +'%'+'<br>'
                                    + ' Scrap数量：' + value[2]+'<br>'
                                    //+ obj.seriesName+' 等级数量：' + value[4] +'<br>'
                            }*/
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
                left: '15%',
                top: '10%',
                //图例排布
                width: '75%',
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
                        length: 8,
                        lineStyle:
                        {
                            width: 4,
                        }
                    },
                    axisLabel:
                    {
                        color: 'rgb(66,66,66)',
                        fontSize: '90%',
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
                    name: 'CST QTY',
                    nameTextStyle:
                    {
                        fontSize: '80%',
                        fontFamily: '微软雅黑',
                        color: 'rgb(66,66,66)',
                    },
                    axisLabel: {
                        color: 'rgb(66,66,66)',
                        fontSize: '70%',
                        margin: '12',
                        //刻度除1000
                        formatter: function (value) {
                            if (value > 999 || value < -999) {
                                var i = value / 1000;
                                return i + 'K';
                            }
                            else {
                                return value;
                            }
                        }
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
                        length: 6,
                        lineStyle:
                        {
                            width: 4,
                        }
                    },
                    splitNumber: 4,
                },
                /*{
                    type: 'value',
                    name: 'Ratio',
                    nameTextStyle:
                    {
                        fontSize:'120%' ,
                        fontFamily:'微软雅黑',
                        color:'rgb(66,66,66)',
                    },
                    axisLabel: {
                        formatter: '{value}%',
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
            grid: [{
                x: '7%',
                x2: '3%',
                y: '23%',
                y2: '1%',
                height: '65%'
            }, {
                x: '7%',
                x2: '7%',
                y2: '4%',
                height: '0%'
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

    getOption_CSTStatusjiankongbank(title, respText, deviceType, waterMark) {
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
                fontSize = '90%';
                titleFontSize = { main: '140%', sub: '90%' };
                axisWidth = 2;
                grid = [{
                    x: '7%',
                    x2: '7%',
                    y: '18%',
                    height: '100%'
                }, {
                    x: '7%',
                    x2: '7%',
                    y2: '5%',
                    height: '0%'
                }];
                legend = { width: '64%', left: '30%', top: '2%' };
                waterMarkFontsize = 'bold 20px Microsoft YaHei';
                break;
            case 'tv':
                fontSize = '120%';
                titleFontSize = { main: '200%', sub: '120%' };
                axisWidth = 4;
                grid = [{
                    x: '7%',
                    x2: '7%',
                    y: '13%',
                    height: '75%'
                }, {
                    x: '7%',
                    x2: '7%',
                    y2: '4%',
                    height: '3%'
                }];
                legend = { width: '65%', left: '28%', top: '2%' };
                waterMarkFontsize = 'bold 30px Microsoft YaHei';
                break;
        }
        const option = {
            title: [{
                text: title,
                //subtext:'     '+respText.today,
                align: 'left',
                left: '3%',
                top: '1%',
                //itemGap:25,
                textStyle:
                {
                    fontFamily: '微软雅黑',
                    fontSize: titleFontSize.main,
                },
            },
              /* {
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
                            return '<div style="border-bottom: 1px solid rgba(255,255,255,.3); font-size: 11px;padding-bottom: 3px;margin-bottom: 3px">'
                                + obj.name + '：'
                                + '</div>'
                                + '<div style="font-size: 7px;">' + obj.seriesName + ' 数量：' + value[1] + '</div>'
                            //    + obj.seriesName+' AgingOut数量：' + value[3] +'<br>'
                        }
                        /*	if(obj.seriesType=="line"){
                                return '<div style="border-bottom: 1px solid rgba(255,255,255,.3); font-size: 18px;padding-bottom: 7px;margin-bottom: 7px">'
                                    + obj.name + '：'
                                    + '</div>'
                                    + ' Scrap ' +obj.seriesName+"："+value[1] +'%'+'<br>'
                                    + ' Scrap数量：' + value[2]+'<br>'
                                    //+ obj.seriesName+' 等级数量：' + value[4] +'<br>'
                            }*/
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
                left: '20%',
                top: '10%',
                //图例排布
                width: '71%',
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
                        length: 8,
                        lineStyle:
                        {
                            width: 4,
                        }
                    },
                    axisLabel:
                    {
                        color: 'rgb(66,66,66)',
                        fontSize: '90%',
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
                    name: 'CST QTY',
                    nameTextStyle:
                    {
                        fontSize: '80%',
                        fontFamily: '微软雅黑',
                        color: 'rgb(66,66,66)',
                    },
                    axisLabel: {
                        color: 'rgb(66,66,66)',
                        fontSize: '70%',
                        margin: '12',
                        //刻度除1000
                        formatter: function (value) {
                            if (value > 999 || value < -999) {
                                var i = value / 1000;
                                return i + 'K';
                            }
                            else {
                                return value;
                            }
                        }
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
                        length: 6,
                        lineStyle:
                        {
                            width: 4,
                        }
                    },
                    splitNumber: 4,
                },
                /*{
                    type: 'value',
                    name: 'Ratio',
                    nameTextStyle:
                    {
                        fontSize:'120%' ,
                        fontFamily:'微软雅黑',
                        color:'rgb(66,66,66)',
                    },
                    axisLabel: {
                        formatter: '{value}%',
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
            grid: [{
                x: '10%',
                x2: '3%',
                y: '23%',
                y2: '1%',
                height: '65%'
            }, {
                x: '7%',
                x2: '7%',
                y2: '4%',
                height: '0%'
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