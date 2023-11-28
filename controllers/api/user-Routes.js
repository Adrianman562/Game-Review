const router = require("express").Router();

const { Users } = require("../../models");

//Will create new user
router.post("/createprofile", async (req, res) => {
  try {
    const dbUserData = await Users.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });

    if (!dbUserData) {
      res.status(404).json({ message: "Creating user failed!" });
      return;
    }

    const generatedId = dbUserData.id;

    res.status(200).json({ id: generatedId, message: "User is created!" });
  } catch (err) {
    res.status(500).json({ message: "Error creating user", error: err });
  }
});



//login
router.post("/login", async (req, res) => {
  try {
    const dbUserData = await Users.findOne({
      where: {
        username: req.body.username,
      },
    });

    if (!dbUserData) {
      res.status(400).json({ message: "Incorrect email or password. Please try again!" });
      return;
    }

    const validPassword = await dbUserData.checkPassword(req.body.password);

    if (!validPassword) {
      res.status(404).json({ message: "Incorrect email or password. Please try again!" });
      return;
    }

    req.session.save(() => {
      req.session.user_id = dbUserData.id;
      req.session.logged_in = true;
      res.status(200).json({ id: dbUserData.id, message: "Successfully logged in" });
      console.log("You should see the profile page");
    });
  } catch (err) {
    res.status(500).json({ message: "Check endpoint!", err });
  }
});


//logout
router.post("/logout", (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(200).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
