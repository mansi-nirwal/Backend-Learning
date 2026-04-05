const app = require('./src/app')
const connectDB = require('./src/config/connect')

connectDB();

app.listen(3000, () => {
    console.log('Server Running')
})