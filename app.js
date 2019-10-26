require("dotenv").config();

const express = require("express"),
  fetch = require("node-fetch");

let app = express();

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

const url = "http://bgg-json.azurewebsites.net/hot";

async function getList() {
  let response = await fetch(url);
  let data = await response.json();
  return data;
}

// const gamesList = getList();
app.locals.gamesList = getList();

const indexRoutes = require("./routes/index"),
  gamesRoutes = require("./routes/games");

app.use("/", indexRoutes);
app.use("/games", gamesRoutes);

app.get("*", function(req, res) {
  res.send("This page does not exist!");
});

app.listen(process.env.PORT, process.env.IP, function() {
  console.log("Server started on port 4010");
});
