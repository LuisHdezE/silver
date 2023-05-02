const express = require("express");
const router = express.Router();
const proveedoresController = require("../controllers/proveedoresController");

// Rutas
router.get("/", proveedoresController.get);
router.get("/:codigo", proveedoresController.getByCod);
router.post("/", proveedoresController.create);
router.put("/:codigo", proveedoresController.update);
router.delete("/:codigo", proveedoresController.dele);

module.exports = router;
