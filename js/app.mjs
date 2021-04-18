// // Rolling the dice global function
// let rollDice = function () {
//   let dChoice = document.querySelectorAll('input[name="dice"]'); //store all the radio in a array
//   let dValue; //for storing the dice value

//   //search for the checked radio
//   for (let dice of dChoice) {
//     if (dice.checked) {
//       dValue = dice.value; //retreive the value of the checked button
//     }
//   }
//   //if no dice selected, show an alert
//   if (dValue === undefined) {
//     alert("Merci de selectionner un dé.");
//   } else {
//     //else, show the value of the dice
//     dValue = Number(dValue); // change the variable type to number

//     //generate the random number, depending on the dValue
//     let dResult = Math.floor(Math.random() * dValue) + 1;

//     // Show the result in the HTML
//     resultText.innerHTML = `<p>The dice result is ${dResult}.</p>`;

//     // Roll counter
//     rollCount++;

//     //new line in the result record table
//     newResultRec += `<tr><td>${rollCount}</td><td>${dValue}</td><td>${dResult}</td></tr>`;
//     resultTable.innerHTML = newResultRec;
//     btnReset.classList.replace("hide", "show");
//   }
// };

// let clearAll = function () {
//   //clear result records from the table
//   newResultRec = "";
//   resultTable.innerHTML = newResultRec;

//   //reset the counter
//   rollCount = 0;

//   // hide the rest btn
//   btnReset.classList.replace("show", "hide");
// };

// const btnRoll = document.getElementById("rolling"); //select the roll button
// const resultText = document.getElementById("result"); //select the div where we show the result
// const resultTable = document.getElementById("resultRecord"); //select the table where to insert results
// let rollCount = 0;
// let newResultRec = "";
// const btnReset = document.getElementById("reset"); // select reset button

// btnRoll.onclick = rollDice; //launch the function on click
// btnReset.onclick = clearAll; //clear the roll record

// variables de selections d'éléments :
// - le groupe de boutons radio des dés -
// - le bouton de lancé de dé -
// - la zone d'affichage du résultat -
// - la zone d'affichage d'erreur -
// - le tableau d'affichage de résultats -
// - le bouton de reset -

// variables :
// - valeur du dé -
// - valeur du résultat -
// - texte du résultat -
// - compteur de lancé -
// - texte d'enregistrement des lancés -

// fonctions :
// - lancé du dé
//    -> générateur de résultat aléatoire
//    -> affichage de résultat
//    -> insertion dans le tableau
// - suppression de résultats

import { fadeOut, fadeIn } from "./fade.mjs"; // retreive the fadeIn and fadeOut functions

const diceGroup = document.querySelectorAll('input[name="dice"]'); //store all the radio in a array
const btnRoll = document.getElementById("rolling"); //select the roll button
const resultArea = document.getElementById("result"); //select the div where we show the result
const errorText = document.getElementById("error");
const resultTable = document.getElementById("resultRecord"); //select the table where to insert results
const btnReset = document.getElementById("reset"); // select reset button

let dValue; // Dice value
let result; // Roll result
let resultText; // result text to show
let rollCount; // number of roll counter
let rollRecord; // text to insert in roll table

// Function launched when rolling the dice
function rollDice() {
  // Reset errors shows
  if (errorText.style.opacity != 0) {
    fadeOut(errorText);
  }

  // Loop checking if a dice is selected - and retreive the value
  for (let dice of diceGroup) {
    if (dice.checked) {
      // if a radio is checked, get the value and exit the loop
      dValue = dice.value;
      break;
    }
  }

  // If no dice selected, show an error msg and exit the function
  if (dValue === undefined) {
    fadeIn(errorText); // show the error msg with fading effect
    return;
  }

  console.log("ok"); //debug
}

btnRoll.addEventListener("click", rollDice); //launch the roll function on click

// For debugging - uncheck all radio
function unchecked() {
  for (let dice of diceGroup) {
    dice.checked = false;
  }
}
document.getElementById("test").addEventListener("click", unchecked);
