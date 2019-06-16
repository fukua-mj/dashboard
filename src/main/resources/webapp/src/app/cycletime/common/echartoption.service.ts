import { Injectable } from '@angular/core';

@Injectable()
export class EchartoptionService {

  constructor() { }

  /**
 * yield
 * @param title
 * @param respText
 * @returns
 */
  getOption_CycleTime(title, respText, waterMark, deviceType) {
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
          height: '82%'
        }, {
          x: '7%',
          x2: '7%',
          y2: '1.5%',
          height: '3%'
        }];
        legend = { width: '50%', left: '45%', top: '2%' };
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
          height: '83%'
        }, {
          x: '7%',
          x2: '7%',
          y2: '1%',
          height: '3%'
        }];
        legend = { width: '65%', left: '35%', top: '2%' };
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
      },],
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
                + obj.seriesName + '：' + value[1] + '天' + '<br>'
            }
            if (obj.seriesType == "line") {
              return '<div style="border-bottom: 1px solid rgba(255,255,255,.3); font-size: 18px;padding-bottom: 7px;margin-bottom: 7px">'
                + obj.name + '：'
                + '</div>'
                + obj.seriesName + '：' + value[1] + '天' + '<br>'
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
          name: 'Cycle Time / (Day)',
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
          splitNumber: 4,
        },
        {
          type: 'value',
          gridIndex: 0,
          name: '',
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

}
