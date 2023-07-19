function setHeaders(req, res, next) {
  // acepta solicitudes de todos los dominios o del frontend, debe coincidir con el dominio del despliegue
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Credentials", true);
  next();
}

module.exports = setHeaders;
