const express = require("express");
const bodyParser = require('body-parser');
const mongoose = require("mongoose");
const app = express();
const PORT = process.env.PORT || 3001;
const cors = require('cors');
let User = require('./models/user');
const userRoutes = express.Router();
// Define middleware here
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(bodyParser.urlencoded({
    extended: true,
    limit: '50mb',
    parameterLimit: 100000
}))
app.use(bodyParser.json({
    limit: '50mb',
    parameterLimit: 100000
}))

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://127.0.0.1:27017", {
    useNewUrlParser: true
});
const connection = mongoose.connection;

connection.once('open', function() {
    console.log("MongoDB database connection established");
});

// Add routes, both API and view\

userRoutes.route('/').get(function(req, res) {
    User.find(function(err, users) {
        if (err) {
           return console.log(err);
        } else {
           return res.json(users)
        }
    });
});

userRoutes.route('/:id').get(function(req, res) {
    let id = req.params.id;
    User.FindById(id, function(err, user) {
        res.json(user);
    });
});

userRoutes.route('/update/:id').post(function(req, res) {
    User.findById(req.params.id, function(err, user) {
        if (!user)
        res.status(404).send("data is not found");
        else
        user.weight =req.body.weight;
        user.height =req.body.height;
        user.age =req.body.age;
        user.bodyGoal =req.body.bodyGoal;

        user.save().then(user => {
            res.json("User Updated Info");
        })
        .catch(err => {
            res.status(400).send("update not possible");
        });
    });
});

userRoutes.route('/add').post(function(req, res) {
    let user = new User (req.body);
    user.save()
    .then(user => {
        res.status(200).json({'user': 'user added successfully'});
    })
    .catch(err => {
        res.status(400).send('adding new user failed');
});
});

app.use('.users', userRoutes);

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});