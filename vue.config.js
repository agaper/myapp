const MomentLocalesPlugin = require('moment-locales-webpack-plugin');

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
      title: process.env.NODE_ENV + 'Demos'
    }
  },

  configureWebpack: {
    // 常用的框架库不打包到最终文件，引用CDN，降低包体积
    externals: {
      vue: "Vue",
      'vue-router': 'VueRouter',
      // moment: 'moment'
    },
    plugins: [
      // 剥离除 “en” 以外的所有语言环境。
      new MomentLocalesPlugin()
    ]
  },
  chainWebpack: config => {
    if (process.env.use_analyzer) {
      config
         .plugin('webpack-bundle-analyzer')
         .use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin);
    }
  },


  transpileDependencies: [
    'vue-echarts',
    'resize-detector'
  ]

}
