const { DataTypes } = require("sequelize");
const sequelize = require("../config/database.js");

const Categoria = sequelize.define("categorias", {
  codigo: {
    type: DataTypes.STRING(2),
    primaryKey: true,
  },
  nombre: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
});

module.exports = Categoria;
