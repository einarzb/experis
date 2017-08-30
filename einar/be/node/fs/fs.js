const fs = require('fs');

//async
fs.readFile('input.txt', function(err, data){
  if(err){
    return console.log(err);
  }
  console.log("async read: " + data.toString());
})

//sync
var data = fs.readFileSync('input.txt');
console.log("Synchronous read: " + data.toString());
console.log("Program Ended");
