const db = require("../models");
const Sequelize = require("sequelize") // this was created but never used.  Redundant
//const Op = Sequelize.Op;

// Defining methods for the eventController
module.exports = {

  // Post an event
  create: (req, res) => {
    // Save to MySQL database
    db.Event
      .create({
        name: req.body.firstName,
        detail: req.body.detail,
        streetAddress: req.body.streetAddress,
        city: req.body.city,
        state: req.body.state,
        country: req.body.country
      })
      .then(event => {
        // Send created event to client
        res.send(event);
      });
  },

  // FETCH all events

  findAll: (req, res) => {
    db.Event
      .findAll()
      .then(events => {
        // Send all events to Client
        res.send(events);
      });
  },

  // Find an event by Id
  findOne: (req, res) => {
    db.Event
      .findByPk(req.params.id)
      .then(event => {
        res.send(event);
      })
  },

  // Update an event
  update: (req, res) => {
    const id = req.params.id;
    db.Event
      .update({
        name: req.body.firstName,
        detail: req.body.detail,
        streetAddress: req.body.streetAddress,
        city: req.body.city,
        state: req.body.state,
        country: req.body.country
      },
        { where: { id: id } }
      )
      .then(() => {
        res.status(200).send("updated successfully an event with id = " + id);
      });
  },

  // Delete an event by Id
  delete: (req, res) => {
    const id = req.params.id;
    db.Event
      .destroy({
        where: { id: id }
      })
      .then(() => {
        res.status(200).send('deleted successfully an event with id = ' + id);
      });
  }
};