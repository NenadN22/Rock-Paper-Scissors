function getComputerChoice(number) {
   let randomNumber = Math.floor( Math.random() * number);
   console.log(randomNumber)
   console.log(typeof(randomNumber))
   if (randomNumber === 0 ) {
    return 'Rock';
   } else if (randomNumber === 1) {
    return 'Paper';
   } else {
    return 'Scissors'
   }
    
}

console.log(getComputerChoice(3))