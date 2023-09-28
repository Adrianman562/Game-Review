const router = require("express").Router();
const apiRoutes = require("./api/user-Routes");
const path = require("path");


router.use("/api", apiRoutes);

module.exports = router;
