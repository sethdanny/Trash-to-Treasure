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
} = require('../controllers/pickupRequestController');

// pickup requests routers
router.post('/', createPickupRequest);
router.get('/', getPickupRequests);
router.put('/:pickupRequestId', updatePickupRequest);
router.delete('/:pickupRequestId', deletePickupRequest);

module.exports = router;
