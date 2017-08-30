//users

class Users {

  constructor(){
    this.users = [];
    this.socketsId = [];
  }

  addUsers(newUser){
    this.users.push(newUser.username);
    this.socketsId.push(newUser.socketId);
    console.log(this.users);
  }

  getUsers(){
    return this.users;
  }

  findOppSocket(data){
    for (var i = 0; i < this.users.length; i++) {
      if(data === this.users[i]) {
          return(this.socketsId[i]);
      }
    }
  }

  // removeUser() {
  //   console.log(this.users);
  //   this.users.splice(1, index);
  //   console.log(this.users);
  //  }

}

var users = new Users;

module.exports = users;
