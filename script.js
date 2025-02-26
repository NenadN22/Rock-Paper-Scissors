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

const buttons = document.querySelectorAll('button')
let humanButtonChoice = ''
buttons.forEach(button => {
    button.addEventListener('click', () => {; 
    humanButtonChoice = button.textContent;
    console.log(humanButtonChoice)
    playRound(humanButtonChoice,getComputerChoice(3))
  
})
    

})


function playRound(humanChoice,computerChoice) {
    
    if (humanChoice == computerChoice) {
        console.log(`It's a draw`)
    }
     else if (humanChoice === 'Rock' && computerChoice === 'Scissors') {
        console.log(`You Win  ${humanChoice} beat ${computerChoice}` )
        humanScore ++
    } else if  (humanChoice === 'Paper' && computerChoice === 'Rock') {
        console.log(`You Win  ${humanChoice} beat ${computerChoice}` )
        humanScore ++
    } else if (humanChoice === 'Scissors' && computerChoice === 'Paper') {
        console.log(`You Win  ${humanChoice} beat ${computerChoice}` )
        humanScore ++
    } else {
        
        computerScore ++
        console.log (`You Lose  ${computerChoice} beat ${humanChoice} ` )
    }
    for (let i = 0;  i < 5; i++ ){
        console.log(humanScore)
        console.log(computerScore)

    }
    if (humanScore > computerScore) {
        winner =`Good job you win,your score is  ${humanScore} vs computer score ${computerScore}`;
    } else if (computerScore > humanScore) {
        winner =`Sorry you lose,computer score is  ${computerScore} vs your score ${humanScore}`;
        
    } else {
        winner = `It's a draw computer score is  ${computerScore} vs your score ${humanScore}` 
    }
    console.log(winner)

}
let humanScore = 0;
let computerScore = 0;

// function playGame() {
//     let winner;
    
    
    
  




// }
// playGame();