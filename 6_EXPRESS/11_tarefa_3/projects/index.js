var express = require('express')  // importa o express
var router = express.Router() // router

const path = require('path') // puxar os paths do templates

const basePath = path.join(__dirname, '../templates') // join no dirname indicando o
//                                                              diretorio atual

router.get('/', (req, res) => {  // / url raiz
  res.sendFile(`${basePath}/projects.html`) // é usado para enviar 
                            // um arquivo HTML como resposta ao cliente na url raiz
})  // Essa rota provavelmente serve como uma página inicial ou uma lista de projetos.

router.get('/:id', (req, res) => {
  res.sendFile(`${basePath}/project.html`) // pode capturar qualquer valor 
                                           // que venha após a barra (/) na URL
})  // por exemplo  uma requisição para /123 ou /abc acionará esta rota

// No entanto, o código atual não utiliza o valor do parâmetro id. 
// Ele simplesmente responde com o arquivo project.html.
//  localizado no mesmo diretório definido por basePath
// Isso sugere que o arquivo project.html é uma página
//  genérica para exibir detalhes de um projeto, 
// mas o código ainda não está configurado para personalizar o
//  conteúdo com base no id.


module.exports = router 
