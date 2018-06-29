    var mongoose = require('mongoose');
    var connection = mongoose.connect('mongodb://localhost:27017/local');
     
    module.exports = connection;