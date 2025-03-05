<script setup>
import { ref } from 'vue';

const user = ref([{nama : 'dhio'}, {nama : 'devka'}]);

const murid = ref([{nama : 'dhio', nilai : 80}, {nama : 'devka', nilai : 100}]);


const profile = ref({
    nama : 'dhio',
    alamat : 'bogor',
    email : 'maudhioa@gmail.com'
})

</script>

<template>
    <h1>LIST RENDERING</h1>
    <ol>
        <li v-for="(item, index) in user">{{ item.nama }}</li>
    </ol>
    <br/>
    <hr/>
    <br/>
    <ol>
        <li v-for="data in profile">
            {{ data }}    
        </li>    
    </ol>
    <br/>
    <hr/>
    <br/>
    <ol>
        <li v-for="(data, index) in 10">
            {{ data }} Aku sayang devka   
        </li>    
    </ol>
    <br/>
    <hr/>
    <br/>
    <ol>
        <template v-for="(data, index) in murid">
            <li v-if="data.nilai > 70">
                {{ data.nama }} nilai nya {{ data.nilai }}
            </li>    
        </template>
    </ol>
</template>