<script setup>
defineOptions({
    inheritAttrs : false
});
</script>

<template>
    <label v-bind="$attrs">Child label</label>
    <button v-bind="$attrs">
    ChildFall
    </button>
</template>