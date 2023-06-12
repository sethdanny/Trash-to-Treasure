#!/usr/bin/node
/* eslint-disable no-unused-vars */

const express = require('express');
const router = express.Router();
const {
  createPickupRequest,
  getPickupRequests,
  updatePickupRequest,
  deletePickupRequest
} = require('../controllers/pickupRequest');

// pickup requests routers
router.post('/createPickupRequest', createPickupRequest);
router.get('/getPickupRequest', getPickupRequests);
router.put('/:id', updatePickupRequest);
router.delete('/:id', deletePickupRequest);

module.exports = router;
