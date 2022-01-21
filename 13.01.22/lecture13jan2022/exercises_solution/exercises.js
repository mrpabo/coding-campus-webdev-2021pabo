/* Exercise 1 */

/* Try ist ein reserviertes Schlüsselwort in JavaScript und kann daher nicht als Variablenname verwendet werden. */

/* Exercise 2 */

/* Gültige Variablennamen: */

let first_name;
let _firstName;
let $firstName;

/* Exercise 3 */

/* Die Lower-CamelCase-Schreibweise ist eine unter Entwicklern gängige und häufig verwendete Notation für Variablennamen */
let lastName;

//Upper-CamelCase
let LastName;

/* Exercise 4 */

/* Da in JavaScript bei der Deklaration einer Variablen der Datentyp nicht explizit festgelegt wird, spricht man auch von dem 
sogennanten Loose Typing. Andere Programmiersprachen wie beispielsweise Java verwenden dagegen das sogenannte Strong Typing bzw
 Strict Typing, d.h. , der Datentyp muss dort bei der Definition einer Variablen explizit definiert werden. Loose Typing wie in
 JavaScript kann - bei unachtsamer Programmierung - zu ungewollten Problemen führen, nämlich immer dann, wenn man mit zwei oder
 mehr Variablen unterschiedlichen Datentyps arbeitet.

Loose Typed: JavaScript, Ruby, Python
Strong Typed: TypeScript, Java, C 
*/

/* Exercise 5 */

//Numerische Daten
let number = 1.5;

//Zeichenketten (Strings)
let message = "Hello!";

//Boolean
let isOldEnough = true;

// (Arrays)
let shoppingCarte = ["table", "football", "iPhone"];

//Objekte
let person = {
  firstName: "Max",
  lastName: "Müller",
  height: 178,
};

/* Exercise 6 */

/* Der Wert undefined ist nicht dazu geacht, dass man ihn manuell einer Variablen zuweist, der null dagegen schon. Der Wert
undefined drückt aus, dass eine Variable noch nicht initalisiert wurde, der Wert null repräsentiert einen leeren Objektzeiger. */

/* Exercise 7 */

function orderMyLogic(val) {
  if (val < 5) {
    return "Less than 5";
  } else if (val < 10) {
    return "Less than 10";
  } else {
    return "Greater than or equal to 10";
  }
}

//orderMyLogic(7);

/* Exercise 8 */

function testElseIf(val) {
  if (val > 10) {
    return "Greater than 10";
  } else if (val < 5) {
    return "Smaller than 5";
  } else {
    return "Between 5 and 10";
  }
}

//testElseIf(7);

/* Exercise 9 */

function findTheRightSize(num) {
  if (num < 5) {
    return "Tiny";
  } else if (num < 10) {
    return "Small";
  } else if (num < 15) {
    return "Medium";
  } else if (num < 20) {
    return "Large";
  } else {
    return "Huge";
  }
}

//findTheRightSize(7);

/* Exercise 10 */
function showAlert(statusCode) {
  let message;

  switch (statusCode) {
    case 1:
      message = "alpha";
      break;
    case 2:
      message = "beta";
      break;
    case 3:
      message = "gamma";
      break;
    case 4:
      message = "delta";
      break;
    default:
      message = "Unbekannter Wert";
      break;
  }

  alert(message);
}

// showAlert(4);

/* Exercise 11 */
function evenOrOdd(number) {
  if (number % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
}

//evenOrOdd(12);

/* Exercise 12 */
function boolToWord(bool) {
  if (bool === true) {
    return "Yes";
  } else {
    return "No";
  }
}

//boolToWord(true);

/* Exercise 13 */
function multiplicateBaseNumber(baseNumber) {
  let result;
  for (let i = 2; i <= 16; i += 2) {
    result = baseNumber * i;
    console.log(baseNumber + " multipliziert mit " + i + " = " + result);
  }
}

//multiplicateBaseNumber(2);

/* Exercise 14 */

function takeUmbrella(weather, chance) {
  if (weather == "rainy") return true;
  if (weather == "cloudy" && chance > 0.2) return true;
  if (weather == "sunny" && chance > 0.5) return true;
  return false;
}

// console.log("Regenschirm mitnehmen? " + takeUmbrella("sunny",0.6));


/* Exercise 15 */

function rps(p1, p2) {
  let result;

  if (p1 == p2) {
    result = 'Draw!';
  } else if (p1 == 'rock' && p2 == 'scissors') {
    result = 'Player 1 won!'
  } else if (p1 == 'scissors' && p2 == 'paper') {
    result = 'Player 1 won!'
  } else if (p1 == 'paper' && p2 == 'rock') {
    result = 'Player 1 won!'
  } else {
    result = 'Player 2 won!';
  }

  console.log(result);
}

// rps('rock', 'paper');
// rps('rock', 'rock');
// rps('rock', 'scissors');
// rps('paper', 'paper');
// rps('paper', 'scissors');
// rps('scissors', 'scissors');