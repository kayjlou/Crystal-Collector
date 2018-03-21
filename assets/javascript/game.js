src="https://code.jquery.com/jquery-3.3.1.min.js"
       integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8="
       crossorigin="anonymous"


       $(document).ready(function(){

//Select random goal number between 19-120
var goal = Math.floor(Math.random() * (120-19 +1 ) ) + 19;

//Display random number in goal section
$('#Goal-Section').text(goal);
  console.log(goal);


//Crystal Variables 
var red = Math.floor(Math.random() * (12-1 +1 ) ) + 1; 
var blue = Math.floor(Math.random() * (12-1 +1 ) ) + 1; 
var yellow = Math.floor(Math.random() * (12-1 +1 ) ) + 1; 
var green = Math.floor(Math.random() * (12-1 +1 ) ) + 1; 

//Crystal random number function and variables (Will this work too?)
// var red = getValue(1,12);
// var blue = getValue(1,12);
// var yellow = getValue(1,12);
// var green = getValue(1,12);
// function getValue(min,max){
//  return Math.floor(Math.random() * (max-min +1 ) ) + min; 
// };

//Set variables to 0
var score = 0;
var wins = 0;
var losses = 0;

//Reset function to reset variables after win or lose
function reset(){
  score = 0;
  goal = Math.floor(Math.random() * (120-19 +1 ) ) + 19;
  red = Math.floor(Math.random() * (12-1 +1 ) ) + 1; 
  blue = Math.floor(Math.random() * (12-1 +1 ) ) + 1; 
  yellow = Math.floor(Math.random() * (12-1 +1 ) ) + 1; 
  green = Math.floor(Math.random() * (12-1 +1 ) ) + 1; 
  console.log("New goal is: " + goal);
  $('#Goal-Section').text(goal);
  $('#Wins').text(wins);
  $('#Losses').text(losses);
  $('#score').text(score);
};

//If Else statement for Win/Lose

function winOrLose(){
  if (score === goal){
    wins++
    console.log("You Won!");
    $('#Wins').text(wins);
    reset();
  } 
  else if (score > goal){
    losses++
    console.log("You Lose");
    $('#Losses').text(losses);
    reset();
  }
};

//Click on Gem functions
//Red Gem
$('#red').click(function(){
  console.log("red value: " + red);
  score = score + red;
  $("#score").text(score);
  winOrLose();
  });

  //Blue Gem
  $('#blue').click(function(){
    console.log("blue value: " + blue);
    score = score + blue;
    $("#score").text(score);
    winOrLose();
    });

  //Yellow
  $('#yellow').click(function(){
    console.log("yellow value: " + yellow);
    score = score + yellow;
    $("#score").text(score);
    winOrLose();
    });

  //Green
  $('#green').click(function(){
    console.log("green value: " + green);
    score = score + green;
    $("#score").text(score);
    winOrLose();
    });


});