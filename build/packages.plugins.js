const path = require('path')
const resolve = require('rollup-plugin-node-resolve')
const commonjs = require('rollup-plugin-commonjs')
const json = require('rollup-plugin-json')
const babel = require('rollup-plugin-babel')
const { terser } = require('rollup-plugin-terser')
const vue = require('rollup-plugin-vue')
const postcss = require('rollup-plugin-postcss')

const isProd = process.env.NODE_ENV == 'production'

// 通用的插件
const basePlugins = [
  resolve(),
  json(),
  vue(),
  babel({ exclude: 'node_modules/**', runtimeHelpers: true }),
  commonjs(),
  postcss(),
]
// 开发环境需要使用的插件
const devPlugins = []
// 生产环境需要使用的插件
const prodPlugins = [
  terser({
    output: {
      ascii_only: true, // 仅输出ascii字符
    },
    compress: {
      pure_funcs: ['console.log'], // 去掉console.log函数
    },
  }),
]
// let plugins = [...basePlugins].concat(isProd ? prodPlugins : devPlugins)
let plugins = [...basePlugins]

export default plugins
