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
    filename: 'main.js'
  },
  module:{
    rules:[
      {
        test:/\.txt$/,
        use:'raw-loader'
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