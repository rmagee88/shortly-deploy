// var Bookshelf = require('bookshelf');
var path = require('path');
var mongoose = require('mongoose');


var db = mongoose.createConnection('mongodb://localhost:27017');
var Schema = mongoose.Schema, ObjectId = Schema.ObjectId;

var UrlsSchema = new Schema({
  id: ObjectId,
  url: String,
  base_url: String,
  code: String,
  title: String,
  visits: Number,
  timestamps: Date.now
});

var UsersSchema = new Schema({
  id: ObjectId,
  username: String,
  password: String,
  timestamps: Date.now
});

module.exports.db = db;
module.exports.UrlsSchema= UrlsSchema;
module.exports.UsersSchema = UsersSchema;

// password auth http://devsmash.com/blog/password-authentication-with-mongoose-and-bcrypt
// password auth part 2 http://blog.mongodb.org/post/34225138670/password-authentication-with-mongoose-part-2


// var db = Bookshelf.initialize({
//   client: 'sqlite3',
//   connection: {
//     host: '127.0.0.1',
//     user: 'your_database_user',
//     password: 'password',
//     database: 'shortlydb',
//     charset: 'utf8',
//     filename: path.join(__dirname, '../db/shortly.sqlite')
//   }
// });

// db.knex.schema.hasTable('urls').then(function(exists) {
//   if (!exists) {
//     db.knex.schema.createTable('urls', function (link) {
//       link.increments('id').primary();
//       link.string('url', 255);
//       link.string('base_url', 255);
//       link.string('code', 100);
//       link.string('title', 255);
//       link.integer('visits');
//       link.timestamps();
//     }).then(function (table) {
//       console.log('Created Table', table);
//     });
//   }
// });

// db.knex.schema.hasTable('users').then(function(exists) {
//   if (!exists) {
//     db.knex.schema.createTable('users', function (user) {
//       user.increments('id').primary();
//       user.string('username', 100).unique();
//       user.string('password', 100);
//       user.timestamps();
//     }).then(function (table) {
//       console.log('Created Table', table);
//     });
//   }
// });


