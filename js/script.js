'use strict';

let startBtn = document.getElementById('start'),
    budgetValue = document.getElementsByClassName('budget-value')[0],
    daybudgetValue = document.getElementsByClassName('daybudget-value')[0],
    levelValue = document.getElementsByClassName('level-value')[0],
    expensesValue = document.getElementsByClassName('expenses-value')[0],
    optionalExpensesValue = document.getElementsByClassName('optionalexpenses-value')[0],
    incomeValue = document.getElementsByClassName('income-value')[0],
    monthSavingsValue = document.getElementsByClassName('monthsavings-value')[0],
    yearSavingsValue = document.getElementsByClassName('yearsavings-value')[0],
    expensesItem = document.getElementsByClassName('expenses-item'),
    approve1 = document.getElementsByTagName('button')[0],
    approve2 = document.getElementsByTagName('button')[1],
    calculate = document.getElementsByTagName('button')[2],
    optionalExpensesInput = document.querySelectorAll('input.optionalexpenses-item'),
    chooseIncome = document.querySelector('input.choose-income'),
    checkSavings = document.querySelector('input#savings'),
    sumInput = document.querySelector('#sum'),
    percentInput = document.querySelector('#percent'),
    yearValue = document.querySelector('input.year-value'),
    monthValue = document.querySelector('input.month-value'),
    dayValue = document.querySelector('input.day-value');


let money, time;

approve1.disabled = true;
approve2.disabled = true;
calculate.disabled = true;


function checkInputsData(incomingArr) {
    for (let i = 0; i < incomingArr.length; i++) {
        if(incomingArr[i].value == '') {
            return true;
        }
    }
    return false;
}


startBtn.addEventListener ('click', function () {

    time = prompt ("Введите дату в формате YYYY-MM-DD", "");
    money = +prompt ("Ваш бюджет на месяц?", "");

    while (isNaN(money) || money == "" || money == null) {
        money = +prompt ("Ваш бюджет на месяц?", ""); 
    }

    appData.budget = money;
    appData.timeData = time;
    budgetValue.textContent = money.toFixed();
    yearValue.value = new Date (Date.parse(time)).getFullYear();
    monthValue.value = new Date (Date.parse(time)).getMonth() + 1;
    dayValue.value = new Date (Date.parse(time)).getDate();
    approve1.disabled = false;
    approve2.disabled = false;
    calculate.disabled = false;

});

let sum;


approve1.addEventListener('click', function () {

    if (checkInputsData(expensesItem) == false) {
         sum = 0;

        for (let i = 0; i < expensesItem.length; i++) {
            let a = expensesItem[i].value,
                b = expensesItem[++i].value;
        
            if ( typeof(a)==='string' && typeof(a) != null && typeof(b) != null && a != "" && b != "" && a.length < 50) {
        
                appData.expenses[a] = b;
                sum += +b;
            } else {
    
                i--;
            }
        
        };
        expensesValue.textContent = sum;
    } else {
        expensesValue.textContent = 'Недостаточно данных';
    }

});


approve2.addEventListener ('click', function () {

    if (checkInputsData(optionalExpensesInput) == false) {
        for (let i = 0; i < optionalExpensesInput.length; i++) {
            let questionOptExpenses = optionalExpensesInput[i].value;
            appData.optionalExpenses[i] = questionOptExpenses;
            optionalExpensesValue.textContent += appData.optionalExpenses[i] + ' ';
        }
    } else {
        optionalExpensesValue.textContent = '';
    }
});


calculate.addEventListener('click', function () {

    if (appData.budget != undefined ) {

        appData.moneyPerDay = ((appData.budget + sum)/ 30).toFixed();
        daybudgetValue.textContent = appData.moneyPerDay;
    
        if (appData.moneyPerDay < 100) {
            levelValue.textContent = "Минимальный уровень достатка!";
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            levelValue.textContent = "Средний уровень достатка!";
        } else if (appData.moneyPerDay > 2000) {
            levelValue.textContent = "Высокий уровень достатка!";
        } else {
            levelValue.textContent = "Произошла ошибка!";
        }
    
    } else {
        daybudgetValue.textContent = "Произошла ошибка!";
    }


});


chooseIncome.addEventListener ('input', function () {
    let items = chooseIncome.value;
    appData.income = items.split(", ");
    incomeValue.textContent = appData.income;
});


checkSavings.addEventListener('click', function () {
    if (appData.savings == true) {
        appData.savings = false;
    } else {
        appData.savings = true;
    }
});

sumInput.addEventListener('input', function () {
    if(appData.savings == true) {
        let sum = +sumInput.value,
            percent = +percentInput.value;

        appData.monthIncome = sum/100/12*percent;
        appData.yearIncome = sum/100*percent;

        monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
        yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
    }
});

percentInput.addEventListener('input', function () {
    if(appData.savings == true) {
        let sum = +sumInput.value,
            percent = +percentInput.value;

        appData.monthIncome = sum/100/12*percent;
        appData.yearIncome = sum/100*percent;

        monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
        yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
    }
});


    
let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};