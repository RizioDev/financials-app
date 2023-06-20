const { Vehicle } = require("../models/index");
const { v4: uuidv4 } = require("uuid");

// Obtener todos los vehículos
const getVehicles = (req, res, next) => {
  Vehicle.findAll()
    .then((vehicles) => {
      res.status(200).send(vehicles);
    })
    .catch((err) => {
      next(err);
    });
};

// Obtener un vehículo por su ID
const getVehicleById = (req, res, next) => {
  const { id } = req.params;
  Vehicle.findByPk(id)
    .then((vehicle) => {
      res.status(200).send(vehicle);
    })
    .catch((err) => {
      next(err);
    });
};

// Crear un nuevo vehículo
const createVehicle = async (req, res, next) => {
  const vehicle = req.body;

  try {
    const existe = await Vehicle.findOne({
      where: {
        marca: vehicle.marca,
        modelo: vehicle.modelo,
        año: vehicle.año,
        tipo: vehicle.tipo,
        transmision: vehicle.transmision,
      },
    });

    if (existe) {
      return res.status(409).send("Este vehículo ya está registrado.");
    }

    const createdVehicle = await Vehicle.create({ ...vehicle, id: uuidv4() });

    res.status(201).send(createdVehicle);
  } catch (err) {
    next(err);
  }
};

// Actualizar un vehículo
const updateVehicle = async (req, res, next) => {
  const { id } = req.params;
  const updatedVehicle = req.body;

  try {
    if (!id) {
      return res
        .status(400)
        .send("Debe proporcionar un ID válido para actualizar el vehículo.");
    }

    const existingVehicle = await Vehicle.findByPk(id);
    if (!existingVehicle) {
      return res.status(404).send("El vehículo no existe.");
    }

    await Vehicle.update(updatedVehicle, {
      where: { id },
    });

    const updatedRecord = await Vehicle.findByPk(id);

    res.status(200).json("Vehiculo actualizado correctamente.");
  } catch (err) {
    next(err);
  }
};

// Eliminar un vehículo
const deleteVehicle = async (req, res, next) => {
  const { id } = req.params;

  try {
    if (!id) {
      return res
        .status(400)
        .send("Debe proporcionar un ID válido para eliminar el vehículo.");
    }

    const existingVehicle = await Vehicle.findByPk(id);
    if (!existingVehicle) {
      return res.status(404).send("El vehículo no existe.");
    }

    await Vehicle.update(
      { disponibilidad: "vendido" },
      {
        where: { id },
      }
    );

    res.status(200).send("Vehículo eliminado correctamente.");
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getVehicles,
  getVehicleById,
  createVehicle,
  updateVehicle,
  deleteVehicle,
};
