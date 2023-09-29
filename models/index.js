const Users = require("./users");
const Aboutme = require("./users");
const Reviews = require("./reviews");

Reviews.hasOne(Users, {
  foreignKey: "users_id",
});

module.exports = { Users, Aboutme, Reviews };
