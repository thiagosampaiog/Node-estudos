var express = require('express')
var router = express.Router()

const path = require('path')

const basePath = path.join(__dirname, '../templates') // utilizar

router.get('/add', (req, res) => {
  res.sendFile(`${basePath}/userform.html`)  //envia informações
})

router.post('/save', (req, res) => {  // armazena
  console.log(req.body) // exibir no terminal
  const name = req.body.name // extraido de userform.html
  const age = req.body.age

  console.log(name) // exibir no terminal
  console.log(age)
})

// antes do /
router.get('/:id', (req, res) => {
  console.log(`Carregando usuário: ${req.params.id}`) 

  res.sendFile(`${basePath}/users.html`) // enviar para  url users
})

module.exports = router // exportar arquivo
