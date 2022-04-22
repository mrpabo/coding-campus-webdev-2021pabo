export const person = {
  firstName: "Elon",
  lastName: "Musk",
  twitter: "@elonmusk",
  company: "Space X",
  cars: ["Tesla", "BMW", "Kia"],
  isPossibleToContact: true,
  phoneNumber: "001 925 8675309",
};

//Objekte & Referenzen:

//const person2 = person
//console.log(person2.firstName)//console.log(person.firstName)
//person2.firstName = "Doro";
//console.log("Name Person 2 geändert:");
//console.log(person2.firstName);
//console.log(person.firstName);

//Objekte kopieren

//const newPerson = new Object();
//const copiedPerson = Object.assign(newPerson, person);
//copiedPerson.firstName = "Patric";
//copiedPerson.company = "Boso Space";
//console.log(copiedPerson);
//console.log(person);

//Spread operator
const person1 = {
  name: "Pius",
  country: "Austria",
};
let person2 = person1;
let person3 = {
  ...person1,
  age: 28,
};
person2.name = "Martin";
person3.name = "Daniel"; noch

console.log(person1);
console.log(person2);
console.log(person3);
