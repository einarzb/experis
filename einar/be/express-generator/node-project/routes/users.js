var express = require('express');
var router = express.Router();
var session = require('express-session');
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });
var jsonParser = bodyParser.json();
var login = require('./login');

router.get('/login', function(req, res, next) {

  var langTexts = {
    en: {
      dir: 'ltr',
      title: 'Login',
      username:'User',
      password:'Pass',
      submit: 'Submit',
      banner: 'hello'
    },
    he: {
      dir: 'rtl',
      title: 'התחברות',
      username:'משתמש',
      password:'ססמא',
      submit: 'שלח',
      banner: 'באנר'
    }
  }
  var texts = langTexts.he
  res.render('login', texts);
});

// Access the session as req.session
router.get('/', function(req, res, next) {
  var sess = req.session;
  if (sess.login) {
        sess.login++;
        res.setHeader('Content-Type', 'text/html')
        res.write('<p>views: ' + sess.login + '</p>')
        res.write('<p>expires in: ' + (sess.cookie.maxAge / 1000) + 's</p>')
        res.end();
  } else {
    sess.login = 1
  }
})

router.post('/login_form', urlencodedParser, function(req, res) {
  var response = {
    username:req.body.username,
    password:req.body.password,
    login:'failed',
    session:req.session
  }
var resin = login.validate(response.session,response.username,response.password);
response.redirect = resin.redirect;
response.login = resin.status;
res.send(response)
});

module.exports = router;
