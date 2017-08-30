var username;
var playerId;
var room = "mainChat";

class connect {
  constructor(){
    this.socket = io.connect('http://localhost:3000')
    this.select = document.getElementById("playerList")
    this.answerIfHit();
    this.endGame();
  }

  startConnection(){
    this.socket.emit('connectUsers');
  }

//connection


//for chat
socket.on('connect', function() {
   socket.emit('room', room);
});


//submit new user
document.getElementById("submitBtn").addEventListener("click", function(){
    username = document.getElementById("username").value;
    playerId = socket.id;

    //server
    socket.emit('username',username);
    socket.emit('playerId',playerId);

    //ui
    document.getElementById("greet").innerText = "Hello " + username + "," + '\n please choose an opponent';
    var loginInput = document.getElementById("username").style.visibility = "hidden";
    var subBtn = document.getElementById("submitBtn").style.visibility = "hidden";
    var chooseOpp = document.getElementById("chooseOpp").style.visibility = "visible";
});


waitingForPlayer(){
    this.socket.on('userNotVacant',username => {
        console.log("username not available");
    });
  //broadcasting so that you won't play against yourself
    this.socket.on('return_username',username => {
        populateOpponent(username);
    });
}




//select opponent to play with
  document.getElementById("selectPlayerBtn").addEventListener("click", function(){
      //ui
      var opponent = document.getElementById("playerList").value;
      document.getElementById("greet").innerText = "Hello " + username + "," + "\n you chose to play with " + opponent + "\n goodluck!";
      var chooseOpp = document.getElementById("chooseOpp").style.visibility = "hidden";
      //server
      socket.emit('opponent',opponent, username);

      //once opponent is choosen the game starts
      var oppName = opponent;
      socket.emit('startGame',oppName);
  });


  //broadcasting message to pair of rival and user
    socket.on('connectGame', (fleet) => {
      playGame(fleet);
    });


/*********** populate opponents list *************/
function populateOpponent(username){
  //ui
  var option = document.createElement("option");
  option.appendChild(document.createTextNode(username));
  this.select.appendChild(option);

  //printing messages to chat
  socket.on('message', function(data){
    var chat = document.getElementById("chat").innerText = username + ":" + data;
  })
}

function playGame(fleet){
  battleShip.setShipsInBoard(fleet);
}


function checkIfHitFromServer(cell){
  console.log("shut");
  fromServerIfHit(cell); //invoke
}
function answerIfHit(cellContent){}


// function fromServerIfHit(cell){
//   this.socket.emit('checkifHit', cell);
//
//   this.socket.on('answerIfHit', (cellContent) => {
//     battleShip.checkboardIfHit(cell, ifHit);
//   });
// }
}
