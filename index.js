//For player 1

let randomNumber1 = Math.floor((Math.random() * 6) + 1);

//console.log(randomNumber1); to check if is working

//have the img show up at the page 
let img1 = "images/dice" + randomNumber1 + ".png";

document.querySelector(".dice .img1").setAttribute("src",img1);

//For player 2

let randomNumber2 = Math.floor((Math.random() * 6) + 1);

let img2 = "images/dice" + randomNumber2 + ".png";

document.querySelector(".dice .img2").setAttribute("src",img2);

//To settel a winner - need an if statement to compare the results
if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 wins!";
} else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 2 wins";
} else if (randomNumber1 === randomNumber2) {
    document.querySelector("h1").innerHTML = "DRAW!"
}