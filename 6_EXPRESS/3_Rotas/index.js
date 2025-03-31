const express = require('express')
const app = express()
const port = 3000

const path = require('path')

const basePath = path.join(__dirname, 'templates')

const users = require('./users')

// ler o body
app.use(
  express.urlencoded({
    extended: true,
  }),
)

app.use(express.json()) 

app.use(express.static('public'));

var checkAuth = function (req, res, next) {  // checar auntenticação
  req.authStatus = true

  if (req.authStatus) {
    console.log('Está logado, pode continuar')  // se estiver logado, continua
    next()
  } else {
    console.log('Não está logado, faça o login para continuar!') // se nao, volte
  }
}

app.use(checkAuth) // utiliza a função

app.use('/users', users) // utiliza o modulo /users na rota users

app.get('/', (req, res) => {
  res.sendFile(`${basePath}/index.html`)
})

app.use(function(req, res, next){
    res.status(404).sendFile(`${basePath}/404.html`)
})

app.listen(port, () => {
  console.log(`App rodando na porta:${port}`)
})
