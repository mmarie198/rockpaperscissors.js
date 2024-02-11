function getPlayerChoice() {
  var playerChoice = prompt("Choose: rock, paper, or scissors").toLowerCase();
  while (!["rock", "paper", "scissors"].includes(playerChoice)) {
    alert("Invalid choice. Please choose rock, paper, or scissors.");
    playerChoice = prompt("Choose: rock, paper, or scissors").toLowerCase();
  }
  return playerChoice;
}

function getBotChoice() {
  var choices = ["rock", "paper", "scissors"];
  var randomIndex = Math.floor(Math.random() * 3);
  return choices[randomIndex];
}

function determineWinner(playerChoice, botChoice) {
  if (playerChoice === botChoice) {
    return "It's a draw!";
  } else if (
    (playerChoice === "rock" && botChoice === "scissors") ||
    (playerChoice === "paper" && botChoice === "rock") ||
    (playerChoice === "scissors" && botChoice === "paper")
  ) {
    return "You win!";
  } else {
    return "Bot wins :(";
  }
}

function playRound() {
  var playerChoice = getPlayerChoice();
  var botChoice = getBotChoice();

  var resultMessage = "Player choice: " + playerChoice + " (Rock, Paper, Scissors)\nBot choice: " + botChoice + " (Rock, Paper, Scissors)\n" + determineWinner(playerChoice, botChoice);
  alert(resultMessage);
  return determineWinner(playerChoice, botChoice);
}

function playBestOfThree() {
  var playerScore = 0;
  var botScore = 0;

  for (var round = 1; round <= 3; round++) {
    alert("Round " + round + ":");

    var roundResult = playRound();

    if (roundResult.includes("You win the game!")) {
      playerScore++;
    } else if (roundResult.includes("Bot wins the game :(")) {
      botScore++;
    }

    alert("Player: " + playerScore + ", Bot: " + botScore);

    if (playerScore === 2 || botScore === 2) {
      alert("Game ends. Final score - Player: " + playerScore + ", Bot: " + botScore);
      break;
    }
  }

  return playerScore > botScore ? "You win the game!" : "Bot wins :( Better luck next time!";
}

function startGame() {
  var mode = prompt("Enter 'single' for single round or 'best' for best out of three").toLowerCase();

  if (mode === "single") {
    alert("Rock, Paper, Scissors - Single Round:");
    playRound();
  } else if (mode === "best") {
    alert("Rock, Paper, Scissors - Best out of Three:");
    alert(playBestOfThree());

    if (confirm("Play again?")) {
      startGame();
    }
  } else {
    alert("Invalid mode. Please choose 'single' or 'best'.");
    startGame();
  }
}
startGame();
