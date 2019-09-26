const db = require("../models");
const Sequelize = require("sequelize") // this was created but never used.  Redundant
//const Op = Sequelize.Op;

// Defining methods for the userController
module.exports = {

  // Post a user
  create: (req, res) => {
    // Save to MySQL database
    db.User
      .create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        phone: req.body.phone,
        streetAddress: req.body.streetAddress,
        city: req.body.city,
        state: req.body.state,
        country: req.body.country
        // detail: req.body.detail,
        // image: req.body.image,
        // price: req.body.price
      })
      .then(user => {
        // Send created user to client
        res.send(user);
      });
  },

  // FETCH all users

  findAll: (req, res) => {
    db.User
      .findAll()
      .then(users => {
        // Send all users to Client
        res.send(users);
      });
  },

  // Find a user by Id
  findOne: (req, res) => {
    db.User
      .findByPk(req.params.id)
      .then(user => {
        res.send(user);
      })
  },

  // Update a user
  update: (req, res) => {
    const id = req.params.id;
    db.User
      .update({firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        phone: req.body.phone,
        streetAddress: req.body.streetAddress,
        city: req.body.city,
        state: req.body.state,
        country: req.body.country},
        { where: { id: id } }
      )
      .then(() => {
        res.status(200).send("updated successfully a user with id = " + id);
      });
  },

  // Delete a user by Id
  delete: (req, res) => {
    const id = req.params.id;
    db.User
      .destroy({
        where: { id: id }
      })
      .then(() => {
        res.status(200).send('deleted successfully a user with id = ' + id);
      });
  }
};