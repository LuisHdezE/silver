const Stock = require("../Models/Stock");
const Categoria = require("../Models/Categoria");

exports.get = async (req, res) => {
  try {
    const stocks = await Stock.findAll({ include: Categoria });
    res.status(200).json(stocks);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al obtener stocks" });
  }
};

exports.getByCod = async (req, res) => {
  const codigo = req.params.codigo;
  try {
    const stock = await Stock.findOne({
      where: { codigo },
      include: Categoria,
    });
    if (stock) {
      res.status(200).json(stock);
    } else {
      res.status(404).json({ message: "Stock no encontrado" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al obtener stock" });
  }
};

exports.create = async (req, res) => {
  const { codigo, nombre, categoriaId, costo, precio, cantidad } = req.body;
  try {
    const categoria = await Categoria.findOne({
      where: { codigo: categoriaId },
    });
    if (!categoria) {
      res.status(404).json({ message: "Categoría no encontrada" });
    }
    const stock = await Stock.create({
      codigo,
      nombre,
      categoriaId: categoria.id,
      costo,
      precio,
      cantidad,
    });
    res.status(201).json(stock);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al crear stock" });
  }
};

exports.update = async (req, res) => {
  const codigo = req.params.codigo;
  const { nombre, categoriaId, costo, precio, cantidad } = req.body;
  try {
    const categoria = await Categoria.findOne({
      where: { codigo: categoriaId },
    });
    if (!categoria) {
      res.status(404).json({ message: "Categoría no encontrada" });
    }
    const stock = await Stock.findOne({ where: { codigo } });
    if (!stock) {
      res.status(404).json({ message: "Stock no encontrado" });
    }
    await stock.update({
      nombre,
      categoriaId: categoria.id,
      costo,
      precio,
      cantidad,
    });
    res.status(200).json(stock);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al actualizar stock" });
  }
};

exports.dele = async (req, res) => {
  const codigo = req.params.codigo;
  try {
    const stock = await Stock.findOne({ where: { codigo } });
    if (!stock) {
      res.status(404).json({ message: "Stock no encontrado" });
    }
    await stock.destroy();
    res.status(204).json();
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al eliminar stock" });
  }
};
