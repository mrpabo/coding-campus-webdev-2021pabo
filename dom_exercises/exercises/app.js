/* Exercise 1 */
let h1Element = document.body.firstElementChild;
h1Element = document.body.children[0];

//console.dir(h1Element);

/* Exercise 2 */
 console.dir(h1Element.parentElement);

/* Exercise 3 */

 console.dir(h1Element.nextElementSibling);

/* Exercise 4 */
h1Element = document.getElementById("first-title");

// console.dir(h1Element);

/* Exercise 5 */
let highlightedParagraph = document.querySelector(".highlighted-paragraph");

// console.dir(highlightedParagraph);

/* Exercise 6 */
highlightedParagraph.textContent = "This was changed via JavaScript!";

//keep <a> in paragraph
// highlightedParagraph.firstChild.textContent = "This was changed via JavaScript!"

/* Exercise 7 */
// 1. Create the new element
let newAnchorElement = document.createElement("a");
newAnchorElement.href = "https://google.com";
newAnchorElement.textContent = "This leads to Google!";

// 2. Get access to the parent element that should hold the new element
let firstParagraph = document.querySelector("p");

// 3. Insert the new element into the parent element content
firstParagraph.append(newAnchorElement);

/* Exercise 8 */
// 1. Select the element that should be removed
let firstH1Element = document.querySelector("h1");

// 2. Remove it!
 firstH1Element.remove();
//firstH1Element.parentElement.removeChild(firstH1Element); // for older browsers

/* Exercise 9 */
firstParagraph.parentElement.append(firstParagraph);

/* Exercise 10 */

/* Der DOM ist eine "Abbildung/Darstellung" des geparsten HTML- und
CSS-Inhalts, die über JavaScript abgefragt oder manipuliert werden kann. */

/* Mit Hilfe des DOM können wir via JavaScript-Code eine interaktive Seite bauen.
Mit JS können wir Elemente aus dem DOM selektieren (mit queries), auslesen und ändern --> DOM Manipulation*/

/* Exercise 11 */

let paragraphElement = document.getElementById("click-paragraph");
paragraphElement.addEventListener("click", changeParagraphText12);

console.log(paragraphElement);

function changeParagraphText() {
  paragraphElement.textContent = "Clicked!";
  console.log("Paragraph clicked!");
}

/* Exercise 12 */
function changeParagraphText12() {
  if (paragraphElement.textContent == "Ich bin klickbar!") {
    paragraphElement.textContent = "Clicked! <br>";
  } else {
    paragraphElement.textContent = "Ich bin klickbar!";
  }
}

/* Exercise 13 */
let inputElement = document.querySelector("input");

inputElement.addEventListener("input", retrieveUserInput);

function retrieveUserInput() {
  let enteredText = inputElement.value;
  console.log(enteredText);
}

//Anhang zum Exercise 13 --> Das globale Event Object
//spezieller Paramter, der für jeden Event vorhanden ist
//Object, der den Event beschreibt

// function retrieveUserInput(event) {
//   console.log(event);
//   let enteredText = event.target.value;
//   console.log(enteredText);
// }

inputElement.addEventListener('click', doSomething());

/* Exercise 14 */
/* Klammer bei der Funktion! Wir wollen die Funktion nicht ausführen,
sondern lediglich "hinweisen", dass es eine Funktion mit dem Namen gibt.
Callback --> Eine Funktion die in Zukunft ausgeführt wird. */


/* Exercise 15: Folder twitter-post */