const mongoose = require("mongoose");
const Schema = mongoose.Schema;


let Fbuser = new Schema( {
  uid: this.props.uid,
  name: { type: String, required: true },
  email: { type: String, required: true },
});



module.exports = mongoose.model('Fbuser', Fbuser);