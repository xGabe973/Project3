const Validator = require("validator");
const isEmpty = require("is-empty");
module.exports = function validateRegisterInput(data) {
  let errors = {};
// Convert empty fields to an empty string so we can use validator functions
  data.name = !isEmpty(data.name) ? data.name : "";
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";
  data.password2 = !isEmpty(data.password2) ? data.password2 : "";
  data.age =!isEmpty(data.age) ? data.age : "";
  data.weight =!isEmpty(data.weight) ? data.weight : "";
  data.feet =!isEmpty(data.feet) ? data.feet : "";
  data.inches =!isEmpty(data.inches) ? data.inches : "";
  // data.bmi =!isEmpty(data.bmi) ? data.bmi : "";
  data.bodyGoal =!isEmpty(data.bodyGoal) ? data.bodyGoal : "";
// variable checks
  if (Validator.isEmpty(data.name)) {
    errors.name = "Name field is required";
  }
  if (Validator.isEmpty(data.age)) {
    errors.age = "Age field is required";
  }
  if (Validator.isEmpty(data.weight)) {
    errors.weight = "Weight field is required";
  }
  if (Validator.isEmpty(data.feet)) {
    errors.feet = "Feet field is required";
  }
  if (Validator.isEmpty(data.inches)) {
    errors.inches = "Inches field is required";
  }
  if (Validator.isEmpty(data.bodyGoal)) {
    errors.bodyGoal = "Body Goal field is required";
  }

// Email checks
  if (Validator.isEmpty(data.email)) {
    errors.email = "Email field is required";
  } else if (!Validator.isEmail(data.email)) {
    errors.email = "Email is invalid";
  }
// Password checks
  if (Validator.isEmpty(data.password)) {
    errors.password = "Password field is required";
  }
if (Validator.isEmpty(data.password2)) {
    errors.password2 = "Confirm password field is required";
  }
if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
    errors.password = "Password must be at least 6 characters";
  }
if (!Validator.equals(data.password, data.password2)) {
    errors.password2 = "Passwords must match";
  }
return {
    errors,
    isValid: isEmpty(errors)
  };
};