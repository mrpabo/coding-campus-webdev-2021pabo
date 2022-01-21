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








//Bspl. Gerdae Zahlen bis 100 pdf

//Bspl. Text umgekehrt ausgeben pdf

//Bspl. Fibonacci bis 100 pdf










//Exercise 9 (13.Jänner 22) debugger;


function findTheRightSize(num) {
  if (num < 5) {
    return "tiny";
  } else if (num < 10) {
    return "Small";
  } else if (num < 15) {
    return "MEdium";
  } else if (num < 20) {
    return "LARge";
  } else {
    return "HUGE";
  }
}

const size = findTheRightSize(22);


console.log(size);
console.log("Die Größe ist: " + size);









//Exercise 10 Lösung 1


function showValueForStatusCode(statusCode) {
  switch (statusCode) {
    case 1:
      alert("Alpha");
      break;
    case 2:
      alert("Beta");
      break;
    case 3:
      alert("Gamma");
      break;
    case 4:
      alert("Delta");
      break;

    default:
      alert("Der Statuscode ist: Unbekannter Wert");
      break;
  }
}
showValueForStatusCode(1);




//Exercise 10 Lösung 2


function showValueForStatusCode(statusCode) {
  switch (statusCode) {
    case 1:
      statucCodeValue = "Alpha";
      break;
    case 2:
      statucCodeValue = "Beta";
      break;
    case 3:
      statucCodeValue = "Gamma";
      break;
    case 4:
      statucCodeValue = "Delta";
      break;
    default:
      statucCodeValue = "Unbekannter Wert";
      break;
   }  
  console.log("Der Wert für den StatusCode lautet: " + statucCodeValue);
}    
showValueForStatusCode(3);













//Exercise 11 Lösung 1

function isNumberEvenOrOdd(number) {
  if (number % 2 == 0) {
    return 'Even';
  }
  return 'Odd';
}

console.log(isNumberEvenOrOdd(4));



//Exercise 11 Lösung 2

function isNumberEvenOrOdd(number) {
  if (number % 2 == 0) {
    return "Even";
  }
  return "Odd";
}

const userInput = prompt("Bitte geben Sie eine Zahl ein.");
console.log(isNumberEvenOrOdd(userInput));











//Exercise 12

function boolToWorld(bool) {
  
  if (bool == true) {
    return 'Yes';
  }
  return 'No';
}

const yesOrNo = boolToWorld(false);
alert(yesOrNo);














//Exercise 13

function multiplyWithIndex(baseNumber) {
  const startIndex = 2;
  const endIndex = 16;

  for (let i = startIndex; i <= endIndex; i += 2) {
    const result = baseNumber * i;
    //console.log(`${baseNumber} multipliziert mit ${i} = ${baseNumber * i}`);
    console.log(baseNumber + "multipliziert mit " + i + " = " + result + ".");
  }
}

multiplyWithIndex(2);





//Ecercise 14 (20.Jänner 22)
//wenn es regnet Schirm --> true
//wenn cloudy UND chance > 20% --> true
//wenn sunny und chance > 50% --> true
//wenn sunny und chance < 50% --> false
//alles andere false

function takeUmbrella(weather, chance) {
  if (weather == "rainy") {
    return "Ja Logisch";
  } else if (weather == "cloudy" && chance > 0.2) {
    return "Ja";
  } else if (weather == "sunny" && chance > 0.5) {
    return "Ja, sicher ist sicher";
  } else {
    return "Nein";
  }
}

console.log("Regenschirm mitnehmen? " + takeUmbrella("sunny", 0.7));



//Exercise 14 kurze Lösung

function takeUmbrella(weather, chance) {
  if (weather == "rainy") return true;
  if (weather == "cloudy" && chance > 0.2) return true;
  if (weather == "sunny" && chance > 0.5) return true;
  return false
}

console.log("Regenschirm mitnehmen? " + takeUmbrella("sunny", 0.9));



//Exercise 15

//wenn XY dann....
//wenn XY2 dann....
//Ansonsten.....

function rps(p1, p2) {
  let result;

  if (p1 == p2) {
    result = "draw";
  } else if (p1 == "rock" && p2 == "scissors") {
    result = "Player 1 won!";
  } else if (p1 == "scissors" && p2 == "paper") {
    result = "Player 1 won!";
  } else if (p1 == "paper" && p2 == "rock") {
    result = "Player 1 won!";
  } else {
    result = "Player 2 won!";
  }

  console.log(result);
}

rps("rock", "paper");




//Exercise 16


//number = Anzahl Zeile
//todo: Zeile ausgeben
//1.Zeile 1 / 2.Zeile 1 2 / 3.Zeile 1 2 3


function printPattern(range) {
  for (let i = 1; i <= range; i++) {
    let str = "";
    for (let j = 1; j <= i; j++) {
      str += j + " ";
    }
    console.log(str);
  }
}
printPattern(10);








*/



