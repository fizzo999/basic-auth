'use strict';

const express = require('express');
const bcrypt = require('bcrypt');
const signInMW = require('../auth/signIn.js');
const Users = require('../models/userSchema.js');

const router = express.Router();

router.post('/signup', signUpHandler);
router.post('/signin', signInMW, signInHandler);

async function signUpHandler(req, res) {
  try {
    req.body.password = await bcrypt.hash(req.body.password, 10);
    const user = new Users(req.body);
    const record = await user.save();
    res.status(201).json(record);
  } catch (e) { res.status(403).send("Error Creating User"); }
}

async function signInHandler(req, res) {
  let newRecordFromDbObj = {user: req.body.record};
  console.log('==================HERE WE ARE INSIDE OF authRoutes', newRecordFromDbObj);
  res.status(201).json(newRecordFromDbObj);
}

module.exports = router;
