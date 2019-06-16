import { Injectable } from '@angular/core';

@Injectable()
export class EchartOptionService {

  constructor() { }

  getOption_OperatorDefect(title, respText, waterMark, deviceType) {
    let fontSize;
    let axisWidth;
    let grid;
    let titleFontSize;
    let legend;
    let waterMarkFontsize;
    let axisFontSize;
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
        titleFontSize = { main: '180%', sub: '90%', left: '1.5%', bottom: '3.5%' };
        axisWidth = 2;
        grid = [{
          x: '7%',
          x2: '7%',
          y: '18%',
          height: '65%'
        }, {
          x: '7%',
          x2: '7%',
          y2: '4%',
          height: '3%'
        }];
        legend = { width: '64%', left: '30%', top: '2%' };
        waterMarkFontsize = 'bold 20px Microsoft YaHei';
        axisFontSize = 11;
        break;
      case 'tv':
        fontSize = '120%';
        titleFontSize = { main: '200%', sub: '120%', left: '1.5%', bottom: '4.5%' };
        axisWidth = 4;
        grid = [{
          x: '7%',
          x2: '7%',
          y: '13%',
          height: '72%'
        }, {
          x: '7%',
          x2: '7%',
          y2: '4%',
          height: '3%'
        }];
        legend = { width: '65%', left: '28%', top: '2%' };
        waterMarkFontsize = 'bold 30px Microsoft YaHei';
        axisFontSize = 14;
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
          if (obj.seriesName != "过货量") {
            if (obj.seriesType == "bar") {
              return '<div style="border-bottom: 1px solid rgba(255,255,255,.3); font-size: 18px;padding-bottom: 7px;margin-bottom: 7px">'
                + value[4] + '：'
                + '</div>'
                + obj.seriesName + '：' + value[1] + '%' + '<br>'
                + obj.seriesName + ' Defect Qty：' + value[2] + '<br>'
                + 'Out Qty：' + value[3] + '<br>'
            }
            if (obj.seriesType == "line") {
              return '<div style="border-bottom: 1px solid rgba(255,255,255,.3); font-size: 18px;padding-bottom: 7px;margin-bottom: 7px">'
                + value[2] + '：'
                + '</div>'
                + obj.seriesName + '：' + value[1] + '%' + '<br>'
              /*		                        + obj.seriesName+' Defect Qty：' + value[2] +'<br>'
                                          + 'Out Qty：' + value[3] +'<br>'*/
            }
          }
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
            //margin:'15',
            interval: 0,
            rotate: 315,
            fontSize: axisFontSize,
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
        handleSize: 15,//滑动条的 左右2个滑动条的大小
        height: 8,//组件高度
        left: 30, //左边的距离
        right: 40,//右边的距离
        bottom: 4,//右边的距离
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

  getOption_OperatorDefectrenyuanbie(title, respText, waterMark, deviceType) {
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
          y2: '6%',
          height: '54%'
        }, {
          x: '4%',
          x2: '4%',
          y2: '4%',
          height: '0%'
        }];
        legend = { width: '65%', left: '30%', top: '3%' };
        watermarkFont = 'bold 18px Microsoft YaHei';
        axisFontSize = 11;
        break;
      case 'tv':
        fontSize = '100%';
        titleFontSize = { main: '200%', sub: '100%', left: '2%', bottom: '5%' };
        axisWidth = 4;
        grid = [{
          x: '7%',
          x2: '7%',
          y: '21%',
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
        axisFontSize = 14;
        break;
    };

    const option = {
      title: [{
        text: title,
        align: 'left',
        subtext: '                               总过货量：' + respText.totolOut,
        left: '0%',
        top: '1%',
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
      },
  /*            {
                  text:'离散度:',
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
              return '<div style="border-bottom: 1px solid rgba(255,255,255,.3); font-size: 18px;padding-bottom: 7px;margin-bottom: 7px">'
                + value[2] + '：'
                + '</div>'
                + obj.seriesName + " Qty : " + value[1] + '<br>'
                + "Total Qty : " + value[3] + '<br>'
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
            fontSize: axisFontSize,
            interval: 0,
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
            length: 6,
            lineStyle:
            {
              width: axisWidth,
            }
          },
          splitNumber: 4,
          min: 0,
          max: function (value) {
            var range = value.max;
            var rangeplus = range / 5;

            // 最大值和最小值相同时，坐标轴最大值为value最大值加2
            if (rangeplus == 0) {
              rangeplus = 2;
            }

            const a = Math.ceil(value.max + rangeplus * 1.5);
            return a;

          },
        }, {
          type: 'value',
          gridIndex: 0,
          name: 'Yield',
          scale: true,
          min: 0,
          max: 100,
          /*		            min:function(value)
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
                          },*/
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
      dataZoom: [{
        type: 'slider',
        show: true,
        xAxisIndex: [0, 1],
        handleSize: 15,//滑动条的 左右2个滑动条的大小
        height: 8,//组件高度
        left: 30, //左边的距离
        right: 40,//右边的距离
        bottom: 4,//右边的距离
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

  getOption_OperatorDefectrenyuanbieOne(title, respText, waterMark, deviceType) {
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
        titleFontSize = { main: '140%', sub: '90%', left: '0%', bottom: '1.5%' };
        axisWidth = 2;
        grid = [{
          x: '4%',
          x2: '5.5%',
          y: '25%',
          y2: '4%',
          height: '55%'
        }, {
          x: '4%',
          x2: '4%',
          y2: '4%',
          height: '0%'
        }];
        legend = { width: '60%', left: '35%', top: '3%' };
        watermarkFont = 'bold 18px Microsoft YaHei';
        axisFontSize = 11;
        break;
      case 'tv':
        fontSize = '100%';
        titleFontSize = { main: '180%', sub: '100%', left: '2%', bottom: '4%' };
        axisWidth = 4;
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
        axisFontSize = 14;
        break;
    };

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
  /*            {
                  text:'离散度:',
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
              return '<div style="border-bottom: 1px solid rgba(255,255,255,.3); font-size: 18px;padding-bottom: 7px;margin-bottom: 7px">'
                + value[2] + '：'
                + '</div>'
                + obj.seriesName + " Qty : " + value[1] + '<br>'
                + "Total Qty : " + value[3] + '<br>'
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
            fontSize: axisFontSize,
            //margin:'15',
            rotate: 315,
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
          min: 0,
          max: function (value) {
            var range = value.max;
            var rangeplus = range / 5;

            // 最大值和最小值相同时，坐标轴最大值为value最大值加2
            if (rangeplus == 0) {
              rangeplus = 2;
            }

            const a = Math.ceil(value.max + rangeplus);
            return a;

          },
        }, {
          type: 'value',
          gridIndex: 0,
          name: 'Yield',
          scale: true,
          /*		            min:function(value)
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
                          },*/
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
      dataZoom: [{
        type: 'slider',
        show: true,
        xAxisIndex: [0, 1],
        handleSize: 15,//滑动条的 左右2个滑动条的大小
        height: 8,//组件高度
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
