#!/usr/bin/node
// middleware to handle errors
const ErrorResponse = require('../utils/errorResponse');
const errorHandler = (err, req, res, next) => {
  let { statusCode = 500, message } = err;

  // Check if the error is an instance of your custom ErrorResponse class
  if (err instanceof ErrorResponse) {
    statusCode = err.statusCode;
  }

  // Return the error as JSON
  res.status(statusCode).json({ error: message });
};

module.exports = errorHandler;
