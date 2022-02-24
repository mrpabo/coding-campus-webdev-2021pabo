//1.Usereingabe/Formulare(HTML)
//2.Speichern der Eingaben
//  1.Referenz zu Eingabefelder-> in globalen Variablen speichern
//  2.eventlistener für Speichern Button ODER Formular
//  3.Funktionen (callbacks) für Eventlistener
//    a.Globale Variable "budget" und Eingabewert darin speichern
//    b.Ausgaben in Array speichern (Text+Betrag)
//3.Berechnen der Werte
//4.Ausgabe in HTML

//1.Referenz zu Eingabefelder-> in globalen Variablen speichern
//  HTML Eingaben speichern
const budgetInput = document.getElementById("budget");
const expenseInput = document.getElementById("expense");
const expenseAmountInput = document.getElementById("expense-amount");

const submitBudget = document.getElementById("submit-budget");
const submitExpense = document.getElementById("submit-expense");

//Variablen für Werte
let budget = 0;
let sumOfExpenses = 0;
let balance = 0;
let expenses = [];


//2.EventListener
submitExpense.addEventListener("click", saveExpense);
submitBudget.addEventListener("click", saveBudget);

//3.Callback Funktionen
//  a.Budget speichern
function saveBudget() {
  const budgetInputValue = parseInt(budgetInput.value);

  if (budgetInputValue) {
    budget = budgetInputValue;
    calculateBalance();
  }
}
//  b. Ausgabe speichern
function saveExpense() {
  const expenseInputValue = expenseInput.value;
  const expenseAmountInputValue = parseInt(expenseAmountInput.value);

  if (expenseAmountInputValue && expenseInputValue) {
    const expenseObject = {
      title: expenseInputValue,
      amount: expenseAmountInputValue,
    };

    expenses.push(expenseObject);
    calculateSumOfExpenses()
    calculateBalance();
    document.getElementById("expense").innerText = budget;
    document.getElementById("balance").innerText = balance;
    const newExpense = document.createElement("div");
    newExpense.innerText = `-${ expenseObject.amount } ${ expenseObject.title }`;
    document.getElementById("result").appendChild(newExpense);
  }
}

//3.Berechnen der Werte
//  a.Funktion zum berechnen der Ausgabensumme
function calculateSumOfExpenses() {
  sumOfExpenses = 0;
  expenses.forEach(expense => {
    sumOfExpenses += expense.amount;
  });
  
}

//  b.Funktionen zum berechnen des Restbetrags
function calculateBalance() {
  balance = budget - sumOfExpenses;
  
}

//4.Ausgabe in HTML