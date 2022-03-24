/*
*/

console.log("hello world");
// node recap.js im Terminal node js ausführen ohne Browser/Laufzeitumgebung

//Variablen
const string = "hello world";

//TemplateString können auch Umbrüche
const templateString = "wir haben hier mehrere Zeilen: ${string} mit Umbruch";

//number
const integer = 16;
const decimal = 0.5;

//boolean
const boolean = true;
const nullTyp = null;
const emptyVariable = undefined;

//Types: scopes(=Gültikeitsbereich) curly braces
{
  var global = "exists globally";
  const localImmutable = "constant value(not chancable)";
  //localImmuatble = 'ohne';
  let localMuatble = "chaneable value";
}
console.log(global); // wird global angelegt
//console.log(localImmutable);

//container/collections
const array = ["eins", "zwei", "drei"];
array.push("vier");
const itemAtIndex = array[1]; //zwei
const firstItem = array.shift(); //eins
const lastItem = pop(); //vier

// LIFO = last in-first out /Stack(Stapel)
// FIFO = first in-first out /Queue(Warteschlange)

//Objekte
const object = {
  firstProperty: "value",
  secondProperty: 42,
};
object.firstProperty;
object["secondProperty"];

const map = new Map();
map.set("key", "value");
map.set("name", "test");
console.log(map.get("name"));
map.set("name", "daniel");
console.log(map.get("name"));
 
//control structures

//conditional flow

// der erste der zutrifft
if (true) {
  console.log("if");
} else if (true) {
  console, log("else if");
} else {
  console.log("else");
}

const value = Math.floor(Math.random() * 5);
switch (value) {
  case 0: //wenn 0=>
    console.log("value is zero");
    break;

  case 1:
  case 2: //wenn 1 oder 2=>
    console.log("value is 1 oder 2");

    break;
  default:
    //sonst =>
    console.log(`value is ${value}.`);
}

// loops

//while Kopfgesteuert                       /while(true){......} bei Steuerungen,Automaten,Spiele
let condition = true;
while (condition) {
  console.log("first run");
  //break;
  condition = false;
}

// do-while Fußgesteuert
do {
  console.log("first run");
} while (condition); // erster Durchlauf immer

// for Zählerschleifen

const array = ["1", "2", "3"];
//for-counter =   Anzahl
for (let index = 0; index < array.length; index++) {
  console.log(array[index]);
}

//for-of =   Arrays =>Wert
for (const item of array) {
  console.log(item);
}

//for-in =   Arrays =>Index
for (const index in array) {
  if (index == "1") {
    break; //conditional flow in loops
  }
  console.log(array[index]);
}

//conditional flow in loops
//continune
for (const index in array) {
  console.log(array[index]);
  if (index == "0") {
    continue;
  }
}

//programstructures

function myFunction(parameterOne, parameterTwo) {
  console.log("parameters:§{ parameterOne },§{ parameterTwo }");
  //return value;
}

// mit Klassen
class Example {
  constructor(value) {
    this.value = value;
  }
  getValue = () => this.value;
}

const ex = new Example("daniel");
console.log(ex.getValue());

//utils
Math.random();
Math.PI;
console.log(Math.PI);

Number.parseInt("42");
console.log(Number.parseInt);

Number.MAX_VALUE;
console.log(Number.MAX_VALUE);

console.log(JSON.parse('{"hey":"ho"}'));


Date.new();
new Date();
