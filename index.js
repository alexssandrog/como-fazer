const express = require('express')
const bodyParser = require('body-parser')

const categorias = require('./routes/categorias')
const publicacoes = require('./routes/publicacoes')

const app = express()

app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({ extended: true }))

const port = process.env.PORT || 3000

app.get('/', async (request, response) => {
    response.render('index', { i: 0 })
})

app.use('/categorias', categorias)
app.use('/publicacoes', publicacoes)

app.listen(port, (err) => {
    if (err) {
        console.log('Error: ', err)
    } else {
        console.log('Servidor rodando na porta', port)
    }
})