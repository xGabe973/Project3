const mongoose = require("mongoose");
const Schema = mongoose.Schema;


let User = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  age: { type: Number, required: true },
  height: { type: Number, required: true },
  weight: { type: Number, required: true },
  bmi: { type: Number, required: true },
  bodyGoal: { type: String, required: true }, 
  date: { type: Date, default: Date.now },
});



module.exports = mongoose.model('User', User);