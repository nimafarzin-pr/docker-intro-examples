const express = require('express');
const mongoose = require('mongoose');
const app = express();

// Connect to MongoDB using the service name from Docker Compose
mongoose.connect('mongodb://mongo:27017/mydb')
  .then(() => console.log('Mongo connected'))
  .catch(err => console.error(err));
app.get('/', (req, res) => res.send('Hello from backend'));
app.listen(3000);