var db = require('./db.js');
var sha1 = require('sha1');

//for Authentication
function usersprivate(callback){
  var query = 'SELECT username,password FROM users;'
  db.query(query, function(err, data, fields){
    if(err) throw err;
    callback(data);
  });
}

//get all users
function users(callback){
  var query = 'SELECT username,email,firstname,lastname,cart_id FROM users;'
  return db.query(query, function(err, data, fields){
    if(err) throw err;
    callback(data);
  });
}

function specificUser(id){
  var spec = 'SELECT id,username,email,firstname,lastname,cart_id FROM users WHERE id=' + id + ';'
  db.query(spec, function(err, data, fields){
    if(err) throw err;
  });
}

function addUser(user) {
   var sendUser = `INSERT INTO users(username,email,firstname,lastname,password,cart_id) VALUES
   ("` + user.username + '","' + user.email + '","' + user.firstname + '","' + user.lastname + '","' + sha1(user.password) + '","' + user.cart_id + '"' + ');'
   db.query(sendUser, function(err) {
       if (err) throw err;
   });
};

function removeUser(id) {
   var deleteUser = 'DELETE from users WHERE id=' + id + ';'
   db.query(deleteUser, function(err) {
       if (err) throw err;
   });
};

function updatePassword(id, user) {
   var updatePass = 'UPDATE users SET password="' + sha1(user.password) + '" WHERE id=' + id + ';'
   db.query(updatePass, function(err) {
       if (err) throw err;
   });
};

module.exports = {
  usersprivate:usersprivate,
  users:users,
  specificUser:specificUser,
  addUser:addUser,
  removeUser:removeUser,
  updatePassword:updatePassword
};
