const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const authRoutes = require('./routes/authRoutes')

const app = express()
const port = 5000

app.use(bodyParser.json())

// Replace 'YOUR_MONGODB_CONNECTION_STRING' with your actual MongoDB connection string
mongoose.connect('YOUR_MONGODB_CONNECTION_STRING', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

app.use('/api', authRoutes)

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
});
