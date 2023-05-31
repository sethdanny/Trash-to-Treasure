#!/usr/bin/node
// Notification Model
const mongoose = require('mongoose');

const notificationSchema = new mongoose.Schema({
  notification_id: { type: mongoose.Schema.Types.ObjectId, required: true, unique: true },
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  pickup_request_id: { type: mongoose.Schema.Types.ObjectId, ref: 'PickupRequest', required: true },
  is_read: { type: Boolean, default: false }
}, { timestamps: true });

const Notification = mongoose.model('Notification', notificationSchema);

module.exports = Notification;
