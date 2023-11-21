const router = require("express").Router();
const withAuth = require("../utils/auth");
const { Users } = require("../models");

router.get("/", withAuth, async (req, res) => {
  try {
    const dbUserData = await Users.findAll({});

    const users = dbUserData.map((user) => user.get({ plain: true }));
    res.render("homepage", {
      users,
      loggedIn: req.session.logged_in,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET one profile
router.get("/profile/:id", async (req, res) => {
  try {
    const dbUserData = await Users.findByPk(req.params.id, {});

    const user = dbUserData.get({ plain: true });
    res.render("profile", { user, logged_in: req.session.logged_in });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET one profile
router.get("/profile/:id", async (req, res) => {
  try {
    const dbUserData = await Users.findByPk(req.params.id, {
      include: [
        {
          model: Reviews,
          attributes: [
            "review_id",
            "game_title",
            "rating",
            "genre",
            "comments",
          ],
        },
      ],
    });

    const user = dbUserData.get({ plain: true });
    res.render("profile", { user, logged_in: req.session.logged_in });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET one review

//create profile route
router.get("/createprofile", async (req, res) => {
  if (req.session.logged_in) {
    res.render("/createprofile");
    return;
  }
  res.render("login");
});

// Login route
router.get("/login", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/");
    return;
  }
  res.render("login");
});

module.exports = router;
