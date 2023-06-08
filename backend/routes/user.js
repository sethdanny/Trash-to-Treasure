#!/usr/bin/node

const express = require('express');
const router = express.Router();

const {
  registerUser,
  registerPage,
  userLogin,
  userLogout,
  singleUser,
  userProfile,
  resetPasswordRequest,
  resetPassword
} = require('../controllers/user');

/* eslint-disable no-unused-vars */
// user authentications
router.post('/register', registerUser);
router.get('/register_page', registerPage);
router.post('/login', userLogin);
router.post('/logout', userLogout);
router.get('/:id', singleUser);
router.get('/profile', userProfile);
router.post('/password/reset/request', resetPasswordRequest);
router.post('/password/reset', resetPassword);

module.exports = router;
