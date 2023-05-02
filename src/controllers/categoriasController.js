const Categoria = require("../Models/Categoria");

const get = async (req, res) => {
  try {
    const categorias = await Categoria.findAll();
    res.json(categorias);
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error al obtener las categorías");
  }
};

const getByCod = async (req, res) => {
  const { codigo } = req.params;
  try {
    const categoria = await Categoria.findOne({ where: { codigo } });
    if (!categoria) {
      return res.status(404).send("La categoría no existe");
    }
    res.json(categoria);
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error al obtener la categoría");
  }
};

const create = async (req, res) => {
  const { codigo, nombre } = req.body;
  try {
    let categoria = await Categoria.findOne({ where: { codigo } });
    if (categoria) {
      return res.status(400).send("La categoría ya existe");
    }
    categoria = await Categoria.create({ codigo, nombre });
    res.json(categoria);
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error al crear la categoría");
  }
};

const update = async (req, res) => {
  const { codigo } = req.params;
  const { nombre } = req.body;
  try {
    let categoria = await Categoria.findOne({ where: { codigo } });
    if (!categoria) {
      return res.status(404).send("La categoría no existe");
    }
    categoria.nombre = nombre;
    await categoria.save();
    res.json(categoria);
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error al actualizar la categoría");
  }
};

const dele = async (req, res) => {
  const { codigo } = req.params;
  try {
    let categoria = await Categoria.findOne({ where: { codigo } });
    if (!categoria) {
      return res.status(404).send("La categoría no existe");
    }
    await categoria.destroy();
    res.send("Categoría eliminada correctamente");
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error al eliminar la categoría");
  }
};

module.exports = {
  get,
  getByCod,
  create,
  update,
  dele,
};
