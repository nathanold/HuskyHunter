console.log("SERVER SIDE!");
var app = require('./express'); // creates an instance of the express lib
var mongoose = require('mongoose');
var connectionString = 'mongodb://localhost/huskyhunt';
if (process.env.MLAB_USERNAME) {
    connectionString = process.env.MLAB_USERNAME + ":" +
        process.env.MLAB_PASSWORD + "@" +
        process.env.MLAB_HOST + ':' +
        process.env.MLAB_PORT + '/' +
        process.env.MLAB_APP_NAME;
}

var connectionString = 'mongodb://localhost/huskyhunt'; // for local
if (process.env.MLAB_USERNAME) { // check if running remotely
    var username = process.env.MLAB_USERNAME; // get from environment
    var password = process.env.MLAB_PASSWORD;
    connectionString = 'mongodb://' + username + ':' + password;
    connectionString += 'ds139362.mlab.com:39362/heroku_nz263cn6'; // user yours
}
mongoose.connect(connectionString);
require('./public/server/services/control.service.server.js');