<template>
  <div>
    {{ store.msg }}
    <div>{{ store.count }}</div>
    <div>{{ store.phoneFormat }}</div>
    <hr />
    <div>{{ msg }}</div>
    <div>{{ count }}</div>
    <div>{{ phoneFormat }}</div>
  </div>
</template>

<script lang="ts" setup>
import { storeToRefs } from "pinia";
import { mainStore } from "../store";

const store = mainStore();

const { msg, count, phoneFormat } = storeToRefs(store);
</script>
