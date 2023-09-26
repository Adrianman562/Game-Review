const express = require("express");
const routes = require("./controllers");
const sequelize = require("./config/connection");
const session = require("express-session");
const sequelizeStore = require("connect-session-sequelize")(session.Store);

const app = express();
const port = 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const sess = {
  secret: "Super secret",
  resave: false,
  saveUnitialized: true,
  store: new sequelizeStore({
    db: sequelize,
  }),
};

app.use(session(sess));
app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(port, () => {
    console.log("listening on port 3001");
  });
});
