import { defineConfig } from 'vite'
import { createHtmlPlugin } from "vite-plugin-html";
import vue from '@vitejs/plugin-vue'
export default defineConfig({
  optimizeDeps: {
    exclude: []
  },
  plugin: [
    vue(),
    createHtmlPlugin({
      inject: {
        data: {
          title: 'index',
        }
      },
    })
  ]
})