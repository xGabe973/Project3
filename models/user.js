const mongoose = require("mongoose");
const Schema = mongoose.Schema;
import firebase from "../src/firebase";

const userSchema = new Schema({
  uid: { type: Number, required: true },
  name: { type: String, required: true },
  age: { type: Number, required: true },
  height: { type: Number, required: true},
  weight: { type: Number, required: true},
  bmi: { type: Number, required: true},
  bodyType: { type: String, required: true }, 
  date: { type: Date, default: Date.now },
});

const User = mongoose.model("User", userSchema);

module.exports = User;