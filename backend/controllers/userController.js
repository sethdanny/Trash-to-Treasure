#!/usr/bin/node
/* eslint-disable no-unused-vars */
const upload = require('../config/multerConfig');
const User = require('../models/userModel');
const bcrypt = require('bcrypt');

const registerUser = async (req, res) => {
  try {
    // Extract fields from request body
    const {
      firstName,
      lastName,
      email,
      password,
      contactNumber,
      address
    } = req.body;

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user instance
    const newUser = new User({
      firstName,
      lastName,
      email,
      password: hashedPassword,
      contactNumber,
      address,
      profilePicture: req.file ? req.file.filename : undefined
    });

    // Save the user to the database
    const savedUser = await newUser.save();

    res.status(201).json(savedUser);
  } catch (error) {
    res.status(500).json({ error: 'Failed to register new user' });
  }
};

const userLogin = async (req, res) => {
  // Logic to authenticate user login
  // Access the request body to get the user login credentials
  const userLoginCredentials = req.body;

  // Validate the user login credentials and generate a JWT token for authentication
  // Return the JWT token as a response
  res.status(200).json({ token: 'your-jwt-token' });
};

const userLogout = async (req, res) => {
  // Logic to handle user logout
  // Perform any necessary cleanup or session management tasks
  // Return a success message as a response
  res.status(200).json({ message: 'User logged out successfully' });
};

const userProfile = async (req, res) => {
  // Logic to fetch the user profile based on the authenticated user
  // Return the user profile details as a response
  res.status(200).json({ profile: 'user-profile-details' });
};

const resetPasswordRequest = async (req, res) => {
  // Logic to handle the password reset request
  // Access the request body to get the user email or username for password reset
  const userIdentifier = req.body.userIdentifier;

  // Generate a password reset token and send it to the user's email
  // Return a success message as a response
  res.status(200).json({ message: 'Password reset email sent successfully' });
};

const resetPassword = async (req, res) => {
  // Logic to handle the password reset
  // Access the request body to get the user email or username, new password, and password reset token
  const userIdentifier = req.body.userIdentifier;
  const newPassword = req.body.newPassword;
  const resetToken = req.body.resetToken;

  // Validate the password reset token and update the user's password in the database
  // Return a success message as a response
  res.status(200).json({ message: 'Password reset successful' });
};

module.exports = {
  registerUser,
  userLogin,
  userLogout,
  userProfile,
  resetPasswordRequest,
  resetPassword
};
