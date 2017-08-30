//require node packages
var readlineSync = require('readline-sync');

//ui function
function ticTacToe(){
  //settings
  var player = readlineSync.question('Please enter your name > ');
  console.log("hello " + player + " you will play with X");
  //2D array
  var board = [[1,2,3],
               [4,5,6],
               [7,8,9]];

  var turn = 0; //turns counter
  displayBoard();
  userTurn();//user would always start FIRST and would be assinged with X

/*NESTED FUNCTIONS*/

//user turn function
  function userTurn() {
      while(turn < 9){
      var move = readlineSync.questionInt(player + ", please choose spot on the board >> " );
                movePlayer(move,'X',0)
                }//end if
             }//end nested for loop

//computer turn function
  function computerTurn() {
      while(turn < 9) {
      var options=[];
      var k=0;

      for (var i = 0; i < board.length; i++) {
          for (var j = 0; j < board.length; j++) {
                if(!isNaN(board[i][j])) {
                  options[k]=board[i][j];
                }
              }
            }
      //MAKES SURE THE COMPUTER DOESN'T REPEAT CHOICOES OF TAKEN SPOTS
      var computerMove = options[(Math.floor(Math.random() * (k-1 + 1)))];
      console.log("\n computer made a move on cell number: " + computerMove);
      movePlayer(computerMove,'O',1);
    }
  }

//display board function
  function displayBoard(){
     console.log("-------------------------");
     for (var i = 0; i < 3  ; i++) {
          console.log(board[i]);
      }
      console.log("-------------------------");
    }

//move function!
 function movePlayer(move,xOrY,checkPlayer){
     for (var i = 0; i < board.length; i++) {
         for (var j = 0; j < board.length; j++) {

           if (move === board[i][j]) {
               board[i][j] = xOrY;
               turn++;
               //invoke checkwin function
               if(turn > 5) {checkWin();}
               displayBoard();
               if(checkPlayer){
                  userTurn();
               } else {
                  computerTurn();
                }
           }
       }
     }
 }

//checkWin
 function checkWin() {
        if (board[0][0] == board[0][1] && board[0][1] == board[0][2]) {
            if (board[0][0] == 'X') {
                console.log("Player WON!");

            }
            else {
                console.log("Computer WON!");
            }
            resetTicTacToe();
            turn = 9;
        }

        else if (board[1][0] == board[1][1] && board[1][1] == board[1][2]) {
                 if (board[1][0] == 'X') {
                console.log("Player WON!");

            }
            else {
                console.log("Computer WON!");

            }
            resetTicTacToe();
            turn = 9;
        }

        else if (board[2][0] == board[2][1] && board[2][1] == board[2][2]) {
                 if (board[2][0] == 'X') {
                console.log("Player WON!");

            }
            else {
                console.log("Computer WON!");

            }
            resetTicTacToe();
            turn = 9;
        }

        else if (board[0][0] == board[1][0] && board[1][0] == board[2][0]) {
                 if (board[0][0] == 'X') {
                console.log("Player WON!");

            }
            else {
                console.log("Computer WON!");

            }
            turn = 9;
            resetTicTacToe();
        }

        else if (board[0][1] == board[1][1] && board[1][1] == board[2][1]) {
                 if (board[0][1] == 'X') {
                console.log("Player WON!");
            }
            else {
                console.log("Computer WON!");
            }
            turn = 9;
            resetTicTacToe();

        }

        else if (board[0][2] == board[1][2] && board[1][2] == board[2][2]) {
                 if (board[0][2] == 'X') {
                console.log("Player WON!");

            }
            else {
                console.log("Computer WON!");

            }
            turn = 9;
            resetTicTacToe();
        }

        else if (board[0][0] == board[1][1] && board[1][1] == board[2][2]) {
                 if (board[0][0] == 'X') {
                console.log("Player WON!");

            }
            else {
                console.log("Computer WON!");

            }
            turn = 9;
            resetTicTacToe();

        }

        else if (board[0][2] == board[1][1] && board[1][1] == board[2][0]) {
                 if (board[0][2] == 'X') {
                console.log("Player WON!");
            }
            else {
                console.log("Computer WON!");
            }
            turn = 9;
            resetTicTacToe();

        }
        else {
            console.log("TIE!!!");
            resetTicTacToe();
        }
    }


//would reset the function
    function resetTicTacToe(ticTacToe){
      console.log("im here in reset");
      var board = [[1,2,3],
                   [4,5,6],
                   [7,8,9]];
    displayBoard();
    }

  return 0;

 //END OF UI FUNCTION
 }


    //algorithem
    // function playTicTacToe(){
    //     function newGame(){
    //         return {
    //             newGame: newGame,
    //             play:play
    //           }
    //
    //       }
    //       //invoke
    //       var game = ticTacToe()
    //       game.newGame();
    //       game.play(5);
    //
    //   }



//invoke the game
ticTacToe();
