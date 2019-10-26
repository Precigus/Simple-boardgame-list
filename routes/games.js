const express = require("express"),
  router = express.Router();

router.get("/new", function(req, res) {
  res.render("games/new");
});

router.get("/:id", async function(req, res) {
  let foundGame = (await req.app.locals.gamesList).find(function(game) {
    return game.gameId === Number(req.params.id);
  });
  res.render("games/show", { game: foundGame });
});

router.post("/", function(req, res) {
  let game = req.body.game;
  let newGame = {
    gameId: 1,
    rank: game.rank,
    name: game.name,
    yearPublished: game.yearPublished,
    thumbnail: game.imageUrl
  };
  res.render("games/show", { game: newGame });
});

module.exports = router;
