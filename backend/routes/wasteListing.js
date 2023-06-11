#!/usr/bin/node
// Module to handle routes about waste listing

const express = require('express');
const router = express.Router();
const {
  getWasteListing,
  createWasteListing,
  updateWasteListing,
  deleteWasteListing
} = require('../controllers/wasteListing');

// Routes to handle waste listing
router.get('/', getWasteListing);
router.post('/createWasteListing', createWasteListing);
router.put('/:id', updateWasteListing);
router.delete('/:id', deleteWasteListing);

module.exports = router;
