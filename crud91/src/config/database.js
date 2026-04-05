const mongo = require('mongoose')

function connect(){
    mongo.connect('mongodb+srv://manshinirwal19_db_user:mansi19@cohort2.nbnwjd6.mongodb.net/mansiii').then( () => {
        console.log('DB Connected');
        
    })
}

connect()

module.exports = connect()