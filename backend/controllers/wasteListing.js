#!/usr/bin/node

const WasteListing = require('../models/wasteListing');

const createWasteListing = async (req, res) => {
  const {
    user,
    wasteType,
    title,
    description,
    quantity,
    location,
    images,
    availability
  } = req.body;

  try {
    const newWasteListing = new WasteListing({
      user,
      wasteType,
      title,
      description,
      quantity,
      location,
      images,
      availability
    });
    await newWasteListing.save();
    return res.status(201).json(newWasteListing);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getWasteListing = async (req, res) => {
  // Logic to fetch waste listings from the database
  // Return the fetched waste listings as a response
  res.status(200).json({ message: 'Fetch waste listings' });
};

const updateWasteListing = async (req, res) => {
  // Logic to update a waste listing in the database
  // Access the request parameters (e.g., ID) and body to get the updated details
  const wasteListingId = req.params.id;
  const updatedWasteListing = req.body;

  // Update the waste listing in the database based on the provided ID
  // Return the updated waste listing as a response
  res.status(200).json({ message: 'Update waste listing', data: { id: wasteListingId, ...updatedWasteListing } });
};

const deleteWasteListing = async (req, res) => {
  // Logic to delete a waste listing from the database
  // Access the request parameter (e.g., ID) to determine which waste listing to delete
  const wasteListingId = req.params.id;

  // Delete the waste listing from the database based on the provided ID
  // Return a success message as a response
  res.status(200).json({ message: 'Delete waste listing', data: { id: wasteListingId } });
};

module.exports = {
  getWasteListing,
  createWasteListing,
  updateWasteListing,
  deleteWasteListing
};
