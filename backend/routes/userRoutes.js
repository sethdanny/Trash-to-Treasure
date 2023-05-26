#!/usr/bin/node

const express = require('express');
const router = express.Router();
const { registerUser, userLogin } = require('../controllers/userController');

router.post('/register', registerUser);

router.post('/login', userLogin);

module.exports = router;
