const x = 10;

try {
    x = 2
} catch (err) {
    console.log(`Erro: ${err}`) // utiliza o erro gerado pelo proprio node para mostrar sem parar o codigo
}