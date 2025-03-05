<script setup>
defineOptions({
  inheritAttrs: false,
});
</script>

<template>
  <button v-bind="$attrs">Child</button>
</template>
