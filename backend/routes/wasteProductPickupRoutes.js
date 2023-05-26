#!/usr/bin/node
const express = require('express');
const router = express.Router();
const { pickupRequests, createNewRequest, getRequest, updateRequest, deleteRequest } = require('../controllers/wastePickupController');

router.get('/', pickupRequests);
router.post('/', createNewRequest);
router.get('/:id', getRequest);
router.put('/:id', updateRequest);
router.delete('/:id', deleteRequest);

module.exports = router;
