// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */
let userChoice = "";
let compChoice = "";
let winner = "";
let randomNumber = 0;
let playerWins = 0;
let computerWins = 0;

document.querySelector("#shoot").onclick = function() {
  
  userChoice = $('input[name="choice"]:checked').val();
  randomNumber = Math.random();

  if (userChoice === undefined) {
    document.querySelector("#userChoice").innerHTML = `<br>`;
    document.querySelector("#computerChoice").innerHTML = `<br>`;
    document.querySelector("#result").innerHTML = `<h2>Select your choice!</h2>`;
    document.querySelector("#result").style.border = "black solid 3px"
  }
  else {
    //computer choice
    if (randomNumber >= 0.666) {
      compChoice = "Rock";
    }
    else if (randomNumber >= 0.333) {
      compChoice = "Paper";
    }
    else if (randomNumber >= 0) {
      compChoice = "Scissors";
    }

    //displaying choices
    document.querySelector("#userChoice").innerHTML = `${userChoice}`;
    document.querySelector("#computerChoice").innerHTML = `${compChoice}`;

    //who wins
    if (userChoice === "Rock") {
      if (compChoice === "Rock") {winner = "tie";}
      else if (compChoice === "Paper") {winner = "computer";}
      else if (compChoice === "Scissors") {winner = "player";}
    }
    else if (userChoice === "Paper") {
      if (compChoice === "Rock") {winner = "player";}
      else if (compChoice === "Paper") {winner = "tie";}
      else if (compChoice === "Scissors") {winner = "computer";}
    }
    else if (userChoice === "Scissors") {
      if (compChoice === "Rock") {winner = "computer";}
      else if (compChoice === "Paper") {winner = "player";}
      else if (compChoice === "Scissors") {winner = "tie";}
    }

    //result
    if (winner === "player") {
      document.querySelector("#result").innerHTML = `<h2>You win!</h2>`;
      playerWins = playerWins + 1;
      document.querySelector("#result").style.border = "green solid 3px"
    }
    else if (winner === "computer") {
      document.querySelector("#result").innerHTML = `<h2>You lose...</h2>`;
      computerWins = computerWins + 1;
      document.querySelector("#result").style.border = "red solid 3px"
    }
    else if (winner === "tie") {
      document.querySelector("#result").innerHTML = `<h2>It's a tie! Try again</h2>`;
      document.querySelector("#result").style.border = "orange solid 3px"
    }
    
    //changing number of wins
    document.querySelector("#playwins").innerHTML = "Wins: " + `${playerWins}`;
    document.querySelector("#compwins").innerHTML = "Wins: " + `${computerWins}`;
    
    //clearing radio buttons
    $('input[name=choice]').attr('checked',false);
  }
};
