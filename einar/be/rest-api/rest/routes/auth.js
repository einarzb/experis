var users = require('../models/usersModel');
var sha1 = require('sha1');

function isAuthenticated (req, res, next) {

   function callback(usersInMemory) {
      console.log(usersInMemory);
      console.log("yoyoyoyoyo");
       //Split the header and grab the base64 encoded username:password and decode it with toSTring

       var auth = new Buffer(req.headers.authorization.split(' ')[1], 'base64').toString();
       auth = auth.split(":");
       auth[2] = auth[0] + ":" + sha1(auth[1]);

       if (req.headers.authorization && req.headers.authorization.search('Basic ') === 0) {
           // fetch login and password
           for (var k = 0; k < usersInMemory.length; ++k) {
               console.log('' + usersInMemory[k].username + ':' + usersInMemory[k].password);
               if (auth[2] == '' + usersInMemory[k].username + ':' + usersInMemory[k].password) {
                   next();
                   return;
               }
           }
       }
       //if header is not present you'll get 401 error
       console.log('Unable to authenticate user');
       res.header('WWW-Authenticate', 'Basic realm="Admin Area"');
       if (req.headers.authorization) {
           setTimeout(function() {
               res.send('Authentication required', 401);
           }, 5000);
       } else {
           res.send('Authentication required', 401);
       }
   }
   users.usersprivate(callback);
}


module.exports = isAuthenticated;
