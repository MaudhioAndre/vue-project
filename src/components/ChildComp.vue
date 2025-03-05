<script setup>
const { nama, umur } = defineProps(["nama", "umur"]);
// const {nama, umur} = defineProps({nama : String, umur : String});
</script>

<template>
  <div>Nama = {{ nama }}</div>
  |
  <div>umur = {{ umur }}</div>
  <button class="btn">PARENT</button>
</template>

<style scoped>
.btn {
  background-color: blueviolet;
  color: white;
}
</style>
