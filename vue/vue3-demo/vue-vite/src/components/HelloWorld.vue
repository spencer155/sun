<template>
  <!-- <div>{{state.count}}</div>
  <button @click="increment">增加</button>
  <div>2倍{{state.double}}</div>
  <div>{{obj.name}}</div>
  <div>{{name}}</div>
  <div>{{state1.num}}</div> -->
  <Child></Child>
  <button @click="changeTheme">改变主题</button>
</template>

<script setup lang="ts">
import Child from './Child.vue'
import { ref,computed, onMounted, reactive, toRefs, watch, watchEffect, provide } from 'vue';
// type DState = {
//   count: number,
//   double: number
// }
// const state:DState = reactive({
//   count: 0,
//   double: computed(() => state.count * 2)
// })

// const obj = reactive({
//   name: 'sun',
//   age: 18
// })
// const {name} = {...toRefs(obj)}
// function increment () {
//   state.count ++ ;
// }
// watch(() => state.count,(newValue,oldValue) => {
//   console.log(newValue,oldValue)
// },{
//   deep:true
// })

// const state1 = reactive({num:1})
// watch(state1, (v,preV) => {
//   console.log(v,preV)
// })
// setTimeout(() => {
//   state1.num ++
// }, 1000);


// const num = ref(0)
// onMounted(() => {
//   console.log('onMounted')
// })
// watchEffect(() => {
//   console.log('watchEffect',num.value)
// })
// setTimeout(() => {
//   num.value ++
// }, 1000);

const themeRef = ref('dark')

// setTimeout(() => {
//   themeRef.value = 'red'
// }, 1000);
provide('test', themeRef)
function changeTheme() {
  themeRef.value = 'red'
}
</script>