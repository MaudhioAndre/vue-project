<script setup>
    import ChildComp from './ChildComp.vue';

    const nama = 'maudhio andre wijaya';
</script>

<template>
    <ChildComp :nama="nama" :umur="`18`" />
    <button class="btn">PARENT</button>
</template>

<style scoped>
    .btn{
        background-color: teal;
        color: white;
    }
</style>