const express = require('express');

const app = express();

const webpack = require('webpack');
const WebpackDevMiddleware = require('webpack-dev-middleware');
const webpackOptions = require('./webpack.config');
// compiler 就是一个webpack实例，代表整个编译的任务compiler.run()
const compiler = webpack(webpackOptions);

app.use(WebpackDevMiddleware(compiler, {}));
app.listen(3003);
