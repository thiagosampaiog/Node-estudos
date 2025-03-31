/** sincrona = codigo espera ser totalmente executado para prosseguir 
 *  assincrona = o codigo continua progredindo e em algum ponto no futuro obtem a resposta assincrona */

const fs = require('fs');

console.log("Inicio");

fs.writeFile("./arquivo.txt", "Oi", (err) => {
    setTimeout(() => {
        console.log("Arquivo criado!")
    }, 1000);
});

console.log("Fim") // assincrono, ou seja não esperou a função

