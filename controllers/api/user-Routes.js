const router = require("express").Router();

const { Users } = require("../../models");

//Will create new user
router.post("/", async (req, res) => {
  try {
    const dbUserData = await Users.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });

    req.session.save(() => {
      req.session.loggedIn = true;

      res.status(200).json(dbUserData);
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//login
router.post("/login", async (req, res) => {
  try {
    const dbUserData = await Users.findOne({
      where: {
        username: re.body.username,
      },
    });

    if (!dbUserData) {
      res
        .status(404)
        .json({ message: "Incorrect email or password. Please try again!" });
      return;
    }

    const validPassword = await dbUserData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(404)
        .json({ message: "Incorrect email or Password. Please try again!" });
      return;
    }

    req.session.save(() => {
      req.session.loggedIn = true;
    });

    res.status(200).json({ user: dbUserData, message: "You are logged in!" });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//logout
router.post("/logout", (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;