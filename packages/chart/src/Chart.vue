<template>
  <div ref="chartDom"></div>
</template>

<script>
import echarts from 'echarts'
import { debounce } from '../../../assets/js/utils.js'

import { addListener, removeListener } from 'resize-detector'
export default {
  name: 'Chart',
  props: {
    option: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      chart: null,
    }
  },
  watch: {
    option(val) {
      this.chart.setOption(val)
    },
  },
  created() {
    this.resize = debounce(this.resize, 300)
  },
  mounted() {
    this.renderChart()
    // window.addEventListener('resize', this.resize);
    addListener(this.$refs.chartDom, this.resize)
  },
  beforeDestroy() {
    // window.removeEventListener('resize', this.resize);
    removeListener(this.$refs.chartDom, this.resize)
    this.chart.dispose()
    this.chart = null
  },
  methods: {
    resize() {
      console.log('resize')
      this.chart.resize()
    },
    renderChart() {
      // 基于准备好的dom，初始化echarts实例
      this.chart = echarts.init(this.$refs.chartDom)
      this.chart.setOption(this.option)
      // 父组件需要在其mounted后才能调用setOption
      // 父组件也可以在接收到onload事件后调用
      this.$emit('onload', this.chart)
    },
    setOption(val) {
      this.chart.setOption(val)
    },
    getChart() {
      return this.chart
    },
  },
}
</script>
