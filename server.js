var app = require('./express'); // creates an instance of the express lib
var express = app.express;

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// configure a public directory to host static content
app.use(express.static(__dirname + '/public/main'));

require('./public/server/services/control.service.server.js');
require ("./app.js");

var port = process.env.PORT || 3000;

app.listen(port);
