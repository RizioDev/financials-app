const express = require("express");
const router = express.Router();
const { Admin } = require("../models");
const { createAdmin, loginAdmin } = require("../controllers/adminControllers");

// Ruta para crear un nuevo administrador
router.post("/create", createAdmin);

// Ruta para verificar la contraseña de un administrador
router.post("/login", loginAdmin);

module.exports = router;
