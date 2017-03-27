var express = require('express');
var router = express.Router();

var Attraction = require('../models/attraction');

// index authors
router.get('/', function(req, res) {
    // res.send('attractions will be here');
    Attraction.find({})
        .exec(function(err, authors) {
            if(err) console.log(err);

            console.log(attractions);
            // res.send(attractions);
            res.render('attractions/index', {
            	attractions: attractions
            });
        });
});

// new attraction
router.get('/new', function(req, res) {
    res.render('attractions/new');
});

// show attraction
router.get('/:id', function(req, res) {
    Attraction.findById(req.params.id)
        .exec(function(err, author) {
            if(err) console.log(err);

            console.log(attraction);
            //res.send(attraction);
            res.render('attractions/show', {
            	attractions: attractions
            });
        });
});

module.exports = router;