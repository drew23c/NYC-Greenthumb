var express = require('express');
var router = express.Router();
let db = require('../db/queries');

/* GET home page. */
router.get('/all', db.allLocations);
router.get('/search/:address', db.searchByAddress);
router.get('/boro/:boro', db.filterByBorough);

module.exports = router;
