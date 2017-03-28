var express = require('express');
var router = express.Router();

var Attraction = require('../models/attraction');

// index attractions
router.get('/', function(req, res) {
    // res.send('attractions will be here');
    Attraction.find({})
        .exec(function(err, attractions) {
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

// create attraction
router.post('/', function(req, res) {
    var attraction = new Attraction({
        attraction_name: req.body.attraction_name,
        address: req.body.address,
        admission_price: req.body.admission_price,
        description: req.body.description
    });
    attraction.save(function(err, author){
        if (err) { console.log(err); }

        console.log(attraction);
        // res.send(attraction);
        res.render('attractions/show', {
            attraction: attraction
        });
    });
});

// show attraction
router.get('/:id', function(req, res) {
    Attraction.findById(req.params.id)
        .exec(function(err, attraction) {
            if(err) console.log(err);

            console.log(attraction);
            // res.send(attraction);
            res.render('attractions/show', {
                attraction: attraction
            });
        });
});

// edit attraction
router.get('/:id/edit', function(req,res) {
    Attraction.findById(req.params.id)
    .exec(function(err, attraction) {
        if (err) { console.log(err); }

        res.render('attractions/edit', {
            attraction: attraction
        });
    });
});

// update attraction
router.patch('/:id', function(req, res) {
    Attraction.findByIdAndUpdate(req.params.id, {
        attraction_name: req.body.attraction_name,
        address: req.body.address,
        admission_price: req.body.admission_price,
        description: req.body.description
    }, {new: true})
        .exec(function(err, attraction) {
            if (err) { console.log(err); }

            console.log(attraction);
            // res.send(attraction);
            res.render('attractions/show', {
                attraction: attraction
            });
        });
});

// delete attraction
router.delete('/:id', function(req, res) {
    Attraction.findByIdAndRemove(req.params.id)
        .exec(function(err, attraction) {
            if (err) { console.log(err); }

            console.log('Attraction deleted.');
            // res.send('Attraction deleted.');
            // redirect back to the index route
            res.redirect('/attractions'); 
        });
});

module.exports = router;
