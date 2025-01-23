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

function getHumanChoice() {
    let = humanPromptChoice = prompt('Rock,Paper or Scissors?')
    return humanPromptChoice[0].toUpperCase() + humanPromptChoice.slice(1);
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice,computerChoice) {
    
    if (humanChoice == computerChoice) {
        console.log(`It's a draw`)
    }
     else if (humanChoice === 'Rock' && computerChoice === 'Scissors') {
        console.log(`You Win  ${humanChoice} beat ${computerChoice}` )
    } else if  (humanChoice === 'Paper' && computerChoice === 'Rock') {
        console.log(`You Win  ${humanChoice} beat ${computerChoice}` )
    } else if (humanChoice === 'Scissors' && computerChoice === 'Paper') {
        console.log(`You Win  ${humanChoice} beat ${computerChoice}` )
    } else {
        console.log(`You Lose  ${computerChoice} beat ${humanChoice} ` )
    }

}
const humanSelection = getHumanChoice()
const computerSelection = getComputerChoice()

playRound(humanSelection,computerSelection)