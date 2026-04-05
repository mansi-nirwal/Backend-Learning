
const mongoose = require('mongoose');

function connectDB(){

    mongoose.connect('').then( () => {
        console.log('DB connected')
    })


}

module.exports = connectDB;