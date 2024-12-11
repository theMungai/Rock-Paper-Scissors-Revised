const randomNumber = Math.random();

let computerMove = ""
function rock(){
    if(randomNumber >= 0 && randomNumber < 1 /3){
        computerMove = "Rock"
    }
    else if(randomNumber >= 1/3 && randomNumber < 2 /3){
        computerMove = "Paper"
    }

    else if(randomNumber >= 2/3 && randomNumber < 1){
        computerMove = "Scissors"
    }

    console.log(computerMove)

//     Comparing computerMove and your move
    let result = ""
    if(computerMove === "Rock"){
        result = "Tie"
    }
    else if(computerMove === "Paper"){
        result = "You Lose"
    }

    else if(computerMove === "Scissors"){
        result = "You win"
    }

    alert(`You picked rock. Computer picked ${computerMove}. ${result}.`);
}


