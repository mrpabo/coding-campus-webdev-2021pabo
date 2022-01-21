//alert("würfel")
//Seiten:6 - Klick = würfeln - Farben: Blau,Gelb - Anzeige:als Zahl + Würfel"rollen" + letzte 10 Ergebnise
//Konzept: Start Button  - Ergebnisfeld - letzte Ergebnise
//todo: oneClick-Event auf Button/startet Würfel/zufällige Zahl 1-6/Wiederholen 10x/letzte Zahl ausgeben und ins Array speichern/Array ausgeben(fixe Länge 10)
/*
 */

let history = [];

function rollTheDice() {
  const randomNumber = getRandomDiceNumber();
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
  document.getElementById("history").innerHTML = history
  history.unshift(number);
}
