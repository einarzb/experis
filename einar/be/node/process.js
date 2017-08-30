//process & stdout
//writable and readable are booleans
//stdout is basicly console.log (standard output)

var http = require('http');

http.createServer(function(req, res){
  res.writeHead(200, {'Content-Type':'text/plain'});
  res.end('hello world');
}).listen(2222, function(){
  console.log('server running');
})

console.log("im computer process id " + process.pid);
console.log("im computer memory usage")
console.log(process.memoryUsage(process.pid));

process.on("SIGINT", function(){
  console.log("you want to kill me MUDAFUCKER?");
});

process.on("SIGTERM", function(){
  console.log("you want to terminate me?");
});


//to see it working we need to run TWO terminals
// on the second terminal ====> kill -2 pid


//stdout games
console.log("stdout is writable " + process.stdout.writable); //true
console.log("stdout is readable " + process.stdout.readable); //false

process.stdout.write("hello ");
process.stdout.write("you ");
