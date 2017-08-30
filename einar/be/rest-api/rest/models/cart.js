var db = require('./db.js')

function cart(callback){
  var query = 'SELECT name FROM products INNER JOIN cart ON product_id = cart.product_id;'
  return db.query(query, function(err, sendresult, fields){
    if(err) throw err;
    callback(sendresult);
  });
}

module.exports = cart;
