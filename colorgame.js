var numSquares = 6;
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButton = document.querySelectorAll(".mode");

for (var i = 0; i < modeButton.length; i++) {
    modeButton[i].addEventListener("click", function() {
        modeButton[0].classList.remove("selected");
        modeButton[1].classList.remove("selected");
        this.classList.add("selected");
        this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;
        reset();

    });
}

function reset() {
    colors = generateRandomColors(numSquares);
    //pick a new random color from array
    pickedColor = pickColor();
    //change color display
    colorDisplay.textContent = pickedColor;
    messageDisplay.textContent = "";
    resetButton.textContent = "New Colors"
        //change colors of squares    
    for (var i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];

        } else {
            squares[i].style.display = "none";
        }

    }
    h1.style.backgroundColor = "steelblue";

}

resetButton.addEventListener("click", function() {
    reset();
})

colorDisplay.textContent = pickedColor
for (var i = 0; i < squares.length; i++) {
    //add initial colors to squares
    squares[i].style.backgroundColor = colors[i];

    //add click listeners to squares
    squares[i].addEventListener("click", function() {
        var clickedColor = this.style.backgroundColor;

        if (clickedColor === pickedColor) {
            resetButton.textContent = "Play Again?"
            messageDisplay.textContent = "Correct";
            changeColor(clickedColor)
            h1.style.backgroundColor = pickedColor
        } else {
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "TryAgain"
        }
    })

}

function changeColor(color) {
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color;
    }
}

function pickColor() {
    var random = Math.floor(Math.random() * colors.length)
    return colors[random];
}

function generateRandomColors(num) {
    //make an array 
    var arr = []
        // add num random colors to array
    for (var i = 0; i < num; i++) {
        //get random color and push them into array
        arr.push(randomColor())
    }
    //return that array
    return arr;

}

function randomColor() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}