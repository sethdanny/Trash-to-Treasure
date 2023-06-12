#!/usr/bin/node
/* eslint-disable no-unused-vars */

// Module to handle routes about payments

const express = require('express');
const router = express.Router();
const {
  createPickupRequest,
  getPickupRequests,
  updatePickupRequest,
  deletePickupRequest
} = require('../controllers/pickupRequest');

// pickup requests routers
router.post('/', createPickupRequest);
router.get('/', getPickupRequests);
router.put('/:id', updatePickupRequest);
router.delete('/:id', deletePickupRequest);

module.exports = router;
