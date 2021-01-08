// 导入组件，组件必须声明 name
import AwesomeTableList from './src/AwesomeTableList.vue';

// 为组件提供 install 安装方法，供按需引入
AwesomeTableList.install = function(Vue) {
  Vue.component(AwesomeTableList.name, AwesomeTableList);
};

// 默认导出组件
export default AwesomeTableList;
