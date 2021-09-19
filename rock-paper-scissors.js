function computerPlay() {
    let array = ['rock', 'paper', 'scissors'];
    let chooseElement = Math.floor(Math.random() * array.length);
    
    return array[chooseElement];
    }  

    let computerScore = 0;
    let playerScore = 0;
    // computerSelection = computerPlay();

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
    
    function gameRock() {
        console.log(singleRound('rock', computerPlay()));
        console.log('Computer score is ' + computerScore)
        console.log('player score is ' + playerScore)    
    }

    function gamePaper() {
        console.log(singleRound('paper', computerPlay()));
        console.log('Computer score is ' + computerScore)
        console.log('player score is ' + playerScore)    
    }
    
    function gameScissors() {
        console.log(singleRound('scissors', computerPlay()));
        console.log('Computer score is ' + computerScore)
        console.log('player score is ' + playerScore)    
    }
    
    const rockButton = document.querySelector('#rock');
    rockButton.addEventListener('click', gameRock);

    const paperButton = document.querySelector('#paper');
    paperButton.addEventListener('click', gamePaper);

    const scissorsButton = document.querySelector('#scissors');
    scissorsButton.addEventListener('click', gameScissors);