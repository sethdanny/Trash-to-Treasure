#!/usr/bin/node
/* User model to handle user registration data
  to create  User collection */

const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
  user_id: { type: mongoose.Schema.Types.ObjectId, default: mongoose.Types.ObjectId },
  role_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Role', required: true },
  firstName: { type: String, required: true, min: 2, max: 50 },
  lastName: { type: String, required: true, min: 2, max: 50 },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  address: { type: String, required: true },
  contact_number: { type: Number, required: true },
  picturePath: { type: String }
}, { timestamps: true });

const User = mongoose.model('User', userSchema);
module.exports = User;
