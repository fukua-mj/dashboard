import { Injectable } from '@angular/core';

@Injectable()
export class EchartOptionService {

  constructor() { }

  getOption_quality(title, respText, waterMark, deviceType) {
    let fontSize;
    let axisWidth;
    let grid;
    let titleFontSize;
    let legend;
    let watermarkFont;
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
        grid = [{
          x: '6%',
          x2: '6%',
          y: '14%',
          height: '76%'
        }, {
          x: '6%',
          x2: '6%',
          y2: '1%',
          height: '3%'
        }];
        legend = { width: '65%', left: '30%', top: '1%' };
        watermarkFont = 'bold 20px Microsoft YaHei';
        break;
      case 'tv':
        fontSize = '120%';
        titleFontSize = { main: '200%', sub: '120%', left: '2%', bottom: '4%' };
        axisWidth = 4;
        grid = [{
          x: '7%',
          x2: '7%',
          y: '12%',
          height: '75%'
        }, {
          x: '7%',
          x2: '7%',
          y2: '4%',
          height: '3%'
        }];
        legend = { width: '71%', left: '26%', top: '1%' };
        watermarkFont = 'bold 30px Microsoft YaHei';
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
      {
        text: '接收量:',
        left: titleFontSize.left,
        align: 'left',
        bottom: titleFontSize.bottom,
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
          if (obj.seriesName != "总量") {
            if (obj.seriesType == "bar") {
              return '<div style="border-bottom: 1px solid rgba(255,255,255,.3); font-size: 18px;padding-bottom: 7px;margin-bottom: 7px">'
                + value[2] + '：'
                + '</div>'
                + obj.seriesName + '：' + value[1] + '<br>'
              //+ obj.seriesName+' 不良数量：' + value[4] +'<br>'
            }
            if (obj.seriesType == "line") {
              return '<div style="border-bottom: 1px solid rgba(255,255,255,.3); font-size: 18px;padding-bottom: 7px;margin-bottom: 7px">'
                + value[2] + '：'
                + '</div>'
                + obj.seriesName + '：' + value[1] + '%' + '<br>'
              //+ obj.seriesName+' 等级数量：' + value[4] +'<br>'
            }
          }
        }
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
        selected: {
          'LRR': false,
        }
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
          name: 'DPPM',
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
            length: axisWidth,
            lineStyle:
            {
              width: axisWidth,
            }
          },
          splitNumber: 4,
        },
        {
          type: 'value',
          name: 'LRR',
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
      grid: grid,
      series: eval('(' + respText.series + ')'),
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

  getOption_oqaDaily(title, respText, waterMark, deviceType) {
    let fontSize;
    let axisWidth;
    let grid;
    let titleFontSize;
    let legend;
    let watermarkFont;
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
        grid = { x: '8%', x2: '7%', y: '19%' };
        legend = { width: '71%', left: '26%', top: '1%' };
        watermarkFont = 'bold 20px Microsoft YaHei';
        break;
      case 'tv':
        fontSize = '120%';
        titleFontSize = { main: '200%', sub: '120%' };
        axisWidth = 4;
        grid = {
          x: '10%',
          x2: '7%',
          y: '12%',
          y2: '14%'
        };
        legend = { width: '71%', left: '26%', top: '1%' };
        watermarkFont = 'bold 30px Microsoft YaHei';
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
          fontSize: titleFontSize.main,
        },
      },
      tooltip: {
        trigger: 'item',
        formatter: '{a} : {c}',
      },
      legend: {
        data: eval('(' + respText.legenddata + ')'),
        type: 'scroll',
        left: '26%',
        top: '2.5%',
        //图例排布
        width: '71%',
        selected: {
          'LRR': false,
        }
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
            lineStyle:
            {
              width: axisWidth,
            }
          },
          axisLabel:
          {
            show: true,
            color: 'rgb(66,66,66)',
            /*             fontSize: fontSize, */
            margin: '15',
            interval: 0,
            rotate: 315,
          },
        }
      ],
      yAxis: [
        {
          type: 'value',
          name: 'DPPM',
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
            length: axisWidth,
            lineStyle:
            {
              width: axisWidth,
            }
          },
          splitNumber: 4,
        },
      ],
      grid: grid,
      series: eval('(' + respText.series + ')'),
      //水印增加
      graphic: [
        {
          type: 'text',
          left: '20%',
          top: '20%',
          z: 0,
          cursor: 'default',
          rotation: Math.PI * 0.125,
          style: {
            fill: 'rgb(188,188,188)',
            text: waterMark,
            font: watermarkFont
          }
        }
      ],
    };

    return option;
  }

  getOption_OperatorDefectchannengOQA(title, respText, waterMark, deviceType) {
    let fontSize;
    let axisWidth;
    let grid;
    let titleFontSize;
    let legend;
    let watermarkFont;
    let axisFontSize;
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
        titleFontSize = { main: '140%', sub: '80%', left: '0%', bottom: '1.5%' };
        axisWidth = 2;
        grid = [{
          x: '4%',
          x2: '5.5%',
          y: '24%',
          y2: '4%',
          height: '50%'
        }, {
          x: '4%',
          x2: '4%',
          y2: '6%',
          height: '6%'
        }];
        legend = { width: '65%', left: '30%', top: '1%' };
        watermarkFont = 'bold 18px Microsoft YaHei';
        axisFontSize = 11;
        break;
      case 'tv':
        fontSize = '110%';
        titleFontSize = { main: '200%', sub: '110%', left: '2%', bottom: '4%' };
        axisWidth = 4;
        grid = [{
          x: '7%',
          x2: '7%',
          y: '20%',
          y2: '4%',
          height: '60%'
        }, {
          x: '7%',
          x2: '7%',
          y2: '4%',
          height: '4%'
        }];
        legend = { width: '71%', left: '26%', top: '1%' };
        watermarkFont = 'bold 25px Microsoft YaHei';
        axisFontSize = 12;
        break;
    }

    const option = {
      title: [{
        text: title,
        align: 'left',
        subtext: '                          总过货量：' + respText.totolOut,
        left: '0%',
        top: '0%',
        itemGap: 17,
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
                + value[2] + '：'
                + '</div>'
                + 'Out Qty：' + value[1] + '<br>'
            }
            if (obj.seriesType == "line") {
              return '<div style="border-bottom: 1px solid rgba(255,255,255,.3); font-size: 18px;padding-bottom: 7px;margin-bottom: 7px">'
                + value[3] + '：'
                + '</div>'
                + obj.seriesName + '：' + value[1] + '%' + '<br>'
                + 'OK QTY：' + value[2] + '<br>'
            }
          }
        }
      },
      legend: {
        data: eval('(' + respText.legenddata + ')'),
        type: 'scroll',
        left: '46%',
        top: '2.5%',
        //图例排布
        width: '49%',
        selected: {
          'OK': false,
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
            interval: 0,
            fontSize: axisFontSize,
            rotate: 315,
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
          name: '产出数',
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
            length: axisWidth,
            lineStyle:
            {
              width: axisWidth,
            }
          },
          splitNumber: 4,
        }, {
          type: 'value',
          gridIndex: 0,
          name: 'Defect Ratio',
          scale: true,
          min: 0,
          max: 100,
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
            length: axisWidth,
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
      dataZoom: [{
        type: 'slider',
        show: true,
        xAxisIndex: [0, 1],
        handleSize: 13,//滑动条的 左右2个滑动条的大小
        height: 8,//组件高度
        left: 30, //左边的距离
        right: 40,//右边的距离
        bottom: 3,//右边的距离
        handleColor: '#ddd',//h滑动图标的颜色
        handleStyle: {
          borderColor: "#cacaca",
          borderWidth: "1",
          shadowBlur: 2,
          background: "#ddd",
          shadowColor: "#ddd",
        },
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
      grid: grid,
      series: eval('(' + respText.series + ')'),

      graphic: [
        {
          type: 'text',
          left: '5%',
          top: '15%',
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
          top: '15%',
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

  getOption_OperatorDefectchannengOneOQA(title, respText, waterMark, deviceType) {
    let fontSize;
    let axisWidth;
    let grid;
    let titleFontSize;
    let legend;
    let watermarkFont;
    let axisFontSize;
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
        titleFontSize = { main: '140%', sub: '80%', left: '0%', bottom: '1.5%' };
        axisWidth = 2;
        axisFontSize = 11;
        grid = [{
          x: '4%',
          x2: '5.5%',
          y: '25%',
          y2: '7%',
          height: '58%'
        }, {
          x: '4%',
          x2: '4%',
          y2: '4%',
          height: '0%'
        }];
        legend = { width: '65%', left: '30%', top: '1%' };
        watermarkFont = 'bold 18px Microsoft YaHei';
        break;
      case 'tv':
        fontSize = '120%';
        titleFontSize = { main: '200%', sub: '110%', left: '2%', bottom: '4%' };
        axisWidth = 4;
        axisFontSize = 14;
        grid = [{
          x: '7%',
          x2: '7%',
          y: '22%',
          y2: '4%',
          height: '60%'
        }, {
          x: '7%',
          x2: '7%',
          y2: '4%',
          height: '0%'
        }];
        legend = { width: '71%', left: '26%', top: '1%' };
        watermarkFont = 'bold 25px Microsoft YaHei';
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
                + value[2] + '：'
                + '</div>'
                + 'Out Qty：' + value[1] + '<br>'
            }
            if (obj.seriesType == "line") {
              return '<div style="border-bottom: 1px solid rgba(255,255,255,.3); font-size: 18px;padding-bottom: 7px;margin-bottom: 7px">'
                + value[3] + '：'
                + '</div>'
                + obj.seriesName + '：' + value[1] + '%' + '<br>'
                + 'OK QTY：' + value[2] + '<br>'
            }
          }
        }
      },
      dataZoom: [{
        type: 'slider',
        show: true,
        xAxisIndex: [0, 1],
        handleSize: 13,//滑动条的 左右2个滑动条的大小
        height: 8,//组件高度
        left: 30, //左边的距离
        right: 40,//右边的距离
        bottom: 3,//右边的距离
        handleColor: '#ddd',//h滑动图标的颜色
        handleStyle: {
          borderColor: "#cacaca",
          borderWidth: "1",
          shadowBlur: 2,
          background: "#ddd",
          shadowColor: "#ddd",
        },
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
      legend: {
        data: eval('(' + respText.legenddata + ')'),
        type: 'scroll',
        left: '46%',
        top: '2.5%',
        //图例排布
        width: '49%',
        selected: {
          'OK': false,
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
            rotate: 315,
            fontSize: axisFontSize,
            //margin:'15',
            interval: 0,
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
          name: '产出数',
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
        }, {
          type: 'value',
          gridIndex: 0,
          name: 'Defect Ratio',
          scale: true,
          min: 0,
          max: 100,
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
      grid: grid,
      series: eval('(' + respText.series + ')'),

      graphic: [
        {
          type: 'text',
          left: '5%',
          top: '15%',
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
          top: '15%',
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

  getOption_AMC(title, respText, checkitem, waterMark, deviceType) {
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
        fontSize = '70%';
        titleFontSize = { main: '110%', sub: '100%' };
        axisWidth = 2;
        grid = [{
          x: '5%',
          x2: '2%',
          y: '28%',
          height: '61%'
        }];
        legend = [{
          x: '5%',
          x2: '2%',
          y: '20%',
        }];
        waterMarkFontSize = 'bold 15px Microsoft YaHei';
        break;
      case 'tv':
        fontSize = '80%';
        titleFontSize = { main: '140%', sub: '120%' };
        axisWidth = 3;
        grid = [{
          x: '5%',
          x2: '2%',
          y: '24%',
          height: '67%'
        }];
        legend = { width: '71%', left: '26%', top: '1%' };
        waterMarkFontSize = 'bold 20px Microsoft YaHei';
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
            if (obj.seriesType == "line") {
              return '<div style="border-bottom: 1px solid rgba(255,255,255,.3); font-size: 18px;padding-bottom: 7px;margin-bottom: 7px">'
                + value[3] + '：'
                + '</div>'
                + obj.seriesName + '：' + value[1] + '%' + '<br>'
              //+ obj.seriesName+' 不良数量：' + value[4] +'<br>'
            }
            /*                    	if(obj.seriesType=="line"){
                                    return '<div style="border-bottom: 1px solid rgba(255,255,255,.3); font-size: 18px;padding-bottom: 7px;margin-bottom: 7px">'
                                        + value[3] + '：'
                                        + '</div>'
                                        + obj.seriesName+'：' + value[1] +'%'+'<br>'
                                        + obj.seriesName+' 等级数量：' + value[4] +'<br>'
                                  }*/
          }
        }
      },
      legend: {
        data: eval('(' + respText.legenddata + ')'),
        type: 'scroll',
        left: '45%',
        top: '2.5%',
        //图例排布
        width: '71%',
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
            interval: 0,
            //margin:'15',
          }
        }
      ],
      yAxis: [
        {
          type: 'value',
          gridIndex: 0,
          name: '        /ppbv',
          scale: true,
          min: function (value) {
            var range = value.max - value.min;
            var rangeplus = range / 5;

            // 最大值和最小值相同时，坐标轴最小值为value最小值减2
            if (rangeplus == 0) {
              rangeplus = 1;
            }

            var a = Math.floor(value.min - rangeplus);
            var spec;
            switch (checkitem) {
              case 'HCL':
                spec = 1;
                break;
              case 'HF':
                spec = 1;
                break;
              case 'NH3':
                spec = 10;
                break;
              case 'NO':
                //x = 0;
                break;
              case 'NO2':
                spec = 20;
                break;
              case 'TS':
                spec = 20;
                break;
            }
            if (a > spec) {
              return spec;
            } else if (a >= 0) {
              return a;
            } else {
              return 0;
            }
          },
          max: function (value) {
            var range = value.max - value.min;
            var rangeplus = range / 5;

            // 最大值和最小值相同时，坐标轴最大值为value最大值加2
            if (rangeplus == 0) {
              rangeplus = 1;
            }

            let a = Math.ceil(value.max + rangeplus);
            var spec;
            switch (checkitem) {
              case 'HCL':
                spec = 1;
                break;
              case 'HF':
                spec = 1;
                break;
              case 'NH3':
                spec = 10;
                break;
              case 'NO':
                //x = 0;
                break;
              case 'NO2':
                spec = 20;
                break;
              case 'TS':
                spec = 20;
                break;
            }
            if (a < spec) {
              return spec;
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
            formatter: '{value}',
            color: 'rgb(66,66,66)',
            fontSize: fontSize,
            //margin:'15',
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
            show: true
          },
          //interval:20,
          //max:100
        },
      ],
      grid: grid,
      series: eval('(' + respText.series + ')'),

      //水印增加
      graphic: [
        {
          type: 'text',
          left: '20%',
          top: '10%',
          z: 0,
          cursor: 'default',
          rotation: Math.PI * 0.125,
          style: {
            fill: 'rgb(188,188,188)',
            text: waterMark,
            font: waterMarkFontSize
          }
        }],
    };

    return option;
  }

  getOption_DppmLrr(title, respText, waterMark, deviceType) {
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
      {
        text: '过货量:',
        left: '1.5%',
        align: 'left',
        bottom: '1.5%',
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
                + value[3] + '：'
                + '</div>'
                + obj.seriesName + '：' + value[1] + '<br>'
              //+ obj.seriesName+' 不良数量：' + value[4] +'<br>'
            }
            if (obj.seriesType == "line") {
              return '<div style="border-bottom: 1px solid rgba(255,255,255,.3); font-size: 18px;padding-bottom: 7px;margin-bottom: 7px">'
                + value[3] + '：'
                + '</div>'
                + obj.seriesName + '：' + value[1] + '%' + '<br>'
              //+ obj.seriesName+' 等级数量：' + value[4] +'<br>'
            }
          }
          /*else{
            return '<div style="border-bottom: 1px solid rgba(255,255,255,.3); font-size: 18px;padding-bottom: 7px;margin-bottom: 7px">'
              + '过货量：' + value[2] + '<br>'
          }*/
        }
      },
      //		    toolbox: {
      //		        feature: {
      //		            dataView: {show: true, readOnly: false},
      //		        },
      //		        bottom:'0%',
      //		        right:'0%', 
      //		    },
      legend: {
        data: eval('(' + respText.legenddata + ')'),
        type: 'scroll',
        left: legend.left,
        top: legend.top,
        //图例排布
        width: legend.width,
        /*                selected: {  
                            'LRR': false,  
                        }*/
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
          name: 'TOP5 DPPM',
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
          name: 'LRR',
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
      grid: grid,
      series: eval('(' + respText.series + ')'),
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

  getOption_WipMove(title, respText, waterMark, deviceType) {
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
        legend = { width: '71%', left: '46%', top: '3%' };
        waterMarkFontSize = 'bold 20px Microsoft YaHei';
        symbolSize = 6;
        break;
      case 'tv':
        fontSize = '110%';
        titleFontSize = { main: '200%', sub: '120%' };
        axisWidth = 4;
        grid = { x: '7%', x2: '7%', y: '14%', y2: '22%' };
        legend = { width: '71%', left: '36%', top: '2%' };
        waterMarkFontSize = 'bold 30px Microsoft YaHei';
        symbolSize = 10;
        break;
    }

    const option = {
      title: [{
        text: title,
        subtext: '     ' + respText.today + '    WIP总量：' + respText.wiptotal + '    库房WIP总量：' + respText.warehouseWIP,
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
      ],
      tooltip: {
        trigger: 'item',
        formatter: '{a} : {c}'
      },

      legend: {
        data: ['WIP', "MOVEMENT"],
        left: legend.left,
        top: legend.top,
        //图例排布
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
            margin: '15',
            color: 'rgb(0,0,0)',
          },
          //坐标轴颜色调整为灰色，宽度调宽
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
        handleSize: 20,//滑动条的 左右2个滑动条的大小
        height: 8,//组件高度
        left: 30, //左边的距离
        right: 40,//右边的距离
        bottom: 30,//右边的距离
        handleColor: '#ddd',//h滑动图标的颜色
        handleStyle: {
          borderColor: "#cacaca",
          borderWidth: "1",
          shadowBlur: 2,
          background: "#ddd",
          shadowColor: "#ddd",
        },
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
            }
          }
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

  getOption_CumYield(title, respText, waterMark, deviceType) {
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
        grid = [{
          x: '7%',
          x2: '7%',
          y: '12%',
          height: '80%'
        },];
        legend = { width: '71%', left: '46%', top: '3%' };
        waterMarkFontSize = 'bold 20px Microsoft YaHei';
        break;
      case 'tv':
        fontSize = '110%';
        titleFontSize = { main: '200%', sub: '120%' };
        axisWidth = 4;
        grid = [{
          x: '7%',
          x2: '7%',
          y: '12%',
          height: '80%'
        },];
        legend = { width: '71%', left: '36%', top: '2%' };
        waterMarkFontSize = 'bold 30px Microsoft YaHei';
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
              /*+ obj.seriesName+' 等级数量：' + value[4] +'<br>'*/
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
        },
      ],
      yAxis: [
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
      grid: grid,
      series: eval('(' + respText.series + ')'),

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

  getOption_InputOutput(title, respText, waterMark, deviceType) {
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
        symbolSize = 6;
        break;
      case 'tv':
        fontSize = '120%';
        titleFontSize = { main: '200%', sub: '120%' };
        axisWidth = 4;
        grid = { x: '7%', x2: '7%', y: '14%' };
        legend = { width: '71%', left: '26%', top: '1%' };
        waterMarkFontSize = 'bold 20px Microsoft YaHei';
        symbolSize = 10;
        break;
    }

    const option = {
      title: {
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
      },
      tooltip: {
        trigger: 'item',
        formatter: '{a} : {c}'
      },
      //		    toolbox: {
      //		        feature: {
      //		            dataView: {show: true, readOnly: true},
      //		        }
      //		    },
      legend: {
        data: ['DAILY IN', 'DAILY OUT', 'CUM IN', 'CUM OUT'],
        selected: {
          'All': false,
        },
        left: legend.width,
        top: legend.top,
        //图例排布
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
            //formatter:function(value){
            //    var i = value/1000;
            //    return i+'K';}
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
          name: 'CUM',
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
            //formatter:function(value){
            //    var i = value/1000;
            //    return i+'K';}
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
          splitLine:
          {
            show: false
          },
        }
      ],
      grid: grid,
      series: [
        {
          name: 'DAILY IN',
          type: 'bar',
          stack: '1',
          data: eval('(' + respText.data_dailyIn + ')'),
        },
        {
          name: 'DAILY OUT',
          type: 'bar',
          stack: '2',
          data: eval('(' + respText.data_dailyOut + ')'),
        },
        {
          name: 'CUM IN',
          type: 'line',
          yAxisIndex: 1,
          data: eval('(' + respText.data_cumIn + ')'),
          symbol: 'circle',
          symbolSize: symbolSize,

        },
        {
          name: 'CUM OUT',
          type: 'line',
          yAxisIndex: 1,
          data: eval('(' + respText.data_cumOut + ')'),
          symbol: 'circle',
          symbolSize: symbolSize,

        },
      ],
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

  getOption_SQEyield(title, respText, waterMark, deviceType) {
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
        left: '1.5%',
        align: 'left',
        bottom: '1.5%',
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
      grid: grid,
      series: eval('(' + respText.series + ')'),

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
        symbolSize = 6;
        break;
      case 'tv':
        fontSize = '120%';
        titleFontSize = { main: '200%', sub: '120%' };
        axisWidth = 4;
        grid = { x: '7%', x2: '7%', y: '14%' };
        legend = { width: '71%', left: '26%', top: '1%' };
        waterMarkFontSize = 'bold 20px Microsoft YaHei';
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
        top: '5%',
        textStyle:
        {
          fontFamily: '微软雅黑',
          fontSize: titleFontSize.sub,
          color: 'rgb(0,0,0)',
        },
      }],
      tooltip: {
        trigger: 'item',
        formatter: '{a} : {c}'
      },
      //		    toolbox: {
      //		        feature: {
      //		            dataView: {show: true, readOnly: true},
      //		        }
      //		    },
      legend: {
        data: ['DAILY PLAN', 'DAILY ACT', 'CUM PLAN', 'CUM ACT'],
        selected: {
          'All': false,
        },
        left: legend.left,
        top: legend.top,
        //图例排布
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
          splitNumber: axisWidth,
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
    //debugger;
    return option;
  }

}
