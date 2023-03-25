const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: { type: String, required: true },
  zipcode: Number,
  //days: [{day: date, sessions: [{start, end, location, uv, started: Boolean}]}]
  days: [{date: String, points: Number}]
});

const weatherSchema = new Schema({ 
  weather: String,
  uv: Number
});

// Front End:
// grab time, make api call, grab end time, calc sun exposure for the session
  // send to back to store for the user and day


// RELATIONAL THOUGHTS:

//userTable:
// username, zip, days

//


const User = mongoose.model('users', userSchema);
module.exports = User;

