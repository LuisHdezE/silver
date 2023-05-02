const Concepto = require("../Models/Concepto");

const get = async (req, res) => {
  try {
    const conceptos = await Concepto.findAll();
    res.json(conceptos);
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error al obtener los conceptos");
  }
};

const getByCod = async (req, res) => {
  const { codigo } = req.params;
  try {
    const concepto = await Concepto.findOne({ where: { codigo } });
    if (!concepto) {
      return res.status(404).send("La concepto no existe");
    }
    res.json(concepto);
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error al obtener el concepto");
  }
};

const create = async (req, res) => {
  const { codigo, nombre } = req.body;
  try {
    let concepto = await Concepto.findOne({ where: { codigo } });
    if (concepto) {
      return res.status(400).send("El concepto ya existe");
    }
    proveedor = await Concepto.create({ codigo, nombre });
    res.json(concepto);
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error al crear el concepto");
  }
};

const update = async (req, res) => {
  const { codigo } = req.params;
  const { nombre } = req.body;
  try {
    let concepto = await Concepto.findOne({ where: { codigo } });
    if (!concepto) {
      return res.status(404).send("El concepto no existe");
    }
    concepto.nombre = nombre;
    await concepto.save();
    res.json(concepto);
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error al actualizar el concepto");
  }
};

const dele = async (req, res) => {
  const { codigo } = req.params;
  try {
    let concepto = await Concepto.findOne({ where: { codigo } });
    if (!concepto) {
      return res.status(404).send("El concepto no existe");
    }
    await concepto.destroy();
    res.send("Concepto eliminado correctamente");
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error al eliminar el concepto");
  }
};

module.exports = {
  get,
  getByCod,
  create,
  update,
  dele,
};
