const router = require("express").Router();
const { Users, Reviews } = require("../models");

//router.get("/", async (req, res) => {
/*res.sendFile(path.join(__dirname, "../public/pages/login.html"));*/
router.get("/", async (req, res) => {
  try {
    const dbUserData = await Users.findAll({
      include: [
        {
          model: Reviews,
          //need to update comments, able to pull in attributes from reviews
          attributes: ["game_title", "rating", "genre", "comments"],
        },
      ],
    });

    const users = dbUserData.map((user) => user.get({ plain: true }));
    res.render("main", {
      users,
      loggedIn: req.session.loggedIn,
    });
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
    res.render("profile", { user, loggedIn: req.session.loggedIn });
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
    res.render("profile", { user, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET one review
router.get("/review/:id", async (req, res) => {
  try {
    const dbReviewData = await Reviews.findByPk(req.params.id);

    const review = dbReviewData.get({ plain: true });
    res.render("review", { review, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//create profile route
router.get("/createprofile", async (req, res) => {
  if (req.session.loggedIn) {
    res.render("/createprofile");
    return;
  }
  res.render("login");
});

// Login route
router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }
  res.render("login");
});

module.exports = router;
