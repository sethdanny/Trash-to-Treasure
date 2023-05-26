#!/usr/bin/node
const express = require('express');
const router = express.Router();
const {
  pickupRequests,
  createNewRequest,
  getRequest,
  updateRequest,
  deleteRequest
} = require('../controllers/wastePickupController');
router.route('/').get(pickupRequests).post(createNewRequest);
router.route('/:id').get(getRequest).put(updateRequest).delete(deleteRequest);

module.exports = router;
