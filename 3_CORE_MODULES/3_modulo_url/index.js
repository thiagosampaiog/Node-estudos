const url = require('url');

const address = 'httsp://www.meusite.com.br/catlog?produtos=cadeira';

const parsedUrl = new url.URL(address);

console.log(parsedUrl.host)
console.log(parsedUrl.pathname)
console.log(parsedUrl.search)
console.log(parsedUrl.searchParams)
console.log(parsedUrl.searchParams.get('produtos'))  // peguei o nome e oq ele indica

