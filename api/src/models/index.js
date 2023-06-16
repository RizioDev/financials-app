const { Sequelize } = require("sequelize");
const {
  dbUser,
  dbName,
  dbPort,
  dbPassword,
  dbHost,
} = require("../utils/config/index");

const vehicleFactory = require("./Vehicles");

const sequelize = new Sequelize(
  `postgres://${dbUser}:${dbPassword}@${dbHost}:${dbPort}/${dbName}`
);

// creacion de las tablas
const Vehicle = vehicleFactory(sequelize);

// relaciones entre tablas

module.exports = {
  conn: sequelize,
  Vehicle,
};

/*  

models > se comunica con la base de datos
rutas > son la puerta de entrada a la api
controller > es el intermediario entre la ruta y nuestra base de datos


*/
