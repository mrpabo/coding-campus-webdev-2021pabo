/*
const cars = ["skoda", "vw", "audi", "bmw", "mercedes", "kia"];
cars.forEach((car) => {
  if (car == "vw") {
    console.log("My fav car is vw");
  } else if (car == "kia") {
    console.log("My fav car is also kia");
  }
});
//---------------------------------------------------------------

let person = {
  name: "Max Mustermann",
  age: 22,
  street: "Müllerstraße 5",
  hair: "Black",

  printDescription: function () {
    console.log.isPrototypeOf;
    (this.name + "is" + this.age + "years old").value;
  },
};

console.log(person);
//--------------------------------------------------------------




//DotNotation --> Destructing
const chips = {
  brand: "blue",
  weight: "200g",
  price: "3.99€",
};

function getBrandName(product) {
  titleTag.textContent = product.brand();
  return titleTag;

  getBrandName(chips);
}
console.log(chips.weight);
*/
//-----------------------------------------------------------------

const patric = {
  firstName: "patric",
  lastName: "boso",
  haircolor: "brown",
  hairlength: "long",
  size: "1,76cm",
};

//console.log(Object.values(patric));

function displayName(patric) {
  const nameTag = document.createElement("h1");
  nameTag.innerText = `${patric.firstName} || ${patric.lastName}`;
    return nameTag;
}
//document.body.appendChild(displayName(patric));

const body = document.getElementsByName("body");
console.log(body)
const nameElement = displayName(patric);
document.body.appendChild(nameElement);

//-----------------------------------------------------------------



