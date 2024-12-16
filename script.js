
function playGame(playerMove) {
    const computerMove = randomMove()
    if(playerMove === "rock"){
        if(computerMove === "Rock"){
            result = "Tie"
        }
        else if(computerMove === "Paper"){
            result = "You Lose"
        }

        else if(computerMove === "Scissors"){
            result = "You win"
        }
    }

    else if(playerMove === "paper"){
        if(computerMove === "Rock"){
            result = "You win"
        }

        else if(computerMove === "Paper"){
            result = "Tie"
        }
        else if(computerMove === "Scissors"){
            result = "You Lose"
        }
    }

    else if(playerMove === "scissors"){
        if(computerMove === "Rock"){
            result = "You Lose"
        }

        else if(computerMove === "Paper"){
            result = "You win"
        }

        else if(computerMove === "Scissors"){
            result = "Tie"
        }
    }

    alert(`You picked ${playerMove}. Computer picked ${computerMove}. ${result}.`);
}

function randomMove(){
    const randomNumber = Math.random();

    let computerMove = ""

    if(randomNumber >= 0 && randomNumber < 1 /3){
        computerMove = "Rock"
    }
    else if(randomNumber >= 1/3 && randomNumber < 2 /3){
        computerMove = "Paper"
    }

    else if(randomNumber >= 2/3 && randomNumber < 1){
        computerMove = "Scissors"
    }

    return computerMove;

}

let score = {

}

let result = ""
function rock(playerMove){
    playGame("rock");
}

function paper(playerMove){
    playGame("paper");
}

function scissors(){
    playGame("scissors");
}


