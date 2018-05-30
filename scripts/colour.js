var colourList = [
  "rgb(0, 0, 0)",
  "rgb(255, 255, 0)",
  "rgb(0, 0, 0)",
  "rgb(255, 0, 255)",
  "rgb(255, 80, 0)",
  "rgb(80, 0, 80)",
];

var colourSquares = document.querySelectorAll(".colour-square");
var correctColour = randomColour();
var displayedColour = document.getElementById("game-colour");
var guessResult =  document.querySelector("#guess-result");

displayedColour.textContent = correctColour;

for (var square = 0; square < colourSquares.length; ++square) {
  // add colours to squares
  colourSquares[square].style.backgroundColor = colourList[square];

  // click listeners for squares
  colourSquares[square].addEventListener("click", function() {
    var colourClicked = this.style.backgroundColor;

    if (colourClicked === correctColour) {
      guessResult.textContent = "Correct Colour!";
      changeColours(colourClicked);
    } else {
      this.style.backgroundColor = "rgb(50, 100, 120";
      guessResult.textContent = "Try Again!";
    }
});
}

function changeColours(c) {
  // change all squares to be the colour c
  for (var square = 0; square < colourSquares.length; ++square) {
    colourSquares[square].style.backgroundColor = c;
  }
}

function randomColour() {
  var randomIndex = Math.floor(Math.random() * colourList.length);
  return colourList[randomIndex];
}
