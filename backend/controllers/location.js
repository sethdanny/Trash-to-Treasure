const Location = require('../models/location');

// Create a new location
const createLocation = async (req, res) => {
  try {
    const location = new Location(req.body);
    await location.save();
    res.status(201).json({ location });
  } catch (error) {
    res.status(500).json({ error: 'Failed to create location' });
  }
};

// Get all locations
const getLocations = async (req, res) => {
  try {
    const locations = await Location.find();
    res.json({ locations });
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve locations' });
  }
};

// Get a specific location by ID
const getLocationById = async (req, res) => {
  const { id } = req.params;
  try {
    const location = await Location.findById(id);
    if (!location) {
      return res.status(404).json({ error: 'Location not found' });
    }
    res.json({ location });
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve location' });
  }
};

// Update a location
const updateLocation = async (req, res) => {
  const { id } = req.params;
  try {
    const location = await Location.findByIdAndUpdate(id, req.body, { new: true });
    if (!location) {
      return res.status(404).json({ error: 'Location not found' });
    }
    res.json({ location });
  } catch (error) {
    res.status(500).json({ error: 'Failed to update location' });
  }
};

// Delete a location
const deleteLocation = async (req, res) => {
  const { id } = req.params;
  try {
    const location = await Location.findByIdAndRemove(id);
    if (!location) {
      return res.status(404).json({ error: 'Location not found' });
    }
    res.json({ message: 'Location deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete location' });
  }
};

module.exports = {
  createLocation,
  getLocations,
  getLocationById,
  updateLocation,
  deleteLocation
};
