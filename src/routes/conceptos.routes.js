const express = require("express");
const router = express.Router();
const conceptosController = require("../controllers/conceptosController");

// Rutas
router.get("/", conceptosController.get);
router.get("/:codigo", conceptosController.getByCod);
router.post("/", conceptosController.create);
router.put("/:codigo", conceptosController.update);
router.delete("/:codigo", conceptosController.dele);

module.exports = router;
