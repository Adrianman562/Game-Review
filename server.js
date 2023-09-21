const express = require("express");
const routes = require("./routes");
// This makes sessions
const session = require('express-session');
const app = express();
const port = 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


const sess= {
  secret: 'Super secret',
  resave: false,
  saveUninitialized: false,
};

app.use(session(sess))
app.use(routes)

app.listen(port, () => {
  console.log("listening on port 3001");
});
