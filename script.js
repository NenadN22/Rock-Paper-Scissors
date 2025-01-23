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

console.log(getComputerChoice(3))
function getHumanChoice(humanChoice) {
    humanChoice = prompt('Rock,Paper or Scissors?')
    return humanChoice

}
console.log(getHumanChoice())