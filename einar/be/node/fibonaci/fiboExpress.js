//require packages
const express = require('express');
const app = express();

//initialize
var total = 0;

app.get('/', function(req, res) {
++total;
var number = parseInt(req.query.number);
var fibonum = fibo(number);

res.write('<html>request number${total}\n</html>');
if(total == 150 || total == 500 || total == 700){

console.log(total + "before");
setTimeOut(function(){
  console.log(total);
}, 3000);
res.status(200).write('<html>${fibonum}</html>');
}

res.end();
});

function fibo(number) {
   var fibonaci = [];
   fibonaci[0] = 1;
   fibonaci[1] = 1;
   for (var index = 2; index < number; ++index) {
       fibonaci[index] = fibonaci[index - 1] + fibonaci[index - 2];
   }
   return fibonaci[index - 1];
}

app.listen(8000, function(){
  console.log("im running in 8000");
});
