const playerScoreSpanElement = document.getElementById("player-score");
const computerScoreSpanElement = document.getElementById("computer-score");
const roundResultsMsg = document.getElementById("results-msg");
const winnerMsgElement = document.getElementById("winner-msg");
const optionsContainer = document.querySelector(".options-container");
const resetGameBtn = document.getElementById("reset-game-btn");


//functions
function getRandomComputerResult() {
  const options = ["Rock", "Paper", "Scissors"];
  return options[Math.floor(Math.random()*3)];
}

// console.log(getRandomComputerResult());

function hasPlayerWonTheRound(player, computer) {
  return (
    (player === "Rock" && computer === "Scissors") ||
    (player === "Scissors" && computer === "Paper") ||
    (player === "Paper" && computer === "Rock")
  ); //return true if any of the above condition happens otherwise return false.

  // if(player==="Rock") {
  //   if(computer==="Scissors") return true;
  //   else if(computer==="Paper")  return false;
  //   else return false;
  // }
  // if(player==="Paper") {
  //   if(computer==="Scissors") return false;
  //   else if(computer==="Rock")  return true;
  //   else return false;
  // }
  // if(player==="Scissors") {
  //   if(computer==="Rock") return false;
  //   else if(computer==="Paper")  return true;
  //   else return false;
  // }
}

console.log(hasPlayerWonTheRound("Rock", "Scissors")); 
console.log(hasPlayerWonTheRound("Scissors", "Rock")); 

function getRoundResults(userOption) {
  const computerResult = getRandomComputerResult();
  const result = hasPlayerWonTheRound(userOption, computerResult);

  //if draw
  if(userOption===computerResult) return `It's a tie! Both chose ${userOption}`;

  if(result) {
    playerScore++;
    return `Player wins! ${userOption} beats ${computerResult}`;
  } else {
    computerScore++;
    return `Computer wins! ${computerResult} beats ${userOption}`
  }
}

console.log(getRoundResults("Rock"));
console.log("Player Score: ", playerScore, "Computer Score: ", computerScore);

function showResults(userOption) {
  roundResultsMsg.innerText = getRoundResults(userOption);
  computerScoreSpanElement.innerText = computerScore;
  playerScoreSpanElement.innerText = playerScore;
  if(playerScore===3) {
    winnerMsgElement.innerText = "Player has won the game!";
    resetGameBtn.style.display = "block";
    optionsContainer.style.display = "none";
  } else if(computerScore===3) {
    winnerMsgElement.innerText = "Computer has won the game!";
    resetGameBtn.style.display = "block";
    optionsContainer.style.display = "none";
  }
};

const rockBtn = document.getElementById("rock-btn");
const paperBtn = document.getElementById("paper-btn");
const scissorsBtn = document.getElementById("scissors-btn");

rockBtn.addEventListener("click", function () {
  showResults("Rock");
});

paperBtn.addEventListener("click", function () {
  showResults("Paper");
});

scissorsBtn.addEventListener("click", function () {
  showResults("Scissors");
});


//reset game
function resetGame() {
  playerScore = computerScore = 0;
  playerScoreSpanElement.innerText = playerScore;
  computerScoreSpanElement.innerText = computerScore;
  resetGameBtn.style.display = "none";
  optionsContainer.style.display = "block";
  winnerMsgElement.innerText = "";
  roundResultsMsg.innerText = "";
};


resetGameBtn.addEventListener("click", resetGame);