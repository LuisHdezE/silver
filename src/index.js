require("dotenv").config();
const { Sequelize } = require("sequelize");

const sequelize = require("./config/database.js");
const Categoria = require("./Models/Categoria");
const Concepto = require("./Models/Concepto");
const Proveedor = require("./Models/Proveedor");
const Stock = require("./Models/Stock");

const app = require("./app");
const PORT = process.env.PORT || 4000;

app.get("/", (req, res) => {
  res.send("Welcome to Silver API ");
});

async function main() {
  try {
    await sequelize.authenticate();
    await sequelize.sync({ force: false });
    console.log("Se estableció la conexion con la base de datos");
    app.listen(PORT);
    console.log(`Server is listening on port ${PORT}`);
  } catch (error) {
    console.log("Error: " + error);
  }
}

main();
