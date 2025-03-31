const minimist = require('minimist');  // pegar argumentos 

const args = minimist(process.argv.slice(2));

console.log(args);

const nome = args['nome'];
const profissao = args['profissao'];

console.log(nome, profissao);

console.log(`O nome dele é ${nome} e ele trabalha como ${profissao}`)