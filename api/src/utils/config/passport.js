const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const { Admin } = require("../../models");

module.exports = (passport) => {
  // Configurar la estrategia de autenticación local
  passport.use(
    new LocalStrategy(
      {
        usernameField: "username",
        passwordField: "password",
      },
      async (username, password, done) => {
        try {
          // Buscar el administrador por nombre de usuario
          const admin = await Admin.findOne({ where: { username } });

          // Verificar si el administrador existe y si la contraseña es válida
          if (!admin || !(await admin.isValidPassword(password))) {
            return done(null, false);
          }

          // Si el administrador existe y la contraseña es válida, llamar a done() con el administrador como argumento
          return done(null, admin);
        } catch (error) {
          return done(error);
        }
      }
    )
  );

  // Serializar el administrador en la sesión
  passport.serializeUser((admin, done) => {
    done(null, admin.id);
  });

  // Deserializar el administrador desde la sesión
  passport.deserializeUser(async (id, done) => {
    try {
      const admin = await Admin.findByPk(id);
      done(null, admin);
    } catch (error) {
      done(error);
    }
  });
};
