const { DataTypes } = require("sequelize");
const sequelize = require("../config/database.js");

const Concepto = sequelize.define("conceptos", {
  codigo: {
    type: DataTypes.STRING(2),
    primaryKey: true,
  },
  nombre: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  valor: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

module.exports = Concepto;
