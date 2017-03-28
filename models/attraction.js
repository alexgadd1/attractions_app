var mongoose = require('mongoose');
var Schema = mongoose.Schema;

mongoose.promise = global.Promise;

var AttractionSchema = new Schema({
    attraction_name: String,
    address: String,
    admission_price: String,
    description: String,
    //?url_link: String//?
});

AttractionSchema.pre('save', function(next){
    now = new Date();
    this.updated_at = now;
    if ( !this.created_at ) {
        this.created_at = now;
    }
    next();
});
//// - first_name/last_name////
AttractionSchema.virtual('fullName').get(function () {
    return this.first_name + ' ' + this.last_name;
});

module.exports = mongoose.model("Attraction", AttractionSchema);
