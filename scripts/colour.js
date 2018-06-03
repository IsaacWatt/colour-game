var colourList = makeColours(6); //array of 6 random colours

var colourSquares = document.querySelectorAll(".colour-square");
var correctColour = colourList[Math.floor(Math.random() * colourList.length)];
var displayedColour = document.getElementById("game-colour");
var guessResult =  document.querySelector("#guess-result");
var header = document.querySelector("h1");

displayedColour.textContent = correctColour;

for (var square = 0; square < colourSquares.length; ++square) {
  // add colours to squares
  colourSquares[square].style.backgroundColor = colourList[square];

  // click listeners for squares
  colourSquares[square].addEventListener("click", function() {
    var colourClicked = this.style.backgroundColor;
    console.log(colourClicked, correctColour);
    if (colourClicked === correctColour) {
      guessResult.textContent = "Correct Colour!";
      changeColours(colourClicked);
      header.style.backgroundColor = correctColour;
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

function makeColours(numColours) {
  var colours = [];

  for (var i = 0; i < numColours; ++i) {
    colours.push(randomColour());
  }

  return colours;
}

function randomColour() {
  // pick an r,g,b from [0, 255]
  var red = Math.floor(Math.random() * 256);
  var green = Math.floor(Math.random() * 256);
  var blue = Math.floor(Math.random() * 256);
  var rgb = "rgb(" + red + ", " + green + ", " + blue +")";
  return rgb;
}
