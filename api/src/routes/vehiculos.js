const { Router } = require("express");
const { Vehicle } = require("../models/index");

const router = Router();

router.get("/", (req, res, next) => {
  // res.send("Soy la ruta vehiculos");
  try {
    throw new Error("Error de prueba");
  } catch (error) {
    next(error);
  }
});

router.post("/", (req, res, next) => {});

router.put("/", (req, res, next) => {});

router.delete("/", (req, res, next) => {});

module.exports = router;
