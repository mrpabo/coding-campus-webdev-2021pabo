//console.dir()
//let googleLink = (document.body.children[1].children[0].href = "https://google.com");
//Zum reinenVerständnis -->old shool

/*





//Exercise 1

//let h1Element = document.body.children[0]
//let h1Element = document.body.firstElementChild;
//console.dir(h1Element);





//Exercise 2

console.dir(h1Element.parentElement);





//Exercise 3

console.dir(h1Element.nextElementSibling);



*/

//Exercise 4

let h1Element = document.getElementById("first-title");
console.dir(h1Element);

//Exercise 5

let highlightedParagraph = document.querySelector(".highlighted-paragraph");
console.dir(highlightedParagraph);

//Exercise 6

highlightedParagraph.textContent = "This was changed via JavaScript!";

//Exercise 7

//Schritt 1 neues <a>-Element via JS erstellen
let newAnchorElement = document.createElement("a");
//Schritt 2 neues Elemnt mit Informationen füllen (href, Text)
newAnchorElement.href = "https://google.com";
newAnchorElement.textContent = "this leads to Google!";
//Schritt 3 <p> Element auswählen und in Variable speichern
let firstParagraph = document.getElementById("first-paragraph");
//Schritt 4 Neues <a>-Element an <p> anhängen
firstParagraph.append(newAnchorElement);
console.dir(newAnchorElement);

//Exercise 8

let title = document.querySelector("h1");
console.dir(title);
title.remove();

//Exercise 9

document.body.append(firstParagraph);
//firstParagraph.parentElement.append(firstParagraph);

//Exercise 10

//DOM-DocumentObjektModel DOM-Tree
/*Der DOM ist eine 'Abbildung/Darstellung' des geparsten HTML- und CSS Inhalts, die über JavaScript
abgefragt oder manipuliert werden kann. */

/*Mit Hilfe vom DOM können wir mit JS eine interaktive Seite bauen.
Mit JS können wir Elemente aus dem Dom selektieren, auslesen und ändern --> DOM MANIPULATION */

//Exercise 11+12

let paragraphElement = document.getElementById("click-paragraph");

paragraphElement.addEventListener("click", chanceParagraphText);

//callback

function chanceParagraphText() {
  // wenn 'clicked!' dann 'ich bin klickbar!'
  if (paragraphElement.textContent == "Ich bin klickbar") {
    paragraphElement.textContent = "Clicked!";
  } else {
    paragraphElement.textContent = "Ich bin klickbar!";
  }

  console.log("click");
}

//Exercise 13

let inputElement = document.querySelector("input");

inputElement.addEventListener("input", retrieveUseInput);

function retrieveUseInput() {
  let enteredText = inputElement.value;
  console.log(enteredText);
}

//console.dir(inputElement)
