const { Router } = require("express");
const { Vehicle } = require("../models/index");
const { v4: uuidv4 } = require("uuid");
const {
  getVehicles,
  getVehicleById,
  createVehicle,
  updateVehicle,
  deleteVehicle,
} = require("../controllers/vehiculosController");

const router = Router();

router.get("/", getVehicles);

router.get("/:id", getVehicleById);

router.post("/", createVehicle);

router.put("/:id", updateVehicle);

router.delete("/:id", deleteVehicle);

module.exports = router;
