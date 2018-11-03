const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: true }))

app.post('/usuarios', (req, resp) => {
    console.log(req.body) 
    resp.send('<h1>Parabéns dados incluidos!</h1>')
})

app.post('/usuarios/:id', (req, resp) => {
    console.log(req.params.id)
    console.log(req.body)
    resp.send('<h1>Parabéns dados alterados com sucesso!!!</h1>')
})

/*
app.get('/usuarios', (req, resp) => {
    console.log(req.query) se for do tipo get os dados vem atraves do req.query
    resp.send('<h1>Parabéns dados incluidos!</h1>')
})*/


app.listen(3003)