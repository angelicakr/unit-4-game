
$(document).ready(function () {

var randomNum = 0;
var crystal1 = 0;
var crystal2 = 0;
var crystal3 = 0;
var crystal4 = 0;
var totalScore = 0;
var wins = 0;
var loses = 0;



function allValues() {

randomNum = Math.floor((Math.random() * 101)+ 19);
console.log(randomNum);

crystal1 = Math.floor((Math.random() * 11)+ 1);//random numbers for crystal
console.log(crystal1);
crystal2 = Math.floor((Math.random() * 11)+ 1);
console.log(crystal2);
crystal3 = Math.floor((Math.random() * 11)+ 1);
console.log(crystal3);
crystal4 = Math.floor((Math.random() * 11)+ 1);
console.log(crystal4);

totalScore = 0;
//to print random number
$("#randomNum").text(randomNum);
}

//adding crystalmeth to the tweekers
$("#crystal1").click(function(){
    totalScore += crystal1;
    $("#totalScore").text(totalScore); 
    numberCheck()
})
$("#crystal2").click(function(){
    totalScore += crystal2;
    $("#totalScore").text(totalScore); 
    numberCheck();
})
$("#crystal3").click(function(){
    totalScore += crystal3;
    $("#totalScore").text(totalScore);
    numberCheck(); 
})
$("#crystal4").click(function(){
    totalScore += crystal4;
    $("#totalScore").text(totalScore); 
    numberCheck();
})
console.log("randomNum" + randomNum);
console.log("totalScore" + totalScore);
//reset and win and lose
allValues()

function resetGame() {
    console.log("working")
    //$("#crystal1").text("");
    //$("#crystal2").text("");
    //$("#crystal3").text("");
    //$("#crystal4").text("");
    $("#randomNum").text("");
    $("#totalScore").text("");

}
function numberCheck() {
if (totalScore === randomNum) {
    setTimeout(() => {
        alert("You're a crystal winner");
        resetGame();
        allValues();
    }, 500);
    wins++;

}
if (totalScore > randomNum) {
    setTimeout(() => {
        alert("You're a crystal loser");
        resetGame();
        allValues();
    }, 500);
    loses++;

}
}

numberCheck();

});