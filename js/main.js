'use strict';

let start = document.getElementById('start'),
    budgetValue = document.getElementsByClassName('budget-value')[0],
    daybudgetValue = document.getElementsByClassName('daybudget-value')[0],
    levelValue = document.getElementsByClassName('level-value')[0],
    expensesValue = document.getElementsByClassName('expenses-value')[0],
    optionalExpensesValue = document.getElementsByClassName('optionalexpenses-value')[0],
    incomeValue = document.getElementsByClassName('income-value')[0],
    monthSavingsValue = document.getElementsByClassName('monthsavings-value')[0],
    yearSavingsValue = document.getElementsByClassName('yearsavings-value')[0],
    mandatoryExpenses = document.getElementById('mandatory-expenses'),
    approve1 = document.getElementsByTagName('button')[0],
    approve2 = document.getElementsByTagName('button')[1],
    calculate = document.getElementsByTagName('button')[2],
    optionalExpensesInput = document.querySelectorAll('input.optionalexpenses-item'),
    chooseIncome = document.querySelector('input.choose-income'),
    inputSavings = document.querySelector('input#savings'),
    sumInput = document.querySelector('#sum'),
    percentInput = document.querySelector('#percent'),
    yearValue = document.querySelector('input.year-value'),
    monthValue = document.querySelector('input.month-value'),
    dayValue = document.querySelector('input.day-value');




console.log();