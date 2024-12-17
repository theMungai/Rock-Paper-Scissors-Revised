
const score = JSON.parse(localStorage.getItem("score"))



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

 // Updating scores
    if(result === "You win"){
        score.wins += 1;
    }
    else if(result === "You Lose"){
        score.losses += 1;
    }
    else if(result === "Tie"){
        score.ties += 1
    }

    // Saving score so that it does not get reset when we refresh the page

    localStorage.setItem("score", JSON.stringify(score))

    alert(`You picked ${playerMove}. Computer picked ${computerMove}. ${result}.
Wins : ${score.wins}, Losses : ${score.losses}, Ties : ${score.ties}
        `);
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


let result = ""
function rock(){
    playGame("rock");
}

function paper(){
    playGame("paper");
}

function scissors(){
    playGame("scissors");
}



// Reset Score
document.querySelector("#reset-btn").addEventListener("click", () => {
    score.wins = 0;
    score.losses = 0;
    score.ties = 0
});
 


