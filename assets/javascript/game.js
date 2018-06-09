
// Comments below make the game easier, instead of resetting after every loss

var letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var wins = 0;
var loss = 0;

var guessLimit = 9;
var guesses = [];

var answerKey = letters[Math.floor(Math.random() * letters.length)];
var answerArchive = [];

var answered =  document.getElementById("answer");
var winner =  document.getElementById("win");
var lost =  document.getElementById("losses");
var guessed =  document.getElementById("guess");
var currentType =  document.getElementById("soFar");

function reset(){
    guessLimit = 9;
    guesses = [];
}

document.onkeyup = function(event){
    var userText = event.key;
    userText = userText.toLowerCase();
    guesses.push(userText);
    

    if (userText === answerKey){
        wins++;
      
        reset();
// Comment In
        // answerKey = letters[Math.floor(Math.random() * letters.length)];
// End comment in

// Comment out
        answerArchive.push(answerKey)
        answered.innerHTML = "The answer was: " + answerArchive.join(", "); 
// End comment out 
    }   
 else  {
        guessLimit--;
        
    }

     if (guessLimit === 0){
      
        loss++;
        reset();

// Comment out
    answerArchive.push(answerKey)
    answered.innerHTML = "The answer was: " + answerArchive.join(", "); 
// End comment out
    }
    
// Comment out
if (guessLimit === 9){
    answerKey = letters[Math.floor(Math.random() * letters.length)]; 
     
}
// End comment out
 
    winner.innerHTML = "Wins: " + wins;
    lost.innerHTML = "Losses: " + loss;
    guessed.innerHTML = "Guesses Left: " + guessLimit;   
    currentType.innerHTML = "Your guesses so far: " + guesses.join(", ");
  

}
