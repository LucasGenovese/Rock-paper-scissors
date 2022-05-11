const buttons = document.querySelectorAll('button');
const resultText = document.getElementById('result');
const scoreText = document.getElementById('score');
const whoWins = document.getElementById('whoWins');
let count = 0;
let score = 0;
let finished = false;

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

function playRound(finalPlayerSelection, finalComputerSelection){
    if (finalPlayerSelection == "rock"){
        if (finalComputerSelection == "rock"){
            whoWins.innerHTML = "Tie";
            return "tie";
        }
        else if (finalComputerSelection == "scissors"){
            whoWins.innerHTML = "You scored";
            return "win";
        }
        else {
            whoWins.innerHTML = "Computer scored"
            return "lose";
        }
    }

    if (finalPlayerSelection == "paper"){
        if (finalComputerSelection == "paper"){
            whoWins.innerHTML = "Tie";
            return "tie";
        }
        else if (finalComputerSelection == "rock"){
            whoWins.innerHTML = "You scored";
            return "win";
        }
        else {
            whoWins.innerHTML = "Computer scored"
            return "lose";
        }
    }

    if (finalPlayerSelection == "scissors"){
        if (finalComputerSelection == "scissors"){
            whoWins.innerHTML = "Tie";
            return "tie";
        }
        else if (finalComputerSelection == "paper") {
            whoWins.innerHTML = "You scored";
            return "win";
        }
        else {
            whoWins.innerHTML = "Computer scored"
            return "lose";
        }
    }
}

function game(playerSelection){

    if (count < 5){
        finalComputerSelection = computerSelection();
        checkWin = playRound(playerSelection, finalComputerSelection);
        if (checkWin == "win"){
            score = score + 1;
            scoreText.innerHTML = "Your score: " + score;
        }
        count = count + 1; 
    }
    
    else{
        if (score >= 3){
            resultText.innerHTML = "Player wins :D";
        } else {
            resultText.innerHTML = "Computer wins :(";
        }
        return finished = true;
    }
}

buttons.forEach((button) => {
    button.addEventListener('click', ()=> {
        game(button.id);
        if (finished == true)
        button.disabled = true;
    });
});