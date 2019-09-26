const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require("mongoose");
const userRoutes = express.Router();
const PORT = process.env.PORT || 4000;
const path = require('path');
const passport = require('passport');
// const proxy = require('http-proxy-middleware');
let users = require('./routes/api/users');

// app.use(proxy('/api/*', { target: 'http://localhost:4000' }));

// Define middleware here
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(bodyParser.urlencoded({
    extended: false
}))
app.use(bodyParser.json({}))
app.use(passport.initialize());
require("./config/passport")(passport);
app.use("/api/users", users);
//Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}


// Connect to the Mongo DB
mongoose.Promise=global.Promise;
mongoose.connect(process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/project3", {
    useNewUrlParser: true
});
const connection = mongoose.connection;

connection.once('open', function() {
    console.log("MongoDB database connection established");
});



userRoutes.use(function(req, res, next) {
    console.log('hello');
    next()
});
// Add routes, both API and view
userRoutes.route('/').get(function(req, res) {
    User.find(function(err, users) {
        if (err) {
           return console.log(err);
        } else {
           return res.json(users);
        }
    });
});

userRoutes.route('/:id').get(function(req, res) {
    let id = req.params.id;
    User.findById(id, function(err, user) {
        res.json(user);
    });
});

userRoutes.route('/add').post(function(req, res) {
    console.log(req.body)
    let user = new User(req.body);
    user.save()
    .then(user => {
        res.status(200).json({'user': 'user added successfully'});
    })
    .catch(err => {
        console.log(err);
        res.status(400).send('adding new user failed');
    });
});

userRoutes.route('/update/:id').post(function(req, res) {
    User.findById(req.params.id, function(err, user) {
        if (!user)
        res.status(404).send("data is not found");
        else
        user.weight =req.body.weight;
        user.feet =req.body.feet;
        user.inches = req.body.inches;
        user.age =req.body.age;
        user.bodyGoal =req.body.bodyGoal;

        user.save().then(user => {
            res.json("User Updated stats");
        })
        .catch(err => {
            res.status(400).send("update failed");
        });
    });
});


// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});