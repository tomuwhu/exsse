const SSE = require('express-sse');
const express = require('express')
const cors = require('cors')
const app = express()
app.use(cors())
var sse = new SSE()
let p = 1
setInterval(()=>sse.send({cucc:p++}),2000)

app.get('/stream', (req,res) => {
    p = 1
    sse.init(req,res) 
})

app.get('/cica/:id', (req,res) => {
    p = Number(req.params.id)
    res.send('Sziámi')
})

app.get('/most', ()=>sse.send({cucc:1}))

app.get('/', (req,res) => {
    res.redirect('http://localhost:8080')
})

app.listen(3000)