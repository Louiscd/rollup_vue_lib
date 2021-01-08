module.exports = {
  presets: ['@vue/cli-plugin-babel/preset'],

  plugins: [
    [
      'import',
      {
        libraryName: 'lib-ui', // 组件库名称
        libraryDirectory: 'lib', // 组件所在目录
      },
    ],
  ],
};
