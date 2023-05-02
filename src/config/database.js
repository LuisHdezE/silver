const { Sequelize } = require("sequelize");
require("dotenv").config();

const sequelize = new Sequelize("silver", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = sequelize;
/*
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: "mysql",
  }
);*/
