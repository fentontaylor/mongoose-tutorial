const mongoose = require('mongoose');
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true
}

mongoose.connect('mongodb://localhost:27017/Edureka', options, (error) => {
  if (!error) {
    console.log('Database connection successful')
  } else {
    console.log(`Error connecting to database: ${error}`)
  }
})