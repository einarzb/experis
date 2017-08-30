//require packages
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var loginCheck = false;
var jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({ extended: false });
//parse data to object

var session = require('express-session');
//require module
var auth = require('./models/auth')

//middleware
//saves user session
app.use(session({
   secret: 'thisIsASecret',
   cookie: {maxAge: 60000} //cookie would live for one second
 }));

//serve static files
app.use(express.static('public/js'));


 //check if user is logged in
 app.use(function(req,res,next){
   console.log(req.url);
   auth.loggedInCheck(req,res);
   next();
 });


//routing pages

app.get('/login', function(req, res){
  res.sendFile(__dirname + '/public/login.html');
})

// Access the session as req.session
app.get('/', function(req, res, next) {
  var sess = req.session;
  console.log(sess);
  if (sess.login) {
        sess.login++;
        res.setHeader('Content-Type', 'text/html')
        res.write('<p>views: ' + sess.login + '</p>')
        res.write('<p>expires in: ' + (sess.cookie.maxAge / 1000) + 's</p>')
        res.end();
  } else {
    sess.login = 1
    res.end('welcome to the session demo. refresh!')
    console.log(sess);
  }
})

app.get('/about', function (req, res) {
    res.sendFile(__dirname + '/public/about.html');
});

app.post('/login_form', urlencodedParser, function(req, res) {
  var response = {
    username:req.body.username,
    password:req.body.password,
    login:'failed'
  }
var resin = auth.validate(response.username,response.password);
response.redirect = resin.redirect;
response.login = resin.status;
res.send(response)
});

// app.get('/error', function(req, res) {
//   res.send("404");
// });

//rockenroll
app.listen(8000, function() {
  console.log("rockenroll authentication 8000");
})
