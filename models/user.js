const mongoose = require("mongoose");
const Joi = require('joi');
const jwt = require('jsonwebtoken');
const Schema = mongoose.Schema;

const User = mongoose.model('User', new mongoose.Schema({ 
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: {type: String, required: true, minlength: 6, unique: true },
  age: { type: Number, required: true },
  feet: { type: Number, required: true },
  inches: {type: Number, required: true },
  weight: { type: Number, required: true },
  //bmi: { type: Number },
  bodyGoal: { type: String, required: true }, 
}));


function validateUser(user) {
  const schema = {
    name: Joi.string().min(1).required(),
    email: Joi.string().min(6).required(),
    password: Joi.string().min(6).required(),
    age: Joi.number().min(1).required(),
    feet: Joi.number().min(1).required(),
    inches: Joi.number().min(0).required(),
    weight: Joi.number().min(0).required(),
    //bmi: Joi.string().min(6).required(),
    bodyGoal: Joi.string().min(1).required()
  }
  return Joi.validate(user, schema);
}

module.exports.User = User;
module.exports.validate = validateUser;