<!-- 关系图 -->
<style lang="stylus" scoped>
.relationChart
  height 650px
  background-size 100% 100%
  color white
  .main
    width 100%
    height calc(100% - 100px)
    margin-top -30px
</style>

<template>
<div class="relationChart">
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
    this.myChart = echarts.init(document.querySelector('.relationChart .main'));
    this.myChart.setOption({
      title: {
        text: "Historical Fictions relate to?",
        top: "top",
        left: "center",
        textStyle: {
          color: 'white',
          fontSize: 20
        }
      },
      tooltip: {},
      legend: [{
        formatter: function(name) {
          return echarts.format.truncateText(name, 40, '14px Microsoft Yahei', '…');
        },
        selectedMode: 'false',
        bottom: 20,
        data: ['Drama', 'War', 'Biography', 'Romantic', 'Action', 'Comedy', 'Thriller', 'Criminal', 'Family', 'Fantasy', 'Mystery', 'Music']
      }],
      animationDuration: 300,
      animationEasingUpdate: 'quinticInOut',
      series: [{
        type: 'graph',
        layout: 'force',
        roam: true,
        draggable: true,
        label: {
          normal: {
            show: true,
            position: 'inside',
            textStyle: { // 标签的字体样式
              fontStyle: 'normal', // 文字字体的风格 'normal'标准 'italic'斜体 'oblique' 倾斜
              fontSize: 20 // 字体大小
            }
          }
        },
        force: {
          repulsion: 300
        },
        lineStyle: {
          normal: {
            width: 2,
            color: '#DA70D6'
          }
        },
        data: [{
          "name": "Historical",
          "symbolSize": 100,
          "color": '#29c0fb',
          "draggable": "true",
          "value": 4315,
          itemStyle: { normal: { color: '#DA70D6', "shadowBlur": 80, "shadowColor": '#DA70D6' } }
        }, {
          "name": "Drama",
          "value": 3019,
          "symbolSize": 70,
          "draggable": "true",
          itemStyle: { normal: { color: '#00BFFF', "shadowBlur": 80, "shadowColor": '#00BFFF' } }
        }, {
          "name": "War",
          "symbolSize": 50,
          "draggable": "true",
          "value": 1090,
          itemStyle: { normal: { color: '#FF4500', "shadowBlur": 80, "shadowColor": '#FF4500' } }
        }, {
          "name": "Biography",
          "symbolSize": 40,
          "draggable": "true",
          "value": 747,
          itemStyle: { normal: { color: '#4169E1', "shadowBlur": 80, "shadowColor": '#4169E1' } }
        }, {
          "name": "Romantic",
          "symbolSize": 30,
          "draggable": "true",
          "value": 516,
          itemStyle: { normal: { color: '#FF69B4', "shadowBlur": 80, "shadowColor": '#FF69B4' } }
        }, {
          "name": "Action",
          "symbolSize": 27,
          "draggable": "true",
          "value": 458,
          itemStyle: { normal: { color: '#FF8C00' } }
        }, {
          "name": "Comedy",
          "symbolSize": 18,
          "draggable": "true",
          "value": 219,
          itemStyle: { normal: { color: '#F08080' } }
        }, {
          "name": "Thriller",
          "symbolSize": 15,
          "draggable": "true",
          "value": 143,
          itemStyle: { normal: { color: '#7FFF00', "shadowBlur": 80, "shadowColor": '#7FFF00' } }
        }, {
          "name": "Criminal",
          "symbolSize": 18,
          "draggable": "true",
          "value": 135,
          itemStyle: { normal: { color: '#DC143C' } }
        }, {
          "name": "Family",
          "symbolSize": 18,
          "draggable": "true",
          "value": 90,
          itemStyle: { normal: { color: '#F4A460' } }
        }, {
          "name": "Fantasy",
          "symbolSize": 15,
          "draggable": "true",
          "value": 66,
          itemStyle: { normal: { color: '#EE82EE' } }
        }, {
          "name": "Mystery",
          "symbolSize": 10,
          "draggable": "true",
          "value": 62,
          itemStyle: { normal: { color: '#00FFFF' } }
        }, {
          "name": "Music",
          "symbolSize": 10,
          "draggable": "true",
          "value": 57,
          itemStyle: { normal: { color: '#FFB6C1' } }
        }],
        links: [{
          "source": "Historical",
          "target": "Drama"
        }, {
          "source": "Historical",
          "target": "War"
        }, {
          "source": "Historical",
          "target": "Biography"
        }, {
          "source": "Historical",
          "target": "Romantic"
        }, {
          "source": "Historical",
          "target": "Action"
        }, {
          "source": "Historical",
          "target": "Comedy"
        }, {
          "source": "Historical",
          "target": "Thriller"
        }, {
          "source": "Historical",
          "target": "Criminal"
        }, {
          "source": "Historical",
          "target": "Family"
        }, {
          "source": "Historical",
          "target": "Fantasy"
        }, {
          "source": "Historical",
          "target": "Mystery"
        }, {
          "source": "Historical",
          "target": "Music"
        }],
        focusNodeAdjacency: true
      }]
    });
    this._init()
  }
}
</script>
