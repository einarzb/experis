var request = require('request');
var fs = require('fs');
var zlib = require('zlib');

var website = request('http://www.ynet.co.il');

website.on('data', function(chunk){
  console.log("<<<<start>>>> " + chunk);
})

website.on('end', function(){
  console.log("<<<<<<<<<<<<done>>>>>>>>>");
})


//piping it stdout - is like console log
website.pipe(process.stdout);

//pipe doesnt wait for data it just start working
request('http://www.facebook.com').pipe(process.stdout);

//pipe the data onto new html and create it
request('http://www.facebook.com').pipe(fs.createWriteStream("facebook.html"));

//double piping the data onto new html and create new zip
request('http://www.facebook.com').pipe(zlib.createGzip()).pipe(fs.createWriteStream("facebook.html.zip"));
