//npm modules
var express = require('express');
var router = express.Router();

var cart = require('../models/cart');

router.get('/', function(req, res, next) {
      function callback(itemsToGet) {
          res.json(itemsToGet)
      }
      cart(callback)
});

module.exports = router;
