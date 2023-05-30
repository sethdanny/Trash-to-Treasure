const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
  user_id: { type: mongoose.Schema.Types.ObjectId, default: mongoose.Types.ObjectId },
  role_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Role', required: true },
  username: { type: String, required: true },
  password: { type: String, required: true, unique: true },
  full_name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  address: { type: String, required: true },
  contact_number: { type: Number, required: true },
  profilePicture: { type: String },
  registration_date: { type: Date, default: Date.now },
  updated_date: { type: Date }

});

const User = mongoose.model('User', userSchema);
module.exports = User;
