const http = require('http');
const fs = require('fs');
const url = require('url')

const port = 3000;

const server = http.createServer((req, res) => {

    const q = url.parse(req.url, true);
    const fileName = q.pathname.substring(1)  // Remove a barra inicial "/"

    if (fileName.endsWith('.html')) {  // se o nome do arquivo for tem html

        if(fs.existsSync(fileName)) {  //  blocando para verificar o arquivo
            
            fs.readFile(fileName, (err, data) => { 
                res.writeHead(200, { 'Content-Type': 'text/html' })
                res.write(data);
                return res.end();
            }); 
        
        } else {
            fs.readFile('404.html', (err, data) => { 
                res.writeHead(404, { 'Content-Type': 'text/html' })
                res.write(data);
                return res.end();
            }); 
      
        }
   
    }

});

server.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});