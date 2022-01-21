/*

alert("Hello");

//Array 


let names = ["Franz", "Klaus", "Max"]

console.log("Länge Array " + names.length);
console.log(names[1]);




//Arrays JS Exersices pdf

// Exercise 1

//Konstruktor
let people = new Array();

//Array-Literal
let people = ["Max", "Peter"];


//Exercise 2
var todoList = ["Bad Putzen", "Einkaufen"];



//Exercise 3
todoList.push("Rasen mähen");



//Exercise 4
todoList.unshift("Sport machen");


//Exercise 5
todoList.splice(2, 0, "Garage streichen", "Rollrasen verlegen", "Klo putzen");




//Exercise 6
todoList.pop();


//Exercise 7
todoList.shift();


//Exercise 8
todoList.splice(1, 2);
console.log(todoList);

//Exercise 9
let newTodoList = todoList.slice(1, 3);
console.log(newTodoList);

//Exercise 10
let names = ["Klaus", "Xaver", "Peter", "Andreas"];
console.log(names);

//Exercise 11
names.reverse(3, 1);
let nameAsString = names.toString();
console.log(names);
console.log(nameAsString);

//Exercise 12
for (let i = 0; i < names.length; i++){
    console.log(names[i]);
}

//Exercise 13
names.forEach(name => console.log("Hallo " + name));

//Exercise 14
console.log(names.sort());

//Exercise 15 Lösung1
var arr = [2, 45, 3, 67, 34, 567, 34, 345, 123];
var largest = arr[0];

for (var i = 0; i < arr.length; i++) {
  if (largest < arr[i]) {
    largest = arr[i];
  }
}
console.log(largest);

//Exercise 15 LÖsung2
let numbers = [2, 45, 3, 67, 34, 567, 34, 345, 123];
let largestNumber = 0;
for (let i = 0; i < numbers.length; i++){
    //wenn Zahl größer als bisher größte, dann speichere in largestNumber
    if (numbers[i] > largestNumber) {
        largestNumber = numbers[i];
    }
}
console.log(largestNumber);


//Exercise 16   (21.Jänner 22)
console.log(arr.sort((a, b) => a - b));

console.log(numbers.sort((a, b) => a - b));




//Exercise 17
let books = [
  { author: "Bill Gates", title: "The Road Ahead", bookId: 1254 },
  { author: "Steve Jobs", title: "Walter Isaaccson", bookId: 4264 },
  {
    author: "Suzanne Collins",
    title: "Mockingjay: The Final Book Of The Hunger Games",
    bookId: 3245,
  },
];
console.log(books.sort((a, b) => (a.title > b.title ? 1 : -1)));


*/

/*
*/
