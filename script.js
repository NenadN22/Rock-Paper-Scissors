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
console.log(getComputerChoice())
function getHumanChoice() {
    let choice = prompt("What you choose? Rock,Paper Scissors?")
    return choice;
}
console.log(getHumanChoice());
let humanScore = 0;
let computerScore = 0;