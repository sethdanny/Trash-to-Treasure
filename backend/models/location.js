#!/usr/bin/node
/* location model to store information */

const mongoose = require('mongoose');

const locationSchema = new mongoose.Schema({
  country: { type: String, required: true },
  city: { type: String, required: true },
  town: { type: String, required: true },
  street_address: { type: String, required: true },
  postal_code: { type: String, required: true }
});

const Location = mongoose.model('Location', locationSchema);
module.exports = Location;
