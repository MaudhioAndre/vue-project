<script setup>
import { useCounterStore } from "@/store/counter";

// import { useCounterStore } from "@/stores/counter";
// useCounterStore

const counter = useCounterStore();

// counter.count++;
// // with autocompletion ✨
// counter.$patch({ count: counter.count + 1 });
// // or using an action instead
// counter.increment();

console.log(counter.doubleCount);
console.log(counter.nilai);

</script>

<template>
  <!-- Access the state directly from the store -->
  <div>Current Count: {{ counter.count }}</div>
  <div>Counter nilai : {{ counter.nilai }}</div>
  <div>Counter nama : {{ counter.nama }}</div>
  <div>Getter double : {{ counter.doubleCount }}</div>
  <div>{{ counter.infoSaya }}</div>
  
  <div v-if="counter.nilai > 80">Nilai saya bagus</div>
  <div v-else>Nilai saya Jelek</div>

  <button @click="counter.increment()">counter increment</button>
  <button @click="counter.AddlNilai(10)">counter AddNilai</button>

  <hr />
  <div v-for="data in counter.nilai">{{data}} eaaa</div>
</template>
