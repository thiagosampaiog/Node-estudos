/** sincrona = codigo espera ser totalmente executado para prosseguir 
 *  assincrona = o codigo continua progredindo e em algum ponto no futuro obtem a resposta assincrona */

const fs = require('fs');

console.log("Inicio");

fs.writeFileSync("./arquivo.txt", "Oi") // blockando codigo ou seja travando

console.log("Fim"); // so vai ser executado apos a criacao do arquivo