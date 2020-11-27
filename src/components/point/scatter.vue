<!-- 关系图 -->
<style lang="stylus" scoped>
.scatterChart
  height 650px
  background-size 100% 100%
  color white
  .main
    width 100%
    height calc(100% - 100px)
    margin-top -30px
    margin-left 35px
</style>

<template>
<div class="scatterChart">
  <v-header :name="name"></v-header>
  <v-filter ></v-filter>
  <div class="main"></div>
</div>

</template>

<script>
import echarts from 'echarts'
import header from 'components/header/header'
import filter from 'components/filter/filter'

export default {
  data() {
    return {
      legendArr: [],
      // color: this.$store.state.color,
      myChart: {},
      name: ''
    }
  },
  methods: {
    _init() {
      this.legendArr = this.myChart.getOption().series
      this.legendArr.forEach((data) => {
        data.selected = true;
      })
      this.$root.charts.push(this.myChart)
      window.addEventListener('resize', function() {
        this.myChart.resize()
      }.bind(this))
    }
  },
  components: {
    'v-header': header,
    'v-filter': filter
  },
  mounted() {
    // 基于准备好的dom，初始化echarts实例
    this.myChart = echarts.init(document.querySelector('.scatterChart .main'));
    var dataUSA = [
      [1, 6.6, 2018],
      [1, 6.7, 2018],
      [1, 7.5, 2018],
      [8, 7.7, 2018],
      [9, 7.5, 2018],
      [12, 6.7, 2018],
      [4, 7.2, 2018],
      [2, 6.0, 2018],
      [2, 5.6, 2018],
      [8, 6.3, 2018],
      [3, 7.3, 2018],
      [9, 6.6, 2018],
      [9, 6.7, 2018],
      [9, 6.6, 2018],
      [9, 6.0, 2018],
      [4, 7.2, 2018],
      [9, 8.4, 2017],
      [12, 8.6, 2017],
      [12, 8.2, 2017],
      [11, 8.1, 2017],
      [2, 5.3, 2017],
      [7, 7.8, 2017],
      [3, 7.1, 2017],
      [11, 6.6, 2017],
      [2, 7.5, 2017],
      [5, 6.5, 2017],
      [9, 6.3, 2017],
      [9, 6.6, 2017],
      // [7, 2.8, 2017],
      [4, 6.6, 2017],
      [9, 7.2, 2017],
      [9, 6.7, 2017],
      [9, 6.6, 2017],
      [10, 6.0, 2017],
      [3, 4.6, 2017],
      [4, 6.5, 2017],
      [9, 6.9, 2017]
    ];
    var dataCHINA = [
      [4, 7.9, 2018],
      [5, 8.3, 2018],
      [5, 4.6, 2018],
      [12, 5.2, 2018],
      [8, 6.2, 2018],
      // [8, 3.9, 2018],
      [12, 7.6, 2017],
      [7, 6.9, 2017],
      [5, 6.1, 2017],
      [9, 7.5, 2017],
      [8, 6.4, 2017],
      [8, 8.0, 2017],
      [6, 4.8, 2017],
      [6, 6.4, 2017],
      [12, 5.5, 2017],
      [5, 5.8, 2017]
    ];
    var dataRUA = [
      [12, 7.6, 2018],
      [4, 6.2, 2018],
      [4, 6.6, 2018],
      [12, 7.7, 2017],
      [11, 5.8, 2017],
      [10, 5.6, 2017],
      [6, 6.9, 2017],
      [4, 7.7, 2017]
    ];
    var dataEN = [
      [1, 8.6, 2018],
      [9, 7.4, 2018],
      [4, 7.2, 2018],
      [2, 6.0, 2018],
      [12, 5.9, 2018],
      [3, 8.4, 2018],
      [9, 6.8, 2018],
      [9, 8.4, 2017],
      [12, 8.6, 2017],
      [12, 8.2, 2017],
      [2, 5.3, 2017],
      [3, 7.1, 2017],
      [9, 7.8, 2017],
      [11, 6.6, 2017],
      [1, 7.4, 2017],
      [9, 6.3, 2017],
      [8, 6.2, 2017],
      [2, 7.1, 2017],
      [10, 6.3, 2017],
      [12, 7.7, 2017],
      [12, 9.5, 2017],
      [9, 5.5, 2017]
    ];
    var dataFRAN = [
      [2, 6.8, 2018],
      [1, 6.6, 2018],
      [5, 8.5, 2018],
      [4, 7.2, 2018],
      [9, 7.0, 2018],
      [9, 5.8, 2018],
      [3, 6.6, 2017],
      [1, 6.6, 2017],
      [5, 8.2, 2017],
      [12, 6.1, 2017],
      [1, 7.2, 2017]
    ];
    var itemStyle = {
      opacity: 0.8,
      shadowBlur: 10,
      shadowOffsetX: 0,
      shadowOffsetY: 0,
      shadowColor: 'rgba(0, 0, 0, 0.5)'
    };
    var schema = [
      {name: 'month', index: 0, text: 'Month'},
      {name: 'SCORE', index: 1, text: 'Score'}
    ];
    this.myChart.setOption({
      color: ['#EE82EE', '#40E0D0', '#7FFFAA', '#FF4500', '#F08080'],
      title: {
        text: "Recent Score Distrubution",
        textStyle: {
          color: 'white',
          fontSize: 20
        }
      },
      tooltip: {},
      legend: {
        data: ['USA', 'CN', 'EN', 'RU/USSR', 'FR'],
        textStyle: {
          color: '#fff',
          fontSize: 16
        }},
      grid: {
        left: '3%',
        right: '25%',
        top: '18%',
        bottom: '18%'
      },
      tooltip: {
        padding: 10,
        backgroundColor: '#222',
        borderColor: '#777',
        borderWidth: 1,
        formatter: function (obj) {
          var value = obj.value;
          return '<div style="border-bottom: 1px solid rgba(255,255,255,.3); font-size: 18px;padding-bottom: 7px;margin-bottom: 7px">' +
            obj.seriesName + ' ' + value[2] + '：' +
            value[1] + '</div>'
        }
      },
      xAxis: {
        type: 'value',
        name: 'Month',
        nameGap: 16,
        nameTextStyle: {
          color: '#fff',
          fontSize: 14
        },
        max: 12,
        splitLine: {
          show: false
        },
        axisLine: {
          lineStyle: {
            color: '#eee'
          }
        }
      },
      yAxis: {
        type: 'value',
        name: 'Score',
        nameLocation: 'end',
        nameGap: 20,
        max: 10,
        min: 4,
        nameTextStyle: {
          color: '#fff',
          fontSize: 16
        },
        axisLine: {
          lineStyle: {
            color: '#eee'
          }
        },
        splitLine: {
          show: false
        }
      },
      visualMap: [
        {
          // left: 'right',
          right: '8%',
          top: '10%',
          dimension: 1,
          min: 4,
          max: 10,
          itemWidth: 30,
          itemHeight: 120,
          calculable: true,
          precision: 0.1,
          text: ['Dot Size：Score'],
          textGap: 30,
          textStyle: {
            color: '#fff'
          },
          inRange: {
            symbolSize: [5, 65]
          },
          outOfRange: {
            symbolSize: [5, 65],
            color: ['rgba(123,104,238,0.2)']
          },
          controller: {
            inRange: {
              color: ['rgba(123,104,238,0.8)']
            },
            outOfRange: {
              color: ['#444']
            }
          }
        }
      ],
      series: [
        {
          name: 'USA',
          type: 'scatter',
          itemStyle: itemStyle,
          data: dataUSA
        }, {
          name: 'CN',
          type: 'scatter',
          itemStyle: itemStyle,
          data: dataCHINA
        }, {
          name: 'EN',
          type: 'scatter',
          itemStyle: itemStyle,
          data: dataEN
        }, {
          name: 'RU/USSR',
          type: 'scatter',
          itemStyle: itemStyle,
          data: dataRUA
        }, {
          name: 'FR',
          type: 'scatter',
          itemStyle: itemStyle,
          data: dataFRAN
        }
      ]
    });
    this._init()
  }
}
</script>
