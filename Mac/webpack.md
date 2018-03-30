## webpack打包查看项目文件情况

首先下载插件

```
npm intall webpack-bundle-analyzer --save-dev
```

然后在webpack.config.js配置

```
var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
plugins:[
	new BundleAnalyzerPlugin()
]
```

最后在build的时候添加 `--report`就好了

```
npm run build --report
```