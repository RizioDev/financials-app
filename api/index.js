const express = require("express");
const morgan = require("morgan");
const routes = require("./src/routes");
const errorHandler = require("./src/utils/middlewares/errorHandler");
const setHeaders = require("./src/utils/middlewares/setHeaders");
const { conn } = require("./src/models/index");
const { PORT } = process.env;

const app = express();

// set middlewares
app.use(express.urlencoded({ extended: true, limit: "50mb" }));
app.use(express.json({ limit: "50mb" }));
app.use(morgan("dev"));

// set headers
app.use(setHeaders);

// set routes
app.use("/", routes);

//middleware para manejar errores
app.use(errorHandler);

// set database
conn.sync({ force: true }).then(() => {
  console.log("Database connected");
  app.listen(PORT || 3001, () => {
    console.log(`Server running on port ${PORT || 3001}`);
  });
});
