// 导入组件，组件必须声明 name
import StatisticsLayout from './src/StatisticsLayout.vue'

// 为组件提供 install 安装方法，供按需引入
StatisticsLayout.install = function (Vue) {
  Vue.component(StatisticsLayout.name, StatisticsLayout)
}

// 默认导出组件
export default StatisticsLayout
