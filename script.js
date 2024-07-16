function getComputerChoice() {
   let randomNumber = Math.floor( Math.random() * 3);
   if (randomNumber === 0 ) {
    return 'Rock';
   } else if (randomNumber === 1) {
    return 'Paper';
   } else {
    return 'Scissors'
   }
    
}
function getHumanChoice(){
    let choice = prompt("What do you choose? Rock,Paper,Scissors?");
    return choice[0].toUpperCase() + choice.slice(1).toLowerCase()
    
    
}


function playGame () {
    let humanScore = 0;
    let computerScore = 0;
   

    function playRound(humanChoice,computerChoice) {
    if(humanChoice === 'Rock' && computerChoice === 'Scissors') { 
        humanScore++;
        console.log(humanScore)
        console.log(`You Win ${humanChoice} beat ${computerChoice}`);
    } else if (humanChoice === 'Paper' && computerChoice === 'Rock') {
        console.log(`You Win ${humanChoice} beat ${computerChoice}`);
        humanScore++;
        console.log(humanScore)
    } else if (humanChoice === 'Scissors' && computerChoice === 'Paper') {
        humanScore++;
        console.log(humanScore)
        console.log(`You Win ${humanChoice} beat ${computerChoice}`);
    } else if (humanChoice  !== computerChoice) {
        computerScore++;
        console.log(computerScore)
        console.log(`You Lose ${computerChoice}  beat ${humanChoice}`);
    } else {
        console.log(`It's a draw!`);
    }
    console.log(`Current Score - You: ${humanScore}, Computer: ${computerScore}`);
    

} 


while (humanScore < 5 && computerScore < 5) {
    const humanSelection = getHumanChoice()
    const computerSelection = getComputerChoice();
    playRound(humanSelection,computerSelection)
}
if (humanScore === 5) {
    console.log("Congratulations! You won the game!");
} else {
    console.log("Sorry, you lost the game. Better luck next time!");
}
}



playGame();