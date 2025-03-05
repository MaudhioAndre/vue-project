<script setup>

    import { ref } from 'vue';

    import { reactive } from 'vue';

    const {jodoh} = defineProps(['jodoh']);

    var data = {
        nama : 'dhio',
        umur : 18
    };

    function showData(){
        console.log('showData');
        console.log(data.nama);
    }

    const nilai = ref(0);
    const state = reactive({ nilai2 : 0});

    function AddNilai(params) {
        nilai.value++
        
    }

</script>

<template>
    <h2>{{ data.nama }}</h2>
    <h2>{{ jodoh }}</h2>
    <button @click="showData">TEZZZ</button>
    <h1>NILAI : {{ nilai }}</h1>
    <h1>NILAI state : {{ state.nilai2 }}</h1>
    
    <button @click="AddNilai">+ nilai</button>
    <button @click="state.nilai2++">+ nilai2</button>
</template>