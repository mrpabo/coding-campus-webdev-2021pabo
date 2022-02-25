// Letter Transformer
//Erstellen Sie eine Funktion, die einen Zeichenfolgenparameter übernimmt, der einige Wörter oder einen Satz darstellt, und ein neues Zeichen.Geben Sie dann diese Zeichenfolge mit dem neuen Zeichen zwischen allen Zeichen zurück oder protokollieren Sie sie.
//Create a function that takes in a string parameter representing some words or a sentence, and a new character. then return or log that string with the new character in between all the characters.
//Example(s):
//LetterTransformer("Hello world!", $);
//>> "H$e$l$l$o w$o$r$l$d$!"
/*

let a = "H";
let b = "E";
let c = "L";
let d = "L";
let e = "O";
let leerzeichen = " ";
let f = "W";
let g = "O";
let h = "R";
let i = "L";
let j = "D";
let k = "$";
let rufezeichen = "!";

let massage =
  a +
  k +
  b +
  k +
  c +
  k +
  d +
  k +
  e +
  k +
  leerzeichen +
  k +
  f +
  k +
  g +
  k +
  h +
  k +
  i +
  k +
  j +
  k +
  rufezeichen +
  k +
  k +
  k;

console.log(massage);





let orginalWord = 'Hello World!';
let newCharacter = orginalWord.match(/.{1}/g);
let newWord = newCharacter.join("$");

console.log(newWord);




// Lösung von https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split

function splitString(stringToSplit, separator) {
  var arrayOfStrings = stringToSplit.split(separator);

  console.log('The original string is: "' + stringToSplit + '"');
  console.log('The separator is: "' + separator + '"');
  console.log(
    "The array has " +
      arrayOfStrings.length +
      " elements: " +
      arrayOfStrings.join(" / ")
  );
}

var tempestString = "Oh brave new world that has such people in it.";
var monthString = "Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec";

var space = " ";
var comma = ",";

splitString(tempestString, space);
splitString(tempestString);
splitString(monthString, comma);




//Lösung1

const endWithE = [];
const endWithER = [];
const endWithS = [];
let singularWord = 'Lampe';
let singularWord2 = 'Auto';
let singularWord3 = ''
function germanPluralizer(singularWord) {

  if ((singularWord[singularWord.length - 1]).includes("e")) {
    singularWord += "n"
    } else if ((singularWord[singularWord.length - 1].includes('o'))) {
      singularWord += 's'
      
      
  }
  return singularWord;
}
console.log(germanPluralizer(singularWord));
console.log(germanPluralizer(singularWord2));

//Lösung2

*/

const endWithE = [];
const endWithER = [];
const endWithS = [];
let singularWord = "Lampe";
let singularWord2 = "Auto";
let singularWord3 = "Maus";
let singularWord4 = "Buch";

function germanPluralizer(singularWord) {
    let lastChar = singularWord[singularWord.length - 1];
    //let 
    //let firstVowel = singularWord;
  if (lastChar.includes("e")) {
      singularWord += "n";
      
  } else if (lastChar.includes("o")) {
      singularWord += "s";
      
  } else if (lastChar.includes("s")) {
    singularWord += "e";

    singularWord = singularWord.replace(/[^M]/,'ä')
    }
    

  return singularWord;
}

console.log(germanPluralizer(singularWord));
console.log(germanPluralizer(singularWord2));
console.log(germanPluralizer(singularWord3));
console.log(germanPluralizer(singularWord4));
