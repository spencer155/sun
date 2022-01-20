<template>
  <h1>{{ theme }}</h1>
</template>

<script lang="ts">
import { defineComponent, inject, watchEffect, Ref } from 'vue';

export default defineComponent({
  name:'child',
  setup() {
    const theme = inject('test','1111')
    watchEffect(() => {
      console.log('主题被修改', (theme as unknown as Ref<string>).value)
    })

    return {
      theme
    }
  }
})

</script>