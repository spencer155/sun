<template>
  <div id="get-todo" class="container">
    <input class="form-control" @change="getTodo" placeholder="I need to..." v-model="v">
    <button class="btn btn-primary" @click="addtodo">Todo</button>
    <button class="btn btn-primary" @click="clearTodo">清空</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      v:''
    }
  },
  created() {},
  methods: {
    getTodo(e) {
      // this.$store.dispatch('getTodo', e.target.value)
      this.$store.dispatch('getTodo', this.v)
    },
    addtodo() {
      this.$store.dispatch('addTodo')
      this.$store.dispatch('clearTodo')
    },
    clearTodo() {
      this.$store.dispatch('clearTodo')
    }
  },
  computed: {
    newTodo() {
      console.log(this.$store.getters.newTodo)
      return this.$store.getters.newTodo
    }
  },
  watch:{
    'newTodo'(v){
      this.v = v
    }
  },
  components: {}
}

</script>
