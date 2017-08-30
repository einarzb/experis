//users

class Users {

  constructor(){
    this.users = [];
    this.socketsId = [];
    this.currentGame = [];
  }

  addUsers(username, socketId){
    this.users.push(username);
    this.socketsId.push(socketId);
    console.log(this.users);
  }

  getUsers(){
    return this.users;
  }

  checkUser(username, socketId){
    for (var index = 0; index < this.users.length; index++) {
          if(username === this.users[index]){
            return true;
          }
        }
    this.addUsers(username, socketId);
   }

  findOppSocket(data){
    for (var i = 0; i < this.users.length; i++) {
      if(data === this.users[i]) {
          return(this.socketsId[i]);
      }
    }
  }

  findUserName(socketid){
    for (var i = 0; i < this.socketsId.length; i++) {
      if(socketid === this.socketsId[i]) {
          return(this.users[i]);
      }
    }
  }

  getCurrentBattle(socketid){
    for (var i = 0; i < this.currentGame.length; i++) {
      if(socketid === this.currentGame[i].player1 || socketid === this.currentGame[index].player2) {
          return(this.currentGame[i]);
      }
    }
  }


}

var users = new Users;

module.exports = users;
