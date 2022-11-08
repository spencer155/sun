import { defineConfig } from "vite"
import importToCDN from 'vite-plugin-cdn-import'
export default defineConfig({
  server: {
    proxy: {
      // key + 描述对象
      // 以后遇到/api开头的请求时，都将其代理到target属性对应的域中去
      "/api": {
        target: 'https://www.360.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/,'') // 是否要重写api路径
      }
    }
  },
  plugins: [
    importToCDN({
      modules: [
        {
          name: 'lodash',
          var: '_',
          path: `https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js`,
        },
      ],
    }),
  ]
})