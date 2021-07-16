// api-routes.js - this file offers a set of routes for displaying and saving data to the db

// Dependencies
const Lake = require('../models/lake');

// Routes
module.exports = (app) => {
  // Search for Specific Character (or all characters) then provides JSON
  app.get('/api/:lake?', (req, res) => {
    if (req.params.lake) {
      // Display the JSON for ONLY that character.
      // (Note how we're using the ORM here to run our searches)
      Character.findOne({
        where: {
          routeName: req.params.characters,
        },
      }).then((result) => res.json(result));
    } else {
      Character.findAll().then((result) => res.json(result));
    }
  });