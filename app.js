require("dotenv").config();

const express = require("express");

let app = express();

app.set("view engine", "ejs");

app.get("/", function(req, res) {
  res.render("index");
});

app.listen(process.env.PORT, process.env.IP, function() {
  console.log("Server started on port 4010");
});
