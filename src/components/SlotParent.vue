<script setup>
// import SlotChildren from './SlotChildren.vue';
import SlotChildren2 from "./SlotChildren2.vue";

// const title = 'ini TITLE'
</script>

<template>
  <!-- PARENT -->
  <!-- <SlotChildren>
        INI DARI PARENT
        <h1>emang ea</h1>
    </SlotChildren> -->

  <SlotChildren2>
    <template #header="{ title }">
      <h1>{{ title }}</h1>
    </template>

    <template #main="{ nama, umur }">
      <h1>MAIN : {{ nama }} {{ umur }}</h1>
    </template>

    <template #default>
      <h1>INI BASIC</h1>
    </template>

    <!-- <template #footer>
            <h1>INI FOOTER</h1>
        </template> -->
  </SlotChildren2>
</template>
