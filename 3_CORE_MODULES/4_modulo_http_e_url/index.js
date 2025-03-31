const http = require('http');

const port = 3000;

const server = http.createServer((req, res) => {

    const urlInfo = require('url').parse(req.url, true); // cria o objeto com parse da url
    const name = urlInfo.query.name;  // parsedUrl procura pelo nome

    res.statusCode = 200;
    res.setHeader('content-type', 'text/html');


    if(!name){ // se nao tiver nome
        res.end('<h1>preencha seu nome: </h1><form method="GET"><input type="text" name="name" /><input type="submit" value"Enviar" /></form>')
    } else { // se tiver nome
        res.end(`<h1>Seja bem-vindo ${name}!</h1>`)
    }

});

server.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});