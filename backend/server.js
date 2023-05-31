#!/usr/bin/node
/* eslint-disable no-unused-vars */
import { fileURLToPath } from 'url';
const express = require('express');
const dotenv = require('dotenv').config();
const port = process.env.PORT || 3000;
const colors = require('colors');
const connectDB = require('./config/db');
const bodyParser = require('body-parser');
const cors = require('cors');
const multer = require('multer');
const helmet = require('helmet');
const morgan = require('morgan');
const path = require('path');

/* configurations */
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

connectDB();

const app = express();

app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: 'cross-origin' }));
app.use(morgan('common'));
app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());
app.use('/assets', express.static(path.join(__dirname, 'public/assets')));

app.use('/api/user', require('./routes/userRoutes'));
app.use('/api/waste/', require('./routes/wasteListingRoutes'));
app.use('/api/pickup-requests', require('./routes/pickupRequestRoutes'));

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
