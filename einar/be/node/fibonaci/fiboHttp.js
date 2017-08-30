//require packages
var url = require("url");
var http = require('http');

//create server
http.createServer(function(req, res) {
   res.writeHead(200, { 'Content-Type': 'text/html' });
   //url query
   var query = url.parse(req.url, true).query;
  //  console.log(req.url); // /?number=4
  //  console.log(query.number); // 4
   var n = parseInt(query.number);
   res.end(query.number);
   res.url = fibo(n);
  //  res.end();
  //  console.log(res.url);
}).listen(8000);
console.log('Server running at 8000!');

function fibo(number) {
   var fibonaci = [];
   fibonaci[0] = 1;
   fibonaci[1] = 1;
   for (var index = 2; index < number; ++index) {
       fibonaci[index] = fibonaci[index - 1] + fibonaci[index - 2];
   }
   return fibonaci[index - 1];
}
