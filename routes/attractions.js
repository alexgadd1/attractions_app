var express = require('express');
var router = express.Router();

var Attractions = require('../models/attractions');

// index authors
router.get('/', function(req, res) {
    res.send('attractions will be here');
});

module.exports = router;