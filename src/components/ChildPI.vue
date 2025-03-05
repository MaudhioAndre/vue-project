<script setup>
import { inject } from 'vue';


const {nama, UbahNama} = inject('user');
const jodoh = inject('jodoh');
</script>

<template>
    <h1>CHILD</h1>
    <h1>{{ nama }}</h1>
    <button @click="UbahNama('Devka Salsabila Wijaya')">Ubah Nama</button>
    <h1>Jodoh saya : {{ jodoh }}</h1>
</template>