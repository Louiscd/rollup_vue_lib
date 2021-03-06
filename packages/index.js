import AwesomeTableList from '../packages/table-list/index.js';
import EditTable from '../packages/edit-table/index.js';
import Chart from '../packages/chart/index.js';
import SegmentLayout from '../packages/segment-layout/index.js';
import StatisticsLayout from '../packages/statistics-layout/index.js';
import ToolPanelExpandLayout from '../packages/tool-panel-expand-layout/index.js';

// 存储组件列表
const components = [
  AwesomeTableList,
  EditTable,
  Chart,
  SegmentLayout,
  StatisticsLayout,
  ToolPanelExpandLayout
];

// 定义 install 方法，接收 Vue 作为参数。如果使用 use 注册插件，则所有的组件都将被注册
const install = function (Vue) {
  // 遍历注册全局组件
  components.forEach(component => {
    Vue.component(component.name, component);
  });
};

// 判断是否是直接引入文件
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  // 导出的对象必须具有 install，才能被 Vue.use() 方法安装
  install,
  // 以下是具体的组件列表
  ...components
};
