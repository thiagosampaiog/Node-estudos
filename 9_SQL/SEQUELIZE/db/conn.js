const { Sequelize } = require("sequelize");
const setupAssociations = require("../models/associations");

const sequelize = new Sequelize("nodesequelize", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

// try {
//   sequelize.authenticate()
//   console.log('Conectamos com o Sequelize!')
// } catch (error) {
//   console.error('Não foi possível conectar:', error)
// }

// Configure as associações após carregar os modelos
setupAssociations();

module.exports = sequelize;
