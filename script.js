function getComputerChoice(number) {
   let randomNumber = Math.floor( Math.random() * number);
   if (randomNumber === 0 ) {
    return 'Rock';
   } else if (randomNumber === 1) {
    return 'Paper';
   } else {
    return 'Scissors'
   }
    
}
function getHumanChoice(){
    let choice = prompt("What do you choose? Rock,Paper");
    return choice;
    
    
}

console.log(getComputerChoice(3))
console.log(getHumanChoice());