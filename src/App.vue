<script setup>
import { useRouter } from "vue-router";
const router = useRouter();

function ToPage() {
  console.log("ToPage");
  // router.push('/list')
  // router.push({ name: 'list', params: { userId: '123' } })
  router.push({ name: "rute-state", state: { data: { id: 456, product: "Laptop" } } });
}
</script>

<template>
  <nav>
    <ul>
      <li><RouterLink to="/">Home</RouterLink></li>
      <li><RouterLink to="/list">List</RouterLink></li>
      <li><RouterLink to="/form">Form</RouterLink></li>
      <li><RouterLink to="/get-api">Get API</RouterLink></li>
      <li><RouterLink to="/coba-pinia">PINIA</RouterLink></li>
      <li><RouterLink to="/playpool">PlayPool</RouterLink></li>
    </ul>
    <!-- <button @click="ToPage">SPECIAL BUTTON</button> -->
  </nav>
  <br />
  <hr />
  <br />
  <RouterView />
</template>
