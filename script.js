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
console.log(computerSelection());


// let userInput = prompt("Input rock, paper or scissors");