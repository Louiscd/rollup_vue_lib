import output from './build/output'
import plugins from './build/plugins'
import packagesConfig from './packages/packages.config'

const config = [
  {
    input: 'packages/index.js', // 输入
    output, // 输出
    plugins, // 插件
    external: ['vue', 'echarts', '@form-create/element-ui'], // 外部依赖(不打包)
  },
  ...packagesConfig,
]

export default config
