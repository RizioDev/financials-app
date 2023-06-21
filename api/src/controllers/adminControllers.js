const { Admin } = require("../models");

// Función para crear un nuevo administrador
const createAdmin = async (req, res) => {
  try {
    const { username, password } = req.body;

    // Verificar si ya existe un administrador con el mismo nombre de usuario
    const existingAdmin = await Admin.findOne({ where: { username } });
    if (existingAdmin) {
      return res
        .status(400)
        .json({ error: "El nombre de usuario ya está en uso." });
    }

    // Crear el nuevo administrador
    const admin = await Admin.create({ username, password });

    res
      .status(201)
      .json({ message: "Administrador creado correctamente.", admin });
  } catch (error) {
    console.error("Error al crear el administrador:", error);
    res
      .status(500)
      .json({ error: "Se produjo un error al crear el administrador." });
  }
};

// Función para verificar la contraseña de un administrador
const loginAdmin = async (req, res) => {
  try {
    const { username, password } = req.body;

    // Buscar el administrador por nombre de usuario
    const admin = await Admin.findOne({ where: { username } });
    if (!admin) {
      return res.status(404).json({ error: "El administrador no existe." });
    }

    // Verificar la contraseña
    const isValidPassword = await admin.isValidPassword(password);
    if (!isValidPassword) {
      return res.status(401).json({ error: "Contraseña incorrecta." });
    }

    res.status(200).json({ message: "Inicio de sesión exitoso.", admin });
  } catch (error) {
    console.error("Error al verificar la contraseña:", error);
    res
      .status(500)
      .json({ error: "Se produjo un error al verificar la contraseña." });
  }
};

const logoutAdmin = (req, res) => {
  req.logout();
  res.redirect("/");
  // Otra lógica adicional después del deslogueo si es necesario
};

module.exports = { createAdmin, loginAdmin, logoutAdmin };
