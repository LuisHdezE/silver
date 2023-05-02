const express = require("express");
const router = express.Router();
const stocksController = require("../controllers/stocksController");

// Rutas
router.get("/", stocksController.get);
router.get("/:codigo", stocksController.getByCod);
router.post("/", stocksController.create);
router.put("/:codigo", stocksController.update);
router.delete("/:codigo", stocksController.dele);

module.exports = router;
