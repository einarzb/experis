//require packages
var express = require('express');
var app = express();
var fs = require('fs');
var request = require('request');

// var myBmi = require('./bmi.js');
// myBmi.pipe(fs.)

//serving static files
app.use(express.static('./'));

//load website
app.get('/', function(req, res){
  res.send("./index.html");
  res.end();
});

//save data to files
app.get('/bmi', function(req, res){
  var person = req.query;
  var bmi = bmiCalc(person);

//res.write('<html>request number${total}\n</html>');
  if(person.weight > 0 && person.height > 0){
      if(person.bmi < 18.5){
        res.send(JSON.stringify("your bmi is "+ person.bmi + " and you're underweight"));
      }
      if(person.bmi > 18.5 && bmi < 25){
        res.send(JSON.stringify("your bmi is "+ person.bmi + " and you're just perfect"));
      }
      if (person.bmi > 25) {
        res.send(JSON.stringify("your bmi is "+ person.bmi + " and you're overweight"));
      }
  } else {
    alert("cant calculate bmi")
  }



  // var file = fs.createReadStream(firstName + '.txt');
  // var saveFile = fs.createWriteStream('outt.txt');
  // file.pipe(saveFile);

  var newFile = fs.writeFile("/home/einar/Desktop/einar/web/be/node/projects/bmi/users/" + person.firstname + '.txt', JSON.stringify(person), function(err){
      if(err) {
        return console.log(err);
      }
      console.log("file was written successfully");
      return;
  });

  res.end();
});

function bmiCalc(person){
    var bmi = (person.weight / (person.height/100 * person.height/100)).toFixed(2);
    person.bmi = bmi;
    return person;
};

/**************************************************************************************************************/
app.listen(3000, function(){
  console.log("rockenroll 3000");
});
