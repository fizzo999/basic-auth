'use strict';

// 3rd Party Resources
const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes.js');
const notFound = require('./error-handlers/404.js');
const errors = require('./error-handlers/500.js');

// Prepare the express app
const app = express();

// Process JSON input and put the data on req.body
app.use(express.json());

// Process FORM intput and put the data on req.body
app.use(express.urlencoded({ extended: true }));

// let anyone use this app
app.use(cors());
// use the authorizationRoutes
app.use(authRoutes);

app.get('/', (req, res) => {
  console.log('we are here');
  res.status(200).send('Stuffs working');
});

app.use('*', notFound);
app.use(errors);

module.exports = {
  server: app,
  start: port => {
    app.listen(port, () => {
      console.log(`Server is up and running on http://localhost:${port}`);
    });
  }
};
