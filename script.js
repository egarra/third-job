'use strict'

let money = prompt("Ваш бюджет на месяц?", "");
let time = prompt("Введите дату в формате YYYY-MM-DD", "");

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

let firstQuestion = prompt("Введите обязательную статью расходов в этом месяце", "");
let secondQuestion = prompt("Во сколько обойдется?", "");
let thirdQuestion = prompt("Введите необязательную статью расходов в этом месяце", "");
let fourthQuestion = prompt("Во сколько обойдется?", "");

appData.expenses.firstQuestion = secondQuestion;
appData.expenses.thirdQuestion = fourthQuestion;

alert(appData.budget / 30);
alert(key in appData);