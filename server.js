const express = require("express");
const routes = require('./routes')
const sequelize = require()

const app = express();
const port = 3001;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.listen(port, () => {
  console.log("listening on port 3001");
});
