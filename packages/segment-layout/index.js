// 导入组件，组件必须声明 name
import SegmentLayout from './src/SegmentLayout.vue'

// 为组件提供 install 安装方法，供按需引入
SegmentLayout.install = function (Vue) {
  Vue.component(SegmentLayout.name, SegmentLayout)
}

// 默认导出组件
export default SegmentLayout
