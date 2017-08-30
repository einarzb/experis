var mysql = require('mysql');

var db = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'6470464',
    database:'shopDB'
});
db.connect();
module.exports = db;

//comp at home
/*
  password:'tokyo1984forever'
*/
