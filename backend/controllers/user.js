#!/usr/bin/node
/* eslint-disable no-unused-vars */
const upload = require('../config/multerConfig');
const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const ErrorResponse = require('../utils/errorResponse');

const registerUser = async (req, res, next) => {
  try {
    const {
      firstName,
      lastName,
      email,
      password,
      contactNumber,
      address,
      role
    } = req.body;

    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({
        success: false,
        message: 'Email already exists'
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user instance
    const newUser = new User({
      firstName,
      lastName,
      email,
      password: hashedPassword,
      contactNumber,
      address,
      role
    });

    // Save the user to the database
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message
    });
  }
};

const registerPage = async (req, res) => {
  res.status(200).json({ message: 'registration page' });
};

const userLogin = async (req, res) => {
  try {
    // Extract email and password from request body
    const { email, password } = req.body;
    // Retrieve the user from the database based on the email
    const user = await User.findOne({ email });
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: 'Email and password required'
      });
    }
    if (!user) {
      // User with the provided email not found
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    // Compare the provided password with the stored hashed password
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      // your password doesnt match
      return res.status(401).json({ error: 'Invalid email or password' });
    }
    generateToken(user, 200, res);
  } catch (error) {
    res.status(500).json({ error: 'Failed to login' });
  }
};

const generateToken = async (user, statusCode, res) => {
  try {
    const token = await jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    const options = {
      httpOnly: true,
      expires: new Date(Date.now() + 1 * 60 * 60 * 1000) // 1 hour in milliseconds
    };
    res.status(statusCode).cookie('token', token, options).json({ success: true, token });
  } catch (error) {
    // Handle any error that occurred during token generation
    res.status(500).json({ success: false, error: 'Failed to generate token' });
  }
};

const userLogout = async (req, res, next) => {
  try {
    res.clearCookie('token');
    res.status(200).json({
      success: true,
      message: 'logged out successfully'
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const singleUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      const error = new ErrorResponse(`User with id ${req.params.id} is not found`, 404);
      throw error;
    }
    res.status(200).json({
      success: true,
      user
    });
  } catch (error) {
    next(error);
  }
};

const userProfile = async (req, res) => {
  try {
    const { userId } = req;

    // Find the user by ID in the MongoDB collection
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    // Return the user profile
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch user profile' });
  }
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
  registerPage,
  userLogin,
  userLogout,
  singleUser,
  userProfile,
  resetPasswordRequest,
  resetPassword
};
