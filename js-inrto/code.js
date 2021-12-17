function writeToConsole(value) {
  console.log(value);
}

writeToConsole("Hello World");

document.getElementById("heading").innerHTML = "My New Calculator";
document.getElementById("heading").style = "color:green";

var name = "Patric";
var age = 37;
var height = 1.76;
var isStudent = false;
var diploma = undefined;
var projekt = null;
var myFirstFunction = writeToConsole;

var Patric = {
  name,
  age,
  height,
  isStudent,
  diploma,
  projekt,
  myFirstFunction,
};
function calculate() {
  // load input values
  var number1 = parseInt(document.getElementById("number1").value);
  var number2 = parseInt(document.getElementById("number2").value);

  /*if(isNaN (number1) || isNaN (number2)) {
      alert("Es müssen beide Zahlen eingegeben werden .");
      return;
  }*/
  if (isNaN(number1)) {
    number1 = 0;
  }

  if (isNaN(number2)) {
    number2 = 0;
  }

  // calculate result
  var result = number1 + number2;

  //write result
  document.getElementById("result").value = result;
}
