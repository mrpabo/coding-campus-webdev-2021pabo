// ##### SPEICHERN DER EINGABEN #####

// 1. Referenz zu HTML Elemente

const budgetForm = document.getElementById('budget-form');
const expensesForm = document.getElementById('expenses-form');

const budgetInput = document.getElementById('budget');
const expenseInput = document.getElementById('expense');
const expenseAmountInput = document.getElementById('expense-amount');

const submitBudget = document.getElementById('submit-budget');
const submitExpense = document.getElementById('submit-expense');

// Variablen für Werte
let budget = 0;
let sumOfExpenses = 0;
let balance = 0;
let expenses = [];

// 2. EventListener

submitBudget.addEventListener('click', saveBudget);
submitExpense.addEventListener('click', saveExpense);

// 3. Callback Funktionen
// a. Budget Speichern

function saveBudget() {
    const budgetInputValue = parseInt(budgetInput.value);

    if (isNaN(budgetInputValue)) {
        alert('Bitte geben Sie einen Wert');
        return;
    }

    if (budgetInputValue < 0) {
        alert('Bitte geben Sie einen positiven Wert');
        return;
    }

    // complicated -> prefer early return
    // if (!isNaN(budgetInputValue)) {
    //     if (budgetInputValue >= 0) {
    //         if (budgetInputValue < 10000) {

    //         } else {
    //             alert('Bitte geben Sie einen Wert kleiner 10000 ein.');
    //         }
    //     } else {
    //         alert('Bitte geben Sie einen positiven Wert');
    //     }
    // } else {
    //     alert('Bitte geben Sie einen Wert');
    // }

    if (budgetInputValue) {
        budget = budgetInputValue;
        updateBalance();
        budgetForm.reset();
    }
}

// b. Ausgabe speichern

function saveExpense() {
    const expenseInputValue = expenseInput.value;
    const expenseAmountInputValue = parseInt(expenseAmountInput.value);

    if (!expenseInputValue) {
        alert('Bitte geben Sie eine Beschreibung ein');
        return;
    }

    if (isNaN(expenseAmountInputValue)) {
        alert('Bitte geben Sie einen Betrag ein');
        return;
    }

    if (expenseAmountInputValue < 0) {
        alert('Bitte geben Sie einen positiven Wert');
        return;
    }

    const expenseObject = {
        title: expenseInputValue,
        amount: expenseAmountInputValue
    };

    expenses.push(expenseObject);
    updateSumOfExpenses();
    updateBalance();
    expensesForm.reset();
}

// ##### BERECHNUNG DER WERTE #####

// 1. Funktion zum Berechnen der Ausgabensumme
function updateSumOfExpenses() {
    sumOfExpenses = 0;
    expenses.forEach(expense => {
        sumOfExpenses += expense.amount;
    });
    updateUI();
}

// 2. Funktion zum Berechnen des Restbetrags
function updateBalance() {
    balance = budget - sumOfExpenses;
    updateUI();
}



// ##### UI #####

function updateUI() {
    displayValues();
    displayExpenses();
}

function displayValues() {
    const budgetOutput = document.getElementById('budget-output');
    const expensesOutput = document.getElementById('expenses-output');
    const balanceOutput = document.getElementById('balance-output');

    budgetOutput.innerHTML = budget;
    expensesOutput.innerHTML = sumOfExpenses;
    balanceOutput.innerHTML = balance;
}

function displayExpenses() {
    const expensesList = document.getElementById('expenses-list');
    expensesList.innerHTML = '';

    expenses.forEach(expense => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `${expense.title}: ${expense.amount} €`;
        expensesList.append(listItem);
    });
}