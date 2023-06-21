const express = require("express");
const router = express.Router();
const passport = require("passport");
const { Admin } = require("../models");
const authMiddleware = require("../utils/middlewares/authMiddleware");
const {
  createAdmin,
  loginAdmin,
  logoutAdmin,
} = require("../controllers/adminControllers");

// Rutas para administradores
router.post("/create", createAdmin);
router.post("/login", passport.authenticate("local"), loginAdmin);

// Rutas protegidas para administradores
router.get("/admin-page", authMiddleware, (req, res) => {
  res.send("Página de administrador");
});

router.get("/admin-settings", authMiddleware, (req, res) => {
  res.send("Configuración de administrador");
});

// Ruta para verificar la contraseña de un administrador
router.post("/login", authMiddleware, loginAdmin);

//Ruta para desloguear a un administrador
router.get("/logout", authMiddleware, logoutAdmin);
module.exports = router;
