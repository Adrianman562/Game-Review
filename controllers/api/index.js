const router = require("express").Router();
const userRoutes = require("./user-Routes");

router.use("/useroutes", userRoutes);

module.exports = router;
