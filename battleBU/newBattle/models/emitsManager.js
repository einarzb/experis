//192.168.0.254:3000
var gamers = require('./gameManager');
var users = require('./usersManager');

var room = "mainChat";

var emitManager = function(socket, io) {
  socket.on('connectUsers', (dataBeforeConnection) => {
      var loadUsers = users.getUsers();
      socket.emit('connectionIsOn', loadUsers);
      addUsers(socket);
      loadGame(socket,io)
  });
}
/**** SENDS USERNAME AND ID INVOKED BY SUBMIT BUTTON****/
  function addUsers(socket){
    socket.on('username',(username) => {
      var checkIfUsernameExist = users.checkUser(username,socket.id);
      if(!checkIfUsernameExist) {
        socket.broadcast.emit('return_username',username);
      } else {
        socket.emit('usernameNotFound',username);
      }
    });
}

/**** communication between two users (player and rival) INVOKED BY SELECT ****/
function loadGame(socket,io){
    socket.on('startGame',(oppName) => {
      console.log(oppName + " is the opponent that was selected - let the game begin");
      /*get sockets*/
      var socketOpponent = users.findOppSocket(oppName);
      /*send ids to game initialize*/
      var setGamers = gamers.getPlayersId(socketOpponent, socket.id);
      var game = setGamers.playersList;
      users.setGamers.push(setGamers);
      setGamers.currentPlayer = game[0].id;
      //opponent address
      io.to(game[0].id).emit('connectGame', game[0].board);
      //user address
      io.to(game[1].id).emit('connectGame', game[1].board);
    });

      socket.on('checkifHit', (cell) => {
        var currentGame = users.getCurrentBattle(socket.id);
        if(currentGame.validatePlayer(socket.id)){
          var opponent = currentGame.FindOpp(socket.id);
          var check = currentGame.checkGame(socket.id,cell-100);
          if(!currentGame.endGame(check,socket.id)){
             socket.emit('answerIfHit', {check,cell});
             io.to(opponent).emit('answerHitFromOpponent',{check,cell})
          } else {
            socket.emit('answerIfHit', {check,cell});
            io.to(opponent).emit('answerHitFromOpponent',{check,cell})
            socket.emit('endGame', users.findUserName(socket.id));
            io.to(opponent).emit('endGame', users.findUserName(opponent))
          }
        }
      });
}

  socket.on('playerId', function(playerId){
      console.log('userID is: ' + playerId);
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


module.exports = emitManager;
