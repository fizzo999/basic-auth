'use strict';

const server = require('./src/server.js');
const dotenv = require('dotenv');
dotenv.config();

const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI;
const mongoose = require('mongoose');
const options = { useNewUrlParser: true, useUnifiedTopology: true }; // don't read into this, just add them

mongoose.connect(MONGODB_URI, options)
  .then(() => {
    server.start(PORT);
  })
  .catch(e => console.error('Could not start server', e.message));
