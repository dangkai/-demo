// url:upload to server's url; param:scope's variables in front need to be array
//<avicit-fileupload
//	url = 'http://10.216.77.219:8090/avicit-platform6-main/mobile/upload.do'
//	param = 'data'>
//</avicit-fileupload>
app.directive('circleDir', function(){
  return{
    restrict:'AE',
    template: function (elem, attr) {
      var temp ='<canvas   id=\"canvas\" style=\"width:100%;height:100% ;background:red\"></canvas>';
      return temp;
    },
    link:function(scope, ele, attr){

    }
  };
});
app.directive("hightChar",function(){
  return {
    restrict: 'AE',
    link: function (scope, ele, attr){
    option = {
      title : {
        text: '飞机故障统计图',
        x:'center'
      },
      tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
      },
      legend: {
        orient: 'vertical',
        left: 'left',
        data: ['y-12','j-20','z-09','z-11','j-11']
      },
      series : [
        {
          name: '机型',
          type: 'pie',
          radius : '55%',
          center: ['50%', '60%'],
          data:[
            {value:335, name:'y-12'},
            {value:310, name:'j-20'},
            {value:234, name:'z-09'},
            {value:135, name:'z-11'},
            {value:1548, name:'j-11'}
          ],
          itemStyle: {
            emphasis: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.9)'
            }
          }
        }
      ]
    };
      var myChart = echarts.init(ele[0]);
      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);


    }
  }
});

app.directive("hightCharInfo",function(){
  return {
    restrict: 'AE',
    link: function (scope, ele, attr){

      var chart = Highcharts.chart(ele[0],{
        title: {
          text: '对数折线图'
        },
        xAxis: {
          type: 'logarithmic',
          tickInterval: 1
        },
        yAxis: {
          type: 'logarithmic',
          minorTickInterval: 0.1
        },
        tooltip: {
          headerFormat: '<b>{series.name}</b><br />',
          pointFormat: 'x = {point.x}, y = {point.y}'
        },
        series: [{
          data: [1, 2, 4, 8, 16, 32, 64, 128, 256, 512],
          pointStart: 1
        }]
      });
    }
  }
});

app.directive("hightCharTest",function(){
  return {
    restrict: 'AE',
    link: function (scope, ele, attr){
      // 创建渐变色
      Highcharts.getOptions().colors = Highcharts.map(Highcharts.getOptions().colors, function (color) {
        return {
          radialGradient: { cx: 0.5, cy: 0.3, r: 0.7 },
          stops: [
            [0, color],
            [1, Highcharts.Color(color).brighten(-0.3).get('rgb')] // darken
          ]
        };
      });
// 构建图表
      var chart = Highcharts.chart(ele[0],{
        title: {
          text: '某网站各浏览器'
        },
        tooltip: {
          // pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
          pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
              enabled: true,
              format: '<b>{point.name}</b>: {point.percentage:.1f} %',
              style: {
                color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
              },
              connectorColor: 'silver'
            }
          }
        },
        series: [{
          type: 'pie',
          name: '浏览器占比',
          data: [
            ['Firefox',   45.0],
            ['IE',       26.8],
            {
              name: 'Chrome',
              y: 12.8,
              sliced: true,
              selected: true
            },
            ['Safari',    8.5],
            ['Opera',     6.2],
            ['其他',   0.7]
          ]
        }]
      });
      // var chart = Highcharts.chart(ele[0],{
      //   chart: {
      //     type: 'column'
      //   },
      //   title: {
      //     text: '月平均降雨量'
      //   },
      //   subtitle: {
      //     text: '数据来源: WorldClimate.com'
      //   },
      //   xAxis: {
      //     categories: [
      //       '一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月'
      //     ],
      //     crosshair: true
      //   },
      //   yAxis: {
      //     min: 0,
      //     title: {
      //       text: '降雨量 (mm)'
      //     }
      //   },
      //   tooltip: {
      //     // head + 每个 point + footer 拼接成完整的 table
      //     headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
      //     pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
      //       '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
      //     footerFormat: '</table>',
      //     shared: true,
      //     useHTML: true
      //   },
      //   plotOptions: {
      //     column: {
      //       borderWidth: 0
      //     }
      //   },
      //   series: [{
      //     name: '东京',
      //     data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
      //   }, {
      //     name: '纽约',
      //     data: [83.6, 78.8, 98.5, 93.4, 106.0, 84.5, 105.0, 104.3, 91.2, 83.5, 106.6, 92.3]
      //   }, {
      //     name: '伦敦',
      //     data: [48.9, 38.8, 39.3, 41.4, 47.0, 48.3, 59.0, 59.6, 52.4, 65.2, 59.3, 51.2]
      //   }, {
      //     name: '柏林',
      //     data: [42.4, 33.2, 34.5, 39.7, 52.6, 75.5, 57.4, 60.4, 47.6, 39.1, 46.8, 51.1]
      //   }]
      // });
      // var chart = Highcharts.chart(ele[0], {
      //   chart: {
      //     type: 'column',
      //     options3d: {
      //       enabled: true,
      //       alpha: 15,
      //       beta: 15,
      //       viewDistance: 25,
      //       depth: 40
      //     },
      //     marginTop: 80,
      //     marginRight: 40
      //   },
      //   title: {
      //     text: '以性别划分的水果消费总量'
      //   },
      //   xAxis: {
      //     categories: ['苹果', '橘子', '梨', '葡萄', '香蕉']
      //   },
      //   yAxis: {
      //     allowDecimals: false,
      //     min: 0,
      //     title: {
      //       text: '水果数量'
      //     }
      //   },
      //   tooltip: {
      //     headerFormat: '<b>{point.key}</b><br>',
      //     pointFormat: '<span style="color:{series.color}">\u25CF</span> {series.name}: {point.y} / {point.stackTotal}'
      //   },
      //   plotOptions: {
      //     column: {
      //       stacking: 'normal',
      //       depth: 40
      //     }
      //   },
      //   series: [{
      //     name: '小张',
      //     data: [5, 3, 4, 7, 2],
      //     stack: 'male'
      //   }, {
      //     name: '小王',
      //     data: [3, 4, 4, 2, 5],
      //     stack: 'male'
      //   }, {
      //     name: '小彭',
      //     data: [2, 5, 6, 2, 1],
      //     stack: 'female'
      //   }, {
      //     name: '小潘',
      //     data: [3, 0, 4, 4, 3],
      //     stack: 'female'
      //   }]
      // });
    }
  }
});



app.directive("lightGallery",function(){
  return {
    restrict: 'AE',
    link: function (scope, ele, attr){
      $(document).ready(function(){
        $('#lightgallery').lightGallery();
      });
    }
  }
});
app.directive('testInfo',function(){
	return{
		restrict:'AE',
		link:function(scope, ele, attr){
			var colors = Highcharts.getOptions().colors,
		categories = [
				"Chrome",
				"Firefox",
				"Internet Explorer",
				"Safari",
				"Edge",
				"Opera",
				"Other"
		],
		data = [
				{
						"y": 62.74,
						"color": colors[2],
						"drilldown": {
								"name": "Chrome",
								"categories": [
										"Chrome v65.0",
										"Chrome v64.0",
										"Chrome v63.0",
										"Chrome v62.0",
										"Chrome v61.0",
										"Chrome v60.0",
										"Chrome v59.0",
										"Chrome v58.0",
										"Chrome v57.0",
										"Chrome v56.0",
										"Chrome v55.0",
										"Chrome v54.0",
										"Chrome v51.0",
										"Chrome v49.0",
										"Chrome v48.0",
										"Chrome v47.0",
										"Chrome v43.0",
										"Chrome v29.0"
								],
								"data": [
										0.1,
										1.3,
										53.02,
										1.4,
										0.88,
										0.56,
										0.45,
										0.49,
										0.32,
										0.29,
										0.79,
										0.18,
										0.13,
										2.16,
										0.13,
										0.11,
										0.17,
										0.26
								]
						}
				},
				{
						"y": 10.57,
						"color": colors[1],
						"drilldown": {
								"name": "Firefox",
								"categories": [
										"Firefox v58.0",
										"Firefox v57.0",
										"Firefox v56.0",
										"Firefox v55.0",
										"Firefox v54.0",
										"Firefox v52.0",
										"Firefox v51.0",
										"Firefox v50.0",
										"Firefox v48.0",
										"Firefox v47.0"
								],
								"data": [
										1.02,
										7.36,
										0.35,
										0.11,
										0.1,
										0.95,
										0.15,
										0.1,
										0.31,
										0.12
								]
						}
				},
				{
						"y": 7.23,
						"color": colors[0],
						"drilldown": {
								"name": "Internet Explorer",
								"categories": [
										"Internet Explorer v11.0",
										"Internet Explorer v10.0",
										"Internet Explorer v9.0",
										"Internet Explorer v8.0"
								],
								"data": [
										6.2,
										0.29,
										0.27,
										0.47
								]
						}
				},
				{
						"y": 5.58,
						"color": colors[3],
						"drilldown": {
								"name": "Safari",
								"categories": [
										"Safari v11.0",
										"Safari v10.1",
										"Safari v10.0",
										"Safari v9.1",
										"Safari v9.0",
										"Safari v5.1"
								],
								"data": [
										3.39,
										0.96,
										0.36,
										0.54,
										0.13,
										0.2
								]
						}
				},
				{
						"y": 4.02,
						"color": colors[5],
						"drilldown": {
								"name": "Edge",
								"categories": [
										"Edge v16",
										"Edge v15",
										"Edge v14",
										"Edge v13"
								],
								"data": [
										2.6,
										0.92,
										0.4,
										0.1
								]
						}
				},
				{
						"y": 1.92,
						"color": colors[4],
						"drilldown": {
								"name": "Opera",
								"categories": [
										"Opera v50.0",
										"Opera v49.0",
										"Opera v12.1"
								],
								"data": [
										0.96,
										0.82,
										0.14
								]
						}
				},
				{
						"y": 7.62,
						"color": colors[6],
						"drilldown": {
								"name": 'Other',
								"categories": [
										'Other'
								],
								"data": [
										7.62
								]
						}
				}
		],
		browserData = [],
		versionsData = [],
		i,
		j,
		dataLen = data.length,
		drillDataLen,
		brightness;
// Build the data arrays
for (i = 0; i < dataLen; i += 1) {
		// add browser data
		browserData.push({
				name: categories[i],
				y: data[i].y,
				color: data[i].color
		});
		// add version data
		drillDataLen = data[i].drilldown.data.length;
		for (j = 0; j < drillDataLen; j += 1) {
				brightness = 0.2 - (j / drillDataLen) / 5;
				versionsData.push({
						name: data[i].drilldown.categories[j],
						y: data[i].drilldown.data[j],
						color: Highcharts.Color(data[i].color).brighten(brightness).get()
				});
		}
}
// Create the chart
Highcharts.chart(ele[0], {
		chart: {
				type: 'pie'
		},
		title: {
				text: '2018年1月浏览器市场份额'
		},
		subtitle: {
				text: '数据来源：<a href="http://statcounter.com" target="_blank">statcounter.com</a>'
		},
		yAxis: {
				title: {
						text: 'Total percent market share'
				}
		},
		plotOptions: {
				pie: {
						shadow: false,
						center: ['50%', '50%']
				}
		},
		tooltip: {
				valueSuffix: '%'
		},
		series: [{
				name: 'Browsers',
				data: browserData,
				size: '60%',
				dataLabels: {
						formatter: function () {
								return this.y > 5 ? this.point.name : null;
						},
						color: '#ffffff',
						distance: -30
				}
		}, {
				name: 'Versions',
				data: versionsData,
				size: '80%',
				innerSize: '60%',
				dataLabels: {
						formatter: function () {
								// display only if larger than 1
								return this.y > 1 ? '<b>' + this.point.name + ':</b> ' +
										this.y + '%' : null;
						}
				},
				id: 'versions'
		}],
		responsive: {
				rules: [{
						condition: {
								maxWidth: 400
						},
						chartOptions: {
								series: [{
										id: 'versions',
										dataLabels: {
												enabled: false
										}
								}]
						}
				}]
		}
});
		},
		
	}
});