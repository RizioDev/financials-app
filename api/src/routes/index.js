const { Router } = require("express");
const vehiculosRoutes = require("./vehiculos");

const router = Router();

router.use("/vehiculos", vehiculosRoutes);

module.exports = router;
