#!/usr/bin/node

const registerUser = (req, res) => {
  res.status(200).json({ message: 'User registered successfully' });
};
const userLogin = (req, res) => {
  res.status(200).json({ message: 'User has logged in successfully' });
};

module.exports = { registerUser, userLogin };
