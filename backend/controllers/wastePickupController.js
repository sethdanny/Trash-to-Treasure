#!/usr/bin/node

const pickupRequests = (req, res) => {
  res.status(200).json({ message: 'Get a list of all waste pickup requests' });
};
const createNewRequest = (req, res) => {
  res.status(200).json({ message: 'Create a new waste pickup request' });
};
const getRequest = (req, res) => {
  res.status(200).json({ message: `Get a specific waste pickup request by ID ${req.params.id}` });
};
const updateRequest = (req, res) => {
  res.status(200).json({ message: `Update a waste pickup request by ID ${req.params.id}` });
};
const deleteRequest = (req, res) => {
  res.status(200).json({ message: `Delete a waste pickup request by ID ${req.params.id}` });
};

module.exports = { pickupRequests, createNewRequest, getRequest, updateRequest, deleteRequest };
