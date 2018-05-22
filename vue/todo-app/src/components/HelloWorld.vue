<template>
  <div class="hello">
    <CompletedTodos></CompletedTodos>
    <GetTodo></GetTodo>
    <CurrentTodos></CurrentTodos>
    
  </div>
</template>
<script>
import GetTodo from '@/components/GetTodo'
import CurrentTodos from '@/components/CurrentTodos'
import CompletedTodos from '@/components/CompletedTodos'
export default {

  name: 'HelloWorld',
  data() {
    return {
      
    }
  },
  components: {
    GetTodo,
    CurrentTodos,
    CompletedTodos
  }
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

</style>
