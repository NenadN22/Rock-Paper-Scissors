function getComputerChoice(number) {
    choice = Math.floor(Math.random() * number)
    if (choice === 0) {
        return 'Rock'
    } else if (choice === 1 ) {
        return 'Paper'
    } else  {
         return 'Scissors'
    }
}
const display = document.querySelector('.display')
const buttons = document.querySelectorAll('button')
let playerButtonChoice = '';
buttons.forEach(button => {
    button.addEventListener('click', () => {
        playerButtonChoice = button.textContent;
       if (computerScore < 5 &&  humanScore < 5) {
        playRound(playerButtonChoice,getComputerChoice(3))
        } else {
            return;
        }
    })
    
})
let roundResult = document.createElement('h3')
let gameWinner = document.createElement('h2');


let winner = document.createElement('p');
function playRound(humanChoice,computerChoice) {
    
    
    if (humanChoice == computerChoice) {
        roundResult.textContent =  (`It's a draw`)
    }
    
     else if (humanChoice === 'Rock' && computerChoice === 'Scissors') {
        roundResult.textContent = (`You Win  ${humanChoice} beat ${computerChoice}` )
        humanScore ++
    } else if  (humanChoice === 'Paper' && computerChoice === 'Rock') {
        roundResult.textContent = (`You Win  ${humanChoice} beat ${computerChoice}` )
        humanScore ++
    } else if (humanChoice === 'Scissors' && computerChoice === 'Paper') {
        roundResult.textContent = (`You Win  ${humanChoice} beat ${computerChoice}` )
        humanScore ++
    } else {
        
        computerScore ++
        roundResult.textContent = (`You Lose  ${computerChoice} beat ${humanChoice} ` )
    }
  
  
    if (humanScore > computerScore) {
        winner.textContent =`Good job you win,your score is  ${humanScore} vs computer score ${computerScore}`;
    } else if (computerScore > humanScore) {
        winner.textContent =`Sorry you lose,computer score is  ${computerScore} vs your score ${humanScore}`;
        
    } else {
        winner.textContent = `It's a draw ${computerScore} vs your score ${humanScore}` 
    }
    
    if (computerScore === 5 ) {
        gameWinner.textContent = `Sorry you lost game winner is Computer by  ${computerScore} vs ${humanScore}`
        return;
        
    } if (humanScore === 5) {
        gameWinner.textContent = `Nice job you are game winner by ${humanScore} vs  ${computerScore}  `
        return;

    }
    

}
let humanScore = 0;
let computerScore = 0;
display.appendChild(winner)
display.appendChild(roundResult)
display.appendChild(gameWinner)