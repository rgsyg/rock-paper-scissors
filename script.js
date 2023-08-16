const buttons = document.querySelectorAll('input[type="button"]');
let playerScore = 0,
    computerScore = 0;

let choices = ['Rock', 'Paper', 'Scissors'];

let firstLetterUpperCase = (str) => str[0].toUpperCase() + str.slice(1);

function getComputerChoice(){
    // double '~' means to truncate decimal places or a faster Math.floor()
    return choices[~~(Math.random() * choices.length)].toLowerCase();
}

function playRound(playerSelection, computerSelection){
    console.log(`You picked ${playerSelection}`);
    console.log(`Your opponent picked ${computerSelection}`);
    
    if (playerSelection === computerSelection){
        console.log("Tied!")
    } else {
        if (playerSelection === 'rock' && computerSelection === 'scissors'
        || playerSelection === 'paper' && computerSelection === 'rock'
        || playerSelection === 'scissors' && computerSelection === 'paper'){
            console.log(`You Win! ${firstLetterUpperCase(playerSelection)} beats ${firstLetterUpperCase(computerSelection)}`);
            playerScore++;
        } else {
            console.log(`You Lose! ${firstLetterUpperCase(computerSelection)} beats ${firstLetterUpperCase(playerSelection)}`);
            computerScore++;
        }
    }

    console.log(`${playerScore} - ${computerScore}`)
}

function startGame(){
    let playerSelection = this.value.toLowerCase();
    console.log(playerSelection);
    
    let computerSelection = getComputerChoice();

    playRound(playerSelection, computerSelection);

    if (playerScore === computerScore) {
        console.log('No winners! It\'s a tie!!!');
    } else {
        if (playerScore > computerScore) {
            console.log('Player Wins!')
        } else {
            console.log('Computers Wins!')
        }
    }
}

buttons.forEach((button) => button.addEventListener('click', startGame))