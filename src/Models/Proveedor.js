const { DataTypes } = require("sequelize");
const sequelize = require("../config/database.js");

const Proveedor = sequelize.define("proveedores", {
  codigo: {
    type: DataTypes.STRING(5),
    primaryKey: true,
  },
  nombre: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
});

module.exports = Proveedor;
