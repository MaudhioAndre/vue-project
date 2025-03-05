<script setup>
import { useRoute } from "vue-router";

const router = useRoute();

const id = router.params.id;
const nama = router.params.nama;
const unik = router.params.unik;
</script>

<template>
  <h1>RUTE PARAMS</h1>
  <h1>PARAMS l {{ $route.params.id }}, {{ $route.params.nama }}, {{ $route.params.unik }}</h1>
  <h1>PARAMS l {{ id }}</h1>
  <h1>Nama l {{ nama }}</h1>
  <h1>unik l {{ unik }}</h1>
</template>
