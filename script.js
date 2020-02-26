//Памятка по курсу:
// + перед выражением делает выражение is Number
// Number.isNaN() - способ определить - является ли полученный аргумент is Number или нет
// для нумеровния чего-либо можно использовать счетчик (i)
// Запоминание чего-то в объек
let money, time;
function start () {
        money = +prompt("Ваш бюджет на месяц?"),
        time = prompt("Введите дату в формате YYYY-MM-DD");

    while (isNaN(money) || money === '' || money === null) {
        money = +prompt("Ваш бюджет на месяц2?");
    }
}
start();



let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true
};
// функция для записи статей расходов и трат в appData.obj
function chooseExpenses() {
    for(let i = 0; i < 2; i++) {
        // тут непонятно, как конкретезировать пару вопрос-ответ?
        let requiredExpense = prompt("Введите обязательную статью расходов в этом месяце"),
            spendValue = +prompt("Во сколько обойдется?");
    
         if ((typeof(requiredExpense)) === 'string' && (typeof(spendValue)) != null && requiredExpense != '' && spendValue != '' && requiredExpense.length < 50  ) {
                appData.expenses[requiredExpense] = spendValue;
         }
         else {
            i -= 1;
         }
    
    };
}
chooseExpenses();
//записываем необязательные расходы
function chooseOptExpenses() {
    for (i = 1; i <= 3; i++) {
        let optionalExpenses = prompt(`статья необязательных расходов?`);
        appData.optionalExpenses[i] = optionalExpenses;
    }   
};
chooseOptExpenses();

// считаем расход на день. 
function detectLevel() {
    appData.moneyPerDay = (appData.budget / 30).toFixed();
    if(appData.moneyPerDay) {
        alert(`ваш расход за день в месяц где-то ${appData.moneyPerDay}`);
    }
};
detectLevel();
 

function detectDayBudget() {
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
    
    console.log(appData);

};
detectDayBudget();


function checkSavings() {
    if (appData.savings == true) {
        let save = +prompt('сколько накопил?'),
            percent = +prompt('под какой процент?');
            
        appData.monthIncome = save/100/12*percent;
        alert(`доход в месяц с вашего депозита ${(appData.monthIncome).toFixed()}`);
        
    }
}
checkSavings();
//