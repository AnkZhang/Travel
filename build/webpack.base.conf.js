'use strict'
const path = require('path')
const utils = require('./utils')
const config = require('../config')
const vueLoaderConfig = require('./vue-loader.conf')

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

const createLintingRule = () => ({
  test: /\.(js|vue)$/,
  loader: 'eslint-loader',
  enforce: 'pre',
  include: [resolve('src'), resolve('test')],
  options: {
    formatter: require('eslint-friendly-formatter'),
    emitWarning: !config.dev.showEslintErrorsInOverlay
  }
})

module.exports = {
  context: path.resolve(__dirname, '../'),
  // 运行npm run dev的时候就从main.js这个入口文件开始执行
  entry: {
    app: './src/main.js'
  },

  //输出文件，打包到哪里，配置来源于config文件夹配置
  output: {
  //config>index.js下的build中的assetsRoot,即dist文件夹
    path: config.build.assetsRoot,
  //导出文件的文件名
    filename: '[name].js',
  //生产模式或开发模式下的html，js等文件内部引用的公共路径(config>index.js下的build或dev)  
    publicPath: process.env.NODE_ENV === 'production'
      ? config.build.assetsPublicPath
      : config.dev.assetsPublicPath
  },

  //文件解析
  resolve: {
  //自动解析确定的扩展名，使导入模块时不带扩展名(import a from a.vue，后缀名省略)  
    extensions: ['.js', '.vue', '.json'],
    alias: {
  // 创建import 或 require的别名   
      'vue$': 'vue/dist/vue.esm.js',
  //简化引用路径   
      '@': resolve('src'),
      'styles': resolve('src/assets/styles'),
      'common': resolve('src/common')
    }
  },

  //项目中不同类型的模块处理规则
  module: {
    rules: [
      ...(config.dev.useEslint ? [createLintingRule()] : []),
      {
        test: /\.vue$/,//vue 文件后缀
        loader: 'vue-loader',//使用vue-loader进行处理
        options: vueLoaderConfig //对vue-loader做的额外选项配置
      },
      {
        test: /\.js$/,//js文件后缀
        loader: 'babel-loader',// 使用babel-loader进行处理
        // 必须处理包含src test的文件夹
        include: [resolve('src'), resolve('test'), resolve('node_modules/webpack-dev-server/client')]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,//图片后缀
        loader: 'url-loader',//使用url-loader处理
        options: {
          limit: 10000,//小于10kb的以base64进行引用
          // 文件名为name ,7位hash值，扩展名
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('media/[name].[hash:7].[ext]')
        }
      },
      // 字体文件
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      }
    ]
  },
  node: {
    // prevent webpack from injecting useless setImmediate polyfill because Vue
    // source contains it (although only uses it if it's native).
    setImmediate: false,
    // prevent webpack from injecting mocks to Node native modules
    // that does not make sense for the client
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty'
  }
}
