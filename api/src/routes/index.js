const { Router } = require("express");
const vehiculosRoutes = require("./vehiculos");
const adminRoutes = require("./admin");

const router = Router();

router.use("/vehiculos", vehiculosRoutes);
router.use("/admin", adminRoutes);

module.exports = router;
