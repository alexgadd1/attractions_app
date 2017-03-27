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

// edit attraction
router.get('/:id/edit', function(req,res) {
    Attraction.findById(req.params.id)
    .exec(function(err, author) {
        if (err) { console.log(err); }

        res.render('authors/edit', {
            attraction: attraction
        });
    });
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

// create attraction
router.post('/', function(req, res) {
    var attraction = new Attraction({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        country: req.body.country,
        book_title: req.body.book_title,
        publication_year: req.body.publication_year
    });
    attraction.save(function(err, attraction){
        if (err) { console.log(err); }

        console.log(attraction);
        //res.send(attraction);
        res.render('attraction/show', {
        		attraction: attraction
        })
    });
});

// update attraction
router.patch('/:id', function(req, res) {
    Attraction.findByIdAndUpdate(req.params.id, {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        country: req.body.country,
        book_title: req.body.book_title,
        publication_year: req.body.publication_year
    }, {new: true})
        .exec(function(err, author) {
            if (err) { console.log(err); }

            console.log(attraction);
            //res.send(attraction);
        	res.render('attractions/show', {
        	attraction: attraction
        });
});

// delete attraction
router.delete('/:id', function(req, res) {
    Attraction.findByIdAndRemove(req.params.id)
        .exec(function(err, author) {
            if (err) { console.log(err); }

            console.log('Attraction deleted.');
            //res.send('Attraction deleted.');  
            //redirect back to the index route
            res.redirect('/attractions');
        });
});

module.exports = router;