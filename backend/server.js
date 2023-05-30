#!/usr/bin/node

const express = require('express');
// eslint-disable-next-line no-unused-vars
const dotenv = require('dotenv').config();
const port = process.env.PORT || 3000;

const app = express();

app.use('/api/requests/', require('./routes/wasteProductPickupRoutes'));
app.use('/api/users/', require('./routes/userRoutes'));

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
