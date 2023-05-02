const { DataTypes } = require("sequelize");
const sequelize = require("../config/database.js");

const Stock = sequelize.define(
  "stocks",
  {
    codigo: {
      type: DataTypes.STRING(13),
      allowNull: false,
      primaryKey: true,
    },
    nombre: {
      type: DataTypes.STRING(130),
      allowNull: false,
    },
    categoriaId: {
      type: DataTypes.STRING(2),
      references: {
        model: "categorias",
        key: "codigo",
      },
    },
    costo: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    precio: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    cantidad: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = Stock;
