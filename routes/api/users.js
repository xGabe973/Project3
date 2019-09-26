const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");
// Load input validation
const validateRegisterInput = require("../../validation/register");
const validateLoginInput = require("../../validation/login");

router.get('/', (req, res) => {
    User.find()
    .then(users => res.json(users));
})

router.post("/register", (req, res) => {
    // Form validation
  const { errors, isValid } = validateRegisterInput(req.body);
  console.log(req.body)
  // Check validation
    if (!isValid) {
      return res.status(400).json(errors);
    }
  User.findOne({ email: req.body.email }).then(user => {
      if (user) {
        return res.status(400).json({ email: "Email already exists" });
      } else {
        const newUser = new User({
          name: req.body.name,
          email: req.body.email,
          password: req.body.password,
          age: req.body.age,
          weight: req.body.weight,
          feet: req.body.feet,
          inches: req.body.inches,
          //bmi: req.body.bmi,
          bodyGoal: req.body.bodyGoal
        });
  // Hash password before saving in database
        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(newUser.password, salt, (err, hash => {
            if (err)
            console.log('err', err);
            console.log('newuser', newUser);
            console.log('pword',newUser.password);
            console.log('salt', salt);
            
            newUser.password = hash;
            console.log('hash', hash);
            newUser
              .save()
              .then(user => res.json({
                user: {
                  id: user.id,
                  name: user.name,
                  email:user.email,
                  age: user.age,
                  feet: user.feet,
                  inches: user.inches,
                  weight: user.weight,
                  bodyGoal: user.bodyGoal
                }}))
              .catch(err => console.log('save err', err));
          }));
        });
    };
});
});

  router.post("/login", (req, res) => {
    // Form validation
  const { errors, isValid } = validateLoginInput(req.body);
  // Check validation
    if (!isValid) {
      return res.status(400).json(errors);
    }
  const email = req.body.email;
    const password = req.body.password;
  // Find user by email
    User.findOne({ email }).then(user => {
      // Check if user exists
      if (!user) {
        return res.status(404).json({ emailnotfound: "Email not found" });
      }
  // Check password
      bcrypt.compare(password, user.password).then(isMatch => {
        if (isMatch) {
          // User matched
          // Create JWT Payload
          const payload = {
            id: user.id,
            name: user.name
          };
  // Sign token
          jwt.sign(
            payload,
            keys.secretOrKey,
            {
              expiresIn: 31556926 // 1 year in seconds
            },
            (err, token) => {
              res.json({
                success: true,
                token: "Bearer " + token
              });
            }
          );
        } else {
          return res
            .status(400)
            .json({ passwordincorrect: "Password incorrect" });
        }
      });
    });
  });

// Load User model
const User = require("../../models/User");

module.exports = router;