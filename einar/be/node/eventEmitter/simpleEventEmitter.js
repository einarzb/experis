//require node packacges
var EventEmitter = require('events').EventEmitter;

//defining obj
var publisher = new EventEmitter();

//subscribers

publisher.on('start', function(data){
  console.log("first data " + data);
});

publisher.on('second', function(data){
  console.log("second data " + data);
});

//invoke events
publisher.emit("start", " this data is first"); //would work
publisher.emit("end", " this data is first"); // this wouldnt be printed b/c theres no such subscriber
publisher.emit("second", " this data is second"); //would work
