
var Resource = require('./resource');

var r = new Resource(5);

r.on('start', function(){
    console.log("I've started")
});

r.on('data', function(d){
    console.log("I've recived data number: " + d)
});

r.on('first', function(){
    console.log("You are number oneeee" )
});

r.on('three', function(){
    console.log("three is your lucky number")
});

r.on('end', function(t){
    console.log("I'm done with " + t + " data events")
});
