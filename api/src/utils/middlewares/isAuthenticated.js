const isAuthenticated = (req, res, next) => {
  // Verificar si el administrador está autenticado utilizando Passport.js
  console.log("isAuthenticated:", req.isAuthenticated());

  if (req.isAuthenticated()) {
    // Si el administrador está autenticado, llamar a next() para pasar al siguiente middleware
    return next();
  }

  // Si el administrador no está autenticado, devolver un mensaje de error o redirigir a una página de inicio de sesión
  res.status(401).json({ error: "Acceso no autorizado" });
  // También puedes redirigir a una página de inicio de sesión de la siguiente manera:
  // res.redirect("/login");
};

module.exports = isAuthenticated;
