var bcrypt = require('bcrypt-nodejs');
var Promise = require('bluebird');
var mongoose = require('mongoose');

var UsersSchema = mongoose.Schema({
  username: String,
  password: String
});

var User = mongoose.model('User', UsersSchema);
// User.methods.hashPassword = function(){

// };
User.comparePassword = function(inputpassword, savepassword, callback){
  bcrypt.compare(inputpassword, savepassword, function(err, isMatch) {
    if (err) return callback(err);
    callback(isMatch);
  });
};

UsersSchema.pre('save', function(next){
  var cipher = Promise.promisify(bcrypt.hash);
  return cipher(this.password, null, null).bind(this)
    .then(function(hash) {
      this.password = hash;
      next();
  });
});

module.exports = User;
