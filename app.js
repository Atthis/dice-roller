let rollDice = function () {
  let result = Math.floor(Math.random() * this.id) + 1;
  console.log(result);
  let showResult = document.getElementById("launch");
  showResult.classList.remove("hide");
  showResult.classList.add("show");
  document.getElementById("value").innerHTML = result;
};

let clearResult = function () {
  let result = "";
  console.log(result);
  let showResult = document.getElementById("launch");
  showResult.classList.remove("show");
  showResult.classList.add("hide");
};

document.getElementById("4").onclick = rollDice;
document.getElementById("6").onclick = rollDice;
document.getElementById("20").onclick = rollDice;
document.getElementById("clear").onclick = clearResult;
