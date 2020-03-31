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
    yearSavingsValue = document.getElementsByClassName('yearsavings-value')[0],
    //get Inputs 
    expensesItems = document.getElementsByClassName('expenses-item'),
    //Утвердить/рассчитать
    expensesItemBtn = document.getElementsByTagName('button')[0],
    optionalexpensesBtn = document.getElementsByTagName('button')[1],
    countBudgetBtn = document.getElementsByTagName('button')[2],
    //get optional Expenses Inputs
    optionalexpensesItem = document.querySelectorAll('.optionalexpenses-item'),
    // other items
    incomeItem = document.querySelector('.choose-income'),
    checkboxSavings = document.querySelector('.checksavings input'),
    sumValue = document.querySelector('.choose-sum'), 
    percentValue = document.querySelector('.choose-percent'),
    yearValue = document.querySelector('.year-value'),
    monthValue = document.querySelector('.month-value'),
    dayValue = document.querySelector('.day-value');

    let money, time;

    //Делаем баттоны задизейбленными, пока не стартанула прога
    expensesItemBtn.disabled = true;
    optionalexpensesBtn.disabled = true;
    countBudgetBtn.disabled = true;

    //если кнопка НАЧАТЬ РАССЧЕТ еще не нажата - дизэйблим все кнопки
    //корячим обработчик + функцию с обработкой введенных величин
    startButton.addEventListener('click', function() {
        time = prompt("Введите дату в формате YYYY-MM-DD"),
        money = +prompt("Ваш бюджет на месяц?");
    
        while (isNaN(money) || money === '' || money === null) {
            money = +prompt("Ваш бюджет на месяц2?");
        }
        appData.budget = money;
        appData.timeData = time;
        budgetValue.textContent = money.toFixed();
        //если у нас инпут, то работаем с .value
        yearValue.value = new Date(Date.parse(time)).getFullYear();
        monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
        dayValue.value = new Date(Date.parse(time)).getDate();

        //переключаем кнопки в Enabled
        expensesItemBtn.disabled = false;
        optionalexpensesBtn.disabled = false;
        countBudgetBtn.disabled = false;
    })
    //готовим константу, в которую положим кол-во инпутов для обязателных расходов
    //выносим ее в область глобальной видимости ибо мжем себе позволить
    //она считает именно общее кол-во инпутов, т.к. нам нужно знать общее значение аллертов
    //Сегментирование по конкретным типам инпутов будет происходит именно в цикле
    const expensesInputsValue = expensesItems.length;
    //корячим обработчик + функцию с суммой обязательных расходов.
    expensesItemBtn.addEventListener('click', function(){
    //переменная, в которую суммируем все расходы
        let sum = 0; 
        for(let i = 0; i < expensesInputsValue ; i++) {
            let a = expensesItems[i].value;
            let b = expensesItems[++i].value;
                if ((typeof(a)) === 'string' && (typeof(b)) != null && a != '' && b != '' && a.length < 50  ) {
            appData.expenses[a] = b;
            sum += +b;
            }
            else {
                i -= 1;
                alert('Вы ввели невалдиные данные');
            }
        }
        expensesValue.textContent = sum + ' рублей';
        //закидываем значение в appData--> глобальную область видимости
        appData.sumExpenses = sum;
        
    });
    



    //обработчик с доп.расходами
    optionalexpensesBtn.addEventListener('click', function() {
        for (let i = 0; i < optionalexpensesItem.length; i++) {
            appData.optionalExpenses[i] = optionalexpensesItem[i].value;
            optionalExpensesValue.textContent += appData.optionalExpenses[i] + ' ';
        }   
    });
    // обработчик с бюджетом
    countBudgetBtn.addEventListener('click', function() {

        if (appData.budget != undefined) {
            appData.moneyPerDay = ((appData.budget - appData.sumExpenses)/30).toFixed();
            daybudgetValue.textContent = appData.moneyPerDay;

        if (appData.moneyPerDay < 400) {
            levelValue.textContent = 'вы умеете тратить деньги';
        }
        if (appData.moneyPerDay > 400 && appData.moneyPerDay < 2000) {
            levelValue.textContent = 'нормально тратите, возможно надо посчитать ваши доходы';
        }
        if (appData.moneyPerDay > 2000 && appData.moneyPerDay >=4000) {
            levelValue.textContent = 'гуляй-шикуй!';
        }
        else {
            levelValue.textContent = 'что-то пошло не так';
        }  
        } else {
            levelValue.textContent = 'ашипка';
        }
    });

    incomeItem.addEventListener('input', function () {
        let items = incomeItem.value;
        appData.income = items.split(', ');
        incomeValue.textContent = appData.income;
           
    });

    //пробиваем накопления пассажира
    checkboxSavings.addEventListener('click', function(){
        if (appData.savings) {
            appData.savings = false;
        }
        else {
            appData.savings = true;
        }
    })

    sumValue.addEventListener('input', function() {
        if (appData.savings == true) {
            let sum = +sumValue.value,
                percent = +percentValue.value;
            appData.monthIncome = sum/100/12*percent;
            appData.yearIncome = sum/100*percent;

            monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
            yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
        }
    })
    percentValue.addEventListener('input', function() {
        if(appData.savings == true) {
            let sum = +sumValue.value,
                percent = +percentValue.value;
            appData.monthIncome = sum/100/12*percent;
            appData.yearIncome = sum/100*percent;

            monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
            yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
        }
    })
    
    // объект-хранилище
    let appData = {
        budget: money,
        timeData: time,
        expenses: {},
        optionalExpenses: {},
        income: [],
        savings: false,
    };


