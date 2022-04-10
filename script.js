// console.log("Welcome to Rock, Paper, Scissors \n Select: \n 1.Rock \n 2.Paper \n 3.Scissors");

function computerSelection (){
    let computerRandom = Math.floor(Math.random() * 3);
    let computerChoice;
    switch (true){
        case computerRandom == 0:
            computerChoice = "rock";
            break;
        case computerRandom == 1:
            computerChoice = "paper";
            break;
        case computerRandom == 2:
            computerChoice = "scissors";
            break;
    }
    return computerChoice;
}

function playerSelection (userInput){
    userInput = userInput.toLowerCase();
    return userInput;
}

function playRound(finalPlayerSelection, finalComputerSelection){
    if (finalPlayerSelection == "rock"){
        if (finalComputerSelection == "rock"){
            console.log("Tie");
            return "tie";
        }
        else if (finalComputerSelection == "scissors"){
            console.log("You win!");
            return "win";
        }
        else {
            console.log("You lose :(");
            return "lose";
        }
    }

    if (finalPlayerSelection == "paper"){
        if (finalComputerSelection == "paper"){
            console.log("Tie");
            return "tie";
        }
        else if (finalComputerSelection == "rock"){
            console.log("You win!");
            return "win";
        }
        else {
            console.log("You lose :(")
            return "lose";
        }
    }

    if (finalPlayerSelection == "scissors"){
        if (finalComputerSelection == "scissors"){
            console.log("Tie");
            return "tie";
        }
        else if (finalComputerSelection == "paper") {
            console.log("You win!");
            return "win";
        }
        else {
            console.log("You lose :(");
            return "lose";
        }
    }
}

function game(){

    let score = 0; 

    for (let i = 0; i <5; i++){
        userInput = prompt("Input rock, paper or scissors");
        finalPlayerSelection = playerSelection(userInput);
        finalComputerSelection = computerSelection();

        checkWin = playRound(finalPlayerSelection, finalComputerSelection);
        if (checkWin == "win"){
            score = score + 1;
        }
    }

    if (score >= 3){
        console.log("Player wins!");
    } else {
        console.log("Computer wins :(");
    }

}

game();