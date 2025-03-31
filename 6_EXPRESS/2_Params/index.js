const express = require('express');
const path = require('path');
const nodemon = require('nodemon');

const app = express();
const port = 3000;

const basePath = path.join(__dirname, 'templates');

app.use(
    express.urlencoded({
        extended: true,
    }),
)

app.use(express.json())


app.post('/users/save', (req, res) => {

    console.log(req.body); // req = recebe

    const usuario = req.body.usuario
    const age = req.body.age

    console.log(`o nome do usuario é ${usuario} e ele tem ${age} anos`)

    res.sendFile(`${basePath}/userform.html`) // res = manda

})

app.get('/users/add', (req, res) => {
    res.sendFile(`${basePath}/userform.html`)
})


app.get('/users/:id', (req, res) => {
    const id = req.params.id;

    console.log(`Estamos buscando pelo usuario: ${id}`);
    
    res.sendFile(`${basePath}/index.html`);
})


app.get('/', (req, res) => {
    res.sendFile(`${basePath}/index.html`);
})

app.listen(port, () => {
    console.log(`App rodando na porta ${port}`)
});

