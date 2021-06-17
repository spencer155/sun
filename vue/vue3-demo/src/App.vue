<template>
  <!-- <div>{{num}}</div>
  <button @click="myFn">按钮</button> -->
  <form>
    <input type="text" v-model="state2.stu.name">
    <input type="text" v-model="state2.stu.age">
    <input type="submit" @click="addStu">
  </form>
  <ul>
    <li v-for="(item,index) in state.stus" :key="item.name" @click="removeStu(index)">{{item.name}}-{{item.age}}</li>
  </ul>
</template>

<script>
import {ref,reactive} from 'vue'
export default {
  name: 'App',
  setup() {
    // let num = ref(0)
    // function myFn () {
    //   num.value ++ 
    // }
    // return {num,myFn}

    let {state,removeStu} = removeStudents()
    let {state2,addStu} = addStudents(state)
    
    
    return {state,removeStu,addStu,state2}
  }
}
function addStudents(state) {
  let state2 = reactive({
    stu:{
      name:'',
      age:''
    }
  })
  function addStu(e) {
    e.preventDefault()
    const stu = Object.assign({},state2.stu)
    state.stus.push(stu)
    state2.stu.name = ''
    state2.stu.age = ''
    return {state2}
  }
  return {state2,addStu}
}

function removeStudents (){
  let state = reactive({
      stus:[{
        name:'张三',
        age:18
      },{
        name:'张三2',
        age:19
      },{
        name:'张三3',
        age:20
      }]
    })

    function removeStu(index) {
      state.stus = state.stus.filter((item,idx) => idx !== index)
    }

    return {state,removeStu}
}
</script>
