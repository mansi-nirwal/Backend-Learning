 const express = require('express');
const notemodel = require('./model/note.model')

 const app = express();
 app.use(express.json())

 app.post('/notes', (req, res) => {

const {title , description} = req.body

 const note = notemodel.create({
    title, description
 })

 res.send('Note created').json(note)
 
 }
 )

 module.exports = app;
 