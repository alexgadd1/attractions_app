var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/attraction-app');

var Attraction = require("./models/attraction");

mongoose.promise = global.Promise;

Attraction.remove({}, function(err) {
    console.log(err);
});

var worldOfCocaCola = new Attraction({
    attraction_name: 'World of Coca Cola',
    address: '121 Baker St NW, Atlanta, GA 30313',
    admission_price: '$17 General Admission',
    description: 'The original World of Coca-Cola was located in downtown Atlanta, Georgia at 55 Martin Luther King Jr Drive, where it was adjacent to the Underground Atlanta shopping and entertainment district.  The museum opened in 1990, and would remain open until 2007.  The original World of Coca-Cola saw around nine million visitors during its years of operation, becoming the city of Atlanta most visited indoor attraction'
    //soucre https://en.wikipedia.org/wiki/World_of_Coca-Cola//
});

var centennialOlympicPark = new Attraction({
    attraction_name: 'Centennial Olympic Park',
    address: '265 Park Ave W NW, Atlanta, GA 30313',
    admission_price: 'No General Admission',
    description: 'Centennial Olympic Park is a 21-acre (85,000 m2) public park located in downtown Atlanta, Georgia owned and operated by the Georgia World Congress Center Authority. It was built by the Atlanta Committee for the Olympic Games (ACOG) as part of the infrastructure improvements for the 1996 Summer Olympics. It plays host to millions of visitors a year and several events, including a summer popular music concert series (Wednesday WindDown) and an annual Independence Day concert and fireworks display.'
    //source https://en.wikipedia.org/wiki/Centennial_Olympic_Park//
});

var georgiaAquarium = new Attraction({
    attraction_name: 'Georgia Aquarium',
    address: '225 Baker St NW, Atlanta, GA 30313',
    admission_price: '$35.95 General Admission', 	
    description: 'The Georgia Aquarium is a public aquarium in Atlanta, Georgia, USA. It is the largest aquarium in the Western Hemisphere, housing thousands of animals and representing several thousand species, all of which reside in 10 million US gallons (38,000 m3) of marine and salt water.[1][2] It was the largest aquarium in the world from its opening in 2005 until 2012, when it was surpassed by Marine Life Park in Singapore.'
    //source https://en.wikipedia.org/wiki/Georgia_Aquarium//
});

worldOfCocaCola.save(function(err) {
  if (err) console.log(err);

  console.log('World of Coca Cola created!');
});

centennialOlympicPark.save(function(err) {
  if (err) console.log(err);

  console.log('Centennial Olympic Park created!');
});

georgiaAquarium.save(function(err) {
  if (err) console.log(err);

  console.log('Georgia Aquarium created!');
});
