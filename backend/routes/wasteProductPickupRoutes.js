#!/usr/bin/node
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).json({ message: 'Get a list of all waste pickup requests' });
});

router.post('/', (req, res) => {
  res.status(200).json({ message: 'Create a new waste pickup request' });
});

router.get('/:id', (req, res) => {
  res.status(200).json({ message: `Get a specific waste pickup request by ID ${req.params.id}` });
});

router.put('/:id', (req, res) => {
  res.status(200).json({ message: `Update a waste pickup request by ID ${req.params.id}` });
});

router.delete('/:id', (req, res) => {
  res.status(200).json({ message: `Delete a waste pickup request by ID ${req.params.id}` });
});

module.exports = router;
