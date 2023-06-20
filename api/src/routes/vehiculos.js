const { Router } = require("express");
const { Vehicle } = require("../models/index");
const { v4: uuidv4 } = require("uuid");

const router = Router();

router.get("/", (req, res, next) => {
  return Vehicle.findAll()
    .then((vehicles) => {
      res.status(200).send(vehicles);
    })
    .catch((err) => {
      next(err);
    });
});

router.get("/:id", (req, res, next) => {
  const { id } = req.params;
  return Vehicle.findByPk(id)
    .then((vehicle) => {
      res.status(200).send(vehicle);
    })
    .catch((err) => {
      next(err);
    });
});

router.post("/", async (req, res, next) => {
  const vehicle = req.body;

  try {
    // Buscar si existe un vehículo con las mismas características
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
      // Si se encuentra un vehículo existente, enviar una respuesta informando al usuario
      return res.status(409).send("Este vehículo ya está registrado.");
    }

    // Si no se encuentra un vehículo existente, crear uno nuevo
    const createdVehicle = await Vehicle.create({ ...vehicle, id: uuidv4() });

    res.status(201).send(createdVehicle);
  } catch (err) {
    next(err);
  }
});

router.put("/:id", async (req, res, next) => {
  const { id } = req.params;
  const updatedVehicle = req.body;

  try {
    // Verificar si se proporciona un ID válido
    if (!id) {
      return res
        .status(400)
        .send("Debe proporcionar un ID válido para actualizar el vehículo.");
    }

    // Verificar si el vehículo existe en la base de datos
    const existingVehicle = await Vehicle.findByPk(id);
    if (!existingVehicle) {
      return res.status(404).send("El vehículo no existe.");
    }

    // Actualizar el vehículo con los nuevos datos
    await Vehicle.update(updatedVehicle, {
      where: { id },
    });

    // Obtener el vehículo actualizado
    const updatedRecord = await Vehicle.findByPk(id);

    // Enviar una respuesta con código 200 y el objeto actualizado en formato JSON
    res.status(200).json("Vehiculo actualizado correctamente.");
  } catch (err) {
    next(err);
  }
});

router.delete("/:id", async (req, res, next) => {
  const { id } = req.params;

  try {
    // Verificar si se proporciona un ID válido
    if (!id) {
      return res
        .status(400)
        .send("Debe proporcionar un ID válido para eliminar el vehículo.");
    }

    // Verificar si el vehículo existe en la base de datos
    const existingVehicle = await Vehicle.findByPk(id);
    if (!existingVehicle) {
      return res.status(404).send("El vehículo no existe.");
    }

    // Actualizar la propiedad de disponibilidad a "vendido"
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
});

module.exports = router;
