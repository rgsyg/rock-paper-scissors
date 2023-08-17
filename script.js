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
    enableButtons();
    playerChoice.textContent = ``;
    computerChoice.textContent = ``;
    playerChoice.classList.remove('active');
    computerChoice.classList.remove('active');
}

function disableButtons() {
    buttons.forEach((button) => button.disabled = true);
}

function enableButtons() {
    buttons.forEach((button) => button.disabled = false);
}

function handleOpacity() {
    playerChoice.classList.add('active');
    disableButtons();
    setTimeout(() => {
        computerChoice.classList.add('active');
        setTimeout(() => {
            if (!winCondition()) {
                playerChoice.classList.remove('active');
                computerChoice.classList.remove('active');
                addScore(playerScore, computerScore);
                setTimeout(enableButtons, 1000)
            }
            addScore(playerScore, computerScore);
            winCondition();
        }, 2000);
    }, 1000);
}

function addScore(pScore, cScore) {
    playerScoreText.textContent = pScore;
    computerScoreText.textContent = cScore;
}

function winCondition() {
    if (playerScore === 5) {
        displayStatus('You Win!');
        disableButtons();
        setTimeout(reset, 3000);
        return true;
    } else if (computerScore === 5) {
        displayStatus('Computer Wins!');
        disableButtons();
        setTimeout(reset, 3000);
        return true;
    } else {
        return false;
    }
}

function playRound(playerSelection, computerSelection) {
    playerChoice.textContent = playerSelection;
    computerChoice.textContent = computerSelection;
    
    if (playerSelection === computerSelection){
        return;
    } else {
        if (playerSelection === 'Rock' && computerSelection === 'Scissors'
        || playerSelection === 'Paper' && computerSelection === 'Rock'
        || playerSelection === 'Scissors' && computerSelection === 'Paper'){
            ++playerScore;
        } else {
            ++computerScore;
        }
    }

    handleOpacity();
}

function startGame() {
    const playerSelection = this.value;
    const computerSelection = getComputerChoice();

    playRound(playerSelection, computerSelection);
}

buttons.forEach((button) => button.addEventListener('click', startGame))