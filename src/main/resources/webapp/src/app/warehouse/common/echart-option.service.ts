import { Injectable } from '@angular/core';

@Injectable()
export class EchartOptionService {

  constructor() { }

  getOption_warehouse(title, respText, waterMark, deviceType) {
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
        grid = {
          x: '10%',
          x2: '7%',
          y: '12%',
          height: '75%'
        };
        legend = { width: '60%', left: '33%', top: '3%' };
        waterMarkFontSize = 'bold 20px Microsoft YaHei';
        break;
      case 'tv':
        fontSize = '120%';
        titleFontSize = { main: '200%', sub: '120%' };
        axisWidth = 4;
        grid = {
          x: '7%',
          x2: '7%',
          y: '12%',
          height: '75%'
        };
        legend = { width: '71%', left: '26%', top: '3%' };
        waterMarkFontSize = 'bold 30px Microsoft YaHei';
        break;
    }

    const option = {
      title: {
        text: title,
        //subtext:'     '+respText.today,
        align: 'left',
        left: '0%',
        top: '1%',
        itemGap: 25,
        textStyle:
        {
          fontFamily: '微软雅黑',
          fontSize: titleFontSize.main,
        },
      },
      tooltip: {
        trigger: 'item',
        formatter: '{a} : {c}'
      },
      color: [
        "#1a778d",
        "#ff9933",
        "#1d18eb",
        "#db7108",
        "#7CCD7C",
        "#0aa28e",
        "#FFB90F",
        "#B03060",
        "#556B2F",
        "#BFBFBF",
        "#EE7942",
        "#dc9de6",
        "#1ef1d5",
        "#b210ce",
        "#b3133e"
      ],
      legend: {
        data: eval('(' + respText.legenddata + ')'),
        type: 'scroll',
        left: legend.left,
        top: legend.top,
        //图例排布
        width: legend.width,
        selectedMode: true,
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
          //坐标轴刻度加粗
          axisTick:
          {
            length: 8,
            interval: '0',
            lineStyle:
            {
              width: axisWidth,
            }
          },
          axisLabel:
          {
            color: 'rgb(0,0,0)',
            /*             fontSize: fontSize, */
            rotate: 315,
            margin: '15',
            interval: '0',
          }
        }
      ],
      yAxis: [
        {
          type: 'value',
          name: 'Inventory',
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
            //刻度除1000
            formatter: function (value) {
              var i = value / 1000;
              return i + 'K';
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
        }
      ],
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
            font: waterMarkFontSize
          }
        },
        {
          type: 'text',
          left: '40%',
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

  getOption_warehouseGrade(title, respText, waterMark, deviceType) {
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
        waterMarkFontSize = 'bold 30px Microsoft YaHei';
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
      color:[
        "#277dc7",
        "#35cba1",
        "#ffc107",
        "#94cd1c"
      ],
      legend: {
        orient: 'horizontal',
        top: 'bottom',
        data: ['S', 'A', 'T', 'F'],
        selectedMode: false,
      },
      series: [
        {
          name: '库存等级',
          type: 'pie',
          radius: '55%',
          center: ['50%', '55%'],
          //roseType: 'angle',
          startAngle: 0,
          data: eval('(' + respText.piedata1 + ')'),
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
          left: '5%',
          top: '0%',
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

  getOption_warehouseTime(title, respText, waterMark, deviceType) {
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
        waterMarkFontSize = 'bold 30px Microsoft YaHei';
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
        data: ['<30', '30<x<60', '60<x<90', '>90'],
        selectedMode: false,
      },
      color:[
        "#53a7e0",
        "#c39560",
        "#f1c40f",
        "#d14233"
      ],
      series: [
        {
          name: '库龄',
          type: 'pie',
          radius: '55%',
          center: ['50%', '55%'],
          //roseType: 'angle',
          startAngle: 0,
          data: eval('(' + respText.piedata2 + ')'),
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
          left: '5%',
          top: '0%',
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
