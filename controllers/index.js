const router = require("express").Router();

const apiRoutes = require("./api/user-Routes");

router.use("/api", apiRoutes);

module.exports = router;
