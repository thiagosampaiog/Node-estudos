const chalk = require('chalk');

const nota = 5;

if(nota >= 7) {
    console.log(chalk.green('Parabens! Voce esta aprovado'));
} else {
    console.log(chalk.bgRed.black.bold('Voce precisa fazer recuperacao!'));
}

