
var db = require('./db.js')

function products(callback){
  var query = 'select * from products where categories_id=' + 2 + ';'
  return db.query(query, function(err, sendresult, fields){
    if(err) throw err;
    callback(sendresult);
  });
}

function addProduct(product) {
   var send = `INSERT INTO products(id,categories_id,name,price,image,sku) VALUES
   (` + product.id + "," + product.categories_id + ',"' + product.name + '","' + product.price + '","' + product.image + '",' + product.sku + ');'
   db.query(send, function(err) {
       if (err) throw err;
   });
};

function changeProduct(id, item) {
  var change = 'UPDATE products SET ' + item.name + '="' + item.value + '" WHERE id=' + id + ';'
   db.query(change, function(err) {
       if (err) throw err;
   });
};

function deleteProduct(id){
    var deleteItem = 'DELETE FROM products WHERE id=' + id + ';'
    db.query(deleteItem, function(err) {
        if (err) throw err;
    });
}

module.exports = {
  products:products,
  addProduct:addProduct,
  changeProduct:changeProduct,
  deleteProduct:deleteProduct
};
