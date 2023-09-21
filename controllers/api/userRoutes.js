const router = require("express").Router();
const bcrypt = require("bcrypt");
const { Users } = require("../../models/users");

//user sign-up
router.post("/signup", async (req, res) => {
  try {
    const newUser = req.body;
    //hashing password from new req.body
    newUser.password = await bcrypt.hash(req.body.password, 10);
    //creating new user/data
    const userData = await Users.create(newUser);
    //response to if newData is made and catch if it is not
    res.status(200).json(userData);
  } catch (err) {
    res.status(404).json(err);
  }
});

module.exports = router;
