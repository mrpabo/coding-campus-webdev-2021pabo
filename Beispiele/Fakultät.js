function produkt(n) {
  let sum = 1;
  if (n == 1) return n;
  for (i = 1; i <= n; i++) {
    sum = sum * i;
  }
  return sum;
}

function calculate() {
  let input = prompt("Bitte Zahl eingeben");
  let n = parseInt(input);
  let result = produkt(n);
  document.getElementById("fakultät").innerHTML = "Number is " + result;
}
