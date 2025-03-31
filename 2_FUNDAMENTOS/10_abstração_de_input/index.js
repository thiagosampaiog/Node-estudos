const inquirer = require('inquirer');

inquirer.prompt([{  /* fazer cada pergunta (objeto) dentro da array que contem name e message */

    name: 'p1', 
    message: 'Qual a primeira nota?'

}, {

    name: 'p2', 
    message: 'Qual a segunda nota?'

}]).then((respostas) => { 
   console.log(respostas);
   const media = (((parseFloat(respostas.p1) + parseFloat(respostas.p2)) / 2));
   console.log(`A média é: ${media}`);

}).catch((err) => console.log(err));  



