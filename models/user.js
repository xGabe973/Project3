import firebase from '../src/firebase';
import ProtectedRoute from '../src/ProtectedRoute';
const mongoose = require("mongoose");
const Schema = mongoose.Schema;


let User = new Schema( {
  uid: this.props.uid,
  name: { type: String, required: true },
  email: { type: String, required: true },
  age: { type: Number, required: true },
  feet: { type: Number, required: true },
  inches: {type: Number, required: true },
  weight: { type: Number, required: true },
  //bmi: { type: Number, required: true },
  bodyGoal: { type: String, required: true }, 
});



module.exports = mongoose.model('User', User);