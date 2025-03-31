/* throw = forma de encerrar programa gerando novo erro
   
   tryCatch = forma de envidenciar  algo que deu errado em um bloco de codigo
   e exibir a mensagem de erro
*/

const x = 10.5;

//checar se x = numero

if(!Number.isInteger(x)){
   throw new Error("O valor de x não é inteiro")
}

console.log('continua rodando o codigo...')