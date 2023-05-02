const express = require("express");
const router = express.Router();

const categoriasRoutes = require("./categorias.routes");
const conceptosRoutes = require("./conceptos.routes");
const proveedoresRoutes = require("./proveedores.routes");

router.use("/categorias", categoriasRoutes);
router.use("/conceptos", conceptosRoutes);
router.use("/proveedores", proveedoresRoutes);

module.exports = router;
