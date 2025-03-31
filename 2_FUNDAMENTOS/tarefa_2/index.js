const chalk = require("chalk");
const inquirer = require("inquirer");

inquirer
  .prompt([
    {
      name: "nome",
      message: "Qual seu nome? ",
      validate: (input) =>
        input.trim() !== "" || "O nome não pode estar vazio!",
    },
    {
      name: "idade",
      message: "Qual sua idade? ",
      validate: (input) =>
        !isNaN(input) && Number(input) > 0 ? true : "Digite uma idade válida!",
    },
  ])
  .then((respostas) => {
    console.log(respostas);
    console.log(chalk.bgYellow.black(respostas.nome, respostas.idade));
  })
  .catch((err) => {
    console.log(err);
  });
