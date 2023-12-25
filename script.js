"use strict";

let score = 20;
let highScore = 0;
let secretNumber = Math.floor(Math.random() * 20) + 1;
document.querySelector(".again-btn").style.display = "none";

document.querySelector(".guess-btn").addEventListener("click", function () {
  const guessNumber = Number(document.querySelector(".guess-number").value);

  if (guessNumber === 10) {
    document.querySelector(".message").textContent =
      "Well done ! that is corrct";
    hideButtonfuncion();

    // high scor validation
    // باید ذخیره شود

    if (score > highScore) {
      highScore = score;
      document.querySelector(".high-score-number").textContent = highScore;
    }
  } else if (guessNumber > secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Ohh, it is high";
      score--;
      document.querySelector(".score-number").textContent = score;
      highScore++;
      document.querySelector(".high-score-number").textContent = highScore;
    } else {
      document.querySelector(".message").textContent = "you lost !";
      document.querySelector(".score-number").textContent = 0;
      hideButtonfuncion();
    }
  } else if (guessNumber < secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Ohh, very less!";
      score--;
      document.querySelector(".score-number").textContent = score;
      highScore++;
      document.querySelector(".high-score-number").textContent = highScore;
    } else {
      document.querySelector(".message").textContent = "you lost !";
      document.querySelector(".score-number").textContent = 0;
      hideButtonfuncion();
    }
  }
});

function hideButtonfuncion() {
  document.querySelector(".guess-btn").style.display = "none";
  document.querySelector(".again-btn").style.display = "block";
}

document.querySelector(".again-btn").addEventListener("click", function () {
  document.querySelector(".guess-btn").style.display = "block";
  document.querySelector(".again-btn").style.display = "none";

  //   rest all function

  score = 20;
  secretNumber = Math.floor(Math.random() * 20) + 1;
  document.querySelector(".message").textContent =
    "Start gussing ...............";
  document.querySelector(".score-number").textContent = score;
  document.querySelector(".guess-number").value = "";
});
