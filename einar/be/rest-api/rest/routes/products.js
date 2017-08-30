
var express = require('express');
var router = express.Router();
var products = require('../models/productsModel')


/* GET home page. */
router.get('/', function(req, res, next) {
    function callback(whatToGet) {
        res.json(whatToGet)
    }
    products(callback);
});

//find by id
router.get('/:id',function(req, res, next) {
    function callback(whatToGet) {
        res.json(whatToGet[req.params.id])
    }
    products.products(callback);
});


//add product
router.post('/', function(req, res, next){
    products.addProduct(req.body);
});

//put update
router.put('/:id',function(req, res, next) {
    products.changeProduct(req.params.id, req.body);
});

//delete
router.delete('/:id',function(req, res, next) {
    products.deleteProduct(req.params.id);
});


module.exports = router;
