const mongoose = require("mongoose");
const Schema = mongoose.Schema;


let UserSchema = new Schema( {
  //uid: this.props.uid,
  //uid: { type: Number },
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { hash: {
    type: String
  }, type: String },
  age: { type: Number, required: true },
  feet: { type: Number, required: true },
  inches: {type: Number, required: true },
  weight: { type: Number, required: true },
  //bmi: { type: Number },
  bodyGoal: { type: String, required: true }, 
});



module.exports = User = mongoose.model('users', UserSchema);