#!/usr/bin/node
const mongoose = require('mongoose');

const wasteTypeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  acceptedMaterials: [{ type: String }],
  recyclingInfo: { type: String }
}, { timestamps: true });

const WasteType = mongoose.model('WasteType', wasteTypeSchema);
module.exports = WasteType;
