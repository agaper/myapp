module.exports = {
  lintOnSave: false,

  pages: {
    index: {
      // entry for the page
      entry: 'src/main.js',
      // the source template
      template: 'public/index.html',
      // output as dist/index.html
      filename: 'index.html',
      // when using title option,
      // template title tag needs to be <title><%= htmlWebpackPlugin.options.title %></title>
      title: 'Demos'
    }
  },

  configureWebpack: {
    // 常用的框架库不打包到最终文件，引用CDN，降低包体积
    externals: {
      vue: "Vue",
      'vue-router': 'VueRouter'
    }
  },

  transpileDependencies: [
    'vue-echarts',
    'resize-detector'
  ]

}
