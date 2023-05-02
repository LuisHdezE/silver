const Proveedor = require("../Models/Proveedor");

const get = async (req, res) => {
  try {
    const proveedores = await Proveedor.findAll();
    res.json(proveedores);
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error al obtener los proveedores");
  }
};

const getByCod = async (req, res) => {
  const { codigo } = req.params;
  try {
    const proveedor = await Proveedor.findOne({ where: { codigo } });
    if (!proveedor) {
      return res.status(404).send("La proveedor no existe");
    }
    res.json(proveedor);
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error al obtener el proveedor");
  }
};

const create = async (req, res) => {
  const { codigo, nombre } = req.body;
  try {
    let proveedor = await Proveedor.findOne({ where: { codigo } });
    if (proveedor) {
      return res.status(400).send("El proveedor ya existe");
    }
    proveedor = await Proveedor.create({ codigo, nombre });
    res.json(proveedor);
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error al crear el proveedor");
  }
};

const update = async (req, res) => {
  const { codigo } = req.params;
  const { nombre } = req.body;
  try {
    let proveedor = await Proveedor.findOne({ where: { codigo } });
    if (!proveedor) {
      return res.status(404).send("El proveedor no existe");
    }
    proveedor.nombre = nombre;
    await proveedor.save();
    res.json(proveedor);
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error al actualizar el proveedor");
  }
};

const dele = async (req, res) => {
  const { codigo } = req.params;
  try {
    let proveedor = await Proveedor.findOne({ where: { codigo } });
    if (!proveedor) {
      return res.status(404).send("El proveedor no existe");
    }
    await proveedor.destroy();
    res.send("Proveedor eliminado correctamente");
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error al eliminar el proveedor");
  }
};

module.exports = {
  get,
  getByCod,
  create,
  update,
  dele,
};
