import { Injectable } from '@angular/core';

@Injectable()
export class YieldechartOptionService {

  constructor() { }

  /**
 * yield
 * @param title
 * @param respText
 * @returns
 */
  getOption_yield(title, respText, waterMark, deviceType) {
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
        titleFontSize = { main: '180%', sub: '90%' };
        axisWidth = 2;
        grid = [{
          x: '7%',
          x2: '7%',
          y: '13%',
          height: '76%'
        }, {
          x: '7%',
          x2: '7%',
          y2: '1.5%',
          height: '3%'
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
          y2: '1%',
          height: '3%'
        }];
        legend = { width: '65%', left: '28%', top: '2%' };
        waterMarkFontsize = 'bold 30px Microsoft YaHei';
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
        text: '过货量:',
        left: '1%',
        align: 'left',
        bottom: '2%',
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
                + obj.seriesName + ' 不良数量：' + value[4] + '<br>'
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
        //图例排布
        width: legend.width,
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
          splitNumber: 4,
        },
        {
          type: 'value',
          gridIndex: 0,
          name: 'Yield',
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
            font: waterMarkFontsize
          }
        },
      ],
    };

    return option;
  }

  getOption_yieldTotal(title, respText, waterMark, deviceType) {
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
        titleFontSize = { main: '160%', sub: '85%' };
        axisWidth = 2;
        grid = [{
          x: '7%',
          x2: '7%',
          y: '23%',
          height: '60%'
        }, {
          x: '7%',
          x2: '7%',
          y2: '1.5%',
          height: '6%'
        }];
        legend = { width: '64%', left: '30%', top: '2%' };
        waterMarkFontsize = 'bold 20px Microsoft YaHei';
        break;
      case 'tv':
        fontSize = '120%';
        titleFontSize = { main: '180%', sub: '120%' };
        axisWidth = 4;
        grid = [{
          x: '7%',
          x2: '7%',
          y: '20%',
          height: '63%'
        }, {
          x: '7%',
          x2: '7%',
          y2: '1%',
          height: '4%'
        }];
        legend = { width: '65%', left: '40%', top: '2%' };
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
        text: '过货量:',
        left: '1%',
        align: 'left',
        bottom: '2%',
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
                + obj.seriesName + ' 不良数量：' + value[4] + '<br>'
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
        //图例排布
        width: legend.width,
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
          name: 'Defect',
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
          splitNumber: 4,
        },
        {
          type: 'value',
          gridIndex: 0,
          show: false
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
          left: '30%',
          top: '15%',
          z: 0,
          cursor: 'default',
          rotation: Math.PI * 0.125,
          style: {
            fill: 'rgb(188,188,188)',
            text: waterMark,
            font: waterMarkFontsize
          }
        },
      ],
    };

    return option;
  }

  getOption_yieldByDepartment(title, respText, waterMark, deviceType) {
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
        fontSize = '75%';
        titleFontSize = { main: '120%', sub: '85%' };
        axisWidth = 2;
        grid = [{
          x: '9%',
          x2: '7%',
          y: '23%',
          height: '60%'
        }, {
          x: '7%',
          x2: '7%',
          y2: '1.5%',
          height: '3%'
        }];
        legend = { width: '50%', left: '40%', top: '2%' };
        waterMarkFontsize = 'bold 18px Microsoft YaHei';
        break;
      case 'tv':
        fontSize = '100%';
        titleFontSize = { main: '140%', sub: '120%' };
        axisWidth = 4;
        grid = [{
          x: '8%',
          x2: '7%',
          y: '20%',
          height: '68%'
        }, {
          x: '7%',
          x2: '7%',
          y2: '1%',
          height: '4%'
        }];
        legend = { width: '65%', left: '35%', top: '2%' };
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
                + obj.seriesName + ' 不良数量：' + value[4] + '<br>'
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
        //图例排布
        width: legend.width,
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
            rotate:315,
            //fontSize: fontSize,
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
          show: false
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
          left: '12%',
          top: '20%',
          z: 0,
          cursor: 'default',
          rotation: Math.PI * 0.125,
          style: {
            fill: 'rgb(188,188,188)',
            text: waterMark,
            font: waterMarkFontsize
          }
        },
      ],
    };

    return option;
  }

  /**
   * getOption_yieldWithkilling
   * @param title
   * @param respText
   * @returns
   */
  getOption_yieldWithkilling(title, respText, waterMark, deviceType) {
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
          fontSize: '220%',
        },
      },
      {
        text: '过货量:',
        left: '2%',
        align: 'left',
        bottom: '4%',
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
                + value[3] + '：'
                + '</div>'
                + obj.seriesName + '：' + value[1] + '%' + '<br>'
                + obj.seriesName + ' 不良数量：' + value[4] + '<br>'
            }
            if (obj.seriesType == "line") {
              return '<div style="border-bottom: 1px solid rgba(255,255,255,.3); font-size: 18px;padding-bottom: 7px;margin-bottom: 7px">'
                + value[3] + '：'
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
      toolbox: {
        //		        feature: {
        //		            dataView: {show: true, readOnly: true},
        //		        },
        //		        top:'0%',
        //		        right:'0%', 
      },
      legend: {
        data: eval('(' + respText.legenddata + ')'),
        type: 'scroll',
        left: '26%',
        top: '2.5%',
        //图例排布
        width: '71%',
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
        {
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
          //坐标轴刻度加粗
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
          //interval:20,
          //max:100
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
        height: '75%'
      }, {
        x: '7%',
        x2: '7%',
        y2: '4%',
        height: '3%'
      }],
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
            text: waterMark,
            font: 'bold 30px Microsoft YaHei'
          }
        },
      ],
    };

    return option;
  }


}
