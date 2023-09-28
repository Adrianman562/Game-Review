const router = require("express").Router();
const userRoutes = require("./user-Routes");

router.use("/users", userRoutes);

module.exports = router;
