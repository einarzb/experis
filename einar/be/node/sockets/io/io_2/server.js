var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);

app.use(express.static('public'));

app.get('/', function(req, res,next) {
    res.sendFile(__dirname + '/index.html');
});

//listening for connections
io.on('connection', function(client) {
    console.log('Client connected...');

    //several events
    client.on('join', function(data) {
        console.log(data);
        //send message to client
        client.emit('messages', 'hello from server')
    });
});


server.listen(4200, function(){
  console.log("4200 is running");
});
