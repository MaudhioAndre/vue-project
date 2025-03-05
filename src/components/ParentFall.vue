<script setup>
import ChildFall from './ChildFall.vue';

function ShowLog() {
    console.log('ShowLog');  
}
</script>

<template>
    <ChildFall class="dariParent" style="background-color: teal;" @click="ShowLog" />
</template>