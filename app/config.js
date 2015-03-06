// var Bookshelf = require('bookshelf');
var path = require('path');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/shortly2');
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
 console.log('Mongodb connection open');
});

module.exports.db = db;
