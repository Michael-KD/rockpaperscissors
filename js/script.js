// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */
let userChoice = "";
let compChoice = "";
let winner = "";
let randomNumber = 0;

document.querySelector("#shoot").onclick = function() {
  userChoice = $('input[name="choice"]:checked').val();
  randomNumber = Math.random();

  //computer input
  document.querySelector("#userChoice").innerHTML = `${userChoice}`;
  document.querySelector("#computerChoice").innerHTML = `${compChoice}`;

  //conditionals

  //who won
};
