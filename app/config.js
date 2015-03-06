// var Bookshelf = require('bookshelf');
var path = require('path');
var mongoose = require('mongoose');
var mongoUri = process.env.CUSTOMCONNSTR_MONGOLAB_URI || 'mongodb://localhost/shortly2';
mongoose.connect(mongoUri);
// mongodb://MongoLab-u:N6O3Vyk8nPghjdGqFSuwbsoT98AcRDHLY062Dt5VMYM-@ds045097.mongolab.com:45097/MongoLab-u

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
 console.log('Mongodb connection open');
});

module.exports.db = db;
