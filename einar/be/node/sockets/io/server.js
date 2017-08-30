//npm
var http = require('http');
var socketio = require('socket.io');
var fs = require('fs');

var app = http.createServer(handler); //app is server
var io = socketio.listen(app);

// server checks if index is existing
var handler = function(req, res) {
    fs.readFile(__dirname + '/index.html', function(err, data) {
        if (err) {
            res.writeHead(500);
            return res.end('Error loading index.html');
        } else {
            res.writeHead(200);
            res.end(data);
        }
    });
};

/********************************************************************************/
//socket is an object
io.sockets.on('connection', function(socket) {
    setInterval(function() {
        var timestamp = Date.now();
        console.log('Emitted: ' + timestamp);
        socket.emit('timer', timestamp);
    }, 2000);
    socket.on('submit', function(data) {
        console.log('Submitted: ' + data);
    });
});

// use process.env.PORT and process.env.IP for Cloud9
// or replace with your port and (optionally) IP as necessary
app.listen(3000);

console.log('Server running!');
