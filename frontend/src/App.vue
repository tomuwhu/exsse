<template>
  <div>
      {{y}}<br>
      {{x.cucc}}
      <hr>
      <input v-model="i1" @keyup.enter="f()">
      <hr>
      <button @click="pp()"> + </button>
  </div>
</template>

<script>
var es
export default {
    data: () => ({
        x: 1,
        y: 'Inicializálva 1-el.',
        i1: ''
    }),
    mounted() {
        es = new EventSource('http://localhost:3000/stream');
 
        es.onmessage = event => {
            this.x = JSON.parse(event.data)
        }
    },
    methods: {
        f() {
            this.axios
                .get('http://localhost:3000/cica/'+this.i1)
                .then( res => 
                    this.y = 'Beállítva:' + res.data
                )
            this.i1=''
        },
        pp() {
            this.axios
                .get('http://localhost:3000/most/')
                .then( res => 
                    this.y = 'Növelve ' + res.data +'-re.'
                )
        }
    }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
