
const express = require('express')
const router = express.Router()


const app = express()
const porta = 3333

const mulheres = [
    {
        nome: 'kamila martins',
        imagem: 'ijdwjbk',
        minibio: 'estudante de tecnologia e linda de viver'

    },
    {
        nome: 'yana chan',
        imagem: 'hjdhkjhs',
        minibio:'Fundadora da programaria'
    },
    {
        nome:'nina maria',
        imagem: ' jh',
        minibio: 'hacker antiracista'
    }
]

function mostraMulheres(request, response) {
    response.json(mulheres)
}

function mostraPorta() {
    console.log('servidor criado e rodando na porta ', porta)
}

app.use(router.get('/mulheres',mostraMulheres))
app.listen(porta, mostraPorta)  