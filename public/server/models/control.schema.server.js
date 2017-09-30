var mongoose = require('mongoose');

var controlSchema = mongoose.Schema({
    number: Number,
    setNo: String,
    mapData: String,
    locationName: String,
    additionalNotes: String,
    completed: Boolean
}, {collection: "control"});

module.exports = controlSchema;