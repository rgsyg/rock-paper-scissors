let playerScore = 0,
    computerScore = 0;

function getComputerChoice(){
    let choices = ['Rock', 'Paper', 'Scissors'];
    return choices[Math.floor(Math.random() * choices.length)].toLowerCase();
}

function playRound(playerSelection, computerSelection){
    console.log(`You picked ${playerSelection}`);
    console.log(`Your opponent picked ${computerSelection}`);
    if(playerSelection === computerSelection){
        console.log("Tied!")
    }
    else{
        if(playerSelection === 'rock' && computerSelection === 'scissors'
        || playerSelection === 'paper' && computerSelection === 'rock'
        || playerSelection === 'scissors' && computerSelection === 'paper'){
            console.log(`You Win! ${playerSelection[0].toUpperCase() + playerSelection.slice(1)} beats ${computerSelection[0].toUpperCase() + computerSelection.slice(1)}`);
            playerScore++;
        } else {
            console.log(`You Lose! ${computerSelection[0].toUpperCase() + computerSelection.slice(1)} beats ${playerSelection[0].toUpperCase() + playerSelection.slice(1)}`);
            computerScore++;
        }
    }
    console.log(`${playerScore} - ${computerScore}`)
}

let playerSelection = prompt("Pick: 'Rock', 'Paper' or 'Scissors'?").toLowerCase().trim();
let computerSelection = getComputerChoice();

playRound(playerSelection, computerSelection);