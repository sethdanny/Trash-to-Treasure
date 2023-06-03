#!/usr/bin/node
/* eslint-disable no-unused-vars */
const upload = require('../config/multerConfig');
const User = require('../models/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const handleErrors = (err) => {
  console.log(err.message, err.code);
  const errors = { email: '', password: '' };
  // duplicate email error
  if (err.code === 11000) {
    errors.email = 'that email is already registered';
    return errors;
  }

  // validation errors
  if (err.message.includes('user validation failed')) {
    // console.log(err);
    Object.values(err.errors).forEach(({ properties }) => {
      // console.log(val);
      // console.log(properties);
      errors[properties.path] = properties.message;
    });
  }
  return errors;
};

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
  } catch (err) {
    const errors = handleErrors(err);
    res.status(400).json({ errors });
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
    const token = jwt.sign({ userId: user._id }, 'your-secret-key');
    // Return the token as the response
    res.json({ token });
  } catch (error) {
    res.status(500).json({ error: 'Failed to login' });
  }
};

const userLogout = async (req, res) => {
  try {
    const { userId, token } = req;

    // Find the user by ID
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Remove the token from the invalidatedTokens array
    user.invalidatedTokens = user.invalidatedTokens.filter((t) => t !== token);

    // Save the updated user
    await user.save();

    res.json({ message: 'Logout successful' });
  } catch (error) {
    res.status(500).json({ error: error.message });
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
  userProfile,
  resetPasswordRequest,
  resetPassword
};
