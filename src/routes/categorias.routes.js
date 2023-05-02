const express = require("express");
const router = express.Router();
const categoriasController = require("../controllers/categoriasController");

// Ruta para obtener todas las categorías
router.get("/", categoriasController.get);

// Ruta para obtener una categoría por código
router.get("/:codigo", categoriasController.getByCod);

// Ruta para crear una nueva categoría
router.post("/", categoriasController.create);

// Ruta para actualizar una categoría por código
router.put("/:codigo", categoriasController.update);

// Ruta para eliminar una categoría por código
router.delete("/:codigo", categoriasController.dele);

module.exports = router;
