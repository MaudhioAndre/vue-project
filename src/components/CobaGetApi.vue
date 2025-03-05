<script setup>
import { onMounted, ref } from "vue";

onMounted(() => {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((json) => {
      user.value = json;
    });
});

const user = ref([]);
</script>

<template>
  <h1>Daftar User</h1>
  <h3 v-if="user.length == 0">Tidak Ada User</h3>
  <div v-else>
    <div v-for="data in user">{{ data.name }}</div>
  </div>
</template>
