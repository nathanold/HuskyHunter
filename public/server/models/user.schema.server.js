var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
    username: {type: String, unique: true, require: true},
    password: {type: String, require: true},
    firstName: String,
    lastName: String,
    roles: [{type: String, default: 'HQ', enum: ['TEAM1', 'TEAM2','TEAM3','HQ','ADMIN']}],

}, {collection: "user"});

module.exports = userSchema;