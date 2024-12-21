let randomNumber = parseInt(Math.random()*100 +1);
console.log(randomNumber)

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi  = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if(playGame){
  submit.addEventListener('click',function(e){
      e.preventDefault();
      const guess = parseInt(userInput.value);
      console.log(guess);
      validateGuess(guess);
  })}


function validateGuess(guess){
// it simply check the  input are in the valid range or not;
if(isNaN(guess)){
    alert('Please Enter a Valid number ♥')
}else if(guess < 1){  alert('Please Enter a number more than 1')}
else if(guess > 100){alert('Please Enter a number less than 100')}
else{
  prevGuess.push(guess);
  if(numGuess === 11){
    displayGuess(guess);
    displayMessage(`Game Over. Random number was 
    ${randomNumber}`);
    endGame();
  }
  else{
    displayGuess(guess);
    checkGuess(guess);
  }
}
}



function checkGuess(guess){
  // it check that the guessed number is equal to the randomNumber or not;
  // if its low then show low or high vice versa
   
  if(guess === randomNumber ){
    displayMessage(`You Guessed it Right \u{2764}\u{FE0F}`);
    endGame();
  }else if(guess  < randomNumber){
      displayMessage(`Number is Tooo Low`);
  }
  else{
    displayMessage(`Number is Tooo High`)
  }


}

function displayGuess(guess){
// it simply  clean the display value so that you can take the new Input;
// it showa the  guesses.
// it update the remaininhg guesses 
userInput.value = '';
guessSlot.innerHTML += `${guess}   `;
numGuess++;
remaining.innerHTML = `${11- numGuess}`
}
// all dom are in this 
function displayMessage(message){   //
// it prints the Low or High Message 
lowOrHi.innerHTML = `<h2> ${message}</h2>`
}

function endGame(){
userInput.value = ''
userInput.setAttribute('disabled','')
p.classList.add('button')
p.innerHTML = `<h2 id="newGame"> Start  new Game</h2>`
startOver.appendChild(p);
playGame = false;
newGame();
}

function newGame()
{
const newGameButton = document.querySelector('#newGame')
newGameButton.addEventListener('click',function(e){
  randomNumber = parseInt(Math.random()*100 +1);
  prevGuess = [];
  numGuess = 1;
  guessSlot.innerHTML = '';
  remaining.innerHTML = `${11 - numGuess}`;
  userInput.removeAttribute('disabled');
  startOver.removeChild(p);
  playGame  = true;
  
})
}