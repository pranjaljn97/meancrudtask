var express = require('express'),
 path = require('path'),
 bodyParser = require('body-parser'),
 routes = require('./server/routes/web'), 
 apiRoutes = require('./server/routes/api'), 
 connection = require("./server/config/db"); //mongodb 
 

var app = express();
 
 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
 
//  './app' for angular app html and js
app.use(express.static(path.join(__dirname, 'app')));
// setting static files location './node_modules' for libs like angular, bootstrap
app.use(express.static('node_modules'));
 
// routes
app.use('/', routes);
app.use('/api', apiRoutes);
 
// port for running server
var port = process.env.port || 3000;
 
// starting server
app.listen(port, function() {
 console.log("Server is running at : http://localhost:" + port);
});