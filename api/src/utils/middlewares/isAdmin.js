const adminMiddleware = (req, res, next) => {
  // Verificar si el usuario es un administrador
  if (req.user && req.user.isAdmin) {
    // Si el usuario es un administrador, llamar a next() para pasar al siguiente middleware
    next();
  } else {
    // Si el usuario no es un administrador, devolver un mensaje de error o redirigir a una página de acceso no autorizado
    res.status(403).json({ error: "Acceso no autorizado" });
    // También puedes redirigir a una página de acceso no autorizado de la siguiente manera:
    // res.redirect("/acceso-no-autorizado");
  }
};

module.exports = adminMiddleware;
