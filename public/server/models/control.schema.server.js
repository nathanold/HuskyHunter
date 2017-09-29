var mongoose = require('mongoose');

var controlSchema = mongoose.Schema({
    number: String,
    setNo: String,
    locationName: String,
    additionalNotes: String
}, {collection: "control"});

module.exports = controlSchema;