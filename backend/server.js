#!/usr/bin/node

const express = require('express');
// eslint-disable-next-line no-unused-vars
const dotenv = require('dotenv').config();
const port = process.env.PORT || 3000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/user', require('./routes/userRoutes'));
app.use('/api/waste/', require('./routes/wasteListingRoutes'));
app.use('/api/pickup-requests', require('./routes/pickupRequestRoutes'));

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
