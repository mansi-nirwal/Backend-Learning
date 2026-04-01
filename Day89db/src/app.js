const express = require("express");

const app = express();
app.use(express.json()); // middleware to get body

const notes = [];

// create notes api

app.post("/notes", (req, res) => {
  notes.push(req.body);
  res.status(201).json({
    msg: "Notes created",
  });
});

// Fetch notes api

app.get("/notes", (req, res) => {
  res.status(200).json({
    notes,
  });
});

// Delete Api

app.delete("/notes/:index", (req, res) => {
  delete notes[req.params.index];
  res.status(204).json({
    message: "Notes deleted",
  });
});

// partially update api

app.patch("/notes/:index", (req, res) => {
  notes[req.params.index].role = req.body.role;
  res.send(200).json({
    msg: "updated",
  });
});

module.exports = app;
