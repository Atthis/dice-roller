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
    let resultText = document.getElementById("result");
    resultText.innerHTML = `<p>The dice result is ${dResult}.</p>`; //Adding results so we have an record of previous results
  }
};

const btnRoll = document.getElementById("rolling"); //select the button

btnRoll.onclick = rollDice; //launch the function on click
let rollCount = 0;
