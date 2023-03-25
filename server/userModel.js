const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// User Schema
const userSchema = new Schema({
  username: { type: String, required: true },
  days: [{ date: String, points: Number }]
});


const User = mongoose.model('users', userSchema);
module.exports = User;

