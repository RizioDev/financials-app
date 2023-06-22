const passport = require("passport");

// Middleware para autenticar al administrador

const authenticateAdmin = (req, res, next) => {
  passport.authenticate("local", (err, admin, info) => {
    if (err) {
      console.error("Error al autenticar al administrador:", err);
      return res
        .status(500)
        .json({ error: "Se produjo un error al autenticar al administrador." });
    }

    if (!admin) {
      return res.status(401).json({ error: "Credenciales inválidas." });
    }

    req.login(admin, (err) => {
      if (err) {
        console.error("Error al iniciar sesión:", err);
        return res
          .status(500)
          .json({ error: "Se produjo un error al iniciar sesión." });
      }

      next();
    });
  })(req, res, next);
};

module.exports = authenticateAdmin;
