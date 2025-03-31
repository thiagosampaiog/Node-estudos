var express = require('express');
var router = express.Router();


const path = require('path');
const fs = require('fs');

const basePath = path.join(__dirname, '../templates');

router.get('/add', (req, res) => {
    // Rota para exibir o formulário de usuário
    res.sendFile(`${basePath}/userform.html`);
})


router.post('/save', (req, res) => {
    // Rota para processar os dados enviados pelo formulário
    const { usuario, senha } = req.body;

    console.log(`Usuário: ${usuario}, Senha: ${senha}`);
    res.send('Dados salvos com sucesso!');

})
// Rota para carregar informações de um usuário específico
router.get('/:id', (req, res) => {

    const filePath = `${basePath}/users.html`;

    if (fs.existsSync(filePath)) {
        console.log(`Carregando usuário: ${req.params.id}`);
        res.sendFile(filePath);
    } else {
        res.status(404).send('Página de usuário não encontrada');
    }
})



module.exports = router;