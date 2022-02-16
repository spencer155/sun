<template>
  <div>
    <button @click="handleClick">修改数据</button>
    <button @click="handleClickPatch">修改数据 + 2</button>
    <button @click="handleClickMethod">修改数据3</button>
    <button @click="store.changeState">修改数据4</button>
    <button @click="handleChangePhone">修改手机号码</button>
    <button @click="getList">获取数据</button>
  </div>
</template>

<script lang="ts" setup>
import {mainStore} from '../store'

const store = mainStore()

const handleClick = () => {
  store.count++
}

const handleClickPatch = () => {
  store.$patch({
    count:store.count + 2
  })
}

const handleClickMethod = () => {
  store.$patch((state) => {
    state.count ++
    state.msg = state.msg === 'hello world' ? 'sun' : 'hello world'
  })
}

const handleChangePhone = () => {
  store.phone = '18888713692'
}
const getList = () => {
  store.getList()
}
</script>
