# vite性能优化概述
我们平时说性能优化是在说什么东西？

- 开发时态的构建速度优化
- 页面性能指标：和我们怎么去些代码有关
  - 首屏渲染时长：fcp(first content paint)
    - 懒加载：需要我们写代码实现
    - http优化：协商缓存 强缓存
      - 强缓存：服务端给响应头追加一些字段（expires），客户端会记住这些字段，在expires（截止失效时间）没有到达之前，无论你怎么刷新页面，浏览器都不会重新请求页面，而是从缓存里取
      - 协商缓存： 是否使用缓存要跟后端商量一下，当服务端给我们打上协商缓存的标记以后，客户端在下次刷新页面需要重新请求资源时会发送一个协商请求给到服务端，服务端如果需要变化，则会响应具体的内容，如果服务端觉得没有变化则会响应304
  - 页面中最大元素的一个时长： lcp(largest content paint)

- js逻辑：
  - 我们要注意副作用的清除 组件会频繁的挂载和卸载：如果我们在某一个组件中有计时器(setTimeout),如果我们在卸载的时候不去清除这个计时器，下次再次挂载的时候计时器等于开了两个线程
  - 我们在写法上一个注意事项：requestAnimationFrame, requestIdleCallback 卡浏览器帧率，对浏览器渲染原理要有一定的认识 然后在这方面做优化
    - requestIdleCallback： 传一个函数进去
    - 浏览器的帧率： 16.6ms去更新一次（执行js逻辑以及重排重绘....），假设我的js执行逻辑超过了16.6ms，就会出现掉帧
    - concurrent mode --> concurrency 可终端渲染 react

  - 防抖 节流， lodash js 工具
    ```js
    const arr = [] // 几千条
    arr.forEach // 不要用arr.forEach lodash.forEach
    ```
  - 对作用域的一个控制
  ```js
  const arr = [1,2,3]
  // for (let i = 0; i < arr.length; i++) {
  for (let i = 0, len = arr.length ; i < len; i++) {

  }
  ``` 

- css 
  - 关注继承属性：能继承的就不要重复写
  - 尽量避免太过于深的css嵌套

- 构建优化：vite(rollup) webpack
  - 优化体积：压缩，treeShaking，图片资源压缩，cdn 加载， 分包