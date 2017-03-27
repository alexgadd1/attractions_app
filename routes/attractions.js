var express = require('express');
var router = express.Router();

var Attractions = require('../models/attractions');

// index authors
router.get('/', function(req, res) {
    // res.send('authors will be here');
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

// show author
router.get('/:id', function(req, res) {
    Author.findById(req.params.id)
        .exec(function(err, author) {
            if(err) console.log(err);

            console.log(author);
            //res.send(author);
            res.render('attractions/show', {
            	attractions: attractions
            });
        });
});

module.exports = router;