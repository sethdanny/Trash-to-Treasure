#!/usr/bin/node
/* role model to handle role collections */

const mongoose = require('mongoose');
const roleSchema = new mongoose.Schema({
  role_name: { type: String, required: true }
});

const Role = mongoose.model('Role', roleSchema);
module.exports = Role;
