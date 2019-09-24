const mongoose = require('mongoose');
const User = mongoose.model('./models/user');

module.exports = (app) => {

  app.get(`/api/users`, async (req, res) => {
    let users = await User.find();
    return res.status(200).send(users);
  });

  app.post(`/api/users`, async (req, res) => {
    let user = await User.create(req.body);
    return res.status(201).send({
      error: false,
      user
     })
  })

  app.put(`/api/users/:id`, async (req, res) => {
    const {id} = req.params;

    let user = await User.findByIdAndUpdate(id, req.body);

    return res.status(202).send({
      error: false,
      user
    })

  });

  app.delete(`/api/users/:id`, async (req, res) => {
    const {id} = req.params;

    let user = await User.findByIdAndDelete(id);

    return res.status(202).send({
      error: false,
      user
    })

  })
  
}