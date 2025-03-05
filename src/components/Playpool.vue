<script setup>
import { useNilaiStore } from "@/store/nilai";
import { ref } from "vue";

const NilaiStore = useNilaiStore();
const jodoh = ref("devka");
</script>

<template>
  <h1>Jodoh : {{ jodoh }}</h1>
  <h1>Nilai : {{ NilaiStore.nilai }}</h1>
  <h1>{{ NilaiStore.infoNilai }}</h1>
  <button @click="NilaiStore.incrementNilai">Add Nilai</button>
</template>
