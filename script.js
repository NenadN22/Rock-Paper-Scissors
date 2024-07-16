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
let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice,computerChoice) {
    if(humanChoice === 'Rock' && computerChoice === 'Scissors') {
        console.log(`You Win ${humanChoice} beat ${computerChoice}`);
        humanScore++;
    } else if (humanChoice === 'Paper' && computerChoice === 'Rock') {
        console.log(`You Win ${humanChoice} beat ${computerChoice}`);
        humanScore++;
    } else if (humanChoice === 'Scissors' && computerChoice === 'Paper') {
        console.log(`You Win ${humanChoice} beat ${computerChoice}`);
        humanScore++;
    } else if (humanChoice  !== computerChoice) {
        console.log(`You Lose ${computerChoice}  beat ${humanChoice}`);
        computerChoice ++;
    } else {
        console.log(`It's a draw!`);
    }
    

}

const humanSelection = getHumanChoice();
const comupterSelection = getComputerChoice();
playRound(humanSelection,comupterSelection)
