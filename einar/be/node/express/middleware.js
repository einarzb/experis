var express = require('express');
var app = express();

/*********************** basic routing *****************************

http://expressjs.com/en/guide/routing.html
You can provide multiple callback functions that behave like middleware to handle a request.
The only exception is that these callbacks might invoke next('route') to bypass the remaining route callbacks. (async)

Route handlers can be in the form of:
- single cb function
- an array of cb functions
- combinations of both
*/


// 1- single callback function
app.get('/example/a', function(req, res){
  res.send("Im A");
});

// 2- More than one callback function - NEXT
app.get('/example/b', function (req, res, next) {
  console.log('the response will be sent by the next function ...')
  next()
}, function (req, res) {
  res.send('Hello from B!')
});

// 3- array of callback functions
var callback01 = function(req, res, next){
  console.log("im callback number 01");
  next();
}

var callback02 = function(req, res, next){
  console.log("im callback number 02");
  next();
}

var callback03 = function(req, res){
  console.log("im callback number 03");
}

app.get('/example/c', [callback01, callback02, callback03]);

// 4- combination of independent functions and arrays of functions
var callback04 = function(req, res, next){
  console.log("im callback number 04");
  next();
}

var callback05 = function(req, res, next){
  console.log("im callback number 05");
  next();
}

app.get('/example/d', [callback04, callback05], function(req, res, next){
  console.log('the response will be sent by the next function ...')
  next()
},
function(req, res){
  res.send("hello im D")
});

/*
im callback number 04
im callback number 05
the response will be sent by the next function ...
*/

/*****************************************************************************************************/
app.listen(8000, function(){
  console.log("rockenroll 8000");
});
