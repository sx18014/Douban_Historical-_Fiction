<!-- 折线图 -->
<style lang="stylus" scoped>
.multipleColumn
  height 1000px
  background url('../../assets/bg.jpg') no-repeat
  background-size 100% 100%
  .main
    width 100%
    height calc(100% - 100px)
    margin-top -15px
</style>


<template>
<div class="multipleColumn">
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
      styleArr: [],
      myChart: {},
      name: '复杂柱状图'
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
    this.myChart = echarts.init(document.querySelector('.multipleColumn .main'))
    this.myChart.setOption({
      title: {
        show: false
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
      color: this.color,
      calculable: true,
      xAxis: [{
        name: '产品',
        type: 'category',
        axisLine: {
          show: false
        },
        axisTick: {
          show: false
        },
        nameTextStyle: {
          color: 'rgba(255, 255, 255, 0.69)'
        },
        axisLabel: {
          textStyle: {
            color: 'white'
          }
        },
        data: ['产品1', '产品n', '产品3', '产品4', '产品5']
      }],
      yAxis: [{
        axisLine: {
          show: false
        },
        nameLocation: 'end',
        nameGap: 20,
        nameRotate: 0,
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
        name: '数量',
        type: 'value',
        nameTextStyle: {
          color: 'rgba(255, 255, 255, 0.69)'
        }
      }],
      series: [{
        name: '标签1',
        stack: 'stack1',
        type: 'bar',
        data: [2.0, 4.9, 5.9, 3, 6],
        barWidth: 16,
        barGap: 0
      }, {
        name: '标签2',
        stack: 'stack2',
        type: 'bar',
        data: [2.6, 5.9, 3.6, 6, 8],
        barWidth: 16,
        barGap: 0
      }, {
        name: '标签3',
        stack: 'stack3',
        type: 'bar',
        data: [2.0, 6.4, 6.0, 4, 5],
        barWidth: 16,
        barGap: 0
      }, {
        name: '标签4',
        stack: 'stack1',
        type: 'bar',
        data: [4.0, 5.9, 3, 3, 6],
        barWidth: 16,
        barGap: 0
      }, {
        name: '标签5',
        stack: 'stack2',
        type: 'bar',
        data: [5.6, 4.9, 6, 5, 5],
        barWidth: 16,
        barGap: 0
      }, {
        name: '标签6',
        stack: 'stack3',
        type: 'bar',
        data: [2.0, 3.4, 8],
        barWidth: 16,
        barGap: 0
      }]
    });
    this._init()
  }
}

</script>
