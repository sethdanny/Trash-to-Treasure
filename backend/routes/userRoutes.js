#!/usr/bin/node

const express = require('express');
const router = express.Router();

router.post('/register', (req, res) => {
  res.status(200).json({ message: 'User registered successfully' });
});

router.post('/login', (req, res) => {
  res.status(200).json({ message: 'User has logged in successfully' });
});

module.exports = router;
