var http = require('http');
var fs = require('fs');

//models
var router = require('./models/routerModel');
var pages = require('./models/pagesModel');

//setting server
const hostname = 'localhost', port = 8000;
http.createServer(OnRequest).listen(port, hostname, function(){
  console.log("rockenroll on " + port);
});

function OnRequest (req, res) {
  router.route(req, res);
};

// Handle routes here, put static pages in ./public and they will server
router.register('/', pages.mainPage);
router.register('/hello', pages.helloPage);
