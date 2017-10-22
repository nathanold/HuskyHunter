console.log("SERVER SIDE!");
var app = require('./express'); // creates an instance of the express lib
var mongoose = require('mongoose');
var connectionString = 'mongodb://localhost/huskyhunt';
if (process.env.MLAB_USERNAME) { // check if running remotely
    connectionString += 'mongodb://' + process.env.MLAB_USERNAME + ':' + process.env.MLAB_PASSWORD + '@ds229835.mlab.com:29835/heroku_ncwj1xvn';
}
mongoose.connect(connectionString);
require('./public/server/services/control.service.server.js');