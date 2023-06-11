#!/usr/bin/node
// Model to create waste product collection

const mongoose = require('mongoose');
const wasteListingSchema = new mongoose.Schema({
  // user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  // wasteType: { type: mongoose.Schema.Types.ObjectId, ref: 'WasteType', required: true },
  title: { type: String, required: true },
  description: { type: String },
  quantity: { type: Number, default: 1 },
  location: { type: String },
  images: [{ type: String }],
  availability: { type: Boolean, default: true }
}, { timestamps: true });

const WasteListing = mongoose.model('WasteListing', wasteListingSchema);
module.exports = WasteListing;
