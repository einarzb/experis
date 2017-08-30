var mysql = require('mysql');

var connect = mysql.createConnection({
  host:'localhost',
  user:'root',
  password:'6470464',
  database:'myDB'
});

connect.connect(function(err){
  if(err) throw err;
  connect.query("SELECT * FROM students", function(err, result, fields){
    if(err)throw err;
    console.log(result);
  })
});
