<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <div>
    {{name}}
    <button v-for="item in btns" :key="item">{{item}}</button>
  </div>
</template>

<script lang="ts">
import { ref } from '@vue/reactivity';
import { Options, Vue } from 'vue-class-component';

@Options({
  components: {},
  setup() {
    const btns = ref([1,2,3,4])
    const name = ref('111')
    return {
      btns,
      name
    }
  }
})
export default class App extends Vue {}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
