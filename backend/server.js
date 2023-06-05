#!/usr/bin/node
/* eslint-disable no-unused-vars */
const express = require('express');
const dotenv = require('dotenv').config();
const port = process.env.PORT || 3000;
const colors = require('colors');
const connectDB = require('./config/db');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');

connectDB();

const app = express();

// MiddleWare
app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser());

app.use('/api/user', require('./routes/user'));
app.use('/api/waste/', require('./routes/wasteListingRoutes'));
app.use('/api/pickup-requests', require('./routes/pickupRequestRoutes'));

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
