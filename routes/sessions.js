var express = require('express');
var router = express.Router();

// var Session = require('../models/session'); TODO CREATE SESSION FOLDER FOR MODELS

router.get('/signup', function(req, res) {
    // res.send('attractions will be here');
    res.render('sessions/signup');
});

module.exports = router;
