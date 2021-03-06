import Vue from 'vue'
import App from './App.vue'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI, { size: 'small' })

import formCreate from '@form-create/element-ui'
Vue.use(formCreate)

// 全部导入组件库
import Awesome from '../../lib/index'
import '../../lib/theme/index.css'
Vue.use(Awesome)

// 按需加载
// import EditTable from '../../lib/edit-table'
// import AwesomeTableList from '../../lib/table-list'
// Vue.use(EditTable)
// Vue.use(AwesomeTableList)

Vue.config.productionTip = false

new Vue({
  render: (h) => h(App),
}).$mount('#app')
