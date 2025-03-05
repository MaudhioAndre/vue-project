<script setup>
import { ref } from 'vue';


    const nama = ref("");
</script>

<template>
    <h1>FORM HANDLING</h1>
    <br/>
    <br/>
    <h1>{{ nama }}</h1>
    <input type="text" v-model="nama" />
</template>