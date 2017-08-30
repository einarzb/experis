//npm modules
var express = require('express');
var router = express.Router();
//my models
var users = require('../models/usersModel');
var isAuthenticated = require('./auth');

//routing

//get all users
router.get('/', function(req, res, next) {
      users.users(function(dataToShow) {
          res.json(dataToShow)
      });
});

//get specific user
router.get('/:id', function(req, res, next) {
    users.specificUser(req.params.id);
  // users.specificUser(function(dataToShow) {
  //     res.json(dataToShow);
  // });
});

//add product
router.post('/', isAuthenticated, function(req, res, next){
    users.addUser(req.body);
});

//delete product
router.delete('/:id', isAuthenticated, function(req, res, next) {
    users.removeUser(req.params.id);
});

//update product
router.put('/:id', isAuthenticated, function(req, res, next) {
    users.updatePassword(req.params.id, req.body);
});

module.exports = router;
