let playerScore = 0,
    computerScore = 0;

let choices = ['Rock', 'Paper', 'Scissors'];

function getComputerChoice(){
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

function gameStart(){
    let playerSelection = '';
    for (let index = 0; index < 5; index++) {
        do {
            playerSelection = prompt("Pick: 'Rock', 'Paper' or 'Scissors'?").toLowerCase().trim();
        } while (!choices.includes(`${playerSelection[0].toUpperCase() + playerSelection.slice(1)}`));
        let computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection);
    }
    if (playerScore === computerScore) {
        console.log('No winners! It\'s a tie!!!')
    } else {
        if (playerScore > computerScore) {
            console.log('Player Wins!')
        } else {
            console.log('Computers Wins!')
        }
    }
}

gameStart();