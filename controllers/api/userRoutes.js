const router = require("express").Router();
const bcrypt = require("bcrypt");
const { Users } = require("../../models/users");

//endpint ===> /api/userRoutes

//Get Gallery of all users
router.get("/usergallery", async (req, res) => {
  try {
    const users = await Users.findAll(); // double check this
    !users
      ? res.status(404).json({ message: "Gallery of users not found!" })
      : res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ message: "failed! Checkendpoint!", error: err });
  }
});

//Get specific users with id
router.get("/users/:id", async (req, res) => {
  try {
    const user = await Users.findByPk({ where: { id: req.params.id } });
    !user
      ? res.status(404).json({ message: "User id not found!" })
      : res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ message: "Failed! Checkendpoint!", error: err });
  }
});

//user sign-up
//Will create new user
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

// delete a user
router.delete("/user/delete/:id", async (req, res) => {
  try {
    const deleted = await Users.destroy({ where: { id: req.params.id } });
    !deleted
      ? res.status(404).json({ message: "User id not found!" })
      : res.status(200).json({ message: "User id deleted!" });
  } catch (err) {
    res.status(500).json({ message: "Check Endpoint!", error: err });
  }
});

module.exports = router;
