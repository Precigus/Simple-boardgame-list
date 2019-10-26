const express = require("express"),
  router = express.Router();

router.get("/:id", async function(req, res) {
  let foundGame = (await req.app.locals.gamesList).find(function(game) {
    return game.gameId === Number(req.params.id);
  });
  res.render("games/show", { game: foundGame });
});

module.exports = router;
