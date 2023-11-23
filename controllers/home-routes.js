const router = require("express").Router();
const withAuth = require("../auth/auth");
const { Users, Reviews } = require("../models");

router.get("/", withAuth, async (req, res) => {
  try {
    const userData = await Users.findByPk(req.session.user_id, {});

    res.render("profile", {
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json({ message: "Check home endpoint!" });
  }
});
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

// GET one review
router.get("/review/:id", async (req, res) => {
  try {
    const dbReviewData = await Reviews.findByPk(req.params.id);

    const review = dbReviewData.get({ plain: true });
    res.render("review", { review, logged_in: req.session.logged_in });
  } catch (err) {
    res.status(500).json({ message: "Check review endpoint!" });
  }
});
*/
//create profile route
router.get("/createprofile", async (req, res) => {
  res.render("createprofile");
});

// Login route
router.get("/login", (req, res) => {
  res.render("homepage");
});

module.exports = router;
