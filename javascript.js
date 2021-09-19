function computerPlay() {
    let array = ['rock', 'paper', 'scissors'];
    let chooseElement = Math.floor(Math.random() * array.length);
    
    return array[chooseElement];
    }  

    let computerScore = 0;
    let playerScore = 0;

    function singleRound(playerSelection, computerSelection) {
        if (playerSelection === 'rock' && computerSelection === 'paper') {
            computerScore+=1;
            return `Computer chooses ${computerSelection} – you lose`;
        } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
            playerScore+=1;
            return `Computer chooses ${computerSelection} – you win`;
        } else if (playerSelection === 'rock' && computerSelection === 'rock') {
            return `Computer chooses ${computerSelection} – draw`;
        }

        if (playerSelection === 'scissors' && computerSelection === 'paper') {
            playerScore+=1
            return `Computer chooses ${computerSelection} – you win`;
        } else if (playerSelection === 'scissors' && computerSelection === 'scissors') {
            return `Computer chooses ${computerSelection} – draw`;
        } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
            computerScore+=1;
            return `Computer chooses ${computerSelection} – you lose`;
        }

        if (playerSelection === 'paper' && computerSelection === 'paper') {
            return `Computer chooses ${computerSelection} – draw`;
        } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
            computerScore+=1;
            return `Computer chooses ${computerSelection} – you lose`;
        } else if (playerSelection === 'paper' && computerSelection === 'rock') {
            playerScore+=1;
            return `Computer chooses ${computerSelection} – you win`;
        }
    }
    
    // Result logging
    function keepScore() {
        const resultPlace = document.querySelector('p');
        let computerScoreText = 'Computer score is ' + computerScore;
        let playerScoreText = 'Player score is ' + playerScore;
        let score = computerScoreText + " " + playerScoreText;
        
        let playerWin = "Player Wins!";
        let computerWin = "Computer Wins!";

        if (playerScore < 5 && computerScore < 5) {
            resultPlace.innerHTML = score;
        } else if (playerScore == 5) {
            resultPlace.innerHTML = playerWin;
        } else if (computerScore == 5) {
            resultPlace.innerHTML = computerWin;
        }
    }

    // Making rock button
    function gameRock() {
        let rockRound = singleRound('rock', computerPlay());
        const messagePlace = document.querySelector('h2');

        if (playerScore < 5 && computerScore < 5) {
            messagePlace.innerHTML = rockRound;
        } else {
            messagePlace.innerHTML = "";
        }
    }

    const rockButton = document.querySelector('#rock');
    rockButton.addEventListener('click', gameRock);
    rockButton.addEventListener('click', keepScore);

    // Making paper button
    function gamePaper() {
        let paperRound = singleRound('paper', computerPlay());
        const messagePlace = document.querySelector('h2');
        
        if (playerScore < 5 && computerScore < 5) {
            messagePlace.innerHTML = paperRound;  
        } else {
            messagePlace.innerHTML = "";
        }
    }

    const paperButton = document.querySelector('#paper');
    paperButton.addEventListener('click', gamePaper);
    paperButton.addEventListener('click', keepScore)
    
    // Making scissors button
    function gameScissors() {
        let scissorsRound = singleRound('scissors', computerPlay()); 
        const messagePlace = document.querySelector('h2');
        
        if (playerScore < 5 && computerScore < 5) {
            messagePlace.innerHTML = scissorsRound;
        } else {
            messagePlace.innerHTML = "";
        }
    }

    const scissorsButton = document.querySelector('#scissors');
    scissorsButton.addEventListener('click', gameScissors);
    scissorsButton.addEventListener('click', keepScore)
