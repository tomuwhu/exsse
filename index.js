const SSE = require('express-sse');
const express = require('express')
const cors = require('cors')
const app = express()
app.use(cors())
var sse = new SSE()

app.get('/stream', sse.init)

app.get('/',(req,res)=>{
    res.send(`
<script>
var es = new EventSource('/stream');
 
es.onmessage = (event) => {
    console.log(event)
}
</script>
Cica
`)
})
let p=1
setInterval(()=>sse.send({cucc:p++}),2000)

app.get('/most', ()=>sse.send({cucc:1}))

app.listen(3000)