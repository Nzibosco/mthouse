const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();

//dependencies for login
var session    = require('express-session')
var bodyParser = require('body-parser')
var passport   = require('passport')

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

app.use(session({ secret: 'keyboard cat',resave: true, saveUninitialized: true})); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions

//For BodyParser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Define API routes here
var routes = require("./routes");
app.use(routes);

// seed the database with initial data
var db = require("./models");
var menuSeeds = require("./scripts/seedDB.json");

var syncOptions = { force: false };

// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === 'test') {
  syncOptions.force = false;
}

db.sequelize
.sync(syncOptions)
  .then(function() {
      console.log("syncOptions.force: " + syncOptions.force);
      if(syncOptions.force === true) {
        db.Menu
        .bulkCreate(menuSeeds)
        .then(function(menuSeed) {
            console.log("success seeding menu items " + menuSeed);
        })
        .catch(err => {
            console.log(err);
        });
    }
  });
  
app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});