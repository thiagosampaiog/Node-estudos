const express = require('express')
const app = express()                  // importar express
const port = 5000 // porta

const projects = require('./projects') // definir rota

app.use(express.static('public')) // css

app.use('/projects', projects) // usar rotas

app.listen(port, () => {
  console.log(`App rodando na porta:${port}`) // ver se esta rodando
})


// INICIO 


// aqui o router nao foi criado, mas ja definido a rota
