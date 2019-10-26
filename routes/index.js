const express = require("express"),
  router = express.Router(),
  fetch = require("node-fetch");

router.get("/", async function(req, res) {
  res.render("games/index", { games: await req.app.locals.gamesList });
});

function addGame() {
  window.location.href = "/games/new";
}

module.exports = router;
