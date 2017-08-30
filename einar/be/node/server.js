//core modules
const http = require('http');
//files work module 
const fs = require('fs');
//operating system module
const os = require('os');

//setting server
const hostname = '127.0.0.1';
const port = 3000;

//os module
const user = os.userInfo();
console.log(user);
/*{
  uid: 501,
  gid: 20,
  username: 'EinarBarzilay',
  homedir: '/Users/EinarBarzilay',
  shell: '/bin/bash'
}*/

//fs module
//add text to file
fs.appendFile('./greet.txt', 'hi ' + user.username + '!\n', function(err){
  if(err){
    console.log(err);
  }
});

//read html file and present it at the browser
fs.readFile('index.html', function(err, html){
  if(err){
    throw err;
  } //else run the server

  const server = http.createServer(function(req, res){
      res.statusCode = 200;
      res.setHeader('Content-type', 'text/html');
      res.write(html);
      res.end();
  });
  server.listen(port, hostname, function(){
    console.log("server is running on port " + port);
  })
})
