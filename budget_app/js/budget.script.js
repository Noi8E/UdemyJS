let startButton = document.getElementById('start'),
    budgetValue = document.getElementsByClassName('budget-value')[0],
    daybudgetValue = document.getElementsByClassName('daybudget-value')[0],
    levelValue = document.getElementsByClassName('level-value')[0],
    expensesValue = document.getElementsByClassName('expenses-value')[0],
    optionalExpensesValue = document.getElementsByClassName('optionalexpenses-value')[0],
    incomeValue = document.getElementsByClassName('income-value')[0],
    monthSavingsValue = document.getElementsByClassName('monthsavings-value')[0],
    yearsavingsValue = document.getElementsByClassName('yearsavings-value')[0];








console.log(startButton);
console.log(budgetValue);



//N.B.  Если не можешь достучаться до единственного эл-та через .getElementsByClassName, то нужно через
// индекс .getElementsByClassName[0] без индекса код не поймет что это объект...надо уточнить


/* <div class="budget">Доход: </div>
<div class="budget-value"></div>

<div class="daybudget">Бюджет на 1 день: </div>
<div class="daybudget-value"></div>

<div class="level">Уровень дохода: </div>
<div class="level-value"></div>

<div class="expenses">Обязательные расходы: </div>
<div class="expenses-value"></div>

<div class="optionalexpenses">Возможные траты: </div>
<div class="optionalexpenses-value"></div>

<div class="income">Дополнительный доход: </div>
<div class="income-value"></div>

<div class="monthsavings">Накопления за 1 месяц:</div>
<div class="monthsavings-value"></div>

<div class="yearsavings">Накопления за 1 год:</div>
<div class="yearsavings-value"></div> */