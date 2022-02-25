let tweetTextInputElement = document.getElementById('tweet-text');
let remainingCharsElement = document.getElementById('remaining-chars');

console.dir(tweetTextInputElement);

tweetTextInputElement.addEventListener('input', updateRemainingCharacters);

let maxAllowedChars = tweetTextInputElement.maxLength;

function updateRemainingCharacters(event) {
  let enteredText = event.target.value;
  let enteredTextLength = enteredText.length; 

  let remainingCharacters = maxAllowedChars - enteredTextLength;

  remainingCharsElement.textContent = remainingCharacters;
}
