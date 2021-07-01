const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FileManagerPlugin = require('filemanager-webpack-plugin');
const { DefinePlugin } = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// 不能在node环境下访问

module.exports = {
  mode: 'development', // 命令行和这里同时设置了mode，命令行的优先级高于这里设置
  // mode: process.env.NODE_ENV,
  // 开发环境推荐用eval-source-map
  // devtool: 'source-map', // source-map ：行+列+babel映射
  // 生产
  devtool: 'hidden-source-map',
  entry: {
    main: './src/index.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
    // publicPath:'/'
  },
  // 内部其实启动了express服务器
  devServer: {
    contentBase: path.resolve('public'), // 额外的静态文件内容的目录
    compress: false, // 是否启动压缩gzip
    port: 8080, // 端口号
    open: false, // 启动时时候默认打开浏览器
    proxy: {
      // '/api': 'http://localhost:3000',
      // '/api': {
      //   target: 'http://localhost:3000',
      //   pathRewrite: {
      //     '^/api': '',
      //   },
      // },
    },
    before(app) {
      app.get('/users', (req, res) => {
        res.json({ code: 200, data: [{ id: 1, name: 'sun' }] });
      });
    },
  },
  module: {
    rules: [
      // {
      //   test: /\.js$/,
      //   loader: 'eslint-loader',
      //   enforce: 'pre', // loader分类 pre => normal => inline => post
      //   options: {
      //     fix: true,
      //   },
      //   exclude: /node_modules/,
      // },
      {
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                '@babel/preset-env', '@babel/preset-react',
              ],
              plugins: [
                ['@babel/plugin-proposal-decorators', { legacy: true }],
                ['@babel/plugin-proposal-class-properties', { loose: true }],
              ],
            },
          },
        ],
      },
      {
        test: /\.txt$/,
        use: 'raw-loader',
      },
      {
        test: /\.css$/,
        use: [
          // 'style-loader', // css 转 js 结果一定是js webpack只认识js
          // 生产
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader', // url import 处理
            options: {
              // 在处理引入的别的css文件时，要先把别的css文件经过几个loader的处理结果合并到当前文件中
              // 1就是向下找1个loader
              importLoaders: 1,
            },
          },
          'postcss-loader', // css 预处理器
        ],
      },
      {
        test: /\.less$/,
        use: [
          'style-loader', // css 转 js 结果一定是js webpack只认识js
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader', // url import 处理
            options: {
              importLoaders: 2,
            },
          },
          'postcss-loader',
          'less-loader', // 把less 转成 css 在这一步 已经把import 进行转换css了
        ],
      },
      {
        test: /\.(jpg|png|jpeg)$/,
        use: [
          {
            // loader:'file-loader',
            loader: 'url-loader',
            options: {
              esModule: false,
              name: '[hash:8].[ext]',
              limit: 8 * 1024, // 小于8K就把图片变成base64
              outputPath: 'images',
              publicPath: '/images',
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
    new DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    }),
    new FileManagerPlugin({
      events: {
        onEnd: {
          copy: [
            {
              source: './dist/*.map',
              destination: path.resolve('maps'),
            },
          ],
          delete: ['./dist/*.map'],
        },
      },
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].css',
    }),
  ],
};
