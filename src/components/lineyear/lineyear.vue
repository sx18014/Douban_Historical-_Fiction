<!-- 层叠柱状图 -->
<style lang="stylus" scoped>
.line
  height 1000px
  background url('../../assets/bg.jpg') no-repeat
  background-size 100% 100%
  .main
    width 100%
    height calc(100% - 100px)
    margin-top 10px
    margin-left 30px
</style>

<template>
<div class="line">
  <v-header :name="name" :legendArr="legendArr" :myChart="myChart"></v-header>
  <v-filter :myChart="myChart" v-if="myChart._dom"></v-filter>
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
      color: this.$store.state.color,
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
    this.myChart = echarts.init(document.querySelector('.line .main'));
    this.myChart.setOption({
      color: ['#EE82EE', '#40E0D0', '#7FFFAA', '#FF4500', '#F08080'],
      title: {
        text: 'Scores VS Time',
        textStyle: {
          color: 'white',
          fontSize: 20
        }
      },
      tooltip: {
        trigger: 'axis'
      },
      legend: {
        show: false
      },
      toolbox: {
        show: false
      },
      calculable: true,
      xAxis: [{
        name: 'Year',
        type: 'category',
        axisLabel: {
          textStyle: {
            color: 'white'
          }
        },
        data: ['1920-1940', '1941-1960', '1961-1980', '1981-2000', '2001-2020'],
        axisPointer: {
          type: 'shadow'
        }
      }],
      yAxis: [{
        axisLine: {
          show: false
        },
        axisTick: {
          show: false
        },
        splitLine: {
          lineStyle: {
            color: ['rgba(230, 230, 230, 0.2)']
          }
        },
        axisLabel: {
          textStyle: {
            color: 'white',
            fontSize: 14
          }
        },
        name: 'Average Score',
        min: 6,
        max: 9,
        interval: 0.5,
        type: 'value'
      }],
      series: [{
        name: 'USA',
        type: 'line',
        data: [7.6, 7.4, 7.6, 7.6, 7.0],
        smooth: true,
        showSymbol: true,
        symbolSize: 12,
        areaStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
              offset: 0,
              color: 'rgba(238,130,238,0.3)'
            },
            {
              offset: 1,
              color: 'rgba(250,180,101,0)'
            }
            ]),
            shadowColor: '#EE82EE',
            shadowBlur: 20
          }
        }
      }, {
        name: 'CN',
        type: 'line',
        data: [7.3, 7.5, 7.1, 7.4, 6.1],
        smooth: true,
        showSymbol: true,
        symbolSize: 12,
        areaStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
              offset: 0,
              color: 'rgba(64,224,208,0.3)'
            },
            {
              offset: 1,
              color: 'rgba(250,180,101,0)'
            }
            ]),
            shadowColor: '#40E0D0',
            shadowBlur: 5
          }
        }
      }, {
        name: 'EN',
        type: 'line',
        data: [7.2, 7.6, 7.5, 7.5, 7.5],
        smooth: true,
        showSymbol: true,
        symbolSize: 12,
        areaStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
              offset: 0,
              color: 'rgba(127,255,170,0.3)'
            },
            {
              offset: 1,
              color: 'rgba(250,180,101,0)'
            }
            ]),
            shadowColor: '#7FFFAA',
            shadowBlur: 1
          }
        }
      }, {
        name: 'RU/USSR',
        type: 'line',
        data: [7.6, 7.7, 8.7, 8.0, 6.9],
        smooth: true,
        showSymbol: true,
        symbolSize: 12,
        areaStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
              offset: 0,
              color: 'rgba(255,69,0,0.3)'
            },
            {
              offset: 1,
              color: 'rgba(250,180,101,0)'
            }
            ]),
            shadowColor: '#FF4500',
            shadowBlur: 10
          }
        }
      }, {
        name: 'FR',
        type: 'line',
        data: [7.7, 7.8, 7.5, 7.7, 7.3],
        smooth: true,
        showSymbol: true,
        symbolSize: 12,
        areaStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
              offset: 0,
              color: 'rgba(240,128,128,0.3)'
            },
            {
              offset: 1,
              color: 'rgba(250,180,101,0)'
            }
            ]),
            shadowColor: '#F08080',
            shadowBlur: 20
          }
        }
      }]
    });
    this._init()
  }
}
</script>