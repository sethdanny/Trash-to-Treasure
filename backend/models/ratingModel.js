#!/usr/bin/node
/* Rating model to handle its collection */

const mongoose = require('mongoose');

const ratingSchema = new mongoose.Schema({
  rating_id: { type: mongoose.Schema.Types.ObjectId, required: true, unique: true },
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  waste_product_id: { type: mongoose.Schema.Types.ObjectId, ref: 'WasteProduct', required: true },
  rating: { type: Number, required: true }
}, { timestamps: true });

const Rating = mongoose.model('Rating', ratingSchema);

module.exports = Rating;
