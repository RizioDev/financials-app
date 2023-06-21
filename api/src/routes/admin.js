const express = require("express");
const router = express.Router();
const { Admin } = require("../models");
const adminMiddleware = require("../utils/middlewares/isAdmin");
const { createAdmin, loginAdmin } = require("../controllers/adminControllers");

// Ruta para crear un nuevo administrador
router.post("/create", createAdmin);

// Ruta para verificar la contraseña de un administrador
router.post("/login", loginAdmin);

// Ruta protegida solo para administradores
router.get("/admin-page", adminMiddleware, (req, res) => {
  res.send("Página de administrador");
});

module.exports = router;
