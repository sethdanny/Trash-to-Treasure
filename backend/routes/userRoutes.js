#!/usr/bin/node

const express = require('express');
const router = express.Router();
const upload = require('../config/multerConfig');

const {
  registerUser,
  userLogin,
  userLogout,
  userProfile,
  resetPasswordRequest,
  resetPassword
} = require('../controllers/userController');

/* eslint-disable no-unused-vars */
// user authentications
router.post('/register', upload.single('profilePicture'), registerUser);
router.post('/login', userLogin);
router.post('/logout', userLogout);
router.get('/profile', userProfile);
router.post('/password/reset/request', resetPasswordRequest);
router.post('/password/reset', resetPassword);

module.exports = router;
