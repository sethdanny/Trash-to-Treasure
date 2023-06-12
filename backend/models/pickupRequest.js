#!/usr/bin/node
/* model to handle our pickup request collection */
const mongoose = require('mongoose');

const pickupRequestSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  wasteListing: { type: mongoose.Schema.Types.ObjectId, ref: 'WasteListing', required: true },
  status: { type: String, enum: ['pending', 'approved', 'rejected'], default: 'pending' },
  additionalDetails: { type: String }
}, { timestamps: true });

const PickupRequest = mongoose.model('PickupRequest', pickupRequestSchema);
module.exports = PickupRequest;
