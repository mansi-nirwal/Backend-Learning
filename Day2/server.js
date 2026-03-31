const express = require("express");

const app = express(); // server instance create

app.get("/", (req, res) => {
  res.send("hello");
});

app.get("/about", (req, res) => {
  res.send("About");
});

(app.get("/mansi"),
  (req, res) => {
    res.send("Mansi ");
  });

app.get("/home", (req, res) => {
  res.send("Home page");
});

app.listen(3000); // server start
