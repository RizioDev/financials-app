const express = require("express");
const morgan = require("morgan");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const passport = require("passport");
const SequelizeStore = require("connect-session-sequelize")(session.Store);
const { conn } = require("./src/models/index");
const { PORT } = process.env;

// Importa los controladores y las rutas
const routes = require("./src/routes");
const errorHandler = require("./src/utils/middlewares/errorHandler");
const setHeaders = require("./src/utils/middlewares/setHeaders");

// Configura Passport.js
require("./src/utils/config/passport")(passport);

const app = express();

// Configura la sesión
const sessionStore = new SequelizeStore({
  db: conn,
});

app.use(
  session({
    secret: "mysecretkey",
    resave: false,
    saveUninitialized: false,
    store: sessionStore,
    cookie: {
      secure: true, // Solo enviar cookies a través de HTTPS
      httpOnly: true, // Las cookies no son accesibles mediante JavaScript en el navegador
    },
  })
);

// Inicializa Passport.js
app.use(passport.initialize());
app.use(passport.session());

// Parsea las cookies
app.use(cookieParser());

// Set middlewares
app.use(express.urlencoded({ extended: true, limit: "50mb" }));
app.use(express.json({ limit: "50mb" }));
app.use(morgan("dev"));

// Set headers
app.use(setHeaders);

// Set routes
app.use("/", routes);

// Middleware para manejar errores
app.use(errorHandler);

// Set database
conn.sync({ force: false }).then(() => {
  console.log("Database connected");
  app.listen(PORT || 3001, () => {
    console.log(`Server running on port ${PORT || 3001}`);
  });
});
