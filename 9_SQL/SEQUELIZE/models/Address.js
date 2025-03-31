const { DataTypes } = require("sequelize");

const db = require("../db/conn");

const Address = db.define("Address", {
  street: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  number: {
    type: DataTypes.STRING,
  },
  city: {
    type: DataTypes.STRING,
  },
});

module.exports = Address;
