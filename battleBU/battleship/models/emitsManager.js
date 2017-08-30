//192.168.0.254:3000
var connection = require('./socketManager');
var gamers = require('./gameManager');
var users = require('./usersManager');

var room = "mainChat";

var emitManager = function(socket, io) {

/**** SENDS USERNAME AND ID INVOKED BY SUBMIT BUTTON****/

  socket.on('username', function(username){
      socket.broadcast.emit('return_username',username);
      var newUser = {};
      newUser.username = username;
      newUser.socketId = socket.id;
      var userForServer = users.addUsers(newUser);
  });

  socket.on('playerId', function(playerId){
      console.log('userID is: ' + playerId);
  });

/**** communication between two users (player and rival) INVOKED BY SELECT ****/
  socket.on('startGame',(data) => {
    console.log(data + " is the opponent that was selected - let the game begin");
    var usersConnected = users.getUsers();
    /*get sockets*/
    var socketOpponent = users.findOppSocket(data);
    var userId = socket.id;
    /*send ids to game initialize*/
    var sendUserIdToGame = gamers.getPlayersId(socketOpponent, userId);

    //opponent address
    io.to(socketOpponent).emit('connectGame', gamers.playerFleet);
    //user address
    io.to(socket.id).emit('connectGame', gamers.opponentFleet);
  });

 // opponent choosen!
  socket.on('opponent', function(opponent, username){
      var clients = users.getUsers();
      console.log('status: opponent is ' + opponent + ' playing against ' + username);
    });


/**** disconnect WHEN PAGE REFRESH ****/
  socket.on('disconnect', function(){
    console.log('user ' + socket.id + ' disconnected');
  });



  // //chat room - users auto join it
  //   socket.on('room', function(room){
  //     socket.join(room)
  //   });
  // //the text in chat
  //   socket.in(room).emit('message', 'whats up')

}



module.exports = emitManager;
