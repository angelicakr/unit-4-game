var randomNum = 0;
var crystal1 = 0;
var crystal2 = 0;
var crystal3 = 0;
var crystal4 = 0;
var totalScore = 0;
var wins = 0;
var loses = 0;




randomNum = Math.floor((Math.random() * 101)+ 19);
console.log(randomNum);

crystal1 = Math.floor((Math.random() * 11)+ 1);//random numbers for crystalmeth
console.log(crystal1);
crystal2 = Math.floor((Math.random() * 11)+ 1);
console.log(crystal2);
crystal3 = Math.floor((Math.random() * 11)+ 1);
console.log(crystal3);
crystal4 = Math.floor((Math.random() * 11)+ 1);
console.log(crystal4);



$(document).ready(function () {
//to print random number
$("#randomNum").text(randomNum);


//adding crystalmeth to the tweekers
$("#crystal1").click(function(){
    totalScore += crystal1;
    $("#totalScore").text(totalScore); 
})
$("#crystal2").click(function(){
    totalScore += crystal2;
    $("#totalScore").text(totalScore); 
})
$("#crystal3").click(function(){
    totalScore += crystal3;
    $("#totalScore").text(totalScore); 
})
$("#crystal4").click(function(){
    totalScore += crystal4;
    $("#totalScore").text(totalScore); 
})
console.log("randomNum" + randomNum);
console.log("totalScore" + totalScore);
//reset and win and lose

function resetGame() {
    $("#crystal1, #crystal2, #crystal3, #crystal4, #randomNum, #totalScore").empty();

}
function numberCheck() {
if ($("#totalScore") === randomNum) {
    alert("You're a fucking winner bro!!");
    wins++;
    resetGame();
    
}
if ($("#totalScore") > randomNum) {
    alert("You're a crystal meth loser");
    lose++;
    resetGame();
}
}

numberCheck();

});