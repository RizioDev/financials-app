const { Admin } = require("../models");
const bcrypt = require("bcrypt");

// Función para crear un nuevo administrador
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

    // Generar un hash de la contraseña
    const hashedPassword = await bcrypt.hash(password, 10);

    // Crear el nuevo administrador con la contraseña encriptada
    const admin = await Admin.create({ username, password: hashedPassword });

    // Almacenar el ID del administrador en la sesión
    req.session.adminId = admin.id;

    console.log(
      "ID del administrador almacenado en la sesión:",
      req.session.adminId
    );

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
    // El administrador ya ha sido autenticado por Passport.js
    const admin = req.user;

    console.log("Datos del administrador autenticado:", admin);

    // Almacenar el ID del administrador en la sesión
    req.session.adminId = admin.id;

    console.log(
      "ID del administrador almacenado en la sesión:",
      req.session.adminId
    );

    console.log("Datos del administrador autenticado:", admin);

    res.status(200).json({ message: "Inicio de sesión exitoso.", admin });
  } catch (error) {
    console.error("Error al verificar la contraseña:", error);
    res
      .status(500)
      .json({ error: "Se produjo un error al verificar la contraseña." });
  }
};

const logoutAdmin = (req, res) => {
  // Eliminar el ID del administrador de la sesión
  delete req.session.adminId;

  req.logout();
  res.redirect("/");
  // Otra lógica adicional después del deslogueo si es necesario
};

module.exports = { createAdmin, loginAdmin, logoutAdmin };
