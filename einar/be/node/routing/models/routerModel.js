var url = require('url');

var registeredUrl = {};

//certain url will get certain function
function register(url, func) {
 registeredUrl[url] = func;
}


function route(req,res){
  var pathname = url.parse(req.url).pathname;
  if(registeredUrl[pathname] !== undefined) {
    //invoke function
    registeredUrl[pathname](req,res);
  } else {
    res.writeHead(404,{'Content-type': 'text/html'});
    res.write('<h2>404</h2>');
    res.end();
  }
}

module.exports = {
  register: register,
  route: route
}
