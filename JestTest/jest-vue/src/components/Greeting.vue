<template>
  <div>
    {{greeting}}
  </div>
</template>

<script lang="ts">
import { ref } from 'vue';
export default {
  setup() {
    const greeting = ref('greeting')
    return {
      greeting
    }
  }
}
</script>