## webpack构建优化方案

随着项目的发展，项目目录会越来越大，各种库也会越来越多，会直接导致Webpack的构建效率极低。本文整理了一些项目优化方法，主要是针对已有的、webpack 4以下的项目。

Webpack 4 支持零配置使用，构建速度有很大提升，推荐使用webpack 4构建新项目。

以下是一些优化webpack的插件或配置方法：



#### html-webpack-plugin-for-multihtml 插件

在前端多页面（多html）开发的时候，使用webpack进行HMR热部署，但每一次修改之后，热部署持续很长的时间，而且页面越多，时间越长，观察可知大部分时间花在 asset optimization 这一步。每次修改都会触发所有页面的重新构建，但其实我们只需要更新修改的页面即可。

解决方案：使用 [html-webpack-plugin-for-multihtml](https://www.npmjs.com/package/html-webpack-plugin-for-multihtml) 代替 [html-webpack-plugin](https://www.npmjs.com/package/html-webpack-plugin)  模块，并且加上 multihtmlCache

>  when a file has been changed, `compiler` will recompile and trigger `plugin('make', cb)`, then `html-webpack-plugin` will create new `childCompiler`, and run `compile` for all html. it is slow.

> **package.json 运行命令加入--profile (放在—config前)，它会告诉你编译过程中哪些步骤耗时最长。**

```js
//npm i html-webpack-plugin-for-multihtml --save-dev
const HtmlWebpackPluginForMultihtml = require('html-webpack-plugin-for-multihtml')
plugins: [
    new HtmlWebpackPluginForMultihtml({
        filename: ``,
        template: ``,
        inject: true,
        chunks: [],
        multihtmlCache: true    // 解决多页热部署的关键
    })
]
```

> 项目页面过多，可能出错 `JavaScript heap out of memory` 错误。原因和解决方法可参考下面链接:
>
> [https://blog.csdn.net/QIANG123___/article/details/79183544](https://blog.csdn.net/QIANG123___/article/details/79183544)
>
> https://blog.csdn.net/u013176571/article/details/76498025

参考链接：

[完美解决webpack多页面热部署缓慢问题](https://blog.csdn.net/dobility/article/details/87781713)





#### commonsChunkPlugin 插件

CommonsChunkPlugin主要是用来提取第三方库和公共模块。将第三方库（例如vue）提取到单独的 `vendor` chunk 文件中，是比较推荐的做法，这是因为，它们很少像本地的源代码那样频繁修改。因此可以单独打包出来，利用客户端的长效缓存机制，可以通过命中缓存来消除请求，并减少向服务器获取资源，同时还能保证客户端代码和服务器端代码版本一致。

```js
//单独分离出第三方库、自定义公共模块、webpack运行文件
plugins: [
    new webpack.optimize.CommonsChunkPlugin({
        name: ['vendor','runtime'],
        filename: '[name].js'
    }),
]

//上面这段代码，等价于下面这段：
plugins: [
    //分离出第三方库、自定义公共模块、webpack运行文件
    new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor',
        filename: '[name].js'
    }),
    ////抽离webpack运行文件
    new webpack.optimize.CommonsChunkPlugin({
        name: 'runtime',
        filename: '[name].js',
        chunks: ['vendor']
    }),
]


//抽离第三方库和自定义公共模块
plugins: [
    new webpack.optimize.CommonsChunkPlugin({
        name: ['vendor','runtime'],
        filename: '[name].js',
        minChunks: Infinity
    }),
    new webpack.optimize.CommonsChunkPlugin({
        name: 'common',
        filename: '[name].js',
        chunks: ['enteryJs_1','enteryJs_2']//enteryJs_1.enteryJs_2.js中抽取commons chunk
    })
]
```

具体配置参数：

> 各种教程中CommonsChunkPlugin提及到chunk有哪几种，主要有以下三种：
>
> entry chunk：webpack当中配置的入口文件（entry）
>
> children chunk：入口文件以及它的依赖文件通过code split（代码分割）出来的
>
> commons chunk：通过CommonsChunkPlugin创建出来的文件

```js
new webpack.optimize.CommonsChunkPlugin({
    name: string, // or
    names: string[],
    // 这是 common chunk 的名称。已经存在的 chunk 可以通过传入一个已存在的 chunk 名称而被选择。
    // 如果一个字符串数组被传入，这相当于插件针对每个 chunk 名被多次调用
    // 如果该选项被忽略，同时 `options.async` 或者 `options.children` 被设置，所有的 chunk 都会被使用，否则 `options.filename` 会用于作为 chunk 名。

    filename: string,
    // common chunk 的文件名模板。可以包含与 `output.filename` 相同的占位符。
    // 如果被忽略，原本的文件名不会被修改(通常是 `output.filename` 或者 `output.chunkFilename`)

    minChunks: number|Infinity|function(module, count) -> boolean,
        // 在传入  公共chunk(commons chunk) 之前所需要包含的最少数量的 chunks 。
        // 数量必须大于等于2，或者少于等于 chunks的数量
        // 传入 `Infinity` 会马上生成 公共chunk，但里面没有模块。
        // 你可以传入一个 `function` ，以添加定制的逻辑（默认是 chunk 的数量）

    chunks: string[],
    // 通过 chunk name 去选择 chunks 的来源。chunk 必须是  公共chunk 的子模块。
    // 如果被忽略，所有的，所有的 入口chunk (entry chunk) 都会被选择。


    children: boolean,
    // 如果设置为 `true`，所有  公共chunk 的子模块都会被选择

    async: boolean|string,
    // 如果设置为 `true`，一个异步的  公共chunk 会作为 `options.name` 的子模块，和 `options.chunks` 的兄弟模块被创建。
    // 它会与 `options.chunks` 并行被加载。可以通过提供想要的字符串，而不是 `true` 来对输出的文件进行更换名称。

    minSize: number,
    // 在 公共chunk 被创建立之前，所有 公共模块 (common module) 的最少大小。
})
```

参考链接：

 [commonsChunkPlugin的配置和用法](https://segmentfault.com/a/1190000012828879)





#### splitChunksPlugin插件

Webpack 4给我们带来了一些改变。包括更快的打包速度，引入了SplitChunksPlugin插件来取代（之前版本里的）CommonsChunksPlugin插件。

```js
module.exports = {
  //...
  optimization: {
    splitChunks: {
      chunks: 'async', //表示从哪些chunks里面抽取代码，除了三个可选字符串值 initial、async、all 之外，还可以通过函数来过滤所需的 chunks；
      minSize: 30000,//表示抽取出来的文件在压缩前的最小大小，默认为 30000；
      maxSize: 0,//表示抽取出来的文件在压缩前的最大大小，默认为 0，表示不限制最大大小；
      minChunks: 1,//表示被引用次数，默认为1；
      maxAsyncRequests: 5,//最大的按需(异步)加载次数，默认为 5；
      maxInitialRequests: 3,//最大的初始化加载次数，默认为 3；
      automaticNameDelimiter: '~',//抽取出来的文件的自动生成名字的分割符，默认为 ~；
      name: true,//抽取出来文件的名字，默认为 true，表示自动生成文件名；
      cacheGroups: {//缓存组。（这才是配置的关键）
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true
        }
      }
    }
  }
};

//optimization.runtimeChunk
//通过optimization.runtimeChunk: true选项，webpack会添加一个只包含运行时(runtime)额外代码块到每一个入口。（译注：这个需要看场景使用，会导致每个入口都加载多一份运行时代码）
```

上面的那么多参数，其实都可以不用管，cacheGroups 才是我们配置的关键。它可以继承/覆盖上面 `splitChunks` 中所有的参数值，除此之外还额外提供了三个配置，分别为：`test`, `priority` 和 `reuseExistingChunk`。

> test: 表示要过滤 modules，默认为所有的 modules，可匹配模块路径或 chunk 名字，当匹配的是 chunk 名字的时候，其里面的所有 modules 都会选中；
>
> priority：表示抽取权重，数字越大表示优先级越高。因为一个 module 可能会满足多个 cacheGroups 的条件，那么抽取到哪个就由权重最高的说了算；
>
> reuseExistingChunk：表示是否使用已有的 chunk，如果为 true 则表示如果当前的 chunk 包含的模块已经被抽取出去了，那么将不会重新生成新的。

参考链接：

[webpack4——SplitChunksPlugin使用指南](https://blog.csdn.net/qq_26733915/article/details/79458533)

[webpack 4 Code Splitting 的 splitChunks 配置探索](https://imweb.io/topic/5b66dd601402769b60847149)





#### **DllPlugin** 、 DllReferencePlugin 和 AutoDllPlugin插件

DllPlugin 和 DllReferencePlugin 提供了以大幅度提高构建时间性能的方式拆分软件包的方法。其中原理是，将特定的第三方NPM包模块提前构建，然后通过页面引入。这不仅能够使得 vendor 文件可以大幅度减小，同时，也极大的提高了构件速度。

只对库文件打包一次。也就是说，只要库文件不变，只需要打包一次，以后再打包业务代码和库文件没关系啦，这样一来真正做到了库文件永远是那个库文件，只要库文件不变，缓存永远有效。

1. dll功能主要通过webpack的DllPlugin实现，可提前缓存指定的第三方库。开发运行阶段，直接引入第三方打包库。生产打包阶段，已经打包过的第三库不会再次打包，而是直接引用，打包速度提升不止一倍多。
2. 在开发阶段，需要在index.html配置静态变量，即提前打包的第三方包路径，通过HtmlWebpackPlugin实现。
3. 在文件中添加hash，用于标记当前打包版本，如果引入第三包没有变化，hash版本号还是和上次一样。这样就能起到缓存的作用。
4. 需要注意在html里引入的静态变量（第三库路径）,需要依靠webpack.dll.conf.js文件中的AssetsPlugin生成本地静态缓存。
5. webpack.dll.conf.js，在build文件中添加

```js
// webpack.dll.config.js
const path = require('path')
const webpack = require('webpack')

const vendors = [	// 需要打包到一起的js文件
    'vue/dist/vue.esm.js',
    'axios',
];
module.exports = {
    entry: {	// 也可以设置多个入口，多个vendor，就可以生成多个bundle
        vendor: vendors
    },
    output: {	// 输出文件的名称和路径
        filename: '[name].bundle.js',
        path: path.join(__dirname, './static/dll'),
        library: '[name]_[chunkhash]',
    },
    plugins: [
        // 这时候打包需要设置环境为production，因为像vue之类在dev环境下会比prod环境多一些信息，在生产环境如果打包的是dev代码，vue也会给出警告
        new webpack.DllPlugin({
            path: path.join(__dirname, './static/dll', '[name]-manifest.json'),
            name: '[name]_[chunkhash]',
            context: __dirname
        }),
        new webpack.optimize.UglifyJsPlugin({
          compress: {
            warnings: false
          }
        })
    ]
}
```

package.json中的scripts执行命令 `"build:dll":webpack --config webpack.dll.config.js`

```js
//webpack.base.config.js 中通过 DLLReferencePlugin 来使用 DllPlugin 生成的 DLL Bundle
plugins: [
	new webpack.DllReferencePlugin({
        context: path.join(__dirname, '..'),
        manifest: require(path.join(__dirname, '../static/dll/vendor-manifest.json'))
    })
]
```

```html
<!--HtmlWebpackPlugin插件中，增加: templateParameters: { dllVendor: './dll/vendor.bundle.js'},html中引入生成的vendor.bundle.js-->
<script src="<%= htmlWebpackPlugin.options.templateParameters.dllVendor %>"></script>
```

> CommonsChunkPlugin和DLLPlugin区别：第一种每次打包，都要把第三方库也运行打包一次，第二种方法每次打包只打包项目文件，我们只要引用第一次打包好的第三方压缩文件就行了

> 如果是单页应用，那只用DllPlugin打包库文件即可，业务代码一个包搞定。如果是多页应用，DllPlugin打包完库文件，开发时可能会用很多公共的业务代码而且可能随时变动，这就要利用CommonsChunkPlugin来做他本该做的事，再把公共业务提取出来，至于缓存，起码在页面间切换时，公共部分还是会被缓存的。

> 建议先用**webpack-bundle-analyzer **查看哪些插件可以打包到dll。



**AutoDllPlugin** 插件自动同时相当于完成了DllReferencePlugin和DllPlugin的工作。

```js
const AutoDllPlugin = require('autodll-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

plugins: [
    new AutoDllPlugin({
        inject: true, // will inject the DLL bundles to html
        context: path.join(__dirname, '..'),
        filename: '[name]_[hash].dll.js',
        path: 'res/js',
        plugins: mode === 'online' ? [  //判断线上环境
            new UglifyJsPlugin({
                uglifyOptions: {
                    compress: {
                        warnings: false
                    }
                },
                sourceMap: false,
                parallel: true
            })
        ] : [],
        entry: {
            vendor: [
                '@babel/polyfill',
                'axios',
                'better-scroll',
                'bxs-ui-vue/*',
                'id-validator',
                'id-validator/src/GB2260',
                'lodash',
                'mint-ui',
                'vee-validate',
                'velocity-animate',
                'vue/dist/vue.esm.js',
                'vue-lazyload',
                'vue-router',
                'vux'
            ]
        }
    })
]
```

> 实测(lizh)：
>
> 线上打包，使用AutoDllPlugin比CommonsChunkPlugin慢。
>
> 已用autoDll打包的插件，应避免局部引用。如：autoDll打包了bxs-ui-vue，页面中用import { DefaultPage } from 'bxs-ui-vue'，build过程中，不能识别DefaultPage是bus-ui-vue的一个组件，会把DefaultPager打包到业务的js文件中。
>
> 开发环境使用AutoDllPlugin，可以加快编译速度
>
> 不能打包：vue-awesome-swiper

参考链接：

[实践 DllPlugin 来优化 webpack 打包速度](https://juejin.im/entry/57a6dee4a633bd00604d0e73)





#### webpack-parallel-uglify-plugin

当webpack有多个JS文件需要输出和压缩时候，原来会使用UglifyJS去一个个压缩并且输出，但是ParallelUglifyPlugin插件则会开启多个子进程，把对多个文件压缩的工作分别给多个子进程去完成，但是每个子进程还是通过UglifyJS去压缩代码。无非就是变成了并行处理该压缩了，并行处理多个子任务，效率会更加的提高。

```js

var ParallelUglifyPlugin = require('webpack-parallel-uglify-plugin');
new ParallelUglifyPlugin({
  cacheDir: '.cache/',
  uglifyJS:{
    output: {
      comments: false
    },
    compress: {
      warnings: false
    }
  }
})
```





#### Happypack

happypack 是 webpack 的一个插件，目的是通过多进程模型，来加速代码构建。

```js
{
	test: /\.vue$/,
	loader: 'vue-loader',
	options: vueLoaderConfig
},
{
	test: /\.js$/,
	loader: 'babel-loader',
	include: [resolve('src'), resolve('test'), resolve('node_modules/webpack-dev-server/client')]
},
```

替换为：

```js
//npm install --save-dev happypack
//引入happypack插件
const HappyPack = require('happypack');
const happyThreadPool = HappyPack.ThreadPool({size: 4});

{
    test: /\.vue$/,
	loader: 'happypack/loader?id=happyvue'
},
{
    test: /\.js$/,
    include: [resolve('src'), resolve('lib'),resolve('test'),resolve('node_modules/webpack-dev-server/client')],
	loader: 'happypack/loader?id=happybabel',
	exclude: /node_modules/
}


plugins: [
    new HappyPack({  // HappyPack插件
        id: 'happybabel',
        loaders: ['babel-loader?cacheDirectory=true'],
        threadPool: happyThreadPool
    }),
    new HappyPack({
        id: 'happyvue',
        //同时开多少线程进行打包，也可以用ThreadPool控制
        threads: 4,
        loaders: [{
            //这是真实的处理loader，具体配置和rules里原本的一致，options也照搬过来就行
            loader:'vue-loader',
            options: vueLoaderConfig
        }]
    })
]
```

> 并发实现后一定就能提升效率吗？
>
> 不一定。
>
> 一个文件有多个依赖文件，才有并发的可能；父文件和它的依赖文件之间不可以并发，因为只有编译完父文件之后，才能知道它的依赖文件列表。
>
> 那么，假设有一个项目代码，从入口文件开始，每一个文件只依赖了一个其他的模块，这样每次编译完一个文件，只能有一个依赖文件可以编译，于是只能编译完这个依赖文件，才能获取下一个依赖并编译。这一个过程里，文件编译只能一个一个顺序执行，没有并发可行性。
>
> 正常情况下，一个文件引入多个依赖，多个依赖之间可以并发；同时每个依赖引入多个子依赖，这些依赖和子依赖之间，只要没有直接的依赖链，都可以并发。比如有如下文件：
>
> 实测(lizh):
>
> 由于HappyPack 对file-loader、url-loader 支持的不友好，所以不建议对该loader使用。
>
> vue-loader，使用happypack，css文件没有生成。原因是使用了vux-loader
>
> 在实际使用中，happypack提升速度有限。

参考链接：

[HappyPack - Webpack 的加速器](http://blog.yunfei.me/blog/happypack_webpack_booster.html)





#### 按需异步加载模块



#### Externals方法

webpack 提供`Externals`的方法，可以通过外部引用的方法，引入第三方库。

```js
//index.html
<script src="https://cdn.bootcss.com/vue/2.6.10/vue.js"></script>

//webpack.config.pro.js
externals: {
	vue: 'Vue'
}
```



#### Resolve方法

resolver帮助webpack 找到需要引入的模块代码，这些代码在包含在个 require/import 语句中。 当打包模块时，webpack使用 [enhanced-resolve](https://github.com/webpack/enhanced-resolve) 来解析文件路径。

```js
resolve: {
	extensions: ['.js', '.jsx', '.less', '.css'],
	modules: [
        path.resolve(dirname, 'node_modules'),
        path.resolve(dirname, 'src')
    ]
}
```



#### 选择一个合适的devtool属性值

项目中，不需要.map文件的，可以将productionSourceMap、cssSourceMap置为false



### 总结：

AutoDllPlugin打包第三插件，构建速度并没有比commonsChunkPlugin快，且AutoDllPlugin打包出来的js，会有兼容性问题，在部分安卓机中报错，还没找到原因。

Happypack对构建速度的优化有限，并没有网上所说提升30%\50%

webpack-parallel-uglify-plugin可以对加快构建非常有效

html-webpack-plugin-for-multihtml对多页面项目，在热部署时，可以极大得减少构建时间。

最近发现，webpack4的项目，页面太多了，热部署也会变慢。正在找对应解决文案。。。