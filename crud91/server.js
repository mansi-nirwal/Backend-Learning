const app = require('./src/app');

const mongo = require('./src/config/database')

app.listen(3000, () => {
  console.log('Server Starting');
  
})