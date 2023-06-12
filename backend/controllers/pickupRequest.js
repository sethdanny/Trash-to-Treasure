#!/usr/bin/node
/* eslint-disable no-unused-vars */

const PickupRequest = require('../models/pickupRequest');

// Get all pickup requests
const getPickupRequests = async (req, res) => {
  try {
    const pickupRequests = await PickupRequest.find();
    res.json(pickupRequests);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get a specific pickup request by ID
const getPickupRequestById = async (req, res) => {
  const { id } = req.params;
  try {
    const pickupRequest = await PickupRequest.findById(id);
    if (!pickupRequest) {
      return res.status(404).json({ message: 'Pickup request not found' });
    }
    res.json(pickupRequest);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Create a new pickup request
const createPickupRequest = async (req, res) => {
  const { user, wasteListing, additionalDetails } = req.body;
  try {
    const newPickupRequest = new PickupRequest({
      user,
      wasteListing,
      additionalDetails
    });
    await newPickupRequest.save();
    res.status(201).json(newPickupRequest);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update a pickup request
const updatePickupRequest = async (req, res) => {
  const { id } = req.params;
  const { status, additionalDetails } = req.body;
  try {
    const pickupRequest = await PickupRequest.findById(id);
    if (!pickupRequest) {
      return res.status(404).json({ message: 'Pickup request not found' });
    }
    pickupRequest.status = status || pickupRequest.status;
    pickupRequest.additionalDetails = additionalDetails || pickupRequest.additionalDetails;
    await pickupRequest.save();
    res.json(pickupRequest);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete a pickup request
const deletePickupRequest = async (req, res) => {
  const { id } = req.params;
  try {
    const pickupRequest = await PickupRequest.findByIdAndDelete(id);
    if (!pickupRequest) {
      return res.status(404).json({ message: 'Pickup request not found' });
    }
    res.json({ message: 'Pickup request deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getPickupRequests,
  getPickupRequestById,
  createPickupRequest,
  updatePickupRequest,
  deletePickupRequest
};
