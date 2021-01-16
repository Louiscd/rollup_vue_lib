<template>
  <div id="app">
    <section class="handle-area">
      <el-button
        v-for="(item, index) in buttons"
        :key="item.value"
        @click="onShowComponent(item.value, index)"
        :class="{ isActive: activeIndex === index }"
        >{{ item.label }}</el-button
      >
    </section>
    <section class="handle-content">
      <component :is="currentComponent"></component>
    </section>
  </div>
</template>

<script>
const EditTableDemo = () => import('./components/EditTableDemo.vue');
const AwesomeTableListDemo = () => import('./components/AwesomeTableListDemo.vue');
const Chart = () => import('./components/ChartDemo.vue');
const SegmentLayout = () => import('./components/SegmentLayoutDemo.vue');
const StatisticsLayout = () => import('./components/StatisticsLayoutDemo.vue');
const ToolPanelExpandLayout = () => import('./components/ToolPanelExpandLayoutDemo.vue');
const HelloWorld = () => import('./components/HelloWorld.vue');

export default {
  data() {
    return {
      activeIndex: null,
      currentComponent: null,
      buttons: [
        { label: '表格', value: 'EditTableDemo' },
        { label: '列表', value: 'AwesomeTableListDemo' },
        { label: 'Chart图表', value: 'Chart' },
        { label: 'Segment 布局容器', value: 'SegmentLayout' },
        { label: 'Statistics 布局容器', value: 'StatisticsLayout' },
        { label: '列表筛选项 布局容器', value: 'ToolPanelExpandLayout' },
        { label: 'HelloWorld', value: 'HelloWorld' }
      ]
    };
  },
  methods: {
    onShowComponent(componentType, activeIndex) {
      this.activeIndex = activeIndex;
      switch (componentType) {
        case 'EditTableDemo':
          this.currentComponent = EditTableDemo;
          break;
        case 'AwesomeTableListDemo':
          this.currentComponent = AwesomeTableListDemo;
          break;
        case 'Chart':
          this.currentComponent = Chart;
          break;
        case 'SegmentLayout':
          this.currentComponent = SegmentLayout;
          break;
        case 'StatisticsLayout':
          this.currentComponent = StatisticsLayout;
          break;
        case 'ToolPanelExpandLayout':
          this.currentComponent = ToolPanelExpandLayout;
          break;
        case 'HelloWorld':
          this.currentComponent = HelloWorld;
          break;

        default:
          this.currentComponent = HelloWorld;
          break;
      }
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  margin-top: 60px;
}
.handle-area {
  margin-bottom: 20px;
  text-align: center;
}
.handle-content {
  box-sizing: border-box;
  padding: 0 50px;
}
.isActive {
  color: #409eff;
  border-color: #c6e2ff;
  background-color: #ecf5ff;
}
</style>
