#!/usr/bin/node
/* User model to handle user registration data
  to create  User collection */

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    min: 2,
    max: 50
  },
  lastName: {
    type: String,
    required: true,
    min: 2,
    max: 50
  },
  email: {
    type: String,
    required: [true, 'Please enter an email'],
    unique: true,
    lowercase: true
  },
  password: {
    type: String,
    required: [true, 'Minimum password is 6 characters'],
    minlength: 6
  },
  address: {
    type: String,
    required: true
  },
  contactNumber: {
    type: Number,
    required: true
  },
  role: {
    type: Number,
    default: 0
  }
}, { timestamps: true });

const User = mongoose.model('User', userSchema);
module.exports = User;
