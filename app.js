// Packages and port
const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const cors = require('cors')
const port = process.env.PORT || 3000

// Database Connection
require('dotenv').config()
const uri = process.env.DB_CONNECTION
mongoose.connect(uri, () => {
  console.log('Database connection established')
})

// Import Routes
const indexRoute = require('./routes/index')
const workoutsRoute = require('./routes/workouts')
const path = require('path');

// Execute server
const app = express()

// View Engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(express.static(path.join(__dirname, 'public')));

// Middleware
app.use(bodyParser.json())
app.use(cors())

// Routes
app.use('/', indexRoute)
app.use('/workouts', workoutsRoute)

// Listening to...
app.listen(port, () => {
  console.log(`Listening on port: ${port}`)
})

