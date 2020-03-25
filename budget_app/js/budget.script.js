//N.B.  Если не можешь достучаться до единственного эл-та через .getElementsByClassName, то нужно через
// индекс .getElementsByClassName[0] без индекса код не поймет что это объект...надо уточнить





let startButton = document.getElementById('start'),
    budgetValue = document.getElementsByClassName('budget-value')[0],
    daybudgetValue = document.getElementsByClassName('daybudget-value')[0],
    levelValue = document.getElementsByClassName('level-value')[0],
    expensesValue = document.getElementsByClassName('expenses-value')[0],
    optionalExpensesValue = document.getElementsByClassName('optionalexpenses-value')[0],
    incomeValue = document.getElementsByClassName('income-value')[0],
    monthSavingsValue = document.getElementsByClassName('monthsavings-value')[0],
    yearsavingsValue = document.getElementsByClassName('yearsavings-value')[0],
    //get Inputs 
    expensesItems = document.getElementsByClassName('expenses-item'),
    //Утвердить/рассчитать
    expensesItemBtn = document.getElementsByTagName('button')[0],
    optionalexpensesBtn = document.getElementsByTagName('button')[1],
    countBudgetBtn = document.getElementsByTagName('button')[2],
    //get optional Expenses Inputs
    optionalexpensesItem = document.querySelectorAll('.optionalexpenses-item'),
    // other items
    chooseIncome = document.querySelector('.choose-income'),
    checkboxSavings = document.querySelector('.checksavings input'),
    chooseSum = document.querySelector('.choose-sum'), 
    choosePercent = document.querySelector('.choose-percent'),
    yearValue = document.querySelector('.year-value'),
    monthValue = document.querySelector('.month-value'),
    dayValue = document.querySelector('.day-value');





    // (статьи возможного дохода, чекбокс, сумма, процент, год, месяц, день)





console.log(startButton);
console.log(budgetValue);



