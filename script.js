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


let humanScore = 0;
let computerScore = 0;
const result = document.createElement('h3');
const score = document.createElement("h3");
const display = document.getElementsByClassName('display');
const buttons = document.querySelectorAll('button');

function playGame () { 
     

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const humanChoice = button.innerText
            if (computerScore < 5 && humanScore < 5) {
                console.log("If Statement Hit")
                playRound(humanChoice)
              }
            
        })
    })
}
    
    
    



    function playRound(humanChoice) {
        computerChoice = getComputerChoice();
    if(humanChoice === 'Rock' && computerChoice === 'Scissors') { 
        humanScore++;
        result.textContent = (`You Win ${humanChoice} beat ${computerChoice}`);
    } else if (humanChoice === 'Paper' && computerChoice === 'Rock') {
        result.textContent = (`You Win ${humanChoice} beat ${computerChoice}`);
        humanScore++;
    } else if (humanChoice === 'Scissors' && computerChoice === 'Paper') {
        humanScore++;
        result.textContent = (`You Win ${humanChoice} beat ${computerChoice}`);
    } else if (humanChoice  !== computerChoice) {
        computerScore++;
        result.textContent = (`You Lose ${computerChoice}  beat ${humanChoice}`);
    } else {
        result.textContent = (`It's a draw!`);
    }
    score.textContent = (`Current Score - You: ${humanScore}, Computer: ${computerScore}`);
    if (computerScore === 5 ) {
        result.textContent =("You lose better luck next time !!")
    }  else if (humanScore === 5) {
        result.textContent = "You Win good job !!!"
    }
    

}



display[0].appendChild(result);
display[0].appendChild(score);


playGame();