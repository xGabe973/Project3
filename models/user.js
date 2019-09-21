const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true},
  age: { type: Number, required: true },
  height: { type: Number, required: true},
  weight: { type: Number, required: true},
  bmi: { type: Number, required: true},
  bodyType: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

const User = mongoose.model("User", userSchema);

module.exports = User = mongoose.model("users, UserSchema");
