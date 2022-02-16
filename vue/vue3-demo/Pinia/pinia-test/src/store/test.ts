import { defineStore } from "pinia";


export const testStore = defineStore('test',{
  state:() => {
    return {
      list:['xiao','hong','huang']
    }
  }
})