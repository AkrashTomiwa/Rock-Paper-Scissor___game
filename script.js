const choices = ["rock", "paper", "scissors"];
const result = document.getElementById("result");
const playerScore = document.getElementById("playerScore");
const computerScore = document.getElementById("computerScore");
let playerScoreCount = 0;
let computerScoreCount = 0;
function play(playerChoice) {
    randomNum = Math.floor(Math.random() * 3);
    const computerChoice = choices[randomNum];
  if(computerChoice == playerChoice){
    result.textContent = "It's a tie😜";
    result.style.color = 'black';
  }else{
  switch (true) {
    case computerChoice == "rock" && playerChoice == "paper":
        result.textContent = "You win! 🎉";
        result.style.color = 'green';
      playerScoreCount++
      break;
    case computerChoice == "rock" && playerChoice == "scissors":
        result.textContent = "You lose ! 😔";
        result.style.color = 'red';
      computerScoreCount++
      break;
    case computerChoice == "paper" && playerChoice == "scissors":
      result.textContent = "You win! 🎉";
      result.style.color = 'green';
      playerScoreCount++
      break;
    case computerChoice == "paper" && playerChoice == "rock":
      result.textContent = "You lose ! 😔";
      result.style.color = 'red';
      computerScoreCount++
      break;
    case computerChoice == "scissors" && playerChoice == "rock":
      result.textContent = "You win! 🎉";
      result.style.color = 'green';
      playerScoreCount++
      break;
      case computerChoice == "scissors" && playerChoice == "paper":
          result.textContent = "You lose ! 😔";
          result.style.color = 'red';
      computerScoreCount++
      break;
    }}
    playerScore.textContent = `player's score: ${playerScoreCount}`
    computerScore.textContent = `Computer's score: ${computerScoreCount}`
  
}
