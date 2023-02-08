function myFunction() {

var randomNumber1 = Math.floor(Math.random()*6)+1;
console.log(randomNumber1);

var randomDiceImage1 = "images/dice" + randomNumber1 + ".png";
console.log(randomDiceImage1);

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", "images/dice" + randomNumber1 + ".png");

var randomNumber2 = Math.floor(Math.random()*6)+1;
console.log(randomNumber2);

var randomDiceImage2 = "images/dice" + randomNumber2 + ".png";
console.log(randomDiceImage2);

var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", "images/dice" + randomNumber2 + ".png");

if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML = " player 1 wins 🎉";
  }
else if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML = " player 2 wins 🎉";
  }
else{
    document.querySelector("h1").innerHTML = " Draw "
}

}