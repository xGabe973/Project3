const {User, validate} = require ('../models/user');
const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const _ = require('lodash');



router.use(function(req, res, next) {
    console.log('hello');
    next()
});
router.post('/', async (req, res) => {
    const { error } = validate(req.body);
    console.log('body', req.body);
    if (error) {
        console.log('error', error)
        return res.status(400).send(error.details[0].message);
    }
    
    let user = await User.findOne({ email: req.body.email});
    if (user) {
        return res.status(400).send("That user already exists!");   
    } else {
         user = new User({
             uid: req.body.uid,
             name: req.body.name,
             email: req.body.email,
             password: req.body.password,
             age: req.body.age,
             feet: req.body.feet,
             inches: req.body.inches,
             weight: req.body.weight,
             bodyGoal: req.body.bodyGoal
         });
        user = new User(_.pick(req.body, ['uid', 'name', 'email', 'password', 'age', 'feet', 'inches', 'weight', 'bodyGoal']));
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(user.password, salt);
        await user.save();
        res.send(_.pick("created a new user",user, ['_id', 'uid', 'name', 'email', 'age', 'feet', 'inches', 'weight', 'bodyGoal']));
    }
});

router.get('/', async (req, res) => {
    User.find(function(err, users) {
        if (err) {
           return console.log(err);
        } else {
           return res.json(users);
        }
    });
});

router.get('/:id', async(req, res) => {
    let id = req.params.id;
    User.findById(id, function(err, user) {
        res.json(user);
    });
});

router.post('/update/:id', async (req, res) => {
    User.findById(req.params.id, function(err, user) {
        if (!user)
        res.status(404).send("data is not found");
        else
        User.weight =req.body.weight;
        User.feet =req.body.feet;
        User.inches = req.body.inches;
        User.age =req.body.age;
        User.bodyGoal =req.body.bodyGoal;

        user.save().then(user => {
            res.json("User Updated stats");
        })
        .catch(err => {
            res.status(400).send("update failed");
        });
    });
});


module.exports = router;