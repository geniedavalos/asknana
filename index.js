var randomImageSource = "";

function answerNana() {
  var randomAnswerNumber = Math.floor(Math.random() * 2) + 1; // 1-2
  var randomAnswer = "answer" + randomAnswerNumber + ".jpg"; //answer1 - answer2.png
  randomImageSource = "images/" + randomAnswer; //images/answer1 - answer2.png
  document.getElementById("img0").src = randomImageSource;
  nanaAnswered();
  document.getElementById("button").innerHTML = "Try Again! Wheeek!";

}

function nanaAnswered() {
  if (randomImageSource === "images/answer1.jpg") {
    document.getElementById("output").innerHTML = "Nah! Not Today, Human!"; //answer #1
  } else if (randomImageSource === "images/answer2.jpg") {
    document.getElementById("output").innerHTML = "Yes! Eat it Today, Human!"; //answer #2
  } else {
    alert("Error occured. Try again!");
  }

}
