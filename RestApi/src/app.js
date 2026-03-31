const express = require("express");

const app = express();

app.use(express.json()); // middleware
const notes = [];

app.post("/notes", (req, res) => {
  console.log(req.body);

  notes.push(req.body);
  res.send("Notes Done");
});

app.get("/notes", (req, res) => {
  res.send(notes);
});

app.delete("/notes/:index", (req, res) => {
  delete notes[req.params.index];

  res.send("Deleted");
});

module.exports = app;
