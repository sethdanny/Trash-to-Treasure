#!/usr/bin/node
/* model to handle our pickup request collection */
const mongoose = require('mongoose');

const pickupRequestSchema = new mongoose.Schema({
  pickuprequest_id: { type: mongoose.Schema.Types.ObjectId, required: true, unique: true },
  waste_product_id: { type: mongoose.Schema.Types.ObjectId, ref: 'WasteProduct', required: true },
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  status: { type: String, enum: ['pending', 'scheduled', 'completed'], default: 'pending' },
  scheduled_time: { type: Date }
}, { timestamps: true });

const PickupRequest = mongoose.model('PickupRequest', pickupRequestSchema);

module.exports = PickupRequest;
