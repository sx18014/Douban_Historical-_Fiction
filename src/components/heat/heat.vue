<!-- 散点图 -->
<template lang="html">
<div class="heat">
  <v-header :name="name" :legendArr="legendArr" :myChart="myChart"></v-header>
  <div class="main"></div>
</div>
</template>

<script>
import axios from 'axios'
import echarts from 'echarts'
import world from 'echarts/map/js/world'
import header from 'components/header/header'

export default {
  created() {
    this._getCityData()
  },
  data() {
    return {
      legendArr: [],
      color: this.$store.state.color,
      myChart: {},
      geoCoordMap: {},
      name: '热力图'
    }
  },
  methods: {
    _init(options) {
      this.myChart = echarts.init(document.querySelector('.heat .main'))
      this.myChart.setOption(options)
      this.legendArr = options.series
      this.legendArr.forEach((data) => {
        data.selected = true;
      })
    },
    _getCityData() {
      axios.get('static/data/worldData.json').then((res) => {
        this.geoCoordMap = res.data
      })
    },
    convertData(data) {
      let res = [];
      for (let i = 0; i < data.length; i++) {
        let geoCoord = this.geoCoordMap[data[i].name];
        if (geoCoord) {
          res.push(geoCoord.concat(data[i].value));
        }
      }
      return res;
    }
  },
  components: {
    'v-header': header
  },
  mounted() {
    axios.get('static/data/point/testData.json').then((res) => {
      let options = {
        title: {
          text: '世界历史电影数量分布图',
          left: 'center',
          textStyle: {
            color: '#fff'
          }
        },
        backgroundColor: '#404a59',
        visualMap: {
          min: 0,
          max: 600,
          splitNumber: 10,
          inRange: {
            color: ['#d94e5d', '#eac736', '#50a3ba'].reverse()
          },
          textStyle: {
            color: '#fff'
          }
        },
        geo: {
          map: 'world',
          label: {
            emphasis: {
              show: false
            }
          },
          roam: true,
          itemStyle: {
            normal: {
              areaColor: '#323c48',
              borderColor: '#111'
            },
            emphasis: {
              areaColor: '#2a333d'
            }
          }
        },
        series: [{
          name: 'AQI',
          type: 'heatmap',
          coordinateSystem: 'geo',
          data: this.convertData(res.data)
        }]
      }
      window.onresize = this.myChart.resize
      this._init(options)
    });
  }
}

</script>

<style lang="stylus" scoped>
.heat
  height 800px
  .main
    height 400px
</style>
