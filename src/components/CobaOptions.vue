<script>

function MakeId(length) {
  let result = "";
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;
}

    export default {
        props: ['jodoh'],
        data() {
            return {
                name : 'dhio'
            }
        },
        methods: {
            showName(){
                console.log(this.name);  
                this.name = MakeId(10);
            }
        },
    }
</script>

<template>
    <h1>{{ name }}</h1>
    <h1>Jodohku : {{ jodoh }}</h1>
    <button @click="showName">CLICKZZZ</button>
</template>