<template>
  <div>
      Cica2 {{x.cucc}}
  </div>
</template>

<script>
var es
export default {
    data: () => ({
        x: 1
    }),
    mounted() {
        es = new EventSource('http://localhost:3000/stream');
 
        es.onmessage = event => {
            this.x = JSON.parse(event.data)
        }
    }
}
</script>
