// 导入组件，组件必须声明 name
import ToolPanelExpandLayout from './src/ToolPanelExpandLayout.vue'

// 为组件提供 install 安装方法，供按需引入
ToolPanelExpandLayout.install = function (Vue) {
  Vue.component(ToolPanelExpandLayout.name, ToolPanelExpandLayout)
}

// 默认导出组件
export default ToolPanelExpandLayout
