const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const path = require("path");
const url = require("url");
const fs = require("fs");
const morgan = require("morgan");
const routes = require("./routes");

const app = express();

//Middleware
app.use(helmet());
app.use(cors());
app.use(morgan("combined"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

//Routes
app.use("/api", routes);

module.exports = app;
