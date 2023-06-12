#!/usr/bin/node
const mongoose = require('mongoose');

const wasteTypeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  acceptedMaterials: [{ type: String }],
  recyclingInfo: { type: String },
  listings: [{ type: mongoose.Schema.Types.ObjectId, ref: 'WasteListing' }]
}, { timestamps: true });

const WasteType = mongoose.model('WasteType', wasteTypeSchema);
module.exports = WasteType;
