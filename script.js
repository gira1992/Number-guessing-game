let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
  const randomNumber = Math.floor(Math.random() * 10);
  return randomNumber;
}

const compareGuesses = (user, computer, target) => {
  let userGuess = Math.abs(target - user);
  let computerGuess = Math.abs(target - computer);

  if (userGuess === computerGuess) {
    return true;
  }
  if (userGuess < computerGuess) {
    return true;
  }
  return false;
}

const updateScore = winner => {
  if (winner === true) {
    humanScoree++
  } else {
    computerScore++
  }
}

const advanceRound = () =>{
  return currentRoundNumber++;
}

console.log(advanceRound())
