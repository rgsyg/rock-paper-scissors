const buttons = document.querySelectorAll('input[type="button"]');
const playerChoice = document.querySelector('.player-choice');
const computerChoice = document.querySelector('.computer-choice');
const container = document.querySelector('.rps-container');
const scores = document.querySelector('.scores');
const playerScoreText = scores.querySelector('.player-score');
const computerScoreText = scores.querySelector('.computer-score');

const statusText = document.createElement('h1');
const choices = ['Rock', 'Paper', 'Scissors'];

let playerScore = 0,
    computerScore = 0;

function getComputerChoice() {
    // double '~' means to truncate decimal places or a faster Math.floor()
    return choices[~~(Math.random() * choices.length)];
}

function displayStatus(text) {
    statusText.textContent = text;
    statusText.style = `
    font-size: 3em; font-weight: bold; flex: 1;
    display: flex; align-items: center;
    justify-content: center; margin-top: 25px;`;
    container.insertBefore(statusText, scores);
}

function reset() {
    statusText.style.display = 'none';
    [playerScore, computerScore] = [0, 0];
    [playerScoreText.textContent, computerScoreText.textContent] = [0, 0];
    buttons.forEach((button) => button.disabled = false);
    playerChoice.innerHTML = ``;
    computerChoice.innerHTML = ``;
}

function disableButtons() {
    buttons.forEach((button) => button.disabled = true);
}

function playRound(playerSelection, computerSelection) {
    playerChoice.innerHTML = `<h1 style="font-size:4em; font-weight:bold">${playerSelection}</h1>`
    computerChoice.innerHTML = `<h1 style="font-size:4em; font-weight:bold">${computerSelection}</h1>`
    
    if (playerSelection === computerSelection){
        return;
    } else {
        if (playerSelection === 'Rock' && computerSelection === 'Scissors'
        || playerSelection === 'Paper' && computerSelection === 'Rock'
        || playerSelection === 'Scissors' && computerSelection === 'Paper'){
            playerScoreText.textContent = ++playerScore;
        } else {
            computerScoreText.textContent = ++computerScore;
        }
    }
}

function startGame() {
    const playerSelection = this.value;
    const computerSelection = getComputerChoice();

    playRound(playerSelection, computerSelection);
    
    if (playerScore === 5) {
        displayStatus('You Win!');
        disableButtons();
        setTimeout(reset, 3000);
    } else if (computerScore === 5) {
        displayStatus('Computer Wins!');
        disableButtons();
        setTimeout(reset, 3000);
    }
}

buttons.forEach((button) => button.addEventListener('click', startGame))