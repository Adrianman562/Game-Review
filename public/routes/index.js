const express = require("express").Router();
const createProfileRouter = require("./createprofile");
const app = express();

app.use("/createprofile", createProfileRouter);

module.exports = app;
