import axios from 'axios'
import qs from 'qs'
import { Indicator, Toast } from 'mint-ui'
import 'mint-ui/lib/style.css'
import Vue from 'vue'
Vue.prototype.$ajax = axios
axios.defaults.timeout = 10000
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'
axios.defaults.withCredentials = true
axios.interceptors.request.use((config) => {
  // Indicator.open({
  //   text: '加载中...',
  //   spinnerType: 'fading-circle'
  // })
  if (config.method === 'post') {
    config.data = qs.stringify(config.data)
  }
  return config
}, (error) => {
  Indicator.close()
  Toast({
    message: '加载超时',
    position: 'middle',
    duration: 3000
  })
  return Promise.reject(error)
})

axios.interceptors.response.use((res) => {
  // Indicator.close()
  return res
}, (error) => {
  console.log('好多人在访问呀，请重新试试[timeout]')
  Indicator.close()
  if (error) {
    let errortime = null
    clearTimeout(errortime)
    errortime = setTimeout(() => {
      Toast({
        message: error.message,
        position: 'middle',
        duration: 2000
      })
      clearTimeout(errortime)
    }, 0)
  }
  return Promise.reject(error)
})
