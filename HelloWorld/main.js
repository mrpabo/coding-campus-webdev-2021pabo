/*
//Variable definieren --> Variablendeklaration
let firstName;
let lastName;
let keinWert;

//Wertzuweisung oder Variableninitalisierung
firstName = "'Patric";
lastName = "'Boso";

console.log(firstName);
console.log(lastName);
console.log(keinWert);

//Konstanten
const MAX = 5000;
const MAXIMUM_AGE = 60;

console.log(MAXIMUM_AGE);

let maxAge = 60;
console.log(maxAge);

maxAge = 75;
console.log(maxAge);


//Datentypen in JavaScript


// Zahlen

let number1 = 5;
let number2 = 0.5;
let number3 = -22;
let number4 = -0.9;
let myAge = 37;
let yorAge = 26;

console.log(yorAge + myAge)



//Strings

let firstName = "Max";
let lastName = "Müller";
let age = "22";
let street = "Müllerstraße 5";
let alias = "Max";

//Booleans
let isLoggedIn = true;
let isAdmion = false;

console.log(typeof isLoggedIn);

//Arryas

let shopingCartItem1 = "Lautsprecher";
let shopingCartItem2 = "Plattenspieler";
let shopingCartItem3 = "CD";

//Array = Liste, wo mehrere Werte enhalten kann
//Gangigste Methode:[] Eckige Klammern --> Arry-Lietral-Schreibweise

let shoppingCard = ["Lautsprecher", "Plattenspieler", "CD,"];
let highscores = [1234, 1222, 1190];

console.log(shoppingCard);

//Objekte

let person = {
  name: "Max Mustermann",
  age: 22,
  street: "Müllerstraße 5",

  printDescription: function () {
    console.log(this.name + "is" + this.age + "years old");
  },
};

console.log(person.age);


//Operatoren inJS

//Arithmics Operators

let x = 5;
let y = 10;

let z = x + y; //15

z = y - z;

Z = x * y;

x = 3;
y = 10;

z = y % x;

x = 5;

x++;
x--;

console.log(x);

//Assigment Operators

x = 5;
y = 10;

x = y;

x += 8;
x -= 12;
x *= 2;
x %= 10;

console.log(x);


//String Concentation

let a = 5;
let b = "Hello";
let c = "World";
let d = 10;
let leerzeichen = "";

let massage = b + leerzeichen + c + leerzeichen + a;


console.log(massage);


//Logical Operators

let isLoggedIn = true;
let isAdmin = false;
// AND --> Beide True
let isLoggedInAndAdmin = isLoggedIn && isAdmin;
let isLoggedInOrAdmin = isLoggedIn || isAdmin;


console.log(isLoggedInOrAdmin);




//Comparsion Operators

let a = 5;
let b = 10;

console.log(a < b) //true
console.log(b < a) //false
console.log(a <= b)//true
console.log((a < b) && (a + b)) //15


//Kontrollstrukturen in JS

//If Statement

let big = 10;
let small = 5;

if (small <= big) {
  //console.log('das ist richtig!');
} else {
  //console.log('Bediengung nicht erfüllt');
}
console.log("test");

let number = 1;
numberCheck(number);

function numberCheck(number) {
  if (number < 1) {
    console.log("less than one");
  } else if (number < 2) {
    console.log("less than two, but more than one");
  } else {
    console.log("Greater than or equal to two");
  }
}

//Switch Statement

let character = "a";

switch (character) {
  case "a":
    console.log("eingabe war ein a");
    break;
  case "b":
    console.log("eingabe war ein b");
    break;
  case "c":
    console.log("eingabe war ein c");
    break;
  default:
    console.log("weder a,b noch c");
}



//FOR loop

for(let i = 1; i <= 10; i++){
console.log(i);
}







//Exercise7

let val = 11;
orderMyLogic(val);

function orderMyLogic(val) {
  if (val < 5) {
    console.log("less than 5");
  } else if (val < 10) {
    console.log("less then 10");
  } else {
    console.log("greater than or equal to 10");
  }
}

*/

//Exercise8

let num = 7;
testElseIf(num);
console.log(testElseIf(num));

function testElseIf(num) {
  if (num > 10) {
    return "greater than 10";
  }
  else if (num < 5) {
    return "smaller than 5";
  }else if(num ===7){
      return 'number is 7';
  }
   else {
    return "between 5 and 10";
  }
}

/*
 */
