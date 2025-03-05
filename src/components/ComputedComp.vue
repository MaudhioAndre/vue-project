<script setup>
import { reactive, computed, ref } from 'vue';

const state = reactive({
    name : 'dhio',
    hobi : [
        'Mancing','Main Game'
    ]
});

const CekHobi = computed(() => {
    console.log('CekHobi');
    return state.hobi.length > 0 ? 'Punya Hobi' : 'Tidak ada hobi'
});

// const CekHobi = () => {
//     console.log('CekHobi');
//     return state.hobi.length > 0 ? 'Punya Hobi' : 'Tidak ada hobi'
// };


const nilai = ref(0);
function AddNilai(params) {
    nilai.value++;
}

</script>

<template>
    <h1>Coba Computed</h1>
    <br/>
    <h1>{{CekHobi}}</h1>
    <br/>
    <div>Nilai : {{ nilai }}</div>
    <button @click="AddNilai">Tambah nilai</button>
</template>