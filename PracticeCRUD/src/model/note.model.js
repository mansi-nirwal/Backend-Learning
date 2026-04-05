 const mongoose = require('mongoose');

 const schema = new mongoose.Schema({
    title: String,
    description: String,
 })

const notemodel = mongoose.model('notes', schema)

 module.exports = notemodel;