
var wordBank = ["pumpkin", "halloween", "spooky", "candy", "costume", "darkness", "haunted", "hayride", "eerie", "ghost"];
var word = wordBank[Math.floor(Math.random() * wordBank.length)].split('');
var usersLetter;
var guess = [];
var guesses = 12;
var reg = /^[a-z]+$/i;
var blankWord = [];
var wins = 0;

document.getElementById("wins").innerHTML = wins;

console.log(word);

for (var i = 0; i < word.length; i ++){
  blankWord.push('-');
}


updateBlankWord();
displayGuesses();


function updateBlankWord(){
  document.getElementById("word").innerHTML = blankWord.join(' ');
}

function updateGuess(){
  document.getElementById("guess").innerHTML = guess.join(' ');
}

// function wins(){
//   document.getElementById("wins").innerHTML = wins;
// }

// wins();

function isLetter(x){
  var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  return alphabet.indexOf(x) !== -1;
};

function notGuessed(x){
  return guess.indexOf(x) === -1;
};

function displayGuesses(){
  document.getElementById("guesses").innerHTML = guesses;
}

function resetGame(){
  guesses = 12;
  displayGuesses();
  word = wordBank[Math.floor(Math.random() * wordBank.length)].split('');
  blankWord = []
  for (var i = 0; i < word.length; i ++){
    blankWord.push('-');
  }
  console.log(word);
  console.log(blankWord);
  updateBlankWord();
  guess = [];
  displayGuesses();
  updateGuess();
  hideButton();

}

function showButton() {
  document.getElementById("play-again").style.display='block';
}

function hideButton() {
  document.getElementById("play-again").style.display='none';
}

document.onkeyup = function(event) {
  usersLetter = event.key;
  // if(reg.test(usersLetter)){
  if(isLetter(usersLetter) && notGuessed(usersLetter)){
    guess.push(usersLetter);
    updateGuess();


    if (word.indexOf(usersLetter) != -1){
      for (var i = 0; i < word.length; i ++){ 
         if (word[i] == usersLetter){
            blankWord[i] = word[i];
            updateBlankWord();
         }
      }
    } else {
      guesses--;
    }


    displayGuesses();
    // console.log(guesses);
    // console.log(guess);

    if (blankWord.indexOf('-') === -1 ){ 
      document.getElementById("word").innerHTML = "you win!"
      showButton();
      wins++;
      document.getElementById("wins").innerHTML = wins;
      // location.reload();
    }else if (guesses <= 0){
      document.getElementById("word").innerHTML = "you lose!"
      showButton();
      document.getElementById("wins").innerHTML = wins;
      // location.reload();
    }

  };
};

