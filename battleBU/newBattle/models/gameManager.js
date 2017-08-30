
class GameInitial {

constructor(){
    this.playerId;
    this.oppId;
    this.fleetBuilder();
    this.currentPlayer;
    this.winners = {};
    this.winners[this.playerId] = 0;
    this.winners.[this.oppId] = 0;
}

//gets gamers id's
getPlayersId(id1,id2){
  this.playerId = id1;
  this.oppId = id2;
  }

/* fleet constructor */

fleetBuilder(){
//hard-coded board of user ==> sent to opponent
  this.playersList = [{
    id: this.playerId,
    fleet: {
        dakar0:[37,48,59,70],
        dakar1:[89,90],
        dakar2:[111],
        dakar3:[19,30,41],
        dakar4:[96,97,98],
        dakar5:[12,23],
        dakar6:[94,105],
        dakar7:[32,43],
        dakar8:[16,17]
      }
  },
  {
    id: this.oppId,
    fleet: {
      dakar0:[115,116,117],
      dakar1:[37,48,59],
      dakar2:[60,61,62],
      dakar3:[20,31,42],
      dakar4:[18,29],
      dakar5:[96,97],
      dakar6:[78,89,100],
      dakar7:[13,24],
      dakar8:[72]
    }
  }];
}//end func

checkGame(sockeid,cell){
  if (sockeid != this.playerId) {
    var currentboard = this.playersList[0].fleet;
    } else {
    var currentboard = this.playersList[1].fleet;
    }
    for (var key in currentboard) {
        var ship = currentboard[key];
        for (var index = 0; index < ship.length; index++) {
            if (ship[index] === cell) {
                return true;
            }
        }
    }
    return false;
}

FindOpp(socketid) {
    if (socketid === this.playerId) { //uses board of other player!//
        return this.oppId;
    } else {
        return this.playerId;
    }
}

validatePlayer(socketid) {
    var oppId = this.FindOpp(socketid);
    if (oppId !== this.currentPlayer) {
        var player = this.currentPlayer;
        this.currentPlayer = oppId;
        return player;
    }
  }

  endGame(IfHit, socketid){
    if(ifHit){
      console.log(socketid , "game over");
    }
  }
  
}//end class

module.exports =  GameInitial;
