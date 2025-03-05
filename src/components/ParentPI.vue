<script setup>
import { provide, ref } from 'vue';
import ChildPI from './ChildPI.vue';


const nama = ref("dhio & devka");

function UbahNama(params) {
    nama.value = params;
}

provide('user', {nama, UbahNama});


</script>

<template>
    <h1>PARENT</h1>
    <ChildPI />
</template>