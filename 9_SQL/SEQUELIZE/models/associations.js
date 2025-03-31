const User = require("./User");
const Address = require("./Address");

function setupAssociations() {
  User.hasMany(Address);
  Address.belongsTo(User);
}

module.exports = setupAssociations;
