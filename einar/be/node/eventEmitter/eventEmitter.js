/*event emitter:
- an event can be emitted with 0 args
- event can be String
- once function has ended  - the listeners stop listening
var results = getThem(param);

results.on('item', function(i){
///
});

results.on('done', function(){
///done with all items
});

results.on('error', function(err){
///react to error
});

- always listening for something to happen and would pass data once they are invoked.
- partial results before error

callback:

getThem(param, function(err, items){
check for error
operate an array of items
})

-request/reply
-no results until ALL results
-either error OR result
*/

//require NPM packacges
var EventEmitter = require('events').EventEmitter;

//publusher part
var getResource = function(c){
    var e = new EventEmitter();

    //iife function
    process.nextTick(function(){
        var count = 0;

        //the publisher
        e.emit('start'); //invoke emitter (now its start)

        //another iife function that acts like a for loop
        var t = setInterval(function(){
            console.log("hello");
            e.emit('data', ++count);
           console.log("goodbye");

            //if count hits the max number of times as given to function
            if(count === c){
                e.emit('end', count);
                //kills setInterval
                clearInterval(t);
            }
        },3000); //the ms definition for setInterval
    });
    return(e);
}

//main invokation
var r = getResource(5);

//subscriber listens to the events and acts as should
r.on('start', function(){
    console.log("I've started")
});

//subscriber
r.on('data', function(d){
    console.log("I've recived data number: " + d)
});

//subscriber
r.on('end', function(t){
    console.log("I'm done with " + t + " data events")
});
