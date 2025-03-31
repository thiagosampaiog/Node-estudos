//externo

const minimist = require("minimist"); //pegar o process.argv do minimist

//interno

const soma = require("./soma").soma; // pegar do soma.js a função soma

const args = minimist(process.argv.slice(2)); // pegar o 3 item da array process.argv

const a = parseInt(args['a']);

const b = parseInt(args['b']);

soma(a,b);