const meuModulo = require('./meu_modulo') // ./ = interno
const soma = meuModulo.soma; // passar como se fosse uma propriedade para uma variavel

soma(5,10);

meuModulo.soma(10,10); // ou não