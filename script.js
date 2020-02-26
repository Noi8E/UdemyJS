//

let money, time;
function start () {
    money = +prompt("Ваш бюджет на месяц?");
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

let requiredExpense, spendValue;
function chooseExpenses() {
    for(let i = 0; i < 2; i++) {
        // тут непонятно, как конкретезировать пару вопрос-ответ?
        requiredExpense = prompt("Введите обязательную статью расходов в этом месяце"),
        spendValue = +prompt("Во сколько обойдется?");
    
         if ( (typeof(requiredExpense)) === 'string' && (typeof(spendValue)) != null && requiredExpense != '' && spendValue != '' && requiredExpense.length < 50  ) {
                appData.expenses[requiredExpense] = spendValue;
         }
         else {
            i -= 1;
         }
    
    };
}
chooseExpenses();

appData.moneyPerDay = (appData.budget / 30).toFixed(); 

// считаем расход на день. Скругление до целого в меньшую сторону. Можно и через ифы, но пока рановато усложнять.

//Показать юзеру средний расход за день при известном доходе
alert(`ваш расход за день в месяц где-то ${appData.moneyPerDay}`);
// 
// 

// Оформляем дневной расход денег. Оборачиваем в функцию.

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


// !делаем через while-loop
// let i = 0;
// while ( i < 2) {
//     let requiredExpense = prompt("Введите обязательную статью расходов в этом месяце"),
//         spendValue = +prompt("Во сколько обойдется?");
//     i += 1;    

//     if ( (typeof(requiredExpense) ) === 'string' && (typeof(spendValue)) != null 
//      && requiredExpense != '' && spendValue != '' && requiredExpense.length < 50  ) {
//             appData.expenses[requiredExpense] = spendValue;
//     }

//      else {
//         alert("Данные введены некорректно, обновите страницу");
//     }
// };
// !делаем через do {} while()
// let i = 0;
// do {
//     let requiredExpense = prompt("Введите обязательную статью расходов в этом месяце"),
//         spendValue = +prompt("Во сколько обойдется?");
       
    
//     if ( (typeof(requiredExpense) ) === 'string' && (typeof(spendValue)) != null && requiredExpense != '' && spendValue != '' && requiredExpense.length < 50  ) {
//                 appData.expenses[requiredExpense] = spendValue; 
//                 i += 1; }
//     else {
//         alert("Данные введены некорректно, обновите страницу");
//     }            
    
//     } while ( i < 2);