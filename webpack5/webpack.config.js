const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
const { DefinePlugin } = require('webpack')

// 不能在node环境下访问
console.log('config',process.env.NODE_ENV)
module.exports = {
  // mode: 'development', // 命令行和这里同时设置了mode，命令行的优先级高于这里设置
  mode: process.env.NODE_ENV,
  devtool: false,
  entry: {
    main:'./src/index.js'
  },
  output: {
    path: path.resolve(__dirname,'dist'),
    filename: 'main.js',
    // publicPath:'/'
  },
  devServer: {
    contentBase: path.resolve('public'),// 额外的静态文件内容的目录
    compress: false, // 是否启动压缩gzip
    port: 8080, // 端口号
    open: false, // 启动时时候默认打开浏览器
  },
  module:{
    rules:[
      {
        test:/\.js$/,
        use:[
          {
            loader: 'babel-loader',
            options: {
              presets:[
                '@babel/preset-env'                
              ],
              plugins:[
                ['@babel/plugin-proposal-decorators',{legacy:true}],
                ['@babel/plugin-proposal-class-properties',{loose:true}]
              ]
            }
          }
        ]
      },
      {
        test:/\.txt$/,
        use:'raw-loader'
      },
      {
        test:/\.css$/,
        use:[
          'style-loader',// css 转 js 结果一定是js webpack只认识js
          {
            loader:'css-loader', // url import 处理
            options: {
              // 在处理引入的别的css文件时，要先把别的css文件经过几个loader的处理结果合并到当前文件中
              // 1就是向下找1个loader
              importLoaders:1
            }
          },
          'postcss-loader' // css 预处理器
        ]
      },
      {
        test:/\.less$/,
        use:[
          'style-loader',// css 转 js 结果一定是js webpack只认识js
          {
            loader:'css-loader', // url import 处理
            options: {
              importLoaders:2
            }
          },
          'postcss-loader',
          'less-loader' // 把less 转成 css 在这一步 已经把import 进行转换css了
        ]
      },
      {
        test:/\.(jpg|png|jpeg)$/,
        use:[
          {
            // loader:'file-loader',
            loader:'url-loader',
            options: {
              esModule: false,
              name: '[hash:8].[ext]',
              limit: 8*1024 // 小于8K就把图片变成base64
            }
          }
        ]
      }
    ]
  },
  plugins:[
    new htmlWebpackPlugin({
      template:'./src/index.html'
    }),
    new DefinePlugin({
      'process.env.NODE_ENV':JSON.stringify(process.env.NODE_ENV)
    })
  ]
}