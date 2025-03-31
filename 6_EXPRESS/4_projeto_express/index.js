
const express = require('express');
const app = express();
const port = 5000;

const path = require('path');

const basePath = path.join(__dirname, 'templates');

const users = require('./users');

app.use(
    express.urlencoded({
      extended: true,
    }),
  )
  
app.use(express.json()) 

app.use(express.static('public'));


app.use('/users', users);                            // utiliza o modulo /users na rota users 

app.get('/', (req, res) => {
  res.sendFile(`${basePath}/index.html`)
})

app.listen(port, () => {
    console.log(`app rodando na porta ${port}`);
})
