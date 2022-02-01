let history = [];

async function rollTheDice() {
    const randomNumber = getRandomDiceNumber();
    await showRollingAnimation();
  showDiceNumber(randomNumber);
  refreshAndShowHistory(randomNumber);
}
/**
 * @returns random number between 1 and 6
 */
function getRandomDiceNumber() {
  return Math.ceil(Math.random() * 6);
}
/**
 * Shows the given number in the dice component
 * @param {*} number number to show in dice comonent
 */
function showDiceNumber(number) {
  document.getElementById("dice").innerHTML = number;
}
/**
 * adds the number to the history array and replaces the values in the History component
 * @param {*} number
 */
function refreshAndShowHistory(number) {
  history = history.slice(0, 10);
  document.getElementById("history").innerHTML = history;
  history.unshift(number);
}

async function showRollingAnimation() {
  for (let i = 0; i <= 9; i++) {
    showDiceNumber(getRandomDiceNumber());
    await sleep(i * 50);
  }
}
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
