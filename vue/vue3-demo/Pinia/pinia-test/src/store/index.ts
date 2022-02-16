// 1.定义状态容器和数据
// 2.修改容器中的state
// 3.仓库中action的使用

import { defineStore } from "pinia";
import {testStore} from './test'
export const mainStore = defineStore('main', {
  state:() => {
    return {
      msg:'hello world',
      count:0,
      phone:'18888713695'
    }
  },
  getters:{
    phoneFormat(state) {
      // 会缓存
      console.log('调用了')
      return state.phone.toString().replace(/^(\d{3})\d{4}(\d{4})$/,'$1****$2')
    }
  },
  actions:{
    changeState() {
      this.count++
      this.msg = 'sun'
    },
    getList() {
      console.log(testStore().list)
    }
  }
})