class CommunicationLogic {
    constructor() {}

    firstTimeGetUsersFromServer(usersFromServer) {
        usersFromServer.forEach((element) => {
            this.createOption(element);
        });
    }

    createOption(element) {
        let select = document.getElementById("playerList");
        let option = document.createElement("option");
        option.appendChild(document.createTextNode(element));
        select.appendChild(option);
    }

    addNewUser() {
        let login = document.getElementById("submitNewUser");
        login.addEventListener("click", () => {
            let username = document.getElementById("username").value;
            communication.sendUserToPlayer(username);
        });
    }
    createGame() {
        let selectPlayer = document.getElementById("selectInput");
        selectPlayer.addEventListener("click", () => {
            let username = document.getElementById("playerList").value;
            communication.startGame(username); //STARTS GAME
        });
    }
    playGame(ships) {
        console.log(ships);
        battleshipGame.drawBattleship(ships);
    }

    checkIfHitFromServer(cell) {
        fromServerIfHit(cell);
    }
    answerIfHit(cellContent) {

    }

}
var cmlogic = new CommunicationLogic;


window.onload = function() {
    communication.startComunication();
    cmlogic.addNewUser();
    communication.waitingForPlayer();
    cmlogic.createGame();
}
