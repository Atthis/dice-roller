// Rolling the dice global function
let rollDice = function () {
  let dChoice = document.querySelectorAll('input[name="dice"]'); //store all the radio in a array
  let dValue; //for storing the dice value

  //search for the checked radio
  for (let dice of dChoice) {
    if (dice.checked) {
      dValue = dice.value; //retreive the value of the checked button
    }
  }
  //if no dice selected, show an alert
  if (dValue === undefined) {
    alert("Merci de selectionner un dé.");
  } else {
    //else, show the value of the dice
    dValue = Number(dValue); // change the variable type to number

    //generate the random number, depending on the dValue
    let dResult = Math.floor(Math.random() * dValue) + 1;

    // Show the result in the HTML
    resultText.innerHTML = `<p>The dice result is ${dResult}.</p>`; //Adding results so we have an record of previous results

    // Roll counter
    rollCount++;

    //new line in the result record table
    newResultRec += `<tr><td>${rollCount}</td><td>${dValue}</td><td>${dResult}</td></tr>`;
    resultTable.innerHTML = newResultRec;
    btnReset.classList.replace("hide", "show");
  }
};

let clearAll = function () {
  //clear result records from the table
  newResultRec = "";
  resultTable.innerHTML = newResultRec;

  // hide the rest btn
  btnReset.classList.replace("show", "hide");
};

const btnRoll = document.getElementById("rolling"); //select the roll button
const resultText = document.getElementById("result"); //select the div where we show the result
const resultTable = document.getElementById("resultRecord"); //select the table where to insert results
let rollCount = 0;
let newResultRec = "";
const btnReset = document.getElementById("reset"); // select reset button

btnRoll.onclick = rollDice; //launch the function on click
btnReset.onclick = clearAll; //clear the roll record
