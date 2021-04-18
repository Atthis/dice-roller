// FadeIn and fadeOut functions to apply on elements.

let op = 0; // Faded element opacity
let timer = 10; // setInterval value for fadeIn and fadeOut
let opGap = 0.2; // Gap between intervals to show or hide the block

function fadeIn(elem) {
  function show() {
    if (op >= 1) {
      // When opacity = 1, stop the loop
      console.log("in end"); //debug
      clearInterval(timerF);
      return;
    }
    elem.style.opacity = op;
    op += opGap; // Increase the opacity at each round
  }
  console.log("in"); //debug
  let timerF = setInterval(show, timer, elem);
}

function fadeOut(elem) {
  function hide() {
    if (op <= 0) {
      // When opacity = 0, stop the loop
      console.log("out end"); //debug
      clearInterval(timerF);
      return;
    }
    op -= opGap; // Decrease the opacity at each round
    elem.style.opacity = op;
  }
  console.log("out"); //debug
  let timerF = setInterval(hide, timer + 0.2, elem);
}

export { fadeIn, fadeOut };
