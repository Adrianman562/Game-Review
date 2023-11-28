const router = require("express").Router();
const withAuth = require("../auth/auth");
const { Users, Reviews } = require("../models");

/*
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

*/
router.get("/", async (req, res) => {
  res.render("homepage");
});

//create profile route
router.get("/createprofile", async (req, res) => {
  res.render("createprofile");
});

// Login route
router.get("/login", (req, res) => {
  res.render("homepage");
});

router.get("/users", (req, res) => {
  res.render("profile");
});

//render single user profile
router.get("/users/:id", withAuth, async (req, res) => {
  try {
    const userData = await Users.findByPk(req.params.id, {});
    res.render("profile", { userData, logged_in: req.session.logged_in });
  } catch (err) {
    res.status(500).json({ message: "error in getting user" });
  }
});

module.exports = router;
