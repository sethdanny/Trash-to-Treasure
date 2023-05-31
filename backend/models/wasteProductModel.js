#!/usr/bin/node
// Model to create waste product collection

const mongoose = require('mongoose');
const wasteProductSchema = new mongoose.Schema({
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  title: { type: String, required: true },
  description: { type: String },
  type: { type: String, required: true },
  imagePath: { type: String },
  location_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Location' },
  quantity: { type: Number, default: 0 },
  availability: { type: Boolean, default: true }
}, { timestamps: true });

const WasteProduct = mongoose.model('WasteProduct', wasteProductSchema);
module.exports = WasteProduct;
