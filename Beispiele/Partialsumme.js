function partialSum(x) {
  let sum = 0;
  if (x == 1) return x;
  for (i = 1; i <= x; i++) {
    sum = sum + i;
    }
    return sum;
}





function calculate() {
    let input = prompt("Bitte Zahl eingeben");
    let x = parseInt(input);
    let result = partialSum(x);
    document.getElementById("partialSum").innerHTML = "partial Number is " + result ;
}
