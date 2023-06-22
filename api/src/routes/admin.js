const express = require("express");
const router = express.Router();
const passport = require("passport");
const { Admin } = require("../models");
const isAuthenticated = require("../utils/middlewares/isAuthenticated");
const authenticateAdmin = require("../utils/middlewares/authenticateAdmin");
const {
  createAdmin,
  loginAdmin,
  logoutAdmin,
} = require("../controllers/adminControllers");

// Rutas para administradores
router.post("/create", createAdmin);

// Ruta para login de administrador
router.post("/login", authenticateAdmin, loginAdmin);

// Rutas protegidas para administradores
router.get("/admin-page", isAuthenticated, (req, res) => {
  res.send("Página de administrador");
});

router.get("/admin-settings", isAuthenticated, (req, res) => {
  res.send("Configuración de administrador");
});

// Ruta para desloguear a un administrador
router.get("/logout", isAuthenticated, logoutAdmin);

module.exports = router;
