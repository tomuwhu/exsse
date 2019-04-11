<template>
  <div>
      Cica2 {{x.cucc}}
      <hr>
      <input v-model="i1" @keyup.enter="f()">
  </div>
</template>

<script>
var es
export default {
    data: () => ({
        x: 1,
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
                    this.x = 'Beállítva:' + res.data
                )
            this.i1=''
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
