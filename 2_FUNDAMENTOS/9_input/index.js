const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question("Qual sua linguagem preferida? ", (language) => { 
    const resposta = language.toLowerCase();                         // trabalha com o dado recebido da pergunta
    if(resposta === "python") {
        console.log("Isso nem é linguagem!");
        readline.close();
        return;
    } 
    console.log(`A minha linguagem preferida é: ${resposta}`);
    readline.close();

})

