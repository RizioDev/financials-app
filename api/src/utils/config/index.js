require("dotenv").config();

module.exports = {
  dbUser: process.env.DB_USER || "postgres",
  dbName: process.env.DB_NAME || "financials-app",
  dbPort: process.env.DB_PORT || "5432",
  dbPassword: process.env.DB_PASSWORD || "password",
  host: process.env.HOST || "localhost",
  port: process.env.PORT || "3001",
  dbHost: process.env.DB_HOST || "localhost",
};
