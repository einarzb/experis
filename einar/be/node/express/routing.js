var express = require('express');
var app = express();

/*********************** basic routing ******************************/
/*
http://expressjs.com/en/guide/routing.html
Route paths can be strings, string patterns, or regular expressions.
 route paths can be based on string patterns. '/abc?cd+'
 route paths can be based on regex patterns. '/a/'

 */
app.get('/', function(req, res){
  res.send("basic routing");
});

app.post('/', function(req, res){
  res.send("got post req from root route");
});

app.put('/', function (req, res) {
  res.send('Got a PUT request at /')
})

app.delete('/', function (req, res) {
  res.send('Got a delete request at /')
})

/************************** route params ******************************/
/*
named url segments used to capture values specified at their position in the url.
they are being populated inside req.params Object, the name of the route is their key.
this method is used for loading middleware functions at a path for all request methods.
*/

app.get('/users/:userId/books/:bookId', function(req, res){
  res.send(req.params); //{userId:34, bookId:8989}
});

//localhost:8000/users/34/books/8989/
















app.all('/secret', function (req, res, next) {
  console.log('Accessing the secret section ...')
  res.send('shhhh secret');
  next() // pass control to the next handler
})

app.listen(8000, function(){
  console.log("rockenroll 8000");
});
