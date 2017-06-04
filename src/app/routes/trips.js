const express = require('express');
const router = express.Router();
const knex = require('./db/knex');

/* GET api listing. */
router.get('/', (req, res) => {
  knex.raw(`SELECT * FROM trips`).then(function(data) {
    res.send(data)
  })
});

module.exports = router;