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

// fonctions :
// - suppression de résultats

import { fadeOut, fadeIn } from "./fade.mjs"; // retreive the fadeIn and fadeOut functions

const diceGroup = document.querySelectorAll('input[name="dice"]'); //store all the radio in a array
const btnRoll = document.getElementById("rolling"); //select the roll button
const resultArea = document.getElementById("result"); //select the div where we show the result
const errorText = document.getElementById("error");
const resultTable = document.getElementById("resultRecord"); //select the table where to insert results
const btnReset = document.getElementById("reset"); // select reset button

let rollCount = 0; // number of roll counter

// Function launched when rolling the dice
function rollDice() {
  // Loop checking if a dice is selected -> show error msg
  let dArray = [];
  // add each dice checked value to the array
  for (let dice of diceGroup) {
    dArray.push(dice.checked);
  }
  if (dArray.includes(true) != true && errorText.style.opacity < 1) {
    // Check if there is one "true" value in the array
    fadeIn(errorText); // show the error msg with fading effect
    return;
  } else if (dArray.includes(true) != true) {
    return;
  } else if (dArray.includes(true) === true && errorText.style.opacity > 0) {
    fadeOut(errorText);
  }
  // end of the loop

  // Retreive the dice value, and generate a random number
  function result(dices) {
    let dValue;
    let result;
    dices.forEach((dice) => {
      if (dice.checked) {
        return (dValue = dice.value); //retreive the value of the checked button
      }
    });
    result = Math.floor(Math.random() * dValue) + 1; // Generate the random number
    return [result, dValue];
  }

  function showResult(result, value, counter) {
    // let record = `<tr><td>${counter}</td><td>${value}</td><td>${result}</td></tr>`;
    // Show the result in the HTML
    resultArea.innerHTML = `<p>The dice result is ${result}.</p>`;

    let row = resultTable.insertRow(-1);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);

    cell1.innerHTML = counter;
    cell2.innerHTML = value;
    cell3.innerHTML = result;

    return;
  }

  let diceResult = result(diceGroup)[0];
  let diceValue = result(diceGroup)[1];
  rollCount++;

  showResult(diceResult, diceValue, rollCount);
  return;
}

btnRoll.addEventListener("click", rollDice); //launch the roll function on click

// For debugging - uncheck all radio
function unchecked() {
  for (let dice of diceGroup) {
    dice.checked = false;
  }
}

document.getElementById("test").addEventListener("click", unchecked);
