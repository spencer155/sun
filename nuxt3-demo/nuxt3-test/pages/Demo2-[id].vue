<template>
  <div class="">
    <h1>获取的id:{{ id }}</h1>
  </div>
</template>

<script setup>
import { ref } from "vue";
const route = useRoute();
const id = ref(route.params.id);
</script>

<style scoped></style>