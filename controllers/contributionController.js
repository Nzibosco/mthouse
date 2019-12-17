const db = require("../models");
const Sequelize = require("sequelize") // this was created but never used.  Redundant
//const Op = Sequelize.Op;

// Defining methods for the eventController
module.exports = {

  // Post a contribution
  create: (req, res) => {
    // Save to MySQL database
    db.Contribution
      .create({
        member: req.body.member,
        contribution: req.body.contribution,
        month: req.body.month,
        year: req.body.year,
        bankSlip: req.body.bankSlip,
        dueDate: req.body.dueDate,
        paidOn: req.body.paidOn,
        delay: req.body.delay,
        fine: req.body.fine,
        UserId: req.body.userId
      })
      .then(contribution => {
        // Send created contribution to client
        res.send(contribution);
      });
  },

  // FETCH all contributions

  findAll: (req, res) => {
    db.Contribution
      .findAll()
      .then(contributions => {
        // Send all contributions to Client
        res.send(contributions);
      });
  },

  // Find a contribution by Id
  findOne: (req, res) => {
    db.Contribution
      .findByPk(req.params.id)
      .then(contribution => {
        res.send(contribution);
      })
  },

  // Update a contribution
  update: (req, res) => {
    const id = req.params.id;
    db.Contribution
      .update({
        member: req.body.member,
        contribution: req.body.contribution,
        month: req.body.month,
        year: req.body.year,
        bankSlip: req.body.bankSlip,
        dueDate: req.body.dueDate,
        paidOn: req.body.paidOn,
        delay: req.body.delay,
        fine: req.body.fine
      },
        { where: { id: id } }
      )
      .then(() => {
        res.status(200).send("updated successfully a contribution with id = " + id);
      });
  },

  // Delete contribution by Id
  delete: (req, res) => {
    const id = req.params.id;
    db.Contribution
      .destroy({
        where: { id: id }
      })
      .then(() => {
        res.status(200).send('deleted successfully contribution with id = ' + id);
      });
  }
};