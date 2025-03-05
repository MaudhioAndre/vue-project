<script setup>
    const nilai = 100;
</script>

<template>
    <h1 v-if="nilai == 100">Nilai ku 100</h1>
    <h1 v-else-if="nilai > 0" >Nilai ku dibawah 100</h1>
    <h1 v-else>Nilai ku tidak ada</h1>
</template>