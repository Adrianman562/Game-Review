const router = require("express").Router();
const userRoutes = require("./userRoutes");
const reviewsRoutes = require("./reviewsRoutes");

router.use("/reviewRoutes", reviewsRoutes);
router.use("/userRoutes", userRoutes);
