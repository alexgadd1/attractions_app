var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/attraction-app');

var Attraction = require("./models/attraction");

mongoose.promise = global.Promise;

Attraction.remove({}, function(err) {
    console.log(err);
});

var saintExupery = new Attraction({
    first_name: 'Antoine',
    last_name: 'de Saint-Exupery',
    country: 'France',
    book_title: 'The Little Prince',
    publication_year: '1943'
});

var fforde = new Attraction({
    first_name: 'Jasper',
    last_name: 'Fforde',
    country: 'England',
    book_title: 'The Eyre Affair',
    publication_year: '2001'
});

var willig = new Attraction({
    first_name: 'Lauren',
    last_name: 'Willig',
    country: 'United States',
    book_title: 'The Secret History of the Pink Carnation', 	
    publication_year: '2000'
});

var lutz = new Attraction({
    first_name: 'Lisa',
    last_name: 'Lutz',
    country: 'Unites States',
    book_title: 'The Spellman Files: A Novel',
    publication_year: '2007'
});


saintExupery.save(function(err) {
  if (err) console.log(err);

  console.log('de Saint-Exupery created!');
});

fforde.save(function(err) {
  if (err) console.log(err);

  console.log('Fforde created!');
});

willig.save(function(err) {
  if (err) console.log(err);

  console.log('Willig created!');
});

lutz.save(function(err) {
  if (err) console.log(err);

  console.log('Lutz created!');
});
