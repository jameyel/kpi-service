// FileName: index.js
// Import express
const express = require('express');
const cors = require('cors');
// Initialize the app
const app = express();
// Setup server port
const port = process.env.PORT || 8080;
// Import Body parser
const bodyParser = require('body-parser');
// Import Mongoose
const mongoose = require('mongoose');
// Configure bodyparser to handle post requests
app.use(
  bodyParser.urlencoded({
    extended: true
  }),
  cors()
);
app.use(bodyParser.json());
// Connect to Mongoose and set connection variable
mongoose.connect('mongodb://localhost/resthub');
const db = mongoose.connection;
// Import routes
const apiRoutes = require('./api-routes');
// Use Api routes in the App
app.use('/api/v1', apiRoutes);
// Send message for default URL
app.get('/', (req, res) => res.send('Hello World with Express'));
// Launch app to listen to specified port
app.listen(port, function() {
  console.log('Running KPI Service on port ' + port);
});
