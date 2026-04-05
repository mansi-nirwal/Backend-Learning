const express = require('express');

const noteModel = require('./modals/notes.model')

app.use(express.json())

const app = express();

app.post('/notes', (req, res) => {

    const {title, description } = req.body;

const note =  noteModel.create({
        title , description
    })

})













module.exports= app;