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

    let money, time;
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
    });


    //обработчик с доп.расходами
    optionalexpensesBtn.addEventListener('click', function(){
        for (let i = 0; i < optionalexpensesItem.length; i++) {
            let opt = optionalexpensesItem[i].value;
            appData.optionalExpenses[i] = opt;
            optionalExpensesValue.textConten += appData.optionalExpenses[i] + ' ';
        }   
    })
    
    // объект-хранилище
    let appData = {
        budget: money,
        timeData: time,
        expenses: {},
        optionalExpenses: {},
        income: [],
        savings: true,
        detectLevel: function() {
            appData.moneyPerDay = (appData.budget / 30).toFixed();
            if(appData.moneyPerDay) {
                alert(`ваш расход за день в месяц где-то ${appData.moneyPerDay}`);
            }
        },
        detectDayBudget: function() {
            if (appData.moneyPerDay < 700) {
                alert("вы умеете тратить деньги");
            }
            if (appData.moneyPerDay > 700 && appData.moneyPerDay < 2000) {
                console.log("нормально тратите, возможно надо посчитать ваши доходы");
            }
            if(appData.moneyPerDay > 2000 && appData.moneyPerDay >=4000) {
                alert('гуляй-шикуй!');
            }
            else {
                console.log("что-то пошло не так");
            }  
            console.log(appData.moneyPerDay);
        },
        checkSavings: function() {
            if (appData.savings == true) {
                let save = +prompt('сколько накопил?'),
                    percent = +prompt('под какой процент?');
                    
                appData.monthIncome = save/100/12*percent;
                alert(`доход в месяц с вашего депозита ${(appData.monthIncome).toFixed()}`);
                
            }
        },
        chooseIncome: function() {
            items = prompt('введите доп. доходы через зпт.', "");
            while (typeof items != 'string' || !items || items == null) {
                items = prompt('введите доп. доходы через зпт.', "");   
            }
            appData.income = items.split(', '); 
            //Если юзер вводит несколько значений, как их подпушить в массив?
            //Созздаем временнный массив, а потом схлопываем через .push.apply
            appData.income.push(prompt('может что-то запамятовали?', ""));
            appData.income.sort();
    
        },
        bonusesIncome: function() {
            appData.income.forEach((item, i) => {
                alert(`способы дополнительного заработка ${i+1} : ${item}`);
            }); 
        },
        showMeAll: function() {
            for (let key in appData) {
                console.log(`Наша программа включает в себя данные: ${appData[key]}`);
            };
        }
    
    
    };


