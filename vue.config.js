const MomentLocalesPlugin = require('moment-locales-webpack-plugin');
const SkeletonWebpackPlugin = require('vue-skeleton-webpack-plugin');

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
      title: process.env.NODE_ENV + ' Demos'
    }
  },

  // 本机启动的koa服务器
  devServer: {
    open: true,
    hot: true,
    hotOnly: true,
    proxy: {
      '^/api/': {
        target: 'http://127.0.0.1:3000',
        pathRewrite: {
          '^/api' : ''
        }
      }
    }
  },

  productionSourceMap: true,
  configureWebpack: {
    devtool: 'source-map',
    // 常用的框架库不打包到最终文件，引用CDN，降低包体积
    externals: {
      vue: "Vue",
      'vue-router': 'VueRouter',
    },
    plugins: [
      // 剥离除 “en” 以外的所有语言环境。
      new MomentLocalesPlugin(),
      // new SkeletonWebpackPlugin({
      //   webpackConfig: {
      //     entry: {
      //       app: resolve('./src/entry-skeleton.js')
      //     }
      //   }
      // })
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
