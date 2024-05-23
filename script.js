function getComputerChoice() {
    let number = 3;
    let computerChoice = Math.floor(Math.random(number) * 10);
    if (computerChoice === 0) {
        return 'Rock'
    } else if (computerChoice === 1) {
        return 'Paper'
    }
    else  {
        return 'Scissors'
    }
}
function getHumanChoice() {
    let humanChoice = prompt("What you choose? Rock,Paper Scissors?")
    return humanChoice = humanChoice[0].toUpperCase() + humanChoice.slice(1).toLowerCase();
}
let humanScore = 0;
let computerScore = 0;
function playRound (humanChoice,computerChoice) {
    if(computerChoice === 'Rock ' && humanChoice === "Scissors") {
        computerScore ++
        console.log( `You Lose ${computerChoice} beat ${humanChoice}`); 
    } else if (computerChoice === 'Paper' && humanChoice === 'Rock') {
        computerScore++
        console.log( `You Lose ${computerChoice} beat ${humanChoice}`); 
    } else if (computerChoice === 'Scissors' && humanChoice === 'Paper') {
        computerScore ++
         console.log(`You Lose ${computerChoice} beat ${humanChoice}`);  
    } else {
        humanScore ++
        console.log( `You Win ${humanChoice} beat ${computerChoice}`); 
    }
    
 } 
 const humanSelection = getHumanChoice();
 const computerSelection = getComputerChoice()
 playRound(humanSelection,computerSelection);